// Bonszahé — pré-rendu pour le référencement (Cloudflare Pages Functions).
// Chaque page reçoit son titre, sa description, son adresse canonique, ses aperçus de partage,
// ses données structurées et un contenu HTML lisible sans JavaScript. Le site s'affiche ensuite normalement.
import '../site/seo.js';

const SEO = globalThis.BZSEO;
const CANONICAL_HOST = 'bonszahe.com';
const REDIRECT_HOSTS = ['www.bonszahe.com', 'bonszahe.pages.dev'];
const WIX_CLIENT_ID = '5ead703b-03d1-45f5-8049-74802f2b86f2';
const API = 'https://www.wixapis.com';
const CACHE_KEY = 'https://bonszahe.com/__bz_seo_data_v1';
const CACHE_SECONDS = 600;
const FILE_RE = /\.[a-z0-9]{2,5}$/i;

// Date du jour à Mayotte (UTC+3), au format des dates du CMS.
function todayMayotte() {
  const now = new Date(Date.now() + 3 * 3600e3);
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

async function queryAll(token, collection) {
  let out = [], offset = 0;
  for (let i = 0; i < 5; i++) {
    const r = await fetch(API + '/wix-data/v2/items/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ dataCollectionId: collection, query: { paging: { limit: 1000, offset } }, returnTotalCount: true })
    });
    if (!r.ok) throw new Error(collection + ' ' + r.status);
    const j = await r.json();
    const items = (j.dataItems || []).map(x => x.data || {});
    out = out.concat(items);
    const total = j.pagingMetadata && j.pagingMetadata.total;
    if (!items.length || !total || out.length >= total) break;
    offset = out.length;
  }
  return out;
}

// Données du CMS Wix, gardées 10 minutes en cache.
async function cmsData(ctx) {
  const cache = caches.default;
  const key = new Request(CACHE_KEY);
  const hit = await cache.match(key);
  if (hit) return hit.json();
  const t = await fetch(API + '/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId: WIX_CLIENT_ID, grantType: 'anonymous' })
  });
  if (!t.ok) throw new Error('token ' + t.status);
  const token = (await t.json()).access_token;
  const [ents, codes, tfs] = await Promise.all([
    queryAll(token, 'Entreprises'),
    queryAll(token, 'CodesPromo'),
    queryAll(token, 'TempsForts').catch(() => [])
  ]);
  const raw = { ents, codes, tfs };
  ctx.waitUntil(cache.put(key, new Response(JSON.stringify(raw), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=' + CACHE_SECONDS }
  })));
  return raw;
}

const attr = s => SEO.esc(s);
const setMeta = (html, re, value) => html.replace(re, (m, a, b) => a + attr(value) + b);
const internalLinks = html => html.replace(/href="#\//g, 'href="/');

function render(html, m, indexable) {
  html = html.replace(/<title>[^<]*<\/title>/, () => '<title>' + attr(m.title) + '</title>');
  html = setMeta(html, /(<meta name="description" content=")[^"]*(")/, m.desc);
  html = setMeta(html, /(<meta name="robots" content=")[^"]*(")/, indexable ? m.robots : 'noindex,follow');
  html = setMeta(html, /(<link rel="canonical" href=")[^"]*(")/, m.canonical);
  html = setMeta(html, /(<meta property="og:title" content=")[^"]*(")/, m.title);
  html = setMeta(html, /(<meta name="twitter:title" content=")[^"]*(")/, m.title);
  html = setMeta(html, /(<meta property="og:description" content=")[^"]*(")/, m.desc);
  html = setMeta(html, /(<meta name="twitter:description" content=")[^"]*(")/, m.desc);
  html = setMeta(html, /(<meta property="og:url" content=")[^"]*(")/, m.canonical);
  html = setMeta(html, /(<meta property="og:image" content=")[^"]*(")/, m.image);
  html = setMeta(html, /(<meta name="twitter:image" content=")[^"]*(")/, m.image);
  const ld = JSON.stringify(m.ld).replace(/</g, '\\u003c');
  html = html.replace(/<script type="application\/ld\+json" id="ld">[\s\S]*?<\/script>/, () => '<script type="application/ld+json" id="ld">' + ld + '</script>');
  if (m.body) html = html.replace(/(<main id="app"[^>]*>)[\s\S]*?(<\/main>)/, (x, a, b) => a + m.body + b);
  return internalLinks(html);
}

const htmlHeaders = { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=0, must-revalidate' };

export async function onRequest(ctx) {
  const { request, next, env } = ctx;
  const url = new URL(request.url);

  // Une seule adresse officielle : bonszahe.com (évite le contenu dupliqué).
  if (REDIRECT_HOSTS.includes(url.hostname)) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') return next();

  if (url.pathname === '/sitemap.xml') {
    try {
      const today = todayMayotte();
      const raw = await cmsData(ctx);
      const data = SEO.fromCMS(raw.ents, raw.codes, raw.tfs, today);
      return new Response(SEO.sitemap(data, today), { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
    } catch (e) {
      return new Response(SEO.sitemap({ biz: [], codes: [], tf: [] }, todayMayotte()), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
    }
  }
  if (FILE_RE.test(url.pathname)) return next();

  // Pages du site : on part de index.html et on le personnalise.
  let page;
  try { page = await env.ASSETS.fetch(new URL('/', url)); } catch (e) { return next(); }
  if (!page.ok) return next();
  const html = await page.text();
  const indexable = url.hostname === CANONICAL_HOST;
  try {
    const today = todayMayotte();
    const raw = await cmsData(ctx);
    const data = SEO.fromCMS(raw.ents, raw.codes, raw.tfs, today);
    const m = SEO.meta(url.pathname, url.searchParams, data, { today });
    return new Response(render(html, m, indexable), { status: m.status, headers: htmlHeaders });
  } catch (e) {
    // Données Wix momentanément indisponibles : la page s'affiche quand même, sans pré-rendu.
    return new Response(internalLinks(html), { status: 200, headers: htmlHeaders });
  }
}
