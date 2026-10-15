# Étape 2 · Arborescence et navigation

Direction retenue : **A · Lagon chic**. Plateforme : **Wix** (site actuel conservé).

## 1. Le menu actuel (relevé sur mobile)

| Niveau 1 | Contenu |
|---|---|
| Accueil | |
| 🌙 Offres Ramadan | Saisonnier |
| Produits personnalisés | Gravure express · Meilleures ventes · Enfant (collier, bracelet) · Colliers (femme, homme, couple) · Bracelets (homme, femme, couple) · Bagues (homme, femme, couple) · Boucles d'oreilles · Bracelets de cheville · Porte-clés |
| Bijoux & Accessoires | Collection Ylang Ylang · Calendrier de l'avent · Bijoux des îles (Mayotte, Réunion, Comores, Madagascar, Martinique, Guadeloupe) · Bijoux religion islam · Colliers · Bracelets · Bagues · Colliers & bracelets amitié · Colliers & bracelets couples · Boucles d'oreilles · Lunettes · Accessoires cheveux |
| Musique | |
| Montres | Homme · Femme · Enfants · Connectées · Toutes nos montres |
| High-Tech | Coque iPhone · Accessoires téléphones |
| Bons plans | |
| Lampes | |
| Divers | *(contenu à confirmer)* |
| Zarahissi & Vous | *(contenu à confirmer)* |
| À propos de nous | *(contenu à confirmer)* |
| Contact | |

**Constats**
- **14 entrées de niveau 1 et jusqu'à 3 niveaux** : sur mobile, il faut faire défiler 4 écrans pour tout voir.
- **« Bijoux » et « Accessoires » sont mélangés** : les lunettes sont rangées au même niveau que les colliers, et « Bijoux des îles » est enfoui au 3ᵉ niveau alors que c'est l'image de marque de la page d'accueil.
- **Trois rubriques isolées** (Musique, Lampes, Divers) et une incohérence : « Salouva » apparaît sur ordinateur mais pas sur mobile.
- **Pas d'entrée « Nouveautés » ni « Idées cadeaux »**, alors que l'Aïd, Noël et le calendrier de l'avent sont des temps forts.
- **Les produits couple sont en double** : « Couple » existe à la fois dans Personnalisés et dans Bijoux.
- **Les emojis dans le menu** rendent l'ensemble moins haut de gamme.

## 2. Le nouveau menu (7 entrées + 1 emplacement saisonnier)

Principe : les **noms connus des fidèles sont conservés** (Produits personnalisés, Montres, Bons plans, Bijoux des îles, Gravure express, Ylang Ylang).

```
[Saisonnier] Offres Ramadan / Fête des mères / Noël…   ← 1 seule entrée, mise en couleur, changée selon la saison
1. Nouveautés
2. Personnalisés
   ├─ Par bijou   : Colliers · Bracelets · Bagues · Boucles d'oreilles · Bracelets de cheville · Porte-clés
   ├─ Pour qui    : Femme · Homme · Couple · Enfant
   └─ À la une    : ⚡ Gravure express (bandeau visuel) · Meilleures ventes
3. Bijoux
   ├─ Par bijou   : Colliers · Bracelets · Bagues · Boucles d'oreilles
   ├─ Collections : Ylang Ylang · Bijoux des îles (Mayotte, Réunion, Comores, Madagascar, Martinique, Guadeloupe) · Bijoux spirituels
   └─ À partager  : Amitié · Couples
4. Montres
   └─ Homme · Femme · Enfant · Connectées · Toutes nos montres
5. Accessoires
   ├─ Mode        : Accessoires cheveux · Lunettes · Salouva
   ├─ High-Tech   : Coques iPhone · Accessoires téléphone
   └─ Maison      : Lampes · Musique · (Divers, réparti ici)
6. Idées cadeaux
   ├─ Par occasion : Ramadan & Aïd · Fête des mères · Saint-Valentin · Anniversaire · Naissance · Noël (+ Calendrier de l'avent)
   ├─ Par budget   : Moins de 10 € · Moins de 20 € · Moins de 30 €
   └─ Pour qui     : Elle · Lui · Enfant · Couple
7. Bons plans    ← mis en valeur (couleur terracotta), reprend la signature « Bons plans à petit prix »
```

**Les pages d'information sortent du menu principal** et passent dans l'en-tête (icône compte), le pied de page et le menu burger mobile, sous un bloc « Infos » :
Livraison & délais · Suivi de commande · Zarahissi & Vous (Ambassadeur, avis) · À propos · Contact & WhatsApp.

> « Couple » n'existe plus qu'à un endroit par logique : les bijoux *gravés* sont dans Personnalisés, les bijoux *assortis* non gravés dans Bijoux › À partager. Les deux pages renvoient l'une vers l'autre.

## 3. Navigation mobile

- **En-tête compact** : menu burger · logo · panier. La recherche est toujours visible juste dessous.
- **Pastilles de raccourcis** défilantes sous la recherche : Nouveautés · Personnalisés · Bijoux des îles · Bons plans · Montres.
- **Burger plein écran** : 7 entrées en accordéon sur **2 niveaux maximum**, avec une vignette photo par entrée, puis le bloc « Infos » et un gros bouton WhatsApp en bas.
- **Barre fixe en bas** : Accueil · Catégories · Recherche · Favoris · Panier.
- **Filtres en tiroir** : prix, couleur du métal, pour qui, personnalisable oui/non.

## 4. Navigation ordinateur

- **En-tête fixe** qui se réduit au défilement (le logo passe de 34 à 24 px).
- **Méga-menu** pour Personnalisés, Bijoux, Accessoires et Idées cadeaux : 3 colonnes de liens et 1 visuel produit.
- **Fil d'Ariane** sur les pages catégorie et produit.

## 5. Ce que ça implique sur Wix

| Besoin | Sur Wix |
|---|---|
| Méga-menu | Natif sur **Wix Studio** ; sur **Wix Editor** classique, il faut le simuler avec un menu « boîte extensible » (hover box) ou une app. ➜ *À vérifier : quelle version utilises-tu ?* |
| Barre fixe en bas sur mobile | Une bande fixée (« Pin to screen ») dans l'éditeur mobile, avec 5 boutons-icônes. |
| Filtres et tri | Natifs dans les pages catégorie de Wix Stores (prix, options) ; à compléter avec les **catégories** (Pour qui, Personnalisable). |
| Personnalisation avec aperçu en direct | Les « champs personnalisés » de Wix Stores ne font pas d'aperçu. L'aperçu demande soit **Velo (code Wix)**, soit une app spécialisée du Wix App Market. Je le prépare en Velo dans le prototype. |
| Redirections | Tableau de bord › SEO › **Gestionnaire de redirections d'URL** (301). |

## 6. Ne pas perdre les fidèles : table de correspondance

Les pages Wix **gardent leur URL** tant qu'on ne les renomme pas. On réorganise donc surtout le **menu**, pas les pages. Seules les pages fusionnées ou renommées ont besoin d'une redirection 301 :

| Page actuelle | Devient | Redirection 301 |
|---|---|---|
| Produits personnalisés (et sous-pages) | Personnalisés › mêmes pages | Non, URL conservées |
| Bijoux & Accessoires › Colliers / Bracelets / Bagues / Boucles d'oreilles | Bijoux › idem | Non |
| Bijoux & Accessoires › Lunettes, Accessoires cheveux | Accessoires › Mode | Non (seul le menu change) |
| Bijoux religion islam | Bijoux › Bijoux spirituels | Uniquement si tu renommes l'URL |
| Colliers & Bracelets Couples (non gravés) | Bijoux › À partager › Couples | Non |
| High-Tech, Lampes, Musique | Accessoires › High-Tech / Maison | Non |
| Divers | Réparti dans Accessoires | **Oui** → Accessoires |
| Calendrier de l'avent | Idées cadeaux › Noël | Non (page conservée, saisonnière) |
| Offres Ramadan | Emplacement saisonnier | Après la saison : **Oui** → Idées cadeaux |

Les URL exactes seront relevées dans la table de redirections quand j'aurai la liste des pages (Wix › Pages et menu).

## 7. Questions ouvertes

1. Que contiennent **Divers**, **Musique**, **Lampes**, **Salouva** et **Zarahissi & Vous** ?
2. **Wix Editor ou Wix Studio** ?
3. **Moyens de paiement** proposés (CB, PayPal, paiement en plusieurs fois, paiement à la livraison ou retrait sur place à Mayotte…) ?
4. **Tarifs et délais** par zone (Mayotte, Réunion, France métropolitaine, autres DOM-TOM) et seuil de livraison offerte (le site semble indiquer « dès 40 € ») ?
