# Bonszahé : contexte du projet (à donner à une IA)

> **Mode d'emploi :** copiez tout ce document au début d'une conversation avec une IA (Claude, ChatGPT…), puis posez votre question. L'IA connaîtra le projet, son public, son ton et ses règles.
> Dernière mise à jour : 19 octobre 2026.

---

## 1. Consignes pour l'IA

- **Réponds toujours en français**, simplement, sans jargon. Le porteur du projet n'est pas développeur.
- **N'invente jamais une information** : prix, horaires, offre, chiffre, coordonnées d'une entreprise. Si une information manque, dis-le ou laisse le champ vide.
- **Respecte la marque** :
  - dans les textes, écris toujours « **Bonszahé** » ;
  - dans le logo uniquement, le nom s'écrit « **BonsZahé** » (Z majuscule) ;
  - l'accroche officielle est « **Achetez malin, achetez mahorais** ».
- **Le site est 100 % gratuit pour le moment** : ne propose pas d'offre payante aux commerçants sans qu'on te le demande (voir section 8).
- **Ton** : chaleureux, local, positif, concret. Les textes du site et les messages aux commerçants vouvoient le lecteur. Les emojis sont acceptés sur les réseaux sociaux et WhatsApp, avec modération.

---

## 2. Le projet en bref

**Bonszahé** (bonszahe.com) est le site des **bons plans de Mayotte**. Il réunit au même endroit :

- les **codes promo** et **offres en magasin** des entreprises de l'île ;
- un **annuaire des entreprises** : fiche, horaires, carte, téléphone, site web ;
- les **événements**, **catalogues et arrivages**, **temps forts** (soldes, fêtes) ;
- un **observatoire des prix** et les **prix maximums des carburants et du gaz** fixés chaque mois par la préfecture ;
- des **demandes d'achat** : un habitant décrit ce qu'il cherche et les commerçants lui font une offre.

**Le nom** : « Bons » (bons plans) + « Zahé ».

**Public :**
1. les **habitants de Mayotte** ;
2. la **diaspora mahoraise** en métropole et dans les DOM-TOM, qui suit l'actualité de l'île, achète pour la famille ou prépare un retour.

**Objectif** : aider à acheter malin tout en faisant vivre les commerces mahorais.

**Communauté** : les membres partagent des codes, votent (« ça marche / ça ne marche plus »), commentent et gagnent des **points et badges**. Un classement et des récompenses mensuelles complètent le tout, avec des règles anti-triche.

---

## 3. Où en est le projet (octobre 2026)

| Élément | État |
|---|---|
| Site bonszahe.com | En ligne (lancement octobre 2026) |
| Entreprises référencées | Environ 60 fiches publiées. Horaires et descriptions complétés à partir de sources publiques, sans invention |
| Fiches revendiquées par des commerçants | 0 pour l'instant : c'est la priorité commerciale |
| Logo et charte | Finalisés (section 6) |
| Réseaux sociaux | Facebook, Instagram @bonszahe, TikTok @bonszahe3 (créés en octobre 2026) |
| Google Search Console | Site validé, sitemap envoyé (octobre 2026) |
| Statistiques | Comptage anonyme des visites + Cloudflare Web Analytics + résumé quotidien automatique chaque matin |
| Mentions légales | **À compléter** : éditeur, statut, adresse et SIRET à fournir |
| Offres payantes | Mises de côté (section 8) |

---

## 4. Fonctionnalités du site

**Pour tous :**
- Accueil avec recherche
- Entreprises par catégorie et par commune
- Carte des magasins
- Filtre « Ouvert maintenant », calculé à l'heure de Mayotte (UTC+3)
- Codes promo : copier le code, ou « montrer en caisse » pour une offre en magasin
- Tendances
- Bons plans de la semaine
- Événements
- Catalogues & arrivages
- Temps forts
- Prix à Mayotte : relevés des membres + carburants et gaz
- Application installable sur l'écran d'accueil du téléphone

**Avec un compte membre** (gratuit, e-mail + mot de passe, code de vérification par e-mail) :
- proposer un code ou une offre ;
- voter et commenter ;
- favoris et alertes ;
- publier une demande d'achat ;
- relever un prix ;
- points, niveaux, badges, parrainage, récompenses du mois ;
- boîte à idées.

**Pour les commerçants (« Espace pro »)**, après revendication de leur fiche (vérification : SIRET 14 chiffres, et e-mail au nom de domaine de l'entreprise si possible) :
- publier des offres officielles ;
- modifier la fiche et les horaires ;
- annoncer un événement ;
- proposer un catalogue ;
- voir les « clients qui cherchent à acheter » dans leur catégorie et leur répondre ;
- consulter le radar « ce que cherchent les habitants » ;
- suivre leurs statistiques sur 7 jours, 30 jours ou 3 mois : vues, codes copiés, clics vers le site, appels, itinéraires.

**Pour le propriétaire du site** : page **Contrôle**, avec :
- la modération ;
- les activités suspectes et les exclusions ;
- la validation des gagnants du mois ;
- les fiches aux horaires illisibles ;
- le radar des recherches de toute l'île.

**Pages du site :**
- Accueil ;
- Entreprises, Catégories, Carte des magasins ;
- Codes promo, Bons plans de la semaine, Tendances, Catalogues & arrivages, Temps forts ;
- Événements, Prix à Mayotte ;
- Demandes, Classement, Récompenses du mois ;
- Mon espace (Profil), Favoris, Alertes ;
- À propos, Contact, Mentions légales, Confidentialité.

Le pied de page est rangé en 4 rubriques : Bons plans, Explorer, Communauté, Bonszahé.

---

## 5. Comment c'est construit (technique)

- **Site** : application web « maison » (HTML, CSS et JavaScript, sans framework).
  - Fichiers dans `site/` : `index.html`, `app-favorites-v2.js`, `styles-favorites-v2.css`, `seo.js`, `sw.js`, `manifest.json`, `icons/`, `logo/`.
- **Hébergement principal** : **Cloudflare Pages** (bonszahe.com).
  - Mise en ligne automatique à chaque envoi sur GitHub (dépôt `dias9760-sketch/mon-premier-projet`, branche `claude/modest-clarke-d3ern5`).
  - `functions/_middleware.js` pré-affiche chaque page pour Google et pour les aperçus WhatsApp/Facebook, génère `/sitemap.xml` et fait les redirections.
- **Données** : CMS **Wix** (Wix Headless), commun à tout le site. Les comptes membres sont gérés par Wix : le mot de passe n'est jamais stocké par Bonszahé.
- **Copie de secours** : une copie du site hébergée chez Wix, republiée à chaque modification. Elle n'est pas indexée par Google.
- **Collections principales du CMS** :

  | Domaine | Collections |
  |---|---|
  | Entreprises et offres | `Entreprises`, `CodesPromo`, `PropositionsCodes`, `DemandesEntreprises`, `ModificationsFiches` |
  | Agenda et catalogues | `Evenements`, `EvenementsProposes`, `Catalogues`, `CataloguesProposes`, `TempsForts` |
  | Communauté | `Votes`, `Commentaires`, `JaimeCommentaires`, `Signalements`, `Moro`, `Parrainages`, `Recompenses` |
  | Demandes et recherches | `Demandes`, `Alertes`, `RecherchesVides` |
  | Prix | `ProduitsSuivis`, `MagasinsPrix`, `RelevesPrix`, `ConfirmationsPrix`, `PrixReglementes` |
  | Statistiques | `Statistiques` (vues, copies, appels, itinéraires, visites anonymes) |
  | Administration | `Moderation`, `Exclusions`, `ValidationsClassement`, `MessagesContact`, `Suggestions` |

- **Tâches automatiques (Claude, tâches planifiées)** :
  - prix des carburants et du gaz, le 1er du mois (et le 3 si besoin) ;
  - résumé quotidien des visites et des nouveautés à traiter, chaque matin vers 6 h 52 heure de Mayotte.
- **Alertes e-mail Wix** : nouvelle demande d'achat, catalogue proposé, etc., envoyées au propriétaire du site Wix.

---

## 6. Marque

**Logo**
- Un téléphone avec un coupon corail « % » au talon soleil, et des étincelles.
- Le nom « BonsZahé » : Z et « é » en corail, trait corail sous « Bons ».

**Icône** : carré corail « BZ » avec des encoches de coupon.

**Couleurs :**

| Couleur | Code |
|---|---|
| Corail | `#E4502F` |
| Encre | `#1F2B3D` |
| Soleil | `#FFB23F` |
| Crème | `#FFF8EE` |
| Corail foncé | `#C23E20` |
| Gris brun | `#6F6155` |
| Bleu nuit | `#082B54` |
| Vert | `#3B8F2C` |
| Turquoise | `#1FB5C9` |
| Sable | `#FFF1D6` |

**Polices** (Google Fonts, gratuites) :
- Bricolage Grotesque ExtraBold : logo et titres ;
- Figtree : textes.

**Fichiers de marque** : dossier `marque/` (guide des couleurs, fichiers vectoriels, réseaux sociaux, logos PNG et JPG).

---

## 7. Contacts et présence en ligne

- **Site** : https://bonszahe.com
- **E-mail** : contact@bonszahe.com (redirigé vers la boîte Gmail du projet)
- **Facebook** : https://www.facebook.com/share/1A9v8WGbjW/
- **Instagram** : https://www.instagram.com/bonszahe (@bonszahe)
- **TikTok** : https://www.tiktok.com/@bonszahe3 (@bonszahe3)

---

## 8. Modèle économique

- **Aujourd'hui : 100 % gratuit**, pour les habitants comme pour les commerçants.
- **Plus tard** (proposition mise de côté dans `docs/tarifs-plus-tard.md`) :
  - des « coups de pouce » payants : offre à la une, entreprise à la une ;
  - un abonnement Pro.
- **Conditions de lancement** :
  - au moins 1 000 visiteurs par mois pendant 2 mois ;
  - au moins 30 fiches revendiquées ;
  - une micro-entreprise ouverte.
- **Règle d'or** : un contenu payé porte toujours la mention « Sponsorisé », et l'argent ne change jamais les votes, commentaires ou classements.

---

## 9. Documents utiles du dossier

| Fichier | Contenu |
|---|---|
| `README.md` | Fonctionnement technique détaillé (points, catalogues, prix, demandes…) |
| `kit-commercant/` | Messages de prospection (WhatsApp, e-mail, relance, script d'appel), messages pour petites entreprises sans site, e-mail mensuel de statistiques, 61 affiches avec QR code par entreprise |
| `docs/guide-compte-et-revendication.pdf` | Guide illustré : créer un compte, revendiquer son entreprise (téléphone et ordinateur) |
| `docs/bios-reseaux-sociaux.md` | Bios Instagram, TikTok, Facebook, WhatsApp |
| `docs/tarifs-plus-tard.md` | Proposition d'offres payantes mise de côté |
| `marque/` | Logos, couleurs, visuels réseaux sociaux |

---

## 10. Priorités actuelles

1. **Compléter les mentions légales** : éditeur, statut, adresse, SIRET.
2. **Remplir le site d'offres** : contacter d'abord les entreprises qui ont déjà une offre (Simex, Somay, House Pizza, Sanistore, Waterland, Nespresso Mayotte), puis 10 entreprises par semaine.
3. **Faire revendiquer les fiches**, avec le guide et les affiches QR code.
4. **Animer les réseaux sociaux** : 3 publications par semaine (bon plan du jour, prix des carburants, entreprise à découvrir), et un rendez-vous « Bons plans de la semaine » le vendredi.
5. **Partager le site** dans les groupes Facebook et WhatsApp de Mayotte et de la diaspora.
6. **Ajouter un encadré « Vous êtes commerçant ? Ajouter mon entreprise »** dans le pied de page.

---

## 11. Exemples de demandes à faire à une IA avec ce contexte

- « Écris 3 publications Instagram pour présenter Bonszahé à la diaspora. »
- « Rédige un message WhatsApp pour proposer à [entreprise] de revendiquer sa fiche. »
- « Propose un calendrier de publications pour novembre (fête, soldes, rentrée…). »
- « Rédige une FAQ pour la page À propos. »
- « Réponds à ce commerçant qui demande si c'est payant. »
