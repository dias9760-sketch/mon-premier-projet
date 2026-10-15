# Étape 3 · Prototype cliquable et passage sur Wix Studio

## Ouvrir le prototype

- **Fichier unique** : `prototype/zarahissi-prototype.html`. Ouvre-le dans un navigateur, sur téléphone ou sur ordinateur. Il fonctionne hors ligne, sauf les polices, qui viennent de Google Fonts.
- **Sources commentées** : `prototype/src/` (`tokens.css`, `app.css`, `data.js`, `art.js`, `app.js`, `index.html`).
- **Reconstruire après une modification** : `node prototype/build.mjs`.

> Les produits, les prix, les avis et les **tarifs de livraison sont fictifs**. Les illustrations remplacent les photos, et le paiement est simulé : aucune commande réelle n'est passée.

## Ce qui fonctionne réellement

| Fonction | Détail |
|---|---|
| Menu mobile | Burger plein écran, accordéon sur 2 niveaux, blocs Aide et Zarahissi & Vous, bouton WhatsApp |
| Barre du bas (mobile) | Accueil · Catégories · Recherche · Favoris · Panier, avec compteurs |
| Méga-menu (ordinateur) | 3 colonnes de liens et un visuel ; l'en-tête se réduit au défilement |
| Recherche | Suggestions instantanées, **tolérance aux fautes** (« colier mayote » trouve le collier Mayotte), recherche par prix (« moins de 10 € »), par île, par occasion |
| Catégories | Grille de 2 colonnes (mobile), 3 (tablette) ou 4 (ordinateur) ; filtres en tiroir (prix, métal, pour qui, personnalisable, nouveautés, promo) ; tri ; pastilles de sous-catégories ; squelettes de chargement |
| Fiche produit | Galerie à balayer avec zoom ; **aperçu de gravure en direct** (texte, police, métal) ; 2 prénoms pour les modèles couple ; taille de bague obligatoire ; montant de la carte cadeau ; formulaire de la musique personnalisée ; délais selon la zone ; bouton « Ajouter » fixe en bas |
| Panier | Tiroir latéral, quantités, suppression avec « Annuler », **jauge** livraison offerte dès 40 € puis −5 € dès 70 € et −10 € dès 100 €, **remises appliquées automatiquement** |
| Commande | 3 étapes : zone et mode de livraison (livreur 48 h et retrait gratuit seulement à Mayotte), coordonnées (adresse masquée en cas de retrait), paiement (CB, PayPal, espèces seulement en cas de retrait) |
| Compte | Suivi de commande (avec lien La Poste), Fidelity et parrainage |
| Infos | Livraison, Paiement, FAQ (recherche et onglets), Notre histoire, Contact, Guide des tailles, Fidelity, Ambassadeur, Blog |
| Favoris | Gardés sur l'appareil |

**Parcours en 3 actions sur mobile** : 1. toucher une carte produit · 2. écrire le prénom · 3. « Ajouter au panier ». Pour un produit non personnalisable, le bouton « + » de la carte l'ajoute en une seule action.

Testé automatiquement à 360, 390, 768, 1024 et 1440 px : aucune erreur, aucun défilement horizontal, et les parcours achat, panier, commande et recherche fonctionnent.

## Passage sur Wix Studio (sans toucher au site actuel)

**Principe : on crée un NOUVEAU site Wix Studio à côté du site actuel.** Le site actuel reste en ligne et intact. Le nom de domaine zarahissi.com ne passe sur le nouveau site qu'au jour de la bascule (voir `06-transition-et-recommandations.md`).

| Prototype | Dans Wix Studio |
|---|---|
| `tokens.css` (couleurs, polices) | **Site Styles** › Couleurs du thème et Typographie : reporter les codes HEX et les 2 polices (Cormorant Garamond et DM Sans, disponibles dans Wix) |
| En-tête, bandeau, barre du bas | En-tête global « Sticky » ; bandeau en texte défilant ; sur la version mobile, une bande **épinglée en bas** (Pin to screen) avec 5 boutons |
| Menu et méga-menu | **Menus** › menu principal avec sous-menus en *Mega menu* (conteneurs) ; menu mobile « Plein écran » |
| `data.js` › PRODUITS | **Wix Stores** › Produits. `cat` = catégorie principale ; `pour`, `collection`, `occasions` et `express` = catégories secondaires. Un produit peut être dans plusieurs catégories, il n'est **jamais dupliqué**. |
| Option « Métal », « Taille », « Montant » | Options produit (choix) dans Wix Stores |
| Texte à graver | **Champ personnalisé** du produit (« Ajouter un champ personnalisé »), limité au nombre de caractères |
| **Aperçu en direct** | Wix Stores ne le fait pas nativement. Deux options : **Velo** (code Wix, en reprenant `art.js` et l'écouteur `input`), ou une application de personnalisation du Wix App Market. Recommandé : Velo, plus léger et sans abonnement. |
| Filtres et tri | Page catégorie Wix Stores : filtres natifs (prix, options) |
| Recherche | **Wix Site Search**, avec synonymes à ajouter (colier → collier, braclet → bracelet, mahorais → Mayotte) |
| Jauge et remises automatiques | **Marketing** › Remises automatiques : « −5 € dès 70 € », « −10 € dès 100 € » ; **Livraison** › règle « gratuite dès 40 € ». La jauge du panier se fait en Velo ou avec une application. |
| Zones et modes de livraison | **Paramètres** › Livraison et retrait : régions Mayotte, La Réunion, France métropolitaine, Guadeloupe, Martinique ; « Livraison locale » (livreur) et « Retrait » (Kavani) **seulement pour Mayotte** |
| Paiement | **Paramètres** › Paiements : carte (via le fournisseur actuel, SumUp ou Wix Payments), PayPal, et **paiement manuel** « Espèces en boutique » (à limiter au retrait) |
| Compte et suivi | **Wix Members** (Espace membres) et Mes commandes |
| Fidelity et parrainage | **Wix Loyalty Program** et Programme de parrainage |
| Blog, FAQ | Wix Blog et Wix FAQ (contenus à réimporter depuis le site actuel) |
| Avis | Wix Reviews (avis produits vérifiés) |
| Animations | Animations natives de Wix Studio (apparition au défilement, survol), sobres, de 200 à 600 ms |
