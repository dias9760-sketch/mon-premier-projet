# ZARAHISSI — suivi des commandes

Trois solutions pour gagner du temps sur le suivi des commandes personnalisées.

| | Solution | Pour qui / quand |
|---|---|---|
| 1 | **Nouveau tableau Excel** (`excel/`) | Vous voulez garder Excel, avec vos couleurs, mais sans la double saisie ni les fautes de frappe. |
| 2 | **Plateforme interne hors ligne** (`plateforme/ZARAHISSI-Commandes.html`) | Un vrai logiciel de commandes sur votre MacBook, sans internet, sans abonnement. |
| 3 | **Mode atelier « zéro erreur » + messages clients** (onglet *Atelier* de la plateforme) | Supprimer les erreurs de gravure et prévenir les clients en un clic (WhatsApp / SMS). |

---

## 1. Le nouveau tableau Excel

Fichier généré : `Commandes_2026_ZARAHISSI.xlsx` (il contient vos données clients, il n'est donc **pas** stocké dans ce dépôt).

Ce qui change :
- **Un seul onglet `COMMANDES` pour toute l'année** au lieu d'un onglet par mois. Mêmes colonnes A → Q, mêmes couleurs (blocs bleus client et commande, adresse en vert, couleurs des statuts identiques).
- **Listes déroulantes** sur CONTACT, PAIEMENT, Emballage, Couleur, STATUT, RÉCUPÉRATION (et suggestions sur PRODUIT).
- **Colonnes calculées** : MARGE, JOURS EN COURS, ALERTE « ⚠ RETARD ».
- **Onglet `À TRAITER`** : se remplit tout seul avec les commandes non expédiées, de la plus ancienne à la plus récente.
- **Onglet `TABLEAU DE BORD`** : CA, achats, marge, ventes site web / sur place par mois, plus la répartition par statut, réseau, paiement, récupération et catégorie de produit.
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
