# Bonszahé : journal de passation

## Session du 1ᵉʳ nov. 2026 (après-midi) : campagne SEO du blog

> État au **1ᵉʳ novembre 2026, 16 h 50 (Mayotte)**. Aucun changement de code du site : tout est dans le CMS Wix et dans `docs/`. Branche de travail : `claude/relaxed-bohr-4i6f4v` (basée sur `claude/modest-clarke-d3ern5`, **non publiée** sur bonszahe.com).

**Décisions du propriétaire**
- Campagne uniquement sur le blog Bonszahé (collection `Articles`), **pas TRyholo** pour l'instant.
- 2 à 3 articles par semaine ; les 12 sujets proposés sont validés et doivent paraître **à la date prévue**.

**Publié dans le CMS (vérifié par relecture)**
- `PrixReglementes` : prix de novembre 2026 ajoutés (sans plomb 2,17 €, gazole 1,93 €, gaz 12 kg 27 €). Pétrole lampant et mélange : non trouvés, non ajoutés.
- Article « Vie chère » : paragraphe carburants passé aux prix de novembre, sources ajoutées.
- 11 articles programmés (`publie` coché, `datePublication` future = parution automatique ce jour-là) :
  2/11 carburants novembre · 4/11 Novembre Vert · 6/11 budget Noël · 9/11 billet avion Paris–Mayotte · 11/11 colis pour Noël · 13/11 bouclier qualité prix · 16/11 Black Friday vraie promo · 18/11 loi vie chère · 20/11 cadeaux made in Mayotte · 23/11 codes promo Black Friday · 25/11 marchés de Noël.
- Textes sources : `docs/articles/<slug>.html` (identiques au CMS, sauf le saut de ligne final). Couvertures : `site/images/blog/` et médiathèque Wix (`imageLien` = static.wixstatic.com).

**Tâches planifiées (dans cette conversation)**
- `trig_01Tr5PYiYWqBfefeqn5jV5Jg` (22/11) : remettre à jour la liste des codes de l'article du 23/11.
- `trig_018mEjAwN36SonXcE3BuVnib` (24/11) : compléter l'article marchés de Noël avec les dates confirmées.
- `trig_01VwYkqwTKW1UWtMZP2oMN4u` (30/11) : écrire et publier l'article n° 12 « carburants de décembre » (couverture déjà en ligne) et mettre à jour `PrixReglementes` et « Vie chère ».

**Ajouté en fin de journée**
- **Données structurées FAQ** (accord du propriétaire) : `faqOf()` / `faqLd()` dans `site/seo.js` déclarent la section « Questions fréquentes » de chaque article en `FAQPage`. Version `?v=51`, poussé sur `claude/modest-clarke-d3ern5` (commit 48c77e4). Testé avec node sur les 12 articles (2 à 4 questions chacun).
- **Incident copie Wix** : le « drop » avec seulement `seo.js` et `index.html` a **remplacé tout le site**. Copie restaurée (8 fichiers, empreintes identiques à GitHub) en important les fichiers dans la médiathèque depuis GitHub puis en les relisant par lien de téléchargement. Perdus : `carte.webp`, `icon.png`, `logo.webp` (absents de GitHub, non utilisés par le code). Règle ajoutée dans `CLAUDE.md` et `docs/memoire-projet.md` § 4. Fichiers temporaires `restauration-*` et `restauration-copie.svg` dans la médiathèque Wix : peuvent être supprimés.
- Tâche `trig_01VY55Y8PhnPChowGvhi3FT5` (2/11, 7 h 23 Mayotte) : vérifier la parution de l'article du jour sur bonszahe.com. **bonszahe.com est bloqué par le réseau de la session** : le propriétaire doit l'autoriser dans les réglages de l'environnement.

**Planning de décembre (validé, Miss France ajouté)**
- 9 articles enregistrés et programmés dans `Articles` (textes vérifiés par empreinte) : 7/12 repas de fête · 9/12 sorties vacances · 10/12 Miss France · 11/12 cadeaux dernière minute · 16/12 téléphone/tablette · 18/12 se déplacer · 21/12 nouvel an · 23/12 retours après Noël · 30/12 budget 2027.
- Écrits plus tard par tâche planifiée : Momojou (`trig_01PAoCBd8t4vv7qBDvBKqzmr`, 29/11 → parution 2/12), prime de Noël (`trig_012cM2mj8vFPmZxbeFqwm6Zs`, 3/12 → 4/12), soldes 2027 (`trig_01D9KSnmgQwLYubPNCezPXX7`, 26/12 → 28/12). Mises à jour Miss France (horaire TF1) et cadeaux dernière minute : `trig_01CXZ9TUqu3x6sUaX7eojDmD` (8/12). Carburants de décembre : `trig_01VwYkqwTKW1UWtMZP2oMN4u` (30/11).
- Pas d'article le 14/12 (anniversaire de Chido).
- Réseau : bonszahe.com et la1ere.franceinfo.fr sont maintenant autorisés (linfokwezi.fr toujours bloqué). Vérifié le 1/11 : seul « Vie chère » visible sur /blog, FAQPage présente, article du 2/11 en 404 (normal avant sa date).
- Méthode pour envoyer un texte au CMS sans le recopier : pousser le fichier, l'importer dans la médiathèque depuis raw.githubusercontent.com (`text/plain`), le relire via `generate-file-download-url`, vérifier l'empreinte.

**À faire / à décider**
- [ ] Article BQP : à mettre à jour quand la liste 2026 de la préfecture sera trouvée (seuls les chiffres 2024 sont publiés).
- [ ] Article « loi vie chère » : à mettre à jour à chaque étape du texte.
- [ ] Prix pétrole lampant et mélange de novembre à compléter.

**Pièges rencontrés**
- Réseau de la session : la1ere.franceinfo.fr, linfokwezi.fr, rmv.yt et bonszahe.com sont bloqués ; on ne lit que les extraits de recherche.
- Images : UploadImageToWixSite accepte des URL `raw.githubusercontent.com` d'une branche poussée (évite de pousser sur la branche en production).

---

## Session du 1ᵉʳ nov. 2026 : le blog

> État au **1ᵉʳ novembre 2026, 14 h 40 (Mayotte)**. Code en ligne : branche `claude/modest-clarke-d3ern5`, version des fichiers `?v=49`.
> Travail fait aussi sur `claude/trusting-ramanujan-hqrt0j` (même code + fichiers Zarahissi, à ne pas publier sur bonszahe.com).

**Publié et vérifié sur le vrai site** (bonszahe.com et copie Wix identique, empreintes vérifiées après publication) :
- Page **/blog** au modèle « Mosaïque + rayons par thème » choisi par le propriétaire (maquettes : https://claude.ai/artifact/LtaPhTsU45ToiyPcKgXkzv).
  Recherche instantanée, 6 thèmes (`BLOG_THEMES` dans `site/seo.js`), pages `/blog?theme=…`, page article `/blog/<slug>`. Lien « Blog » dans le menu et le pied de page. **Pas d'articles sur l'accueil** (demande du propriétaire).
- **Deux sources** : collection Wix **`Articles`** (créée ce jour, lecture publique, écriture administrateur) et **TRyholo (Holo AI)**, lu par `/api/holo-articles`.
  Le propriétaire doit encore indiquer `https://bonszahe.com/blog` comme « Blog page URL » dans TRyholo et cliquer « Connect ». Le script TRyholo est présent dans la page /blog pré-rendue (balise `<template id="holo-embed">`).
- **Premier article** (écrit par Claude) : « Vie chère à Mayotte : 10 réflexes pour payer moins cher au quotidien », thème Courses & prix, à la une.
  Chiffres : Insee Analyses Mayotte n° 34 (juillet 2023) et prix maximums des carburants du CMS. Texte d'origine : `docs/articles/`, visuels : `site/images/blog/` (logo officiel).
- Mode d'emploi : `docs/guide-blog.md`.

**Pièges rencontrés**
- Pour comparer la copie Wix et GitHub, compter les caractères **comme JavaScript** (un emoji = 2) : sinon `index.html` et `app-favorites-v2.js` semblent différents alors qu'ils sont identiques.
- Dans ExecuteWixAPI : `wix.unzip(reponse.data)`, puis `await entree.text()` ; `raw.githubusercontent.com` est refusé, on envoie donc le correctif `git diff -U0` compressé (gzip + base64, `DecompressionStream`).
- `_routes.json` exclut tous les `.json` des Functions Cloudflare : une adresse servie par `functions/` ne doit pas finir par `.json`.

**À faire**
- [ ] Connecter TRyholo : le site utilise la clé `2ff253da…` (fournie par le propriétaire le 1ᵉʳ nov.), puis vérifier qu'un article TRyholo apparaît sur /blog (délai : 10 minutes de cache).
- [ ] Mettre à jour l'article « Vie chère » quand les prix des carburants de novembre seront dans le CMS (les chiffres cités sont ceux de septembre et octobre).

---

## Session du 19 oct. au 1ᵉʳ nov. 2026

> À lire avant de reprendre le travail sur bonszahe.com. Complète `docs/contexte-projet-ia.md` (présentation générale du projet) et `README.md` (fonctionnement technique).
> État au **1ᵉʳ novembre 2026**. Code : branche `claude/modest-clarke-d3ern5`, dernier commit « Page Événements : frise horizontale des prochaines semaines », version des fichiers `?v=48`.

---

### 1. Où on en est, en bref

| Sujet | État |
|---|---|
| Site bonszahe.com (Cloudflare) | À jour, version `?v=48` |
| Copie de secours Wix | **Identique à bonszahe.com** (vérifiée le 1ᵉʳ nov. après publication) |
| Offres sans code | En ligne sur toutes les fiches entreprises |
| Page Événements | Nouvelle présentation en ligne (À l'affiche + calendrier + frise + mosaïque) |
| Événements dans le CMS | 22, tous publiés, du 6 nov. au 6 déc. 2026 |
| Horaires et positions GPS | 51 fiches complétées depuis Google Maps |
| Recherche automatique d'événements | Active, tous les 5 jours (prochaine : 6 nov.) |
| Résumé quotidien des visites | Actif, chaque matin vers 6 h 52 (heure de Mayotte) |
| Outil de suivi de prospection | En ligne : https://claude.ai/artifact/UMQMsenfnSs4x4JsZuZovF |

---

### 2. Décisions prises

### Offres sans code
- Les **offres sans code public** (remise en magasin, offre de bienvenue, soldes sans code…) ont **leur propre bloc**, « Offres sans code [entreprise] », **juste sous les codes promo**, sur **toutes** les fiches. Elles ne vont **jamais dans la description** de l'entreprise.
- Sans offre, le bloc affiche un encadré vide et le bouton **« + Proposer une offre »**, sur le même modèle que « Proposer un code promo ». Un second bouton, « Proposer une offre sans code », est dans la colonne de droite.
- **Expiration** : une offre datée disparaît le lendemain de sa date de fin. Une offre **sans date** affiche « Pas de date de fin annoncée : signalez-la si elle n'est plus valable ».
- **Signalement** : réservé aux membres connectés. L'offre est masquée après **2 signalements** de membres différents, ou **1 seul** s'il vient de l'entreprise qui gère la fiche ou du propriétaire du site. Les signalements vont dans la collection `Signalements`, champ `offre`.
- **Compteur** : les cartes entreprises affichent le **nombre total de bons plans**, codes promo **et** offres sans code, sans distinction (par exemple « 2 bons plans disponibles »). Une entreprise sans rien affiche « Aucun bon plan pour le moment ». Le filtre « Avec bons plans en cours », le tri, la carte des magasins et « Vous aimerez aussi » comptent aussi les offres sans code.

### Page Événements
- Présentation retenue : l'**idée 3**, avec un bandeau « À l'affiche » pour le prochain événement et un compte à rebours (J-6, Demain, En cours), un **calendrier du mois** avec des points sous les jours qui ont des événements, et une **mosaïque** des événements du mois ou du jour choisi.
- Une **frise horizontale** a été ajoutée par-dessus (**variante A**) : une ligne qui défile au doigt, avec des cartes alternées au-dessus et au-dessous de la ligne. Elle se place sous le bandeau et le calendrier, et la mosaïque est conservée.
- Les étiquettes (Sortie, Sport, Nature, Santé, Shopping & fête, Atelier) sont **déduites du titre** de l'événement. Le badge « Gratuit » apparaît quand la description contient « gratuit ».
- Le bouton « Ajouter à mon agenda » télécharge un fichier `.ics` (événement d'une journée entière).

### Contenu
- **Ne jamais inventer** d'information d'entreprise ou d'événement : ce qui est inconnu reste vide ou porte la mention « à confirmer ».
- Événements du 1ᵉʳ novembre (forum des associations de M'tsangamouji, marche Octobre rose) : **non publiés**, à la demande du propriétaire.
- Commémoration du cyclone Chido (14 déc.) : non publiée. C'est un moment de mémoire, pas une animation.
- La copie Wix doit **toujours être identique** à bonszahe.com. Le propriétaire a validé l'écrasement des modifications faites directement sur Wix par une autre session (voir piège n° 3).

---

### 3. Ce qui est publié

**Code (bonszahe.com + copie Wix)**
1. Bloc « Offres sans code » sur toutes les fiches, signalement, formulaire « Proposer » avec un type « Offre sans code » (date facultative).
2. Compteur de bons plans qui additionne codes et offres sans code.
3. Nouvelle page Événements : À l'affiche, calendrier, mosaïque, fenêtre de détail, export agenda `.ics`.
4. Frise horizontale des prochaines semaines.

**Données (CMS Wix)**
- `Entreprises` : horaires et/ou positions GPS ajoutés pour 51 fiches (source : Google Maps). Seuls les champs vides ont été remplis.
- `Evenements` : 5 événements ajoutés (Donneries, Journées propreté, « Les Contes de ma grand-mère », « Océan Indien », soirées danse de Chirongui). 3 fiches complétées : horaire de la marche verte, lieu des 5 km de Koungou, lien de Momojou, qui pointait vers une adresse `dev.` du Journal de Mayotte.

**Tâches automatiques (tâches planifiées Claude)**
- `trig_01DHEMxv4sutBpyvT12uhGVb` : « Événements Mayotte à valider ». Elle cherche les événements les jours 1, 6, 11, 16, 21, 26 et 31 du mois à 7 h 23, heure de Mayotte, et répond **dans cette conversation**. Elle **ne publie rien** : le propriétaire répond avec les numéros à garder, puis on les ajoute au CMS.
- `trig_01TXZNHyQn5SbnUvExGpGwWE` : résumé quotidien des visites et des nouveautés.

---

### 4. Ce qui n'est pas publié ou reste à faire

**À faire / à décider par le propriétaire**
- [ ] **Mentions légales** : ajouter l'**adresse postale** et le **statut juridique** de l'éditeur (`EDITEUR` dans `site/app-favorites-v2.js`).
- [ ] **Oishii** : marqué « définitivement fermé » sur Google. Faut-il dépublier la fiche ?
- [ ] **Maji Mewou** : Google indique Combani (Tsingoni), la fiche indique Sada. Adresse à confirmer.
- [ ] **Chaînes à plusieurs magasins** (Sodifram, Somaco, Mr Bricolage, Carrefour) : seul le magasin principal est sur la carte.
- [ ] **Fiches sans horaires ni position fiables** : Mayotte Évasion, CataMayotte, JSOI Distribution, Samcom, La Mahoraise, Simex, Waterland, Zé Loc, Maoré Discount, Lagon Aventure (position douteuse).
- [ ] **Événements « à vérifier »** de la recherche du 1ᵉʳ nov. : Majik'Volley (collège de Majicavo, 11 nov., une seule source), report éventuel de la marche Mwendro Wa Tama au 2 nov.
- [ ] Recherche des **réseaux sociaux** des nouvelles entreprises du suivi de prospection : proposée, pas encore demandée.

**À tester en conditions réelles**
- [ ] **Publier une offre sans code sans date de fin** via le formulaire, puis vérifier qu'elle apparaît bien (voir piège n° 4).
- [ ] **« Ajouter à mon agenda » sur iPhone** : certains iPhone gèrent mal le téléchargement d'un fichier `.ics`.

**Non retenu**
- Les variantes de frise B (verticale par semaine) et C (ruban des 30 jours) : maquettes seulement, code supprimé.
- Le travail d'une autre session sur l'observatoire des prix (fourchette de prix « De … à … », champ `prixMax`) n'existait **que** sur la copie Wix et a été écrasé lors de la remise à l'identique. **Il n'est pas sur GitHub** et serait à refaire si on le veut.

---

### 5. Pièges à connaître

### 1. Publier = deux endroits, dans cet ordre
1. **bonszahe.com** : `git push` sur la branche `claude/modest-clarke-d3ern5`. Cloudflare Pages met en ligne automatiquement.
2. **Copie de secours Wix** (site `32761e4f-414e-47d0-9089-2d5676be0455`) : à republier **après chaque modification de code**, avec les **mêmes fichiers** (`index.html`, `app-favorites-v2.js`, `styles-favorites-v2.css`, `seo.js`). Une modification qui ne touche que le CMS ou `docs/` ne demande pas de republier.
3. **Monter la version** `?v=NN` dans `site/index.html` à chaque changement de JS ou de CSS, sinon les visiteurs gardent l'ancienne version en cache.

### 2. Méthode sûre pour republier la copie Wix
- Télécharger la copie actuelle : `GET https://www.wix.com/_api/wixstro-deployments/v1/instant-sites/{siteId}/download.zip`, portée **account**.
- Appliquer le correctif (diff `git diff -U0`) **et vérifier une empreinte** (longueur + hash) du fichier **avant** et **après** : si la copie Wix ne correspond pas à la version GitHub attendue, **ne rien publier**.
- Publier : `POST https://www.wixapis.com/headless-business-setup/v1/headless-business/{siteId}/drop` (multipart, portée **account**), puis retélécharger et revérifier les empreintes.
- **Envoyer le correctif encodé en base64** : le transport des fichiers a déjà déformé des séquences comme `̀` (dans `seo.js`), ce qui casse le résultat. Avec la vérification d'empreinte, rien n'est publié en cas d'erreur.

### 3. D'autres sessions peuvent modifier la copie Wix directement
Le 31 octobre, une autre session avait publié sa propre version (bloc « Offres sans code », fourchettes de prix) **sur Wix uniquement**, sans passer par GitHub. Avant de republier, **comparer** la copie Wix à GitHub. En cas d'écart, **prévenir le propriétaire** avant d'écraser quoi que ce soit.

### 4. Automatisation Wix des propositions
- Les codes et offres proposés par les membres vont dans `PropositionsCodes`, avec le statut « En attente ». Une **automatisation côté Wix** les copie dans `CodesPromo` (le champ `typeOffre` est bien recopié) et passe la proposition à « Traité ». Le site annonce « publié dans quelques secondes ».
- Valeurs de `typeOffre` : `code`, `magasin` (offre en magasin) ou `offre` (offre sans code). Le site n'affiche dans le bloc « Offres sans code » que les lignes `typeOffre = offre` **sans code**, avec le statut « Validé ».
- **Non vérifié** : une proposition **sans date d'expiration** (possible pour une offre sans code) est-elle bien recopiée par l'automatisation ? Deux propositions étaient restées « En attente » le 31 octobre.
- Les catalogues suivent le même principe : `CataloguesProposes` → automatisation → `Catalogues`, avec « Publié » décoché.

### 5. Permissions du CMS
- `Evenements` : seul **l'administrateur** peut écrire. Le site ne peut pas publier un événement lui-même : on passe par l'API Wix depuis Claude (ou par le tableau de bord Wix).
- `Signalements` : les membres peuvent écrire ; les champs `commentaire` ou `offre` indiquent ce qui est signalé.

### 6. Formats attendus par le site
- **Horaires** (`Entreprises.horaires`) : par exemple `Lun-Ven 8h-12h et 14h-17h · Sam 8h-12h`. Ils sont lus par `parseHours()` à l'heure de Mayotte (UTC+3). Un texte illisible n'affiche rien, et la page Contrôle liste ces fiches.
- **Position** (`Entreprises.position`) : `"latitude, longitude"`, par exemple `"-12.7750698, 45.2248092"`.
- **Dates d'événement** : `AAAA-MM-JJ` (`date`, `dateFin`).

### 7. Accès réseau des sessions Claude
- **Bloqués** dans cette session : `lejournaldemayotte.yt` (on ne lit que les extraits de recherche), bonszahe.com en `curl`, et les sites d'entreprises.
- **Gmail** : l'outil Gmail **abîme les brouillons** (images supprimées, liens réécrits). Ne pas l'utiliser pour modifier les brouillons de prospection.

---

### 6. Fichiers utiles

| Fichier | Rôle |
|---|---|
| `site/app-favorites-v2.js` | Tout le site : offres sans code (`OFFRES`, `offerCard`), événements (`pageEvents`, `evHero`, `evCalendar`, `evTimelineA`), compteur (`dealsCount`) |
| `site/styles-favorites-v2.css` | Styles (`.offer`, `.evhero`, `.evcal`, `.evbento`, `.tla-…`) |
| `site/index.html` | Numéro de version `?v=NN` |
| `docs/contexte-projet-ia.md` | Présentation du projet pour une IA |
| `README.md` | Fonctionnement technique et double publication |
