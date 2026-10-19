# Stratégie technique · Refaire le site à partir du prototype, avec Wix pour les commandes

**Objectif** : lancement en 2027. Le site actuel reste en ligne, sans modification, pendant tout le travail. Commandes, paiements, clientes et stock restent gérés dans Wix.

## Les deux solutions possibles

| | **A. Nouveau design branché sur ta boutique Wix actuelle** (Wix Headless) ⭐ recommandé | **B. Nouveau site Wix Studio séparé** |
|---|---|---|
| Ce qu'on garde du prototype | **Le code lui-même** : le prototype devient le vrai site | Le design seulement : tout est refait à la main dans l'éditeur |
| Produits, stock, commandes, clientes, points fidélité | **Les mêmes qu'aujourd'hui**, rien à migrer | À réimporter dans un nouveau site ; l'historique des commandes reste dans l'ancien |
| Paiement | Page de paiement **hébergée par Wix** (CB, PayPal, espèces), comme aujourd'hui | Paiement Wix, comme aujourd'hui |
| Gestion au quotidien | Tableau de bord Wix inchangé : commandes, produits, prix, promos, livraison | Tableau de bord Wix d'un nouveau site |
| Modifier la mise en page | Par le code (avec moi ou un développeur). Les textes et bannières peuvent être rendus modifiables depuis Wix (CMS). | Toi-même, en glisser-déposer |
| Aperçu de gravure en direct | Déjà codé dans le prototype | À recoder en Velo |
| Risque principal | Le catalogue est **partagé** avec l'ancien site pendant le développement : il faut ajouter des catégories, pas renommer ni supprimer celles qui existent | Migration : produits, comptes clients et points à transférer, avec un risque d'oubli |

## Pourquoi A est la plus sûre pour toi

1. **Aucune donnée ne bouge.** Les commandes, les clientes, les comptes et les points restent dans ta boutique Wix actuelle. Il n'y a pas de migration, donc rien à perdre.
2. **Le paiement ne passe jamais par notre code.** Au moment de payer, la cliente est envoyée sur la page de paiement sécurisée de Wix. Les numéros de carte ne touchent jamais le nouveau site.
3. **Aucun mot de passe ni clé secrète dans le site.** Le nouveau site s'identifie avec un « identifiant client » public. Wix le prévoit ainsi : il ne donne que des droits de simple visiteuse (voir les produits, remplir un panier), jamais des droits d'administration.
4. **L'ancien site continue de vendre** jusqu'au jour J, sur la même boutique.
5. **Retour arrière possible** : en cas de problème le jour J, on rebranche l'ancien site en quelques minutes.

> Si tu préfères pouvoir tout modifier toi-même sans code, prends la solution B. Elle est tout aussi sûre côté paiement, mais elle demande de migrer la boutique et de refaire le design à la main.

## Règles de sécurité (solution A)

- Pas de compte administrateur ni de clé secrète dans le code du site. Seul l'identifiant client public y figure.
- Paiement : uniquement la page de paiement hébergée par Wix.
- Code versionné dans GitHub (ce dépôt), chaque changement relu et testé avant la mise en ligne.
- Accès Wix : double authentification activée sur ton compte ; si quelqu'un t'aide, invite-le comme collaborateur avec un rôle limité, sans jamais partager ton mot de passe.
- Tests de commande : avec un produit test caché (0 € ou retrait boutique + espèces), puis commande annulée. Les commandes test arrivent dans ton vrai tableau de bord.

## Plan jusqu'au lancement 2027

| Phase | Contenu | Qui |
|---|---|---|
| 1. Préparer la boutique | Activer le mode Headless sur le site actuel et créer l'identifiant client. **Ajouter** les nouvelles catégories du menu (sans toucher aux anciennes). Préparer les photos produits sur fond crème. | Toi, guidée pas à pas |
| 2. Brancher le prototype | Remplacer les produits fictifs par les vrais (lecture du catalogue Wix), vrai panier Wix, gravure envoyée dans le champ personnalisé de la commande, page de paiement Wix | Développement |
| 3. Contenus modifiables | Bannières, emplacement saisonnier, textes d'accueil et FAQ gérés depuis le CMS Wix, pour les changer sans code | Développement |
| 4. Tests | Adresse de test privée, commandes test dans chaque zone et chaque mode de paiement, vrais iPhone et Android, clientes fidèles en avant-première | Toi + développement |
| 5. Lancement | Bascule du domaine zarahissi.com vers le nouveau design (« Moving your site to a custom frontend »), redirections, annonce | Ensemble |

Documentation Wix : [Add a Frontend to an Existing Wix Site](https://dev.wix.com/docs/go-headless/self-managed-headless/get-started/add-a-frontend-to-an-existing-wix-site) · [Set Up a Headless Client](https://dev.wix.com/docs/go-headless/authentication/setup/set-up-a-headless-client) · [Moving Your Site to a Custom Frontend](https://support.wix.com/en/article/wix-headless-moving-your-site-to-a-custom-frontend)

## Points à vérifier pendant la phase 1

- Ton forfait Wix actuel autorise-t-il le mode Headless sur le site existant, et à quel coût ?
- Les options de livraison (livreur Mayotte, retrait Kavani) et le paiement en espèces s'affichent-ils correctement sur la page de paiement Wix ?
- Les champs de gravure sont-ils transmis avec la commande ? Cela se teste dès le premier produit.
