# Le blog Bonszahé : publier un article

Adresse : **bonszahe.com/blog**. Chaque article a sa propre page : **bonszahe.com/blog/titre-de-l-article**.

Le blog réunit **deux sources**, mélangées et présentées de la même façon :

1. **TRyholo (Holo AI)** : ses articles arrivent tout seuls (dans les 10 minutes). Dans TRyholo, l'adresse de la page blog (« Blog page URL ») est `https://bonszahe.com/blog`.
   Le site lit la liste contenue dans leur script d'intégration (`/api/holo-articles`). Si TRyholo change ce format, le site affiche à la place leur module d'origine, en bas de la page Blog.
   Les anciennes adresses TRyholo `bonszahe.com/blog?post=…` renvoient vers `bonszahe.com/blog/…`.
2. **Wix** : la collection **« Articles »** (tableau de bord Wix → CMS), où vous écrivez vous-même, ou Claude pour vous. Si vous arrêtez TRyholo, le blog continue avec ces articles.

**Thèmes** : Courses & prix, Fêtes & saisons, Bons plans, Commerces de l’île, Diaspora, Vie pratique. Dans Wix, écrivez le nom du thème dans « Catégorie ».
Pour TRyholo, qui n’envoie pas de thème, le site le devine d’après les mots du titre et du résumé (liste `BLOG_THEMES` dans `site/seo.js`).
Chaque thème a sa page (`/blog?theme=courses`…), et la recherche porte sur le titre, le résumé et le texte.

## Publier un article (depuis le tableau de bord Wix)

1. Ouvrez **CMS → Articles → Ajouter un élément**.
2. Remplissez les champs ci-dessous. Seul le **titre** est obligatoire, mais un article complet est mieux référencé sur Google.
3. Cochez **Publié**, puis enregistrez. L'article apparaît sur le site en quelques secondes (et pour Google dans les 10 minutes).

| Champ (nom affiché) | Clé | Type | À quoi il sert |
|---|---|---|---|
| Titre | `titre` | Texte | Le titre de l'article |
| Résumé | `resume` | Texte | 1 à 2 phrases. Affiché sous le titre, sur les cartes et dans Google / WhatsApp |
| Contenu | `contenu` | Texte enrichi | Le texte de l'article (voir « Coller un texte de TRyholo » plus bas) |
| Image | `image` | Image | Photo de couverture (format paysage conseillé, 1200 × 675 px) |
| Lien de l'image | `imageLien` | URL | À la place de « Image », si la photo est déjà en ligne |
| Date de publication | `datePublication` | Date | Date affichée. **Une date future programme l'article** : il apparaît seul ce jour-là |
| Catégorie (thème) | `categorie` | Texte | Un des 6 thèmes ci-dessus, par exemple « Courses & prix ». Vide : le site le devine |
| Auteur | `auteur` | Texte | Facultatif. Vide = « Bonszahé » |
| Entreprises citées | `entreprises` | Texte | Noms des entreprises séparés par des virgules (ex. : `Sodifram, Carrefour / Douka Bé`). Leurs fiches s'affichent sous l'article |
| À la une | `aLaUne` | Booléen | Met l'article en grand en haut de la page Blog |
| Publié | `publie` | Booléen | **Décoché = brouillon**, invisible sur le site |
| Adresse (slug) | `slug` | Texte | Facultatif. Vide = fabriquée à partir du titre. **Ne la changez plus une fois l'article partagé** (les anciens liens ne marcheraient plus) |

## Coller un texte de TRyholo

Le champ **Contenu** accepte trois formes, au choix :

- **Texte enrichi Wix** : collez le texte et mettez-le en forme avec la barre d'outils (titres, gras, listes, liens).
- **Markdown** (si TRyholo donne ce format) : `## Sous-titre`, `**gras**`, `*italique*`, `- liste`, `1. liste numérotée`, `> citation`, `[texte du lien](https://…)`, `![légende](https://lien-image…)`.
- **Texte simple** : une ligne vide entre deux paragraphes.

Par sécurité, le site garde seulement la mise en forme utile (titres, gras, italique, listes, liens, images, citations, tableaux). Couleurs, polices, scripts et vidéos intégrées sont retirés.

## Bon à savoir

- **Relire avant de publier** : comme pour tout le site, aucune information inventée (prix, horaires, offres). Vérifiez les chiffres donnés par l'IA.
- Un lien vers une page du site s'écrit sans le domaine, par exemple `/prix`, `/entreprises/sodifram` ou `/codes`.
- Les articles apparaissent dans le plan du site envoyé à Google, avec les boutons de partage WhatsApp et Facebook. Ils ne sont pas sur la page d’accueil (choix du propriétaire).
- Les images des articles écrits par Claude sont dans `site/images/blog/`, et le texte d’origine dans `docs/articles/`.
- Pour retirer un article : décochez **Publié**.
