# Bilan de la boutique Wix (lecture seule, 19 octobre 2026)

## Chiffres clés

- **Catalogue Wix Stores V1**, à ne pas confondre avec le V3, plus récent. Le site s'y adapte.
- **1 188 produits**, tous visibles et tous avec photo. Prix de 1,99 € à 80 € (prix médian : 15 €). 143 sont en promotion et 66 en rupture de stock.
- **119 collections**. Le nouveau menu s'appuie sur celles qui existent déjà : **aucune collection à créer pour démarrer.**
- **380 produits avec gravure**, sous forme de champs texte (« Quel prénom sur votre collier ? »…), avec une longueur maximale propre à chaque produit.
- **Options les plus fréquentes** : « Couleur » (Or / Argent) sur 523 produits, « Emballage cadeau (+3 €) » sur 877, « Ajouter un mot cadeau (+3 €) » sur environ 700.

## Ce que le nouveau site fait de ces données

| Dans Wix | Sur le nouveau site |
|---|---|
| Option « Couleur » | Pastilles dorée / argentée / rosée |
| « Emballage cadeau (+3 €) » | Case « Emballage cadeau » ; le prix se met à jour |
| « Ajouter un mot cadeau (+3 €) » + champ « message » | Case « Ajouter un mot doux » ; le champ du message n'apparaît que si elle est cochée |
| Champs de gravure | Champ obligatoire avec compteur de caractères et aperçu indicatif |
| Variantes et stock | Prix et disponibilité de la combinaison choisie ; ajout impossible si elle est épuisée |
| Panier et paiement | Panier Wix ; paiement sur la page sécurisée de Wix |

## Points à nettoyer dans Wix (sans urgence, avant le lancement)

1. **Ruban « Nouveauté » sur 600 produits** : la moitié du catalogue est marquée « nouveau », donc le badge ne veut plus rien dire. À réserver aux 30 derniers produits.
2. **Collections en double ou vides** : Piercing / « Piercing  » ; Faux cils / Faux cils 1 ; Palettes maquilage / maquillages ; Montres Enfants, Drônes, SALOUVA et Accessoires Make Up sont vides. À fusionner ou supprimer *après* le lancement, car l'ancien site s'en sert encore.
3. **« Musique personnalisée » est rangée dans 33 collections** (Colliers, Mayotte, Bracelets…) : elle apparaît partout. À ne laisser que dans « Produits personnalisés ».
4. **Noms de produits** : certains contiennent des notes internes, comme « [Zarahissi Gravure express] ». Le ruban « Z Gravure Express » suffit.
5. **Titres des champs message** : plus de 10 variantes (« Quel message vous voulez laisser… », « …mettre la commande »…). À harmoniser en une seule formule.
6. **Remises automatiques** à créer (Wix › Marketing › Remises automatiques) pour remplacer les codes LIVGRA, MOINS5 et MOINS10. Le panier pourra alors afficher la jauge.

## Limites de l'environnement de test

Les serveurs d'images de Wix (`static.wixstatic.com`) ne sont pas joignables depuis l'environnement de développement : les photos y apparaissent vides. Elles s'affichent normalement sur un vrai téléphone ou ordinateur.
