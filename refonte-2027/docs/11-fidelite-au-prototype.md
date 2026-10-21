# Étape 11 · Ressembler au prototype dans Wix Studio

Le prototype (`prototype/zarahissi-prototype.html`) reste **la cible visuelle** de la version Studio. Ce document dit, élément par élément, ce que Studio reproduit à l'identique, ce qu'il approche et ce qu'il ne peut pas reproduire.

**Légende** : ✅ identique ou presque · 🟡 approchant (version Wix plus simple) · 🔧 possible avec du code, en phase 2 · ❌ différent (écran géré par Wix, habillé à tes couleurs).

Sources : aide officielle Wix (articles sur les conteneurs, masques d'image, effets d'en-tête, éléments épinglés, panier latéral, galeries de produits, fiche produit Studio).

## Accueil

| Élément du prototype | Dans Studio | |
|---|---|---|
| Couleurs, polices, boutons | Panneau *Site Styles* | ✅ |
| Bandeau d'annonce qui défile | Un bandeau fixe avec un seul message. La rotation demande du code. | 🟡 |
| En-tête fixe (logo, recherche, compte, favoris, panier) | Effet d'en-tête « Freeze » (reste visible) | ✅ |
| Logo qui rétrécit au défilement | Studio permet de figer, de faire disparaître ou de changer la couleur de l'en-tête, pas de rétrécir le logo | 🟡 |
| Menu ordinateur avec colonnes et visuel | Menus déroulants qui peuvent contenir images et boutons | ✅ |
| Menu mobile plein écran avec sous-niveaux | Menu hamburger avec sous-éléments | ✅ |
| Barre fixe en bas du mobile (5 icônes) | Élément épinglé en bas de l'écran. Les compteurs (panier, favoris) sont à tester. | 🟡 |
| Bannière en arche avec bijou et reflet | Masque d'image en forme d'arche, animations Studio. Le reflet est à approcher. | ✅ |
| Réassurance, Nos univers, À chacun son bijou | Conteneurs, images, boutons (il faut les photos) | ✅ |
| Grilles de produits (Nouveautés, Meilleures ventes, Îles, Bons plans) | Galerie de produits Wix liée à une collection | ✅ |
| Bouton « + » d'ajout rapide, 2ᵉ image au survol | Selon les options de la galerie | 🟡 |
| Îles avec drapeaux, carte Musique, bannière Fidelity, derniers articles du blog | Conteneurs, images, boutons, élément « articles récents » du blog | ✅ |
| Atelier « écris ton prénom » avec aperçu en direct | Bannière fixe qui renvoie vers les colliers personnalisés. L'aperçu demande du code. | 🔧 |
| Apparition douce des sections | Animations Studio | ✅ |

## Catégories et recherche

| Élément du prototype | Dans Studio | |
|---|---|---|
| Grille de produits, tri, filtres | Page de catégorie Wix : tri et filtres natifs, mise en forme différente du tiroir du prototype | 🟡 |
| Pastilles de sous-catégories | Boutons à construire | 🟡 |
| Recherche tolérante aux fautes avec suggestions | Recherche Wix, tolérance aux fautes à tester | 🟡 |
| Favoris | Greffon « Wishlist » de la fiche produit | ✅ |

## Fiche produit

| Élément du prototype | Dans Studio | |
|---|---|---|
| Galerie à balayer avec zoom, couleurs, emballage, mot doux | Fiche produit Studio (à vérifier sur un produit : sa compatibilité avec ton catalogue Wix V1) | ✅ |
| Champ de gravure obligatoire avec compteur | Champ texte de Wix Stores | ✅ |
| **Aperçu de gravure en direct** | Élément personnalisé ou code Wix | 🔧 |
| Bouton « Ajouter » fixe en bas sur mobile | Section épinglée en bas, à tester sur la fiche | 🟡 |
| Choix de la zone de livraison | Texte repliable avec les délais, sans sélecteur | 🟡 |
| Avis, produits associés | Greffons Wix | ✅ |

## Panier, commande, compte

| Élément du prototype | Dans Studio | |
|---|---|---|
| Panier en tiroir latéral | *Side Cart* de Wix | ✅ |
| Jauge « plus que X € pour la livraison offerte » | Message fixe dans le panier, ou code | 🔧 |
| Commande en 3 étapes au design du prototype | Page de commande Wix, aux couleurs et polices du site | ❌ |
| Compte client, suivi de commande, pages Fidélité | Pages Wix, aux couleurs et polices du site | ❌ |

## Ce qu'il faut retenir

- **Accueil, catégories, fiche produit** : l'apparence peut être très proche du prototype. Les éléments qui s'en écartent sont listés ci-dessus.
- **Commande, compte, suivi, Fidélité** : écrans de Wix. Ils seront habillés comme le site, sans reproduire la structure du prototype. C'est le prix de la sécurité et de la gestion par Wix.
- **Phase 2 (code)** : aperçu de gravure, jauge de livraison, message d'annonce qui défile.
- **Nouveautés Wix et catalogue V1** : certaines nouveautés Wix (nouvelle fiche produit, catégories actives) peuvent demander le nouveau catalogue. Ta boutique est en V1 : à vérifier à l'ouverture d'une fiche produit.

## Ressources prêtes à téléverser dans le Gestionnaire de médias Wix

- `studio-assets/drapeaux/` : les 6 drapeaux (Mayotte, Comores, Guadeloupe, Martinique, Madagascar, La Réunion) au format SVG.

## Ordre de travail pour coller au prototype

1. Couleurs et polices (panneau *Site Styles*).
2. En-tête, menu, bas de page (avec le prototype ouvert à côté).
3. Accueil, section par section, dans l'ordre du prototype.
4. Fiche produit : tester d'abord un produit gravé.
5. Catégories, pages d'infos, Fidélité, blog.
6. Phase 2 : le code.
