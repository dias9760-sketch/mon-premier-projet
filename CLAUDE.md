# Bonszahé : notice du projet

> À lire au début de chaque session. Garder ce fichier court (moins de 100 lignes). Quand Claude répète une erreur, ajouter une règle ici.
> **Mémoire complète du projet : `docs/memoire-projet.md`. Dernière passation : `docs/journal.md`. Les lire avant de travailler.**

## Le projet
- **Bonszahé** (accroche « Achetez malin, achetez mahorais ») : plateforme des entreprises locales de Mayotte et de leurs codes promo et bons plans.
- Site en ligne : https://bonszahe.com (hébergé sur **Cloudflare Pages**).
- Copie de secours : site **Wix Headless** `32761e4f-414e-47d0-9089-2d5676be0455`, qui doit rester identique à bonszahe.com.
- Ancien site Wix Studio (à ne PAS modifier) : https://zamayotte.wixstudio.com/bonszahe
- Objectif : devenir le site n°1 des codes promo et bons plans à Mayotte (SEO soigné).

## Où se fait chaque modification
- Les entreprises, codes promo, offres et événements sont gérés dans le **CMS Wix** (commun aux deux sites), pas dans le code.
- Le code du site est dans `site/` (dépôt `dias9760-sketch/mon-premier-projet`, branche `claude/modest-clarke-d3ern5`).

## Publication (à respecter dans cet ordre)
1. Tester en local ou en aperçu (captures sur ordinateur et sur téléphone), et augmenter `?v=NN` dans `site/index.html`.
2. Publier sur **bonszahe.com** : `git push` sur la branche `claude/modest-clarke-d3ern5` (mise en ligne automatique par Cloudflare).
3. Publier ensuite sur la **copie Wix** : télécharger le zip, appliquer le correctif en vérifiant les empreintes avant et après, envoyer en base64, puis publier avec « drop » (procédure détaillée dans `docs/memoire-projet.md` § 4).
4. Après publication, le site peut mettre quelques minutes à se mettre à jour : recharger la page avant de conclure à une erreur.
- Ne jamais dire « c'est publié » sans l'avoir vérifié.
- Ne pas pousser de code non validé : la branche part directement en ligne.
- Si la copie Wix ne correspond pas à GitHub (une autre session l'a modifiée), prévenir avant d'écraser.

## Fonctionnement du site (à garder en tête)
- Menu : Accueil, Entreprises, Codes promo, Tendances, Événements, Demandes, Carte, « Proposer un bon plan », Connexion.
- Il faut être **connecté** (membre) pour proposer un code ou une offre.
- Deux types d'offres : **avec code** et **sans code**. Dans l'affichage, compter et afficher le **nombre total d'offres**, sans distinguer avec ou sans code, pour ne pas décourager l'ouverture d'une fiche (ex. : « 2 bons plans disponibles »).
- Les offres sans code ont leur propre bloc, sous les codes promo, sur toutes les fiches (jamais dans la description).
- Une **automatisation Wix** publie les propositions des membres (`PropositionsCodes` → `CodesPromo`) en quelques secondes. Ne pas la casser. Après un changement du formulaire, tester qu'une proposition apparaît bien sur la fiche.
- Page Événements : « À l'affiche » + calendrier + frise horizontale + mosaïque. Les événements ne s'écrivent que par l'administrateur (API Wix).

## Règles de travail
- Répondre en **français**, simplement, sans jargon.
- Une modification = un résultat vérifié (capture ou test sur le site réel), puis un résumé en 2 lignes de ce qui a changé.
- Avant tout changement qui peut casser le site (structure, automatisation, CMS) : l'annoncer et attendre mon accord. Pour un changement d'affichage : proposer une maquette d'abord.
- Ne jamais inventer un chiffre, une entreprise, un code promo, un horaire ou une date. Dire quand une information manque (« à confirmer »).
- Pas de suppression de données du CMS sans mon accord explicite.
- Ne pas ouvrir de pull request ni envoyer d'e-mail sans demande. L'outil Gmail abîme les brouillons : ne pas l'utiliser pour les modifier.

## Identité visuelle
- Utiliser le **nouveau logo** (octobre 2026) sur tous les visuels. Kit complet dans `marque/`.
- Couleurs : corail `#E4502F`, encre `#1F2B3D`, soleil `#FFB23F`, crème `#FFF8EE`, corail foncé `#C23E20`, bleu nuit `#082B54`, turquoise `#1FB5C9`, vert `#3B8F2C`.
- Polices : Bricolage Grotesque ExtraBold (logo, titres) et Figtree (textes).

## Contenus et marketing
- Les pubs vidéo utilisent la même voix off d'homme français naturel que les pubs précédentes.
- Réseaux : @bonszahe (Instagram), @bonszahe3 (TikTok), Facebook, et @zarahissi. Concours en partenariat avec Zarahissi (carte cadeau 100 € sur ZARAHISSI.com).
- Dans les emails marketing de ZARAHISSI : toujours ajouter le logo ZARAHISSI.

## Liens utiles
- Suivi de prospection : https://claude.ai/artifact/UMQMsenfnSs4x4JsZuZovF
- Tâches planifiées : recherche d'événements tous les 5 jours (`trig_01DHEMxv4sutBpyvT12uhGVb`) et résumé quotidien des visites (`trig_01TXZNHyQn5SbnUvExGpGwWE`).

## En fin de session
Avant de quitter, mettre à jour la **fiche de passation** dans `docs/journal.md` (où on en est, décisions prises, ce qui est publié ou non, ce qui reste à faire, points de vigilance) et, si besoin, `docs/memoire-projet.md`.
