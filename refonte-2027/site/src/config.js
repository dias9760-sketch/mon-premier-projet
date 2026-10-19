/* =========================================================================
   Zarahissi 2027 · Réglages du site
   Le menu pointe vers les COLLECTIONS EXISTANTES de la boutique Wix (catalogue V1).
   Chaque entrée liste un ou plusieurs « slugs » de collection : plusieurs = union,
   `et` = intersection (ex. Personnalisés ∩ Produits femme).
   Pour changer une page, modifie la liste ici ; rien n'est modifié côté Wix.
   ========================================================================= */

export const BOUTIQUE = {
  nom: 'Zarahissi',
  adresse: 'Kavani, Mamoudzou · Quartier Vaga Musique (Mayotte)',
  tel: '0639 71 84 45',
  whatsapp: 'https://wa.me/262639718445',
  horaires: '8h30 – 18h30',
};

/* Délais fournis par Zarahissi. Les frais sont calculés par Wix au paiement. */
export const ZONES = [
  { nom: 'Mayotte', modes: [['Livreur à domicile', 'sous 48 h'], ['La Poste avec suivi', '4 à 10 jours'], ['Retrait en boutique (gratuit)', 'dès que c’est prêt, par e-mail']] },
  { nom: 'La Réunion', modes: [['La Poste avec suivi', '5 à 12 jours']] },
  { nom: 'France métropolitaine', modes: [['La Poste avec suivi', '2 à 10 jours']] },
  { nom: 'Guadeloupe', modes: [['La Poste avec suivi', '5 à 12 jours']] },
  { nom: 'Martinique', modes: [['La Poste avec suivi', '5 à 12 jours']] },
];

/* Pages de catégories : clé d'URL → titre + collections Wix */
export const PAGES = {
  'nouveautes':          { titre: 'Nouveautés', cols: ['nouveauté'], tri: 'nouveautes' },
  'meilleures-ventes':   { titre: 'Meilleures ventes', cols: ['top-meilleurs-ventes'] },
  'personnalises':       { titre: 'Produits personnalisés', intro: 'Ton prénom, ta date, ton message : gravés et préparés à Mayotte.', cols: ['produits-personnalisés'] },
  'colliers-personnalises':  { titre: 'Colliers personnalisés', parent: 'personnalises', cols: ['colliers-personnalisés'] },
  'bracelets-personnalises': { titre: 'Bracelets personnalisés', parent: 'personnalises', cols: ['bracelets-personnalisés'] },
  'bagues-personnalisees':   { titre: 'Bagues personnalisées', parent: 'personnalises', cols: ['bagues-personnalisés'] },
  'boucles-personnalisees':  { titre: 'Boucles d’oreilles personnalisées', parent: 'personnalises', cols: ['boucles-doreilles-personnalisés'] },
  'chevilles-personnalisees':{ titre: 'Bracelets de cheville personnalisés', parent: 'personnalises', cols: ['bracelets-de-cheville-personnalisés'] },
  'porte-cles-personnalises':{ titre: 'Porte-clés personnalisés', parent: 'personnalises', cols: ['portes-clés-personnalisés'] },
  'photo-personnalisee':     { titre: 'Produits photo', parent: 'personnalises', cols: ['produits-photo'] },
  'perso-femme':  { titre: 'Personnalisés · Femme', parent: 'personnalises', cols: ['produits-personnalisés'], et: ['produits-femme'] },
  'perso-homme':  { titre: 'Personnalisés · Homme', parent: 'personnalises', cols: ['produits-personnalisés'], et: ['produits-homme'] },
  'perso-couple': { titre: 'Personnalisés · Couple', parent: 'personnalises', cols: ['couples-personnalisés'] },
  'perso-enfant': { titre: 'Personnalisés · Enfant', parent: 'personnalises', cols: ['produits-enfant-personnalisés'] },
  'gravure-express': { titre: 'Gravure express', parent: 'personnalises', intro: 'Gravé et prêt rapidement en boutique, à Mamoudzou.', cols: ['gravure-express'] },
  'bijoux':            { titre: 'Bijoux', cols: ['colliers', 'bracelets', 'bagues', 'boucles-doreilles', 'colliers-bracelets-amitiés', 'colliers-bracelets-couples'] },
  'colliers':          { titre: 'Colliers', parent: 'bijoux', cols: ['colliers'] },
  'bracelets':         { titre: 'Bracelets', parent: 'bijoux', cols: ['bracelets'] },
  'bagues':            { titre: 'Bagues', parent: 'bijoux', cols: ['bagues'] },
  'boucles-oreilles':  { titre: 'Boucles d’oreilles', parent: 'bijoux', cols: ['boucles-doreilles'] },
  'piercing':          { titre: 'Piercing', parent: 'bijoux', cols: ['piercing', 'piercing-1'] },
  'bijoux-des-iles':   { titre: 'Bijoux des îles', parent: 'bijoux', intro: 'Ton île, près du cœur, où que tu sois.', cols: ['produits-des-îles'] },
  'mayotte':           { titre: 'Mayotte', parent: 'bijoux-des-iles', cols: ['produits-mayotte'] },
  'la-reunion':        { titre: 'La Réunion', parent: 'bijoux-des-iles', cols: ['produits-la-réunion'] },
  'comores':           { titre: 'Comores', parent: 'bijoux-des-iles', cols: ['comores'] },
  'madagascar':        { titre: 'Madagascar', parent: 'bijoux-des-iles', cols: ['madagascar'] },
  'martinique':        { titre: 'Martinique', parent: 'bijoux-des-iles', cols: ['martinique'] },
  'guadeloupe':        { titre: 'Guadeloupe', parent: 'bijoux-des-iles', cols: ['guadeloupe'] },
  'ylang-ylang':       { titre: 'Ylang Ylang', parent: 'bijoux', intro: 'La fleur emblème de Mayotte.', cols: ['produits-ylang-ylang'] },
  'bijoux-spirituels': { titre: 'Bijoux spirituels', parent: 'bijoux', cols: ['ramadan'] },
  'amitie-couples':    { titre: 'Amitié & couples', parent: 'bijoux', cols: ['colliers-bracelets-amitiés', 'colliers-bracelets-couples'] },
  'montres':            { titre: 'Montres', cols: ['montres'] },
  'montres-homme':      { titre: 'Montres homme', parent: 'montres', cols: ['montres-homme'] },
  'montres-femme':      { titre: 'Montres femme', parent: 'montres', cols: ['montres-femme'] },
  'montres-connectees': { titre: 'Montres connectées', parent: 'montres', cols: ['montres-connectées'] },
  'accessoires':      { titre: 'Accessoires', cols: ['lunettes', 'coques-iphone', 'coque-samsung', 'accessoires-téléphones', 'câbles-iphone-ipad', 'chargeurs-téléphone', 'lampes', 'pour-la-maison', 'maison', 'accessoires-cheveux', 'accessoires-automobile', 'beauté-santé', 'rouge-à-lèvres'] },
  'lunettes':         { titre: 'Lunettes', parent: 'accessoires', cols: ['lunettes'] },
  'telephone':        { titre: 'Coques & téléphone', parent: 'accessoires', cols: ['coques-iphone', 'coque-samsung', 'accessoires-téléphones', 'câbles-iphone-ipad', 'chargeurs-téléphone'] },
  'maison':           { titre: 'Lampes & maison', parent: 'accessoires', cols: ['lampes', 'pour-la-maison', 'maison'] },
  'beaute':           { titre: 'Beauté', parent: 'accessoires', cols: ['beauté-santé', 'rouge-à-lèvres', 'accessoires-cheveux'] },
  'idees-cadeaux':    { titre: 'Idées cadeaux', intro: 'Par occasion ou par budget.', cols: ['fete-des-meres', 'saint-valentin', 'fête-des-pères', 'ramadan-1'] },
  'fete-des-meres':   { titre: 'Fête des mères', parent: 'idees-cadeaux', cols: ['fete-des-meres'] },
  'fete-des-peres':   { titre: 'Fête des pères', parent: 'idees-cadeaux', cols: ['fête-des-pères'] },
  'saint-valentin':   { titre: 'Saint-Valentin', parent: 'idees-cadeaux', cols: ['saint-valentin'] },
  'ramadan':          { titre: 'Ramadan & Aïd', parent: 'idees-cadeaux', cols: ['ramadan-1'] },
  'moins-de-10':      { titre: 'Cadeaux à moins de 10 €', parent: 'idees-cadeaux', prixMax: 9.99 },
  'moins-de-20':      { titre: 'Cadeaux à moins de 20 €', parent: 'idees-cadeaux', prixMax: 19.99 },
  'tout-a-20':        { titre: 'Tout à 20 €', parent: 'idees-cadeaux', cols: ['tout-a-20'] },
  'bons-plans':       { titre: 'Bons plans', intro: 'Petits prix et promotions, tant qu’il y en a.', cols: ['bon-plan-zarahissi', 'soldes-ete', '1-acheté-1-offert'] },
};

/* Emplacement saisonnier : un seul objet à changer selon la période */
export const SAISON = { page: 'ramadan', titre: 'Offres Ramadan' };

/* Menu (7 entrées) */
export const MENU = [
  { page: 'nouveautes', titre: 'Nouveautés' },
  { page: 'personnalises', titre: 'Personnalisés', groupes: [
    { titre: 'Par article', liens: ['colliers-personnalises', 'bracelets-personnalises', 'bagues-personnalisees', 'boucles-personnalisees', 'chevilles-personnalisees', 'porte-cles-personnalises', 'photo-personnalisee', ['p/musique-personnalisée', 'Musique personnalisée']] },
    { titre: 'Pour qui', liens: [['perso-femme', 'Femme'], ['perso-homme', 'Homme'], ['perso-couple', 'Couple'], ['perso-enfant', 'Enfant']] },
    { titre: 'À la une', liens: ['gravure-express', 'meilleures-ventes'] },
  ]},
  { page: 'bijoux', titre: 'Bijoux', groupes: [
    { titre: 'Par article', liens: ['colliers', 'bracelets', 'bagues', 'boucles-oreilles', 'piercing'] },
    { titre: 'Collections', liens: ['bijoux-des-iles', 'ylang-ylang', 'bijoux-spirituels'] },
    { titre: 'À partager', liens: ['amitie-couples'] },
  ]},
  { page: 'montres', titre: 'Montres', groupes: [
    { titre: 'Montres', liens: ['montres-homme', 'montres-femme', 'montres-connectees'] },
  ]},
  { page: 'accessoires', titre: 'Accessoires', groupes: [
    { titre: 'Accessoires', liens: ['lunettes', 'telephone', 'maison', 'beaute'] },
  ]},
  { page: 'idees-cadeaux', titre: 'Idées cadeaux', groupes: [
    { titre: 'Par occasion', liens: ['ramadan', 'fete-des-meres', 'fete-des-peres', 'saint-valentin'] },
    { titre: 'Par budget', liens: ['moins-de-10', 'moins-de-20', 'tout-a-20'] },
  ]},
  { page: 'bons-plans', titre: 'Bons plans', promo: true },
];

/* Mots mal tapés fréquents → mot du catalogue (recherche) */
export const SYNONYMES = {
  colier: 'collier', coliers: 'collier', braclet: 'bracelet', bracelé: 'bracelet', bracellet: 'bracelet',
  mayote: 'mayotte', maore: 'mayotte', reunion: 'réunion', bebe: 'bébé', prenom: 'prénom', bague: 'bague',
  boucle: 'boucle', montre: 'montre', grave: 'gravé', gravure: 'personnalisé', perso: 'personnalisé',
  coeur: 'cœur', comore: 'comores', madagaskar: 'madagascar',
};
