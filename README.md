# ZARAHISSI — suivi des commandes

Trois solutions pour gagner du temps sur le suivi des commandes personnalisées.

| | Solution | Pour qui / quand |
|---|---|---|
| 1 | **Nouveau tableau Excel** (`excel/`) | Vous voulez garder Excel, avec vos couleurs, mais sans la double saisie ni les fautes de frappe. |
| 2 | **Plateforme interne hors ligne** (`plateforme/ZARAHISSI-Commandes.html`) | Un vrai logiciel de commandes sur votre MacBook, sans internet, sans abonnement. |
| ★ | **Version simple** (`simple/ZARAHISSI-Simple.html`) | Le plus simple : une seule page « À faire », gravure par les fournisseurs, délais 15-35 j / 5 j. |
| 3 | **Mode atelier « zéro erreur » + messages clients** (onglet *Atelier* de la plateforme) | Supprimer les erreurs de gravure et prévenir les clients en un clic (WhatsApp / SMS). |

---

## 1. Le nouveau tableau Excel

Fichier généré : `Commandes_2026_ZARAHISSI.xlsx` (il contient vos données clients, il n'est donc **pas** stocké dans ce dépôt).

Ce qui change :
- **Les onglets par mois sont conservés** (JAN 2026 … DEC 2026, mois à venir déjà prêts). Mêmes colonnes A → Q, mêmes couleurs (blocs bleus client et commande, adresse en vert, couleurs des statuts identiques). Les totaux du mois sont à droite (colonnes X-Y).
- **Onglet `SUIVI`** : il rassemble tout seul les commandes en cours de **tous** les mois (A COMMANDER, EN PRODUCTION, EN ATTENTE D'ENVOI…), de la plus ancienne à la plus récente. En haut, le nombre par statut et le nombre en retard. Le lien « → ouvrir » emmène sur la bonne ligne du bon mois pour changer le statut ; une commande expédiée ou finalisée sort du suivi automatiquement.
- **Listes déroulantes** sur CONTACT, PAIEMENT, Emballage, Couleur, STATUT, RÉCUPÉRATION (et suggestions sur PRODUIT).
- **Colonnes calculées** : MARGE, JOURS EN COURS, ALERTE « ⚠ RETARD ».
- **Onglet `TABLEAU DE BORD`** : CA, achats, marge, ventes site web / sur place lus dans chaque onglet mensuel, plus la répartition par statut, réseau, paiement, récupération et catégorie de produit.
- Repères visuels : adresse manquante en orange, NON PAYE en rouge.

Régénérer le fichier depuis l'ancien classeur :

```bash
cd excel
python3 construire_excel.py "Commande VENTE 2026.xlsx" Commandes_2026_ZARAHISSI.xlsx
```

## 2. La plateforme hors ligne (MacBook)

1. Copiez `plateforme/ZARAHISSI-Commandes.html` où vous voulez (Documents, iCloud Drive…).
2. Double-cliquez dessus : la page s'ouvre dans Safari ou Chrome, **sans internet**.
3. Allez dans **Données → Importer depuis Excel** et choisissez votre fichier actuel (ancien ou nouveau format).

Fonctions :
- **Tableau de bord** : CA et marge du mois, évolution, commandes à traiter, retards, graphique sur 12 mois, CA par réseau et par paiement.
- **Commandes** : recherche instantanée (client, n°, téléphone, personnalisation…), filtres, fiche commande avec plusieurs articles.
- **Suivi** : tableau en colonnes par statut, à faire glisser d'une colonne à l'autre ; les dates de production et d'envoi se remplissent toutes seules.
- **Données** : export Excel, sauvegarde ou restauration complète (.json). Avec Chrome, **sauvegarde automatique** dans un fichier sur le Mac.
- Raccourcis : `⌘K` pour rechercher, `⌘⇧N` pour créer une nouvelle commande, `Échap` pour fermer.

> Les données restent dans le navigateur du Mac. Faites une sauvegarde régulièrement (un bandeau vous le rappelle) : vider les données du navigateur efface la plateforme.

Code source : `plateforme/src/` (HTML, CSS, JS). Pour reconstruire le fichier unique : `python3 plateforme/construire.py`.
Bibliothèque intégrée : SheetJS 0.18.5 (lecture et écriture Excel, licence Apache 2.0, voir `src/vendor/`).

## 3. Mode atelier « zéro erreur »

Votre fichier a un statut « ERREUR ÉCRITURE » : une gravure ratée, c'est une pièce perdue et un client déçu. L'onglet **Atelier** s'attaque à ce problème.
- **Contrôle des gravures** : le texte s'affiche en très grand, avec les espaces rendus visibles et les caractères ambigus surlignés (0/O, 1/l/I). Des alertes signalent les doubles espaces, les emojis, les accents, les majuscules bizarres et les textes trop longs.
- **Validation par le client avant gravure** : un clic prépare le message WhatsApp avec le texte exact à valider (« Répondez OK »). Le numéro est converti tout seul (+262 Mayotte et Réunion, +590, +596, +594, +33).
- **Fiche atelier imprimable** : toutes les pièces à produire, regroupées par produit et par couleur, avec une case à cocher.
- **Étiquettes d'envoi imprimables** pour les colis prêts, et un bouton « tout marquer envoyé » qui choisit le bon statut (FR, YT, RE…) selon la destination.
- **Messages clients prêts à l'emploi** (en production, prête, expédiée, demande d'avis), modifiables dans *Modèles de messages*.

## Version simple (recommandée) : `simple/ZARAHISSI-Simple.html`

Un seul fichier, sans internet, pensé pour une boutique **sans atelier** : la gravure est faite par les fournisseurs.

- **À faire** : tout le travail du jour, en 3 listes et un bouton par étape.
  - 🛒 **À commander au fournisseur** : cochez les articles, choisissez le fournisseur, « Copier la liste » (texte prêt à envoyer avec les textes à graver), puis « Marquer commandé ».
  - ⏳ **Chez le fournisseur** : « Reçu » quand le colis arrive, « Erreur » si la gravure est fausse (l'article repasse à commander, l'erreur est notée pour ce fournisseur).
  - 📦 **À envoyer / à remettre** : « Envoyé » (le statut FR / YT / RE… est choisi selon la livraison) ou « Remis au client » pour un retrait en boutique. « Rupture » renvoie un produit en stock vers la liste « À commander ».
- **Délais** (modifiables dans *Fichier & réglages*) :
  - produit **personnalisé** : prêt **15 à 35 jours** après le paiement, et en retard après 35 jours ; à commander au fournisseur dans les 2 jours ;
  - produit **en stock** (montres, collier Mayotte, drapeaux…) : **envoi sous 5 jours** ;
  - produit en stock mais en **rupture** : même délai que chez le fournisseur.
- Le type (personnalisé ou stock) est deviné tout seul : un texte à graver signifie « personnalisé ». Vous pouvez le changer d'un clic.
- **Message WhatsApp** au client (💬) : confirmation avec la date prévue, retard, colis reçu, commande prête, commande expédiée.
- **Fournisseurs** : ce qui est en cours chez chacun, leur délai moyen réel, leurs erreurs, et un message de relance tout prêt.
- **Commandes** : recherche instantanée et fiche commande. **Fichier** : import de votre Excel, export Excel (avec les colonnes fournisseur), sauvegarde.

Reconstruire le fichier : `python3 simple/construire.py`.
