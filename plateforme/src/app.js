/* ZARAHISSI — plateforme de suivi des commandes, 100 % hors ligne.
   Les données restent dans le navigateur (localStorage) et dans les sauvegardes que vous exportez. */
"use strict";

// ------------------------------------------------------------------ Référentiels (mêmes que l'Excel)
const STATUTS = [
  // [libellé, fond, police, à traiter ?, colonne kanban]
  ["A COMMANDER", "#FF0000", "#FFFFFF", true],
  ["ATTENTE PAIEMENT", "#FFC000", "#000000", true],
  ["EN PRODUCTION", "#FFFFFF", "#000000", true],
  ["ERREUR ÉCRITURE", "#990033", "#FFFFFF", true],
  ["PRÊT POUR ENVOI", "#808080", "#FFFFFF", true],
  ["EN ATTENTE D'ENVOI", "#FFC000", "#FFFFFF", true],
  ["PRODUIT ENVOYE FR", "#7030A0", "#FFFFFF", false],
  ["PRODUIT ENVOYE YT", "#00B0F0", "#FFFFFF", false],
  ["PRODUIT ENVOYE RE", "#9933FF", "#FFFFFF", false],
  ["PRODUIT ENVOYE GUA", "#8B5E17", "#FFFFFF", false],
  ["PRODUIT ENVOYE MAR", "#16FD01", "#000000", false],
  ["PRODUIT ENVOYE MONDE", "#CC9FEC", "#000000", false],
  ["REÇU MAYOTTE", "#FFFF00", "#000000", false],
  ["VENTE FINALISÉE", "#00B050", "#FFFFFF", false],
  ["COLIS RETOURNÉ", "#FFD966", "#000000", false],
  ["PERDU", "#CC0000", "#FFFFFF", false],
  ["REMBOURSEMENT", "#FF00FF", "#FFFFFF", false],
];
const STATUT = Object.fromEntries(STATUTS.map(s => [s[0], { fond: s[1], police: s[2], aTraiter: s[3] }]));
const CONTACTS = ["SITE WEB", "TIKTOK", "INSTAGRAM", "FACEBOOK", "SNAPCHAT", "WHATSAP"];
const PAIEMENTS = ["CB SITE WEB", "APPLE PAY", "GOOGLE PAY", "PAYPAL SITE WEB", "PAIEMENT PAR LIEN", "CB MACHINE", "ESPÈCES", "CADEAU", "PARTENARIAT", "NON PAYE"];
const EMBALLAGES = ["Aucun", "Emballage", "Mots", "Emballage + Mots"];
const COULEURS = ["OR", "ARGENT", "NOIR", "BOIS", "ROSE", "MULTICOLORS", "AUTRES"];
const RECUPERATIONS = ["RETRAIT MAGASIN", "LIVRAISON YT", "LIVRAISON FR", "LIVRAISON RE", "LIVRAISON GU", "LIVRAISON MA", "LIVRAISON MONDE", "LIVRAISON LIVREUR", "LIVRAISON MAIL", "POINT RELAIS"];
const MOIS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const KANBAN = ["A COMMANDER", "ATTENTE PAIEMENT", "EN PRODUCTION", "ERREUR ÉCRITURE", "PRÊT POUR ENVOI", "EN ATTENTE D'ENVOI", "ENVOYÉ"];

// Colonnes de l'Excel (A → Q) : clé interne, entête
const COLONNES = [
  ["contact", "CONTACT"], ["client", "CLIENT"], ["facture", "N° Facture/commande"], ["date_paiement", "DATE PAIEMENT"],
  ["paiement", "PAIEMENT"], ["numero", "NUMERO"], ["emballage", "Emballage/Mots"], ["produit", "PRODUIT"],
  ["couleur", "Couleur"], ["perso", "PERSONNALISATION"], ["prix_vente", "PRIX VENTE"], ["prix_achat", "PRIX ACHAT"],
  ["date_prod", "DATE PROD"], ["statut", "STATUT"], ["date_envoi", "DATE ENVOIE"], ["recuperation", "RÉCUPÉRATION"],
  ["adresse", "ADRESSE DE LIVRAISON"], ["notes", "NOTES"],
];
const CHAMPS_CLIENT = ["contact", "client", "facture", "date_paiement", "paiement", "numero", "recuperation", "adresse"];

const MODELES_DEFAUT = {
  validation: "Bonjour {prenom} 😊\nMerci pour votre commande ZARAHISSI n°{commande} !\n\nAvant de lancer la gravure, merci de vérifier votre personnalisation :\n\n{articles}\n\n👉 Répondez simplement « OK » si tout est correct, ou envoyez-nous la correction.\nÀ très vite !",
  production: "Bonjour {prenom}, bonne nouvelle : votre commande ZARAHISSI n°{commande} est en cours de fabrication ✨\nNous vous prévenons dès qu'elle est prête.",
  pret: "Bonjour {prenom} 🎉 Votre commande ZARAHISSI n°{commande} est prête !\n{recuperation_phrase}\nMerci pour votre confiance 💛",
  envoye: "Bonjour {prenom}, votre commande ZARAHISSI n°{commande} vient d'être expédiée 📦\nVous la recevrez très prochainement. Merci pour votre confiance 💛",
  avis: "Bonjour {prenom}, nous espérons que votre bijou ZARAHISSI vous plaît 💛\nUne photo ou un petit avis nous aiderait énormément. Merci !",
};
const NOMS_MODELES = { validation: "Validation de la personnalisation", production: "En production", pret: "Commande prête", envoye: "Commande expédiée", avis: "Demande d'avis" };

// ------------------------------------------------------------------ Données
const CLE = "zarahissi.commandes.v1";
let etat = { lignes: [], reglages: { delai: 7, modeles: { ...MODELES_DEFAUT } }, derniereSauvegarde: null };
let fichierLie = null; // FileSystemFileHandle (Chrome / Edge)

function charger() {
  try {
    const brut = localStorage.getItem(CLE);
    if (brut) {
      const d = JSON.parse(brut);
      etat = { ...etat, ...d, reglages: { ...etat.reglages, ...(d.reglages || {}), modeles: { ...MODELES_DEFAUT, ...((d.reglages || {}).modeles || {}) } } };
    }
  } catch (e) { console.error(e); toast("Impossible de lire les données enregistrées"); }
}
let minuterie = null;
function enregistrer() {
  try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (e) { toast("⚠ Stockage plein : exportez une sauvegarde"); }
  $("#etat-sauvegarde").textContent = "Enregistré " + new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  clearTimeout(minuterie);
  if (fichierLie) minuterie = setTimeout(ecrireFichierLie, 800);
}
async function ecrireFichierLie() {
  try {
    const w = await fichierLie.createWritable();
    await w.write(JSON.stringify(etat));
    await w.close();
    etat.derniereSauvegarde = new Date().toISOString();
    localStorage.setItem(CLE, JSON.stringify(etat));
    $("#etat-sauvegarde").textContent = "Sauvegardé sur le Mac ✓";
  } catch (e) { console.error(e); toast("Sauvegarde automatique interrompue : re-liez le fichier dans « Données »"); fichierLie = null; }
}
const id = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

// ------------------------------------------------------------------ Outils
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const euros = v => (v == null || v === "" || isNaN(v)) ? "" : Number(v).toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
const euros0 = v => Number(v || 0).toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const versDate = s => s ? new Date(s + "T00:00:00") : null;
const dateFr = s => s ? versDate(s).toLocaleDateString("fr-FR") : "";
const aujourdhui = () => { const d = new Date(); return iso(d); };
function iso(d) { if (!(d instanceof Date) || isNaN(d)) return null; const z = n => String(n).padStart(2, "0"); return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`; }
const jours = l => {
  if (!l.date_paiement || !STATUT[l.statut]?.aTraiter) return null;
  return Math.floor((versDate(aujourdhui()) - versDate(l.date_paiement)) / 864e5);
};
const enRetard = l => { const j = jours(l); return j != null && j > etat.reglages.delai; };
const estEnvoye = s => (s || "").startsWith("PRODUIT ENVOYE");
const colonneKanban = s => estEnvoye(s) ? "ENVOYÉ" : s;
const chip = s => {
  if (!s) return "";
  const c = STATUT[s] || { fond: "#eee", police: "#000" };
  return `<span class="chip" style="background:${c.fond};color:${c.police}">${esc(s)}</span>`;
};
function toast(msg) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2800);
}
const cleCommande = l => String(l.facture || "") + "|" + (l.client || "") + "|" + (l.date_paiement || "");
const prenom = nom => (nom || "").trim().split(/\s+/)[0] || "";
function options(liste, val, vide = true) {
  const v = val ?? "";
  const extra = v && !liste.includes(v) ? [v] : [];
  return (vide ? `<option value=""></option>` : "") + [...liste, ...extra].map(o => `<option ${o === v ? "selected" : ""}>${esc(o)}</option>`).join("");
}
function telWhatsApp(num) {
  let d = String(num || "").replace(/[^\d+]/g, "");
  if (!d) return null;
  if (d.startsWith("+")) return d.slice(1);
  if (d.startsWith("00")) return d.slice(2);
  if (d.length === 10 && d.startsWith("0")) d = d.slice(1);
  if (d.length !== 9) return d;
  // Indicatif selon le préfixe mobile (Mayotte, Réunion, Antilles, Guyane, sinon France)
  const p3 = d.slice(0, 3);
  if (p3 === "639" || p3 === "692" || p3 === "693") return "262" + d;
  if (p3 === "690" || p3 === "691") return "590" + d;
  if (p3 === "696" || p3 === "697") return "596" + d;
  if (p3 === "694") return "594" + d;
  return "33" + d;
}

// ------------------------------------------------------------------ Navigation
let vue = "accueil";
const VUES = { accueil: vueAccueil, commandes: vueCommandes, suivi: vueSuivi, atelier: vueAtelier, donnees: vueDonnees };
function aller(v) {
  vue = v;
  $$("nav button").forEach(b => b.classList.toggle("actif", b.dataset.vue === v));
  rendre();
}
function rendre() {
  const nb = etat.lignes.filter(enRetard).length;
  $("#pastille-retard").textContent = nb;
  $("#pastille-retard").style.display = nb ? "" : "none";
  VUES[vue]();
}

// ------------------------------------------------------------------ Tableau de bord
function vueAccueil() {
  const L = etat.lignes;
  const now = new Date();
  const an = now.getFullYear(), m = now.getMonth();
  const duMois = (a, mm) => L.filter(l => { const d = versDate(l.date_paiement); return d && d.getFullYear() === a && d.getMonth() === mm; });
  const somme = (arr, k) => arr.reduce((s, l) => s + (Number(l[k]) || 0), 0);
  const ceMois = duMois(an, m);
  const moisPrec = m === 0 ? duMois(an - 1, 11) : duMois(an, m - 1);
  const ca = somme(ceMois, "prix_vente"), caPrec = somme(moisPrec, "prix_vente");
  const aTraiter = L.filter(l => STATUT[l.statut]?.aTraiter);
  const retards = L.filter(enRetard);
  const evol = caPrec ? Math.round((ca / caPrec - 1) * 100) : null;
  // Graphique 12 mois de l'année en cours
  const parMois = MOIS.map((_, i) => { const x = duMois(an, i); const v = somme(x, "prix_vente"); return { v, marge: v - somme(x, "prix_achat") }; });
  const max = Math.max(1, ...parMois.map(p => p.v));
  const annee = L.filter(l => (l.date_paiement || "").startsWith(String(an)));
  const rep = (cle) => {
    const t = {}; annee.forEach(l => { const k = l[cle] || "—"; t[k] = (t[k] || 0) + (Number(l.prix_vente) || 0); });
    const tot = Object.values(t).reduce((a, b) => a + b, 0) || 1;
    return Object.entries(t).sort((a, b) => b[1] - a[1]).slice(0, 7)
      .map(([k, v]) => `<div class="l"><span>${esc(k)}</span><span class="jauge"><i style="width:${(v / tot * 100).toFixed(1)}%"></i></span><span class="num">${euros0(v)}</span></div>`).join("");
  };
  const parStatut = STATUTS.filter(s => s[3]).map(s => [s[0], aTraiter.filter(l => l.statut === s[0]).length]).filter(x => x[1]);
  $("main").innerHTML = `
    <h1>Bonjour 👋</h1>
    <p class="sous-titre">${now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} · ${L.length} articles enregistrés</p>
    ${bandeauSauvegarde()}
    <div class="grille kpis">
      <div class="carte kpi"><div class="lib">CA ${MOIS[m]}</div><div class="val">${euros0(ca)}</div><div class="lib">${evol == null ? "" : (evol >= 0 ? "▲ +" : "▼ ") + evol + " % vs mois dernier"}</div></div>
      <div class="carte kpi"><div class="lib">Marge ${MOIS[m]}</div><div class="val">${euros0(ca - somme(ceMois, "prix_achat"))}</div></div>
      <div class="carte kpi"><div class="lib">Articles vendus ce mois</div><div class="val">${ceMois.length}</div></div>
      <div class="carte kpi"><div class="lib">À traiter</div><div class="val">${aTraiter.length}</div></div>
      <div class="carte kpi alerte"><div class="lib">En retard (+${etat.reglages.delai} j)</div><div class="val">${retards.length}</div></div>
    </div>
    <div class="grille deux">
      <div class="carte">
        <h2>Chiffre d'affaires ${an} <small style="color:var(--gris);font-weight:400">· bleu = CA, vert = marge</small></h2>
        <div class="barres">${parMois.map((p, i) => `
          <div class="b" title="${MOIS[i]} : CA ${euros(p.v)} · marge ${euros(p.marge)}">
            <span class="v">${p.v ? euros0(p.v) : ""}</span>
            <div style="display:flex;gap:2px;width:100%;align-items:flex-end;height:100%">
              <div class="rect" style="height:${p.v / max * 100}%"></div><div class="rect marge" style="height:${Math.max(0, p.marge) / max * 100}%"></div>
            </div>
            <small>${MOIS[i].slice(0, 3)}</small></div>`).join("")}
        </div>
      </div>
      <div class="carte">
        <h2>Commandes en cours</h2>
        ${parStatut.length ? parStatut.map(([s, n]) => `<div style="display:flex;justify-content:space-between;margin:6px 0">${chip(s)}<b>${n}</b></div>`).join("") : `<p class="vide">Rien en attente 🎉</p>`}
        <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn principal" onclick="aller('suivi')">Ouvrir le suivi</button><button class="btn" onclick="aller('atelier')">Mode atelier</button></div>
      </div>
      <div class="carte repartition"><h2>CA ${an} par réseau</h2>${rep("contact")}</div>
      <div class="carte repartition"><h2>CA ${an} par paiement</h2>${rep("paiement")}</div>
    </div>
    ${retards.length ? `<div class="carte" style="margin-top:16px"><h2 class="rouge">⚠ Les plus en retard</h2>${tableLignes(retards.sort((a, b) => jours(b) - jours(a)).slice(0, 10))}</div>` : ""}
  `;
}
function bandeauSauvegarde() {
  if (!etat.lignes.length) return `<div class="bandeau">👋 Première utilisation : allez dans <b>Données</b> pour importer votre fichier Excel actuel. <button class="btn principal" onclick="aller('donnees')">Importer mon Excel</button></div>`;
  const d = etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde) : null;
  const age = d ? (Date.now() - d) / 864e5 : Infinity;
  if (fichierLie || age < 7) return "";
  return `<div class="bandeau">💾 ${d ? "Dernière sauvegarde il y a " + Math.floor(age) + " jours." : "Aucune sauvegarde enregistrée sur votre Mac."} Pensez à sauvegarder. <button class="btn" onclick="exporterJSON()">Sauvegarder maintenant</button></div>`;
}

// ------------------------------------------------------------------ Liste des commandes
let filtres = { q: "", mois: "", statut: "", contact: "", recup: "", seulementEnCours: false };
function lignesFiltrees() {
  const q = filtres.q.trim().toLowerCase();
  return etat.lignes.filter(l => {
    if (filtres.mois && !(l.date_paiement || "").startsWith(filtres.mois)) return false;
    if (filtres.statut === "__encours") { if (!STATUT[l.statut]?.aTraiter) return false; }
    else if (filtres.statut === "__retard") { if (!enRetard(l)) return false; }
    else if (filtres.statut && l.statut !== filtres.statut) return false;
    if (filtres.contact && l.contact !== filtres.contact) return false;
    if (filtres.recup && l.recuperation !== filtres.recup) return false;
    if (q && !COLONNES.some(([k]) => String(l[k] ?? "").toLowerCase().includes(q))) return false;
    return true;
  }).sort((a, b) => (b.date_paiement || "").localeCompare(a.date_paiement || "") || (a.ordre || 0) - (b.ordre || 0));
}
function tableLignes(lignes, max = 400) {
  if (!lignes.length) return `<p class="vide">Aucune commande ne correspond.</p>`;
  const rows = lignes.slice(0, max).map(l => {
    const j = jours(l);
    return `<tr data-id="${l.id}" class="${l.suite ? "suite" : ""}">
      <td class="client ${["INSTAGRAM", "FACEBOOK"].includes(l.contact) ? "" : "rouge"}">${esc(l.contact)}</td>
      <td class="client rouge">${esc(l.client)}</td><td class="client">${esc(l.facture)}</td>
      <td class="client">${dateFr(l.date_paiement)}</td><td class="client">${esc(l.paiement)}</td>
      <td class="cmd">${esc(l.produit)}<br><small style="color:var(--gris)">${esc(l.couleur)}${l.emballage && l.emballage !== "Aucun" ? ' · <b class="rouge">' + esc(l.emballage) + "</b>" : ""}</small></td>
      <td class="cmd perso">${esc(l.perso)}</td>
      <td class="cmd num">${euros(l.prix_vente)}</td>
      <td class="cmd">${chip(l.statut)}</td>
      <td class="cmd">${j == null ? "" : enRetard(l) ? `<span class="retard">${j} j</span>` : j + " j"}</td>
      <td class="cmd">${esc(l.recuperation)}</td></tr>`;
  }).join("");
  return `<div class="tableau"><table><thead><tr><th>Contact</th><th>Client</th><th>N°</th><th>Date</th><th>Paiement</th><th>Produit</th><th>Personnalisation</th><th>Prix</th><th>Statut</th><th>Jours</th><th>Récupération</th></tr></thead><tbody>${rows}</tbody></table></div>
  ${lignes.length > max ? `<p class="sous-titre" style="margin-top:8px">${max} premières lignes affichées sur ${lignes.length} — affinez la recherche.</p>` : ""}`;
}
function vueCommandes() {
  const moisDispo = [...new Set(etat.lignes.map(l => (l.date_paiement || "").slice(0, 7)).filter(Boolean))].sort().reverse();
  const lignes = lignesFiltrees();
  const total = lignes.reduce((s, l) => s + (Number(l.prix_vente) || 0), 0);
  $("main").innerHTML = `
    <div class="barre-outils">
      <input type="search" id="q" placeholder="🔎 Rechercher un client, un n°, un produit, une personnalisation, un téléphone…" value="${esc(filtres.q)}">
      <select id="f-mois"><option value="">Tous les mois</option>${moisDispo.map(m => `<option value="${m}" ${m === filtres.mois ? "selected" : ""}>${MOIS[+m.slice(5) - 1]} ${m.slice(0, 4)}</option>`).join("")}</select>
      <select id="f-statut"><option value="">Tous les statuts</option><option value="__encours" ${filtres.statut === "__encours" ? "selected" : ""}>➜ En cours (à traiter)</option><option value="__retard" ${filtres.statut === "__retard" ? "selected" : ""}>⚠ En retard</option>${STATUTS.map(s => `<option ${s[0] === filtres.statut ? "selected" : ""}>${esc(s[0])}</option>`).join("")}</select>
      <select id="f-contact"><option value="">Tous les réseaux</option>${options(CONTACTS, filtres.contact, false)}</select>
      <select id="f-recup"><option value="">Toutes récupérations</option>${options(RECUPERATIONS, filtres.recup, false)}</select>
      <button class="btn principal" onclick="ouvrirCommande()">+ Nouvelle commande</button>
    </div>
    <p class="sous-titre">${lignes.length} article(s) · ${euros(total)}</p>
    ${tableLignes(lignes)}`;
  $("#q").addEventListener("input", e => { filtres.q = e.target.value; const pos = e.target.selectionStart; vueCommandes(); const q = $("#q"); q.focus(); q.setSelectionRange(pos, pos); });
  [["#f-mois", "mois"], ["#f-statut", "statut"], ["#f-contact", "contact"], ["#f-recup", "recup"]].forEach(([s, k]) => $(s).addEventListener("change", e => { filtres[k] = e.target.value; vueCommandes(); }));
}
document.addEventListener("click", e => {
  const tr = e.target.closest("tr[data-id]");
  if (tr && !e.target.closest("button,select,a")) ouvrirCommande(tr.dataset.id);
});

// ------------------------------------------------------------------ Fiche commande (client + articles)
let edition = null;
function ouvrirCommande(idLigne) {
  let articles, base;
  if (idLigne) {
    const l = etat.lignes.find(x => x.id === idLigne);
    const cle = cleCommande(l);
    articles = etat.lignes.filter(x => cleCommande(x) === cle).sort((a, b) => (a.ordre || 0) - (b.ordre || 0));
    base = articles[0];
  } else {
    base = { date_paiement: aujourdhui(), contact: "SITE WEB", paiement: "CB SITE WEB", emballage: "Aucun" };
    articles = [{ statut: "A COMMANDER", couleur: "OR", emballage: "Aucun" }];
  }
  edition = { ids: articles.map(a => a.id).filter(Boolean) };
  const produits = [...new Set(etat.lignes.map(l => l.produit).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  $("#panneau .tete h2").textContent = idLigne ? `Commande ${base.facture || ""} — ${base.client || ""}` : "Nouvelle commande";
  $("#panneau .corps").innerHTML = `
    <datalist id="liste-produits">${produits.map(p => `<option value="${esc(p)}">`).join("")}</datalist>
    <fieldset class="f-client"><legend>Informations client</legend><div class="champs">
      <label>Contact<select name="contact">${options(CONTACTS, base.contact)}</select></label>
      <label class="">Client<input name="client" value="${esc(base.client)}" required></label>
      <label>N° facture / commande<input name="facture" value="${esc(base.facture)}"></label>
      <label>Date paiement<input type="date" name="date_paiement" value="${esc(base.date_paiement)}"></label>
      <label>Paiement<select name="paiement">${options(PAIEMENTS, base.paiement)}</select></label>
      <label>Téléphone<input name="numero" value="${esc(base.numero)}" inputmode="tel"></label>
    </div></fieldset>
    <fieldset class="f-cmd"><legend>Articles</legend><div id="articles" style="clear:both"></div>
      <button type="button" class="btn" id="ajout-article">+ Ajouter un article</button></fieldset>
    <fieldset class="f-adr"><legend>Livraison</legend><div class="champs">
      <label>Récupération<select name="recuperation">${options(RECUPERATIONS, base.recuperation)}</select></label>
      <label class="large">Adresse de livraison<textarea name="adresse" rows="3">${esc(base.adresse)}</textarea></label>
    </div></fieldset>`;
  const zone = $("#articles");
  articles.forEach(a => zone.insertAdjacentHTML("beforeend", htmlArticle(a)));
  $("#ajout-article").onclick = () => {
    const der = $$(".article", zone).pop();
    const modele = der ? lireArticle(der) : {};
    zone.insertAdjacentHTML("beforeend", htmlArticle({ statut: modele.statut || "A COMMANDER", couleur: modele.couleur, emballage: modele.emballage }));
    numeroter();
  };
  numeroter();
  $("#panneau .pied").innerHTML = `
    ${idLigne ? `<button class="btn danger" onclick="supprimerCommande()">Supprimer</button><button class="btn" onclick="messageCommande('${idLigne}')">💬 Message client</button>` : ""}
    <span style="flex:1"></span><button class="btn" onclick="fermer()">Annuler</button><button class="btn principal" onclick="sauverCommande()">Enregistrer</button>`;
  $("#voile").classList.add("ouvert"); $("#panneau").classList.add("ouvert");
}
function htmlArticle(a) {
  return `<div class="article" data-id="${a.id || ""}">
    <div class="entete-art"><span class="titre-art">Article</span><button type="button" class="btn petit danger" onclick="this.closest('.article').remove();numeroter()">Retirer</button></div>
    <div class="champs">
      <label class="large">Produit<input name="produit" list="liste-produits" value="${esc(a.produit)}"></label>
      <label>Couleur<select name="couleur">${options(COULEURS, a.couleur)}</select></label>
      <label>Emballage / mots<select name="emballage">${options(EMBALLAGES, a.emballage)}</select></label>
      <label>Prix vente (€)<input type="number" step="0.01" name="prix_vente" value="${a.prix_vente ?? ""}"></label>
      <label>Prix achat (€)<input type="number" step="0.01" name="prix_achat" value="${a.prix_achat ?? ""}"></label>
      <label class="large">Personnalisation (texte exact à graver)<textarea name="perso" rows="2">${esc(a.perso)}</textarea></label>
      <label>Statut<select name="statut">${options(STATUTS.map(s => s[0]), a.statut)}</select></label>
      <label>Date prod<input type="date" name="date_prod" value="${esc(a.date_prod)}"></label>
      <label>Date envoi<input type="date" name="date_envoi" value="${esc(a.date_envoi)}"></label>
      <label class="large">Notes<input name="notes" value="${esc(a.notes)}"></label>
    </div></div>`;
}
function numeroter() { $$("#articles .article").forEach((el, i) => $(".titre-art", el).textContent = `Article ${i + 1}`); }
function lireArticle(el) {
  const o = {};
  $$("[name]", el).forEach(i => { o[i.name] = i.value.trim() === "" ? null : i.value; });
  ["prix_vente", "prix_achat"].forEach(k => { if (o[k] != null) o[k] = Number(String(o[k]).replace(",", ".")); });
  return o;
}
function sauverCommande() {
  const corps = $("#panneau .corps");
  const client = {};
  $$(".f-client [name], .f-adr [name]", corps).forEach(i => { client[i.name] = i.value.trim() === "" ? null : i.value.trim(); });
  if (!client.client) { toast("Indiquez le nom du client"); return; }
  const arts = $$("#articles .article", corps).map(el => ({ id: el.dataset.id || null, ...lireArticle(el) }));
  if (!arts.length) { toast("Ajoutez au moins un article"); return; }
  const gardes = new Set(arts.map(a => a.id).filter(Boolean));
  etat.lignes = etat.lignes.filter(l => !edition.ids.includes(l.id) || gardes.has(l.id));
  const ordreBase = Date.now();
  arts.forEach((a, i) => {
    const existante = a.id && etat.lignes.find(l => l.id === a.id);
    const ligne = { ...(existante || {}), ...a, ...client, id: a.id || id(), suite: i > 0, ordre: existante?.ordre ?? ordreBase + i };
    if (ligne.statut && ligne.statut.startsWith("PRODUIT ENVOYE") && !ligne.date_envoi) ligne.date_envoi = aujourdhui();
    if (existante) Object.assign(existante, ligne); else etat.lignes.push(ligne);
  });
  enregistrer(); fermer(); rendre(); toast("Commande enregistrée ✓");
}
function supprimerCommande() {
  if (!confirm("Supprimer cette commande et tous ses articles ?")) return;
  etat.lignes = etat.lignes.filter(l => !edition.ids.includes(l.id));
  enregistrer(); fermer(); rendre();
}
function fermer() { $("#voile").classList.remove("ouvert"); $("#panneau").classList.remove("ouvert"); }

function changerStatut(idLigne, statut) {
  const l = etat.lignes.find(x => x.id === idLigne);
  if (!l) return;
  l.statut = statut;
  if (statut === "EN PRODUCTION" && !l.date_prod) l.date_prod = aujourdhui();
  if (statut.startsWith("PRODUIT ENVOYE") && !l.date_envoi) l.date_envoi = aujourdhui();
  enregistrer();
}

// ------------------------------------------------------------------ Suivi (Kanban, glisser-déposer)
function vueSuivi() {
  const actives = etat.lignes.filter(l => KANBAN.includes(colonneKanban(l.statut)) && (!estEnvoye(l.statut) || joursDepuis(l.date_envoi) <= 30));
  const col = c => actives.filter(l => colonneKanban(l.statut) === c).sort((a, b) => (a.date_paiement || "").localeCompare(b.date_paiement || ""));
  $("main").innerHTML = `
    <h1>Suivi de production</h1>
    <p class="sous-titre">Glissez une carte d'une colonne à l'autre pour changer son statut. Rouge = plus de ${etat.reglages.delai} jours depuis le paiement. La colonne « Envoyé » montre les 30 derniers jours.</p>
    <div class="kanban">${KANBAN.map(c => {
      const s = STATUT[c] || { fond: "#7030A0", police: "#fff" };
      const items = col(c);
      return `<div class="colonne" data-statut="${esc(c)}"><h3><span class="chip" style="background:${s.fond};color:${s.police}">${esc(c)}</span><b>${items.length}</b></h3>
        <div class="cartes">${items.map(ticket).join("") || `<p class="vide" style="padding:20px">—</p>`}</div></div>`;
    }).join("")}</div>`;
  $$(".ticket").forEach(t => {
    t.addEventListener("dragstart", e => { e.dataTransfer.setData("text/plain", t.dataset.id); });
    t.addEventListener("click", () => ouvrirCommande(t.dataset.id));
  });
  $$(".colonne").forEach(c => {
    c.addEventListener("dragover", e => { e.preventDefault(); c.classList.add("survol"); });
    c.addEventListener("dragleave", () => c.classList.remove("survol"));
    c.addEventListener("drop", e => {
      e.preventDefault(); c.classList.remove("survol");
      const idL = e.dataTransfer.getData("text/plain");
      let st = c.dataset.statut;
      if (st === "ENVOYÉ") st = statutEnvoi(etat.lignes.find(l => l.id === idL));
      changerStatut(idL, st); rendre();
    });
  });
}
function joursDepuis(d) { return d ? (versDate(aujourdhui()) - versDate(d)) / 864e5 : 0; }
function statutEnvoi(l) {
  const r = (l?.recuperation || "").toUpperCase();
  if (r.endsWith(" YT")) return "PRODUIT ENVOYE YT";
  if (r.endsWith(" RE")) return "PRODUIT ENVOYE RE";
  if (r.endsWith(" GU")) return "PRODUIT ENVOYE GUA";
  if (r.endsWith(" MA")) return "PRODUIT ENVOYE MAR";
  if (r.includes("MONDE")) return "PRODUIT ENVOYE MONDE";
  return "PRODUIT ENVOYE FR";
}
function ticket(l) {
  const j = jours(l);
  return `<div class="ticket ${enRetard(l) ? "en-retard" : ""}" draggable="true" data-id="${l.id}">
    <div class="haut"><span>${esc(l.facture || "")} · ${dateFr(l.date_paiement)}</span>${j == null ? "" : enRetard(l) ? `<span class="retard">${j} j</span>` : `<span>${j} j</span>`}</div>
    <div class="nom">${esc(l.client || "—")}</div>
    <div class="prod">${esc(l.produit || "")} · <b>${esc(l.couleur || "")}</b>${l.emballage && l.emballage !== "Aucun" ? ` · <b class="rouge">${esc(l.emballage)}</b>` : ""}</div>
    ${l.perso ? `<div class="perso">${esc(l.perso)}</div>` : ""}
    <div class="haut" style="margin-top:6px"><span>${esc(l.recuperation || "")}</span>${l.valide_client ? "<span title='Personnalisation validée par le client'>✅ validé</span>" : ""}</div></div>`;
}

// ------------------------------------------------------------------ Atelier zéro erreur + messages clients
let ongletAtelier = "gravure";
function vueAtelier() {
  const tabs = { gravure: "✍️ Contrôle des gravures", fiche: "🖨 Fiche atelier", etiquettes: "🏷 Étiquettes d'envoi", messages: "💬 Modèles de messages" };
  $("main").innerHTML = `
    <h1>Mode atelier</h1>
    <p class="sous-titre">Zéro faute de gravure, des clients informés en un clic, et les documents d'atelier imprimés automatiquement.</p>
    <div class="atelier-onglets">${Object.entries(tabs).map(([k, v]) => `<button class="btn ${k === ongletAtelier ? "actif" : ""}" data-t="${k}">${v}</button>`).join("")}</div>
    <div id="atelier"></div>`;
  $$(".atelier-onglets button").forEach(b => b.onclick = () => { ongletAtelier = b.dataset.t; vueAtelier(); });
  ({ gravure: atelierGravure, fiche: atelierFiche, etiquettes: atelierEtiquettes, messages: atelierMessages })[ongletAtelier]();
}
// Texte du type « 1 X Collier … » = description de commande du site, pas un texte à graver
const estDescription = t => /^\s*\d+\s*(A\s*)?X\b/i.test(t || "");
function analyserTexte(t) {
  const av = [];
  if (!t) return { av: ["Aucun texte de personnalisation"], html: "" };
  if (estDescription(t)) return { av: [], html: `<span style="font-size:15px;font-weight:400;font-family:inherit">${esc(t)}</span>`, description: true };
  if (/ {2,}/.test(t)) av.push("Double espace");
  if (/^\s|\s$/.test(t)) av.push("Espace au début ou à la fin");
  if (/[\u{1F300}-\u{1FAFF}☀-➿]/u.test(t)) av.push("Emoji : gravable ?");
  if (/\d/.test(t) && /[a-z]/i.test(t)) av.push("Mélange chiffres / lettres : vérifier 0/O, 1/l");
  if (/[àâäéèêëïîôöùûüçÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ]/.test(t)) av.push("Accents présents");
  if (/[a-z][A-Z]|[A-Z]{2,}[a-z]/.test(t)) av.push("Majuscules inhabituelles");
  if (/(.)\1\1/.test(t)) av.push("Lettre triplée");
  if (t.replace(/\s/g, "").length > 20) av.push(`${t.replace(/\s/g, "").length} caractères : vérifier la place`);
  const html = [...t].map(c => c === " " ? `<span class="esp">·</span>` : /[0O1lI]/.test(c) ? `<span class="doute">${esc(c)}</span>` : c === "\n" ? "<br>" : esc(c)).join("");
  return { av, html };
}
function atelierGravure() {
  const liste = etat.lignes.filter(l => ["A COMMANDER", "EN PRODUCTION", "ERREUR ÉCRITURE", "ATTENTE PAIEMENT"].includes(l.statut))
    .sort((a, b) => (a.date_paiement || "").localeCompare(b.date_paiement || ""));
  if (!liste.length) { $("#atelier").innerHTML = `<p class="vide carte">Aucune gravure en attente 🎉</p>`; return; }
  $("#atelier").innerHTML = `<p class="sous-titre">Étapes : 1. envoyer la personnalisation au client pour validation → 2. client OK → 3. gravé → passe en « PRÊT POUR ENVOI ». Caractères ambigus (0/O, 1/l/I) surlignés, espaces visibles en bleu.</p>` +
    liste.map(l => {
      const { av, html, description } = analyserTexte(l.perso || "");
      return `<div class="carte gravure" data-id="${l.id}">
        <div>
          <div class="etapes">${chip(l.statut)} <span>${esc(l.facture || "")}</span> · <b>${esc(l.client || "")}</b> · ${dateFr(l.date_paiement)} ${enRetard(l) ? `<span class="retard">${jours(l)} j</span>` : ""}</div>
          <div style="margin-top:6px">${esc(l.produit || "")} — <b>${esc(l.couleur || "")}</b>${l.emballage && l.emballage !== "Aucun" ? ` — <b class="rouge">${esc(l.emballage)}</b>` : ""}</div>
          <div class="texte-gravure">${html || '<span style="color:var(--gris);font-size:16px">(pas de texte)</span>'}</div>
          <div>${description ? `<span class="ok">ℹ️ Description de commande du site : pas de texte à graver</span>` : av.length ? av.map(a => `<span class="avert">⚠ ${esc(a)}</span>`).join("") : `<span class="ok">✓ Aucun piège détecté</span>`}</div>
          <div class="etapes" style="margin-top:8px">
            <span class="${l.envoye_validation ? "fait" : ""}">1. Envoyé au client ${l.envoye_validation ? "✓ " + dateFr(l.envoye_validation) : ""}</span> →
            <span class="${l.valide_client ? "fait" : ""}">2. Validé par le client ${l.valide_client ? "✓" : ""}</span> →
            <span>3. Gravé</span></div>
        </div>
        <div class="actions-gravure">
          <button class="btn wa" data-a="valider">💬 Demander validation</button>
          <button class="btn" data-a="ok">${l.valide_client ? "↩ Annuler validation" : "✅ Client a validé"}</button>
          <button class="btn vert" data-a="grave">✔ Gravé → prêt pour envoi</button>
          <button class="btn" data-a="erreur">✖ Erreur d'écriture</button>
          <button class="btn" data-a="modifier">✏️ Modifier</button>
        </div></div>`;
    }).join("");
  $$("#atelier .gravure").forEach(c => c.addEventListener("click", e => {
    const a = e.target.dataset.a; if (!a) return;
    const l = etat.lignes.find(x => x.id === c.dataset.id);
    if (a === "valider") { l.envoye_validation = aujourdhui(); if (l.statut === "A COMMANDER") { /* reste à commander */ } enregistrer(); messageCommande(l.id, "validation"); }
    if (a === "ok") { l.valide_client = !l.valide_client; enregistrer(); }
    if (a === "grave") {
      if (!l.valide_client && l.perso && !estDescription(l.perso) && !confirm("Le client n'a pas encore validé la personnalisation. Marquer quand même comme gravé ?")) return;
      changerStatut(l.id, "PRÊT POUR ENVOI");
    }
    if (a === "erreur") changerStatut(l.id, "ERREUR ÉCRITURE");
    if (a === "modifier") { ouvrirCommande(l.id); return; }
    rendre();
  }));
}
function atelierFiche() {
  const liste = etat.lignes.filter(l => ["A COMMANDER", "EN PRODUCTION", "ERREUR ÉCRITURE"].includes(l.statut));
  const groupes = {};
  liste.forEach(l => { const k = (l.produit || "Sans produit") + " — " + (l.couleur || ""); (groupes[k] = groupes[k] || []).push(l); });
  const html = Object.entries(groupes).sort().map(([k, ls]) => `<h3>${esc(k)} (${ls.length})</h3>` +
    ls.map(l => `<div class="fiche"><div>☐ ${esc(l.facture || "")} · ${esc(l.client || "")} · ${dateFr(l.date_paiement)} · ${esc(l.statut)}${l.emballage && l.emballage !== "Aucun" ? " · <b>" + esc(l.emballage) + "</b>" : ""}</div><div class="p">${esc(l.perso || "(sans texte)")}</div></div>`).join("")).join("");
  $("#atelier").innerHTML = `<div class="carte"><div class="barre-outils"><b>${liste.length} pièce(s) à produire</b>, regroupées par produit et couleur.<span style="flex:1"></span><button class="btn principal" id="imp">🖨 Imprimer la fiche atelier</button></div>
    <div style="max-height:60vh;overflow:auto">${html || "<p class='vide'>Rien à produire.</p>"}</div></div>`;
  $("#imp").onclick = () => imprimer(`<h2>Fiche atelier ZARAHISSI — ${new Date().toLocaleDateString("fr-FR")}</h2>${html}`);
}
function atelierEtiquettes() {
  const liste = etat.lignes.filter(l => ["PRÊT POUR ENVOI", "EN ATTENTE D'ENVOI"].includes(l.statut));
  const parCommande = {};
  liste.forEach(l => { const k = cleCommande(l); (parCommande[k] = parCommande[k] || []).push(l); });
  const cmds = Object.values(parCommande);
  const etiq = cmds.map(ls => {
    const l = ls[0];
    return `<div class="etiquette"><b>${esc(l.recuperation || "")}</b> · ${esc(l.facture || "")}\n${esc(l.adresse || l.client || "")}${l.numero ? "\nTél : " + esc(l.numero) : ""}\n<small>${ls.map(x => "• " + esc(x.produit || "")).join("\n")}</small></div>`;
  }).join("");
  $("#atelier").innerHTML = `<div class="carte"><div class="barre-outils"><b>${cmds.length} colis prêts</b> (statuts « PRÊT POUR ENVOI » et « EN ATTENTE D'ENVOI »)<span style="flex:1"></span>
    <button class="btn principal" id="imp">🖨 Imprimer les étiquettes</button><button class="btn" id="envoyer">📦 Tout marquer « envoyé »</button></div>
    ${cmds.map(ls => `<div style="display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid var(--ligne);padding:8px 0"><div><b>${esc(ls[0].client || "")}</b> · ${esc(ls[0].recuperation || "")} · ${ls.length} article(s)${!ls[0].adresse && (ls[0].recuperation || "").startsWith("LIVRAISON") ? ' <span class="retard">adresse manquante</span>' : ""}</div><button class="btn petit wa" data-id="${ls[0].id}">💬 Prévenir</button></div>`).join("") || "<p class='vide'>Aucun colis prêt.</p>"}</div>`;
  $("#imp").onclick = () => imprimer(`<div class="etiquettes">${etiq}</div>`);
  $("#envoyer").onclick = () => {
    if (!confirm(`Passer ${liste.length} article(s) en « PRODUIT ENVOYE … » selon leur destination ? (les retraits magasin restent inchangés)`)) return;
    liste.filter(l => l.recuperation !== "RETRAIT MAGASIN").forEach(l => changerStatut(l.id, statutEnvoi(l)));
    rendre();
  };
  $$("#atelier [data-id]").forEach(b => b.onclick = () => messageCommande(b.dataset.id, "pret"));
}
function atelierMessages() {
  $("#atelier").innerHTML = `<div class="carte"><p class="sous-titre">Variables : {prenom} {client} {commande} {articles} {recuperation} {recuperation_phrase} {total}</p>
    ${Object.keys(MODELES_DEFAUT).map(k => `<div class="modele"><b>${NOMS_MODELES[k]}</b><textarea data-k="${k}">${esc(etat.reglages.modeles[k])}</textarea></div>`).join("")}
    <button class="btn principal" id="sauver-modeles">Enregistrer les modèles</button> <button class="btn" id="reset-modeles">Revenir aux modèles d'origine</button></div>`;
  $("#sauver-modeles").onclick = () => { $$("#atelier textarea").forEach(t => etat.reglages.modeles[t.dataset.k] = t.value); enregistrer(); toast("Modèles enregistrés ✓"); };
  $("#reset-modeles").onclick = () => { etat.reglages.modeles = { ...MODELES_DEFAUT }; enregistrer(); atelierMessages(); };
}
function remplirModele(modele, ls) {
  const l = ls[0];
  const recup = l.recuperation || "";
  const phrase = recup === "RETRAIT MAGASIN" ? "Vous pouvez venir la récupérer en boutique." : recup === "POINT RELAIS" ? "Elle part très vite en point relais." : "Elle sera expédiée très prochainement.";
  const total = ls.reduce((s, x) => s + (Number(x.prix_vente) || 0), 0);
  const vars = {
    prenom: prenom(l.client), client: l.client || "", commande: l.facture || "", recuperation: recup, recuperation_phrase: phrase, total: euros(total),
    articles: ls.map(x => `• ${x.produit || ""}${x.couleur ? " (" + x.couleur + ")" : ""}${x.perso && !estDescription(x.perso) ? " : « " + x.perso + " »" : ""}`).join("\n"),
  };
  return modele.replace(/\{(\w+)\}/g, (m, k) => vars[k] ?? m);
}
function messageCommande(idLigne, type) {
  const l = etat.lignes.find(x => x.id === idLigne);
  const ls = etat.lignes.filter(x => cleCommande(x) === cleCommande(l));
  if (!type) type = STATUT[l.statut]?.aTraiter ? (l.statut === "PRÊT POUR ENVOI" || l.statut === "EN ATTENTE D'ENVOI" ? "pret" : l.statut === "EN PRODUCTION" ? "production" : "validation") : estEnvoye(l.statut) ? "envoye" : "avis";
  const tel = telWhatsApp(l.numero);
  const afficher = t => {
    const txt = remplirModele(etat.reglages.modeles[t], ls);
    $("#panneau .tete h2").textContent = `Message à ${l.client || ""}`;
    $("#panneau .corps").innerHTML = `
      <div class="barre-outils">${Object.keys(MODELES_DEFAUT).map(k => `<button class="btn ${k === t ? "principal" : ""}" data-t="${k}">${NOMS_MODELES[k]}</button>`).join("")}</div>
      <label style="display:block;font-size:12px;color:var(--gris)">Message (modifiable avant envoi)</label>
      <textarea id="msg" style="width:100%;min-height:230px">${esc(txt)}</textarea>
      <p class="sous-titre" style="margin-top:8px">Téléphone : ${esc(l.numero || "non renseigné")} ${tel ? "→ WhatsApp +" + tel : ""}</p>`;
    $$("#panneau .corps [data-t]").forEach(b => b.onclick = () => afficher(b.dataset.t));
  };
  afficher(type);
  $("#panneau .pied").innerHTML = `<button class="btn" onclick="fermer()">Fermer</button><button class="btn" id="copier">📋 Copier</button>${tel ? `<button class="btn wa" id="wa">Ouvrir WhatsApp</button>` : ""}<a class="btn" id="sms" href="#">SMS</a>`;
  $("#copier").onclick = async () => { try { await navigator.clipboard.writeText($("#msg").value); toast("Message copié ✓"); } catch { $("#msg").select(); document.execCommand("copy"); toast("Message copié ✓"); } };
  if (tel) $("#wa").onclick = () => window.open(`https://wa.me/${tel}?text=${encodeURIComponent($("#msg").value)}`, "_blank");
  $("#sms").onclick = e => { e.preventDefault(); location.href = `sms:${tel ? "+" + tel : ""}&body=${encodeURIComponent($("#msg").value)}`; };
  $("#voile").classList.add("ouvert"); $("#panneau").classList.add("ouvert");
}
function imprimer(html) { $("#impression").innerHTML = html; window.print(); }

// ------------------------------------------------------------------ Données : import / export / sauvegarde
function vueDonnees() {
  const fsa = "showSaveFilePicker" in window;
  $("main").innerHTML = `
    <h1>Données & sauvegardes</h1>
    <p class="sous-titre">Tout fonctionne sans internet. Vos données sont stockées dans ce navigateur sur votre Mac : sauvegardez-les régulièrement dans un fichier.</p>
    <div class="grille" style="grid-template-columns:repeat(auto-fit,minmax(320px,1fr))">
      <div class="carte"><h2>📥 Importer depuis Excel</h2>
        <p>Votre ancien fichier (onglets « JAN 2026 », « FEV 2026 »…), le nouveau classeur (onglet COMMANDES) ou un export de cette plateforme.</p>
        <input type="file" id="imp-xlsx" accept=".xlsx,.xls,.xlsm"><p id="res-import" class="sous-titre"></p></div>
      <div class="carte"><h2>📤 Exporter vers Excel</h2><p>Toutes les commandes dans un fichier .xlsx (mêmes colonnes A → Q que votre tableau), pour votre comptable ou vos archives.</p>
        <button class="btn principal" onclick="exporterExcel()">Télécharger l'Excel</button></div>
      <div class="carte"><h2>💾 Sauvegarde complète</h2>
        <p>Fichier .json contenant tout (commandes, réglages, modèles de messages). À ranger dans iCloud Drive ou sur une clé USB.</p>
        <button class="btn principal" onclick="exporterJSON()">Télécharger une sauvegarde</button>
        <label class="btn" style="display:inline-block">Restaurer une sauvegarde<input type="file" id="imp-json" accept=".json" hidden></label>
        ${fsa ? `<hr style="border:0;border-top:1px solid var(--ligne);margin:14px 0"><p><b>Sauvegarde automatique</b> (Chrome / Edge) : choisissez un fichier sur votre Mac, il sera mis à jour à chaque modification.</p>
        <button class="btn" onclick="lierFichier()">${fichierLie ? "✓ Fichier lié : " + esc(fichierLie.name) : "Lier un fichier de sauvegarde"}</button>` : `<p class="sous-titre">Astuce : avec Google Chrome, la sauvegarde peut se faire automatiquement dans un fichier.</p>`}
        <p class="sous-titre">Dernière sauvegarde : ${etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde).toLocaleString("fr-FR") : "jamais"}</p></div>
      <div class="carte"><h2>⚙️ Réglages</h2>
        <label>Alerte « en retard » après <input type="number" id="delai" value="${etat.reglages.delai}" min="1" style="width:70px"> jours</label>
        <hr style="border:0;border-top:1px solid var(--ligne);margin:14px 0">
        <button class="btn danger" onclick="toutEffacer()">Effacer toutes les données</button></div>
    </div>`;
  $("#imp-xlsx").onchange = e => importerExcel(e.target.files[0]);
  $("#imp-json").onchange = e => importerJSON(e.target.files[0]);
  $("#delai").onchange = e => { etat.reglages.delai = Math.max(1, +e.target.value || 7); enregistrer(); rendre(); };
}
function telecharger(nom, blob) {
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = nom;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function exporterJSON() {
  etat.derniereSauvegarde = new Date().toISOString(); enregistrer();
  telecharger(`zarahissi-sauvegarde-${aujourdhui()}.json`, new Blob([JSON.stringify(etat, null, 1)], { type: "application/json" }));
  rendre();
}
async function lierFichier() {
  try {
    fichierLie = await window.showSaveFilePicker({ suggestedName: "zarahissi-sauvegarde-auto.json", types: [{ description: "Sauvegarde ZARAHISSI", accept: { "application/json": [".json"] } }] });
    await ecrireFichierLie(); rendre(); toast("Sauvegarde automatique activée ✓");
  } catch (e) { if (e.name !== "AbortError") toast("Impossible de lier le fichier"); }
}
async function importerJSON(f) {
  if (!f) return;
  try {
    const d = JSON.parse(await f.text());
    if (!Array.isArray(d.lignes)) throw new Error("format");
    if (!confirm(`Restaurer ${d.lignes.length} articles ? Les données actuelles seront remplacées.`)) return;
    etat = { ...etat, ...d, reglages: { ...etat.reglages, ...(d.reglages || {}) } };
    enregistrer(); rendre(); toast("Sauvegarde restaurée ✓");
  } catch { toast("Ce fichier n'est pas une sauvegarde ZARAHISSI"); }
}
function toutEffacer() {
  if (!confirm("Effacer TOUTES les commandes de cette plateforme ? (pensez à exporter une sauvegarde avant)")) return;
  if (prompt("Tapez EFFACER pour confirmer") !== "EFFACER") return;
  etat.lignes = []; enregistrer(); rendre();
}
const norm = s => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase().replace(/\s+/g, " ").trim();
const ENTETES = {
  CONTACT: "contact", CLIENT: "client", "N° FACTURE/COMMANDE": "facture", "DATE PAIEMENT": "date_paiement", PAIEMENT: "paiement",
  NUMERO: "numero", "EMBALLAGE/MOTS": "emballage", PRODUIT: "produit", COULEUR: "couleur", PERSONNALISATION: "perso",
  "PRIX VENTE": "prix_vente", "PRIX ACHAT": "prix_achat", "DATE PROD": "date_prod", STATUT: "statut", "DATE ENVOIE": "date_envoi",
  RECUPERATION: "recuperation", "ADRESSE DE LIVRAISON": "adresse", NOTES: "notes",
};
async function importerExcel(f) {
  if (!f) return;
  const res = $("#res-import");
  res.textContent = "Lecture du fichier…";
  try {
    const wb = XLSX.read(await f.arrayBuffer(), { cellDates: true });
    const lignes = [], details = [];
    const nomsMois = ["JAN", "FEV", "MARS", "AVRIL", "MAI", "JUIN", "JUIL", "AOUT", "SEPT", "OCT", "NOV", "DEC"];
    for (const nom of wb.SheetNames) {
      const n = norm(nom);
      // Onglets utiles : COMMANDES, un export, ou un onglet mensuel « JAN 2026 »…
      if (!(n === "COMMANDES" || n.startsWith("ZARAHISSI") || nomsMois.some(m => new RegExp("^" + m + " \\d{4}$").test(n)))) continue;
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[nom], { header: 1, raw: true, defval: null });
      const iEntete = rows.findIndex(r => r && r.some(c => norm(c) === "PRODUIT") && r.some(c => norm(c) === "STATUT"));
      if (iEntete < 0) continue;
      const map = {};
      rows[iEntete].forEach((c, i) => { const k = ENTETES[norm(c)]; if (k && !(k in map)) map[k] = i; });
      let prec = null, nb = 0;
      for (const r of rows.slice(iEntete + 1)) {
        if (!r) continue;
        if (norm(r[map.perso]) === "TOTAL VENTE") break; // ligne de total en bas des anciens onglets mensuels
        const l = {};
        for (const [k, i] of Object.entries(map)) {
          let v = r[i];
          if (typeof v === "string") v = v.trim() || null;
          l[k] = v ?? null;
        }
        if (!l.produit && !l.perso && l.prix_vente == null && !l.client) continue;
        const suite = !l.client && !l.facture && prec;
        if (suite) CHAMPS_CLIENT.forEach(k => { if (l[k] == null) l[k] = prec[k]; });
        for (const k of ["date_paiement", "date_prod", "date_envoi"]) l[k] = l[k] instanceof Date ? iso(new Date(l[k].getTime() + 12 * 3600e3)) : (typeof l[k] === "string" && /^\d{4}-\d\d-\d\d/.test(l[k]) ? l[k].slice(0, 10) : null);
        for (const k of ["prix_vente", "prix_achat"]) l[k] = typeof l[k] === "number" ? Math.round(l[k] * 100) / 100 : (l[k] && !isNaN(String(l[k]).replace(",", ".")) ? Number(String(l[k]).replace(",", ".")) : null);
        for (const k of ["facture", "numero"]) if (typeof l[k] === "number") l[k] = String(Number.isInteger(l[k]) ? l[k] : l[k]);
        for (const k of ["contact", "paiement", "statut", "recuperation", "couleur"]) if (l[k]) l[k] = String(l[k]).trim();
        l.id = id(); l.suite = !!suite; l.ordre = lignes.length;
        lignes.push(l); prec = l; nb++;
      }
      if (nb) details.push(`${nom} : ${nb}`);
    }
    if (!lignes.length) { res.textContent = "Aucun onglet de commandes reconnu dans ce fichier."; return; }
    const remplacer = etat.lignes.length ? confirm(`${lignes.length} articles trouvés.\n\nOK = REMPLACER les ${etat.lignes.length} articles actuels\nAnnuler = AJOUTER à la suite`) : true;
    etat.lignes = remplacer ? lignes : etat.lignes.concat(lignes);
    enregistrer();
    res.innerHTML = `✓ ${lignes.length} articles importés (${details.map(esc).join(" · ")})`;
    rendre(); $("#res-import") && ($("#res-import").innerHTML = `✓ ${lignes.length} articles importés (${details.map(esc).join(" · ")})`);
  } catch (e) { console.error(e); res.textContent = "Erreur de lecture : " + e.message; }
}
function exporterExcel() {
  const lignes = [...etat.lignes].sort((a, b) => (a.date_paiement || "").localeCompare(b.date_paiement || "") || (a.ordre || 0) - (b.ordre || 0));
  const aoa = [COLONNES.map(c => c[1])];
  lignes.forEach(l => aoa.push(COLONNES.map(([k]) => k.startsWith("date_") ? (l[k] ? versDate(l[k]) : null) : l[k] ?? null)));
  const ws = XLSX.utils.aoa_to_sheet(aoa, { cellDates: true, dateNF: "dd/mm/yyyy" });
  ws["!cols"] = COLONNES.map(([k]) => ({ wch: { client: 26, produit: 28, perso: 32, adresse: 36, statut: 22, notes: 30 }[k] || 13 }));
  ws["!autofilter"] = { ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: aoa.length - 1, c: COLONNES.length - 1 } }) };
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "COMMANDES");
  XLSX.writeFile(wb, `zarahissi-commandes-${aujourdhui()}.xlsx`);
}

// ------------------------------------------------------------------ Démarrage
document.addEventListener("keydown", e => {
  if (e.key === "Escape") fermer();
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); aller("commandes"); setTimeout(() => $("#q")?.focus(), 0); }
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "n" && e.shiftKey) { e.preventDefault(); ouvrirCommande(); }
});
$$("nav button").forEach(b => b.onclick = () => aller(b.dataset.vue));
$("#voile").onclick = fermer;
charger();
rendre();
Object.assign(window, { aller, ouvrirCommande, sauverCommande, supprimerCommande, fermer, numeroter, messageCommande, exporterJSON, exporterExcel, lierFichier, toutEffacer });
