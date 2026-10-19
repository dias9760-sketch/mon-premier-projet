/* =========================================================================
   Zarahissi 2027 · Site branché sur la boutique Wix (catalogue V1)
   Produits, prix, stock et panier viennent de Wix en direct ; le paiement se
   fait sur la page sécurisée de Wix. Rien n'est inventé : en l'absence de
   données, la page affiche un état vide ou une erreur avec « Réessayer ».
   Routes : #/ · #/c/:page · #/p/:slug · #/recherche?q= · #/favoris · #/infos/:page
   ========================================================================= */
import { BOUTIQUE, ZONES, PAGES, MENU, SAISON, SYNONYMES, PHOTOS, FIDELITE, MUSIQUE } from './config.js';
import { DRAPEAUX } from './drapeaux.js';
import { listerProduits, produitParSlug, getCollections, SORTS, imagePrincipale, galerie, image, prix } from './rest/wix-store-v1.js';
import { addToCart, getCurrentCart, estimateCurrentCart, updateCartItemQuantity, removeFromCart, checkout } from './rest/wix-store-cart.js';

/* ---------- Utilitaires ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (t) => String(t ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ico = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const pageLink = (k) => k.startsWith('p/') ? '#/' + k : '#/c/' + k;
const store = {
  get(k, d) { try { const v = localStorage.getItem('zr-' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('zr-' + k, JSON.stringify(v)); } catch { /* navigation privée */ } },
};
const money = (m, cur) => {
  const n = Number(m?.convertedAmount ?? m?.amount ?? m);
  return Number.isFinite(n) ? n.toLocaleString('fr-FR', { style: 'currency', currency: cur || 'EUR' }) : '';
};
const lien = (x) => Array.isArray(x) ? x : [x, PAGES[x]?.titre.replace(/ personnalisé(e)?s$/, '').replace(/^Personnalisés · /, '') ?? x];

/* ---------- État ---------- */
const state = { favs: store.get('favs2', {}), cart: null, summary: null, busy: false };
const saveFavs = () => { store.set('favs2', state.favs); updateCounts(); };

/* ---------- Lecture des produits : catégories utiles à l'affichage ---------- */
const MESSAGE_RE = /message|mot\b|mot -|mot-/i;
const champsGravure = (p) => (p.customTextFields ?? []).filter(f => !MESSAGE_RE.test(f.title));
const champsMessage = (p) => (p.customTextFields ?? []).filter(f => MESSAGE_RE.test(f.title));
const estPerso = (p) => champsGravure(p).length > 0;
const typeOption = (o) => /emballage/i.test(o.name) ? 'cadeau' : MESSAGE_RE.test(o.name) ? 'mot' : (o.optionType === 'color' || /couleur/i.test(o.name)) ? 'couleur' : 'choix';
const estOui = (c) => !/non/i.test(c.description);
const COULEURS = [[/or rose|ros[eé]/i, '#D49A86'], [/^or\b|dor[ée]/i, '#C9A55A'], [/argent/i, '#B4B9C0']];
const teinte = (c) => (COULEURS.find(([re]) => re.test(c.description)) || [])[1] || (/^#[0-9a-f]{6}$/i.test(c.value) ? c.value : '#D6CBAE');

/* ---------- Composants ---------- */
function badges(p) {
  const b = [];
  if (p.stock && p.stock.inStock === false) b.push('<span class="badge badge--stock">Épuisé</span>');
  if (estPerso(p)) b.push('<span class="badge badge--perso">Personnalisable</span>');
  if (p.ribbon) b.push(`<span class="badge ${/bon plan|promo|solde/i.test(p.ribbon) ? 'badge--promo' : 'badge--new'}">${esc(p.ribbon)}</span>`);
  return b.slice(0, 2).join('');
}
const priceHTML = (p) => { const x = prix(p); return `<div class="price">${x.barre ? `<span class="promo">${esc(x.texte)}</span><s>${esc(x.barre)}</s>` : `<span>${esc(x.texte)}</span>`}</div>`; };
const ajoutDirect = (p) => !(p.productOptions ?? []).length && !(p.customTextFields ?? []).some(f => f.mandatory) && p.stock?.inStock !== false;
function card(p) {
  const imgs = galerie(p, 500);
  const main = imagePrincipale(p, 500) || imgs[0]?.url;
  const alt = imgs.find(i => i.url !== main)?.url;
  const fav = !!state.favs[p.id];
  return `<article class="card reveal ${p.stock?.inStock === false ? 'epuise' : ''}">
    <div class="card__media">
      ${main ? `<img src="${main}" alt="${esc(p.name)}" loading="lazy" decoding="async" width="500" height="500">` : ''}
      ${alt ? `<img class="img-alt" src="${alt}" alt="" loading="lazy" decoding="async" aria-hidden="true">` : ''}
      <div class="card__badges">${badges(p)}</div>
      <button class="fav" data-fav="${p.id}" aria-pressed="${fav}" aria-label="${fav ? 'Retirer des' : 'Ajouter aux'} favoris : ${esc(p.name)}"><span>${ico('heart')}</span></button>
      ${ajoutDirect(p) ? `<button class="quick" data-quick="${p.id}" aria-label="Ajouter au panier : ${esc(p.name)}">${ico('plus')}</button>`
        : `<a class="quick" href="#/p/${encodeURIComponent(p.slug)}" aria-label="${estPerso(p) ? 'Personnaliser' : 'Choisir les options'} : ${esc(p.name)}">${ico(estPerso(p) ? 'pen' : 'right')}</a>`}
    </div>
    <div class="card__info"><a class="card__name" href="#/p/${encodeURIComponent(p.slug)}">${esc(p.name)}</a>${priceHTML(p)}</div>
  </article>`;
}
const cacheProduits = new Map(); // id → produit (ajout rapide, favoris)
const remember = (ps) => ps.forEach(p => cacheProduits.set(p.id, p));
const skeletons = (n) => Array.from({ length: n }, () => `<div class="card skel" aria-hidden="true"><div class="card__media"></div><div class="line"></div><div class="line"></div></div>`).join('');
const erreurHTML = (msg = 'La boutique ne répond pas pour le moment.') => `<div class="etat"><p>${esc(msg)}</p><button class="btn btn--ghost" data-retry>Réessayer</button></div>`;
const secHead = (titre, lienHref, txt = 'Tout voir') => `<div class="sec__head"><h2>${titre}</h2>${lienHref ? `<a class="link" href="${lienHref}">${txt}</a>` : ''}</div>`;

/** Remplit un conteneur avec des cartes produits (squelettes → données → état vide/erreur). */
async function remplir(el, opts, { vide = 'Aucun produit pour le moment.' } = {}) {
  if (!el) return;
  el.innerHTML = skeletons(opts.limit && opts.limit < 4 ? opts.limit : 4);
  try {
    const { produits } = await listerProduits(opts);
    remember(produits);
    el.innerHTML = produits.length ? produits.map(card).join('') : `<div class="etat"><p>${vide}</p></div>`;
    observeReveal();
  } catch (e) {
    console.error(e);
    el.innerHTML = erreurHTML();
    $('[data-retry]', el)?.addEventListener('click', () => remplir(el, opts, { vide }));
  }
}

/* ---------- Mise en page globale ---------- */
function renderAnnounce() {
  const msgs = ['✨ Notre site fait peau neuve !', 'Livré à Mayotte, Réunion, Antilles, France', 'Retrait gratuit en boutique à Mamoudzou', 'Bijoux personnalisés à petit prix'];
  const el = $('#announce');
  el.innerHTML = msgs.map((m, i) => `<p class="${i ? '' : 'on'}">${m}</p>`).join('');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i = 0;
  setInterval(() => {
    const ps = $$('p', el); ps[i].className = 'off'; i = (i + 1) % ps.length; ps[i].className = 'on';
    setTimeout(() => ps.forEach((p, k) => { if (k !== i) p.className = ''; }), 650);
  }, 4500);
}
function renderChips() {
  $('#chips').innerHTML = [
    `<a class="chip chip--saison" href="${pageLink(SAISON.page)}">${SAISON.titre}</a>`,
    ...[['nouveautes', 'Nouveautés'], ['personnalises', 'Personnalisés'], ['bijoux-des-iles', 'Bijoux des îles']].map(([k, t]) => `<a class="chip" href="${pageLink(k)}">${t}</a>`),
    `<a class="chip chip--promo" href="${pageLink('bons-plans')}">Bons plans</a>`,
    ...[['montres', 'Montres'], ['idees-cadeaux', 'Idées cadeaux']].map(([k, t]) => `<a class="chip" href="${pageLink(k)}">${t}</a>`),
  ].join('');
}
function renderNav() {
  const items = [{ page: SAISON.page, titre: SAISON.titre, saison: true }, ...MENU];
  $('#nav').innerHTML = items.map(m => `<div class="nav__item">
    <a class="nav__link ${m.promo ? 'nav__link--promo' : ''} ${m.saison ? 'nav__link--saison' : ''}" href="${pageLink(m.page)}" data-nav="${m.page}">${m.titre}</a>
    ${m.groupes ? `<div class="mega"><div class="mega__in" style="grid-template-columns:repeat(${m.groupes.length},1fr) 260px">
      ${m.groupes.map(g => `<div><h4>${g.titre}</h4>${g.liens.map(lien).map(([k, t]) => `<a href="${pageLink(k)}">${esc(t)}</a>`).join('')}</div>`).join('')}
      <a class="mega__visual" href="${pageLink(m.page)}" data-mega-img="${m.page}"><span>Voir tout</span></a>
    </div></div>` : ''}
  </div>`).join('');
}
function renderMenuSheet() {
  const items = [{ page: SAISON.page, titre: SAISON.titre, saison: true }, ...MENU];
  $('#menuSheet').innerHTML = `
    <div class="sheet__head"><a class="logo" href="#/" style="text-align:left"><b style="font-size:20px">ZA RAHISSI</b></a><button class="icon-btn" data-close aria-label="Fermer le menu">${ico('close')}</button></div>
    <div class="sheet__body">
      <ul class="mnav">${items.map((m, i) => `<li>
        ${m.groupes ? `<button class="mnav__row" aria-expanded="false" aria-controls="sub-${i}" data-acc><span>${m.titre}</span>${ico('down')}</button>
          <div class="mnav__sub" id="sub-${i}"><div><div>
            <a class="all" href="${pageLink(m.page)}">Voir tout</a>
            ${m.groupes.map(g => `${m.groupes.length > 1 ? `<h4>${g.titre}</h4>` : ''}${g.liens.map(lien).map(([k, t]) => `<a href="${pageLink(k)}">${esc(t)}</a>`).join('')}`).join('')}
          </div></div></div>`
        : `<a class="mnav__row ${m.promo ? 'promo' : ''} ${m.saison ? 'saison' : ''}" href="${pageLink(m.page)}"><span>${m.titre}</span>${ico('right')}</a>`}
      </li>`).join('')}</ul>
      <div class="minfo">
        <h4>Aide</h4>
        <a href="#/infos/livraison">${ico('truck')} Livraison & délais</a>
        <a href="#/infos/paiement">${ico('lock')} Modes de paiement</a>
        <a href="#/infos/faq">${ico('chat')} Questions fréquentes</a>
        <a href="#/infos/contact">${ico('store')} Contact & boutique</a>
      </div>
    </div>
    <div class="sheet__foot"><a class="btn btn--wa btn--block" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">${ico('chat')} Une question ? WhatsApp</a></div>`;
}
function renderFooter() {
  const col = (titre, liens) => `<details><summary>${titre}${ico('down')}</summary><ul>${liens.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></details>`;
  $('#foot').innerHTML = `<div class="wrap">
    <a class="logo" href="#/"><span class="logo__crown" style="justify-content:flex-start"><svg width="20" height="13" viewBox="0 0 22 14"><path d="M1 13 L3 3 L8 8 L11 1 L14 8 L19 3 L21 13 Z" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></span><b>ZA RAHISSI</b><em>Bons plans à petit prix</em></a>
    <p style="margin-top:12px;max-width:420px">Bijoux personnalisés, bijoux des îles et accessoires à petit prix, livrés partout en Outre-mer et en France.</p>
    <div class="foot__cols">
      ${col('Boutique', MENU.map(m => [pageLink(m.page), m.titre]))}
      ${col('Aide', [['#/infos/livraison', 'Livraison & délais'], ['#/infos/paiement', 'Modes de paiement'], ['#/infos/guide-tailles', 'Guide des tailles de bagues'], ['#/infos/faq', 'FAQ'], ['#/infos/contact', 'Contact']])}
      ${col('Zarahissi & Vous', [['#/infos/fidelite', FIDELITE.titre], ['#/infos/histoire', 'Notre histoire'], ['#/favoris', 'Mes favoris']])}
      <details><summary>Nous trouver${ico('down')}</summary><ul>
        <li><a href="#/infos/contact">${BOUTIQUE.adresse}</a></li><li><a href="#/infos/contact">Du lundi au samedi · ${BOUTIQUE.horaires}</a></li>
        <li><a href="#/infos/contact">${BOUTIQUE.tel}</a></li><li><a href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
      </ul></details>
    </div>
    <div class="foot__bottom"><div class="pay" aria-label="Moyens de paiement"><span>VISA</span><span>MASTERCARD</span><span>AMEX</span><span>PAYPAL</span><span>ESPÈCES EN BOUTIQUE</span></div>
      <span>© 2027 Zarahissi · Mamoudzou, Mayotte · Paiement sécurisé par Wix</span><span>Version de test du nouveau site · les produits et le panier sont ceux de la boutique réelle.</span></div>
  </div>`;
}

/* ---------- Recherche (fautes courantes tolérées) ---------- */
const STOP = new Set(['de', 'la', 'le', 'les', 'un', 'une', 'pour', 'des', 'd', 'l', 'en', 'a', 'au', 'aux', 'et', 'avec']);
const sansAccent = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '');
function motsRecherche(q) {
  return String(q).toLowerCase().replace(/[^\p{L}\p{N}' -]/gu, ' ').split(/[\s']+/).filter(t => t.length > 1 && !STOP.has(t)).slice(0, 4).map(t => {
    const s = t.length > 4 ? t.replace(/s$/, '') : t;
    return [...new Set([s, SYNONYMES[s], SYNONYMES[sansAccent(s)], sansAccent(s)].filter(Boolean))];
  });
}
function mountSearch() {
  $$('[data-search-host]').forEach((host, k) => {
    host.innerHTML = `<form class="search-field" role="search">
      ${ico('search')}<label class="sr-only" for="q${k}">Rechercher</label>
      <input id="q${k}" type="search" name="q" placeholder="Rechercher un bijou, un prénom…" autocomplete="off" aria-autocomplete="list" aria-controls="sg${k}" aria-expanded="false">
      <div class="suggest" id="sg${k}" role="listbox"></div></form>`;
    const input = $('input', host), box = $('.suggest', host), form = $('form', host);
    let timer, ticket = 0;
    const close = () => { box.classList.remove('open'); input.setAttribute('aria-expanded', 'false'); };
    input.addEventListener('input', () => {
      clearTimeout(timer);
      const q = input.value.trim();
      if (q.length < 2) return close();
      timer = setTimeout(async () => {
        const t = ++ticket;
        box.innerHTML = '<p class="hint">Recherche…</p>'; box.classList.add('open');
        try {
          const { produits, total } = await listerProduits({ recherche: motsRecherche(q), limit: 6 });
          if (t !== ticket) return;
          remember(produits);
          box.innerHTML = produits.length
            ? produits.map(p => `<a href="#/p/${encodeURIComponent(p.slug)}" role="option"><span class="thumb">${imagePrincipale(p, 100) ? `<img src="${imagePrincipale(p, 100)}" alt="">` : ''}</span><span>${esc(p.name)}<small>${esc(prix(p).texte)}</small></span></a>`).join('')
              + `<a href="#/recherche?q=${encodeURIComponent(q)}" role="option"><span class="thumb">${ico('search')}</span><span><b>Voir les ${total} résultats</b></span></a>`
            : `<p class="hint">Aucun résultat pour « ${esc(q)} ». Essaie « collier », « prénom », « Mayotte »…</p>`;
          input.setAttribute('aria-expanded', 'true');
        } catch { if (t === ticket) box.innerHTML = '<p class="hint">La recherche ne répond pas, réessaie.</p>'; }
      }, 250);
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    form.addEventListener('submit', (e) => { e.preventDefault(); close(); input.blur(); location.hash = '#/recherche?q=' + encodeURIComponent(input.value.trim()); });
    document.addEventListener('click', (e) => { if (!host.contains(e.target)) close(); });
    box.addEventListener('click', () => { close(); input.value = ''; });
  });
}

/* ---------- Compteurs, notifications ---------- */
function updateCounts() {
  const n = (state.cart?.lineItems ?? []).reduce((s, l) => s + (l.quantityInfo?.confirmedQuantity ?? l.quantity ?? 0), 0);
  $$('[data-cart-count]').forEach(e => e.textContent = n || '');
  const f = Object.keys(state.favs).length;
  $$('[data-fav-count]').forEach(e => e.textContent = f || '');
}
function bumpCart() { $$('[data-open-cart] .ico').forEach(i => { i.classList.remove('bump'); void i.offsetWidth; i.classList.add('bump'); }); }
function toast(html, ms = 3200) {
  const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = html;
  $('#toasts').replaceChildren(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, ms);
}

/* ---------- Tiroirs ---------- */
let lastFocus = null;
function openSheet(id) {
  closeSheets(true); $('#toasts').replaceChildren();
  const sh = $('#' + id), scrim = $('#scrim'); lastFocus = document.activeElement;
  sh.hidden = false; scrim.hidden = false;
  requestAnimationFrame(() => { sh.classList.add('open'); scrim.classList.add('open'); });
  document.body.classList.add('no-scroll');
  $$(`[aria-controls="${id}"]`).forEach(b => b.setAttribute('aria-expanded', 'true'));
  setTimeout(() => $('button, a, input, select', sh)?.focus({ preventScroll: true }), 50);
}
function closeSheets(silent) {
  const open = $$('.sheet.open'); if (!open.length) return;
  open.forEach(sh => { sh.classList.remove('open'); $$(`[aria-controls="${sh.id}"]`).forEach(b => b.setAttribute('aria-expanded', 'false')); setTimeout(() => { if (!sh.classList.contains('open')) sh.hidden = true; }, 360); });
  const scrim = $('#scrim'); scrim.classList.remove('open'); setTimeout(() => { if (!$('.sheet.open')) scrim.hidden = true; }, 360);
  document.body.classList.remove('no-scroll');
  if (!silent && lastFocus) lastFocus.focus({ preventScroll: true });
}

/* ---------- Panier Wix ---------- */
async function refreshCart() {
  state.cart = await getCurrentCart();
  state.summary = state.cart?.lineItems?.length ? await estimateCurrentCart() : null;
  updateCounts();
}
function renderCart(erreur) {
  const cart = state.cart, lines = cart?.lineItems ?? [];
  const cur = cart?.customerInfo?.currencyCode ?? cart?.businessInfo?.currencyCode ?? 'EUR';
  const ps = state.summary?.priceSummary;
  const sub = ps?.subtotal ?? cart?.subtotal;
  const remise = Number(ps?.discount?.amount ?? 0);
  const bloquant = lines.some(l => l.status && l.status !== 'IN_STOCK');
  $('#cartSheet').innerHTML = `
    <div class="sheet__head"><h2>Mon panier</h2><button class="icon-btn" data-close aria-label="Fermer le panier">${ico('close')}</button></div>
    <div class="sheet__body">
      ${erreur ? `<p class="ferr" role="alert">${esc(erreur)}</p>` : ''}
      ${lines.length ? lines.map(l => {
        const q = l.quantityInfo?.confirmedQuantity ?? 1;
        const desc = (l.attributes?.descriptionLines ?? []).map(d => `<span>${esc(d.name?.original)} : ${esc(d.plainText?.original ?? d.colorInfo?.original ?? '')}</span>`).join('');
        const img = image(l.attributes?.image?.url, 160);
        return `<div class="line ${l.status && l.status !== 'IN_STOCK' ? 'indispo' : ''}"><div class="line__img">${img ? `<img src="${img}" alt="">` : ''}</div>
          <div><div class="line__name">${esc(l.name?.original)}</div><div class="line__opts">${desc}${l.status && l.status !== 'IN_STOCK' ? '<span class="ferr">Plus disponible</span>' : ''}</div>
            <div class="line__row"><div class="qty" role="group" aria-label="Quantité"><button data-qty="${l.id}" data-n="${q - 1}" aria-label="Retirer un" ${state.busy ? 'disabled' : ''}>−</button><span>${q}</span><button data-qty="${l.id}" data-n="${q + 1}" aria-label="Ajouter un" ${state.busy ? 'disabled' : ''}>+</button></div><b>${money(l.pricing?.totalPrice, cur)}</b></div>
            <button class="rm" data-rm="${l.id}" ${state.busy ? 'disabled' : ''}>Supprimer</button></div></div>`;
      }).join('') : `<div class="empty">${ico('bag')}<p>Ton panier est vide pour l'instant.</p><a class="btn" href="${pageLink('personnalises')}">Découvrir les personnalisés</a></div>`}
    </div>
    ${lines.length ? `<div class="sheet__foot"><div class="totals">
      ${remise > 0 ? `<div class="disc"><span>Remise</span><span>−${money(ps.discount, cur)}</span></div>` : ''}
      <div class="grand"><span>Sous-total</span><span>${money(sub, cur)}</span></div></div>
      <p class="cart-note">Livraison et éventuelles remises calculées sur la page de paiement sécurisée.</p>
      <button class="btn btn--block" data-checkout ${bloquant || state.busy ? 'disabled' : ''}>${bloquant ? 'Retire les articles indisponibles' : 'Commander'}</button>
      <button class="link" data-close style="justify-self:center;min-height:40px">Continuer mes achats</button></div>` : ''}`;
}
async function cartAction(fn) {
  state.busy = true; renderCart();
  try { await fn(); await refreshCart(); renderCart(); }
  catch (e) { console.error(e); await refreshCart().catch(() => {}); renderCart('Cette action n’a pas pu aboutir. Réessaie.'); }
  finally { state.busy = false; renderCart(); }
}
async function ajouter(p, variantId, extras) {
  await addToCart(p.id, variantId, 1, extras);
  await refreshCart(); bumpCart();
  toast(`<span>${ico('check', 'ico" style="display:inline;vertical-align:-5px')} Ajouté au panier</span><button data-open-cart>Voir le panier</button>`);
}

/* ---------- Pages ---------- */
const V = {};

V.home = () => `
  <section class="hero">
    <div class="hero__visual" aria-hidden="true"><div class="lagoon"></div><div class="hero__jewel">${art('nom', { s: 220, text: 'Zara' })}</div><div class="shine"></div></div>
    <div class="hero__copy">
      <span class="kicker">Bijoux personnalisés à petit prix</span>
      <h1>Des bijoux qui ont <i>l’éclat</i> du lagon</h1>
      <p>Bijoux gravés à ton prénom, bijoux des îles et accessoires à petit prix. Livrés à Mayotte, à La Réunion, aux Antilles et en France.</p>
      <div class="hero__btns"><a class="btn" href="${pageLink('personnalises')}">Personnaliser mon bijou</a><a class="btn btn--ghost" href="${pageLink('nouveautes')}">Nouveautés</a></div>
    </div>
  </section>
  <div class="reassure" role="list">
    <div role="listitem">${ico('truck')}<p><b>Livraison suivie</b><span>Mayotte · Réunion · Antilles · France</span></p></div>
    <div role="listitem">${ico('pen')}<p><b>Bijoux personnalisés</b><span>Prénom, date, gravure express</span></p></div>
    <div role="listitem">${ico('store')}<p><b>Retrait gratuit</b><span>Boutique de Mamoudzou</span></p></div>
    <div role="listitem">${ico('lock')}<p><b>Paiement sécurisé</b><span>CB, PayPal, espèces sur place</span></p></div>
  </div>
  <section class="sec"><div class="wrap">${secHead('Nos univers')}
    <div class="univers hscroll" id="univers">${[['personnalises', 'Personnalisés'], ['colliers', 'Colliers'], ['bracelets', 'Bracelets'], ['bijoux-des-iles', 'Bijoux des îles'], ['montres', 'Montres'], ['accessoires', 'Accessoires'], ['idees-cadeaux', 'Idées cadeaux']]
      .map(([k, t]) => `<a href="${pageLink(k)}" data-univers="${k}"><div class="ph"></div>${t}</a>`).join('')}</div>
  </div></section>
  <section class="sec" style="padding-top:0"><div class="wrap">${secHead('Nouveautés', pageLink('nouveautes'))}
    <div class="hscroll hscroll--grid" style="--cols:4" id="hNews"></div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="atelier reveal">
      <div class="atelier__demo" id="atelierDemo">${art('nom', { s: 230, text: 'Inaya' })}</div>
      <div class="atelier__txt"><span class="kicker">Atelier personnalisation</span><h2>Écris ton prénom, regarde-le briller</h2>
        <p>Tape un prénom pour voir l’effet, puis choisis ton bijou parmi nos colliers personnalisés.</p>
        <label class="sr-only" for="atelierIn">Essaie avec un prénom</label><input id="atelierIn" maxlength="12" placeholder="Essaie avec un prénom…" value="Inaya">
        <a class="btn btn--sable" href="${pageLink('colliers-personnalises')}">Voir les colliers personnalisés</a></div>
    </div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap">${secHead('À chacun son bijou')}
    <div class="pourqui">
      ${[['femme', 'pour-femme', 'Femme'], ['homme', 'pour-homme', 'Homme'], ['couple', 'pour-couple', 'Couple'], ['enfant', 'pour-enfant', 'Pour les enfants']]
        .map(([k, pg, t]) => `<a class="pq pq--${k} reveal" href="${pageLink(pg)}" data-pq="${k}" data-pq-page="${pg}"><span class="pq__img">${PHOTOS[k] ? `<img src="${image(PHOTOS[k], 800)}" alt="" loading="lazy">` : ''}</span><span class="pq__txt">${t} ${ico('right')}</span></a>`).join('')}
    </div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap">${secHead('Meilleures ventes', pageLink('meilleures-ventes'))}<div class="grid" id="hBest"></div></div></section>
  <section class="sec sec--creme"><div class="wrap">
    <div class="sec__head"><h2>Des bijoux inspirés de nos îles</h2><a class="link" href="${pageLink('bijoux-des-iles')}">Tout voir</a></div>
    <div class="iles-grid">${['mayotte', 'comores', 'guadeloupe', 'martinique', 'madagascar', 'la-reunion'].map(k => `<a class="ile reveal" href="${pageLink(k)}"><span class="ile__drapeau">${DRAPEAUX[k]}</span><span class="ile__nom">${PAGES[k].titre}</span></a>`).join('')}</div>
    <div class="hscroll hscroll--grid" style="--cols:4;margin-top:24px" id="hIles"></div>
  </div></section>
  <section class="sec"><div class="wrap">
    <a class="musique reveal" href="#/p/${encodeURIComponent(MUSIQUE.slug)}" id="hMusique">
      <span class="musique__img" id="hMusiqueImg">${art('musique', { s: 150, text: ' ' })}</span>
      <span class="musique__txt"><span class="kicker">${MUSIQUE.titre}</span><span class="musique__accroche">${MUSIQUE.texte}</span><span class="musique__prix" id="hMusiquePrix">Découvrir ${ico('right')}</span></span>
    </a>
  </div></section>
  <section class="sec sec--marine"><div class="wrap">
    <div class="sec__head"><h2>Bons plans à saisir</h2><a class="link" href="${pageLink('bons-plans')}" style="color:var(--zr-sable)">Tout voir</a></div>
    <div class="grid" id="hPromo"></div></div></section>
  <section class="sec"><div class="wrap">
    <a class="fidelity reveal" href="#/infos/fidelite">${ico('gift', 'ico fidelity__ico')}<span class="fidelity__txt"><span>${FIDELITE.titre}</span><b>${FIDELITE.accroche}</b></span><span class="btn btn--ghost fidelity__btn">Les avantages ${ico('right')}</span></a>
  </div></section>`;
V.home.after = () => {
  remplir($('#hNews'), { cols: PAGES.nouveautes.cols, tri: 'nouveautes', limit: 8 });
  remplir($('#hBest'), { cols: PAGES['meilleures-ventes'].cols, limit: 8 });
  remplir($('#hIles'), { cols: PAGES['bijoux-des-iles'].cols, tri: 'nouveautes', limit: 8 });
  remplir($('#hPromo'), { cols: PAGES['bons-plans'].cols, limit: 4 });
  // Univers : la photo du premier produit de chaque univers
  $$('[data-univers]').forEach(async (a) => {
    const pg = PAGES[a.dataset.univers];
    try {
      const { produits } = await listerProduits({ cols: pg.cols, tri: 'nouveautes', limit: 1 });
      const u = imagePrincipale(produits[0], 300);
      if (u) $('.ph', a).innerHTML = `<img src="${u}" alt="" loading="lazy">`;
    } catch { /* la vignette reste neutre */ }
  });
  // « À chacun son bijou » : photo d'ambiance si fournie, sinon le dernier produit de la collection
  $$('[data-pq]').forEach(async (a) => {
    if (PHOTOS[a.dataset.pq]) return;
    try {
      const { produits } = await listerProduits({ cols: PAGES[a.dataset.pqPage].cols, tri: 'nouveautes', limit: 1 });
      const u = imagePrincipale(produits[0], 800);
      if (u) $('.pq__img', a).innerHTML = `<img src="${u}" alt="" loading="lazy">`;
    } catch { /* fond uni */ }
  });
  // Carte Musique : vraie photo et vrai prix de départ du produit
  produitParSlug(MUSIQUE.slug).then((p) => {
    if (!p || !$('#hMusique')) { $('#hMusique')?.closest('.sec')?.remove(); return; }
    const u = imagePrincipale(p, 400);
    if (u) $('#hMusiqueImg').innerHTML = `<img src="${u}" alt="${esc(p.name)}" loading="lazy">`;
    const prixs = (p.variants ?? []).filter(v => v.variant?.visible !== false).map(v => v.variant?.priceData?.discountedPrice ?? v.variant?.priceData?.price).filter(Number.isFinite);
    const min = prixs.length ? Math.min(...prixs) : prix(p).valeur;
    if (Number.isFinite(min)) $('#hMusiquePrix').innerHTML = `Dès ${min.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} ${ico('right')}`;
  }).catch(() => {});
  const inp = $('#atelierIn');
  inp.addEventListener('input', () => { $('#atelierDemo').innerHTML = art('nom', { s: 230, text: inp.value.trim() || 'Inaya' }); });
};

/* Page catégorie */
V.cat = (key) => {
  const pg = PAGES[key];
  if (!pg) return V.notfound();
  const parent = pg.parent && PAGES[pg.parent];
  const kids = Object.entries(PAGES).filter(([, x]) => x.parent && (x.parent === key || x.parent === pg.parent));
  return `<div class="wrap">
    <nav class="crumbs" aria-label="Fil d’Ariane"><a href="#/">Accueil</a> › ${parent ? `<a href="${pageLink(pg.parent)}">${esc(parent.titre)}</a> › ` : ''}<span aria-current="page">${esc(pg.titre)}</span></nav>
    <div class="cat-head"><h1>${esc(pg.titre)}</h1>${pg.intro ? `<p>${esc(pg.intro)}</p>` : ''}</div>
    ${kids.length ? `<div class="chips" style="padding:12px 0 4px;margin:0">${parent ? `<a class="chip" href="${pageLink(pg.parent)}">Tout voir</a>` : ''}${kids.map(([k, x]) => `<a class="chip ${k === key ? 'on' : ''}" href="${pageLink(k)}">${esc(lien(k)[1])}</a>`).join('')}</div>` : ''}
    <div class="toolbar">
      <label class="sr-only" for="tri">Trier</label><select id="tri">${Object.entries(SORTS).map(([k, s]) => `<option value="${k}">${s.label}</option>`).join('')}</select>
      ${pg.prixMax == null ? `<label class="sr-only" for="pmax">Prix maximum</label><select id="pmax"><option value="">Tous les prix</option><option value="9.99">Moins de 10 €</option><option value="19.99">Moins de 20 €</option><option value="29.99">Moins de 30 €</option></select>` : ''}
      <span class="n" id="nres"></span></div>
    <div class="grid" id="catGrid">${skeletons(4)}</div>
    <div class="plus" id="plus"></div><div style="height:32px"></div>
  </div>`;
};
V.cat.after = (key) => {
  const pg = PAGES[key]; if (!pg) return;
  const tri = $('#tri'), pmax = $('#pmax');
  tri.value = pg.tri || 'pertinence';
  let offset = 0, total = 0, ticket = 0;
  const LIMIT = 24;
  const charger = async (reset) => {
    const t = ++ticket;
    if (reset) { offset = 0; $('#catGrid').innerHTML = skeletons(4); $('#plus').innerHTML = ''; }
    else $('#plus').innerHTML = '<button class="btn btn--ghost" disabled>Chargement…</button>';
    try {
      const { produits, total: n } = await listerProduits({ cols: pg.cols ?? [], et: pg.et ?? [], prixMax: pg.prixMax ?? (pmax?.value ? +pmax.value : undefined), tri: tri.value, limit: LIMIT, offset });
      if (t !== ticket || !$('#catGrid')) return;
      remember(produits); total = n; offset += produits.length;
      const html = produits.map(card).join('');
      if (reset) $('#catGrid').innerHTML = html || `<div class="etat"><p>Aucun produit ici pour le moment.</p><a class="btn btn--ghost" href="#/">Retour à l’accueil</a></div>`;
      else $('#catGrid').insertAdjacentHTML('beforeend', html);
      $('#nres').textContent = `${total} article${total > 1 ? 's' : ''}`;
      $('#plus').innerHTML = offset < total ? `<button class="btn btn--ghost" id="voirPlus">Voir plus (${total - offset})</button>` : (total ? `<p class="compte">Tu as tout vu ✨</p>` : '');
      $('#voirPlus')?.addEventListener('click', () => charger(false));
      observeReveal();
    } catch (e) {
      console.error(e);
      if (t !== ticket || !$('#catGrid')) return;
      if (reset) { $('#catGrid').innerHTML = erreurHTML(); $('#catGrid [data-retry]').addEventListener('click', () => charger(true)); }
      else { $('#plus').innerHTML = `<button class="btn btn--ghost" id="voirPlus">Réessayer</button>`; $('#voirPlus').addEventListener('click', () => charger(false)); }
    }
  };
  tri.addEventListener('change', () => charger(true));
  pmax?.addEventListener('change', () => charger(true));
  charger(true);
};

/* Fiche produit */
V.product = () => `<div class="wrap pdp-page" id="pdpRoot"><div class="pdp"><div class="gal"><div class="gal__track"><div class="gal__slide skel"><div class="card__media" style="width:100%;height:100%"></div></div></div></div>
  <div class="pdp__info"><div class="line" style="height:28px;width:70%;background:var(--zr-creme)"></div><div class="line" style="height:18px;width:30%;background:var(--zr-creme)"></div></div></div></div>`;
V.product.after = async (slug) => {
  const root = $('#pdpRoot');
  let p;
  try { p = await produitParSlug(slug); }
  catch (e) { console.error(e); root.innerHTML = erreurHTML(); $('[data-retry]', root).addEventListener('click', () => route(true)); return; }
  if (!$('#pdpRoot')) return;
  if (!p) { root.innerHTML = V.notfound(); return; }
  remember([p]);
  document.title = p.name + ' · Zarahissi';

  // Options et champs réels du produit
  const opts = (p.productOptions ?? []).map(o => ({ ...o, type: typeOption(o), choices: (o.choices ?? []).filter(c => c.visible !== false) }));
  const sel = {};
  opts.forEach(o => {
    if (o.type === 'cadeau' || o.type === 'mot') sel[o.name] = o.choices.find(c => !estOui(c))?.description ?? o.choices[0]?.description;
    else if (o.choices.length === 1 || o.type === 'couleur') sel[o.name] = (o.choices.find(c => c.inStock !== false) ?? o.choices[0])?.description;
  });
  const gravure = champsGravure(p), messages = champsMessage(p);
  const optMot = opts.find(o => o.type === 'mot');
  const texte = {};
  const imgs = galerie(p, 900);
  const motVoulu = () => optMot ? estOui(optMot.choices.find(c => c.description === sel[optMot.name]) ?? {}) : true;
  const variante = () => p.manageVariants ? (p.variants ?? []).find(v => opts.every(o => v.choices?.[o.name] === sel[o.name])) : null;
  const couleurChoisie = () => { const o = opts.find(x => x.type === 'couleur'); return o && o.choices.find(c => c.description === sel[o.name]); };

  const optHTML = (o) => {
    if (o.type === 'cadeau' || o.type === 'mot') {
      const oui = o.choices.find(estOui);
      return oui ? `<label class="toggle-opt"><input type="checkbox" data-toggle="${esc(o.name)}" ${sel[o.name] === oui.description ? 'checked' : ''}><span>${o.type === 'cadeau' ? 'Emballage cadeau' : 'Ajouter un mot doux'}</span><small>${esc((o.name.match(/\(([^)]+)\)/) || [])[1] || '')}</small></label>` : '';
    }
    if (o.type === 'couleur') return `<div class="opt"><div class="opt__label"><span>${esc(o.name)} : <b data-optval="${esc(o.name)}" style="color:var(--zr-marine)">${esc(sel[o.name] ?? '')}</b></span></div>
      <div class="swatches" role="group" aria-label="${esc(o.name)}">${o.choices.map(c => `<div class="swatch-wrap"><button class="swatch ${c.inStock === false ? 'indispo' : ''}" data-opt="${esc(o.name)}" data-val="${esc(c.description)}" aria-pressed="${sel[o.name] === c.description}" aria-label="${esc(c.description)}${c.inStock === false ? ' (épuisé)' : ''}" style="background:${teinte(c)}"></button>${esc(c.description)}</div>`).join('')}</div></div>`;
    return `<div class="opt"><div class="opt__label"><span>${esc(o.name)} *</span>${/taille/i.test(o.name) ? '<a href="#/infos/guide-tailles">Guide des tailles</a>' : ''}</div>
      ${o.choices.length > 8 ? `<div class="field"><select data-select="${esc(o.name)}"><option value="">Choisir…</option>${o.choices.map(c => `<option ${sel[o.name] === c.description ? 'selected' : ''} ${c.inStock === false ? 'disabled' : ''}>${esc(c.description)}</option>`).join('')}</select></div>`
        : `<div class="segs" role="group" aria-label="${esc(o.name)}">${o.choices.map(c => `<button class="seg ${c.inStock === false ? 'indispo' : ''}" data-opt="${esc(o.name)}" data-val="${esc(c.description)}" aria-pressed="${sel[o.name] === c.description}" ${c.inStock === false ? 'disabled' : ''} style="font-size:15px">${esc(c.description)}</button>`).join('')}</div>`}</div>`;
  };
  const champHTML = (f, i, msg) => `<div class="opt" ${msg ? 'data-msg' : ''}><div class="opt__label"><label for="ctf${msg ? 'm' : 'g'}${i}">${esc(f.title)}${f.mandatory || msg ? ' *' : ''}</label><small data-cnt="${esc(f.title)}">0/${f.maxLength}</small></div>
    <div class="field" data-field="${esc(f.title)}">${f.maxLength > 60 ? `<textarea id="ctf${msg ? 'm' : 'g'}${i}" data-ctf="${esc(f.title)}" maxlength="${f.maxLength}"></textarea>` : `<input id="ctf${msg ? 'm' : 'g'}${i}" data-ctf="${esc(f.title)}" maxlength="${f.maxLength}" autocomplete="off">`}</div></div>`;

  const cats = await getCollections().catch(() => ({}));
  const generiques = new Set(['all-products', 'nouveauté', 'produits-femme', 'produits-homme', 'bijoux-accessoires', 'tout-a-20', 'saint-valentin', 'soldes-ete', 'offre-spéciale-2023', 'top-meilleurs-ventes', 'meilleurs-ventes', 'divers', '1-acheté-1-offert', 'produits-personnalisés']);
  const parSlug = Object.entries(cats);
  const colsProduit = (p.collectionIds ?? []).map(id => parSlug.find(([, c]) => c.id === id)?.[0]).filter(s => s && !generiques.has(s));

  root.innerHTML = `
    <nav class="crumbs" aria-label="Fil d’Ariane"><a href="#/">Accueil</a> › <span aria-current="page">${esc(p.name)}</span></nav>
    <div class="pdp">
      <div class="gal">
        <div class="gal__track" id="galTrack" aria-label="Photos du produit, balaie pour voir les suivantes">
          ${(imgs.length ? imgs : [{ url: '', alt: p.name }]).map((im, i) => `<div class="gal__slide" data-zoom="${esc(im.url)}" role="button" tabindex="0" aria-label="Agrandir la photo ${i + 1}">${im.url ? `<img src="${im.url}" alt="${esc(im.alt)}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}>` : ''}</div>`).join('')}
        </div>
        ${imgs.length > 1 ? `<div class="gal__thumbs">${imgs.slice(0, 6).map((im, i) => `<button data-thumb="${i}" class="${i ? '' : 'on'}" aria-label="Voir la photo ${i + 1}"><img src="${image(im.url, 140)}" alt=""></button>`).join('')}</div>
        <div class="gal__dots" aria-hidden="true">${imgs.map((_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</div>` : ''}
        <button class="fav" data-fav="${p.id}" aria-pressed="${!!state.favs[p.id]}" aria-label="Ajouter aux favoris"><span>${ico('heart')}</span></button>
      </div>
      <div class="pdp__info">
        <div class="pdp__badges">${badges(p)}</div>
        <h1>${esc(p.name)}</h1>
        <div class="pdp__price" id="pdpPrice"></div>
        <p class="pdp__stock" id="pdpStock"></p>
        ${gravure.length ? `<div class="opt"><div class="opt__label"><span>Aperçu indicatif de ta gravure</span></div><div class="preview preview--texte" id="preview" aria-live="polite"></div></div>` : ''}
        ${gravure.map((f, i) => champHTML(f, i, false)).join('')}
        ${opts.filter(o => o.type !== 'cadeau' && o.type !== 'mot').map(optHTML).join('')}
        ${opts.filter(o => o.type === 'cadeau' || o.type === 'mot').map(optHTML).join('')}
        ${messages.map((f, i) => champHTML(f, i, true)).join('')}
        <p class="ferr" id="perr" hidden role="alert"></p>
        <div class="sticky-cta"><div class="price" id="ctaPrice"></div><button class="btn" id="addBtn">${ico('bag')} Ajouter au panier</button></div>
        <div class="ship-box"><label for="shipZone"><b>Livraison vers</b></label>
          <select id="shipZone">${ZONES.map((z, i) => `<option value="${i}">${z.nom}</option>`).join('')}</select><ul id="shipList"></ul>
          <small>Les frais sont calculés sur la page de paiement.</small></div>
        ${p.description ? `<details class="acc" open><summary>Description${ico('down')}</summary><div class="pdp__desc">${p.description}</div></details>` : ''}
        <details class="acc"><summary>Paiement sécurisé${ico('down')}</summary><div><p>Carte bancaire (Visa, Mastercard, American Express) ou PayPal sur la page de paiement Wix. Espèces acceptées en boutique, à Kavani, Mamoudzou.</p></div></details>
      </div>
    </div>
    <section class="sec"><div class="sec__head"><h2>Tu aimeras aussi</h2></div><div class="hscroll hscroll--grid" style="--cols:4" id="related"></div></section>`;

  const maj = () => {
    const v = variante();
    const d = v?.variant?.priceData ?? p.priceData ?? p.price;
    const txt = d?.formatted?.discountedPrice ?? d?.formatted?.price ?? '';
    const barre = d?.discountedPrice != null && d.discountedPrice < d.price ? d.formatted?.price : '';
    $('#pdpPrice').innerHTML = `<div class="price">${barre ? `<span class="promo">${esc(txt)}</span><s>${esc(barre)}</s>` : `<span>${esc(txt)}</span>`}</div>`;
    $('#ctaPrice').innerHTML = esc(txt);
    const enStock = v ? v.stock?.inStock !== false : p.stock?.inStock !== false;
    $('#pdpStock').className = 'pdp__stock ' + (enStock ? 'ok' : 'ko');
    $('#pdpStock').textContent = enStock ? 'En stock' : 'Épuisé pour cette sélection';
    $('#addBtn').disabled = !enStock;
    $$('[data-msg]').forEach(el => el.hidden = !motVoulu());
    const pv = $('#preview');
    if (pv) {
      const t = gravure.map(f => texte[f.title]).filter(Boolean).join(' · ') || 'Ton texte';
      const c = couleurChoisie();
      pv.style.color = c ? teinte(c) : '';
      pv.innerHTML = `${esc(t)}<small>La police et le rendu final dépendent du modèle choisi.</small>`;
    }
  };
  $$('[data-opt]', root).forEach(b => b.addEventListener('click', () => {
    sel[b.dataset.opt] = b.dataset.val;
    $$(`[data-opt="${CSS.escape(b.dataset.opt)}"]`, root).forEach(x => x.setAttribute('aria-pressed', x === b));
    const lab = $(`[data-optval="${CSS.escape(b.dataset.opt)}"]`, root); if (lab) lab.textContent = b.dataset.val;
    maj();
  }));
  $$('[data-select]', root).forEach(s => s.addEventListener('change', () => { sel[s.dataset.select] = s.value || undefined; maj(); }));
  $$('[data-toggle]', root).forEach(c => c.addEventListener('change', () => {
    const o = opts.find(x => x.name === c.dataset.toggle);
    sel[o.name] = (c.checked ? o.choices.find(estOui) : o.choices.find(x => !estOui(x)))?.description;
    maj();
  }));
  $$('[data-ctf]', root).forEach(i => i.addEventListener('input', () => {
    texte[i.dataset.ctf] = i.value;
    const cnt = $(`[data-cnt="${CSS.escape(i.dataset.ctf)}"]`, root); if (cnt) cnt.textContent = `${i.value.length}/${i.maxLength}`;
    i.closest('.field').classList.remove('err'); $('#perr').hidden = true; maj();
  }));
  const zone = () => { const z = ZONES[+$('#shipZone').value]; $('#shipList').innerHTML = z.modes.map(([m, d]) => `<li><b>${m}</b> · ${d}</li>`).join(''); };
  $('#shipZone').addEventListener('change', () => { store.set('zone', $('#shipZone').value); zone(); });
  $('#shipZone').value = store.get('zone', '0'); zone();

  // Galerie
  const track = $('#galTrack');
  track.addEventListener('scroll', () => { const i = Math.round(track.scrollLeft / track.clientWidth); $$('.gal__dots i').forEach((d, k) => d.classList.toggle('on', k === i)); $$('[data-thumb]').forEach((d, k) => d.classList.toggle('on', k === i)); }, { passive: true });
  $$('[data-thumb]').forEach(b => b.addEventListener('click', () => track.scrollTo({ left: track.clientWidth * +b.dataset.thumb, behavior: 'smooth' })));
  $$('[data-zoom]').forEach(sl => { const go = () => sl.dataset.zoom && openZoom(sl.dataset.zoom.replace(/w_\d+,h_\d+/, 'w_1400,h_1400')); sl.addEventListener('click', go); sl.addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), go())); });

  // Ajout au panier (validation de tous les choix obligatoires)
  $('#addBtn').addEventListener('click', async () => {
    const manque = [];
    opts.forEach(o => { if (!sel[o.name]) manque.push(o.name); });
    [...gravure.filter(f => f.mandatory), ...(motVoulu() && optMot ? messages : messages.filter(f => f.mandatory))].forEach(f => {
      if (!(texte[f.title] ?? '').trim()) { manque.push(f.title); $(`[data-field="${CSS.escape(f.title)}"]`, root)?.classList.add('err'); }
    });
    if (manque.length) {
      $('#perr').hidden = false; $('#perr').textContent = 'À compléter : ' + manque.join(' · ');
      root.querySelector('.field.err input, .field.err textarea, [data-select]')?.focus();
      return toast('Il manque une information pour ton bijou.');
    }
    const v = variante();
    if (p.manageVariants && !v) { $('#perr').hidden = false; $('#perr').textContent = 'Cette combinaison n’est pas disponible.'; return; }
    const ctf = {};
    [...gravure, ...(motVoulu() ? messages : [])].forEach(f => { const t = (texte[f.title] ?? '').trim(); if (t) ctf[f.title] = t; });
    const btn = $('#addBtn'); btn.disabled = true; btn.innerHTML = 'Ajout…';
    try {
      await ajouter(p, v?.id, { modifierChoices: p.manageVariants ? undefined : sel, customTextFields: ctf });
    } catch (e) {
      console.error(e);
      $('#perr').hidden = false; $('#perr').textContent = 'L’ajout au panier n’a pas abouti. Vérifie tes choix ou réessaie.';
    } finally { btn.disabled = false; btn.innerHTML = `${ico('bag')} Ajouter au panier`; maj(); }
  });
  maj();

  // Produits associés : même collection précise
  remplir($('#related'), colsProduit.length ? { cols: [colsProduit[0]], limit: 9 } : { cols: PAGES['meilleures-ventes'].cols, limit: 9 }, { vide: '' })
    .then(() => { $(`#related [data-fav="${p.id}"]`)?.closest('.card')?.remove(); });
};
function openZoom(url) {
  const z = $('#zoom');
  z.innerHTML = `<button class="icon-btn close" data-zoom-close aria-label="Fermer le zoom">${ico('close')}</button><img class="zoom__img" src="${url}" alt="">`;
  z.hidden = false; document.body.classList.add('no-scroll'); $('[data-zoom-close]', z).focus();
}

/* Recherche */
V.search = (params) => {
  const q = params.get('q') || '';
  return `<div class="wrap">
    <div class="cat-head"><h1>${q ? `« ${esc(q)} »` : 'Rechercher'}</h1><p id="nres"></p></div>
    <form class="search-field" style="margin:12px 0" id="bigSearch" role="search">${ico('search')}<label class="sr-only" for="bigQ">Rechercher</label><input id="bigQ" type="search" value="${esc(q)}" placeholder="Un bijou, un prénom, une île…"></form>
    <div class="chips" style="padding:0 0 16px;margin:0;flex-wrap:wrap">${['collier prénom', 'Mayotte', 'bracelet couple', 'montre homme', 'bague gravée', 'Madagascar'].map(s => `<a class="chip" href="#/recherche?q=${encodeURIComponent(s)}">${s}</a>`).join('')}</div>
    <div class="grid" id="searchGrid"></div><div class="plus" id="plus"></div><div style="height:32px"></div></div>`;
};
V.search.after = (params) => {
  const f = $('#bigSearch'), i = $('#bigQ'), q = params.get('q') || '';
  f.addEventListener('submit', (e) => { e.preventDefault(); location.hash = '#/recherche?q=' + encodeURIComponent(i.value.trim()); });
  if (!q) { i.focus(); return; }
  const grid = $('#searchGrid'); grid.innerHTML = skeletons(4);
  listerProduits({ recherche: motsRecherche(q), limit: 48 }).then(({ produits, total }) => {
    if (!$('#searchGrid')) return;
    remember(produits);
    $('#nres').textContent = `${total} résultat${total > 1 ? 's' : ''}${total > 48 ? ' · les 48 premiers' : ''}`;
    grid.innerHTML = produits.length ? produits.map(card).join('') : `<div class="etat"><p>Aucun résultat. Essaie un mot plus simple, ou demande-nous.</p><a class="btn" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">Demander sur WhatsApp</a></div>`;
    observeReveal();
  }).catch(() => { grid.innerHTML = erreurHTML(); $('[data-retry]', grid).addEventListener('click', () => route(true)); });
};

/* Favoris (gardés sur l'appareil) */
V.favs = () => {
  const list = Object.values(state.favs);
  return `<div class="wrap"><div class="cat-head"><h1>Mes favoris</h1><p>${list.length} article${list.length > 1 ? 's' : ''}, gardés sur cet appareil.</p></div>
    ${list.length ? `<div class="grid">${list.map(f => `<article class="card"><a class="card__media" href="#/p/${encodeURIComponent(f.slug)}">${f.img ? `<img src="${f.img}" alt="${esc(f.nom)}" loading="lazy">` : ''}</a>
      <button class="fav" data-fav="${f.id}" aria-pressed="true" aria-label="Retirer des favoris : ${esc(f.nom)}" style="position:absolute;top:4px;right:4px"><span>${ico('heart')}</span></button>
      <div class="card__info"><a class="card__name" href="#/p/${encodeURIComponent(f.slug)}">${esc(f.nom)}</a><div class="price"><span>${esc(f.prix)}</span></div></div></article>`).join('')}</div>`
      : `<div class="empty">${ico('heart')}<p>Touche le ♡ d’un bijou pour le retrouver ici.</p><a class="btn" href="${pageLink('nouveautes')}">Voir les nouveautés</a></div>`}<div style="height:40px"></div></div>`;
};

/* Pages d'information (textes fournis par Zarahissi) */
const INFOS = {
  livraison: () => `<h1>Livraison & délais</h1>
    <p>Livraison par La Poste avec suivi partout, livraison par livreur à Mayotte, et retrait gratuit en boutique. Les frais sont calculés automatiquement au moment du paiement.</p>
    <table class="table"><thead><tr><th>Zone</th><th>Mode</th><th>Délai</th></tr></thead><tbody>
    ${ZONES.flatMap(z => z.modes.map(([m, d], i) => `<tr><td>${i ? '' : '<b>' + z.nom + '</b>'}</td><td>${m}</td><td>${d}</td></tr>`)).join('')}</tbody></table>
    <h2>La Poste avec suivi</h2><p>Ta commande est envoyée dans une enveloppe à bulles, avec soin, et déposée dans ta boîte aux lettres. Si elle ne rentre pas, elle t’attend à ton bureau de poste. Tu reçois un numéro de suivi dès l’expédition, à suivre sur <a href="https://www.laposte.fr/outils/suivre-vos-envois" target="_blank" rel="noopener">laposte.fr</a>.</p>
    <h2>Livreur à Mayotte</h2><p>Ta commande est confiée à un livreur professionnel partenaire qui te la remet en main propre sous 48 heures.</p>
    <h2>Retrait en boutique (gratuit)</h2><p>Dès que ta commande est prête, tu reçois un e-mail. ${BOUTIQUE.adresse} · ${BOUTIQUE.horaires} · ${BOUTIQUE.tel}.</p>`,
  paiement: () => `<h1>Modes de paiement</h1>
    <ul><li><b>Cartes de crédit</b> : Visa, Mastercard, American Express</li><li><b>Cartes de débit</b> : Visa, Mastercard</li><li><b>PayPal</b></li><li><b>Espèces</b> : uniquement sur place, à Kavani, Mamoudzou (Quartier Vaga Musique). Contact : ${BOUTIQUE.tel}.</li></ul>
    <p>Nous n’acceptons pas les chèques, les chèques vacances, les chèques déjeuner, ni les crédits.</p>
    <h2>Le paiement en ligne est-il sécurisé ?</h2><p>Oui. Le paiement se fait sur la page sécurisée de Wix, avec SumUp et PayPal. Tes données de carte ne passent jamais par ce site.</p>
    <h2>Peut-on payer en plusieurs fois ?</h2><p>Pas pour le moment.</p>`,
  faq: () => `<h1>Questions fréquentes</h1>
    ${[['Où êtes-vous situés ?', `Notre boutique est à ${BOUTIQUE.adresse}.`], ['Quels sont vos horaires ?', `Du lundi au samedi, ${BOUTIQUE.horaires}.`],
       ['Quels sont les délais de livraison ?', 'France métropolitaine : 2 à 10 jours. Mayotte : 4 à 10 jours par La Poste, ou 48 h avec le livreur. La Réunion, la Guadeloupe et la Martinique : 5 à 12 jours.'],
       ['Comment suivre mon colis ?', 'Tu reçois un numéro de suivi dès l’expédition, à suivre sur laposte.fr.'],
       ['Le retrait en magasin, comment ça marche ?', `Dès que ta commande est prête, tu reçois un e-mail. Retrait au ${BOUTIQUE.adresse}, ${BOUTIQUE.horaires}.`],
       ['Quels moyens de paiement acceptez-vous ?', 'Carte bancaire (Visa, Mastercard, American Express), PayPal, et espèces en boutique.'],
       ['Puis-je modifier ma gravure après la commande ?', 'Contacte-nous vite sur WhatsApp : tant que la gravure n’est pas lancée, on peut la corriger.']]
      .map(([q, a]) => `<details class="acc"><summary>${q}${ico('down')}</summary><div><p>${a}</p></div></details>`).join('')}
    <p>Pas de réponse ? <a href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">Écris-nous sur WhatsApp</a>.</p>`,
  histoire: () => `<h1>Notre histoire</h1><p><i>Texte à compléter par Zarahissi.</i></p>
    <p>Zarahissi, ce sont des bijoux qui ont du sens : ton prénom, ton île, les personnes que tu aimes, à petit prix. Nous les envoyons à Mayotte, à La Réunion, aux Antilles et en France, et tu peux aussi les retirer dans notre boutique de Kavani, à Mamoudzou.</p>`,
  fidelite: () => `<h1>${FIDELITE.titre}</h1>
    <p class="note" style="font-size:18px"><b>${FIDELITE.accroche}</b> : chaque euro dépensé chez Zarahissi te rapporte un point.</p>
    <p><i>Avantages détaillés à compléter par Zarahissi.</i></p>
    <p>Pour connaître tes points ou une question sur le programme, écris-nous.</p>
    <a class="btn btn--wa" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">${ico('chat')} Écrire sur WhatsApp</a>`,
  contact: () => `<h1>Contact</h1><p>Une question sur une commande, une gravure ou un cadeau ? On te répond vite.</p>
    <div class="contact-cards">
      <div class="ccard"><h3>WhatsApp</h3><p>Le plus rapide.</p><a class="btn btn--wa" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">${ico('chat')} Écrire</a></div>
      <div class="ccard"><h3>Téléphone</h3><p style="user-select:all">${BOUTIQUE.tel}</p></div>
      <div class="ccard"><h3>Boutique</h3><p>${BOUTIQUE.adresse}<br>${BOUTIQUE.horaires}</p></div>
    </div>`,
  'guide-tailles': () => `<h1>Guide des tailles de bagues</h1><p>Mesure le tour de ton doigt avec un fil, puis reporte la longueur en millimètres.</p>
    <table class="table"><thead><tr><th>Taille</th><th>Tour de doigt</th><th>Diamètre</th></tr></thead><tbody>${Array.from({ length: 11 }, (_, i) => 50 + i * 2).map(t => `<tr><td><b>${t}</b></td><td>${t} mm</td><td>${(t / Math.PI).toFixed(1).replace('.', ',')} mm</td></tr>`).join('')}</tbody></table>
    <p class="note">Entre deux tailles ? Prends la plus grande.</p>`,
};
V.info = (page) => INFOS[page] ? `<div class="wrap"><div class="prose">${INFOS[page]()}</div></div>` : V.notfound();
V.notfound = () => `<div class="wrap"><div class="empty" style="padding-top:64px"><h1>Page introuvable</h1><p>Cette page a peut-être changé d’adresse avec le nouveau site.</p><a class="btn" href="#/">Retour à l’accueil</a></div></div>`;

/* ---------- Routeur ---------- */
let lastPath = null;
function route(keepScroll) {
  const h = location.hash.slice(1) || '/';
  const [path, qs] = h.split('?');
  const params = new URLSearchParams(qs || '');
  const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
  let html, after = () => {}, tab = '', nav = '';
  if (!parts.length) { html = V.home(); after = V.home.after; tab = 'home'; }
  else if (parts[0] === 'c') { html = V.cat(parts[1]); after = () => V.cat.after(parts[1]); tab = 'menu'; nav = MENU.find(m => m.page === parts[1] || m.page === PAGES[parts[1]]?.parent || m.page === PAGES[PAGES[parts[1]]?.parent]?.parent)?.page; }
  else if (parts[0] === 'p') { html = V.product(); after = () => V.product.after(parts[1]); }
  else if (parts[0] === 'recherche') { html = V.search(params); after = () => V.search.after(params); tab = 'search'; }
  else if (parts[0] === 'favoris') { html = V.favs(); tab = 'fav'; }
  else if (parts[0] === 'infos') { html = V.info(parts[1]); }
  else html = V.notfound();
  const main = $('#main');
  main.innerHTML = `<div class="view-enter">${html}</div>`;
  if (!keepScroll) window.scrollTo({ top: 0, behavior: 'instant' });
  if (path !== lastPath && !keepScroll) main.focus({ preventScroll: true });
  lastPath = path;
  after();
  observeReveal();
  $$('#tabbar [data-tab]').forEach(t => t.classList.toggle('on', t.dataset.tab === tab));
  $$('#nav [data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === nav));
  const h1 = $('h1', main)?.textContent.trim();
  document.title = (parts.length && h1 ? h1 + ' · ' : '') + 'Zarahissi · Bijoux personnalisés à petit prix';
  document.body.classList.toggle('has-cta', parts[0] === 'p');
  $$('.suggest.open').forEach(x => x.classList.remove('open'));
  closeSheets(true); $('#zoom').hidden = true; document.body.classList.remove('no-scroll');
}

/* Apparition douce au défilement : les cartes restent visibles si l'observateur est absent */
let io;
function observeReveal() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { $$('.reveal').forEach(e => e.classList.add('in')); return; }
  io = io || new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -5% 0px' });
  $$('.reveal:not(.in)').forEach((e, i) => { e.style.transitionDelay = (i % 4) * 60 + 'ms'; io.observe(e); });
}

/* ---------- Événements globaux ---------- */
document.addEventListener('click', async (e) => {
  const t = e.target.closest('button, a');
  if (!t) return;
  if (t.matches('[data-fav]')) {
    const id = t.dataset.fav, on = !state.favs[id];
    if (on) { const p = cacheProduits.get(id); if (!p) return; state.favs[id] = { id, slug: p.slug, nom: p.name, prix: prix(p).texte, img: imagePrincipale(p, 500) }; }
    else delete state.favs[id];
    saveFavs();
    $$(`[data-fav="${id}"]`).forEach(b => { b.setAttribute('aria-pressed', on); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); });
    if (on) toast(`${ico('heart')} Ajouté à tes favoris`, 1800);
    if (location.hash === '#/favoris') route(true);
    return;
  }
  if (t.matches('[data-quick]')) {
    const p = cacheProduits.get(t.dataset.quick); if (!p) return;
    t.disabled = true;
    try { await ajouter(p, undefined, {}); } catch (err) { console.error(err); toast('Ajout impossible. Ouvre la fiche du produit.'); }
    finally { t.disabled = false; }
    return;
  }
  if (t.matches('[data-open-cart]')) { renderCart(); openSheet('cartSheet'); refreshCart().then(() => renderCart()).catch(() => {}); return; }
  if (t.matches('[data-checkout]')) {
    t.disabled = true; t.textContent = 'Ouverture du paiement…';
    try { location.href = await checkout(); }
    catch (err) { console.error(err); renderCart('Le paiement n’a pas pu s’ouvrir. Réessaie dans un instant.'); }
    return;
  }
  if (t.matches('[data-tab="menu"]') || t.id === 'btnMenu') { openSheet('menuSheet'); return; }
  if (t.matches('[data-close]')) { closeSheets(); return; }
  if (t.matches('[data-zoom-close]')) { $('#zoom').hidden = true; document.body.classList.remove('no-scroll'); return; }
  if (t.matches('[data-acc]')) {
    const sub = $('#' + t.getAttribute('aria-controls')), open = t.getAttribute('aria-expanded') !== 'true';
    $$('#menuSheet [data-acc]').forEach(b => { b.setAttribute('aria-expanded', 'false'); $('#' + b.getAttribute('aria-controls')).classList.remove('open'); });
    t.setAttribute('aria-expanded', open); sub.classList.toggle('open', open);
    return;
  }
  if (t.matches('[data-qty]')) { const n = +t.dataset.n; cartAction(() => n < 1 ? removeFromCart(t.dataset.qty) : updateCartItemQuantity(t.dataset.qty, n)); return; }
  if (t.matches('[data-rm]')) { cartAction(() => removeFromCart(t.dataset.rm)); return; }
  if (t.tagName === 'A' && t.getAttribute('href')?.startsWith('#') && t.closest('.sheet')) closeSheets(true);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!$('#zoom').hidden) { $('#zoom').hidden = true; document.body.classList.remove('no-scroll'); return; }
  closeSheets();
});
$('#scrim').addEventListener('click', () => closeSheets());
$('#zoom').addEventListener('click', (e) => { if (e.target.id === 'zoom') { e.currentTarget.hidden = true; document.body.classList.remove('no-scroll'); } });

/* En-tête qui se réduit au défilement */
const hdr = $('#hdr');
const setH = () => document.documentElement.style.setProperty('--hdr-h', hdr.offsetHeight + 'px');
let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => { if (scrollY > 90) hdr.classList.add('scrolled'); else if (scrollY < 8) hdr.classList.remove('scrolled'); setH(); ticking = false; });
}, { passive: true });
addEventListener('resize', setH);
addEventListener('hashchange', () => route());

/* Les liens « Tout voir » du méga-menu reçoivent une vraie photo de l'univers */
async function megaImages() {
  for (const a of $$('[data-mega-img]')) {
    const pg = PAGES[a.dataset.megaImg];
    try {
      const { produits } = await listerProduits({ cols: pg.cols, tri: 'nouveautes', limit: 1 });
      const u = imagePrincipale(produits[0], 300);
      if (u) a.insertAdjacentHTML('afterbegin', `<img src="${u}" alt="" loading="lazy" style="width:150px;height:150px;object-fit:cover;border-radius:999px 999px 6px 6px">`);
    } catch { /* reste sans image */ }
  }
}

/* ---------- Démarrage ---------- */
renderAnnounce(); renderChips(); renderNav(); renderMenuSheet(); renderFooter(); mountSearch(); updateCounts();
route(); setH();
refreshCart().catch(() => {});
if (matchMedia('(min-width: 1024px)').matches) megaImages();
