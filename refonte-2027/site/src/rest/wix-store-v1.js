/* =========================================================================
   Lecture du catalogue Wix Stores V1 (la boutique Zarahissi est en V1 :
   les endpoints /stores/v3 y répondent 428). Lecture seule, jeton visiteur.
   Doc : https://dev.wix.com/docs/api-reference/business-solutions/stores/skills/query-products-catalog-v1
   En V1, `filter` et `sort` sont des CHAÎNES JSON.
   ========================================================================= */
import { wixApiRequest } from './wix-client.js';

const query = (q, extra = {}) =>
  wixApiRequest('/stores-reader/v1/products/query', { method: 'POST', body: { query: q, ...extra } });

/* Collections : chargées une fois puis gardées pour la session (slug → id) */
let colsPromise = null;
export function getCollections() {
  if (colsPromise) return colsPromise;
  colsPromise = (async () => {
    try {
      const cached = sessionStorage.getItem('zr-cols');
      if (cached) return JSON.parse(cached);
    } catch { /* stockage indisponible */ }
    const all = [];
    for (let offset = 0; offset < 1000; offset += 100) {
      const r = await wixApiRequest('/stores-reader/v1/collections/query', { method: 'POST', body: { query: { paging: { limit: 100, offset } } } });
      all.push(...(r?.collections ?? []));
      if (!r?.collections?.length || all.length >= (r.totalResults ?? 0)) break;
    }
    const map = Object.fromEntries(all.map(c => [c.slug, { id: c.id, name: c.name }]));
    try { sessionStorage.setItem('zr-cols', JSON.stringify(map)); } catch { /* ignore */ }
    return map;
  })().catch((e) => { colsPromise = null; throw e; });
  return colsPromise;
}

export const SORTS = {
  pertinence: { label: 'Pertinence', v1: null },
  nouveautes: { label: 'Nouveautés', v1: [{ numericId: 'desc' }] },
  'prix-asc': { label: 'Prix croissant', v1: [{ price: 'asc' }] },
  'prix-desc': { label: 'Prix décroissant', v1: [{ price: 'desc' }] },
  nom: { label: 'Nom (A → Z)', v1: [{ name: 'asc' }] },
};

/**
 * Liste de produits.
 * @param {{ cols?: string[], et?: string[], prixMax?: number, recherche?: string[][], tri?: string, limit?: number, offset?: number }} o
 *   cols : slugs de collections (union) · et : slugs à croiser (intersection)
 *   recherche : liste de mots, chaque mot = liste d'orthographes acceptées
 * @returns {Promise<{ produits: object[], total: number }>}
 */
export async function listerProduits({ cols = [], et = [], prixMax, recherche, tri = 'pertinence', limit = 24, offset = 0 } = {}) {
  const map = cols.length || et.length ? await getCollections() : {};
  const ids = (slugs) => slugs.map(s => map[s]?.id).filter(Boolean);
  const conds = [{ visible: true }];
  if (cols.length) {
    const u = ids(cols);
    if (!u.length) return { produits: [], total: 0 };
    conds.push({ 'collections.id': { $hasSome: u } });
  }
  for (const s of et) {
    const i = ids([s]);
    if (i.length) conds.push({ 'collections.id': { $hasSome: i } });
  }
  if (prixMax != null) conds.push({ price: { $lte: prixMax } });
  for (const variantes of recherche ?? []) {
    conds.push(variantes.length > 1 ? { $or: variantes.map(v => ({ name: { $contains: v } })) } : { name: { $contains: variantes[0] } });
  }
  const q = { filter: JSON.stringify(conds.length > 1 ? { $and: conds } : conds[0]), paging: { limit, offset } };
  const s = SORTS[tri]?.v1;
  if (s) q.sort = JSON.stringify(s);
  const r = await query(q);
  return { produits: r?.products ?? [], total: r?.totalResults ?? 0 };
}

/** Un produit par son slug, avec ses variantes. null s'il n'existe pas. */
export async function produitParSlug(slug) {
  const r = await query({ filter: JSON.stringify({ slug }) }, { includeVariants: true });
  return r?.products?.[0] ?? null;
}

/* ---------- Images Wix redimensionnées (bien plus légères sur mobile) ---------- */
export function image(url, w = 600) {
  if (!url) return null;
  const u = url.startsWith('//') ? 'https:' + url : url;
  const m = u.match(/^(https:\/\/static\.wixstatic\.com\/media\/[^/]+)/);
  return m ? `${m[1]}/v1/fill/w_${w},h_${w},al_c,q_80,enc_auto/image.jpg` : u;
}
export const imagePrincipale = (p, w) => image(p?.media?.mainMedia?.image?.url, w);
export const galerie = (p, w = 900) => {
  const items = (p?.media?.items ?? []).filter(i => i.mediaType === 'image' && i.image?.url);
  const seen = new Set();
  return items.map(i => ({ url: image(i.image.url, w), alt: i.title || p.name })).filter(i => !seen.has(i.url) && seen.add(i.url));
};

/* ---------- Prix ---------- */
export function prix(p) {
  const d = p?.priceData ?? p?.price;
  const actuel = d?.discountedPrice ?? d?.price;
  const barre = d?.discountedPrice != null && d.discountedPrice < d.price ? d.formatted?.price : null;
  return { valeur: actuel, texte: d?.formatted?.discountedPrice ?? d?.formatted?.price ?? '', barre };
}
