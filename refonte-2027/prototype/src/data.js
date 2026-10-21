/* =========================================================================
   Zarahissi 2027 · Données du prototype
   Produits FICTIFS (noms et prix réalistes) pour montrer le fonctionnement.
   Dans Wix Studio, ces données viendront de Wix Stores (produits, catégories,
   options) ; les champs ci-dessous indiquent où les ranger.
   ========================================================================= */

/* Infos boutique (texte fourni par Zarahissi) */
const BOUTIQUE = {
  adresse: 'Kavani, Mamoudzou · Quartier Vaga Musique (Mayotte)',
  tel: '0639 71 84 45',
  whatsapp: 'https://wa.me/262639718445',
  horaires: '8h30 – 18h30',
  livraisonOfferteDes: 40,
  // Remises automatiques (remplacent les codes LIVGRA / MOINS5 / MOINS10)
  paliers: [
    { des: 70, remise: 5 },
    { des: 100, remise: 10 },
  ],
};

/* Zones et modes de livraison (délais fournis par Zarahissi ;
   les TARIFS sont fictifs et à remplacer par ceux de Wix › Livraison) */
const ZONES = [
  { id: 'mayotte', nom: 'Mayotte', modes: [
    { id: 'livreur', nom: 'Livreur à domicile', delai: 'sous 48 h', prix: 4.90, info: 'Remis en main propre par notre livreur partenaire.' },
    { id: 'poste', nom: 'La Poste avec suivi', delai: '4 à 10 jours', prix: 3.90, info: 'Enveloppe à bulles, dans ta boîte aux lettres.' },
    { id: 'retrait', nom: 'Retrait en boutique', delai: 'dès que c\'est prêt (e-mail)', prix: 0, info: 'Kavani, Mamoudzou · 8h30 – 18h30.' },
  ]},
  { id: 'reunion', nom: 'La Réunion', modes: [
    { id: 'poste', nom: 'La Poste avec suivi', delai: '5 à 12 jours', prix: 5.90, info: 'Numéro de suivi envoyé par e-mail.' },
  ]},
  { id: 'france', nom: 'France métropolitaine', modes: [
    { id: 'poste', nom: 'La Poste avec suivi', delai: '2 à 10 jours', prix: 4.90, info: 'Numéro de suivi envoyé par e-mail.' },
  ]},
  { id: 'guadeloupe', nom: 'Guadeloupe', modes: [
    { id: 'poste', nom: 'La Poste avec suivi', delai: '5 à 12 jours', prix: 5.90, info: 'Numéro de suivi envoyé par e-mail.' },
  ]},
  { id: 'martinique', nom: 'Martinique', modes: [
    { id: 'poste', nom: 'La Poste avec suivi', delai: '5 à 12 jours', prix: 5.90, info: 'Numéro de suivi envoyé par e-mail.' },
  ]},
];

const METAUX = {
  or:     { nom: 'Doré',   couleur: '#C9A55A' },
  argent: { nom: 'Argenté', couleur: '#A9AFB7' },
  rose:   { nom: 'Rosé',   couleur: '#D49A86' },
};

const POLICES = [
  { id: 'script', nom: 'Script', css: "'Great Vibes', cursive", taille: 1 },
  { id: 'elegante', nom: 'Élégante', css: "'Cormorant Garamond', serif", taille: .78, style: 'italic' },
  { id: 'moderne', nom: 'Moderne', css: "'DM Sans', sans-serif", taille: .62, poids: 700 },
];

const OCCASIONS = {
  'ramadan-aid': 'Ramadan & Aïd', 'fete-meres': 'Fête des mères', 'saint-valentin': 'Saint-Valentin',
  'anniversaire': 'Anniversaire', 'naissance': 'Naissance', 'noel': 'Noël',
};

/* ---------- Catalogue ----------
   cat      : catégorie Wix Stores principale (une seule)
   pour     : femme | homme | couple | enfant  → catégories secondaires
   perso    : type de personnalisation → « champs personnalisés » + Velo pour l'aperçu
   metaux   : option produit « Métal »
   occasions, collection, express : catégories secondaires (Idées cadeaux, Collections, Gravure express)
*/
const P = (o) => Object.assign({ metaux: ['or', 'argent'], pour: ['femme'], occasions: [], note: 4.8, avis: 24 }, o);

const PRODUITS = [
  // --- Personnalisés ---
  P({ id: 'collier-prenom', nom: 'Collier prénom classique', cat: 'colliers-personnalises', prix: 14.90, ancien: 19.90, visuel: 'nom', perso: { type: 'nom', max: 10 }, metaux: ['or', 'argent', 'rose'], best: true, express: true, occasions: ['anniversaire', 'fete-meres', 'ramadan-aid'], note: 4.9, avis: 128, desc: 'Le best-seller Zarahissi : ton prénom découpé en lettres attachées, sur une chaîne fine réglable de 40 à 45 cm. Acier inoxydable qui ne noircit pas.' }),
  P({ id: 'collier-coeur', nom: 'Collier prénom cœur', cat: 'colliers-personnalises', prix: 16.90, visuel: 'coeur', perso: { type: 'nom', max: 8 }, metaux: ['or', 'argent', 'rose'], nouveau: true, occasions: ['saint-valentin', 'anniversaire'], note: 4.9, avis: 41, desc: 'Ton prénom calligraphié dans un cœur ajouré. Délicat, il se porte seul ou superposé.' }),
  P({ id: 'collier-plaque-homme', nom: 'Collier plaque gravée homme', cat: 'colliers-personnalises', prix: 15.90, visuel: 'plaque', perso: { type: 'plaque', max: 12 }, metaux: ['argent', 'or'], pour: ['homme'], express: true, occasions: ['anniversaire', 'ramadan-aid'], avis: 37, desc: 'Plaque militaire en acier, gravée au laser avec le texte de ton choix. Chaîne de 55 cm.' }),
  P({ id: 'colliers-couple-couronne', nom: 'Colliers couple couronne', cat: 'colliers-personnalises', prix: 24.90, visuel: 'duo-plaque', perso: { type: 'duo', max: 10 }, metaux: ['or', 'argent'], pour: ['couple'], best: true, occasions: ['saint-valentin'], note: 4.9, avis: 63, desc: 'Deux plaques assorties avec une couronne : un prénom sur chacune. Livrées ensemble dans une pochette Zarahissi.' }),
  P({ id: 'collier-enfant', nom: 'Collier prénom enfant', cat: 'colliers-personnalises', prix: 12.90, visuel: 'nom', perso: { type: 'nom', max: 8 }, metaux: ['or', 'argent'], pour: ['enfant'], occasions: ['naissance', 'anniversaire'], avis: 19, desc: 'Une version plus petite, avec une chaîne de 35 cm adaptée aux enfants. Fermoir sécurisé.' }),
  P({ id: 'collier-pieds-bebe', nom: 'Collier maman pieds de bébé', cat: 'colliers-personnalises', prix: 19.90, visuel: 'pieds', perso: { type: 'duo', max: 8, labels: ['Prénom 1', 'Prénom 2'] }, metaux: ['or', 'argent'], occasions: ['naissance', 'fete-meres'], note: 5, avis: 52, desc: 'Deux petits pieds gravés avec les prénoms de tes enfants. Le cadeau qui fait pleurer les mamans.' }),
  P({ id: 'jonc-grave', nom: 'Bracelet jonc gravé', cat: 'bracelets-personnalises', prix: 12.90, visuel: 'jonc', perso: { type: 'barre', max: 16 }, metaux: ['or', 'argent', 'rose'], express: true, occasions: ['anniversaire', 'fete-meres'], avis: 44, desc: 'Jonc fin et ouvert, gravé à l\'intérieur ou à l\'extérieur : une date, un prénom, un mot doux.' }),
  P({ id: 'bracelet-cuir-homme', nom: 'Bracelet cuir gravé homme', cat: 'bracelets-personnalises', prix: 14.90, visuel: 'cuir', perso: { type: 'barre', max: 14 }, metaux: ['argent', 'or'], pour: ['homme'], occasions: ['anniversaire', 'ramadan-aid'], avis: 28, desc: 'Cuir tressé noir avec une barrette en acier gravée. Fermoir aimanté.' }),
  P({ id: 'bracelets-couple', nom: 'Bracelets couple gravés', cat: 'bracelets-personnalises', prix: 19.90, visuel: 'duo-bracelet', perso: { type: 'duo', max: 10 }, metaux: ['argent', 'or'], pour: ['couple'], occasions: ['saint-valentin'], avis: 33, desc: 'Deux bracelets qui s\'aimantent l\'un à l\'autre, chacun gravé d\'un prénom.' }),
  P({ id: 'bracelet-enfant', nom: 'Bracelet prénom enfant', cat: 'bracelets-personnalises', prix: 9.90, visuel: 'jonc', perso: { type: 'barre', max: 8 }, pour: ['enfant'], occasions: ['naissance'], avis: 15, desc: 'Gourmette ajustable avec plaque gravée, de 1 à 8 ans.' }),
  P({ id: 'bague-gravee', nom: 'Bague gravée femme', cat: 'bagues-personnalisees', prix: 11.90, visuel: 'bague', perso: { type: 'bague', max: 12 }, taille: true, metaux: ['or', 'argent', 'rose'], occasions: ['anniversaire'], avis: 21, desc: 'Anneau fin de 3 mm, gravé à l\'extérieur. Tailles 50 à 60.' }),
  P({ id: 'bague-homme', nom: 'Chevalière gravée homme', cat: 'bagues-personnalisees', prix: 13.90, visuel: 'bague', perso: { type: 'bague', max: 3 }, taille: true, metaux: ['argent', 'or'], pour: ['homme'], avis: 17, desc: 'Chevalière plate gravée de tes initiales. Tailles 56 à 70.' }),
  P({ id: 'bagues-couple', nom: 'Alliances couple gravées', cat: 'bagues-personnalisees', prix: 22.90, visuel: 'duo-bague', perso: { type: 'duo', max: 10 }, taille: true, metaux: ['argent', 'or'], pour: ['couple'], occasions: ['saint-valentin'], avis: 26, desc: 'Deux anneaux assortis, gravés d\'un prénom ou d\'une date.' }),
  P({ id: 'bo-initiales', nom: 'Boucles d\'oreilles initiales', cat: 'boucles-personnalisees', prix: 9.90, visuel: 'initiales', perso: { type: 'nom', max: 2 }, metaux: ['or', 'argent', 'rose'], nouveau: true, avis: 11, desc: 'Puces en forme de lettre, à ton initiale ou à celles de ton couple.' }),
  P({ id: 'cheville-prenom', nom: 'Bracelet de cheville prénom', cat: 'chevilles-personnalisees', prix: 11.90, visuel: 'cheville', perso: { type: 'nom', max: 8 }, metaux: ['or', 'argent'], nouveau: true, avis: 9, desc: 'Chaîne de cheville fine avec ton prénom. Parfait pour la plage de N\'Gouja.' }),
  P({ id: 'porte-cles-grave', nom: 'Porte-clés gravé', cat: 'porte-cles-personnalises', prix: 7.90, visuel: 'porte-cles', perso: { type: 'plaque', max: 14 }, metaux: ['argent', 'or'], pour: ['femme', 'homme'], express: true, occasions: ['anniversaire'], avis: 30, desc: 'Plaque en acier gravée : un prénom, une date, un « Sois prudent ».' }),
  P({ id: 'musique-perso', nom: 'Musique personnalisée', cat: 'musique-personnalisee', prix: 29.90, visuel: 'musique', perso: { type: 'musique' }, metaux: null, pour: ['femme', 'homme', 'couple', 'enfant'], nouveau: true, occasions: ['anniversaire', 'saint-valentin', 'naissance'], note: 5, avis: 14, desc: 'Une chanson unique composée avec le prénom et l\'histoire de la personne. Livrée en MP3 sous 7 jours.' }),

  // --- Bijoux · Bijoux des îles ---
  P({ id: 'collier-mayotte', nom: 'Collier carte de Mayotte', cat: 'colliers', collection: 'iles', ile: 'Mayotte', prix: 12.90, visuel: 'ile', best: true, note: 4.9, avis: 88, desc: 'L\'île aux parfums en pendentif. Pour la porter près du cœur, où que tu sois.' }),
  P({ id: 'collier-reunion', nom: 'Collier carte de La Réunion', cat: 'colliers', collection: 'iles', ile: 'La Réunion', prix: 12.90, visuel: 'ile', avis: 47, desc: 'L\'île intense en pendentif doré, sur une chaîne fine.' }),
  P({ id: 'collier-comores', nom: 'Collier carte des Comores', cat: 'colliers', collection: 'iles', ile: 'Comores', prix: 12.90, visuel: 'ile', avis: 39, desc: 'Les îles de la Lune réunies en un pendentif.' }),
  P({ id: 'collier-madagascar', nom: 'Collier carte de Madagascar', cat: 'colliers', collection: 'iles', ile: 'Madagascar', prix: 12.90, visuel: 'ile', avis: 31, desc: 'La Grande Île en pendentif, finition dorée.' }),
  P({ id: 'bracelet-martinique', nom: 'Bracelet Martinique', cat: 'bracelets', collection: 'iles', ile: 'Martinique', prix: 9.90, visuel: 'ile', avis: 18, desc: 'Chaîne fine avec la Martinique en breloque.' }),
  P({ id: 'bo-guadeloupe', nom: 'Boucles Guadeloupe', cat: 'boucles-oreilles', collection: 'iles', ile: 'Guadeloupe', prix: 9.90, visuel: 'ile', avis: 12, desc: 'Le papillon en boucles d\'oreilles pendantes.' }),
  // --- Ylang Ylang ---
  P({ id: 'collier-ylang', nom: 'Collier fleur d\'ylang-ylang', cat: 'colliers', collection: 'ylang', prix: 13.90, visuel: 'fleur', nouveau: true, occasions: ['fete-meres'], avis: 22, desc: 'La fleur emblème de Mayotte, ciselée en pendentif.' }),
  P({ id: 'bo-ylang', nom: 'Boucles ylang-ylang', cat: 'boucles-oreilles', collection: 'ylang', prix: 10.90, visuel: 'fleur-bo', nouveau: true, avis: 8, desc: 'Puces fleurs, assorties au collier ylang-ylang.' }),
  // --- Spirituels ---
  P({ id: 'collier-calligraphie', nom: 'Collier calligraphie Allah', cat: 'colliers', collection: 'spirituels', prix: 12.90, visuel: 'calligraphie', pour: ['femme', 'homme'], occasions: ['ramadan-aid'], avis: 35, desc: 'Pendentif en calligraphie arabe, finition miroir.' }),
  P({ id: 'bracelet-tasbih', nom: 'Bracelet tasbih perles', cat: 'bracelets', collection: 'spirituels', prix: 8.90, visuel: 'perles', pour: ['femme', 'homme'], occasions: ['ramadan-aid'], avis: 20, desc: 'Bracelet de 33 perles, en pierre naturelle.' }),
  // --- Bijoux classiques / bons plans ---
  P({ id: 'creoles', nom: 'Créoles goutte dorées', cat: 'boucles-oreilles', prix: 6.90, ancien: 9.90, visuel: 'creoles', metaux: ['or', 'argent'], best: true, note: 4.7, avis: 54, desc: 'Créoles légères, en acier qui ne noircit pas.' }),
  P({ id: 'solitaire', nom: 'Bague solitaire lagon', cat: 'bagues', prix: 7.50, visuel: 'solitaire', metaux: ['or', 'argent', 'rose'], taille: true, avis: 31, desc: 'Un zircon bleu lagon sur un anneau fin.' }),
  P({ id: 'bracelet-perles', nom: 'Bracelet perles nacrées', cat: 'bracelets', prix: 5.90, ancien: 8.90, visuel: 'perles', avis: 26, desc: 'Perles nacrées et petite breloque dorée.' }),
  P({ id: 'colliers-amitie', nom: 'Colliers amitié cœur partagé', cat: 'amitie-couples', prix: 9.90, visuel: 'coeur-partage', pour: ['femme', 'enfant'], occasions: ['anniversaire'], avis: 29, desc: 'Un cœur en deux moitiés, une pour toi et une pour ta meilleure amie.' }),
  P({ id: 'bracelets-distance', nom: 'Bracelets couple distance', cat: 'amitie-couples', prix: 12.90, ancien: 16.90, visuel: 'duo-bracelet', pour: ['couple'], occasions: ['saint-valentin'], avis: 40, desc: 'Deux bracelets en pierres naturelles, noire et blanche.' }),
  // --- Montres ---
  P({ id: 'montre-femme', nom: 'Montre femme dorée', cat: 'montres', prix: 24.90, ancien: 34.90, visuel: 'montre', metaux: ['or', 'rose'], best: true, occasions: ['fete-meres', 'anniversaire'], avis: 46, desc: 'Cadran nacré et bracelet maille milanaise.' }),
  P({ id: 'montre-homme', nom: 'Montre homme acier', cat: 'montres', prix: 29.90, visuel: 'montre', metaux: ['argent', 'or'], pour: ['homme'], occasions: ['ramadan-aid', 'anniversaire'], avis: 38, desc: 'Boîtier acier de 42 mm, étanche 3 ATM.' }),
  P({ id: 'montre-enfant', nom: 'Montre enfant', cat: 'montres', prix: 14.90, visuel: 'montre', metaux: ['argent'], pour: ['enfant'], avis: 12, desc: 'Cadran facile à lire pour apprendre l\'heure.' }),
  P({ id: 'montre-connectee', nom: 'Montre connectée', cat: 'montres-connectees', prix: 34.90, visuel: 'montre-connectee', metaux: null, pour: ['femme', 'homme'], nouveau: true, avis: 23, desc: 'Notifications, pas, sommeil et cardio. Compatible iPhone et Android.' }),
  // --- Accessoires ---
  P({ id: 'pince-perle', nom: 'Pince à cheveux perles', cat: 'cheveux', prix: 4.90, visuel: 'pince', metaux: null, avis: 17, desc: 'Grande pince ornée de perles nacrées.' }),
  P({ id: 'lunettes', nom: 'Lunettes de soleil œil-de-chat', cat: 'lunettes', prix: 9.90, ancien: 14.90, visuel: 'lunettes', metaux: null, avis: 21, desc: 'Protection UV400, monture écaille.' }),
  P({ id: 'coque-iphone', nom: 'Coque iPhone dorée', cat: 'coques-iphone', prix: 7.90, visuel: 'coque', metaux: null, pour: ['femme', 'homme'], avis: 25, desc: 'Coque transparente à contour doré, du modèle 11 au 16.' }),
  P({ id: 'support-tel', nom: 'Support téléphone voiture', cat: 'accessoires-telephone', prix: 8.90, visuel: 'support', metaux: null, pour: ['femme', 'homme'], avis: 14, desc: 'Fixation aimantée sur la grille d\'aération.' }),
  P({ id: 'lampe-lune', nom: 'Lampe lune 3D', cat: 'lampes-maison', prix: 19.90, visuel: 'lampe', metaux: null, pour: ['femme', 'homme', 'enfant'], occasions: ['noel', 'anniversaire'], avis: 19, desc: 'Lampe tactile à 16 couleurs, livrée avec sa télécommande.' }),
  // --- Cadeaux ---
  P({ id: 'carte-cadeau', nom: 'Carte cadeau Zarahissi', cat: 'carte-cadeau', prix: 20, visuel: 'carte', metaux: null, pour: ['femme', 'homme', 'couple', 'enfant'], montants: [10, 20, 30, 50], occasions: ['anniversaire', 'noel', 'ramadan-aid', 'fete-meres'], note: 5, avis: 10, desc: 'Envoyée par e-mail en quelques minutes, valable 1 an sur tout le site.' }),
  P({ id: 'calendrier-avent', nom: 'Calendrier de l\'avent bijoux', cat: 'calendrier-avent', prix: 29.90, visuel: 'calendrier', metaux: null, occasions: ['noel'], avis: 16, desc: '24 surprises : bijoux, accessoires et un bon d\'achat.' }),
];

/* ---------- Catégories (pages) ----------
   filtre : quels produits la page affiche */
const CATS = {
  'nouveautes':               { titre: 'Nouveautés', intro: 'Les dernières pièces arrivées à l\'atelier.', filtre: p => p.nouveau },
  'personnalises':            { titre: 'Produits personnalisés', intro: 'Ton prénom, ta date, ton message : gravés à ta demande.', filtre: p => !!p.perso },
  'colliers-personnalises':   { titre: 'Colliers personnalisés', parent: 'personnalises', filtre: p => p.cat === 'colliers-personnalises' },
  'bracelets-personnalises':  { titre: 'Bracelets personnalisés', parent: 'personnalises', filtre: p => p.cat === 'bracelets-personnalises' },
  'bagues-personnalisees':    { titre: 'Bagues personnalisées', parent: 'personnalises', filtre: p => p.cat === 'bagues-personnalisees' },
  'boucles-personnalisees':   { titre: 'Boucles d\'oreilles personnalisées', parent: 'personnalises', filtre: p => p.cat === 'boucles-personnalisees' },
  'chevilles-personnalisees': { titre: 'Bracelets de cheville personnalisés', parent: 'personnalises', filtre: p => p.cat === 'chevilles-personnalisees' },
  'porte-cles-personnalises': { titre: 'Porte-clés personnalisés', parent: 'personnalises', filtre: p => p.cat === 'porte-cles-personnalises' },
  'musique-personnalisee':    { titre: 'Musique personnalisée', parent: 'personnalises', filtre: p => p.cat === 'musique-personnalisee' },
  'gravure-express':          { titre: 'Gravure express', parent: 'personnalises', intro: 'Gravé et prêt en boutique à Mamoudzou, sans attendre.', filtre: p => p.express },
  'bijoux':                   { titre: 'Bijoux', intro: 'Colliers, bracelets, bagues et boucles d\'oreilles à petit prix.', filtre: p => ['colliers', 'bracelets', 'bagues', 'boucles-oreilles', 'amitie-couples'].includes(p.cat) },
  'colliers':                 { titre: 'Colliers', parent: 'bijoux', filtre: p => p.cat === 'colliers' },
  'bracelets':                { titre: 'Bracelets', parent: 'bijoux', filtre: p => p.cat === 'bracelets' },
  'bagues':                   { titre: 'Bagues', parent: 'bijoux', filtre: p => p.cat === 'bagues' },
  'boucles-oreilles':         { titre: 'Boucles d\'oreilles', parent: 'bijoux', filtre: p => p.cat === 'boucles-oreilles' },
  'bijoux-des-iles':          { titre: 'Bijoux des îles', parent: 'bijoux', intro: 'Mayotte, La Réunion, les Comores, Madagascar, la Martinique, la Guadeloupe : ton île, près du cœur.', filtre: p => p.collection === 'iles' },
  'ylang-ylang':              { titre: 'Collection Ylang Ylang', parent: 'bijoux', intro: 'La fleur emblème de Mayotte, en bijoux.', filtre: p => p.collection === 'ylang' },
  'bijoux-spirituels':        { titre: 'Bijoux spirituels', parent: 'bijoux', filtre: p => p.collection === 'spirituels' },
  'amitie-couples':           { titre: 'Amitié & couples', parent: 'bijoux', intro: 'Des bijoux assortis à partager. Tu veux les graver ? Va voir nos bijoux couple personnalisés.', filtre: p => p.cat === 'amitie-couples' },
  'montres':                  { titre: 'Montres', intro: 'Homme, femme, enfant et connectées.', filtre: p => p.cat.startsWith('montres') },
  'montres-connectees':       { titre: 'Montres connectées', parent: 'montres', filtre: p => p.cat === 'montres-connectees' },
  'accessoires':              { titre: 'Accessoires', filtre: p => ['cheveux', 'lunettes', 'coques-iphone', 'accessoires-telephone', 'lampes-maison'].includes(p.cat) },
  'cheveux':                  { titre: 'Accessoires cheveux', parent: 'accessoires', filtre: p => p.cat === 'cheveux' },
  'lunettes':                 { titre: 'Lunettes', parent: 'accessoires', filtre: p => p.cat === 'lunettes' },
  'coques-iphone':            { titre: 'Coques iPhone', parent: 'accessoires', filtre: p => p.cat === 'coques-iphone' },
  'accessoires-telephone':    { titre: 'Accessoires téléphone', parent: 'accessoires', filtre: p => p.cat === 'accessoires-telephone' },
  'lampes-maison':            { titre: 'Lampes & maison', parent: 'accessoires', filtre: p => p.cat === 'lampes-maison' },
  'idees-cadeaux':            { titre: 'Idées cadeaux', intro: 'Par occasion, par budget, ou la carte cadeau quand on hésite.', filtre: p => p.occasions.length > 0 },
  'carte-cadeau':             { titre: 'Carte cadeau', parent: 'idees-cadeaux', filtre: p => p.cat === 'carte-cadeau' },
  'calendrier-avent':         { titre: 'Calendrier de l\'avent', parent: 'idees-cadeaux', filtre: p => p.cat === 'calendrier-avent' },
  'bons-plans':               { titre: 'Bons plans', intro: 'Petits prix et promotions, tant qu\'il y en a.', filtre: p => !!p.ancien },
};
Object.keys(OCCASIONS).forEach(k => {
  CATS['cadeau-' + k] = { titre: 'Cadeaux · ' + OCCASIONS[k], parent: 'idees-cadeaux', filtre: p => p.occasions.includes(k) };
});
[10, 20, 30].forEach(n => {
  CATS['moins-de-' + n] = { titre: 'Cadeaux à moins de ' + n + ' €', parent: 'idees-cadeaux', filtre: p => p.prix < n };
});

/* ---------- Menu (7 entrées + saisonnier) ---------- */
const MENU = [
  { slug: 'nouveautes', titre: 'Nouveautés' },
  { slug: 'personnalises', titre: 'Personnalisés', visuel: 'nom', groupes: [
    { titre: 'Par article', liens: [['colliers-personnalises', 'Colliers'], ['bracelets-personnalises', 'Bracelets'], ['bagues-personnalisees', 'Bagues'], ['boucles-personnalisees', 'Boucles d\'oreilles'], ['chevilles-personnalisees', 'Bracelets de cheville'], ['porte-cles-personnalises', 'Porte-clés'], ['musique-personnalisee', 'Musique personnalisée']] },
    { titre: 'Pour qui', liens: [['personnalises?pour=femme', 'Femme'], ['personnalises?pour=homme', 'Homme'], ['personnalises?pour=couple', 'Couple'], ['personnalises?pour=enfant', 'Enfant']] },
    { titre: 'À la une', liens: [['gravure-express', 'Gravure express']] },
  ]},
  { slug: 'bijoux', titre: 'Bijoux', visuel: 'ile', groupes: [
    { titre: 'Par article', liens: [['colliers', 'Colliers'], ['bracelets', 'Bracelets'], ['bagues', 'Bagues'], ['boucles-oreilles', 'Boucles d\'oreilles']] },
    { titre: 'Collections', liens: [['bijoux-des-iles', 'Bijoux des îles'], ['ylang-ylang', 'Ylang Ylang'], ['bijoux-spirituels', 'Bijoux spirituels']] },
    { titre: 'À partager', liens: [['amitie-couples', 'Amitié & couples']] },
  ]},
  { slug: 'montres', titre: 'Montres', visuel: 'montre', groupes: [
    { titre: 'Montres', liens: [['montres?pour=homme', 'Homme'], ['montres?pour=femme', 'Femme'], ['montres?pour=enfant', 'Enfant'], ['montres-connectees', 'Connectées']] },
  ]},
  { slug: 'accessoires', titre: 'Accessoires', visuel: 'lunettes', groupes: [
    { titre: 'Accessoires', liens: [['cheveux', 'Accessoires cheveux'], ['lunettes', 'Lunettes'], ['coques-iphone', 'Coques iPhone'], ['accessoires-telephone', 'Accessoires téléphone'], ['lampes-maison', 'Lampes & maison']] },
  ]},
  { slug: 'idees-cadeaux', titre: 'Idées cadeaux', visuel: 'carte', groupes: [
    { titre: 'Par occasion', liens: Object.entries(OCCASIONS).map(([k, v]) => ['cadeau-' + k, v]) },
    { titre: 'Par budget', liens: [['moins-de-10', 'Moins de 10 €'], ['moins-de-20', 'Moins de 20 €'], ['moins-de-30', 'Moins de 30 €']] },
    { titre: 'Incontournables', liens: [['calendrier-avent', 'Calendrier de l\'avent'], ['carte-cadeau', 'Carte cadeau']] },
  ]},
  { slug: 'bons-plans', titre: 'Bons plans', promo: true },
];
/* Emplacement saisonnier : changer ce seul objet selon la période */
const SAISON = { slug: 'cadeau-ramadan-aid', titre: 'Offres Ramadan', accroche: 'Ramadan Moubarak', texte: 'Bijoux spirituels, cadeaux de l\'Aïd et gravures prêtes à temps.' };

/* Avis clients (fictifs) */
const AVIS = [
  { nom: 'Anfiati', lieu: 'Mamoudzou', note: 5, texte: 'Collier reçu en 48 h par le livreur, la gravure est parfaite. Ma fille ne le quitte plus !', produit: 'collier-prenom' },
  { nom: 'Sarah', lieu: 'Saint-Denis (Réunion)', note: 5, texte: 'Commandé pour la fête des mères, reçu en 7 jours. Très bien emballé, avec la petite carte Zarahissi.', produit: 'collier-pieds-bebe' },
  { nom: 'Houssam', lieu: 'Marseille', note: 5, texte: 'Les colliers couple sont encore plus beaux en vrai. Rapport qualité-prix imbattable.', produit: 'colliers-couple-couronne' },
  { nom: 'Kamaria', lieu: 'Dzaoudzi', note: 4, texte: 'Retrait en boutique très rapide, accueil adorable. Je reviendrai pour la bague.', produit: 'collier-mayotte' },
];

/* « Vos créations » : photos des commandes clients (à remplacer par les vraies) */
const CREATIONS = [
  { texte: 'Attoumane', visuel: 'nom', produit: 'collier-prenom' },
  { texte: 'Yamina', visuel: 'nom', produit: 'collier-prenom' },
  { texte: 'Houssam & Kamela', visuel: 'duo-plaque', produit: 'colliers-couple-couronne' },
  { texte: 'Aaliyah · Ilyes', visuel: 'pieds', produit: 'collier-pieds-bebe' },
  { texte: 'Chafia', visuel: 'coeur', produit: 'collier-coeur' },
  { texte: 'Moinecha', visuel: 'nom', produit: 'collier-prenom' },
];

const BLOG = [
  { titre: 'Gravure express : la personnalisation sans attendre', date: '28 déc. 2025', visuel: 'plaque' },
  { titre: 'Offrir un bijou personnalisé : un geste symbolique et inoubliable', date: '7 juin 2025', visuel: 'nom' },
  { titre: 'Une sélection de bijoux qui représentent vos îles préférées', date: '12 mars 2025', visuel: 'ile' },
];
