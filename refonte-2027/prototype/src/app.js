/* =========================================================================
   Zarahissi 2027 · Prototype cliquable
   Application monopage en JavaScript sans dépendance. Routes (hash) :
     #/                    accueil
     #/c/:categorie?pour=  page catégorie (filtres, tri)
     #/p/:produit          fiche produit (personnalisation avec aperçu)
     #/recherche?q=        recherche
     #/favoris             favoris
     #/commande            tunnel de commande (zone, livraison, paiement)
     #/compte              compte, suivi de commande, fidélité
     #/infos/:page         livraison, paiement, faq, histoire, contact…
   Correspondance Wix Studio : voir docs/03-prototype-et-wix-studio.md
   ========================================================================= */
(() => {
'use strict';

/* ---------- Utilitaires ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const eur = (n) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
const esc = (t) => String(t ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9€ ]/g, ' ');
const ico = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const byId = Object.fromEntries(PRODUITS.map(p => [p.id, p]));
const store = {
  get(k, d) { try { const v = localStorage.getItem('zr-' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('zr-' + k, JSON.stringify(v)); } catch { /* navigation privée */ } },
};

/* ---------- État ---------- */
const state = {
  cart: store.get('cart', []),
  favs: new Set(store.get('favs', [])),
  zone: store.get('zone', 'mayotte'),
  co: { step: 1, zone: null, mode: null, info: {}, pay: null },
};
const saveCart = () => { store.set('cart', state.cart); updateCounts(); };
const saveFavs = () => { store.set('favs', [...state.favs]); updateCounts(); };

/* ---------- Prix, remises et livraison ---------- */
function totals(modeId, zoneId) {
  const sub = state.cart.reduce((s, l) => s + l.prix * l.qty, 0);
  const palier = [...BOUTIQUE.paliers].reverse().find(p => sub >= p.des);
  const remise = palier ? palier.remise : 0;
  let port = null;
  if (modeId) {
    const zone = ZONES.find(z => z.id === zoneId);
    const mode = zone && zone.modes.find(m => m.id === modeId);
    port = mode ? (sub >= BOUTIQUE.livraisonOfferteDes ? 0 : mode.prix) : null;
  }
  return { sub, remise, port, total: Math.max(0, sub - remise + (port || 0)) };
}
function gaugeHTML(sub) {
  const steps = [{ des: BOUTIQUE.livraisonOfferteDes, txt: 'la livraison offerte' }, ...BOUTIQUE.paliers.map(p => ({ des: p.des, txt: `−${p.remise} € sur ta commande` }))];
  const next = steps.find(s => sub < s.des);
  const max = steps[steps.length - 1].des;
  const pct = Math.min(100, sub / max * 100);
  const msg = next
    ? `Plus que <b>${eur(next.des - sub)}</b> pour ${next.txt}`
    : `<b>Bravo !</b> Livraison offerte et −${BOUTIQUE.paliers.at(-1).remise} € appliqués automatiquement.`;
  const ticks = steps.map(s => `<span style="position:absolute;left:${s.des / max * 100}%;top:-2px;width:2px;height:10px;background:var(--zr-marine);opacity:.35"></span>`).join('');
  return `<div class="gauge" role="status">${msg}<div class="gauge__bar" style="position:relative"><i style="width:${pct}%"></i>${ticks}</div>
    <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--zr-encre-2);margin-top:4px"><span>Livraison offerte dès ${BOUTIQUE.livraisonOfferteDes} €</span><span>−5 € dès 70 € · −10 € dès 100 €</span></div></div>`;
}

/* ---------- Recherche tolérante aux fautes ---------- */
const STOP = new Set(['de', 'la', 'le', 'les', 'un', 'une', 'pour', 'des', 'd', 'l', 'en', 'a', 'au', 'aux', 'et', 'avec', 'mon', 'ma', 'mes']);
const stem = (w) => w.length > 3 ? w.replace(/(x|s)$/, '') : w;
function lev(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
const hay = {};
PRODUITS.forEach(p => {
  const c = CATS[p.cat] || {};
  const words = [p.nom, c.titre, c.parent && CATS[c.parent].titre, p.collection === 'iles' ? 'iles ile' : p.collection, p.ile, ...(p.pour || []),
    ...p.occasions.map(o => OCCASIONS[o]), p.perso ? 'personnalise personnalisable grave gravure prenom nom' : '', p.ancien ? 'promo bon plan petit prix' : '', p.nouveau ? 'nouveau nouveaute' : '',
    p.metaux ? p.metaux.map(m => METAUX[m].nom).join(' ') + ' or argent' : ''].join(' ');
  hay[p.id] = [...new Set(norm(words).split(/\s+/).filter(Boolean).map(stem))];
});
function search(q) {
  let n = norm(q);
  let max = null;
  const b = n.match(/(?:moins de|max|<)\s*(\d+)|(\d+)\s*(?:€|euros?)/);
  if (b) { max = +(b[1] || b[2]); n = n.replace(b[0], ' '); }
  const toks = n.split(/\s+/).filter(t => t && !STOP.has(t) && !/^\d+$/.test(t)).map(stem);
  const res = [];
  PRODUITS.forEach(p => {
    if (max && p.prix > max) return;
    let score = 0;
    for (const t of toks) {
      const words = hay[p.id];
      let best = 0;
      for (const w of words) {
        if (w === t) { best = 4; break; }
        if (w.startsWith(t)) best = Math.max(best, 3);
        else if (t.length >= 4) {
          const tol = t.length > 6 ? 2 : 1;
          if (lev(t, w.slice(0, t.length)) <= tol || lev(t, w) <= tol) best = Math.max(best, 1.5);
        }
      }
      if (!best) return; // chaque mot doit trouver une correspondance
      score += best;
    }
    if (!toks.length && !max) return;
    if (norm(p.nom).includes(norm(q).trim())) score += 3;
    res.push({ p, score: score + (p.best ? .5 : 0) });
  });
  return res.sort((a, b) => b.score - a.score).map(r => r.p);
}
function searchCats(q) {
  const n = norm(q).trim();
  if (n.length < 2) return [];
  return Object.entries(CATS).filter(([, c]) => norm(c.titre).includes(n) || lev(n, norm(c.titre).slice(0, n.length)) <= (n.length > 4 ? 1 : 0)).slice(0, 3);
}
const hl = (txt, q) => {
  const toks = norm(q).split(/\s+/).filter(t => t.length > 1);
  return esc(txt).split(' ').map(w => toks.some(t => norm(w).startsWith(t)) ? `<mark>${w}</mark>` : w).join(' ');
};

/* ---------- Composants ---------- */
const stars = (n, avis) => `<div class="stars" aria-label="Note ${String(n).replace('.', ',')} sur 5, ${avis} avis">${'★'.repeat(Math.round(n))}${'☆'.repeat(5 - Math.round(n))}<span>(${avis})</span></div>`;
const priceHTML = (p, prix = p.prix) => `<div class="price">${p.ancien ? `<span class="promo">${eur(prix)}</span><s>${eur(p.ancien)}</s>` : `<span>${p.montants ? 'dès ' + eur(p.montants[0]) : eur(prix)}</span>`}</div>`;
function badges(p) {
  const b = [];
  if (p.perso) b.push('<span class="badge badge--perso">Personnalisable</span>');
  if (p.nouveau) b.push('<span class="badge badge--new">Nouveau</span>');
  if (p.ancien) b.push(`<span class="badge badge--promo">−${Math.round((1 - p.prix / p.ancien) * 100)} %</span>`);
  else if (p.prix < 10) b.push('<span class="badge">Petit prix</span>');
  return b.slice(0, 2).join('');
}
const artOf = (p, o = {}) => art(p.visuel, { ile: p.ile, metal: p.metaux ? p.metaux[0] : 'or', text: p.montants ? eur(p.prix).replace(',00', '') : undefined, ...o });
function card(p) {
  const alt = p.metaux && p.metaux[1] ? `<span class="card__art card__art--alt">${artOf(p, { metal: p.metaux[1], s: 128 })}</span>` : '';
  return `<article class="card reveal">
    <div class="card__media">${alt}<span class="card__art card__art--main">${artOf(p, { s: 128 })}</span>
      <div class="card__badges">${badges(p)}</div>
      <button class="fav" data-fav="${p.id}" aria-pressed="${state.favs.has(p.id)}" aria-label="${state.favs.has(p.id) ? 'Retirer des' : 'Ajouter aux'} favoris : ${esc(p.nom)}"><span>${ico('heart')}</span></button>
      <button class="quick" data-quick="${p.id}" aria-label="${p.perso || p.montants ? 'Personnaliser' : 'Ajouter au panier'} : ${esc(p.nom)}">${ico(p.perso || p.montants ? 'pen' : 'plus')}</button>
    </div>
    <div class="card__info">
      <a class="card__name" href="#/p/${p.id}">${esc(p.nom)}</a>
      ${priceHTML(p)}
      ${stars(p.note, p.avis)}
    </div>
  </article>`;
}
const skeletons = (n) => Array.from({ length: n }, () => `<div class="card skel" aria-hidden="true"><div class="card__media"></div><div class="line"></div><div class="line"></div></div>`).join('');
const secHead = (titre, lien, txt = 'Tout voir') => `<div class="sec__head"><h2>${titre}</h2>${lien ? `<a class="link" href="${lien}">${txt}</a>` : ''}</div>`;
const catLink = (slug) => '#/c/' + slug;

/* ---------- Mise en page globale ---------- */
function renderAnnounce() {
  const msgs = [`Livraison offerte dès ${BOUTIQUE.livraisonOfferteDes} € d’achat`, '✨ Notre site fait peau neuve !', 'Retrait gratuit à Mamoudzou', 'Livré à Mayotte, Réunion, Antilles, France'];
  const el = $('#announce');
  el.innerHTML = msgs.map((m, i) => `<p class="${i ? '' : 'on'}">${m}</p>`).join('');
  let i = 0;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(() => {
    const ps = $$('p', el);
    ps[i].className = 'off';
    i = (i + 1) % ps.length;
    ps[i].className = 'on';
    setTimeout(() => ps.forEach((p, k) => { if (k !== i) p.className = ''; }), 650);
  }, 4500);
}
function renderChips() {
  $('#chips').innerHTML = [
    `<a class="chip chip--saison" href="${catLink(SAISON.slug)}">${SAISON.titre}</a>`,
    `<a class="chip" href="${catLink('nouveautes')}">Nouveautés</a>`,
    `<a class="chip" href="${catLink('personnalises')}">Personnalisés</a>`,
    `<a class="chip" href="${catLink('bijoux-des-iles')}">Bijoux des îles</a>`,
    `<a class="chip chip--promo" href="${catLink('bons-plans')}">Bons plans</a>`,
    `<a class="chip" href="${catLink('montres')}">Montres</a>`,
    `<a class="chip" href="${catLink('idees-cadeaux')}">Idées cadeaux</a>`,
  ].join('');
}
function renderNav() {
  const items = [{ slug: SAISON.slug, titre: SAISON.titre, saison: true }, ...MENU];
  $('#nav').innerHTML = items.map(m => `<div class="nav__item">
    <a class="nav__link ${m.promo ? 'nav__link--promo' : ''} ${m.saison ? 'nav__link--saison' : ''}" href="${catLink(m.slug)}" data-nav="${m.slug}" ${m.groupes ? 'aria-haspopup="true"' : ''}>${m.titre}</a>
    ${m.groupes ? `<div class="mega"><div class="mega__in" style="${m.groupes.length < 3 ? `grid-template-columns:repeat(${m.groupes.length},1fr) 260px` : ''}">
      ${m.groupes.map(g => `<div><h4>${g.titre}</h4>${g.liens.map(([s, t]) => `<a href="${catLink(s)}">${t}</a>`).join('')}</div>`).join('')}
      <a class="mega__visual" href="${catLink(m.slug)}">${art(m.visuel, { s: 120, ile: 'Mayotte', label: false })}<span>Voir tout</span></a>
    </div></div>` : ''}
  </div>`).join('');
}
function renderMenuSheet() {
  const items = [{ slug: SAISON.slug, titre: SAISON.titre, saison: true }, ...MENU];
  $('#menuSheet').innerHTML = `
    <div class="sheet__head"><a class="logo" href="#/" style="text-align:left"><b style="font-size:20px">ZA RAHISSI</b></a><button class="icon-btn" data-close aria-label="Fermer le menu">${ico('close')}</button></div>
    <div class="sheet__body">
      <ul class="mnav">${items.map((m, i) => `<li>
        ${m.groupes ? `<button class="mnav__row" aria-expanded="false" aria-controls="sub-${i}" data-acc><span class="thumb">${art(m.visuel, { s: 36, ile: 'Mayotte', label: false })}</span><span>${m.titre}</span>${ico('down')}</button>
          <div class="mnav__sub" id="sub-${i}"><div><div>
            <a class="all" href="${catLink(m.slug)}">Voir tout</a>
            ${m.groupes.map(g => `${m.groupes.length > 1 ? `<h4>${g.titre}</h4>` : ''}${g.liens.map(([s, t]) => `<a href="${catLink(s)}">${t}</a>`).join('')}`).join('')}
          </div></div></div>`
        : `<a class="mnav__row ${m.promo ? 'promo' : ''} ${m.saison ? 'saison' : ''}" href="${catLink(m.slug)}"><span class="thumb">${m.saison ? '☾' : m.promo ? '%' : '✦'}</span><span>${m.titre}</span>${ico('right')}</a>`}
      </li>`).join('')}</ul>
      <div class="minfo">
        <h4>Aide</h4>
        <a href="#/compte">${ico('box')} Suivi de commande</a>
        <a href="#/infos/livraison">${ico('truck')} Livraison & délais</a>
        <a href="#/infos/faq">${ico('chat')} Questions fréquentes</a>
        <h4>Zarahissi & Vous</h4>
        <a href="#/infos/fidelite">${ico('gift')} Zarahissi Fidelity & parrainage</a>
        <a href="#/infos/histoire">${ico('store')} Notre histoire</a>
      </div>
    </div>
    <div class="sheet__foot"><a class="btn btn--wa btn--block" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">${ico('chat')} Une question ? WhatsApp</a></div>`;
}
function renderFooter() {
  const col = (titre, liens, open) => `<details ${open ? 'open' : ''}><summary>${titre}${ico('down')}</summary><ul>${liens.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></details>`;
  $('#foot').innerHTML = `<div class="wrap">
    <a class="logo" href="#/"><span class="logo__crown" style="justify-content:flex-start"><svg width="20" height="13" viewBox="0 0 22 14"><path d="M1 13 L3 3 L8 8 L11 1 L14 8 L19 3 L21 13 Z" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></span><b>ZA RAHISSI</b><em>Bons plans à petit prix</em></a>
    <p style="margin-top:12px;max-width:420px">Bijoux personnalisés et accessoires à petit prix, préparés avec amour à Mayotte et livrés partout en Outre-mer et en France.</p>
    <div class="foot__cols">
      ${col('Boutique', [...MENU.map(m => [catLink(m.slug), m.titre]), [catLink('carte-cadeau'), 'Carte cadeau']])}
      ${col('Zarahissi & Vous', [['#/infos/fidelite', 'Zarahissi Fidelity'], ['#/infos/fidelite', 'Parrainer un ami'], ['#/infos/ambassadeur', 'Devenir ambassadeur·rice'], ['#/infos/blog', 'Blog'], ['#/infos/histoire', 'Notre histoire']])}
      ${col('Aide', [['#/compte', 'Suivi de commande'], ['#/infos/livraison', 'Livraison & délais'], ['#/infos/paiement', 'Modes de paiement'], ['#/infos/guide-tailles', 'Guide des tailles de bagues'], ['#/infos/faq', 'FAQ'], ['#/infos/contact', 'Contact'], ['#/infos/cgv', 'CGV'], ['#/infos/mentions', 'Mentions légales']])}
      <details><summary>Nous trouver${ico('down')}</summary><ul>
        <li><a href="#/infos/contact">${BOUTIQUE.adresse}</a></li><li><a href="#/infos/contact">Du lundi au samedi · ${BOUTIQUE.horaires}</a></li>
        <li><a href="tel:+262639718445">${BOUTIQUE.tel}</a></li><li><a href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
        <li><a href="#/">Instagram @za_rahissi</a></li><li><a href="#/">Facebook Zarahissi Maore</a></li><li><a href="#/">Snapchat zarahissi</a></li>
      </ul></details>
    </div>
    <div class="foot__bottom"><div class="pay" aria-label="Moyens de paiement"><span>VISA</span><span>MASTERCARD</span><span>AMEX</span><span>PAYPAL</span><span>ESPÈCES EN BOUTIQUE</span></div>
      <span>© 2027 Zarahissi · Mamoudzou, Mayotte · Paiement sécurisé avec SumUp, Wix et PayPal</span><span>Prototype de démonstration : produits, prix et tarifs fictifs, aucune commande réelle.</span></div>
  </div>`;
}
function mountSearch() {
  $$('[data-search-host]').forEach((host, k) => {
    host.innerHTML = `<form class="search-field" role="search" action="#/recherche">
      ${ico('search')}<label class="sr-only" for="q${k}">Rechercher</label>
      <input id="q${k}" type="search" name="q" placeholder="Rechercher un bijou, un prénom…" autocomplete="off" aria-autocomplete="list" aria-controls="sg${k}" aria-expanded="false">
      <div class="suggest" id="sg${k}" role="listbox"></div></form>`;
    const input = $('input', host), box = $('.suggest', host), form = $('form', host);
    let idx = -1;
    const close = () => { box.classList.remove('open'); input.setAttribute('aria-expanded', 'false'); idx = -1; };
    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (q.length < 2) return close();
      const ps = search(q).slice(0, 5), cs = searchCats(q);
      box.innerHTML = (cs.map(([s, c]) => `<a href="${catLink(s)}" role="option"><span class="thumb">${ico('grid')}</span><span>${hl(c.titre, q)}<small>Catégorie</small></span></a>`).join('')
        + ps.map(p => `<a href="#/p/${p.id}" role="option"><span class="thumb">${artOf(p, { s: 44 })}</span><span>${hl(p.nom, q)}<small>${eur(p.prix)}${p.perso ? ' · personnalisable' : ''}</small></span></a>`).join(''))
        || `<p class="hint">Aucun résultat pour « ${esc(q)} ». Essaie « collier », « prénom », « Mayotte »…</p>`;
      if (ps.length) box.innerHTML += `<a href="#/recherche?q=${encodeURIComponent(q)}" role="option"><span class="thumb">${ico('search')}</span><span><b>Voir les ${search(q).length} résultats</b></span></a>`;
      box.classList.add('open'); input.setAttribute('aria-expanded', 'true');
    });
    input.addEventListener('keydown', (e) => {
      const opts = $$('a', box);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); if (!opts.length) return;
        idx = (idx + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
        opts.forEach((o, i) => o.classList.toggle('active', i === idx));
      } else if (e.key === 'Escape') close();
      else if (e.key === 'Enter' && idx >= 0) { e.preventDefault(); location.hash = opts[idx].getAttribute('href'); close(); input.blur(); }
    });
    form.addEventListener('submit', (e) => { e.preventDefault(); close(); input.blur(); location.hash = '#/recherche?q=' + encodeURIComponent(input.value.trim()); });
    document.addEventListener('click', (e) => { if (!host.contains(e.target)) close(); });
    box.addEventListener('click', () => { close(); input.value = ''; });
  });
}
function updateCounts() {
  const n = state.cart.reduce((s, l) => s + l.qty, 0);
  $$('[data-cart-count]').forEach(e => e.textContent = n || '');
  $$('[data-fav-count]').forEach(e => e.textContent = state.favs.size || '');
}
function bumpCart() {
  $$('[data-open-cart] .ico').forEach(i => { i.classList.remove('bump'); void i.offsetWidth; i.classList.add('bump'); });
}
function toast(html, ms = 3200) {
  const t = document.createElement('div');
  t.className = 'toast'; t.innerHTML = html;
  $('#toasts').replaceChildren(t); // une seule notification à la fois
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, ms);
}

/* ---------- Tiroirs (menu, panier, filtres) ---------- */
let lastFocus = null;
function openSheet(id) {
  closeSheets(true);
  $('#toasts').replaceChildren();
  const sh = $('#' + id), scrim = $('#scrim');
  lastFocus = document.activeElement;
  sh.hidden = false; scrim.hidden = false;
  requestAnimationFrame(() => { sh.classList.add('open'); scrim.classList.add('open'); });
  document.body.classList.add('no-scroll');
  $$(`[aria-controls="${id}"]`).forEach(b => b.setAttribute('aria-expanded', 'true'));
  setTimeout(() => { const f = $('button, a, input, select', sh); f && f.focus({ preventScroll: true }); }, 50);
}
function closeSheets(silent) {
  const open = $$('.sheet.open');
  if (!open.length) return;
  open.forEach(sh => {
    sh.classList.remove('open');
    $$(`[aria-controls="${sh.id}"]`).forEach(b => b.setAttribute('aria-expanded', 'false'));
    setTimeout(() => { if (!sh.classList.contains('open')) sh.hidden = true; }, 360);
  });
  const scrim = $('#scrim');
  scrim.classList.remove('open');
  setTimeout(() => { if (!$('.sheet.open')) scrim.hidden = true; }, 360);
  document.body.classList.remove('no-scroll');
  if (!silent && lastFocus) lastFocus.focus({ preventScroll: true });
}
function renderCart() {
  const t = totals();
  const lines = state.cart.map(l => {
    const p = byId[l.id];
    const o = l.opts;
    const desc = [o.text && `« ${esc(o.text)}${o.text2 ? ' & ' + esc(o.text2) : ''} »`, o.font && POLICES.find(f => f.id === o.font)?.nom, o.metal && METAUX[o.metal].nom, o.taille && 'Taille ' + o.taille, o.montant && 'Montant ' + eur(o.montant)].filter(Boolean).join(' · ');
    return `<div class="line"><a class="line__img" href="#/p/${p.id}">${artOf(p, { s: 72, metal: o.metal, text: o.text || (o.montant ? o.montant + ' €' : undefined), text2: o.text2, font: POLICES.find(f => f.id === o.font) })}</a>
      <div><a class="line__name" href="#/p/${p.id}">${esc(p.nom)}</a><div class="line__opts">${desc}</div>
        <div class="line__row"><div class="qty" role="group" aria-label="Quantité"><button data-qty="${l.key}" data-d="-1" aria-label="Retirer un">−</button><span>${l.qty}</span><button data-qty="${l.key}" data-d="1" aria-label="Ajouter un">+</button></div><b>${eur(l.prix * l.qty)}</b></div>
        <button class="rm" data-rm="${l.key}">Supprimer</button></div></div>`;
  }).join('');
  $('#cartSheet').innerHTML = `
    <div class="sheet__head"><h2>Mon panier</h2><button class="icon-btn" data-close aria-label="Fermer le panier">${ico('close')}</button></div>
    <div class="sheet__body">${state.cart.length ? gaugeHTML(t.sub) + lines : `<div class="empty">${ico('bag')}<p>Ton panier est vide pour l'instant.</p><a class="btn" href="${catLink('personnalises')}">Découvrir les personnalisés</a></div>`}</div>
    ${state.cart.length ? `<div class="sheet__foot"><div class="totals"><div><span>Sous-total</span><span>${eur(t.sub)}</span></div>
      ${t.remise ? `<div class="disc"><span>Remise automatique</span><span>−${eur(t.remise)}</span></div>` : ''}
      <div><span>Livraison</span><span>${t.sub >= BOUTIQUE.livraisonOfferteDes ? '<b style="color:var(--zr-succes)">Offerte</b>' : 'calculée à l’étape suivante'}</span></div>
      <div class="grand"><span>Total</span><span>${eur(t.sub - t.remise)}</span></div></div>
      <a class="btn btn--block" href="#/commande">Commander</a><button class="link" data-close style="justify-self:center;min-height:40px">Continuer mes achats</button></div>` : ''}`;
}
function addToCart(id, opts = {}, prix) {
  const p = byId[id];
  const key = id + '|' + JSON.stringify(opts);
  const ex = state.cart.find(l => l.key === key);
  if (ex) ex.qty++; else state.cart.push({ key, id, opts, qty: 1, prix: prix ?? p.prix });
  saveCart(); bumpCart();
  toast(`<span>${ico('check', 'ico" style="display:inline;vertical-align:-5px')} Ajouté au panier</span><button data-open-cart>Voir le panier</button>`);
}

/* ---------- Filtres de catégorie ---------- */
let filt = null;
const freshFilters = (params) => ({ max: 40, metaux: new Set(), pour: new Set(params.get('pour') ? [params.get('pour')] : []), perso: false, nouveau: false, promo: false, sort: 'pertinence' });
function applyFilters(list, f) {
  let r = list.filter(p => p.prix <= f.max
    && (!f.metaux.size || (p.metaux && p.metaux.some(m => f.metaux.has(m))))
    && (!f.pour.size || p.pour.some(x => f.pour.has(x)))
    && (!f.perso || p.perso) && (!f.nouveau || p.nouveau) && (!f.promo || p.ancien));
  const s = { 'prix-asc': (a, b) => a.prix - b.prix, 'prix-desc': (a, b) => b.prix - a.prix, 'avis': (a, b) => b.avis - a.avis, 'nouveautes': (a, b) => (b.nouveau ? 1 : 0) - (a.nouveau ? 1 : 0) }[f.sort];
  if (s) r = [...r].sort(s); else r = [...r].sort((a, b) => (b.best ? 1 : 0) - (a.best ? 1 : 0));
  return r;
}
function nFilters(f) { return (f.max < 40 ? 1 : 0) + f.metaux.size + f.pour.size + f.perso + f.nouveau + f.promo; }
function renderFilterSheet(base, onApply) {
  const f = filt;
  const chip = (group, val, label, extra = '') => `<button class="chip" data-f="${group}" data-v="${val}" aria-pressed="${f[group].has(val)}">${extra}${label}</button>`;
  const count = () => applyFilters(base, f).length;
  const draw = () => {
    $('#filterSheet').innerHTML = `
      <div class="sheet__head"><h2>Filtrer</h2><button class="icon-btn" data-close aria-label="Fermer les filtres">${ico('close')}</button></div>
      <div class="sheet__body">
        <div class="fgroup"><h3>Prix maximum : <span id="maxv">${f.max >= 40 ? 'tous' : eur(f.max)}</span></h3><input type="range" min="5" max="40" step="1" value="${f.max}" id="fmax" aria-label="Prix maximum"></div>
        <div class="fgroup"><h3>Couleur du métal</h3><div class="opts">${Object.entries(METAUX).map(([k, m]) => chip('metaux', k, m.nom, `<span class="metal-dot" style="background:${m.couleur}"></span>`)).join('')}</div></div>
        <div class="fgroup"><h3>Pour qui</h3><div class="opts">${[['femme', 'Femme'], ['homme', 'Homme'], ['couple', 'Couple'], ['enfant', 'Enfant']].map(([v, l]) => chip('pour', v, l)).join('')}</div></div>
        <div class="fgroup"><label class="toggle">Personnalisable <input type="checkbox" data-t="perso" ${f.perso ? 'checked' : ''}></label><label class="toggle">Nouveautés <input type="checkbox" data-t="nouveau" ${f.nouveau ? 'checked' : ''}></label><label class="toggle">En promotion <input type="checkbox" data-t="promo" ${f.promo ? 'checked' : ''}></label></div>
      </div>
      <div class="sheet__foot" style="grid-template-columns:auto 1fr"><button class="btn btn--ghost" id="freset">Effacer</button><button class="btn" id="fapply">Voir ${count()} article${count() > 1 ? 's' : ''}</button></div>`;
    const upd = () => { $('#fapply').textContent = `Voir ${count()} article${count() > 1 ? 's' : ''}`; };
    $('#fmax').addEventListener('input', (e) => { f.max = +e.target.value; $('#maxv').textContent = f.max >= 40 ? 'tous' : eur(f.max); upd(); });
    $$('[data-f]', $('#filterSheet')).forEach(b => b.addEventListener('click', () => { const s = f[b.dataset.f]; s.has(b.dataset.v) ? s.delete(b.dataset.v) : s.add(b.dataset.v); b.setAttribute('aria-pressed', s.has(b.dataset.v)); upd(); }));
    $$('[data-t]', $('#filterSheet')).forEach(c => c.addEventListener('change', () => { f[c.dataset.t] = c.checked; upd(); }));
    $('#freset').addEventListener('click', () => { Object.assign(f, freshFilters(new URLSearchParams()), { sort: f.sort }); draw(); });
    $('#fapply').addEventListener('click', () => { closeSheets(); onApply(); });
  };
  draw();
}

/* ---------- Pages ---------- */
const V = {};

V.home = () => {
  const best = PRODUITS.filter(p => p.best);
  const news = PRODUITS.filter(p => p.nouveau);
  const promos = PRODUITS.filter(p => p.ancien).slice(0, 4);
  const univers = [['personnalises', 'Personnalisés', 'nom'], ['colliers', 'Colliers', 'coeur'], ['bracelets', 'Bracelets', 'jonc'], ['bijoux-des-iles', 'Bijoux des îles', 'ile'], ['montres', 'Montres', 'montre'], ['accessoires', 'Accessoires', 'lunettes'], ['idees-cadeaux', 'Idées cadeaux', 'carte']];
  return `
  <section class="hero">
    <div class="hero__visual" aria-hidden="true"><div class="lagoon"></div><div class="hero__jewel">${art('nom', { s: 220, text: 'Zara' })}</div><div class="shine"></div></div>
    <div class="hero__copy">
      <span class="kicker">Fait avec amour depuis Mayotte</span>
      <h1>Des bijoux qui ont <i>l’éclat</i> du lagon</h1>
      <p>Bijoux gravés à ton prénom, bijoux des îles et accessoires à petit prix. Livrés à Mayotte, à La Réunion, aux Antilles et en France.</p>
      <div class="hero__btns"><a class="btn" href="${catLink('personnalises')}">Personnaliser mon bijou</a><a class="btn btn--ghost" href="${catLink('nouveautes')}">Nouveautés</a></div>
    </div>
  </section>
  <div class="reassure" role="list">
    <div role="listitem">${ico('truck')}<p><b>Livraison suivie</b><span>Mayotte · Réunion · Antilles · France</span></p></div>
    <div role="listitem">${ico('pen')}<p><b>Bijoux personnalisés</b><span>Prénom, date, gravure express</span></p></div>
    <div role="listitem">${ico('store')}<p><b>Retrait gratuit</b><span>Boutique de Mamoudzou</span></p></div>
    <div role="listitem">${ico('lock')}<p><b>Paiement sécurisé</b><span>CB, PayPal, espèces sur place</span></p></div>
  </div>

  <section class="sec"><div class="wrap">${secHead('Nos univers')}
    <div class="univers hscroll">${univers.map(([s, t, v]) => `<a href="${catLink(s)}" class="reveal"><div class="ph">${art(v, { s: 90, ile: 'Mayotte', label: false })}</div>${t}</a>`).join('')}</div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">${secHead('Nouveautés', catLink('nouveautes'))}
    <div class="hscroll hscroll--grid" style="--cols:4">${news.slice(0, 4).map(card).join('')}</div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="atelier reveal">
      <div class="atelier__demo" id="atelierDemo">${art('nom', { s: 230, text: 'Inaya' })}</div>
      <div class="atelier__txt">
        <span class="kicker">Atelier personnalisation</span>
        <h2>Écris ton prénom, regarde-le briller</h2>
        <p>Choisis le texte, la police et le métal : l’aperçu se met à jour en direct avant que tu commandes.</p>
        <label class="sr-only" for="atelierIn">Essaie avec un prénom</label>
        <input id="atelierIn" maxlength="10" placeholder="Essaie avec un prénom…" value="Inaya">
        <a class="btn btn--sable" id="atelierGo" href="#/p/collier-prenom?t=Inaya">Créer mon collier · 14,90 €</a>
      </div>
    </div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">${secHead('Meilleures ventes', catLink('personnalises'))}
    <div class="grid">${best.slice(0, 4).map(card).join('')}</div>
  </div></section>

  <section class="sec sec--creme"><div class="wrap">
    ${secHead('Bijoux des îles', catLink('bijoux-des-iles'))}
    <p class="sec__intro">Ton île, près du cœur, où que tu sois.</p>
    <div class="hscroll hscroll--grid" style="--cols:4">${PRODUITS.filter(p => p.collection === 'iles').slice(0, 4).map(card).join('')}</div>
    <div class="iles">${['Mayotte', 'La Réunion', 'Comores', 'Madagascar', 'Martinique', 'Guadeloupe'].map(i => `<a href="#/recherche?q=${encodeURIComponent(i)}">♥ ${i}</a>`).join('')}</div>
  </div></section>

  <section class="sec"><div class="wrap">
    ${secHead('Vos créations', catLink('personnalises'), 'Créer le mien')}
    <p class="sec__intro">De vraies commandes, gravées et emballées à Mamoudzou.</p>
    <div class="hscroll hscroll--grid" style="--cols:6">${CREATIONS.map(c => `<a class="creation reveal" href="#/p/${c.produit}"><div class="creation__card">${art(c.visuel, { s: 150, text: c.texte.split(/ & | · /)[0], text2: c.texte.split(/ & | · /)[1] })}</div><small>« ${esc(c.texte)} »</small></a>`).join('')}</div>
  </div></section>

  <section class="sec sec--marine"><div class="wrap">
    <div class="sec__head"><h2>Bons plans à saisir</h2><a class="link" href="${catLink('bons-plans')}" style="color:var(--zr-sable)">Tout voir</a></div>
    <p class="sec__intro">Petits prix, grandes envies, tant qu’il y en a.</p>
    <div class="grid" style="--zr-encre:#F3EEDF">${promos.map(card).join('')}</div>
  </div></section>

  <section class="sec"><div class="wrap">
    ${secHead('Ils et elles adorent')}
    <div class="score"><b>4,9</b><div>${stars(4.9, 1240)}<small style="color:var(--zr-encre-2)">sur l’ensemble des avis vérifiés</small></div></div>
    <div class="hscroll hscroll--grid" style="--cols:4">${AVIS.map(a => `<figure class="avis reveal" style="margin:0">${stars(a.note, 1).replace(/<span>.*<\/span>/, '')}<blockquote>« ${esc(a.texte)} »</blockquote><small><b>${a.nom}</b> · ${a.lieu} · <a href="#/p/${a.produit}">${esc(byId[a.produit].nom)}</a></small></figure>`).join('')}</div>
  </div></section>

  <section class="sec sec--creme"><div class="wrap">
    ${secHead('Elles portent Zarahissi', '#/infos/ambassadeur', 'Devenir ambassadrice')}
    <div class="hscroll hscroll--grid" style="--cols:4">${['Chafia', 'Nasma', 'Zaïnaba', 'Riziki'].map(n => `<div class="amb reveal"><button class="amb__vid" aria-label="Lire la vidéo de ${n}" data-toast="Vidéo de démonstration : les vidéos Instagram et TikTok des ambassadrices s’afficheront ici."><span class="play">${ico('play')}</span></button><p>@${n.toLowerCase()} · ambassadrice</p></div>`).join('')}</div>
  </div></section>

  <section class="sec"><div class="wrap histoire">
    <div class="histoire__img reveal"><div class="lagoon"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">${art('fleur', { s: 200 })}</div></div>
    <div class="reveal" style="display:grid;gap:14px">
      <span class="kicker">Notre histoire</span>
      <h2 style="font-size:var(--zr-fs-h2)">Fabriqué avec amour depuis Mayotte</h2>
      <p>Zarahissi est née à Mamoudzou avec une idée simple : offrir à tout le monde des bijoux qui ont du sens, gravés à son prénom, à petit prix. Chaque commande est préparée, gravée et emballée à la main dans notre boutique de Kavani.</p>
      <a class="link" href="#/infos/histoire">Découvrir notre histoire</a>
    </div>
  </div></section>

  <section class="sec sec--creme"><div class="wrap">
    ${secHead('Le blog', '#/infos/blog', 'Tous les articles')}
    <div class="hscroll hscroll--grid">${BLOG.map(b => `<a class="blog reveal" href="#/infos/blog"><div class="ph">${art(b.visuel, { s: 110, ile: 'Mayotte', label: false })}</div><h3>${esc(b.titre)}</h3><small>${b.date}</small></a>`).join('')}</div>
  </div></section>

  <section class="sec news"><div class="wrap" style="max-width:640px;text-align:center">
    <span class="kicker">Newsletter</span>
    <h2 style="font-size:var(--zr-fs-h2);margin-top:8px">Les nouveautés et les bons plans en premier</h2>
    <form data-newsletter style="justify-content:center"><label class="sr-only" for="nl">E-mail</label><input id="nl" type="email" required placeholder="Ton adresse e-mail"><button class="btn">Je m’inscris</button></form>
  </div></section>`;
};
V.home.after = () => {
  const inp = $('#atelierIn');
  inp.addEventListener('input', () => {
    const t = inp.value.trim() || 'Inaya';
    $('#atelierDemo').innerHTML = art('nom', { s: 230, text: t });
    $('#atelierGo').href = '#/p/collier-prenom?t=' + encodeURIComponent(t);
  });
};

V.cat = (slug, params) => {
  const c = CATS[slug];
  if (!c) return V.notfound();
  const base = PRODUITS.filter(c.filtre);
  const key = slug + '?' + params.toString();
  if (!filt || filt._key !== key) { filt = freshFilters(params); filt._key = key; }
  const parent = c.parent && CATS[c.parent];
  const kids = Object.entries(CATS).filter(([, x]) => x.parent === slug || (c.parent && x.parent === c.parent));
  const titre = c.titre + (params.get('pour') ? ' · ' + { femme: 'Femme', homme: 'Homme', couple: 'Couple', enfant: 'Enfant' }[params.get('pour')] : '');
  return `<div class="wrap">
    <nav class="crumbs" aria-label="Fil d’Ariane"><a href="#/">Accueil</a> › ${parent ? `<a href="${catLink(c.parent)}">${parent.titre}</a> › ` : ''}<span aria-current="page">${esc(titre)}</span></nav>
    <div class="cat-head"><h1>${esc(titre)}</h1>${c.intro ? `<p>${esc(c.intro)}</p>` : ''}</div>
    ${kids.length ? `<div class="chips" style="padding:12px 0 4px;margin:0">${parent ? `<a class="chip" href="${catLink(c.parent)}">Tout voir</a>` : ''}${kids.filter(([s]) => !s.startsWith('moins-de') || slug === 'idees-cadeaux').slice(0, 12).map(([s, x]) => `<a class="chip ${s === slug ? 'on' : ''}" href="${catLink(s)}">${esc(x.titre.replace(/^Cadeaux · /, '').replace(/ personnalisé(e)?s$/, ''))}</a>`).join('')}</div>` : ''}
    <div class="toolbar"><button class="btn btn--ghost" data-filter-open>${ico('filter')} Filtrer${nFilters(filt) ? ` (${nFilters(filt)})` : ''}</button>
      <label class="sr-only" for="sort">Trier</label><select id="sort"><option value="pertinence">Pertinence</option><option value="prix-asc">Prix croissant</option><option value="prix-desc">Prix décroissant</option><option value="nouveautes">Nouveautés</option><option value="avis">Les plus aimés</option></select>
      <span class="n" id="nres"></span></div>
    <div class="active-filters" id="activeF"></div>
    <div class="grid" id="catGrid">${skeletons(4)}</div>
    <div style="height:40px"></div>
  </div>`;
};
V.cat.after = (slug) => {
  const c = CATS[slug]; if (!c) return;
  const base = PRODUITS.filter(c.filtre);
  const sortSel = $('#sort'); sortSel.value = filt.sort;
  const draw = (anim) => {
    if (!$('#catGrid')) return; // l'utilisateur a changé de page entre-temps
    const list = applyFilters(base, filt);
    $('#nres').textContent = `${list.length} article${list.length > 1 ? 's' : ''}`;
    $('[data-filter-open]').innerHTML = `${ico('filter')} Filtrer${nFilters(filt) ? ` (${nFilters(filt)})` : ''}`;
    const tags = [];
    if (filt.max < 40) tags.push(['max', '', `≤ ${eur(filt.max)}`]);
    filt.metaux.forEach(m => tags.push(['metaux', m, METAUX[m].nom]));
    filt.pour.forEach(m => tags.push(['pour', m, m[0].toUpperCase() + m.slice(1)]));
    ['perso', 'nouveau', 'promo'].forEach(k => filt[k] && tags.push([k, '', { perso: 'Personnalisable', nouveau: 'Nouveautés', promo: 'Promotions' }[k]]));
    $('#activeF').innerHTML = tags.map(([g, v, l]) => `<button data-unf="${g}" data-v="${v}" aria-label="Retirer le filtre ${l}">${esc(l)} ✕</button>`).join('');
    $$('[data-unf]').forEach(b => b.addEventListener('click', () => { const g = b.dataset.unf; if (g === 'max') filt.max = 40; else if (filt[g] instanceof Set) filt[g].delete(b.dataset.v); else filt[g] = false; draw(); }));
    $('#catGrid').innerHTML = list.length ? list.map(card).join('') : `<div class="empty" style="grid-column:1/-1"><p>Aucun article ne correspond à ces filtres.</p><button class="btn btn--ghost" data-unf-all>Effacer les filtres</button></div>`;
    const ua = $('[data-unf-all]'); ua && ua.addEventListener('click', () => { Object.assign(filt, freshFilters(new URLSearchParams()), { sort: filt.sort }); draw(); });
    observeReveal(anim);
  };
  sortSel.addEventListener('change', () => { filt.sort = sortSel.value; draw(); });
  $('[data-filter-open]').addEventListener('click', () => { renderFilterSheet(base, () => draw()); openSheet('filterSheet'); });
  setTimeout(() => draw(true), 280); // squelettes visibles brièvement
};

V.product = (id, params) => {
  const p = byId[id];
  if (!p) return V.notfound();
  const cfg = {
    metal: p.metaux ? p.metaux[0] : null,
    font: p.perso && p.perso.type !== 'musique' && p.visuel !== 'initiales' ? 'script' : null,
    text: params.get('t') || '', text2: '', taille: '', montant: p.montants ? p.prix : null, occ: '', msg: '',
  };
  V.product.cfg = cfg;
  const c = CATS[p.cat];
  const related = PRODUITS.filter(x => x.id !== p.id && (x.cat === p.cat || (p.collection && x.collection === p.collection))).concat(PRODUITS.filter(x => x.best && x.id !== p.id)).filter((x, i, a) => a.indexOf(x) === i).slice(0, 4);
  const pt = p.perso;
  const lbl = pt && pt.labels ? pt.labels : ['Ton prénom', 'Son prénom'];
  const persoHTML = !pt ? '' : pt.type === 'musique' ? `
    <div class="opt"><div class="opt__label"><label for="mPrenom">Prénom de la personne *</label></div><div class="field"><input id="mPrenom" data-cfg="text" maxlength="20" required placeholder="ex. Nasma"></div></div>
    <div class="opt"><div class="opt__label"><label for="mOcc">Occasion</label></div><div class="field"><select id="mOcc" data-cfg="occ"><option value="">Choisir…</option>${Object.values(OCCASIONS).map(o => `<option>${o}</option>`).join('')}<option>Mariage</option><option>Juste pour dire je t’aime</option></select></div></div>
    <div class="opt"><div class="opt__label"><label for="mMsg">Ce qu’on doit savoir (souvenirs, surnoms…)</label></div><div class="field"><textarea id="mMsg" data-cfg="msg" maxlength="400" placeholder="Raconte-nous en quelques mots…"></textarea></div></div>`
    : `
    <div class="opt"><div class="opt__label"><span>Aperçu de ta gravure</span></div><div class="preview" id="preview" aria-live="polite"></div></div>
    <div class="opt ${pt.type === 'duo' ? 'fields-2' : ''}">
      <div><div class="opt__label"><label for="pt1">${pt.type === 'duo' ? lbl[0] : pt.type === 'bague' ? 'Texte à graver' : p.visuel === 'initiales' ? 'Initiale(s)' : 'Ton texte'} *</label><small id="cnt1">0/${pt.max}</small></div><div class="field" id="f1"><input id="pt1" data-cfg="text" maxlength="${pt.max}" value="${esc(cfg.text)}" placeholder="${p.visuel === 'initiales' ? 'ex. AK' : 'ex. Amina'}" autocomplete="off"></div></div>
      ${pt.type === 'duo' ? `<div><div class="opt__label"><label for="pt2">${lbl[1]} *</label></div><div class="field" id="f2"><input id="pt2" data-cfg="text2" maxlength="${pt.max}" placeholder="ex. Kamel" autocomplete="off"></div></div>` : ''}
    </div>
    <p class="ferr" id="perr" hidden>Indique le texte à graver pour continuer.</p>
    ${cfg.font ? `<div class="opt"><div class="opt__label"><span>Police</span></div><div class="segs" role="group" aria-label="Police">${POLICES.map(f => `<button class="seg" data-font="${f.id}" aria-pressed="${f.id === cfg.font}" style="font-family:${f.css.replace(/"/g, "'")};${f.style ? 'font-style:' + f.style : ''};${f.poids ? 'font-weight:' + f.poids : ''}">Aa<small>${f.nom}</small></button>`).join('')}</div></div>` : ''}`;
  return `<div class="wrap pdp-page">
    <nav class="crumbs" aria-label="Fil d’Ariane"><a href="#/">Accueil</a> › ${c.parent ? `<a href="${catLink(c.parent)}">${CATS[c.parent].titre}</a> › ` : ''}<a href="${catLink(p.cat)}">${c.titre}</a> › <span aria-current="page">${esc(p.nom)}</span></nav>
    <div class="pdp">
      <div class="gal">
        <div class="gal__track" id="galTrack" aria-label="Photos du produit, balaie pour voir les suivantes">
          <div class="gal__slide" data-zoom="0" role="button" aria-label="Agrandir la photo 1" tabindex="0"><div id="galMain">${artOf(p, { s: 300 })}</div></div>
          <div class="gal__slide" data-zoom="1" role="button" aria-label="Agrandir la photo 2" tabindex="0">${artOf(p, { s: 260, metal: p.metaux && p.metaux[1] ? p.metaux[1] : undefined })}</div>
          <div class="gal__slide" data-zoom="2" role="button" aria-label="Agrandir la photo 3" tabindex="0"><div class="creation__card" style="width:62%;background:none">${artOf(p, { s: 180 })}</div></div>
        </div>
        <div class="gal__thumbs">${[0, 1, 2].map(i => `<button data-thumb="${i}" class="${i ? '' : 'on'}" aria-label="Voir la photo ${i + 1}">${artOf(p, { s: 60, metal: i === 1 && p.metaux && p.metaux[1] ? p.metaux[1] : undefined })}</button>`).join('')}</div>
        <div class="gal__dots" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
        <button class="fav" data-fav="${p.id}" aria-pressed="${state.favs.has(p.id)}" aria-label="Ajouter aux favoris"><span>${ico('heart')}</span></button>
      </div>
      <div class="pdp__info">
        <div class="pdp__badges">${badges(p)}${p.express ? '<span class="badge" style="background:var(--zr-creme)">Gravure express</span>' : ''}</div>
        <h1>${esc(p.nom)}</h1>
        <a href="#avis" style="text-decoration:none">${stars(p.note, p.avis)}</a>
        <div class="pdp__price" id="pdpPrice">${priceHTML(p)}</div>
        ${p.montants ? `<div class="opt"><div class="opt__label"><span>Montant</span></div><div class="segs" role="group" aria-label="Montant">${p.montants.map(m => `<button class="seg" data-montant="${m}" aria-pressed="${m === cfg.montant}">${m} €</button>`).join('')}</div></div>` : ''}
        ${persoHTML}
        ${p.metaux ? `<div class="opt"><div class="opt__label"><span>Couleur : <b id="metalName" style="color:var(--zr-marine)">${METAUX[cfg.metal].nom}</b></span></div><div class="swatches" role="group" aria-label="Couleur du métal">${p.metaux.map(m => `<button class="swatch" data-metal="${m}" aria-pressed="${m === cfg.metal}" aria-label="${METAUX[m].nom}" style="background:${METAUX[m].couleur}"></button>`).join('')}</div></div>` : ''}
        ${p.taille ? `<div class="opt"><div class="opt__label"><label for="taille">Taille *</label><a href="#/infos/guide-tailles">Guide des tailles</a></div><div class="field" id="ft"><select id="taille" data-cfg="taille"><option value="">Choisir ma taille</option>${Array.from({ length: 11 }, (_, i) => 50 + i * 2).map(t => `<option>${t}</option>`).join('')}</select></div><p class="ferr" id="terr" hidden>Choisis ta taille.</p></div>` : ''}
        <div class="sticky-cta"><div class="price" id="ctaPrice">${eur(cfg.montant || p.prix)}${p.ancien ? `<s style="font-size:13px">${eur(p.ancien)}</s>` : ''}</div><button class="btn" id="addBtn">${ico('bag')} Ajouter au panier</button></div>
        <div class="ship-box"><label for="shipZone"><b>${ico('truck', 'ico" style="display:inline;vertical-align:-5px;width:20px')} Livraison vers</b></label>
          <select id="shipZone">${ZONES.map(z => `<option value="${z.id}" ${z.id === state.zone ? 'selected' : ''}>${z.nom}</option>`).join('')}</select><ul id="shipList"></ul>
          <small>Livraison offerte dès ${BOUTIQUE.livraisonOfferteDes} € d’achat.</small></div>
        <details class="acc" open><summary>Description${ico('down')}</summary><div><p>${esc(p.desc)}</p>${p.perso ? '<p>Chaque pièce est gravée à la commande dans notre atelier de Mamoudzou. Vérifie bien l’orthographe : un bijou gravé ne peut être ni repris ni échangé.</p>' : ''}</div></details>
        <details class="acc"><summary>Matière & entretien${ico('down')}</summary><div><p>${p.metaux ? 'Acier inoxydable 316L, hypoallergénique, qui ne noircit pas et résiste à l’eau. Évite le parfum directement sur le bijou pour garder son éclat.' : 'Voir la notice incluse avec le produit.'}</p></div></details>
        <details class="acc"><summary>Paiement sécurisé${ico('down')}</summary><div><p>Carte bancaire (Visa, Mastercard, American Express) ou PayPal. Espèces acceptées en boutique, à Kavani, Mamoudzou.</p></div></details>
      </div>
    </div>
    <section class="sec" id="avis"><div class="sec__head"><h2>Avis clients</h2></div>
      <div class="score"><b>${String(p.note).replace('.', ',')}</b><div>${stars(p.note, p.avis)}</div></div>
      <div class="hscroll hscroll--grid" style="--cols:3">${AVIS.slice(0, 3).map(a => `<figure class="avis" style="margin:0">${stars(a.note, 1).replace(/<span>.*<\/span>/, '')}<blockquote>« ${esc(a.texte)} »</blockquote><small><b>${a.nom}</b> · ${a.lieu} · achat vérifié</small></figure>`).join('')}</div>
    </section>
    <section class="sec" style="padding-top:0"><div class="sec__head"><h2>Tu aimeras aussi</h2></div><div class="hscroll hscroll--grid" style="--cols:4">${related.map(card).join('')}</div></section>
    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Product', name: p.nom, description: p.desc, brand: 'Zarahissi', aggregateRating: { '@type': 'AggregateRating', ratingValue: p.note, reviewCount: p.avis }, offers: { '@type': 'Offer', priceCurrency: 'EUR', price: p.prix, availability: 'https://schema.org/InStock' } })}<\/script>
  </div>`;
};
V.product.after = (id) => {
  const p = byId[id]; if (!p) return;
  const cfg = V.product.cfg;
  const font = () => POLICES.find(f => f.id === cfg.font) || POLICES[0];
  const draw = () => {
    const o = { metal: cfg.metal, font: font(), ile: p.ile };
    if (p.perso && p.perso.type !== 'musique') { o.text = cfg.text || undefined; o.text2 = cfg.text2 || undefined; }
    if (p.montants) o.text = cfg.montant + ' €';
    $('#galMain').innerHTML = artOf(p, { ...o, s: 300 });
    const pv = $('#preview'); if (pv) pv.innerHTML = artOf(p, { ...o, s: 170 });
    const c1 = $('#cnt1'); if (c1) c1.textContent = `${cfg.text.length}/${p.perso.max}`;
  };
  const drawShip = () => {
    const z = ZONES.find(x => x.id === state.zone);
    $('#shipList').innerHTML = z.modes.map(m => `<li><b>${m.nom}</b> · ${m.delai} · ${m.prix ? eur(m.prix) : 'gratuit'}</li>`).join('');
  };
  $$('[data-cfg]').forEach(inp => inp.addEventListener('input', () => {
    cfg[inp.dataset.cfg] = inp.value.trimStart();
    inp.closest('.field')?.classList.remove('err');
    $('#perr') && ($('#perr').hidden = true);
    draw();
  }));
  $$('[data-font]').forEach(b => b.addEventListener('click', () => { cfg.font = b.dataset.font; $$('[data-font]').forEach(x => x.setAttribute('aria-pressed', x === b)); draw(); }));
  $$('[data-metal]').forEach(b => b.addEventListener('click', () => { cfg.metal = b.dataset.metal; $$('[data-metal]').forEach(x => x.setAttribute('aria-pressed', x === b)); $('#metalName').textContent = METAUX[cfg.metal].nom; draw(); }));
  $$('[data-montant]').forEach(b => b.addEventListener('click', () => {
    cfg.montant = +b.dataset.montant; $$('[data-montant]').forEach(x => x.setAttribute('aria-pressed', x === b));
    $('#pdpPrice').innerHTML = `<div class="price">${eur(cfg.montant)}</div>`; $('#ctaPrice').textContent = eur(cfg.montant); draw();
  }));
  $('#shipZone').addEventListener('change', (e) => { state.zone = e.target.value; store.set('zone', state.zone); drawShip(); });
  // Galerie : points, miniatures, zoom
  const track = $('#galTrack');
  track.addEventListener('scroll', () => { const i = Math.round(track.scrollLeft / track.clientWidth); $$('.gal__dots i').forEach((d, k) => d.classList.toggle('on', k === i)); $$('[data-thumb]').forEach((d, k) => d.classList.toggle('on', k === i)); }, { passive: true });
  $$('[data-thumb]').forEach(b => b.addEventListener('click', () => track.scrollTo({ left: track.clientWidth * +b.dataset.thumb, behavior: 'smooth' })));
  $$('[data-zoom]').forEach(sl => { const go = () => openZoom(sl.innerHTML); sl.addEventListener('click', go); sl.addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), go())); });
  // Ajout au panier avec validation
  $('#addBtn').addEventListener('click', () => {
    let ok = true;
    if (p.perso) {
      if (!cfg.text.trim()) { ok = false; ($('#f1') || $('#mPrenom').closest('.field')).classList.add('err'); }
      if (p.perso.type === 'duo' && !cfg.text2.trim()) { ok = false; $('#f2').classList.add('err'); }
      if (!ok) { const e = $('#perr'); if (e) e.hidden = false; ($('#pt1') || $('#mPrenom')).focus(); ($('#preview') || $('#mPrenom')).scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }
    if (p.taille && !cfg.taille) { if (ok) $('#taille').focus(); ok = false; $('#ft').classList.add('err'); $('#terr').hidden = false; }
    if (!ok) return toast('Il manque une information pour ton bijou.');
    const opts = {};
    if (cfg.metal) opts.metal = cfg.metal;
    if (p.perso) { opts.text = cfg.text.trim(); if (cfg.text2) opts.text2 = cfg.text2.trim(); if (cfg.font) opts.font = cfg.font; if (cfg.occ) opts.occ = cfg.occ; if (cfg.msg) opts.msg = cfg.msg; }
    if (cfg.taille) opts.taille = cfg.taille;
    if (p.montants) opts.montant = cfg.montant;
    addToCart(p.id, opts, cfg.montant || p.prix);
  });
  $('#taille')?.addEventListener('change', () => { $('#ft').classList.remove('err'); $('#terr').hidden = true; });
  draw(); drawShip();
};
function openZoom(html) {
  const z = $('#zoom');
  z.innerHTML = `<button class="icon-btn close" data-zoom-close aria-label="Fermer le zoom">${ico('close')}</button><div class="zoom__art">${html}</div>`;
  z.hidden = false; document.body.classList.add('no-scroll');
  $('[data-zoom-close]', z).focus();
}

V.search = (params) => {
  const q = params.get('q') || '';
  const res = q ? search(q) : [];
  return `<div class="wrap">
    <div class="cat-head"><h1>${q ? `« ${esc(q)} »` : 'Rechercher'}</h1>${q ? `<p>${res.length} résultat${res.length > 1 ? 's' : ''}</p>` : ''}</div>
    <form class="search-field" style="margin:12px 0" id="bigSearch" role="search">${ico('search')}<label class="sr-only" for="bigQ">Rechercher</label><input id="bigQ" type="search" value="${esc(q)}" placeholder="Un bijou, un prénom, « moins de 15 € »…"></form>
    <div class="chips" style="padding:0 0 16px;margin:0;flex-wrap:wrap">${['collier prénom', 'Mayotte', 'bracelet couple', 'montre homme', 'moins de 10 €', 'cadeau fête des mères'].map(s => `<a class="chip" href="#/recherche?q=${encodeURIComponent(s)}">${s}</a>`).join('')}</div>
    ${q && !res.length ? `<div class="empty"><p>Aucun résultat. Vérifie l’orthographe ou essaie un mot plus simple.</p><a class="btn" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">Demander sur WhatsApp</a></div>` : ''}
    <div class="grid">${res.map(card).join('')}</div><div style="height:40px"></div></div>`;
};
V.search.after = (params) => {
  const f = $('#bigSearch'), i = $('#bigQ');
  f.addEventListener('submit', (e) => { e.preventDefault(); location.hash = '#/recherche?q=' + encodeURIComponent(i.value.trim()); });
  if (!params.get('q')) i.focus();
};

V.favs = () => {
  const list = PRODUITS.filter(p => state.favs.has(p.id));
  return `<div class="wrap"><div class="cat-head"><h1>Mes favoris</h1><p>${list.length} article${list.length > 1 ? 's' : ''}, gardés sur cet appareil.</p></div>
    ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : `<div class="empty">${ico('heart')}<p>Touche le ♡ d’un bijou pour le retrouver ici.</p><a class="btn" href="${catLink('nouveautes')}">Voir les nouveautés</a></div>`}<div style="height:40px"></div></div>`;
};

/* ---------- Commande ---------- */
V.checkout = () => {
  if (!state.cart.length && state.co.step !== 4) return `<div class="wrap"><div class="empty" style="padding-top:64px">${ico('bag')}<p>Ton panier est vide.</p><a class="btn" href="#/">Retour à l’accueil</a></div></div>`;
  const co = state.co;
  if (!co.zone) co.zone = state.zone;
  const zone = ZONES.find(z => z.id === co.zone);
  if (!zone.modes.some(m => m.id === co.mode)) co.mode = null;
  const t = totals(co.mode, co.zone);
  const isRetrait = co.mode === 'retrait';
  const stepsHTML = `<ol class="steps">${['Livraison', 'Coordonnées', 'Paiement'].map((s, i) => `<li class="${co.step === i + 1 ? 'on' : co.step > i + 1 ? 'done' : ''}" ${co.step === i + 1 ? 'aria-current="step"' : ''}>${i + 1}. ${s}</li>`).join('')}</ol>`;
  if (co.step === 4) return `<div class="wrap"><div class="done-box view-enter"><div class="check">${ico('check')}</div><h1 style="font-size:var(--zr-fs-h1)">Merci ${esc(co.info.prenom || '')} !</h1>
    <p>Ta commande <b>${co.num}</b> est confirmée. Tu vas recevoir un e-mail récapitulatif.</p>
    <p class="note" style="max-width:480px;text-align:left">${co.lastMode === 'retrait' ? `Nous t’envoyons un e-mail dès qu’elle est prête. Retrait à ${BOUTIQUE.adresse}, ${BOUTIQUE.horaires}.` : co.lastMode === 'livreur' ? 'Notre livreur te la remet en main propre sous 48 h.' : 'Tu recevras ton numéro de suivi La Poste dès l’expédition.'}</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><a class="btn" href="#/compte?n=${co.num}">Suivre ma commande</a><a class="btn btn--ghost" href="#/">Retour à la boutique</a></div>
    <p style="font-size:13px;color:var(--zr-encre-2)">Prototype : aucune commande réelle n’a été passée.</p></div></div>`;
  const summary = `<aside class="summary"><h2 style="font-size:22px">Récapitulatif</h2>
    ${state.cart.map(l => { const p = byId[l.id]; return `<div class="line"><div class="line__img">${artOf(p, { s: 50, metal: l.opts.metal, text: l.opts.text, text2: l.opts.text2 })}</div><div><div class="line__name">${l.qty} × ${esc(p.nom)}</div><div class="line__opts">${l.opts.text ? '« ' + esc(l.opts.text) + (l.opts.text2 ? ' & ' + esc(l.opts.text2) : '') + ' »' : ''}</div><b>${eur(l.prix * l.qty)}</b></div></div>`; }).join('')}
    <div class="totals" style="margin-top:12px"><div><span>Sous-total</span><span>${eur(t.sub)}</span></div>${t.remise ? `<div class="disc"><span>Remise automatique</span><span>−${eur(t.remise)}</span></div>` : ''}
    <div><span>Livraison</span><span>${t.port === null ? '—' : t.port === 0 ? 'Offerte' : eur(t.port)}</span></div><div class="grand"><span>Total</span><span>${eur(t.total)}</span></div></div></aside>`;
  let body = '';
  if (co.step === 1) body = `<div><h2>Où livrer ta commande ?</h2>
    <div class="zone-grid" role="group" aria-label="Zone de livraison">${ZONES.map(z => `<button data-zone="${z.id}" aria-pressed="${z.id === co.zone}">${z.nom}</button>`).join('')}</div>
    <h2 style="font-size:22px">Mode de livraison</h2>
    ${zone.modes.map(m => `<label class="radio-card"><input type="radio" name="mode" value="${m.id}" ${co.mode === m.id ? 'checked' : ''}><span class="rc"><b><span>${m.nom}</span><span>${m.prix === 0 ? 'Gratuit' : t.sub >= BOUTIQUE.livraisonOfferteDes ? `<s style="font-weight:400;color:var(--zr-encre-2)">${eur(m.prix)}</s> Offerte` : eur(m.prix)}</span></b><small>${m.delai} · ${m.info}</small></span></label>`).join('')}
    ${zone.id !== 'mayotte' ? `<p class="note">Tu es à Mayotte ? Choisis « Mayotte » pour la livraison sous 48 h ou le retrait gratuit en boutique.</p>` : ''}
    <button class="btn btn--block" id="coNext" ${co.mode ? '' : 'disabled'} style="margin-top:12px">Continuer</button></div>`;
  if (co.step === 2) {
    const v = (k) => esc(co.info[k] || '');
    const fld = (k, l, type = 'text', ac = '', req = true) => `<label>${l}${req ? ' *' : ''}<div class="field"><input name="${k}" type="${type}" value="${v(k)}" autocomplete="${ac}" ${req ? 'required' : ''}></div></label>`;
    body = `<form id="coForm" class="form-grid" novalidate><h2>Tes coordonnées</h2>
      <div class="fields-2">${fld('prenom', 'Prénom', 'text', 'given-name')}${fld('nom', 'Nom', 'text', 'family-name')}</div>
      ${fld('email', 'E-mail', 'email', 'email')}${fld('tel', 'Téléphone (pour le livreur ou le retrait)', 'tel', 'tel')}
      ${isRetrait ? `<p class="note">Retrait en boutique : ${BOUTIQUE.adresse}, ${BOUTIQUE.horaires}. Nous t’envoyons un e-mail quand ta commande est prête.</p>` : `${fld('adresse', 'Adresse', 'text', 'street-address')}${fld('complement', 'Complément (bâtiment, quartier…)', 'text', 'address-line2', false)}<div class="fields-2">${fld('cp', 'Code postal', 'text', 'postal-code')}${fld('ville', 'Ville', 'text', 'address-level2')}</div>`}
      <p class="ferr" id="coErr" hidden>Merci de remplir les champs marqués d’une étoile.</p>
      <div style="display:flex;gap:10px"><button type="button" class="btn btn--ghost" data-co-back>Retour</button><button class="btn" style="flex:1">Continuer vers le paiement</button></div></form>`;
  }
  if (co.step === 3) body = `<div><h2>Paiement</h2>
    <label class="radio-card"><input type="radio" name="pay" value="cb" ${co.pay === 'cb' ? 'checked' : ''}><span class="rc"><b>Carte bancaire</b><small>Visa, Mastercard, American Express · paiement sécurisé SumUp / Wix</small></span></label>
    <label class="radio-card"><input type="radio" name="pay" value="paypal" ${co.pay === 'paypal' ? 'checked' : ''}><span class="rc"><b>PayPal</b><small>Tu seras redirigé vers PayPal pour valider.</small></span></label>
    ${isRetrait ? `<label class="radio-card"><input type="radio" name="pay" value="especes" ${co.pay === 'especes' ? 'checked' : ''}><span class="rc"><b>Espèces en boutique</b><small>À régler au retrait, à Kavani, Mamoudzou.</small></span></label>` : `<p class="note">Le paiement en espèces est possible uniquement avec le retrait en boutique à Mayotte.</p>`}
    <p style="font-size:13px;color:var(--zr-encre-2);margin:8px 0 14px">${ico('lock', 'ico" style="display:inline;width:16px;vertical-align:-3px')} Paiement 100 % sécurisé. Nous n’acceptons pas les chèques, ni le paiement en plusieurs fois pour le moment.</p>
    <div style="display:flex;gap:10px"><button class="btn btn--ghost" data-co-back>Retour</button><button class="btn" style="flex:1" id="coPay" ${co.pay ? '' : 'disabled'}>Payer ${eur(t.total)}</button></div></div>`;
  return `<div class="wrap">${stepsHTML}<div class="co">${body}${summary}</div></div>`;
};
V.checkout.after = () => {
  const co = state.co;
  $$('[data-zone]').forEach(b => b.addEventListener('click', () => { co.zone = b.dataset.zone; state.zone = co.zone; store.set('zone', co.zone); co.mode = null; route(true); }));
  $$('input[name=mode]').forEach(r => r.addEventListener('change', () => { co.mode = r.value; route(true); }));
  $('#coNext')?.addEventListener('click', () => { co.step = 2; route(); });
  $$('[data-co-back]').forEach(b => b.addEventListener('click', () => { co.step--; route(); }));
  const form = $('#coForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    $$('input', form).forEach(i => {
      co.info[i.name] = i.value.trim();
      const bad = i.required && (!i.value.trim() || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value)));
      i.closest('.field').classList.toggle('err', bad);
      i.setAttribute('aria-invalid', bad);
      if (bad && ok) { ok = false; i.focus(); }
    });
    $('#coErr').hidden = ok;
    if (ok) { co.step = 3; route(); }
  });
  $$('input[name=pay]').forEach(r => r.addEventListener('change', () => { co.pay = r.value; $('#coPay').disabled = false; }));
  $('#coPay')?.addEventListener('click', () => {
    co.num = 'ZR-' + (27000 + Math.floor(Math.random() * 999));
    co.lastMode = co.mode;
    co.step = 4; state.cart = []; saveCart(); route();
    co.pay = null; co.mode = null;
  });
};

/* ---------- Compte et suivi ---------- */
V.account = (params) => {
  const n = params.get('n') || '';
  return `<div class="wrap prose" style="max-width:860px">
    <h1>Mon compte</h1>
    <div class="contact-cards" style="grid-template-columns:1fr">
      <div class="ccard"><h3>${ico('box')} Suivre ma commande</h3>
        <form id="trackForm" class="form-grid"><div class="fields-2"><label>N° de commande<div class="field"><input id="trN" value="${esc(n)}" placeholder="ZR-27123" required></div></label><label>E-mail<div class="field"><input type="email" placeholder="ton@email.fr"></div></label></div><button class="btn">Suivre</button></form>
        <div id="trackRes"></div></div>
      <div class="ccard"><h3>${ico('gift')} Zarahissi Fidelity</h3><p>1 € dépensé = 1 point. 100 points = 5 € offerts. <b>Parraine une amie</b> : 5 € pour elle, 5 € pour toi.</p><a class="link" href="#/infos/fidelite">Voir le programme</a></div>
      <div class="ccard"><h3>${ico('user')} Connexion</h3><p>Retrouve tes commandes, tes adresses et tes points fidélité.</p><button class="btn btn--ghost" data-toast="Dans Wix Studio, cet espace correspond à « Espace membres » (Wix Members).">Se connecter</button></div>
    </div></div>`;
};
V.account.after = (params) => {
  const show = () => {
    const n = $('#trN').value.trim() || 'ZR-27000';
    const steps = [['Commande reçue', true], ['Gravure en atelier', true], ['Expédiée · La Poste', true], ['Livrée', false]];
    $('#trackRes').innerHTML = `<div style="margin-top:12px"><p><b>${esc(n)}</b> · exemple de suivi</p><ol style="list-style:none;padding:0;margin:10px 0 0;display:grid;gap:10px">${steps.map(([s, d]) => `<li style="display:flex;gap:10px;align-items:center"><span style="width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:${d ? 'var(--zr-marine)' : 'var(--zr-creme)'};color:#fff">${d ? ico('check', 'ico" style="width:16px;height:16px') : ''}</span>${s}</li>`).join('')}</ol>
      <a class="link" href="https://www.laposte.fr/outils/suivre-vos-envois" target="_blank" rel="noopener" style="display:inline-block;margin-top:12px">Suivre sur le site de La Poste</a></div>`;
  };
  $('#trackForm').addEventListener('submit', (e) => { e.preventDefault(); show(); });
  if (params.get('n')) show();
};

/* ---------- Pages d'information ---------- */
const INFOS = {
  livraison: () => `<h1>Livraison & délais</h1>
    <p>Nous proposons la livraison par La Poste avec suivi partout, la livraison par livreur à Mayotte et le retrait gratuit en boutique. <b>Livraison offerte dès ${BOUTIQUE.livraisonOfferteDes} € d’achat.</b></p>
    <table class="table"><thead><tr><th>Zone</th><th>Mode</th><th>Délai</th></tr></thead><tbody>
    ${ZONES.flatMap(z => z.modes.map((m, i) => `<tr><td>${i ? '' : '<b>' + z.nom + '</b>'}</td><td>${m.nom}</td><td>${m.delai}</td></tr>`)).join('')}</tbody></table>
    <h2>La Poste avec suivi</h2><p>Ta commande est envoyée dans une enveloppe à bulles, avec soin, et déposée dans ta boîte aux lettres. Si elle ne rentre pas, elle t’attend à ton bureau de poste. Tu reçois un numéro de suivi dès l’expédition, à suivre sur <a href="https://www.laposte.fr/outils/suivre-vos-envois" target="_blank" rel="noopener">laposte.fr</a>.</p>
    <h2>Livreur à Mayotte</h2><p>Ta commande est confiée à un livreur professionnel partenaire, qui te la remet en main propre sous 48 heures.</p>
    <h2>Retrait en boutique (gratuit)</h2><p>Dès que ta commande est prête, tu reçois un e-mail. ${BOUTIQUE.adresse} · ${BOUTIQUE.horaires} · ${BOUTIQUE.tel}.</p>
    <h2>Frais de livraison</h2><p>Ils sont calculés automatiquement au moment de la commande, selon ta zone et le mode choisi.</p>`,
  paiement: () => `<h1>Modes de paiement</h1>
    <ul><li><b>Cartes de crédit</b> : Visa, Mastercard, American Express</li><li><b>Cartes de débit</b> : Visa, Mastercard</li><li><b>PayPal</b></li><li><b>Espèces</b> : uniquement sur place, à Kavani, Mamoudzou (Quartier Vaga Musique). Contact : ${BOUTIQUE.tel}.</li></ul>
    <p>Nous n’acceptons pas les chèques, les chèques vacances, les chèques déjeuner, ni les crédits.</p>
    <h2>Le paiement en ligne est-il sécurisé ?</h2><p>Oui. Nous travaillons avec SumUp, Wix et PayPal, des références en matière de sécurité des paiements. Tu peux commander en toute confiance.</p>
    <h2>Peut-on payer en plusieurs fois ?</h2><p>Pas pour le moment.</p>`,
  faq: () => {
    const qs = [
      ['Commandes', 'Comment passer une commande ?', 'Choisis ton bijou, personnalise-le si besoin, ajoute-le au panier puis clique sur « Commander ». Il n’est pas obligatoire de créer un compte.'],
      ['Commandes', 'Où êtes-vous situés ?', `Notre boutique est à ${BOUTIQUE.adresse}.`],
      ['Commandes', 'Quels sont vos horaires ?', `Du lundi au samedi, ${BOUTIQUE.horaires}.`],
      ['Commandes', 'Comment créer un compte client ?', 'Touche l’icône compte en haut de la page, puis « Se connecter » et « Créer un compte ».'],
      ['Commandes', 'Mon code de réduction ne fonctionne pas, pourquoi ?', 'Bonne nouvelle : plus besoin de code ! La livraison offerte dès 40 € et les remises de 5 € (dès 70 €) et 10 € (dès 100 €) s’appliquent automatiquement dans ton panier.'],
      ['Livraison', 'Quels sont les délais de livraison ?', 'France métropolitaine : 2 à 10 jours. Mayotte : 4 à 10 jours par La Poste, ou 48 h avec le livreur. La Réunion, la Guadeloupe et la Martinique : 5 à 12 jours.'],
      ['Livraison', 'Comment suivre mon colis ?', 'Tu reçois un numéro de suivi dès l’expédition, à suivre sur laposte.fr ou depuis « Suivi de commande ».'],
      ['Livraison', 'Le retrait en magasin, comment ça marche ?', `Dès que ta commande est prête, tu reçois un e-mail. Retrait au ${BOUTIQUE.adresse}, ${BOUTIQUE.horaires}.`],
      ['Paiement', 'Quels moyens de paiement acceptez-vous ?', 'Carte bancaire (Visa, Mastercard, American Express), PayPal, et espèces en boutique.'],
      ['Paiement', 'Peut-on payer en plusieurs fois ?', 'Pas pour le moment.'],
      ['Personnalisation', 'Puis-je modifier ma gravure après la commande ?', 'Contacte-nous vite sur WhatsApp : tant que la gravure n’est pas lancée, on peut la corriger.'],
      ['Personnalisation', 'Qu’est-ce que la gravure express ?', 'Une sélection de bijoux gravés et prêts rapidement en boutique, à Mamoudzou.'],
    ];
    return `<h1>Questions fréquentes</h1>
      <div class="search-field">${ico('search')}<label class="sr-only" for="faqQ">Chercher une question</label><input id="faqQ" placeholder="Vous cherchez quelque chose ?"></div>
      <div class="faq-tabs chips" style="padding:0;margin:0">${['Toutes', 'Commandes', 'Livraison', 'Paiement', 'Personnalisation'].map((t, i) => `<button class="chip" data-faq="${t}" aria-pressed="${!i}">${t}</button>`).join('')}</div>
      <div id="faqList">${qs.map(([c, q, a]) => `<details class="acc" data-c="${c}"><summary>${q}${ico('down')}</summary><div><p>${a}</p></div></details>`).join('')}</div>
      <p>Pas de réponse ? <a href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">Écris-nous sur WhatsApp</a>.</p>`;
  },
  histoire: () => `<h1>Notre histoire</h1><p><i>Texte d’exemple, à remplacer par ton histoire.</i></p>
    <p>Zarahissi est née à Mamoudzou d’une envie simple : rendre les bijoux personnalisés accessibles à tout le monde, à petit prix, sans rien sacrifier à l’émotion.</p>
    <p>Chaque collier gravé, chaque bracelet, chaque bijou des îles est préparé à la main dans notre boutique de Kavani, puis envoyé à Mayotte, à La Réunion, aux Antilles et en France.</p>
    <h2>Nos engagements</h2><ul><li>Des petits prix toute l’année</li><li>De l’acier inoxydable qui ne noircit pas</li><li>Un service client réactif, sur WhatsApp</li><li>Un emballage soigné, prêt à offrir</li></ul>`,
  contact: () => `<h1>Contact</h1><p>Une question sur une commande, une gravure ou un cadeau ? On te répond vite.</p>
    <div class="contact-cards">
      <div class="ccard"><h3>WhatsApp</h3><p>Le plus rapide.</p><a class="btn btn--wa" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">${ico('chat')} Écrire</a></div>
      <div class="ccard"><h3>Téléphone</h3><p>${BOUTIQUE.tel}</p><a class="btn btn--ghost" href="tel:+262639718445">Appeler</a></div>
      <div class="ccard"><h3>Boutique</h3><p>${BOUTIQUE.adresse}<br>${BOUTIQUE.horaires}</p></div>
    </div>
    <h2>Nous écrire</h2><form class="form-grid" data-contact><label>Prénom<div class="field"><input required></div></label><label>E-mail<div class="field"><input type="email" required></div></label><label>Message<div class="field"><textarea required></textarea></div></label><button class="btn">Envoyer</button></form>`,
  'guide-tailles': () => `<h1>Guide des tailles de bagues</h1><p>Mesure le tour de ton doigt avec un fil, puis reporte la longueur en millimètres.</p>
    <table class="table"><thead><tr><th>Taille</th><th>Tour de doigt</th><th>Diamètre</th></tr></thead><tbody>${Array.from({ length: 11 }, (_, i) => 50 + i * 2).map(t => `<tr><td><b>${t}</b></td><td>${t} mm</td><td>${(t / Math.PI).toFixed(1).replace('.', ',')} mm</td></tr>`).join('')}</tbody></table>
    <p class="note">Entre deux tailles ? Prends la plus grande.</p>`,
  fidelite: () => `<h1>Zarahissi Fidelity</h1><p>Plus tu brilles, plus tu gagnes.</p>
    <ul><li><b>1 € dépensé = 1 point</b></li><li><b>100 points = 5 €</b> offerts sur ta prochaine commande</li><li>Un cadeau surprise pour ton anniversaire</li></ul>
    <h2>Parrainer un ami</h2><p>Partage ton lien : ton amie reçoit 5 € sur sa première commande, et toi aussi.</p><button class="btn" data-toast="Lien de parrainage copié (démo).">Copier mon lien</button>`,
  ambassadeur: () => `<h1>Deviens ambassadeur·rice Zarahissi</h1><p>Tu aimes nos bijoux et tu partages tes coups de cœur sur Instagram, TikTok ou Snapchat ? Rejoins l’équipe : des bijoux offerts, un code promo à ton nom et une commission sur les ventes.</p><a class="btn btn--wa" href="${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">Je postule sur WhatsApp</a>`,
  blog: () => `<h1>Le blog</h1>${BLOG.map(b => `<article class="ccard" style="grid-template-columns:96px 1fr;display:grid;gap:14px;align-items:center"><div style="background:var(--zr-tile-2);aspect-ratio:1;display:flex;align-items:center;justify-content:center">${art(b.visuel, { s: 80, ile: 'Mayotte', label: false })}</div><div><h3>${esc(b.titre)}</h3><small>${b.date}</small></div></article>`).join('')}`,
  cgv: () => `<h1>Conditions générales de vente</h1><p>À reprendre telles quelles depuis le site actuel.</p>`,
  mentions: () => `<h1>Mentions légales</h1><p>À reprendre telles quelles depuis le site actuel.</p>`,
};
V.info = (page) => INFOS[page] ? `<div class="wrap"><div class="prose">${INFOS[page]()}</div></div>` : V.notfound();
V.info.after = (page) => {
  if (page === 'faq') {
    let cat = 'Toutes';
    const filter = () => {
      const q = norm($('#faqQ').value);
      $$('#faqList details').forEach(d => d.hidden = !((cat === 'Toutes' || d.dataset.c === cat) && norm(d.textContent).includes(q)));
    };
    $('#faqQ').addEventListener('input', filter);
    $$('[data-faq]').forEach(b => b.addEventListener('click', () => { cat = b.dataset.faq; $$('[data-faq]').forEach(x => x.setAttribute('aria-pressed', x === b)); filter(); }));
  }
  $('[data-contact]')?.addEventListener('submit', (e) => { e.preventDefault(); e.target.reset(); toast('Message envoyé (démo). Réponse sous 24 h.'); });
};
V.notfound = () => `<div class="wrap"><div class="empty" style="padding-top:64px"><h1>Page introuvable</h1><p>Cette page a peut-être changé d’adresse avec le nouveau site.</p><a class="btn" href="#/">Retour à l’accueil</a></div></div>`;

/* ---------- Routeur ---------- */
let lastPath = null;
function route(keepScroll) {
  const h = location.hash.slice(1) || '/';
  const [path, qs] = h.split('?');
  const params = new URLSearchParams(qs || '');
  const parts = path.split('/').filter(Boolean);
  let html, after = () => {}, tab = '', nav = '';
  if (!parts.length) { html = V.home(); after = V.home.after; tab = 'home'; }
  else if (parts[0] === 'c') { html = V.cat(parts[1], params); after = () => V.cat.after(parts[1]); nav = MENU.find(m => m.slug === parts[1] || m.slug === CATS[parts[1]]?.parent)?.slug; tab = 'menu'; }
  else if (parts[0] === 'p') { html = V.product(parts[1], params); after = () => V.product.after(parts[1]); }
  else if (parts[0] === 'recherche') { html = V.search(params); after = () => V.search.after(params); tab = 'search'; }
  else if (parts[0] === 'favoris') { html = V.favs(); tab = 'fav'; }
  else if (parts[0] === 'commande') { if (path !== lastPath) { state.co.step = state.co.step === 4 ? 1 : state.co.step; } html = V.checkout(); after = V.checkout.after; }
  else if (parts[0] === 'compte') { html = V.account(params); after = () => V.account.after(params); }
  else if (parts[0] === 'infos') { html = V.info(parts[1]); after = () => V.info.after(parts[1]); }
  else html = V.notfound();
  const main = $('#main');
  main.innerHTML = `<div class="view-enter">${html}</div>`;
  if (!keepScroll) window.scrollTo({ top: 0, behavior: 'instant' });
  if (path !== lastPath && !keepScroll) main.focus({ preventScroll: true });
  lastPath = path;
  after();
  observeReveal(true);
  $$('#tabbar [data-tab]').forEach(t => t.classList.toggle('on', t.dataset.tab === tab));
  $$('#nav [data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === nav));
  document.title = (parts.length ? ($('h1', main)?.textContent.trim() + ' · ') : '') + 'Zarahissi · Bijoux personnalisés à petit prix';
  document.body.classList.toggle('has-cta', parts[0] === 'p');
  $$('.suggest.open').forEach(x => x.classList.remove('open'));
  $$('[data-search-host] input').forEach(i => { i.value = ''; i.setAttribute('aria-expanded', 'false'); });
  closeSheets(true);
  $('#zoom').hidden = true;
}

/* Apparition douce des sections au défilement */
let io;
function observeReveal() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { $$('.reveal').forEach(e => e.classList.add('in')); return; }
  io = io || new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal:not(.in)').forEach((e, i) => { e.style.transitionDelay = Math.min(i % 4, 3) * 60 + 'ms'; io.observe(e); });
}

/* ---------- Événements globaux ---------- */
document.addEventListener('click', (e) => {
  const t = e.target.closest('button, a');
  if (!t) return;
  if (t.matches('[data-fav]')) {
    const id = t.dataset.fav, on = !state.favs.has(id);
    on ? state.favs.add(id) : state.favs.delete(id);
    saveFavs();
    $$(`[data-fav="${id}"]`).forEach(b => { b.setAttribute('aria-pressed', on); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); });
    if (on) toast(`${ico('heart')} Ajouté à tes favoris`, 1800);
    if (location.hash === '#/favoris') route(true);
    return;
  }
  if (t.matches('[data-quick]')) {
    const p = byId[t.dataset.quick];
    if (p.perso || p.montants || p.taille) { location.hash = '#/p/' + p.id; return; }
    addToCart(p.id, p.metaux ? { metal: p.metaux[0] } : {});
    return;
  }
  if (t.matches('[data-open-cart]')) { renderCart(); openSheet('cartSheet'); return; }
  if (t.matches('[data-tab="menu"]') || t.id === 'btnMenu') { openSheet('menuSheet'); return; }
  if (t.matches('[data-close]')) { closeSheets(); return; }
  if (t.matches('[data-zoom-close]')) { $('#zoom').hidden = true; document.body.classList.remove('no-scroll'); return; }
  if (t.matches('[data-acc]')) {
    const sub = $('#' + t.getAttribute('aria-controls')), open = t.getAttribute('aria-expanded') !== 'true';
    $$('#menuSheet [data-acc]').forEach(b => { b.setAttribute('aria-expanded', 'false'); $('#' + b.getAttribute('aria-controls')).classList.remove('open'); });
    t.setAttribute('aria-expanded', open); sub.classList.toggle('open', open);
    return;
  }
  if (t.matches('[data-qty]')) {
    const l = state.cart.find(x => x.key === t.dataset.qty);
    l.qty += +t.dataset.d; if (l.qty < 1) state.cart = state.cart.filter(x => x !== l);
    saveCart(); renderCart(); return;
  }
  if (t.matches('[data-rm]')) {
    const l = state.cart.find(x => x.key === t.dataset.rm);
    state.cart = state.cart.filter(x => x !== l); saveCart(); renderCart();
    toast(`Article retiré <button data-undo>Annuler</button>`);
    lastRemoved = l; return;
  }
  if (t.matches('[data-undo]') && lastRemoved) { state.cart.push(lastRemoved); lastRemoved = null; saveCart(); renderCart(); t.closest('.toast')?.remove(); return; }
  if (t.matches('[data-toast]')) { toast(esc(t.dataset.toast)); return; }
  if (t.tagName === 'A' && t.getAttribute('href')?.startsWith('#') && t.closest('.sheet')) closeSheets(true);
});
let lastRemoved = null;
document.addEventListener('submit', (e) => {
  if (e.target.matches('[data-newsletter]')) { e.preventDefault(); e.target.reset(); toast('Merci ! Bienvenue dans la famille Zarahissi ✨'); }
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
  // hystérésis : évite que l'en-tête clignote quand sa hauteur change
  requestAnimationFrame(() => { if (scrollY > 90) hdr.classList.add('scrolled'); else if (scrollY < 8) hdr.classList.remove('scrolled'); setH(); ticking = false; });
}, { passive: true });
addEventListener('resize', setH);
addEventListener('hashchange', () => route());

/* ---------- Démarrage ---------- */
renderAnnounce(); renderChips(); renderNav(); renderMenuSheet(); renderFooter(); mountSearch(); updateCounts();
route(); setH();
})();
