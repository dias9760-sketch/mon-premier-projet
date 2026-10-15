# Prompt — Refonte du site Zarahissi pour 2027

> Copie tout le bloc ci-dessous et colle-le dans ton outil d'IA (Claude, etc.).
> Les passages entre `[crochets]` sont à compléter si tu as l'information. Sinon, l'IA doit te poser la question.

---

## RÔLE

Tu es directeur artistique et développeur front-end senior, spécialisé en e-commerce mode et bijoux, mobile-first. Tu réunis le regard d'un designer de marque (élégance, cohérence), l'esprit d'un expert UX/UI (parcours client fluide, conversion) et la rigueur d'un intégrateur (code propre, responsive, performant, accessible).

## CONTEXTE DE L'ENTREPRISE

- **Marque** : Zarahissi, site actuel www.zarahissi.com
- **Activité** : vente de bijoux et d'accessoires, de **bijoux personnalisés** (prénoms, initiales, gravures…) et d'autres articles, **à petit prix**.
- **Origine** : entreprise basée à **Mayotte** (976).
- **Livraison** : Mayotte, La Réunion, France métropolitaine et les autres DOM-TOM.
- **Trafic** : la **grande majorité des visiteurs arrive sur mobile**.
- **Clientèle** : une base de **clients fidèles** qui connaissent déjà le site et ne doivent pas être perdus.

## OBJECTIF

Proposer une refonte du site pour 2027 :
1. **Plus élégante et plus premium**, sans perdre le positionnement « petit prix » ni l'**identité Zarahissi**.
2. **On garde les couleurs actuelles du site** : on les affine et on les hiérarchise, sans les remplacer.
3. Une **expérience client fluide et cohérente**, des **menus clairs** et une **meilleure organisation** du catalogue.
4. Un **site fictif utilisable** (prototype cliquable) pour me montrer concrètement le résultat.
5. Une version **mobile et ordinateur parfaitement responsive**, pensée d'abord pour le mobile.
6. Des **animations modernes et légères**, attrayantes mais jamais surchargées.

## ÉTAPE 0 — ANALYSE DE L'EXISTANT (avant toute création)

- Analyse www.zarahissi.com : logo, **palette de couleurs (codes HEX)**, typographies, ton des textes, menu, catégories, pages clés (accueil, catégorie, fiche produit, panier, personnalisation, contact, livraison).
- Si tu ne peux pas accéder au site, **demande-moi** les couleurs, le logo et la liste des catégories avant de continuer. Couleurs actuelles : `[à compléter, ex. #XXXXXX / #XXXXXX / #XXXXXX]`.
- Livre un **court diagnostic** : 5 points forts à conserver, 5 irritants à corriger (navigation, lisibilité, lenteur, tunnel d'achat…).

## ÉTAPE 1 — PROPOSITIONS VISUELLES (images avant le site final)

Avant de coder, **génère des images de maquettes** pour que je puisse choisir une direction :
- **2 ou 3 directions artistiques**, toutes basées sur les couleurs actuelles. Par exemple :
  - **A. « Lagon chic »** : épuré, beaucoup de blanc et de respiration, accents dorés, inspiration lagon de Mayotte.
  - **B. « Écrin moderne »** : fonds plus profonds, rendu bijouterie premium, mise en valeur des photos produits.
  - **C. « Solaire & joyeux »** : plus coloré et chaleureux, proche de l'énergie actuelle de la marque, en plus raffiné.
- Pour chaque direction : **maquette de la page d'accueil sur mobile** et **sur ordinateur**, une planche de **palette et typographies**, et un exemple de **fiche produit**.
- Explique en quelques lignes ce qui distingue chaque direction, puis **attends mon choix** (ou propose ta recommandation) avant l'étape 2.

## ÉTAPE 2 — ARCHITECTURE ET NAVIGATION

Propose une arborescence claire, par exemple (à adapter au catalogue réel) :

- **Nouveautés**
- **Bijoux** → Colliers · Bracelets · Boucles d'oreilles · Bagues · Chevilles · Parures
- **Personnalisés** → Prénom · Initiales · Gravure · Photo · Idées cadeaux personnalisées
- **Accessoires** → [cheveux, sacs, montres, etc. selon le catalogue]
- **Petits prix** (ex. moins de 10 €, moins de 20 €)
- **Idées cadeaux** (anniversaire, fête des mères, mariage, Aïd, Noël…)
- **Livraison & infos** (zones, délais, tarifs, suivi de commande)

Règles de navigation :
- **Ne pas perdre les fidèles** : conserver les noms de catégories connus quand c'est possible, garder les **mêmes URL** ou prévoir des **redirections 301**, garder le logo et les couleurs, et pourquoi pas un bandeau discret « Notre site fait peau neuve ✨ ».
- **Mobile** : menu burger plein écran avec catégories en accordéon, **barre de navigation fixe en bas** (Accueil · Catégories · Recherche · Favoris · Panier), recherche toujours accessible.
- **Ordinateur** : méga-menu avec visuels, en-tête fixe qui se réduit au défilement.
- **Recherche intelligente** : suggestions instantanées, tolérance aux fautes de frappe, recherche par prix et par type.
- **Filtres** simples sur mobile (tiroir du bas) : prix, couleur, matière, personnalisable oui/non.
- Fil d'Ariane sur ordinateur.

## ÉTAPE 3 — PAGES À CONCEVOIR (prototype fonctionnel)

1. **Accueil** : bannière principale (photo ou courte vidéo bijoux), bandeau de réassurance (livraison Mayotte, Réunion, France et DOM-TOM ; paiement sécurisé ; petits prix), catégories en cartes visuelles, nouveautés, **mise en avant des bijoux personnalisés**, meilleures ventes, avis clients, section « Fabriqué avec amour depuis Mayotte » (histoire de la marque), aperçu Instagram/TikTok, inscription newsletter.
2. **Page catégorie** : grille de 2 colonnes sur mobile et 4 sur ordinateur, filtres et tri, badges (Nouveau, Personnalisable, Petit prix), ajout rapide au panier.
3. **Fiche produit** : galerie qui se balaie au doigt avec zoom, prix bien visible, **configurateur de personnalisation avec aperçu en direct** (texte, police, couleur de métal), options, bouton « Ajouter au panier » **fixe en bas sur mobile**, onglet livraison selon la zone, avis, produits associés.
4. **Panier** : tiroir latéral, jauge « plus que X € pour la livraison offerte » (si applicable), modification facile.
5. **Commande** (maquette) : en peu d'étapes, **choix de la zone de livraison (Mayotte / La Réunion / France métropolitaine / autres DOM-TOM)** avec délais et tarifs, plus les moyens de paiement `[à compléter]`.
6. **Livraison & FAQ**, **À propos**, **Contact** (avec bouton WhatsApp, très utilisé dans les DOM), **Mon compte / suivi de commande**.

## ÉTAPE 4 — DESIGN SYSTEM

- **Couleurs** : palette actuelle de Zarahissi, avec une couleur principale, une couleur d'accent, des neutres (blanc cassé, gris doux) et éventuellement une touche dorée pour l'élégance. Fournir les variables CSS.
- **Typographies** : un titre élégant (serif ou serif moderne, par exemple Playfair Display, Cormorant ou Fraunces) et un texte très lisible (Inter, Manrope ou DM Sans). Pas plus de deux polices.
- Composants réutilisables : boutons, cartes produit, badges, champs de formulaire, avis, toasts.
- Contrastes conformes **WCAG AA**, zones tactiles d'au moins **44 px**, texte d'au moins 16 px sur mobile.

## ÉTAPE 5 — ANIMATIONS (modernes mais sobres)

- Apparition douce des sections au défilement (fondu et légère montée).
- Léger zoom ou changement d'image au survol des produits (ordinateur).
- Micro-interactions : ajout au panier (petite animation de l'icône), cœur des favoris, boutons.
- Défilement fluide des carrousels, avec squelettes de chargement.
- Bannière d'accueil : léger parallaxe ou effet « brillance » sur un bijou.
- **Contraintes** : durées entre 200 et 600 ms, animations CSS ou petite librairie légère, **respect de `prefers-reduced-motion`**, aucune animation qui bloque la lecture ou ralentit le mobile.

## ÉTAPE 6 — EXIGENCES TECHNIQUES

- **Mobile-first**, testé à 360 px, 390 px, 768 px, 1024 px et 1440 px. Aucun défilement horizontal.
- **Performance** : images optimisées (WebP/AVIF, chargement différé), score Lighthouse mobile visé ≥ 90, page d'accueil visible en moins de 2,5 s.
- **SEO** : balises title et meta, données structurées Produit, URL propres, textes alternatifs des images, mots-clés locaux (« bijoux Mayotte », « bijoux personnalisés Réunion », « livraison DOM-TOM »).
- **Accessibilité** : navigation au clavier, ARIA sur les menus et tiroirs, contrastes AA.
- Pour le prototype : **HTML, CSS et JavaScript** (ou React), avec **des produits fictifs mais réalistes** (noms, prix en €, photos de démonstration ou générées). Le panier, les filtres, la recherche et la personnalisation doivent **réellement fonctionner** en local.
- Code organisé et commenté pour qu'il soit facile à reprendre ensuite sur [Shopify / WooCommerce / Wix / autre plateforme actuelle : à compléter].

## TON ET CONTENU

- Ton chaleureux, féminin, proche et fier de ses racines mahoraises, élégant sans être froid.
- Textes courts et clairs. Mettre en avant : **petits prix, personnalisation, livraison partout en Outre-mer et en France**.
- Bandeau de réassurance : « Livraison Mayotte · Réunion · France · DOM-TOM », « Bijoux personnalisés », « Paiement sécurisé », « Service client réactif ».

## LIVRABLES ATTENDUS (dans l'ordre)

1. Diagnostic du site actuel (court).
2. **Images de maquettes** : 2 ou 3 directions artistiques, sur mobile et sur ordinateur. **Pause pour validation.**
3. Arborescence et plan de navigation.
4. Design system (couleurs, typographies, composants).
5. **Prototype fictif cliquable et responsive** de toutes les pages listées.
6. Plan de transition pour les clients fidèles (redirections, communication, bandeau d'annonce, e-mail ou post Instagram pour annoncer le nouveau site).
7. Liste de recommandations pour la suite (programme fidélité, avis clients, bouton WhatsApp, paiement en plusieurs fois, etc.).

## CRITÈRES DE RÉUSSITE

- Un client fidèle reconnaît **immédiatement** Zarahissi (logo, couleurs, ton).
- Sur mobile, on trouve un produit et on l'ajoute au panier **en 3 actions maximum**.
- Le site paraît **plus haut de gamme** tout en affichant clairement les **petits prix**.
- Les animations rendent le site vivant **sans le ralentir ni le surcharger**.
