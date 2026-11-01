# Bonszahé : mémoire complète du projet

> Document de reprise pour une **nouvelle conversation** avec Claude (ou une autre IA).
> État au **1ᵉʳ novembre 2026**. À lire en entier avant de travailler sur le projet.
> Fichiers liés :
> - `CLAUDE.md` : règles courtes, chargées automatiquement par Claude Code ;
> - `docs/journal.md` : dernière fiche de passation ;
> - `docs/contexte-projet-ia.md` : présentation pour une IA sans accès au code ;
> - `README.md` : détails techniques.

---

## 1. Le projet

- **Bonszahé** (bonszahe.com) : le site des **bons plans de Mayotte**. Il réunit :
  - les codes promo et les offres sans code ;
  - l'annuaire des entreprises (fiche, horaires, carte) ;
  - les événements et les catalogues ;
  - l'observatoire des prix et les prix des carburants ;
  - les demandes d'achat.
- **Accroche** : « Achetez malin, achetez mahorais ». Dans les textes, on écrit « Bonszahé » ; dans le logo, « BonsZahé » (Z majuscule).
- **Public** : les habitants de Mayotte et la diaspora mahoraise.
- **Propriétaire / éditeur** : Haybati HARDALI, SIRET 841 974 488 00014, contact@bonszahe.com.
- **Modèle** : 100 % gratuit pour l'instant. Les offres payantes sont mises de côté (`docs/tarifs-plus-tard.md`).
- **Réseaux** :
  - Facebook : https://www.facebook.com/share/1A9v8WGbjW/
  - Instagram : @bonszahe
  - TikTok : @bonszahe3
- **Boîte mail du projet** : bonszahe976@gmail.com (contact@bonszahe.com y est redirigé).

## 2. Règles de travail (non négociables)

1. Répondre **en français**, simplement : le propriétaire n'est pas développeur.
2. **Ne jamais inventer** une information (entreprise, horaire, prix, date, code). Si l'information manque, laisser le champ vide ou écrire « à confirmer ».
3. **Ne pas ouvrir de pull request** sans demande, et **ne pas envoyer d'e-mail** au nom du propriétaire.
4. Avant un changement d'affichage important : **proposer une maquette** (captures) et attendre la validation.
5. **Ne pas pousser du code non validé** : la branche est publiée automatiquement sur bonszahe.com.
6. Après chaque **modification du code du site** : publier sur bonszahe.com **puis** sur la copie Wix, et vérifier les deux (voir § 4).
7. Ne rien supprimer du CMS sans accord explicite.

## 3. Architecture technique

- **Code** : dépôt GitHub `dias9760-sketch/mon-premier-projet`, branche **`claude/modest-clarke-d3ern5`**.
  - `site/` : `index.html`, `app-favorites-v2.js` (toute l'application, sans framework), `styles-favorites-v2.css`, `seo.js`, `sw.js`, `manifest.json`, `icons/`, `logo/`.
  - `functions/_middleware.js` : pré-rendu Cloudflare pour Google et les aperçus WhatsApp/Facebook, `/sitemap.xml`, redirections.
  - `marque/` (kit de marque), `kit-commercant/` (messages de prospection, affiches QR), `docs/`.
- **Hébergement principal** : **Cloudflare Pages** (projet `bonszahe`). Chaque `git push` sur la branche met bonszahe.com en ligne.
- **Copie de secours** : site Wix Headless `32761e4f-414e-47d0-9089-2d5676be0455` (https://instant-avuufedtgexz-zamayotte-1409.wix-site-host.com). Non indexée. Elle doit rester **identique** à bonszahe.com.
- **Ancien site Wix Studio** (zamayotte.wixstudio.com/bonszahe) : **ne pas modifier**.
- **Données** : CMS Wix, commun aux deux sites. Les comptes membres sont gérés par Wix.
- **Version des fichiers** : `?v=NN` dans `site/index.html`. Actuellement **48** ; à augmenter à chaque changement de JS ou de CSS.

### Collections du CMS Wix (principales)
| Collection | Contenu / champs utiles |
|---|---|
| `Entreprises` | `nom`, `slug`, `categorie`, `commune`, `description`, `adresse`, `telephone`, `siteWeb`, `email`, `logo`, `publiee`, `typeVente` (`boutique` / `en-ligne` / `les-deux`), `horaires`, `position`, `proprietaire`. L'`_id` est souvent égal au slug, sauf bazar-dagoni. |
| `CodesPromo` | `code`, `typeOffre` (`code` / `magasin` / `offre` = sans code), `avantage`, `detail`, `conditions`, `dateExpiration`, `lienOffre`, `entreprise`, `statut` (Validé / Retiré…), `contributeurNom`, `votesOui` / `votesNon` |
| `PropositionsCodes` | Propositions des membres (statut « En attente »). **Une automatisation Wix** les copie dans `CodesPromo`, puis la proposition passe à « Traité ». |
| `Evenements` | `titre`, `date` et `dateFin` (`AAAA-MM-JJ`), `heure`, `commune`, `lieu`, `description`, `image`, `lien`, `entreprise`, `publie`. **Écriture réservée à l'administrateur** (via l'API Wix). |
| `EvenementsProposes` | Événements proposés par les entreprises |
| `Signalements` | Signalements de commentaires (`commentaire`) ou d'offres sans code (`offre`), avec un `motif` |
| `Catalogues` / `CataloguesProposes` | Catalogues ; une automatisation Wix les ajoute non publiés |
| Autres | `Votes`, `Commentaires`, `Moro`, `Demandes`, `Alertes`, `RelevesPrix`, `PrixReglementes`, `Statistiques`, `MessagesContact`, `Exclusions`, `ValidationsClassement`… |

### Formats attendus par le site
- **Horaires** : `Lun-Ven 8h-12h et 14h-17h · Sam 8h-12h`. Ils sont lus par `parseHours()` à l'heure de Mayotte (UTC+3) ; un texte illisible n'affiche rien.
- **Position** : `"latitude, longitude"`, par exemple `"-12.7750698, 45.2248092"`.
- **Dates** : `AAAA-MM-JJ`.

## 4. Publier une modification du code (procédure)

1. Modifier `site/…`, **augmenter `?v=NN`** dans `site/index.html` et vérifier la syntaxe (`node --check site/app-favorites-v2.js`).
2. Tester en local avec Playwright :
   - Chromium est déjà installé ;
   - servir les fichiers via `page.route` sur un faux domaine `https://local.test/**` (un serveur local en http est bloqué par le proxy) ;
   - faire des captures sur ordinateur (1280 px) et sur téléphone (390 px).
3. `git commit` puis `git push -u origin claude/modest-clarke-d3ern5` : bonszahe.com se met à jour en quelques minutes.
4. **Copie Wix** :
   - télécharger la copie actuelle : `GET https://www.wix.com/_api/wixstro-deployments/v1/instant-sites/{siteId}/download.zip` (portée *account*) ;
   - appliquer le diff `git diff -U0` et **vérifier une empreinte** (longueur + hash) de chaque fichier **avant** et **après** : la copie Wix doit correspondre exactement à la version GitHub précédente ;
   - **envoyer le correctif encodé en base64** : le transport déforme sinon des séquences comme `̀` ou `\n` ;
   - publier : `POST https://www.wixapis.com/headless-business-setup/v1/headless-business/{siteId}/drop?campaign=mcp&agent=claude-code` (multipart, portée *account*) ;
   - retélécharger et revérifier les empreintes.
5. Si la copie Wix **ne correspond pas** à GitHub, une autre session l'a peut-être modifiée directement (c'est arrivé le 31 octobre). **Ne rien écraser sans prévenir le propriétaire.**

Une modification qui ne touche que le CMS ou `docs/` ne demande pas de republier sur Wix.

## 5. Fonctionnalités en place (principales)

- **Accueil, annuaire, catégories, carte des magasins** (Leaflet + OpenStreetMap), filtre « Ouvert maintenant ».
- **Codes promo** : voter « ça marche / ça ne marche plus », Moro/Maji (tendances), commentaires, points, badges, classement, récompenses du mois avec règles anti-triche.
- **Offres sans code** (octobre 2026) :
  - un bloc « Offres sans code [entreprise] » **sous les codes promo, sur toutes les fiches**, jamais dans la description ;
  - le bouton « + Proposer une offre », avec le formulaire déjà réglé sur « Offre sans code » et une date facultative ;
  - une offre datée est masquée le lendemain de sa date de fin ;
  - une offre peut être signalée (masquée après 2 signalements de membres différents, ou 1 venant de l'entreprise ou de l'administrateur) ;
  - les cartes entreprises affichent le **nombre total de bons plans**, codes et offres sans code confondus.
- **Événements** (page refaite le 31 oct. – 1ᵉʳ nov.) :
  - un bandeau « À l'affiche » avec compte à rebours ;
  - un calendrier du mois avec des points sous les jours concernés ;
  - une **frise horizontale** qui défile ;
  - une mosaïque avec étiquettes déduites du titre et un badge « Gratuit » ;
  - une fenêtre de détail et un bouton « Ajouter à mon agenda » (`.ics`).
- **Espace pro** : revendication de fiche, publication d'offres, statistiques, radar des recherches.
- **Page Contrôle** (administrateur) : modération, activités suspectes, fiches aux horaires illisibles.
- **Prix à Mayotte** : relevés des membres et prix maximums des carburants et du gaz.
- **Mentions légales** : éditeur rempli. **Il manque l'adresse postale et le statut juridique** (`EDITEUR` dans `app-favorites-v2.js`).

## 6. Contenu actuel

- **Entreprises** : environ 60 fiches publiées. **51 fiches** ont reçu leurs horaires et/ou leur position depuis Google Maps (31 oct.).
- **Événements** : 22 publiés, du 6 novembre au 6 décembre 2026.
- **Offres sans code** : 2 chez Somay (Halloween -40 % jusqu'au 8 nov., 5 % de bienvenue après inscription à la newsletter).

## 7. Tâches automatiques (tâches planifiées Claude)

| Nom | Identifiant | Rythme | Rôle |
|---|---|---|---|
| Événements Mayotte à valider | `trig_01DHEMxv4sutBpyvT12uhGVb` | jours 1, 6, 11, 16, 21, 26, 31 du mois, 7 h 23 (Mayotte) | Cherche les nouveaux événements et propose une liste à valider. **Ne publie rien.** Elle répond dans la **conversation d'origine** : voir § 10 pour la rattacher à une nouvelle conversation. |
| Résumé quotidien | `trig_01TXZNHyQn5SbnUvExGpGwWE` | chaque matin vers 6 h 52 (Mayotte) | Visites et nouveautés à traiter |
| Carburants et gaz | — | le 1ᵉʳ du mois (et le 3 si besoin) | Prix maximums de la préfecture |

## 8. Prospection

- **Outil de suivi** : https://claude.ai/artifact/UMQMsenfnSs4x4JsZuZovF.
  - Les données sont rangées en deux collections : `entreprises` (identifiée par le slug) et `actions`.
  - Un onglet « Nouvelles entreprises » regroupe les entreprises marquées `lot = "nouveau"`.
  - Une case « e-mail invalide » est prévue.
- Messages de prospection, affiches QR et guide de revendication : `kit-commercant/` et `docs/guide-compte-et-revendication.pdf`.
- **Attention à Gmail** : l'outil Gmail de Claude **abîme les brouillons** (images supprimées, liens réécrits). Préférer des modifications à la main, ou un publipostage (YAMM) à partir d'un CSV.

## 9. Reste à faire / points ouverts

- [ ] Mentions légales : adresse postale et statut juridique.
- [ ] Oishii : « définitivement fermé » sur Google. Faut-il dépublier la fiche ?
- [ ] Maji Mewou : l'adresse diffère (Combani sur Google, Sada sur la fiche).
- [ ] Fiches sans horaires ni position fiables : Mayotte Évasion, CataMayotte, JSOI Distribution, Samcom, La Mahoraise, Simex, Waterland, Zé Loc, Maoré Discount, Lagon Aventure.
- [ ] Tester une **offre sans code sans date de fin** proposée par le formulaire : l'automatisation Wix la recopie-t-elle bien ?
- [ ] Tester « Ajouter à mon agenda » sur iPhone.
- [ ] L'observatoire des prix « De … à … » (champ `prixMax`), fait par une autre session **uniquement sur Wix**, a été effacé. À refaire si on le souhaite.
- [ ] Rechercher les réseaux sociaux des nouvelles entreprises du suivi de prospection.

## 10. Limites de l'environnement Claude

- Sites **bloqués** : `lejournaldemayotte.yt` (seuls les extraits de recherche sont lisibles), bonszahe.com en `curl`, la plupart des sites d'entreprises. La recherche web fonctionne.
- Les tâches planifiées liées à une conversation y répondent : pour recevoir la recherche d'événements dans une **nouvelle** conversation, demander à Claude de la « rattacher à cette conversation » (supprimer `trig_01DHEMxv4sutBpyvT12uhGVb` et la recréer depuis la nouvelle conversation).
- Les fichiers du dossier `scratchpad` d'une session ne sont **pas** conservés d'une conversation à l'autre : seul ce qui est sur GitHub (et le CMS Wix) reste.
