/* ZARAHISSI — version simple. Un seul fichier, 100 % hors ligne.
   Gravure faite par des fournisseurs : personnalisé = 15 à 35 jours, stock = envoi sous 5 jours. */
"use strict";

// ------------------------------------------------------------------ Étapes (statuts de votre Excel, libellés simplifiés)
const STATUTS = {
  "A COMMANDER": { lib: "À commander", fond: "#FF0000", police: "#FFFFFF" },
  "ATTENTE PAIEMENT": { lib: "Paiement en attente", fond: "#FFC000", police: "#000000" },
  "ERREUR ÉCRITURE": { lib: "Erreur – à recommander", fond: "#990033", police: "#FFFFFF" },
  "EN PRODUCTION": { lib: "Chez le fournisseur", fond: "#FFFFFF", police: "#000000" },
  "PRÊT POUR ENVOI": { lib: "Reçu – à envoyer", fond: "#808080", police: "#FFFFFF" },
  "EN ATTENTE D'ENVOI": { lib: "À envoyer", fond: "#FFC000", police: "#FFFFFF" },
  "PRODUIT ENVOYE FR": { lib: "Envoyé FR", fond: "#7030A0", police: "#FFFFFF" },
  "PRODUIT ENVOYE YT": { lib: "Envoyé YT", fond: "#00B0F0", police: "#FFFFFF" },
  "PRODUIT ENVOYE RE": { lib: "Envoyé RE", fond: "#9933FF", police: "#FFFFFF" },
  "PRODUIT ENVOYE GUA": { lib: "Envoyé GUA", fond: "#8B5E17", police: "#FFFFFF" },
  "PRODUIT ENVOYE MAR": { lib: "Envoyé MAR", fond: "#16FD01", police: "#000000" },
  "PRODUIT ENVOYE MONDE": { lib: "Envoyé monde", fond: "#CC9FEC", police: "#000000" },
  "REÇU MAYOTTE": { lib: "Reçu Mayotte", fond: "#FFFF00", police: "#000000" },
  "VENTE FINALISÉE": { lib: "Terminé", fond: "#00B050", police: "#FFFFFF" },
  "COLIS RETOURNÉ": { lib: "Colis retourné", fond: "#FFD966", police: "#000000" },
  "PERDU": { lib: "Perdu", fond: "#CC0000", police: "#FFFFFF" },
  "REMBOURSEMENT": { lib: "Remboursé", fond: "#FF00FF", police: "#FFFFFF" },
};
const A_COMMANDER = ["A COMMANDER", "ERREUR ÉCRITURE", "ATTENTE PAIEMENT"];
const CHEZ_FOURNISSEUR = ["EN PRODUCTION"];
const A_ENVOYER = ["PRÊT POUR ENVOI", "EN ATTENTE D'ENVOI"];
const estEnvoye = s => (s || "").startsWith("PRODUIT ENVOYE");
const enCours = l => A_COMMANDER.includes(l.statut) || CHEZ_FOURNISSEUR.includes(l.statut) || A_ENVOYER.includes(l.statut);

const CONTACTS = ["SITE WEB", "TIKTOK", "INSTAGRAM", "FACEBOOK", "SNAPCHAT", "WHATSAP"];
const PAIEMENTS = ["CB SITE WEB", "APPLE PAY", "GOOGLE PAY", "PAYPAL SITE WEB", "PAIEMENT PAR LIEN", "CB MACHINE", "ESPÈCES", "CADEAU", "PARTENARIAT", "NON PAYE"];
const COULEURS = ["OR", "ARGENT", "NOIR", "BOIS", "ROSE", "MULTICOLORS", "AUTRES"];
const RECUPERATIONS = ["RETRAIT MAGASIN", "LIVRAISON YT", "LIVRAISON FR", "LIVRAISON RE", "LIVRAISON GU", "LIVRAISON MA", "LIVRAISON MONDE", "LIVRAISON LIVREUR", "LIVRAISON MAIL", "POINT RELAIS"];
const MOIS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
// Fournisseurs repris de votre onglet LISTE (modifiables dans l'onglet Fournisseurs)
const FOURNISSEURS_DEFAUT = ["VNOX", "Meaeguet speciality store", "AZIZ BEKKAOUI Official Store", "IcftZwe Store", "Qitian Official Store"];

// ------------------------------------------------------------------ Données
const CLE = "zarahissi.simple.v1";
let etat = {
  lignes: [],
  fournisseurs: [...FOURNISSEURS_DEFAUT],
  fournisseurParProduit: {},
  reglages: { stock: 5, persoMin: 15, persoMax: 35, commanderSous: 2 },
  derniereSauvegarde: null,
};
function charger() {
  try {
    const d = JSON.parse(localStorage.getItem(CLE) || "null");
    if (d) etat = { ...etat, ...d, reglages: { ...etat.reglages, ...(d.reglages || {}) } };
  } catch (e) { console.error(e); }
}
function enregistrer() {
  try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch { toast("⚠ Stockage plein : téléchargez une sauvegarde"); }
}
const nouvelId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

// ------------------------------------------------------------------ Outils
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const euros = v => (v == null || v === "" || isNaN(v)) ? "" : Number(v).toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
function iso(d) { if (!(d instanceof Date) || isNaN(d)) return null; const z = n => String(n).padStart(2, "0"); return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`; }
const auj = () => iso(new Date());
const versDate = s => s ? new Date(s + "T00:00:00") : null;
const plusJours = (s, n) => { const d = versDate(s); d.setDate(d.getDate() + n); return iso(d); };
const ecart = (a, b) => Math.round((versDate(b) - versDate(a)) / 864e5);   // b - a en jours
const dateFr = s => s ? versDate(s).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" }) : "";
const dateFrLong = s => s ? versDate(s).toLocaleDateString("fr-FR") : "";
const prenom = nom => (nom || "").trim().split(/\s+/)[0] || "";
const cleCommande = l => [l.facture || "", l.client || "", l.date_paiement || ""].join("|");
function toast(msg) { $$(".toast").forEach(x => x.remove()); const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2600); }
function options(liste, val, vide = true) {
  const v = val ?? "";
  const extra = v && !liste.includes(v) ? [v] : [];
  return (vide ? `<option value=""></option>` : "") + [...liste, ...extra].map(o => `<option ${o === v ? "selected" : ""}>${esc(o)}</option>`).join("");
}
const chip = s => { const c = STATUTS[s]; return s ? `<span class="chip" style="background:${c?.fond || "#eee"};color:${c?.police || "#000"}">${esc(c?.lib || s)}</span>` : ""; };
function telWhatsApp(num) {
  let d = String(num || "").replace(/[^\d+]/g, "");
  if (!d) return null;
  if (d.startsWith("+")) return d.slice(1);
  if (d.startsWith("00")) return d.slice(2);
  if (d.length === 10 && d.startsWith("0")) d = d.slice(1);
  if (d.length !== 9) return d;
  const p3 = d.slice(0, 3);   // indicatif selon le préfixe mobile
  if (["639", "692", "693"].includes(p3)) return "262" + d;
  if (["690", "691"].includes(p3)) return "590" + d;
  if (["696", "697"].includes(p3)) return "596" + d;
  if (p3 === "694") return "594" + d;
  return "33" + d;
}
// Texte du type « 1 X Collier … » = description de commande du site, pas un texte à graver
const estDescription = t => /^\s*\d+\s*(A\s*)?X\b/i.test(t || "");
const devinerType = l => (l.perso && !estDescription(l.perso)) ? "perso" : "stock";
const typeDe = l => l.type || devinerType(l);

// ------------------------------------------------------------------ Délais
// Personnalisé : prêt entre paiement + 15 j et paiement + 35 j. Stock : à envoyer avant paiement + 5 j.
function delai(l) {
  const R = etat.reglages, t = auj();
  if (!l.date_paiement) return { txt: "", classe: "b-ok", retard: false };
  const rupture = typeDe(l) === "stock" && !A_ENVOYER.includes(l.statut) && enCours(l);
  if (typeDe(l) === "stock" && !rupture) {
    // Stock : à envoyer sous 5 j après le paiement (ou après réception si le produit était en rupture)
    const lim = plusJours(l.date_recu || l.date_paiement, R.stock);
    const reste = ecart(t, lim);
    if (reste < 0) return { txt: `envoi prévu le ${dateFr(lim)} · ${-reste} j de retard`, classe: "b-retard", retard: true };
    return { txt: reste === 0 ? "à envoyer aujourd'hui" : `à envoyer avant le ${dateFr(lim)}`, classe: reste <= 1 ? "b-bientot" : "b-ok", retard: false };
  }
  const min = plusJours(l.date_paiement, R.persoMin), max = plusJours(l.date_paiement, R.persoMax);
  if (A_COMMANDER.includes(l.statut)) {
    const attente = ecart(l.date_paiement, t);
    if (t > max) return { txt: `délai client dépassé (${dateFr(max)})`, classe: "b-retard", retard: true };
    if (attente > R.commanderSous) return { txt: `payé il y a ${attente} j · à commander vite`, classe: "b-bientot", retard: false };
    return { txt: `payé il y a ${attente} j`, classe: "b-ok", retard: false };
  }
  if (t > max) return { txt: `prévu au plus tard le ${dateFr(max)} · ${ecart(max, t)} j de retard`, classe: "b-retard", retard: true };
  if (t >= min && CHEZ_FOURNISSEUR.includes(l.statut)) return { txt: `devrait arriver (avant le ${dateFr(max)}) · relancer ?`, classe: "b-bientot", retard: false };
  return { txt: `prévu entre le ${dateFr(min)} et le ${dateFr(max)}`, classe: "b-ok", retard: false };
}
const enRetard = l => enCours(l) && delai(l).retard;

// ------------------------------------------------------------------ Navigation
let vue = "afaire";
const VUES = { afaire: vueAFaire, commandes: vueCommandes, fournisseurs: vueFournisseurs, reglages: vueReglages };
function aller(v) { vue = v; $$("nav button").forEach(b => b.classList.toggle("actif", b.dataset.vue === v)); rendre(); window.scrollTo(0, 0); }
function rendre() {
  const n = etat.lignes.filter(enRetard).length;
  $("#pastille").textContent = n; $("#pastille").style.display = n ? "" : "none";
  VUES[vue]();
}

// ------------------------------------------------------------------ À FAIRE
const parDate = (a, b) => (enRetard(b) - enRetard(a)) || (a.date_paiement || "").localeCompare(b.date_paiement || "");  // retards en premier
function vueAFaire() {
  const L = etat.lignes;
  const aCommander = L.filter(l => A_COMMANDER.includes(l.statut)).sort(parDate);
  const chezFour = L.filter(l => CHEZ_FOURNISSEUR.includes(l.statut)).sort((a, b) => (a.date_cmd_fournisseur || a.date_paiement || "").localeCompare(b.date_cmd_fournisseur || b.date_paiement || ""));
  const aEnvoyer = L.filter(l => A_ENVOYER.includes(l.statut)).sort(parDate);
  const enRoute = L.filter(l => estEnvoye(l.statut)).sort((a, b) => (b.date_envoi || "").localeCompare(a.date_envoi || ""));
  const retards = L.filter(enRetard);
  const R = etat.reglages;
  $("main").innerHTML = `
    ${bandeau()}
    <div class="resume">
      <a href="#" id="voir-retards" class="${retards.length ? "alerte" : ""}"><div class="n">${retards.length}</div><div class="l">🔴 En retard (voir la liste)</div></a>
      <a href="#s-commander"><div class="n">${aCommander.length}</div><div class="l">🛒 À commander au fournisseur</div></a>
      <a href="#s-fournisseur"><div class="n">${chezFour.length}</div><div class="l">⏳ Chez le fournisseur</div></a>
      <a href="#s-envoyer"><div class="n">${aEnvoyer.length}</div><div class="l">📦 À envoyer / à remettre</div></a>
    </div>

    <div class="carte" id="s-commander"><div class="section-tete"><h2>🛒 À commander au fournisseur</h2><span class="compte">${aCommander.length}</span>
      <span class="aide">Les commandes en retard sont en haut. Cochez les articles, choisissez le fournisseur, copiez la liste pour lui envoyer puis cliquez « Commandé ». À commander sous ${R.commanderSous} j après le paiement.</span>
      ${aCommander.length ? `<label class="btn petit"><input type="checkbox" id="tout-cocher"> Tout cocher</label>
      <select id="four-lot"><option value="">— Fournisseur —</option>${options(etat.fournisseurs, "", false)}</select>
      <button class="btn petit" id="copier-lot">📋 Copier la liste</button>
      <button class="btn petit bleu" id="commande-lot">✓ Marquer commandé</button>` : ""}</div>
      ${aCommander.map(l => ligne(l, { caseACocher: true, actions: actionsPour(l) })).join("") || `<p class="vide">Rien à commander 🎉</p>`}</div>

    <div class="carte" id="s-fournisseur"><div class="section-tete"><h2>⏳ Chez le fournisseur</h2><span class="compte">${chezFour.length}</span>
      <span class="aide">Personnalisé : prêt ${R.persoMin} à ${R.persoMax} jours après le paiement. Cliquez « Reçu » quand le colis du fournisseur arrive.</span></div>
      ${chezFour.map(l => ligne(l, { actions: actionsPour(l) })).join("") || `<p class="vide">Aucune commande en cours chez un fournisseur.</p>`}</div>

    <div class="carte" id="s-envoyer"><div class="section-tete"><h2>📦 À envoyer / à remettre au client</h2><span class="compte">${aEnvoyer.length}</span>
      <span class="aide">Produits en stock (montres, collier Mayotte, drapeaux…) : à envoyer sous ${R.stock} jours. Pas de stock ? Cliquez « Rupture » : il passe dans « À commander » avec le délai fournisseur.</span></div>
      ${aEnvoyer.map(l => ligne(l, { actions: actionsPour(l) })).join("") || `<p class="vide">Rien à envoyer.</p>`}</div>

    <details class="carte"><summary class="section-tete"><h2>🚚 Envoyés, en route</h2><span class="compte">${enRoute.length}</span>
      <span class="aide">Cliquez pour afficher. « Livré ✓ » passe la commande en Terminé.</span></summary>
      ${enRoute.slice(0, 150).map(l => ligne(l, { actions: actionsPour(l) })).join("") || `<p class="vide">Aucun colis en route.</p>`}</details>`;
  brancherLignes();
  $("#voir-retards").onclick = e => { e.preventDefault(); filtre = { q: "", mois: "", etape: "retard" }; aller("commandes"); };
  const cases = () => $$("#s-commander input[data-coche]");
  $("#tout-cocher")?.addEventListener("change", e => cases().forEach(c => c.checked = e.target.checked));
  $("#copier-lot")?.addEventListener("click", () => {
    const sel = cases().filter(c => c.checked).map(c => etat.lignes.find(l => l.id === c.dataset.coche));
    if (!sel.length) return toast("Cochez au moins un article");
    copier(texteFournisseur(sel), "Liste copiée : collez-la dans le message au fournisseur");
  });
  $("#commande-lot")?.addEventListener("click", () => {
    const sel = cases().filter(c => c.checked).map(c => c.dataset.coche);
    if (!sel.length) return toast("Cochez au moins un article");
    const f = $("#four-lot").value;
    if (!f) return toast("Choisissez le fournisseur");
    sel.forEach(id => marquerCommande(id, f));
    enregistrer(); rendre(); toast(`${sel.length} article(s) commandé(s) chez ${f} ✓`);
  });
}
function bandeau() {
  if (!etat.lignes.length) return `<div class="bandeau">👋 Pour commencer, importez votre fichier Excel actuel. <button class="btn bleu" onclick="aller('reglages')">Importer mon Excel</button></div>`;
  const d = etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde) : null;
  const age = d ? (Date.now() - d) / 864e5 : Infinity;
  return age < 7 ? "" : `<div class="bandeau">💾 ${d ? `Dernière sauvegarde il y a ${Math.floor(age)} jours.` : "Aucune sauvegarde sur votre Mac pour l'instant."} <button class="btn" onclick="sauvegarder()">Sauvegarder maintenant</button></div>`;
}
function ligne(l, { caseACocher = false, actions = "" } = {}) {
  const d = delai(l), t = typeDe(l);
  const perso = l.perso && !estDescription(l.perso);
  return `<div class="ligne ${caseACocher ? "" : "sans-case"}" data-id="${l.id}">
    ${caseACocher ? `<input type="checkbox" data-coche="${l.id}">` : ""}
    <div data-ouvrir="${l.id}" style="cursor:pointer">
      <div><span class="qui">${esc(l.client || "—")}</span> <span class="meta">${esc(l.facture || "")} · payé le ${dateFrLong(l.date_paiement)} · ${esc(l.recuperation || "")}</span></div>
      <div class="quoi">${esc(l.produit || "")} ${l.couleur ? "· <b>" + esc(l.couleur) + "</b>" : ""} ${perso ? `<span class="texte-perso">« ${esc(l.perso)} »</span>` : ""}</div>
      <div class="meta"><span class="badge ${t === "perso" ? "b-perso" : "b-stock"}">${t === "perso" ? "Personnalisé" : (enCours(l) && !A_ENVOYER.includes(l.statut) ? "Stock · rupture" : "Stock")}</span>
        ${enCours(l) && d.txt ? `<span class="badge ${d.classe}">${esc(d.txt)}</span>` : ""}
        ${l.fournisseur ? ` · 🏭 ${esc(l.fournisseur)}${l.date_cmd_fournisseur ? " le " + dateFr(l.date_cmd_fournisseur) : ""}` : ""}
        ${estEnvoye(l.statut) && l.date_envoi ? ` · envoyé le ${dateFr(l.date_envoi)}` : ""}
        ${!enCours(l) && !estEnvoye(l.statut) ? chip(l.statut) : ""}</div>
    </div>
    <div class="actions">${actions}</div></div>`;
}
function actionsPour(l) {
  const id = l.id, b = (act, txt, cl = "") => `<button class="btn petit ${cl}" data-act="${act}" data-id="${id}">${txt}</button>`;
  const wa = telWhatsApp(l.numero) ? b("message", "💬", "") : "";
  const remettre = l.recuperation === "RETRAIT MAGASIN";
  if (A_COMMANDER.includes(l.statut)) return b("commande", "✓ Commandé", "bleu") + (typeDe(l) === "stock" ? b("enstock", "En stock") : "") + wa;
  if (CHEZ_FOURNISSEUR.includes(l.statut)) return b("recu", "📥 Reçu", "vert") + b("erreur", "Erreur") + wa;
  if (A_ENVOYER.includes(l.statut)) return b("envoye", remettre ? "🤝 Remis au client" : "🚚 Envoyé", "vert") + (typeDe(l) === "stock" ? b("rupture", "Rupture") : "") + wa;
  if (estEnvoye(l.statut)) return b("livre", "Livré ✓") + wa;
  return wa;
}
function brancherLignes() {
  $$("[data-ouvrir]").forEach(el => el.onclick = () => ouvrirCommande(el.dataset.ouvrir));
  $$("[data-act]").forEach(btn => btn.onclick = () => action(btn.dataset.act, btn.dataset.id));
}
function marquerCommande(id, fournisseur) {
  const l = etat.lignes.find(x => x.id === id);
  l.statut = "EN PRODUCTION"; l.fournisseur = fournisseur; l.date_cmd_fournisseur = auj(); l.date_prod = l.date_prod || auj();
  if (l.produit) etat.fournisseurParProduit[l.produit] = fournisseur;
}
function statutEnvoi(l) {
  const r = (l.recuperation || "").toUpperCase();
  if (r === "RETRAIT MAGASIN") return "VENTE FINALISÉE";
  if (r.endsWith(" YT")) return "PRODUIT ENVOYE YT";
  if (r.endsWith(" RE")) return "PRODUIT ENVOYE RE";
  if (r.endsWith(" GU")) return "PRODUIT ENVOYE GUA";
  if (r.endsWith(" MA")) return "PRODUIT ENVOYE MAR";
  if (r.includes("MONDE")) return "PRODUIT ENVOYE MONDE";
  return "PRODUIT ENVOYE FR";
}
function action(act, id) {
  const l = etat.lignes.find(x => x.id === id);
  if (!l) return;
  if (act === "message") return messageClient(l);
  if (act === "commande") return choisirFournisseur([id]);
  if (act === "enstock") { l.statut = "EN ATTENTE D'ENVOI"; l.type = "stock"; }
  if (act === "rupture") { l.statut = "A COMMANDER"; }
  if (act === "recu") { l.statut = "PRÊT POUR ENVOI"; l.date_recu = auj(); }
  if (act === "erreur") { l.statut = "ERREUR ÉCRITURE"; l.notes = [l.notes, `Erreur fournisseur ${l.fournisseur || ""} le ${dateFrLong(auj())}`].filter(Boolean).join(" · "); }
  if (act === "envoye") { l.statut = statutEnvoi(l); l.date_envoi = auj(); }
  if (act === "livre") { l.statut = "VENTE FINALISÉE"; }
  enregistrer(); rendre();
  if (act === "envoye" || act === "recu") proposerMessage(l, act);
}
function proposerMessage(l, act) {
  if (!telWhatsApp(l.numero)) return;
  $$(".toast").forEach(x => x.remove());
  const t = document.createElement("div"); t.className = "toast";
  t.innerHTML = `${act === "recu" ? "Reçu ✓" : "Envoyé ✓"} — <button class="btn petit wa">Prévenir ${esc(prenom(l.client))}</button>`;
  $("button", t).onclick = () => { t.remove(); messageClient(l, act === "recu" && l.recuperation === "RETRAIT MAGASIN" ? "pret" : act === "recu" ? "recu" : "envoye"); };
  document.body.appendChild(t); setTimeout(() => t.remove(), 7000);
}
function choisirFournisseur(ids) {
  const l = etat.lignes.find(x => x.id === ids[0]);
  const defaut = l.fournisseur || etat.fournisseurParProduit[l.produit] || "";
  ouvrirFenetre("Commandé chez quel fournisseur ?", `
    <div class="champs"><label class="large">Fournisseur<select id="choix-four">${options(etat.fournisseurs, defaut)}</select></label>
    <label class="large">Ou nouveau fournisseur<input id="nouveau-four" placeholder="Nom du fournisseur"></label>
    <label class="large">N° de commande fournisseur (facultatif)<input id="ref-four" value="${esc(l.ref_fournisseur)}"></label></div>
    <p class="sous" style="margin-top:12px">${esc(l.produit || "")} ${l.perso && !estDescription(l.perso) ? "— « " + esc(l.perso) + " »" : ""}</p>`,
    `<button class="btn" onclick="copier(texteFournisseur([etat.lignes.find(x=>x.id==='${l.id}')]),'Texte copié pour le fournisseur')">📋 Copier pour le fournisseur</button>
     <span style="flex:1"></span><button class="btn" onclick="fermer()">Annuler</button><button class="btn bleu" id="valider-four">Valider</button>`);
  $("#valider-four").onclick = () => {
    const nouveau = $("#nouveau-four").value.trim();
    const f = nouveau || $("#choix-four").value;
    if (!f) return toast("Choisissez un fournisseur");
    if (nouveau && !etat.fournisseurs.includes(nouveau)) etat.fournisseurs.push(nouveau);
    ids.forEach(id => { marquerCommande(id, f); etat.lignes.find(x => x.id === id).ref_fournisseur = $("#ref-four").value.trim() || null; });
    enregistrer(); fermer(); rendre(); toast(`Commandé chez ${f} ✓`);
  };
}
function texteFournisseur(lignes) {
  return "Bonjour, voici notre commande :\n\n" + lignes.map((l, i) =>
    `${i + 1}) ${l.produit || ""}${l.couleur ? " — couleur " + l.couleur : ""}\n   Texte à graver : ${l.perso && !estDescription(l.perso) ? "« " + l.perso + " »" : "(aucun)"}`
  ).join("\n\n") + "\n\nMerci de respecter exactement l'orthographe, les majuscules et les accents. Merci !";
}
async function copier(txt, msg) {
  try { await navigator.clipboard.writeText(txt); }
  catch { const t = document.createElement("textarea"); t.value = txt; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); }
  toast(msg || "Copié ✓");
}

// ------------------------------------------------------------------ Message client (WhatsApp)
function messageClient(l, type) {
  const ls = etat.lignes.filter(x => cleCommande(x) === cleCommande(l));
  const R = etat.reglages;
  const perso = ls.some(x => typeDe(x) === "perso");
  if (!type) type = A_COMMANDER.includes(l.statut) || CHEZ_FOURNISSEUR.includes(l.statut) ? (delai(l).retard ? "retard" : "confirmation") : A_ENVOYER.includes(l.statut) ? (l.recuperation === "RETRAIT MAGASIN" ? "pret" : "recu") : "envoye";
  const p = prenom(l.client), n = l.facture ? " n°" + l.facture : "";
  const art = ls.map(x => `• ${x.produit || ""}${x.couleur ? " (" + x.couleur + ")" : ""}${x.perso && !estDescription(x.perso) ? " : « " + x.perso + " »" : ""}`).join("\n");
  const fin = perso ? `entre le ${dateFrLong(plusJours(l.date_paiement, R.persoMin))} et le ${dateFrLong(plusJours(l.date_paiement, R.persoMax))}` : `d'ici le ${dateFrLong(plusJours(l.date_paiement, R.stock))}`;
  const modeles = {
    confirmation: `Bonjour ${p} 😊 Merci pour votre commande ZARAHISSI${n} !\n\n${art}\n\n${perso ? `Votre bijou personnalisé sera prêt ${fin}.` : `Votre commande sera envoyée ${fin}.`}\nMerci de vérifier l'orthographe ci-dessus et de nous répondre s'il y a une correction.`,
    retard: `Bonjour ${p}, nous voulions vous tenir informé(e) : votre commande ZARAHISSI${n} a pris un peu de retard chez notre fournisseur. Nous faisons le maximum et revenons vers vous dès sa réception. Merci pour votre patience 🙏`,
    recu: `Bonjour ${p} 🎉 Votre commande ZARAHISSI${n} est arrivée, elle part très vite ! 📦`,
    pret: `Bonjour ${p} 🎉 Votre commande ZARAHISSI${n} est prête ! Vous pouvez venir la récupérer en boutique.`,
    envoye: `Bonjour ${p}, votre commande ZARAHISSI${n} vient d'être expédiée 📦 Merci pour votre confiance 💛`,
  };
  const noms = { confirmation: "Confirmation + délai", retard: "Retard", recu: "Reçue", pret: "Prête (retrait)", envoye: "Expédiée" };
  const tel = telWhatsApp(l.numero);
  ouvrirFenetre(`Message à ${esc(l.client || "")}`, `
    <div class="outils">${Object.keys(modeles).map(k => `<button class="btn petit ${k === type ? "bleu" : ""}" data-modele="${k}">${noms[k]}</button>`).join("")}</div>
    <textarea id="msg" style="width:100%;min-height:200px">${esc(modeles[type])}</textarea>
    <p class="sous">Téléphone : ${esc(l.numero || "non renseigné")}${tel ? " → WhatsApp +" + tel : ""}</p>`,
    `<button class="btn" onclick="fermer()">Fermer</button><button class="btn" onclick="copier($('#msg').value,'Message copié ✓')">📋 Copier</button>
     ${tel ? `<button class="btn wa" onclick="window.open('https://wa.me/${tel}?text='+encodeURIComponent($('#msg').value),'_blank')">Ouvrir WhatsApp</button>` : ""}`);
  $$("[data-modele]").forEach(b => b.onclick = () => messageClient(l, b.dataset.modele));
}

// ------------------------------------------------------------------ COMMANDES (recherche + liste)
let filtre = { q: "", mois: "", etape: "" };
function vueCommandes() {
  const mois = [...new Set(etat.lignes.map(l => (l.date_paiement || "").slice(0, 7)).filter(Boolean))].sort().reverse();
  const q = filtre.q.trim().toLowerCase();
  const champs = ["client", "facture", "numero", "produit", "perso", "fournisseur", "couleur", "adresse", "notes"];
  const lignes = etat.lignes.filter(l => {
    if (filtre.mois && !(l.date_paiement || "").startsWith(filtre.mois)) return false;
    if (filtre.etape === "encours" && !enCours(l)) return false;
    if (filtre.etape === "retard" && !enRetard(l)) return false;
    if (filtre.etape === "perso" && typeDe(l) !== "perso") return false;
    if (filtre.etape === "stock" && typeDe(l) !== "stock") return false;
    if (q && !champs.some(k => String(l[k] ?? "").toLowerCase().includes(q))) return false;
    return true;
  }).sort((a, b) => (b.date_paiement || "").localeCompare(a.date_paiement || ""));
  const total = lignes.reduce((s, l) => s + (Number(l.prix_vente) || 0), 0);
  $("main").innerHTML = `
    <div class="outils">
      <input type="search" id="q" placeholder="🔎 Client, n° de commande, téléphone, produit, texte gravé, fournisseur…" value="${esc(filtre.q)}">
      <select id="f-mois"><option value="">Tous les mois</option>${mois.map(m => `<option value="${m}" ${m === filtre.mois ? "selected" : ""}>${MOIS[+m.slice(5) - 1]} ${m.slice(0, 4)}</option>`).join("")}</select>
      <select id="f-etape">${[["", "Toutes"], ["encours", "En cours"], ["retard", "En retard"], ["perso", "Personnalisés"], ["stock", "Stock"]].map(([v, t]) => `<option value="${v}" ${v === filtre.etape ? "selected" : ""}>${t}</option>`).join("")}</select>
    </div>
    <p class="sous">${lignes.length} article(s) · ${euros(total)}</p>
    <div class="carte" style="padding:6px 10px;overflow-x:auto">${lignes.length ? `<table><thead><tr><th>Payé le</th><th>Client</th><th>Produit</th><th>Texte gravé</th><th class="num">Prix</th><th>Étape</th><th>Fournisseur</th></tr></thead><tbody>
      ${lignes.slice(0, 300).map(l => `<tr data-ouvrir="${l.id}"><td>${dateFrLong(l.date_paiement)}</td><td><b>${esc(l.client)}</b><br><small style="color:var(--gris)">${esc(l.facture || "")}</small></td>
        <td>${esc(l.produit)}<br><small style="color:var(--gris)">${esc(l.couleur || "")}</small></td><td><b>${l.perso && !estDescription(l.perso) ? esc(l.perso) : ""}</b></td>
        <td class="num">${euros(l.prix_vente)}</td><td>${chip(l.statut)}${enRetard(l) ? ' <span class="badge b-retard">retard</span>' : ""}</td><td>${esc(l.fournisseur || "")}</td></tr>`).join("")}</tbody></table>
      ${lignes.length > 300 ? `<p class="sous" style="padding:8px">300 premières lignes affichées : affinez la recherche.</p>` : ""}` : `<p class="vide">Aucune commande trouvée.</p>`}</div>`;
  $("#q").addEventListener("input", e => { filtre.q = e.target.value; const p = e.target.selectionStart; vueCommandes(); $("#q").focus(); $("#q").setSelectionRange(p, p); });
  $("#f-mois").onchange = e => { filtre.mois = e.target.value; vueCommandes(); };
  $("#f-etape").onchange = e => { filtre.etape = e.target.value; vueCommandes(); };
  $$("tr[data-ouvrir]").forEach(tr => tr.onclick = () => ouvrirCommande(tr.dataset.ouvrir));
}

// ------------------------------------------------------------------ Fiche commande
let enEdition = [];
function nouvelleCommande() { ouvrirCommande(null); }
function ouvrirCommande(id) {
  let base, articles;
  if (id) {
    const l = etat.lignes.find(x => x.id === id);
    articles = etat.lignes.filter(x => cleCommande(x) === cleCommande(l)).sort((a, b) => (a.ordre || 0) - (b.ordre || 0));
    base = articles[0];
  } else {
    base = { date_paiement: auj(), contact: "SITE WEB", paiement: "CB SITE WEB", recuperation: "RETRAIT MAGASIN" };
    articles = [{ couleur: "OR" }];
  }
  enEdition = articles.map(a => a.id).filter(Boolean);
  const produits = [...new Set(etat.lignes.map(l => l.produit).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  ouvrirFenetre(id ? `Commande ${esc(base.facture || "")} — ${esc(base.client || "")}` : "Nouvelle commande", `
    <datalist id="produits">${produits.map(p => `<option value="${esc(p)}">`).join("")}</datalist>
    <div class="bloc client"><div class="champs">
      <label>Client *<input name="client" value="${esc(base.client)}"></label>
      <label>Téléphone<input name="numero" value="${esc(base.numero)}" inputmode="tel"></label>
      <label>N° de commande<input name="facture" value="${esc(base.facture)}"></label>
      <label>Payé le<input type="date" name="date_paiement" value="${esc(base.date_paiement)}"></label>
      <label>Paiement<select name="paiement">${options(PAIEMENTS, base.paiement)}</select></label>
      <label>Venu par<select name="contact">${options(CONTACTS, base.contact)}</select></label>
    </div></div>
    <div id="articles"></div>
    <button class="btn" id="plus-article" style="margin-bottom:12px">+ Ajouter un article</button>
    <div class="bloc livraison"><div class="champs">
      <label>Récupération<select name="recuperation">${options(RECUPERATIONS, base.recuperation)}</select></label>
      <label class="large">Adresse de livraison<textarea name="adresse" rows="3">${esc(base.adresse)}</textarea></label>
    </div></div>`,
    `${id ? `<button class="btn rouge" id="suppr">Supprimer</button><button class="btn" id="msg-client">💬 Message client</button>` : ""}
     <span style="flex:1"></span><button class="btn" onclick="fermer()">Annuler</button><button class="btn bleu" id="enregistrer">Enregistrer</button>`);
  const zone = $("#articles");
  articles.forEach(a => zone.insertAdjacentHTML("beforeend", htmlArticle(a, !id)));
  $$(".article", zone).forEach(brancherArticle);
  $("#plus-article").onclick = () => { zone.insertAdjacentHTML("beforeend", htmlArticle({ couleur: "OR" }, true)); brancherArticle($$(".article", zone).pop()); numeroter(); };
  numeroter();
  $("#enregistrer").onclick = sauverCommande;
  if (id) {
    $("#suppr").onclick = () => { if (!confirm("Supprimer cette commande ?")) return; etat.lignes = etat.lignes.filter(l => !enEdition.includes(l.id)); enregistrer(); fermer(); rendre(); };
    $("#msg-client").onclick = () => messageClient(base);
  }
}
function htmlArticle(a, nouveau) {
  const t = a.id ? typeDe(a) : (a.type || "perso");
  const uid = Math.random().toString(36).slice(2, 8);
  const etapes = Object.keys(STATUTS);
  return `<div class="article" data-id="${a.id || ""}">
    <div class="haut"><b class="titre-art">Article</b>
      <span class="type-choix"><label><input type="radio" name="type-${uid}" value="perso" ${t === "perso" ? "checked" : ""}>✍️ Personnalisé</label><label><input type="radio" name="type-${uid}" value="stock" ${t === "stock" ? "checked" : ""}>📦 Stock</label></span>
      <button type="button" class="btn petit rouge" data-retirer>Retirer</button></div>
    <div class="champs">
      <label class="large">Produit<input name="produit" list="produits" value="${esc(a.produit)}"></label>
      <label class="large champ-perso">Texte à graver (exactement comme le client l'a écrit)<input name="perso" value="${esc(a.perso)}"></label>
      <label>Couleur<select name="couleur">${options(COULEURS, a.couleur)}</select></label>
      <label>Prix de vente (€)<input type="number" step="0.01" name="prix_vente" value="${a.prix_vente ?? ""}"></label>
      <label>Prix d'achat (€)<input type="number" step="0.01" name="prix_achat" value="${a.prix_achat ?? ""}"></label>
      ${nouveau ? "" : `<label>Étape<select name="statut">${etapes.map(s => `<option value="${esc(s)}" ${s === a.statut ? "selected" : ""}>${esc(STATUTS[s].lib)}</option>`).join("")}</select></label>
      <label>Fournisseur<select name="fournisseur">${options(etat.fournisseurs, a.fournisseur)}</select></label>
      <label>Commandé le<input type="date" name="date_cmd_fournisseur" value="${esc(a.date_cmd_fournisseur)}"></label>
      <label>Envoyé le<input type="date" name="date_envoi" value="${esc(a.date_envoi)}"></label>`}
      <label class="large">Notes<input name="notes" value="${esc(a.notes)}"></label>
    </div>
    <div class="info-delai"></div></div>`;
}
function brancherArticle(el) {
  const maj = () => {
    const t = $("input[type=radio]:checked", el).value, R = etat.reglages;
    $(".info-delai", el).textContent = t === "perso"
      ? `✍️ Gravé par le fournisseur : prêt ${R.persoMin} à ${R.persoMax} jours après le paiement.`
      : `📦 Produit en stock : à envoyer sous ${R.stock} jours.`;
  };
  $$("input[type=radio]", el).forEach(r => r.onchange = maj);
  // Un texte saisi = produit personnalisé
  $("[name=perso]", el).addEventListener("input", e => { if (e.target.value.trim() && !estDescription(e.target.value)) { $("input[value=perso]", el).checked = true; maj(); } });
  $("[data-retirer]", el).onclick = () => { el.remove(); numeroter(); };
  maj();
}
function numeroter() { $$("#articles .article").forEach((el, i) => $(".titre-art", el).textContent = `Article ${i + 1}`); }
function sauverCommande() {
  const lire = sel => { const o = {}; $$(sel).forEach(i => { if (i.name && i.type !== "radio") o[i.name] = i.value.trim() === "" ? null : i.value.trim(); }); return o; };
  const client = lire(".bloc [name]");
  if (!client.client) return toast("Indiquez le nom du client");
  const arts = $$("#articles .article").map(el => {
    const a = {}; $$("[name]", el).forEach(i => { if (i.type !== "radio") a[i.name] = i.value.trim() === "" ? null : i.value.trim(); });
    ["prix_vente", "prix_achat"].forEach(k => { if (a[k] != null) a[k] = Number(String(a[k]).replace(",", ".")); });
    a.type = $("input[type=radio]:checked", el).value; a.id = el.dataset.id || null;
    return a;
  });
  if (!arts.length) return toast("Ajoutez au moins un article");
  const gardes = new Set(arts.map(a => a.id).filter(Boolean));
  etat.lignes = etat.lignes.filter(l => !enEdition.includes(l.id) || gardes.has(l.id));
  const ordre = Date.now();
  arts.forEach((a, i) => {
    const ex = a.id && etat.lignes.find(l => l.id === a.id);
    const statutDefaut = a.type === "perso" ? "A COMMANDER" : "EN ATTENTE D'ENVOI";
    const l = { ...(ex || {}), ...a, ...client, id: a.id || nouvelId(), suite: i > 0, ordre: ex?.ordre ?? ordre + i };
    if (!l.statut) l.statut = statutDefaut;
    if (ex) Object.assign(ex, l); else etat.lignes.push(l);
  });
  enregistrer(); fermer(); rendre(); toast("Commande enregistrée ✓");
}

// ------------------------------------------------------------------ FOURNISSEURS
function vueFournisseurs() {
  const stats = etat.fournisseurs.map(f => {
    const ls = etat.lignes.filter(l => l.fournisseur === f);
    const chez = ls.filter(l => CHEZ_FOURNISSEUR.includes(l.statut));
    const delais = ls.filter(l => l.date_cmd_fournisseur && l.date_recu).map(l => ecart(l.date_cmd_fournisseur, l.date_recu));
    const moy = delais.length ? Math.round(delais.reduce((a, b) => a + b, 0) / delais.length) : null;
    return { f, total: ls.length, chez, moy, retards: chez.filter(enRetard).length, erreurs: ls.filter(l => (l.notes || "").includes("Erreur fournisseur")).length };
  });
  $("main").innerHTML = `
    <h1>Fournisseurs</h1>
    <p class="sous">La gravure est faite par vos fournisseurs. Ici : ce qui est en cours chez chacun, leur délai réel et leurs erreurs.</p>
    <div class="grille2">${stats.map(s => `<div class="carte">
      <div class="section-tete"><h2>🏭 ${esc(s.f)}</h2><span class="compte">${s.chez.length} en cours</span></div>
      <p class="sous" style="margin:0 0 8px">${s.total} article(s) commandé(s) · délai moyen : ${s.moy == null ? "pas encore mesuré" : s.moy + " jours"}${s.retards ? ` · <b style="color:var(--rouge)">${s.retards} en retard</b>` : ""}${s.erreurs ? ` · ${s.erreurs} erreur(s)` : ""}</p>
      ${s.chez.sort(parDate).map(l => ligne(l, { actions: actionsPour(l) })).join("")}
      <div class="outils" style="margin:8px 0 0">${s.chez.length ? `<button class="btn petit" data-relance="${esc(s.f)}">📋 Copier un message de relance</button>` : ""}
        <span style="flex:1"></span><button class="btn petit rouge" data-suppr="${esc(s.f)}">Retirer de la liste</button></div>
    </div>`).join("")}</div>
    <div class="carte"><h2 style="margin-bottom:10px">Ajouter un fournisseur</h2>
      <div class="outils"><input id="nom-four" placeholder="Nom du fournisseur"><button class="btn bleu" id="ajout-four">Ajouter</button></div></div>`;
  brancherLignes();
  $("#ajout-four").onclick = () => { const n = $("#nom-four").value.trim(); if (!n) return; if (!etat.fournisseurs.includes(n)) etat.fournisseurs.push(n); enregistrer(); rendre(); };
  $$("[data-suppr]").forEach(b => b.onclick = () => { if (confirm(`Retirer ${b.dataset.suppr} de la liste ? (les commandes passées restent)`)) { etat.fournisseurs = etat.fournisseurs.filter(f => f !== b.dataset.suppr); enregistrer(); rendre(); } });
  $$("[data-relance]").forEach(b => b.onclick = () => {
    const ls = etat.lignes.filter(l => l.fournisseur === b.dataset.relance && CHEZ_FOURNISSEUR.includes(l.statut)).sort(parDate);
    copier("Bonjour, pourriez-vous nous donner l'avancement de ces commandes ?\n\n" + ls.map(l => `• ${l.ref_fournisseur ? "Cde " + l.ref_fournisseur + " — " : ""}${l.produit || ""}${l.couleur ? " (" + l.couleur + ")" : ""}${l.perso && !estDescription(l.perso) ? " — « " + l.perso + " »" : ""} — commandé le ${dateFrLong(l.date_cmd_fournisseur)}`).join("\n") + "\n\nMerci !", "Message de relance copié ✓");
  });
}

// ------------------------------------------------------------------ FICHIER & RÉGLAGES
function vueReglages() {
  const R = etat.reglages;
  $("main").innerHTML = `
    <h1>Fichier & réglages</h1>
    <p class="sous">Tout fonctionne sans internet. Les commandes sont gardées dans ce navigateur, sur votre Mac : faites une sauvegarde chaque semaine.</p>
    <div class="grille2">
      <div class="carte"><h2>📥 Importer mon Excel</h2><p class="sous" style="margin-top:6px">Votre fichier de commandes (onglets JAN 2026, FEV 2026…) ou un export de cette page.</p>
        <input type="file" id="imp-xlsx" accept=".xlsx,.xls,.xlsm"><p id="res-import" class="sous"></p></div>
      <div class="carte"><h2>💾 Sauvegarde</h2><p class="sous" style="margin-top:6px">Dernière : ${etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde).toLocaleString("fr-FR") : "jamais"}</p>
        <div class="outils"><button class="btn bleu" onclick="sauvegarder()">Télécharger une sauvegarde</button>
        <label class="btn">Restaurer<input type="file" id="imp-json" accept=".json" hidden></label>
        <button class="btn" onclick="exporterExcel()">Exporter en Excel</button></div></div>
      <div class="carte"><h2>⏱ Délais</h2>
        <div class="champs" style="margin-top:10px">
          <label>Personnalisé : prêt au plus tôt (jours)<input type="number" min="1" data-r="persoMin" value="${R.persoMin}"></label>
          <label>Personnalisé : prêt au plus tard (jours)<input type="number" min="1" data-r="persoMax" value="${R.persoMax}"></label>
          <label>Stock : envoi sous (jours)<input type="number" min="1" data-r="stock" value="${R.stock}"></label>
          <label>Commander au fournisseur sous (jours)<input type="number" min="0" data-r="commanderSous" value="${R.commanderSous}"></label>
        </div></div>
      <div class="carte"><h2>Effacer</h2><p class="sous" style="margin-top:6px">Supprime toutes les commandes de cette page (pas votre Excel).</p><button class="btn rouge" onclick="toutEffacer()">Effacer toutes les données</button></div>
    </div>`;
  $("#imp-xlsx").onchange = e => importerExcel(e.target.files[0]);
  $("#imp-json").onchange = e => restaurer(e.target.files[0]);
  $$("[data-r]").forEach(i => i.onchange = () => { etat.reglages[i.dataset.r] = Math.max(0, +i.value || 0); enregistrer(); toast("Délai enregistré ✓"); });
}
function telecharger(nom, blob) { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = nom; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); }
function sauvegarder() {
  etat.derniereSauvegarde = new Date().toISOString(); enregistrer();
  telecharger(`zarahissi-sauvegarde-${auj()}.json`, new Blob([JSON.stringify(etat)], { type: "application/json" }));
  rendre();
}
async function restaurer(f) {
  if (!f) return;
  try {
    const d = JSON.parse(await f.text());
    if (!Array.isArray(d.lignes)) throw 0;
    if (!confirm(`Restaurer ${d.lignes.length} articles ? Les données actuelles seront remplacées.`)) return;
    etat = { ...etat, ...d, reglages: { ...etat.reglages, ...(d.reglages || {}) } }; enregistrer(); rendre(); toast("Sauvegarde restaurée ✓");
  } catch { toast("Ce fichier n'est pas une sauvegarde ZARAHISSI"); }
}
function toutEffacer() {
  if (!confirm("Effacer toutes les commandes de cette page ? Pensez à sauvegarder avant.")) return;
  if (prompt("Tapez EFFACER pour confirmer") !== "EFFACER") return;
  etat.lignes = []; enregistrer(); rendre();
}
const norm = s => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase().replace(/\s+/g, " ").trim();
const ENTETES = {
  CONTACT: "contact", CLIENT: "client", "N° FACTURE/COMMANDE": "facture", "DATE PAIEMENT": "date_paiement", PAIEMENT: "paiement",
  NUMERO: "numero", "EMBALLAGE/MOTS": "emballage", PRODUIT: "produit", COULEUR: "couleur", PERSONNALISATION: "perso",
  "PRIX VENTE": "prix_vente", "PRIX ACHAT": "prix_achat", "DATE PROD": "date_prod", STATUT: "statut", "DATE ENVOIE": "date_envoi",
  RECUPERATION: "recuperation", "ADRESSE DE LIVRAISON": "adresse", NOTES: "notes",
  TYPE: "type", FOURNISSEUR: "fournisseur", "COMMANDE FOURNISSEUR LE": "date_cmd_fournisseur", "N° COMMANDE FOURNISSEUR": "ref_fournisseur", "RECU LE": "date_recu",
};
const COLS_EXPORT = [["contact", "CONTACT"], ["client", "CLIENT"], ["facture", "N° Facture/commande"], ["date_paiement", "DATE PAIEMENT"], ["paiement", "PAIEMENT"],
  ["numero", "NUMERO"], ["emballage", "Emballage/Mots"], ["produit", "PRODUIT"], ["couleur", "Couleur"], ["perso", "PERSONNALISATION"], ["prix_vente", "PRIX VENTE"],
  ["prix_achat", "PRIX ACHAT"], ["date_prod", "DATE PROD"], ["statut", "STATUT"], ["date_envoi", "DATE ENVOIE"], ["recuperation", "RÉCUPÉRATION"],
  ["adresse", "ADRESSE DE LIVRAISON"], ["type", "TYPE"], ["fournisseur", "FOURNISSEUR"], ["date_cmd_fournisseur", "COMMANDÉ FOURNISSEUR LE"],
  ["ref_fournisseur", "N° COMMANDE FOURNISSEUR"], ["date_recu", "REÇU LE"], ["notes", "NOTES"]];
const CHAMPS_CLIENT = ["contact", "client", "facture", "date_paiement", "paiement", "numero", "recuperation", "adresse"];
async function importerExcel(f) {
  if (!f) return;
  const res = $("#res-import"); res.textContent = "Lecture…";
  try {
    const wb = XLSX.read(await f.arrayBuffer(), { cellDates: true });
    const lignes = [], details = [];
    const mois = ["JAN", "FEV", "MARS", "AVRIL", "MAI", "JUIN", "JUIL", "AOUT", "SEPT", "OCT", "NOV", "DEC"];
    for (const nom of wb.SheetNames) {
      const n = norm(nom);
      if (!(n === "COMMANDES" || mois.some(m => new RegExp("^" + m + " \\d{4}$").test(n)))) continue;
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[nom], { header: 1, raw: true, defval: null });
      const iE = rows.findIndex(r => r && r.some(c => norm(c) === "PRODUIT") && r.some(c => norm(c) === "STATUT"));
      if (iE < 0) continue;
      const map = {};
      rows[iE].forEach((c, i) => { const k = ENTETES[norm(c)]; if (k && !(k in map)) map[k] = i; });
      let prec = null, nb = 0;
      for (const r of rows.slice(iE + 1)) {
        if (!r) continue;
        if (norm(r[map.perso]) === "TOTAL VENTE") break;   // ligne de total des anciens onglets
        const l = {};
        for (const [k, i] of Object.entries(map)) { let v = r[i]; if (typeof v === "string") v = v.trim() || null; l[k] = v ?? null; }
        if (!l.produit && !l.perso && l.prix_vente == null && !l.client) continue;
        const suite = !l.client && !l.facture && prec;
        if (suite) CHAMPS_CLIENT.forEach(k => { if (l[k] == null) l[k] = prec[k]; });
        for (const k of ["date_paiement", "date_prod", "date_envoi", "date_cmd_fournisseur", "date_recu"])
          l[k] = l[k] instanceof Date ? iso(new Date(l[k].getTime() + 12 * 3600e3)) : (typeof l[k] === "string" && /^\d{4}-\d\d-\d\d/.test(l[k]) ? l[k].slice(0, 10) : null);
        for (const k of ["prix_vente", "prix_achat"]) l[k] = typeof l[k] === "number" ? Math.round(l[k] * 100) / 100 : (l[k] && !isNaN(String(l[k]).replace(",", ".")) ? Number(String(l[k]).replace(",", ".")) : null);
        for (const k of ["facture", "numero", "ref_fournisseur"]) if (typeof l[k] === "number") l[k] = String(l[k]);
        if (l.type) l.type = /stock/i.test(l.type) ? "stock" : "perso";
        l.id = nouvelId(); l.suite = !!suite; l.ordre = lignes.length;
        lignes.push(l); prec = l; nb++;
      }
      if (nb) details.push(`${nom} : ${nb}`);
    }
    if (!lignes.length) { res.textContent = "Aucun onglet de commandes reconnu."; return; }
    const remplacer = etat.lignes.length ? confirm(`${lignes.length} articles trouvés.\n\nOK = REMPLACER les ${etat.lignes.length} articles actuels\nAnnuler = AJOUTER à la suite`) : true;
    etat.lignes = remplacer ? lignes : etat.lignes.concat(lignes);
    enregistrer(); rendre();
    $("#res-import").innerHTML = `✓ ${lignes.length} articles importés (${details.map(esc).join(" · ")})`;
  } catch (e) { console.error(e); res.textContent = "Erreur de lecture : " + e.message; }
}
function exporterExcel() {
  const L = [...etat.lignes].sort((a, b) => (a.date_paiement || "").localeCompare(b.date_paiement || "") || (a.ordre || 0) - (b.ordre || 0));
  const aoa = [COLS_EXPORT.map(c => c[1])];
  L.forEach(l => aoa.push(COLS_EXPORT.map(([k]) => k === "type" ? (typeDe(l) === "perso" ? "PERSONNALISÉ" : "STOCK") : k.startsWith("date_") ? (l[k] ? versDate(l[k]) : null) : l[k] ?? null)));
  const ws = XLSX.utils.aoa_to_sheet(aoa, { cellDates: true, dateNF: "dd/mm/yyyy" });
  ws["!cols"] = COLS_EXPORT.map(([k]) => ({ wch: { client: 26, produit: 28, perso: 30, adresse: 36, statut: 22, fournisseur: 24, notes: 30 }[k] || 13 }));
  const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "COMMANDES");
  XLSX.writeFile(wb, `zarahissi-commandes-${auj()}.xlsx`);
}

// ------------------------------------------------------------------ Fenêtre
function ouvrirFenetre(titre, corps, pied) {
  $("#fenetre").innerHTML = `<div class="tete"><h2>${titre}</h2><button class="btn petit" onclick="fermer()">✕</button></div><div class="corps">${corps}</div><div class="pied">${pied}</div>`;
  $("#voile").classList.add("ouvert");
}
function fermer() { $("#voile").classList.remove("ouvert"); }
$("#voile").addEventListener("mousedown", e => { if (e.target.id === "voile") fermer(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape") fermer();
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); aller("commandes"); setTimeout(() => $("#q")?.focus(), 0); }
});
$$("nav button").forEach(b => b.onclick = () => aller(b.dataset.vue));
charger();
rendre();
