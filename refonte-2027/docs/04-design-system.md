# Étapes 4 et 5 · Design system et animations « Lagon chic »

Les valeurs exactes sont dans `prototype/src/tokens.css`.

## Couleurs (celles du site actuel, hiérarchisées)

| Rôle | Nom | HEX | Usage |
|---|---|---|---|
| Principale | Marine | `#1B2A41` | Texte, boutons, logo, en-tête mobile |
| Fond | Ivoire | `#FBF8F1` | Fond de page |
| Surface | Crème | `#F6F1E4` | Sections alternées, encarts |
| Accent doux | Sable | `#E9E0B8` | Pastilles, boutons sur fond marine, emplacement saisonnier |
| Accent secondaire | Ardoise | `#7896A6` · texte : `#4F6D7D` | Accroches, liens |
| Élégance | Or couronne | `#C4A15A` · texte : `#8C6B2A` | Filets, étoiles, couronne (décor) |
| Promo | Terracotta | `#A0442E` | Bons plans, prix promo (avec parcimonie) |
| Texte secondaire | Gris encre | `#4E596B` | Descriptions, aides |

**Contrastes WCAG AA vérifiés** : marine sur ivoire 13:1 · gris encre sur ivoire 7:1 · ardoise foncée sur ivoire 5,3:1 · terracotta sur ivoire 6,5:1 · sable sur marine 10:1. L'or clair et l'ardoise clair servent **uniquement de décor**, jamais pour du texte sur fond clair.

## Typographies (2 familles)

- **Titres** : Cormorant Garamond 600, de 34 px (mobile) à 56 px (ordinateur). Elle fait écho au logo.
- **Texte** : DM Sans 400, 500 et 700, **16 px minimum** sur mobile.
- **Aperçu de gravure uniquement** : Great Vibes (police « Script » des colliers prénom).

## Formes

- **L'arche** (`999px 999px 6px 6px`) est la signature de la direction. Elle sert pour la bannière, les univers, la page « Notre histoire » et le méga-menu.
- Rayons très faibles partout ailleurs (2 à 4 px), pour un rendu bijouterie.
- Un trait doré de 36 px sous chaque titre de section.

## Composants

Bouton principal, secondaire et sable · carte produit (badges, favori, ajout rapide) · badges (Personnalisable, Nouveau, −X %, Petit prix) · pastilles · champ et champ en erreur · cartes radio (livraison, paiement) · tiroirs (menu, panier, filtres) · accordéons · jauge du panier · notifications · avis · étapes de commande.

**Accessibilité** : zones tactiles de 44 px minimum ; navigation au clavier (Échap ferme les tiroirs, flèches dans les suggestions) ; ARIA sur les menus, tiroirs, filtres et étapes ; lien d'évitement vers le contenu.

## Animations (étape 5)

| Animation | Durée |
|---|---|
| Apparition des sections et cartes au défilement (fondu et légère montée, en décalé) | 600 ms |
| Survol d'une carte sur ordinateur : zoom de l'image et bascule vers l'autre couleur de métal | 600 ms |
| Ajout au panier : l'icône du panier rebondit, puis une notification apparaît | 600 ms |
| Favori : le cœur « pop » | 600 ms |
| Bannière : reflet qui balaie le bijou, bijou qui flotte doucement | en boucle lente |
| Bandeau d'annonce : messages qui se relaient | 600 ms |
| Menu, panier et filtres : glissement | 350 ms |
| En-tête qui se réduit au défilement | 350 ms |
| Squelettes de chargement des catégories | — |

Toutes passent par CSS (aucune librairie) et sont **désactivées si le téléphone demande moins d'animations** (`prefers-reduced-motion`).
