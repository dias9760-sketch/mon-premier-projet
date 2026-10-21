# Étape 10 · Reconstruire le site sur une version Wix Studio

Méthode retenue : **créer une version Studio du site actuel** (fonction Wix « Créer une version sur Studio »). Elle remplace la piste « site sur mesure » des documents 07 à 09, gardés comme référence.

Sources : aide officielle Wix, articles *Creating a Studio Version of a Wix Editor Site* et *About Studio Branches* (mis à jour le 15 octobre 2026).

> **Cible visuelle : le prototype.** Voir [11-fidelite-au-prototype.md](11-fidelite-au-prototype.md) pour ce que Studio reproduit à l'identique, ce qu'il approche et ce qu'il ne peut pas reproduire.

## 1. Pourquoi cette méthode

- Même tableau de bord, mêmes produits, commandes, clientes et points de fidélité : **rien à migrer**.
- Le site actuel reste en ligne pendant tout le travail, sans interruption.
- Boutique, paiement, compte client, suivi de commande, Fidélité et blog restent gérés par Wix.
- Tu modifies toi-même le site, sans développeur.
- **Tant que la version n'est pas publiée, on peut la supprimer** : le site revient alors à son état actuel.

## 2. Prérequis

| Point | État |
|---|---|
| Forfait Premium sur le site actuel | ✅ confirmé |
| Applications utilisées : Boutique, Programme de fidélité, Blog | ✅ aucune n'est dans la liste des applications non compatibles |
| Groupes | ignoré (inutilisé) |
| Compte sur la plateforme Wix Studio | ⏳ à vérifier : sans lui, « Créer une version sur Studio » n'apparaît pas. Sinon : wix.com/studio › *Start creating* › *Try Wix Studio*. D'après Wix, tes sites existants ne sont pas migrés. |
| Autres applications installées | ✅ vérifié le 21 octobre 2026 dans ton compte (lecture seule) : Promote SEO, Blog, Bookings, **Wix Chat** (la bulle bleue), Forms, Forms & Payments, Gift Cards, Groups, Hotels, Invoices, Members Area, Pay Links, Stores. Aucune n'est dans la liste des applications non compatibles. Le programme de fidélité n'apparaît pas dans cette liste : à confirmer dans *My Business* de la version Studio. |

## 3. Étape A · Créer la version (sans la publier)

1. Wix › **Mes sites** (manage.wix.com/account/sites).
2. Sur la ligne de Zarahissi, icône **Actions du site** (trois points).
3. **Créer une version sur Studio** puis **Créer la version Studio**.
4. Ouvrir la version : tableau de bord › **Site et appli mobile** › **Site web** › **Modifier** à côté de « Wix studio version ».
5. Laisser les applications s'installer, puis **Get Started**. Si une application manque : *My Business* › onglet de l'application › **Add to Branch**.

## 4. Règles de prudence pendant la construction

- **Ne pas cliquer sur Publier avant le jour J.**
- **Les données sont partagées avec le site public** : toute modification de produit, de prix, de collection ou de remise dans le tableau de bord touche aussi le site actuel. On ne renomme et on ne supprime aucune collection.
- **Les commandes de test sont de vraies commandes** dans ton tableau de bord. Utiliser un produit test, puis annuler.
- Les messages reçus par les anciens formulaires Wix ne sont pas transférés : les exporter avant le jour J.

## 5. Étape B · Les fondations (panneau « Site Styles »)

Dans l'éditeur Studio, **Site Styles** est dans la barre de gauche. Il contient les onglets *Colors*, *Typography*, *Max width* et *Page transitions*. Changer une couleur ou une police modifie instantanément tous les éléments qui l'utilisent : on commence donc par là.

**Couleurs** (onglet *Colors* › cliquer sur une couleur › saisir le code HEX › *Apply*). Les six premières couleurs ont un rôle fixe ; selon le modèle, leur nom peut différer (par exemple « Primary background »), suis l'ordre :

| Couleur Wix | Rôle d'après l'aide Wix | Valeur Zarahissi |
|---|---|---|
| Color 1 | Fond principal des éléments et des applications (par exemple l'en-tête) | `#FBF8F1` ivoire |
| Color 2 | Fond secondaire | `#F6F1E4` crème |
| Color 3 | Éléments désactivés | `#D6CBAE` |
| Color 4 | Texte secondaire | `#4E596B` gris encre |
| Color 5 | Texte principal | `#1B2A41` marine |
| Color 6 | Liens et boutons | `#1B2A41` marine |

Couleurs à ajouter ensuite (25 au maximum) : sable `#E9E0B8`, or `#C4A15A`, ardoise `#7896A6`, ardoise foncée `#4F6D7D`, terracotta `#A0442E`, or foncé `#7E5F24`, marine foncé `#111C2E`.

**Polices** (onglet *Typography* › section *Fonts* › cliquer sur une police › choisir dans la liste › *Update*). Remplacer la police des titres par **Cormorant Garamond** et celle du texte par **DM Sans**. Les styles de texte (Heading 1 à 6, Paragraph 1 à 3) suivent automatiquement. Si une police manque, choisir la plus proche.

**Boutons** : marine, coins presque droits, texte en gras.

**Mobile d'abord** : régler d'abord l'affichage mobile (icône téléphone en haut de l'éditeur), puis ajuster tablette et ordinateur.

## 6. Étape C · Les pages (par ordre de priorité)

| # | Page | À construire | Données |
|---|---|---|---|
| 1 | **En-tête et menu** | Logo, recherche, panier, compte. Menu de 7 entrées plus l'entrée saisonnière, comme dans `docs/02-arborescence.md`. Sur mobile : menu burger. | Menus Wix |
| 2 | **Accueil** | Dans l'ordre : bannière · réassurance (livraison, personnalisés, retrait gratuit, paiement sécurisé) · Nos univers · Nouveautés · **À chacun son bijou** (Femme, Homme, Couple, Enfants) · Meilleures ventes · **Bijoux inspirés de nos îles** (6 drapeaux) · **carte Musique** · Bons plans · **bannière Fidelity** · derniers articles du blog | Collections Wix |
| 3 | **Pages catégories** | Une grille de produits par entrée du menu. **« Carte cadeau »** : lien vers la page de l'application Wix Gift Cards (installée), pas vers une collection. Le lien entre menu et collections existantes est déjà fait dans `site/src/config.js`. | Collections Wix |
| 4 | **Fiche produit** | Nouvelle fiche produit Studio (réservée à Studio). **Vérifier sur un produit gravé** que le champ de gravure, la couleur, l'emballage cadeau (+3 €) et le mot doux s'affichent et sont obligatoires comme sur le site actuel. | Produits Wix |
| 5 | **Panier et paiement** | Natifs Wix : vérifier livraison à Mayotte (livreur, retrait), moyens de paiement et espèces au retrait. | Wix |
| 6 | **Compte, suivi, Fidélité** | Espace membres, mes commandes, pages *Loyalty Program* et *My Rewards*. D'après l'aide Wix, ces pages se personnalisent dans Studio. | Wix |
| 7 | **Blog** | Reprendre le style du nouveau site. | Blog Wix |
| 8 | **Pages d'infos** | Livraison, paiement, FAQ, guide des tailles, contact, notre histoire, CGV, mentions légales. Les textes sont dans `site/src/app.js`, rubrique `INFOS`. | Textes |

**Textes à ne pas écrire à Mayotte** : ne pas mentionner que les bijoux sont « faits » ou « préparés » à Mayotte. Seule la boutique de Kavani est citée, pour le retrait gratuit.

## 7. SEO : à faire avant de publier

- Lister les pages actuelles (tableau de bord › SEO › plan du site).
- Donner aux nouvelles pages **les mêmes titres, les mêmes textes et les mêmes entrées de menu**. Wix indique que les adresses des pages sont alignées automatiquement.
- Dans le doute, ne pas supprimer de page ancienne.

## 8. Options avancées (phase 2)

À étudier une fois le site de base en place, si le code Wix (Velo) est disponible dans ton éditeur :

- aperçu de la gravure en direct ;
- recherche qui tolère les fautes ;
- prix de départ de la carte Musique mis à jour automatiquement.

## 9. Tests avant publication

- Aperçu sur iPhone et Android, en 4G.
- Un produit gravé : champ obligatoire, couleur, emballage, mot doux, ajout au panier.
- Commande test en retrait boutique, puis annulée.
- Fidélité : un compte test gagne bien ses points.
- Recherche, filtres, favoris, blog, pages d'infos.

## 10. Jour J

1. **Dupliquer le site actuel** : tableau de bord › Accueil › Actions du site › **Dupliquer le site**. C'est une sauvegarde de l'ancien design (site indépendant, sans les données).
2. Publier : Wix Studio › **Edit Site** › version Studio › **Publish**. Si le forfait Studio manque : **Continue** › **Change Plan & Publish Site**. Regarder le prix affiché avant de confirmer.
3. Wix met automatiquement l'ancien site hors ligne. **On ne peut plus le republier.**
4. Vérifier le site en ligne sur mobile : accueil, un produit, panier, paiement.
5. Créer les remises automatiques qui remplacent LIVGRA, MOINS5 et MOINS10 (elles touchent aussi l'ancien site, donc à faire seulement maintenant).
6. Annoncer le nouveau site (textes du document 06).
7. Ménage : supprimer le client « Zarahissi 2027 » dans *Headless Settings* et le site de test GitHub Pages.

## 11. Ce qu'on garde de notre travail

- Le design : couleurs, polices, sections de l'accueil, menu.
- Les textes et les pages d'infos.
- Le lien entre menu et collections (`site/src/config.js`).
- Le prototype et le site de test, comme références visuelles.
