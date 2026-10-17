# mon-premier-projet
## Publication du site Bonszahé

Le site (dossier `site/`) est publié à **deux endroits**, à garder toujours synchronisés à chaque modification :

1. **www.bonszahe.com** (adresse principale) : Cloudflare Pages, projet `bonszahe`, relié à la branche `claude/modest-clarke-d3ern5`. Chaque `git push` sur cette branche est mis en ligne automatiquement.
2. **Ancienne adresse Wix** (secours) : https://instant-avuufedtgexz-zamayotte-1409.wix-site-host.com — à republier à chaque modification via l'API Wix (site `32761e4f-414e-47d0-9089-2d5676be0455`), avec les mêmes fichiers que sur GitHub.

Les données (entreprises, codes, membres, demandes) restent dans le CMS Wix et sont communes aux deux adresses.

## Référencement (SEO)

- Sur bonszahe.com, le site utilise de vraies adresses (`/entreprises/x`, `/bon-plan/id`…). La copie Wix garde les adresses `#/…` et n'est pas indexée (`noindex`).
- `site/seo.js` : titres, descriptions, adresse canonique, données structurées schema.org et plan du site. Il est partagé par le site et par le pré-rendu.
- `functions/_middleware.js` (Cloudflare Pages Functions) : pré-rendu de chaque page pour Google et les aperçus WhatsApp/Facebook, `/sitemap.xml`, redirections 301 de www.bonszahe.com et bonszahe.pages.dev vers bonszahe.com.
- `site/robots.txt`, `site/og-bonszahe.jpg` (image de partage 1200×630), `site/_routes.json` (les fichiers statiques ne passent pas par les Functions).
- Sur la copie Wix, publier aussi `seo.js` (les fichiers `functions/`, `robots.txt`, `_routes.json` et l'image servent uniquement à Cloudflare).

## Programme de points : règles anti-triche

Les points sont recalculés dans le navigateur à partir des données du CMS (`pointsEngine()` dans `site/app-favorites-v2.js`, seuils dans `RULES`) :
comptes de confiance (7 jours d'activité), 5 pts max par donneur et par mois, 5 « j'aime » max par commentaire, 3 codes récompensés par jour,
doublons à 0 pt, 10 pts à la confirmation ou après 48 h, −10 pts si un code est signalé ou retiré dans les 7 jours, commentaires de 20 caractères
minimum sans copie, 5 avis récompensés par jour, parrainage strict (5 par mois), lots réservés aux comptes de 30 jours (7 jours pour octobre 2026, mois de lancement : `LAUNCH_MONTH`).

La page `/controle` (visible seulement par le compte du propriétaire, `ADMIN_ID`) liste les activités suspectes, permet d'exclure ou de réintégrer
un membre (collection `Exclusions`) et de valider les gagnants du mois (collection `ValidationsClassement`). Dans ces deux collections,
seules les lignes créées par le propriétaire sont prises en compte.

## Catalogues & arrivages

Collection `Catalogues` (lecture publique, écriture réservée au propriétaire) : seules les lignes avec « Publié » coché s'affichent, et les
catalogues dont la date de fin est passée disparaissent seuls. Les entreprises proposent un catalogue depuis leur fiche
(collection `CataloguesProposes`) : une automatisation Wix l'ajoute dans `Catalogues` avec « Publié » décoché et envoie un e-mail au
propriétaire. Bonszahé renvoie toujours vers le catalogue officiel, rien n'est recopié.
