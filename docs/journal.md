# Bonszahé : journal de passation

## Session du 17 nov. 2026 : accueil et page Prix

> Code en ligne : commit `8a66fbb`, version `?v=55`. Copie Wix identique (empreintes vérifiées avant et après). Maquettes validées : https://claude.ai/artifact/Q3JUR4fnjta9giSwWeyvbB

**Publié et vérifié sur bonszahe.com :**
- Accueil : bandeau de 5 raccourcis (Prix, Catalogues, Événements, Demandes, Récompenses) juste après « Bientôt : … » (choix B du propriétaire). Les rubriques du bas restent.
- Page Prix refaite (mélange comparateur + panier malin + communauté) : recherche, 8 boutons enseignes, catégories, cartes produits avec prix au kilo/litre/pièce, fiche produit (classement des magasins, écart en %, « Tous formats au kilo »), panier malin (gardé dans le navigateur, `bonszahe:panier`), missions de la semaine, derniers prix, top du mois (si 2 contributeurs ou plus), carburants.
- CMS : `ProduitsSuivis` + champs `quantite`, `unite` (kg/L/pièce), `image` (photo modifiable par le propriétaire ; sinon illustration emoji). `MagasinsPrix` + `enseigne`, `vedette` (bouton), `ordre`. Enseignes en boutons : Carrefour, Intermarché Baobab, Sodifram, HD Hyper Discount, Sodicash, Douka Bé (Mamoudzou), Somaco, Distrimax (Kawéni + Combani ajoutés). Shopi et SNIE sans bouton. « Baobab Cavani » renommé « Intermarché Baobab », « Douka Bé » → « Douka Bé Mamoudzou ».
- Nettoyage : relevés « Couches/Savon/Lessive — de x à y € » rattachés à Couches / Savon / Lessive ; les 3 anciens produits sont masqués (`actif` = faux), rien supprimé.

**À faire / à décider :**
- « Farine (à l'unité) » et « Lait (à l'unité) » : format inconnu, à confirmer avant de les rattacher à Farine 1 kg / Lait UHT 1 L.
- Étape 2 : photo d'étiquette envoyée par les membres, demande d'ajout de produit par les membres.
- Relever les prix dans les 8 enseignes (seul Intermarché Baobab a des prix, 31 oct.).

## Session du 2 nov. 2026 : offres sans code comme les codes promo

> Code en ligne : branche `claude/modest-clarke-d3ern5`, commit `02d833e`, version `?v=52`. Copie Wix identique (empreintes vérifiées avant et après).
> Sauvegarde : la version précédente (commit `af1417c`, `?v=51`) était identique sur GitHub et sur Wix ; on peut y revenir à tout moment.

**Publié et vérifié** (validé par le propriétaire après maquette et captures du vrai site) :
- Les offres sans code (`typeOffre = offre`) entrent dans `baseCodes` (champ `c.offre`) : **même carte que les codes** (`coupon()`), Moro/Maji, « Fonctionne / Ne fonctionne plus », commentaires, page `/bon-plan/<id>`, Tendances, onglet Codes promo, points.
- Zone du code : « ✓ Sans code » + « Profiter en boutique » (fenêtre « Montrez cet écran en caisse ») sauf si l'entreprise vend seulement en ligne, + « Voir l'offre » s'il y a un lien.
- Toujours dans le bloc « Offres sans code » de la fiche. Le champ `detail` n'est **pas** affiché pour les offres (il contient parfois des notes internes).
- **Bouton « Signaler cette offre » supprimé** : même règle que les codes (masquée après 3 « ne fonctionne plus » et plus de non que de oui). `OFFRES`, `offerCard`, `reportOfferDialog` n'existent plus.
- Codes promo : filtre **Tous / Codes promo / En magasin / Sans code** en haut (remplace le menu « Type d'offre »), lien direct `#/codes?type=offre`.
- `seo.js` : les offres sans code ont leur pré-rendu (« Offre sans code … Aucun code à saisir »).

- **3 nov. (v=53)** : nouveau champ CMS `CodesPromo.ouProfiter` (« Où profiter de l'offre » : `boutique` / `en-ligne` / `les-deux`). Il choisit les boutons d'une offre sans code ; vide = règle d'avant (selon le type de vente de la fiche et la présence d'un lien). Non demandé dans le formulaire des membres.
- **3 nov., CMS** : Zarahissi : offre Black Friday « 1 acheté = 1 offert » (jusqu'au 23/11/2026, `ouProfiter = en-ligne`) et horaires `Lun-Sam 8h30-18h30 · Dim 8h30-12h`. La fiche garde son type de vente vide (magasin physique : elle reste sur la carte).

- **7 nov. (v=54)** : accueil « N bons plans en cours, N entreprises » (au lieu de « codes actifs »), et description Google des fiches « N bons plans [entreprise] en ce moment ». Règle : le total codes + offres sans code s'appelle « bons plans ».

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

## 14 nov. 2026 : ajout de CasaPro et correction des horaires

- **CasaPro** ajoutée dans `Entreprises` (slug `casapro`, catégorie Maison, Mamoudzou, boutique + vente en ligne) :
  - logo transmis par le propriétaire, envoyé dans la médiathèque Wix ;
  - horaires et position issus de la fiche Google (même adresse et même téléphone) ;
  - description tirée de casapro.yt (luminaires, outillage, électricité & sécurité, particuliers et pros, devis sur demande, parking gratuit).
- **15 fiches** avaient le champ `horaires` enregistré sous la forme `{ stringValue: "…" }` au lieu d'un texte. Leurs horaires ne s'affichaient donc pas. Le texte a été réenregistré à l'identique. Fiches concernées : somay, ballou, maycig, cazdeco, zazaland, foulera, mbadzio, cjumo, bebe-wangou, meubles-et-deco, mzuri-sana, jeleo-boutique, sunday-officiel, maktaba-may-islam, parapharmacie-tsoundzou.
- **Piège** : lors d'une mise à jour par lot (`bulk/items/patch`), passer la valeur **directement** (`setFieldOptions: { value: "texte" }`), jamais sous la forme `{ stringValue: … }`.
- Aucun changement de code : rien à republier.

## 14-15 nov. 2026 : Biona Services et AfroHairVibe
- **Biona Services** (`biona-services`, Services, Dzaoudzi/Labattoir) : fiche + logo, pas de position (aucune fiche Google trouvée). Message TikTok fourni.
- **AfroHairVibe** (`afrohairvibe`, Beauté, Dzaoudzi/Labattoir, boutique + en ligne) : fiche, logo PNG vérifié (14 623 octets), horaires et position Google (-12.7838197, 45.2796557).
  - Offre sans code « -5 % sur votre 1re commande » (inscription newsletter) dans `CodesPromo`. Message Instagram fourni.
- ⚠️ Piège : dans `CodesPromo`, le champ `entreprise` doit contenir l'**identifiant (_id)** de la fiche, pas le slug, sinon l'offre ne s'affiche pas.
- **15 nov.** : e-mail de présentation envoyé depuis contact@bonszahe.com (boîte bonszahe976@gmail.com) à CasaPro, Biona Services et AfroHairVibe. Il demande une offre et la revendication de la fiche, avec le guide « Bonszahé en 2 minutes » (`docs/guide-court.pdf`) en pièce jointe. Relance possible vers le 22 nov. (modèle dans `kit-commercant/messages.md` § 3).

## 17 nov. 2026 (suite) : page Prix, étape 2 (v=56)
- **Publié et vérifié** sur bonszahe.com (script v=56) et sur la copie Wix (empreintes app 3b1f463399e410d9, index 6f5314fa902cf6b3, css 12dc5181f71de7bf, seo inchangé 479c6893acd7b976).
- « Signaler un prix » : on peut joindre une **photo de l'étiquette ou du ticket**. Elle est réduite avant l'envoi, puis enregistrée dans le champ `photo` (texte) de **RelevesPrix**. Un bouton « 📷 Voir la photo » s'affiche dans la fiche produit et dans le fil.
- « Demander un produit » : un bandeau sur la page Prix, et le même bouton quand une recherche ne donne rien. Les demandes vont dans la nouvelle collection **DemandesProduits** (nom, format, categorie, magasin, commentaire, pseudo, statut). Les membres peuvent ajouter, tout le monde peut lire, seul l'admin peut modifier ou supprimer.
- Page Contrôle (admin) : deux nouvelles rubriques, « Prix avec photo à valider » (boutons Valider / Masquer) et « Produits demandés par les membres ».
- Il faut être connecté pour signaler un prix ou demander un produit. Hors connexion, le site affiche l'écran de connexion (vérifié en ligne).
- À faire : faire un vrai test, en étant connecté, avec une photo prise au téléphone, puis valider ce test dans Contrôle.
- Point de vigilance : une image de test « test-bonszahe.jpg » (8×8 pixels) est restée dans le Gestionnaire de médias Wix. Said peut la supprimer.

## 17 nov. 2026 (soir) : correction du classement sur mobile (v=57)
- Problème signalé par Said, vidéo à l'appui : sur mobile, le classement « Ça chauffe » de l'accueil s'affichait en une seule ligne horizontale, et la page entière se décalait sur le côté.
- Cause : la page Prix (v=55) avait réutilisé deux noms de classe déjà pris :
  - `.podium`, utilisé par le classement de l'accueil ;
  - `.seg`, utilisé par les onglets (Connexion, Tendances, Demandes, Catalogues, statistiques pro).
- Correction : le podium des relevés de prix s'appelle maintenant `.relpodium`, et le sélecteur « Ce format / Tous formats » `.fmtseg`. Les onglets du site retrouvent leur ancien aspect.
- Publié et vérifié sur bonszahe.com (v=57, classement en grille) et sur la copie Wix (empreintes app 53df999281531815, index f7d8e8805565524a, css 5dcffa8ba64ebc71).
- **Règle :** avant d'ajouter une classe CSS, vérifier qu'elle n'existe pas déjà dans `styles-favorites-v2.css` et `app-favorites-v2.js`.

## 21 nov. 2026 : événements
- **21 nov.** : 14 événements ajoutés dans `Evenements` (21 nov. → 5 déc.), vérifiés sur bonszahe.com/evenements. La recherche automatique (`trig_01DHEMxv4sutBpyvT12uhGVb`) lit désormais en priorité **mayotte-agenda.yt** (pages /agenda puis fiches) et **sortiramayotte.fr** (JSON-LD de l'accueil, heures en UTC +3). L'accès réseau à tous les domaines est ouvert.

## 21 nov. 2026 : page Prix, prix des sites de courses en ligne (v=58)
- **Publié et vérifié** sur bonszahe.com et sur la copie Wix (script v=58). Choix validé par le propriétaire : mélange « interrupteur + logos cliquables », sans panier type pour l'instant.
- Page Prix : interrupteur « 🏪 En rayon / 🛒 En ligne ».
  - En rayon : rien ne change, les prix en ligne sont exclus (panier malin, missions, fil, top du mois, comparaisons).
  - En ligne : logos des sites avec chariot et badge, bouton « Tous les sites » ; un clic sur un logo affiche le bandeau du site (délai, livraison, zones, « Commander sur le site ») et filtre les produits ; chaque carte montre prix au kilo, prix du paquet, livraison, stock (si connu) et date du relevé. Les sites « Pros » ne sont jamais « le moins cher » (affichés en petit sous la carte).
  - Fiche produit en ligne : tous les sites avec « Voir sur le site ↗ ».
- CMS :
  - `MagasinsPrix` : 7 sites ajoutés (MaoréShop, Chronocourse, C'jumo, Bazar Dagoni, Douka Magic, Somaco Online, Mayotte Tropic) avec les nouveaux champs `enLigne` (oui), `siteWeb`, `delai`, `livraison`, `zones`, `badge` (« Pros », « Rappel », « Place de marché »). Champ vide = « à confirmer » sur le site.
  - `RelevesPrix` : nouveaux champs facultatifs `lien` (page du produit) et `stock` (« en stock » / « rupture »). Un prix en ligne = un relevé dont le `magasin` est le nom exact du site.
  - 5 premiers prix (21/11) : Riz 5 kg MaoréShop 7,80 € ; Riz thaï jasmin 20 kg MaoréShop 34,60 € ; Huile de tournesol 3 L MaoréShop 8,80 € ; Mabawa 10 kg Chronocourse 31,60 € ; Mabawa 10 kg Mayotte Tropic 23,50 € (pros). Stock non renseigné.
- Le formulaire « Signaler un prix » des membres ne propose pas les sites en ligne (prix ajoutés par l'administrateur).
- ⚠️ **Copie Wix ≠ GitHub** : la copie Wix contient un « lecteur de catalogue » (`catalogue-reader.js`, `catalogue-reader.css`, et leurs lignes dans `index.html`) ajouté par une autre session, **absent de GitHub**. Il a été conservé : seuls les `?v=57` ont été passés à 58 dans l'`index.html` de Wix. À rapatrier sur GitHub si on veut garder ce lecteur.
- Empreintes (FNV maison, script dans la session) : app ed6451690225e378, css 1a94632a7726557f, seo inchangé.
- À faire :
  - Vérifier et ajouter les prix à confirmer : MaoréShop lait / sucre / farine / mabawa ; Chronocourse riz parfumé 20 kg (« à partir de 31,99 € ») ; huile 5 L (format absent des produits).
  - Compléter délais / livraison / zones de Bazar Dagoni, Douka Magic, Somaco Online, Chronocourse (frais).
  - Plus tard : panier type « riz + mabawa » quand il y aura assez de prix (maquette : https://claude.ai/artifact/D2Yz5yCKSTqtKAcKXjS39N).
