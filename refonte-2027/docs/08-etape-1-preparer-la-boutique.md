# Étape 1 · Préparer la boutique Wix (à faire par Zarahissi)

Rien n'est modifié sur le site actuel : on lui ajoute seulement un « client » qui permettra au futur site de lire la même boutique.

## 1. Sécuriser le compte Wix (5 min)

- **Double authentification** : Wix › Paramètres du compte › Connexion et sécurité › Vérification en 2 étapes.

## 2. Créer le code d'accès du nouveau site (5 min)

1. Ouvre le tableau de bord du site **zarahissi.com**.
2. Va dans **Paramètres › Développement et intégrations › Headless Settings** (Paramètres headless).
3. Dans **Headless clients**, clique sur **Create New Client**.
4. Nom du client : `Zarahissi 2027`. Choisis le type proposé pour un site web, puis **Create & Continue**.
5. Choisis la pile **JavaScript / REST**, clique sur **Continue**, puis **View Your Setup**.
6. Copie le **Client ID** qui apparaît dans la liste et envoie-le-moi.

> Le Client ID **n'est pas un mot de passe** : Wix le prévoit pour être placé dans le code d'un site. Il ne donne que des droits de visiteuse : voir les produits et remplir un panier. N'envoie en revanche **jamais** de clé API, de « client secret » ni ton mot de passe Wix.

✅ Fait : le site de test **https://dias9760-sketch.github.io/mon-premier-projet/** est autorisé dans **Headless Settings › client Zarahissi 2027 › ⋯ › Paramètres › URLs › Domaines de redirection autorisés**. Wix exige l'adresse avec `https://`.

⚠️ Ne pas remplir « Lien du front-end » avant le lancement : il est ajouté aux e-mails envoyés aux clientes.

## 3. Ce que je vérifierai avec ce code (en lecture seule)

Le script `site/outils/verifier-boutique.mjs` lit la boutique comme une simple visiteuse, sans rien modifier. Il vérifie :

- la version du catalogue Wix (V1 ou V3) ;
- le nombre de produits ;
- les catégories existantes ;
- comment sont saisis le **métal** (option) et la **gravure** (champ personnalisé).

## 4. Ensuite, dans la boutique (on le fera ensemble)

- **Ajouter** les catégories du nouveau menu (Bijoux des îles, Idées cadeaux…). On n'en renomme et on n'en supprime aucune : le site actuel les utilise.
- Préparer les photos produits sur fond crème.
- Créer un **produit test caché** pour les commandes d'essai.
