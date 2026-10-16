
/* ---------- Icônes ---------- */
const I = {
  bag:'<path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  sparkle:'<path d="M12 3c.6 4 2 5.4 6 6-4 .6-5.4 2-6 6-.6-4-2-5.4-6-6 4-.6 5.4-2 6-6z"/><path d="M19 15c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5z"/>',
  home:'<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
  phone:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
  basket:'<path d="M4 10h16l-2 10H6z"/><path d="M8 10l4-6 4 6"/><path d="M10 14v3M14 14v3"/>',
  baby:'<circle cx="12" cy="8" r="4"/><path d="M5 21c1-4 4-6 7-6s6 2 7 6"/><path d="M10.5 8h.01M13.5 8h.01"/>',
  fork:'<path d="M7 3v18M4 3v5a3 3 0 0 0 6 0V3M17 3c-2.5 2-2.5 7 0 9v9"/>',
  car:'<path d="M4 16l2-6h12l2 6v3H4z"/><path d="M6 10l1.5-4h9L18 10"/><circle cx="8" cy="16" r="1.3"/><circle cx="16" cy="16" r="1.3"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
  tool:'<path d="M15 4a4 4 0 0 0-3.6 5.7L4 17a2 2 0 1 0 3 3l7.3-7.4A4 4 0 0 0 20 9l-2.5 2.5-3-3L17 6a4 4 0 0 0-2-2z"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
  call:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  check:'<path d="M5 12l5 5L20 7"/>',
  badge:'<path d="M12 2l2.4 2.2 3.2-.4.9 3.1 2.9 1.5-1.2 3 1.2 3-2.9 1.5-.9 3.1-3.2-.4L12 22l-2.4-2.2-3.2.4-.9-3.1-2.9-1.5 1.2-3-1.2-3 2.9-1.5.9-3.1 3.2.4z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  up:'<path d="M7 11v9H4v-9zM7 11l4-8a2 2 0 0 1 2 2v4h5.5a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.3 20H7"/>',
  down:'<path d="M7 13V4H4v9zM7 13l4 8a2 2 0 0 0 2-2v-4h5.5a2 2 0 0 0 2-2.3l-1.2-7A2 2 0 0 0 17.3 4H7"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  left:'<path d="M15 5l-7 7 7 7"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  store:'<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9h16v1a3 3 0 0 1-5.3 2 3 3 0 0 1-5.4 0A3 3 0 0 1 4 10z"/><path d="M5 12v8h14v-8"/><path d="M10 20v-4h4v4"/>',
  ext:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
};
const ic = (n, extra='') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${I[n]}</svg>`;

/* ---------- Données ---------- */
const CATS = [
  {slug:'shopping', name:'Shopping', icon:'bag', c:['#E4502F','#FF9A4D','#FFE27A']},
  {slug:'beaute', name:'Beauté', icon:'sparkle', c:['#8C4A7A','#D77FA1','#FFE2A8']},
  {slug:'maison', name:'Maison', icon:'home', c:['#2E8B57','#7CC49A','#FFC53D']},
  {slug:'high-tech', name:'High-Tech', icon:'phone', c:['#1D4E89','#4C8BD6','#9FE3DC']},
  {slug:'alimentation', name:'Alimentation', icon:'basket', c:['#A4561B','#E39A4B','#FFE08A']},
  {slug:'enfants', name:'Enfants', icon:'baby', c:['#3B7FB0','#8CC9E8','#FFD76A']},
  {slug:'restaurants', name:'Restaurants', icon:'fork', c:['#B5452A','#EB8456','#FFD56A']},
  {slug:'auto', name:'Automobile', icon:'car', c:['#334E58','#6F8C96','#FFC53D']},
  {slug:'loisirs', name:'Loisirs', icon:'sun', c:['#0B6E93','#1FB5C9','#FFD04F']},
  {slug:'services', name:'Services', icon:'tool', c:['#4B5D2E','#8FAE55','#FFE08A']}
];
const catBy = s => CATS.find(c=>c.slug===s);

let B = [
 ['zarahissi','Zarahissi Maore','shopping','Bijoux et accessoires faits pour sublimer toutes les tenues.','50 rue Nouvelle Briqueterie, 97600 Mamoudzou','+262 639 71 84 45','https://www.zarahissi.com','contact@zarahissi.com'],
 ['coffret-yangou','Coffret Yangou','shopping','Coffrets cadeaux composés en ligne et livrés à Mayotte.','21 rue Kamardine, 97600 Mamoudzou','+262 639 71 84 45','https://www.coffretyangou.com','coffretyangou@gmail.com'],
 ['my-affro','My Affro','beaute','Produits capillaires pour cheveux bouclés, frisés et crépus.','2 rue du Coton, 75010 Paris','','https://myaffro.com/','myaffro@gmail.com'],
 ['oishii','Oishii','alimentation','Épicerie fine et marchandises générales.','4 route du RSMA, Combani, 97680 Tsingoni','+262 639 05 16 16','https://oishii.yt/','contact@oishii.yt'],
 ['volutes-coffee-shop','Volutes Coffee Shop','alimentation','Un concept qui mêle vape, coffee-shop et salon de thé : cafés et thés rares.','7 immeuble Archipel, 97600 Mamoudzou','+262 639 05 39 05','https://les-volutes.shop/','contact@les-volutes.com'],
 ['encreco','Encr\'Eco','high-tech','Cartouches d\'encre et toners éco-responsables, en ligne depuis 2009.','Immeuble Archipel n°9, Kawéni, 97600 Mamoudzou','0269 63 73 99','https://encreco.yt/','contact@encreco.yt'],
 ['arome-d-orient','Arôme d\'Orient','beaute','Parfums orientaux en ligne à Mayotte.','8 chemin Moizari, Mzé Boina, 97640 Sada','+262 639 27 34 30','https://aromedorient.yt/','contact@aromedorient.yt'],
 ['bweni','Bweni','shopping','Tissus traditionnels, bodys et bijoux.','Nantes, France','+33 7 56 98 32 81','https://bweni.com/','contact@bweni.com'],
 ['univers-ktech','Univers K\'Tech','maison','Magasin spécialisé en appareils électroménagers.','24 rue du Commerce, 97600 Mamoudzou','+262 639 19 33 62','https://universktech.com/','univers.ktech@gmail.com'],
 ['meubles110','Meubles110','maison','Meubles et décoration : chambre, salon, salle à manger, vaisselle, linge de maison.','Rue de la Grande Traversée, immeuble Archipel, Kawéni, 97600 Mamoudzou','0269 60 18 80','https://meubles110.yt/','decorama110@gmail.com'],
 ['cazdeco','Cazdeco','maison','Meubles, objets mobiliers et tout pour l\'ameublement.','1 impasse Maharaja, Kawéni','+262 639 57 78 37','https://www.cazdeco.fr/','cazdeco976@gmail.com'],
 ['mayanadistrib','Mayanadistrib','shopping','Multimédia, informatique, électroménager, mobilier, bricolage, mode et sport.','15 ruelle Mjimpia, 97650 Mtsangamouji','+262 639 28 09 89','https://mayanadistrib.yt/','contact@mayanadistrib.com'],
 ['zazaland','Zazaland','enfants','Jeux, jouets et accessoires pour enfants.','25 rue du Commerce, 97600 Mamoudzou','+262 639 29 32 35','https://zazaland.fr/','zazaland.yt@gmail.com'],
 ['mhd','MHD','maison','Meubles, décoration et articles divers pour la maison.','13 rue du Commerce, 97600 Mamoudzou','+262 269 66 48 90','https://mhd.yt/','contact@mhd.yt'],
 ['mayphone','Mayphone','high-tech','Smartphones, tablettes, accessoires et service de réparation.','35 rue du Stade, quartier Koumbini, 97640 Sada','+262 692 76 55 15','https://www.mayphone.yt/','contact@mayphone.yt'],
 ['infusions2mayotte','Infusions2Mayotte','alimentation','Infusions aux saveurs de Mayotte : le dité mahoré.','06000 Nice','','https://www.infusions2mayotte.com/','infusions2mayotte@gmail.com'],
 ['maji-mewou','Maji Mewou','maison','Solutions de filtration d\'eau pour la maison.','2 impasse Sandati Assani Madi, 97640 Sada','+262 639 25 11 73','https://www.majimewou.com/','contact@majimewou.com'],
 ['samcom','Samcom','shopping','Multimédia, mobilier, électroménager, informatique, puériculture et bien plus.','Route nationale, quartier Lambic, 97600 Koungou','+262 269 63 21 41','https://samcom.yt/','contact@samhightech.fr'],
 ['doukamay','Doukamay','shopping','Marketplace : produits high-tech et articles divers.','43 rue Zévougnou, 97650 Mtsangamouji','+262 639 94 07 07','https://doukamay.com/','contact@doukamay.com'],
 ['cjumo','Cjumo','alimentation','E-commerce à prix discount à Mayotte.','3 rue de la Mosquée, Hapandzo, 97670 Ouangani','+262 639 60 09 60','https://www.cjumo.yt/','issoufia5@gmail.com'],
 ['maore-discount','Maore Discount','shopping','E-commerce à prix discount à Mayotte.','Lot 5 ZI NEL, Kawéni, 97600 Mamoudzou','+262 269 66 70 36','https://www.maorediscount.yt/','contact@maorediscount.com'],
 ['bebe-wangou','Bébé Wangou','enfants','Produits et accessoires pour bébés et enfants.','2 rue du Stade de foot, 97680 Tsingoni','+262 269 62 14 41','https://www.bebewangou.com/','contact@bebewangou.com'],
 ['meubles-et-deco','Meubles et Déco','maison','Meubles, décoration et articles divers pour la maison.','Impasse derrière les pompiers, Kawéni, 97600 Mamoudzou','+262 269 64 50 59','https://meublesetdeco.net/','responsablemd@meublesetdeco.fr'],
 ['mzuri-sana','Mzuri Sana','shopping','Bijoux et montres artisanaux inspirés de Mayotte.','Centre commercial Baobab, Cavani, 97600 Mamoudzou','+262 639 94 68 56','https://mzurisana.fr/','serviceclient@mzurisana.fr'],
 ['maison-surbon','Maison Surbon','shopping','Vêtements et accessoires.','500 rue de l\'École primaire, Gnambotiti, 97605 Passamainty','+262 639 28 97 38','https://maisonsurbon.com/','contact@maisonsurbon.com'],
 ['caribou-bebe','Caribou Bébé','enfants','Magasin spécialisé en puériculture à Mamoudzou.','2 immeuble Amine Djouma, RN1, 97600 Mamoudzou','+262 269 60 26 19','https://boutique.cariboubebe.com/','cariboubebem@gmail.com'],
 ['mayplaytech','Mayplaytech','high-tech','Ordinateurs, périphériques et logiciels.','26 impasse des Avocats, 97600 Mamoudzou','+262 692 46 95 95','https://mayplaytech.yt/','contact@mayplaytech.yt'],
 ['samani','Samani','maison','Mobilier, luminaires et objets de décoration.','Zone commerciale Les Vitrines, M\'gombani, RN2, 97600 Mamoudzou','+262 269 66 91 78','https://samani.yt/','contact@samani.yt'],
 ['jeleo-boutique','Jeleo Boutique','shopping','Lingerie, vêtements, chaussures, bijoux, maroquinerie, déco et cuisine.','125 avenue Saïd Vitta, lot 11, 97620 Chirongui','+262 639 72 72 26','https://jeleoboutique.fr/','contact@jeleoboutique.fr'],
 ['lovely-mayotte','Lovely Mayotte','shopping','Tee-shirts éthiques et éco-responsables.','France','','https://lovelymayotte.yt/fr/','digital@kannel.io'],
 ['la-mahoraise','La Mahoraise','shopping','Vêtements traditionnels et accessoires mahorais.','178 rue PPF, 97650 Bandraboua','+262 639 69 45 11','https://www.lamahoraise.yt/','contact.lamahoraise@gmail.com'],
 ['sunday-officiel','Sunday Officiel','shopping','Lingerie, sportswear, homewear, maillots de bain et bijoux.','Rue du Cinéma (à côté du Nabab), 97600 Mamoudzou','+262 639 39 09 62','https://www.sundayofficiel.com/','sundayofficiel@gmail.com'],
 ['perles-haliades','Perles Haliades','shopping','Fiche en cours de complétion.','','','https://perles-haliades.com/',''],
 ['noor-festivities','Noor Festivities','loisirs','Fiche en cours de complétion.','','','https://noorfestivities.com/','']
].map(([slug,name,cat,desc,addr,phone,web,email])=>({slug,name,cat,desc,addr,phone,web,email}));
const bizBy = s => B.find(b=>b.slug===s) || {slug:s,name:'Entreprise',cat:'shopping',desc:'',addr:'',phone:'',web:'',email:'',commune:'',hours:'',logo:'',pos:null,sale:'',owners:[]};

/* ---------- Communes ---------- */
const MAP_SRC='https://static.wixstatic.com/media/321566_8478a6cb009347da934a058634243290~mv2.webp';
const COMMUNES=[{"slug": "mtsamboro", "name": "Mtsamboro", "polys": [[[150, 270], [200, 210], [270, 170], [300, 120], [350, 90], [355, 130], [315, 170], [290, 245], [315, 330], [185, 315]], [[35, 60], [70, 35], [120, 75], [95, 100], [60, 120], [30, 75]]]}, {"slug": "acoua", "name": "Acoua", "polys": [[[105, 355], [145, 275], [185, 315], [315, 330], [310, 395], [210, 410], [120, 450], [115, 430]]]}, {"slug": "bandraboua", "name": "Bandraboua", "polys": [[[290, 245], [315, 170], [380, 215], [420, 300], [490, 375], [535, 495], [420, 470], [335, 420], [310, 395], [315, 330]]]}, {"slug": "mtsangamouji", "name": "M'Tsangamouji", "polys": [[[120, 450], [210, 410], [310, 395], [335, 420], [420, 470], [335, 545], [300, 535], [200, 500], [150, 480]]]}, {"slug": "koungou", "name": "Koungou", "polys": [[[490, 375], [560, 345], [600, 390], [700, 400], [790, 440], [825, 475], [690, 515], [535, 495]]]}, {"slug": "tsingoni", "name": "Tsingoni", "polys": [[[335, 545], [420, 470], [535, 495], [595, 505], [580, 560], [520, 660], [450, 685], [330, 640], [305, 590]]]}, {"slug": "mamoudzou", "name": "Mamoudzou", "polys": [[[595, 505], [690, 515], [825, 475], [835, 580], [760, 650], [680, 730], [530, 720], [520, 660], [580, 560]]]}, {"slug": "dzaoudzi", "name": "Dzaoudzi", "polys": [[[885, 575], [935, 560], [1000, 495], [1055, 580], [1045, 590], [950, 620], [905, 600]]]}, {"slug": "pamandzi", "name": "Pamandzi", "polys": [[[950, 620], [1045, 590], [1050, 650], [1020, 710], [990, 690], [960, 665]]]}, {"slug": "chiconi", "name": "Chiconi", "polys": [[[330, 655], [410, 675], [420, 795], [380, 800], [330, 775], [335, 700]]]}, {"slug": "ouangani", "name": "Ouangani", "polys": [[[410, 675], [520, 660], [530, 720], [480, 760], [500, 790], [520, 915], [465, 905], [410, 800]]]}, {"slug": "dembeni", "name": "Dembéni", "polys": [[[530, 720], [680, 730], [665, 790], [690, 870], [770, 910], [665, 960], [620, 965], [560, 945], [520, 915], [500, 790], [480, 760]]]}, {"slug": "sada", "name": "Sada", "polys": [[[300, 840], [330, 820], [380, 800], [410, 800], [465, 905], [445, 965], [420, 945], [360, 890], [310, 860]]]}, {"slug": "chirongui", "name": "Chirongui", "polys": [[[465, 905], [520, 915], [560, 945], [570, 1055], [545, 1150], [530, 1235], [485, 1260], [400, 1150], [440, 1140], [495, 1090], [445, 960]]]}, {"slug": "bandrele", "name": "Bandrélé", "polys": [[[560, 945], [620, 965], [665, 960], [770, 910], [740, 1000], [690, 1020], [720, 1095], [635, 1110], [625, 1155], [655, 1240], [710, 1295], [680, 1320], [600, 1370], [530, 1330], [485, 1260], [530, 1235], [545, 1150], [570, 1055]]]}, {"slug": "boueni", "name": "Bouéni", "polys": [[[220, 1015], [310, 1005], [340, 1070], [420, 1120], [400, 1150], [370, 1180], [270, 1240], [245, 1245], [330, 1195], [310, 1130], [270, 1110], [250, 1060]]]}, {"slug": "kani-keli", "name": "Kani-Kéli", "polys": [[[270, 1240], [370, 1180], [400, 1150], [485, 1260], [530, 1330], [530, 1390], [470, 1395], [440, 1350], [360, 1330], [345, 1260]]]}];
const comBy=s=>COMMUNES.find(c=>c.slug===s);
const COMMUNE_OF={zarahissi:'mamoudzou','coffret-yangou':'mamoudzou',oishii:'tsingoni','volutes-coffee-shop':'mamoudzou',encreco:'mamoudzou','arome-d-orient':'sada','univers-ktech':'mamoudzou',meubles110:'mamoudzou',cazdeco:'mamoudzou',mayanadistrib:'mtsangamouji',zazaland:'mamoudzou',mhd:'mamoudzou',mayphone:'sada','maji-mewou':'sada',samcom:'koungou',doukamay:'mtsangamouji',cjumo:'ouangani','maore-discount':'mamoudzou','bebe-wangou':'tsingoni','meubles-et-deco':'mamoudzou','mzuri-sana':'mamoudzou','maison-surbon':'mamoudzou','caribou-bebe':'mamoudzou',mayplaytech:'mamoudzou',samani:'mamoudzou','jeleo-boutique':'chirongui','la-mahoraise':'bandraboua','sunday-officiel':'mamoudzou'};
B.forEach(b=>b.commune=COMMUNE_OF[b.slug]||'');


const TODAY = new Date(); TODAY.setHours(0,0,0,0);
const inDays = n => { const d = new Date(TODAY); d.setDate(d.getDate()+n); return d; };

/* ---------- Connexion au CMS Wix ---------- */
const WIX_CLIENT_ID='5ead703b-03d1-45f5-8049-74802f2b86f2';
const API='https://www.wixapis.com';
// Application de connexion « site web » dédiée aux membres (l'application d'origine refuse les sessions membres : unauthorized_client).
const AUTH_CLIENT_ID='9690cc23-501a-485e-94f7-a5ba951cb9c8';
let authVisitorPromise=null;
function getAuthVisitorToken(){
  if(!authVisitorPromise){
    authVisitorPromise=fetch(API+'/oauth2/token',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:AUTH_CLIENT_ID,grantType:'anonymous'})})
      .then(r=>{ if(!r.ok) throw new Error('token '+r.status); return r.json(); }).then(j=>j.access_token);
    authVisitorPromise.catch(()=>{authVisitorPromise=null;});
  }
  return authVisitorPromise;
}
let baseCodes=[];
let bizId={};
let EVENTS=[];
let VOTES=[];
let MOROS=[];
let COMMENTS=[], LIKES=[], REPORTS=[], MODERATION={};
let DEMANDES=[], PARRAINAGES=[], RECOMPENSES=[], TEMPS=[];
let dataSource='snapshot';
let tokenPromise=null;
function getVisitorToken(){
  if(!tokenPromise){
    tokenPromise=(async()=>{
      try{ const t=JSON.parse(localStorage.getItem('bonszahe:token')||'null'); if(t&&t.exp>Date.now()+60000) return t.access; }catch(e){}
      const r=await fetch(API+'/oauth2/token',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:WIX_CLIENT_ID,grantType:'anonymous'})});
      if(!r.ok) throw new Error('token '+r.status);
      const j=await r.json();
      try{ localStorage.setItem('bonszahe:token',JSON.stringify({access:j.access_token,exp:Date.now()+(j.expires_in||14400)*1000})); }catch(e){}
      return j.access_token;
    })();
    tokenPromise.catch(()=>{tokenPromise=null;});
  }
  return tokenPromise;
}

/* ---------- Compte membre (connexion sécurisée Wix) ---------- */
const AUTH_KEY='bonszahe:member';
let AUTH=null; // {access, refresh, exp, member:{id,name,email}}
try{ AUTH=JSON.parse(localStorage.getItem(AUTH_KEY)||'null'); }catch(e){}
const saveAuth=()=>{ try{ AUTH?localStorage.setItem(AUTH_KEY,JSON.stringify(AUTH)):localStorage.removeItem(AUTH_KEY); }catch(e){} };
const me=()=>AUTH&&AUTH.member;
async function getToken(){
  if(!AUTH) return getVisitorToken();
  if(AUTH.exp>Date.now()+60000) return AUTH.access;
  const r=await fetch(API+'/oauth2/token',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:AUTH_CLIENT_ID,grantType:'refresh_token',refreshToken:AUTH.refresh})});
  if(!r.ok){ AUTH=null; saveAuth(); return getVisitorToken(); }
  const j=await r.json();
  AUTH.access=j.access_token; AUTH.exp=Date.now()+(j.expires_in||14400)*1000; if(j.refresh_token) AUTH.refresh=j.refresh_token; saveAuth();
  return AUTH.access;
}
async function call(method,path,body,tok){
  const auth=tok||await getToken();
  const r=await fetch(API+path,{method,headers:{'Content-Type':'application/json','Authorization':auth},body:body===undefined?undefined:JSON.stringify(body)});
  const txt=await r.text();
  let j={}; try{ j=txt?JSON.parse(txt):{}; }catch(e){}
  if(!r.ok){ const err=new Error(path+' '+r.status+' '+txt.slice(0,200)); err.status=r.status; err.data=j; throw err; }
  return j;
}
const wix=(path,body)=>call('POST',path,body);

const b64url=buf=>btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const randomStr=()=>b64url(crypto.getRandomValues(new Uint8Array(32)));
// Transforme le sessionToken (connexion ou inscription) en jetons membre, via un iframe invisible (PKCE).
async function authSession(sessionToken,responseMode,extra){
  const verifier=randomStr(), state=randomStr();
  const challenge=b64url(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(verifier)));
  const rs=await call('POST','/_api/redirects-api/v1/redirect-session',{auth:{authRequest:Object.assign({clientId:AUTH_CLIENT_ID,codeChallenge:challenge,codeChallengeMethod:'S256',responseMode,responseType:'code',scope:'offline_access',state,sessionToken},extra||{})}},await getAuthVisitorToken());
  return {url:rs.redirectSession.fullUrl,verifier,state};
}
const RETURN_URI=location.origin+'/';
async function finishLogin(sessionToken){
  let got;
  try{ got=await iframeCode(sessionToken); }
  catch(e){
    // Secours : passage par la page Wix puis retour sur le site (?code=…&state=…).
    console.warn('Connexion par iframe impossible, redirection',e);
    const s=await authSession(sessionToken,'query',{redirectUri:RETURN_URI});
    try{ localStorage.setItem('bonszahe:pkce',JSON.stringify({verifier:s.verifier,state:s.state,back:location.hash})); }catch(_){}
    location.href=s.url;
    await new Promise(()=>{});
  }
  await completeLogin(got.code,got.verifier);
}
// Retour de la page Wix : échange du code contre les jetons membre.
let loginNotice='';
async function resumeRedirectLogin(){
  const h=location.hash.startsWith('#/')?'':location.hash.slice(1);
  const q=new URLSearchParams(location.search+(h?'&'+h:''));
  const code=q.get('code'), state=q.get('state'), error=q.get('error');
  if(!code&&!error) return;
  let saved=null; try{ saved=JSON.parse(localStorage.getItem('bonszahe:pkce')||'null'); localStorage.removeItem('bonszahe:pkce'); }catch(_){}
  history.replaceState(null,'',RETURN_URI+((saved&&saved.back&&saved.back.startsWith('#/'))?saved.back:'#/profil'));
  if(error){ loginNotice=`Wix a refusé la connexion (${error}${q.get('error_description')?' : '+q.get('error_description'):''}). Réessayez ou envoyez une capture à Bonszahé.`; return; }
  if(!saved){ loginNotice='Connexion interrompue (session de connexion introuvable). Réessayez.'; return; }
  if(saved.state!==state){ loginNotice='Connexion interrompue (vérification de sécurité différente). Réessayez.'; return; }
  try{ await completeLogin(code,saved.verifier,RETURN_URI); loginNotice=''; setTimeout(()=>toast(`Bienvenue ${me().name} !`),300); }
  catch(e){ console.warn(e); loginNotice=`Connexion impossible (${(e.data&&(e.data.error||e.data.message))||e.status||e.message}). Réessayez.`; }
}
async function completeLogin(code,verifier,redirectUri){
  const t=await call('POST','/oauth2/token',Object.assign({clientId:AUTH_CLIENT_ID,grantType:'authorization_code',code,codeVerifier:verifier},redirectUri?{redirectUri}:{}),await getAuthVisitorToken());
  AUTH={access:t.access_token,refresh:t.refresh_token,exp:Date.now()+(t.expires_in||14400)*1000,member:null};
  const m=(await call('GET','/members/v1/members/my',undefined,t.access_token)).member||{};
  const p=m.profile||{};
  AUTH.member={id:m.id,name:p.nickname||[p.firstName,p.lastName].filter(Boolean).join(' ')||(m.loginEmail||'').split('@')[0]||'Membre',email:m.loginEmail||'',verified:!!m.loginEmailVerified};
  saveAuth();
  await loadMine();
  await recordReferral(m.createdDate||m._createdDate);
}
async function iframeCode(sessionToken){
  const {url,verifier,state}=await authSession(sessionToken,'web_message');
  const code=await new Promise((resolve,reject)=>{
    const frame=document.createElement('iframe'); frame.style.display='none'; frame.title='Connexion';
    const timer=setTimeout(()=>{ cleanup(); reject(new Error('timeout')); },12000);
    function cleanup(){ clearTimeout(timer); window.removeEventListener('message',onMsg); frame.remove(); }
    function onMsg(e){
      let d=e.data; if(typeof d==='string'){ try{ d=JSON.parse(d); }catch(_){ return; } }
      if(!d||d.state!==state) return;
      cleanup(); d.code?resolve(d.code):reject(new Error(d.error||'auth'));
    }
    window.addEventListener('message',onMsg);
    frame.src=url; document.body.appendChild(frame);
  });
  return {code,verifier};
}
// Gère la réponse de Login V2 / Register V2 / Verify : SUCCESS, vérification e-mail ou approbation.
async function handleAuthState(res){
  if(res.state==='SUCCESS'&&res.sessionToken){ await finishLogin(res.sessionToken); return 'ok'; }
  if(res.state==='REQUIRE_EMAIL_VERIFICATION'){ pendingState=res.stateToken; return 'verify'; }
  if(res.state==='REQUIRE_OWNER_APPROVAL') return 'approval';
  return 'error';
}
let pendingState=null;
function logout(){ AUTH=null; saveAuth(); MINE={proposals:[],claims:[],edits:[],events:[],alerts:[]}; }

// reCAPTCHA exigé par Wix pour l'inscription et la connexion (clés Wix, script « enterprise »).
const RC_INVISIBLE='6LdoPaUfAAAAAJphvHoUoOob7mx0KDlXyXlgrx5v', RC_VISIBLE='6Ld0J8IcAAAAANyrnxzrRlX1xrrdXsOmsepUYosy';
let rcReady=null, rcVisibleToken='';
function loadRecaptcha(){
  if(!rcReady) rcReady=new Promise((resolve,reject)=>{
    const s=document.createElement('script');
    s.src='https://www.google.com/recaptcha/enterprise.js?render='+RC_INVISIBLE; s.async=true;
    s.onload=()=>window.grecaptcha.enterprise.ready(resolve);
    s.onerror=()=>{ rcReady=null; reject(new Error('recaptcha')); };
    document.head.appendChild(s);
  });
  return rcReady;
}
async function captchaTokens(action){
  if(rcVisibleToken) return [{Recaptcha:rcVisibleToken}];
  await loadRecaptcha();
  return [{InvisibleRecaptcha:await window.grecaptcha.enterprise.execute(RC_INVISIBLE,{action})}];
}
async function showVisibleCaptcha(){
  await loadRecaptcha();
  const box=document.getElementById('captchaBox'); if(!box) return;
  box.hidden=false; box.innerHTML=''; rcVisibleToken='';
  window.grecaptcha.enterprise.render(box,{sitekey:RC_VISIBLE,callback:t=>{ rcVisibleToken=t; },'expired-callback':()=>{ rcVisibleToken=''; }});
}
const isCaptchaError=err=>/CAPTCHA/i.test(JSON.stringify(err&&err.data||{})+String(err&&err.message||''));

// Traduit l'erreur Wix (details.applicationError.code) en message clair.
function authError(err){
  const d=err&&err.data||{}; const app=(d.details&&d.details.applicationError)||{};
  const code=String(app.code||d.code||''); const k=(code+' '+(app.description||d.message||'')).toUpperCase();
  if(/CAPTCHA/.test(k)||/recaptcha/i.test(String(err&&err.message||''))) return 'Cochez la case « Je ne suis pas un robot » ci-dessus, puis réessayez.';
  if(/NOT_FOUND|NOT_EXIST|NO_IDENTITY|NO_MEMBER/.test(k)) return 'Aucun compte avec cet e-mail. Choisissez « Créer un compte ».';
  if(/ALREADY/.test(k)) return 'Un compte existe déjà avec cet e-mail. Choisissez « Se connecter » (ou « Mot de passe oublié ? »).';
  if(/INVALID_PASSWORD|WRONG_PASSWORD|INCORRECT|INVALID_CREDENTIALS|INVALID_LOGIN/.test(k)) return 'E-mail ou mot de passe incorrect.';
  if(/PASSWORD/.test(k)) return 'Mot de passe refusé : choisissez-en un plus long, avec des lettres et des chiffres.';
  if(/VERIFICATION|INVALID_CODE|CODE_EXPIRED|EXPIRED/.test(k)) return 'Code incorrect ou expiré.';
  if(/BLOCK|DENIED|PERMISSION|FORBIDDEN/.test(k)) return 'Ce compte ne peut pas se connecter au site. Contactez Bonszahé.';
  return `Connexion impossible pour le moment (${code||err&&err.status||'erreur'}). Réessayez dans un instant.`;
}

async function queryAll(collection,filter){
  let out=[],offset=0;
  for(let i=0;i<20;i++){
    const j=await wix('/wix-data/v2/items/query',{dataCollectionId:collection,query:Object.assign({paging:{limit:1000,offset}},filter?{filter}:{}),returnTotalCount:true});
    const items=(j.dataItems||[]).map(x=>x.data||{});
    out=out.concat(items);
    const total=j.pagingMetadata&&j.pagingMetadata.total;
    if(!items.length||!total||out.length>=total) break;
    offset=out.length;
  }
  return out;
}
const key = s => norm(s).replace(/[^a-z0-9]/g,'');
const slugify = s => norm(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function catFrom(v){
  const k=key(v); if(!k) return 'shopping';
  const hit=CATS.find(c=>key(c.name)===k||key(c.slug)===k) || CATS.find(c=>k.startsWith(key(c.name).slice(0,5)));
  return hit?hit.slug:(k.startsWith('auto')?'auto':'services');
}
function communeFrom(v){ const k=key(v); if(!k) return ''; const hit=COMMUNES.find(c=>key(c.name)===k||key(c.slug)===k); return hit?hit.slug:''; }
function dateFrom(v){
  if(!v) return null;
  const raw=typeof v==='object'?(v.$date||v.date||''):String(v);
  const m=raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if(m) return new Date(+m[1],+m[2]-1,+m[3]);
  const d=new Date(raw); return isNaN(d)?null:d;
}
function statutFrom(v){ const k=key(v); if(k.includes('attente')) return 'attente'; if(k.includes('refus')) return 'refuse'; return 'valide'; }
// Champ Image du CMS (wix:image://v1/<id>/<nom>…) ou URL classique -> URL affichable
function imgUrl(v){
  if(!v) return '';
  const s=typeof v==='object'?(v.url||v.src||''):String(v);
  const m=s.match(/^wix:image:\/\/v1\/([^/#]+)/);
  if(m) return 'https://static.wixstatic.com/media/'+m[1];
  return /^https?:\/\//.test(s)?s:'';
}
const refId=v=>typeof v==='object'&&v?v._id:v;
// Position GPS « latitude, longitude » (copiée depuis Google Maps), limitée à Mayotte.
const inMayotte=p=>p&&p.lat>-13.1&&p.lat<-12.5&&p.lng>44.9&&p.lng<45.4;
function parsePos(v){ const m=String(v||'').trim().match(/^(-?\d+(?:\.\d+)?)\s*[,;\s]\s*(-?\d+(?:\.\d+)?)$/); if(!m) return null; const p={lat:+m[1],lng:+m[2]}; return inMayotte(p)?p:null; }
const posStr=p=>p?`${p.lat.toFixed(6)}, ${p.lng.toFixed(6)}`:'';
const SALES={boutique:'Boutique physique','en-ligne':'Vente en ligne / livraison','les-deux':'Boutique et vente en ligne'};
// Date et heure complètes d'un champ système Wix ({$date:…}), pour le classement Tendance.
const stamp=v=>{ const d=new Date(typeof v==='object'&&v?v.$date:v); return isNaN(d)?new Date(TODAY):d; };
async function loadData(){
  const [ents,codes,votes,events,moros,comms,likes,reports,moder,dms,parr,recs,tfs]=await Promise.all([
    queryAll('Entreprises'),queryAll('CodesPromo'),
    queryAll('Votes').catch(()=>[]),queryAll('Evenements').catch(()=>[]),queryAll('Moro').catch(()=>[]),
    queryAll('Commentaires').catch(()=>[]),queryAll('JaimeCommentaires').catch(()=>[]),queryAll('Signalements').catch(()=>[]),queryAll('Moderation').catch(()=>[]),
    queryAll('Demandes').catch(()=>[]),queryAll('Parrainages').catch(()=>[]),queryAll('Recompenses').catch(()=>[]),queryAll('TempsForts').catch(()=>[])
  ]);
  const idToSlug={}; const used=new Set();
  const list=ents.filter(e=>e.publiee!==false&&e.nom).map(e=>{
    let slug=slugify(e.slug||e.nom)||String(e._id);
    while(used.has(slug)) slug+='-2';
    used.add(slug); idToSlug[e._id]=slug;
    const owners=String(e.proprietaire||'').split(/[\s,;]+/).filter(Boolean);
    return {slug,id:e._id,name:e.nom,cat:catFrom(e.categorie),commune:communeFrom(e.commune),desc:e.description||'',addr:e.adresse||'',phone:e.telephone||'',web:e.siteWeb||'',email:e.email||'',hours:e.horaires||'',pos:parsePos(e.position),sale:SALES[e.typeVente]?e.typeVente:'',logo:imgUrl(e.logo),owners};
  }).sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  B=list; bizId={}; Object.keys(idToSlug).forEach(id=>bizId[idToSlug[id]]=id);
  VOTES=votes.filter(v=>v.code&&(v.sens==='up'||v.sens==='down')).map(v=>({id:v._id,code:v.code,dir:v.sens,owner:v._owner,at:dateFrom(v._updatedDate||v._createdDate)||TODAY}));
  COMMENTS=comms.filter(x=>x.code&&x.texte).map(x=>({id:x._id,code:x.code,text:String(x.texte).slice(0,500),parent:x.parent||'',name:x.pseudo||'',owner:x._owner,at:stamp(x._createdDate)}));
  LIKES=likes.filter(x=>x.commentaire).map(x=>({id:x._id,comment:x.commentaire,owner:x._owner}));
  REPORTS=reports.filter(x=>x.commentaire).map(x=>({id:x._id,comment:x.commentaire,owner:x._owner}));
  MODERATION={}; moder.forEach(x=>{ if(x.commentaire) MODERATION[x.commentaire]=String(x.decision||'').toLowerCase().includes('masq')?'masque':'approuve'; });
  MOROS=moros.filter(v=>v.code&&(v.sens==='moro'||v.sens==='maji')).map(v=>({id:v._id,code:v.code,dir:v.sens,owner:v._owner,at:stamp(v._updatedDate||v._createdDate)}));
  baseCodes=codes.filter(c=>(c.code||c.typeOffre==='magasin')&&idToSlug[refId(c.entreprise)]).map(c=>{
    const exp=dateFrom(c.dateExpiration);
    return {id:c._id,biz:idToSlug[refId(c.entreprise)],deal:c.avantage||'Bon plan',detail:c.detail||'',code:String(c.code||'').trim(),store:c.typeOffre==='magasin',cond:c.conditions||'',exp:exp||inDays(3650),noExp:!exp,verified:!!c.verifie,baseUp:+c.votesOui||0,baseDown:+c.votesNon||0,added:dateFrom(c._createdDate)||TODAY,addedAt:stamp(c._createdDate),status:statutFrom(c.statut),link:c.lienOffre||'',by:c.contributeur||'',byName:c.contributeurNom||'',tf:String(c.tempsForts||'').split(/[\s,;]+/).filter(Boolean)};
  });
  EVENTS=events.filter(e=>e.publie!==false&&e.titre&&dateFrom(e.date)).map(e=>({
    id:e._id,title:e.titre,date:dateFrom(e.date),end:dateFrom(e.dateFin),time:e.heure||'',commune:communeFrom(e.commune),communeName:e.commune||'',place:e.lieu||'',desc:e.description||'',img:imgUrl(e.image),link:e.lien||'',biz:idToSlug[refId(e.entreprise)]||''
  })).sort((a,b)=>a.date-b.date);
  DEMANDES=dms.filter(x=>x.texte&&!x.masquee).map(x=>({id:x._id,text:String(x.texte).slice(0,300),entId:x.entreprise||'',biz:idToSlug[x.entreprise]||'',cat:x.categorie||'',name:x.pseudo||'Membre',status:x.statut==='resolue'?'resolue':'ouverte',owner:x._owner,at:stamp(x._createdDate)})).sort((a,b)=>b.at-a.at);
  const seenF=new Set();
  PARRAINAGES=parr.filter(x=>x.parrain&&x._owner&&x.parrain!==x._owner).map(x=>({parrain:x.parrain,filleul:x._owner,name:x.filleulNom||'',at:stamp(x._createdDate)})).sort((a,b)=>a.at-b.at).filter(x=>!seenF.has(x.filleul)&&seenF.add(x.filleul));
  RECOMPENSES=recs.filter(x=>x.mois&&x.titre).map(x=>({mois:String(x.mois).slice(0,7),rang:+x.rang||0,titre:x.titre,desc:x.description||'',biz:idToSlug[x.entreprise]||'',img:imgUrl(x.image),gagnant:x.gagnant||''}));
  TEMPS=tfs.filter(x=>x.slug&&x.titre).map(x=>({slug:x.slug,title:x.titre,emoji:x.emoji||'⭐',desc:x.description||'',start:dateFrom(x.debut),end:dateFrom(x.fin),cats:String(x.categories||'').split(/[\s,;]+/).filter(Boolean),ordre:+x.ordre||0})).sort((a,b)=>a.ordre-b.ordre);
  dataSource='wix';
}
async function sendToWix(collection,data){
  return wix('/wix-data/v2/items',{dataCollectionId:collection,dataItem:{data}});
}

/* ---------- Données du membre connecté ---------- */
let MINE={proposals:[],claims:[],edits:[],events:[],alerts:[]};
async function loadMine(){
  if(!me()){ MINE={proposals:[],claims:[],edits:[],events:[],alerts:[]}; return; }
  try{
    const items=await queryAll('PropositionsCodes');
    MINE.proposals=items.map(p=>({id:p._id,biz:B.find(b=>b.id===refId(p.entreprise))?.slug||'',code:p.code,deal:p.avantage||'',exp:p.dateExpiration||'',status:statutFrom(p.statut==='Traité'?'valide':p.statut),created:dateFrom(p._createdDate)||TODAY})).sort((a,b)=>b.created-a.created);
  }catch(e){ console.warn('Propositions indisponibles',e); }
  try{
    const cl=await queryAll('DemandesEntreprises');
    MINE.claims=cl.map(c=>({id:c._id,name:c.nomEntreprise||'',entreprise:refId(c.entreprise)||'',status:c.statut||'Nouvelle',at:stamp(c._createdDate)})).sort((a,b)=>b.at-a.at);
  }catch(e){ console.warn('Demandes indisponibles',e); }
  const [edits,evs,alerts]=await Promise.all([queryAll('ModificationsFiches').catch(()=>[]),queryAll('EvenementsProposes').catch(()=>[]),queryAll('Alertes').catch(()=>[])]);
  MINE.alerts=alerts.filter(a=>ALERT_TYPES[a.type]&&a.valeur).map(a=>({id:a._id,type:a.type,valeur:a.valeur,label:a.libelle||'',at:stamp(a._createdDate)}));
  MINE.edits=edits.map(x=>({id:x._id,entreprise:refId(x.entreprise)||'',status:x.statut||'En attente',at:stamp(x._createdDate)})).sort((a,b)=>b.at-a.at);
  MINE.events=evs.map(x=>({id:x._id,entreprise:refId(x.entreprise)||'',title:x.titre||'',date:dateFrom(x.date),at:stamp(x._createdDate)})).sort((a,b)=>b.at-a.at);
}

/* ---------- Statistiques pour l'espace pro ---------- */
function track(type,slug,codeId){
  const id=bizId[slug]; if(!id) return;
  if(type==='vue'){ const k='bonszahe:vu:'+id; try{ if(sessionStorage.getItem(k)) return; sessionStorage.setItem(k,'1'); }catch(e){} }
  sendToWix('Statistiques',Object.assign({type,entreprise:id},codeId?{code:codeId}:{})).catch(()=>{});
}

/* ---------- État local (favoris) ---------- */
const KEY='bonszahe:v2';
let S = {favs:[]};
try{ const raw=localStorage.getItem(KEY); if(raw) S.favs=JSON.parse(raw).favs||[]; }catch(e){}
const save=()=>{ try{localStorage.setItem(KEY,JSON.stringify({favs:S.favs}))}catch(e){} };

// Un avis par membre et par code : on garde le plus récent.
function voteMap(list=VOTES){
  const last={};
  list.forEach(v=>{ const k=v.code+'|'+v.owner; if(!last[k]||last[k].at<=v.at) last[k]=v; });
  const out={};
  Object.values(last).forEach(v=>{ const o=out[v.code]||(out[v.code]={}); o[v.dir]=(o[v.dir]||0)+1; });
  return out;
}
const myVoteIn=(list,codeId)=>me()&&list.filter(v=>v.code===codeId&&v.owner===me().id).sort((a,b)=>b.at-a.at)[0];
const myVote=codeId=>myVoteIn(VOTES,codeId);
const myMoro=codeId=>myVoteIn(MOROS,codeId);
// Chaleur = Moro − Maji. Paliers : Maji (négatif), Moro, Volcan (30 et plus).
const VOLCAN=30;
const heatLevel=h=>h<0?{k:'maji',name:'Maji'}:h>=VOLCAN?{k:'volcan',name:'Volcan'}:{k:'moro',name:'Moro'};
// Tendance : la chaleur compte, mais un bon plan récent passe devant un ancien.
const hotScore=c=>{ const hours=Math.max(0,(Date.now()-c.addedAt)/36e5); return (c.heat+1)/Math.pow(hours+2,1.3); };
// Masqué automatiquement quand la communauté le signale : au moins 3 « ne fonctionne plus » et plus de non que de oui.
const flagged=c=>c.down>=3&&c.down>c.up;
function allCodes(){
  const vm=voteMap(), hm=voteMap(MOROS);
  return baseCodes.map(c=>{ const v=vm[c.id]||{}, h=hm[c.id]||{}; const moro=h.moro||0, maji=h.maji||0;
    return Object.assign({},c,{up:c.baseUp+(v.up||0),down:c.baseDown+(v.down||0),moro,maji,heat:moro-maji}); });
}
const daysLeft = c => Math.round((c.exp - TODAY)/864e5);
const activeCodes = () => allCodes().filter(c=>c.status==='valide' && daysLeft(c)>=0 && !flagged(c));
const codesOf = slug => activeCodes().filter(c=>c.biz===slug);
const isNew = c => (TODAY - c.added)/864e5 <= 7;
const fmt = d => d.toLocaleDateString('fr-FR',{day:'2-digit',month:'2-digit',year:'numeric'});
const esc = s => String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const norm = s => String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');

/* ---------- Composants ---------- */
function logo(b,size=''){
  if(b.logo) return `<span class="logo ${size} haslogo" aria-hidden="true"><img src="${esc(b.logo)}" alt="" loading="lazy"></span>`;
  const initials=b.name.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,' ').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
  return `<span class="logo ${size} lg-${b.cat}" aria-hidden="true">${esc(initials)}</span>`;
}
const coverStyle = b => { const c=catBy(b.cat).c; return `--c1:${c[0]};--c2:${c[1]};--c3:${c[2]}`; };

function coupon(c,{showBiz=true,noLink=false}={}){
  const b=bizBy(c.biz); const left=daysLeft(c); const mv=myVote(c.id); const v=mv&&mv.dir;
  const mm=myMoro(c.id); const hv=mm&&mm.dir; const lv=heatLevel(c.heat||0);
  const soon = !c.noExp && left<=7;
  const official = c.by && b.owners && b.owners.includes(c.by);
  return `<article class="coupon">
    <div class="main">
      <div class="heat heat-${lv.k}" role="group" aria-label="Chaleur du bon plan : ${c.heat||0} (${lv.name})">
        <button class="hb maji" data-moro="${c.id}" data-dir="maji" aria-pressed="${hv==='maji'}" aria-label="Maji : bof, ça refroidit">💧</button>
        <span class="hv"><b>${c.heat||0}</b><small>${lv.k==='volcan'?'🌋 ':''}${lv.name}</small></span>
        <button class="hb moro" data-moro="${c.id}" data-dir="moro" aria-pressed="${hv==='moro'}" aria-label="Moro : bon plan, ça chauffe !">🔥</button>
      </div>
      ${showBiz?`<a class="bizline" href="#/entreprises/${b.slug}">${logo(b)}<span>${esc(b.name)}</span></a>`:''}
      ${noLink?`<div class="deal">${esc(c.deal)}</div>`:`<a class="deal deallink" href="#/bon-plan/${encodeURIComponent(c.id)}">${esc(c.deal)}</a>`}
      <p class="detail">${esc(c.detail)}</p>
      ${c.cond?`<p class="cond">${esc(c.cond)}</p>`:''}
      <div class="meta">
        ${c.verified?`<span class="pill ok">${ic('check')}Code vérifié</span>`:''}
        ${soon?`<span class="pill soon">${ic('clock')}${left===0?'Dernier jour':left===1?'Plus qu’1 jour':'Plus que '+left+' jours'}</span>`:(c.noExp?`<span class="pill">${ic('clock')}Sans date limite</span>`:`<span class="pill">${ic('clock')}Expire le ${fmt(c.exp)}</span>`)}
        ${official?`<span class="pill ok">${ic('store')}Offre officielle</span>`:''}
        ${isNew(c)?`<span class="pill wait">Nouveau</span>`:''}${c.tf.map(tfBy).filter(t=>t&&tfActive(t)).map(t=>`<span class="pill tfpill">${esc(t.emoji)} ${esc(t.title)}</span>`).join('')}
      </div>
      ${c.byName&&!official?`<p class="by">${ic('heart')}Partagé par <strong>${esc(c.byName)}</strong>, merci !</p>`:''}
    </div>
    <div class="perf" aria-hidden="true"></div>
    <div class="stub">
      <div class="coderow">
        ${c.store?`<span class="code store" aria-label="Offre en magasin">🏬 En magasin</span>
        <button class="btn btn-primary btn-sm" data-caisse="${esc(c.id)}" data-copybiz="${b.slug}">${ic('store')}Montrer en caisse</button>`:`<span class="code" aria-label="Code promo">${esc(c.code)}</span>
        <button class="btn btn-primary btn-sm" data-copy="${esc(c.code)}" data-copybiz="${b.slug}" data-copyid="${esc(c.id)}">${ic('copy')}Copier le code</button>`}
      </div>
      <p class="vlabel">Le code marche ?</p>
      <div class="votes" role="group" aria-label="Ce code a-t-il fonctionné ?">
        <button class="vote up" data-vote="${c.id}" data-dir="up" aria-pressed="${v==='up'}">${ic('up')}Fonctionne (${c.up})</button>
        <button class="vote down" data-vote="${c.id}" data-dir="down" aria-pressed="${v==='down'}">${ic('down')}Ne fonctionne plus${c.down?' ('+c.down+')':''}</button>
      </div>
      ${noLink?'':`<a class="btn btn-ghost cbtn" href="#/bon-plan/${encodeURIComponent(c.id)}">💬 ${countComments(c.id)?countComments(c.id)+' commentaire'+(countComments(c.id)>1?'s':'')+' · Voir':'Commenter'} et partager</a>`}
    </div>
  </article>`;
}

function bizCard(b){
  const n=codesOf(b.slug).length; const fav=S.favs.includes(b.slug);
  return `<article class="biz">
    
      <a class="cover cv cv-${b.cat}" href="#/entreprises/${b.slug}" aria-label="Voir ${esc(b.name)}"></a>
      <div class="body">
        ${logo(b,'md')}
        <div class="biz-title"><h3><a href="#/entreprises/${b.slug}">${esc(b.name)}</a></h3><button type="button" class="fav" data-fav="${b.slug}" aria-pressed="${fav}" aria-label="${fav?'Retirer':'Ajouter'} ${esc(b.name)} ${fav?'des':'aux'} favoris"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.6l6.2-.9Z"/></svg></button></div>
        <p class="u4 muted">${esc(catBy(b.cat).name)}</p>
        <div class="row"><span class="count ${n?'':'none'}">${n?n+' bon'+(n>1?'s':'')+' plan'+(n>1?'s':'')+' disponible'+(n>1?'s':''):'Aucun code pour le moment'}</span></div>
      </div>

    
  </article>`;
}

function catCard(c){
  const n=B.filter(b=>b.cat===c.slug).length;
  return `<a class="cat" href="#/entreprises?cat=${c.slug}"><span class="ic">${ic(c.icon)}</span><strong>${c.name}</strong><small>${n?n+' entreprise'+(n>1?'s':''):'Bientôt'}</small></a>`;
}

const empty = (title,text,btn='') => `<div class="empty"><strong>${title}</strong><p>${text}</p>${btn}</div>`;

/* ---------- Pages ---------- */
const PALM_SMALL = `<svg viewBox="0 0 200 220" fill="currentColor" aria-hidden="true"><path d="M104 216c4-50 6-96-4-142" stroke="currentColor" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M100 74c-30-30-70-32-96-12 34-6 64 2 96 16z"/><path d="M100 74c20-38 58-52 96-40-34 2-66 18-96 42z"/><path d="M100 74c-40-8-70 10-84 40 26-22 54-30 84-36z"/><path d="M100 74c38-6 72 12 86 44-26-22-56-32-86-40z"/><path d="M100 74c-6-34 6-62 30-74-14 24-20 48-26 76z"/></svg>`;
const FLOWER = `<svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">${[0,72,144,216,288].map(r=>`<ellipse cx="50" cy="26" rx="15" ry="24" transform="rotate(${r} 50 50)"/>`).join('')}<circle cx="50" cy="50" r="9" fill="#FFE27A"/></svg>`;
const SCENE = `<svg class="scene" viewBox="0 0 400 380" aria-hidden="true">
  <g class="sunc"><circle cx="250" cy="200" r="120" fill="#FFE27A" opacity=".35"/><circle cx="250" cy="200" r="84" fill="#FFD04F"/></g>
  <path d="M20 380c16-40 40-66 80-70 40-3 60 16 96 14s50-30 92-30 70 26 100 40 40 30 50 46z" fill="#3B8F2C"/>
  <path d="M40 346c30-18 70-20 110-8M230 318c30-6 60 2 84 18" stroke="#5DB33A" stroke-width="4" fill="none" stroke-linecap="round"/>
  <g class="palm">
    <path d="M150 380C158 320 170 250 205 168" stroke="#7A4A25" stroke-width="15" fill="none" stroke-linecap="round"/>
    <path d="M152 350l14 3M156 320l15 4M162 290l15 4M170 260l15 5M180 232l14 5M191 204l13 5" stroke="#5E3618" stroke-width="3"/>
    <g fill="#2F7D32">
      <path d="M205 168c26-34 72-42 110-20-44-8-78 2-110 22z"/>
      <path d="M205 168c34-8 72 8 88 44-26-26-56-38-88-42z" fill="#3B8F2C"/>
      <path d="M205 168c-10-36 6-70 36-86-16 28-24 54-34 88z" fill="#3B8F2C"/>
      <path d="M205 168c-32-26-76-24-104 4 40-14 72-12 104-2z"/>
      <path d="M205 168c-38-2-66 22-74 58 20-30 44-46 74-56z" fill="#3B8F2C"/>
    </g>
    <circle cx="200" cy="176" r="7" fill="#6B3F1D"/><circle cx="212" cy="178" r="7" fill="#7A4A25"/>
  </g>
</svg>`;;

/* ---------- Accueil : « Ça chauffe en ce moment » ---------- */
// Les 3 premiers en coupon complet (2 seulement sur mobile : le 3e passe alors en ligne compacte), les suivants en lignes compactes.
const HOT_BIG=3, HOT_SMALL=4;
const hotCopyBtn=c=>c.store?`<button class="btn btn-primary btn-sm" data-caisse="${esc(c.id)}" data-copybiz="${c.biz}">${ic('store')}En caisse</button>`:`<button class="btn btn-primary btn-sm" data-copy="${esc(c.code)}" data-copybiz="${c.biz}" data-copyid="${esc(c.id)}">${ic('copy')}Copier</button>`;
function hotRow(c,rank,cls=''){
  const b=bizBy(c.biz), lv=heatLevel(c.heat);
  return `<li class="prow${cls}"><a class="pmain" href="#/bon-plan/${encodeURIComponent(c.id)}"><span class="rk rk${rank}">${rank}</span>${logo(b)}<span class="grow"><strong>${esc(b.name)}</strong><small>${esc(c.deal)}${c.store?' · en magasin':''}</small></span></a><span class="pheat ${lv.k}" title="${c.moro} Moro, ${c.maji} Maji">${lv.k==='volcan'?'🌋':'🔥'} ${c.heat}</span>${hotCopyBtn(c)}</li>`;
}
const hotMore=`<a class="btn btn-sun hotmore" href="#/tendances">🔥 Voir toutes les tendances</a>`;
const MEDALS=['🥇','🥈','🥉'];
function hotBlock(hot){
  if(!hot.length) return `<div class="u5">${empty('Aucun bon plan ne chauffe encore','Donnez du Moro 🔥 à vos bons plans préférés pour les faire monter ici.','<a class="btn btn-sun" href="#/codes">Voir les bons plans</a>')}</div>`;
  const big=hot.slice(0,HOT_BIG), small=hot.slice(HOT_BIG-1);
  return `<div class="hottop3">${big.map((c,i)=>`<div class="hotbig${i===HOT_BIG-1?' desk-only':''}"><span class="toprank">${MEDALS[i]} N°${i+1}${c.heat>=VOLCAN?' · 🌋 Volcan':''}</span>${coupon(c)}</div>`).join('')}</div>
    ${small.length?`<ol class="podium u10">${small.map((c,i)=>hotRow(c,i+HOT_BIG,i===0&&big.length===HOT_BIG?' mob-only':'')).join('')}</ol>`:''}${hotMore}`;
}
function pageHome(){
  const act=activeCodes();
  const hot=act.filter(c=>c.heat>0).sort((a,b)=>b.heat-a.heat||hotScore(b)-hotScore(a)).slice(0,HOT_BIG+HOT_SMALL);
  const news=[...act].sort((a,b)=>b.added-a.added).slice(0,6);
  const popular=[...B].map(b=>({b,score:codesOf(b.slug).reduce((s,c)=>s+c.up,0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,6).map(x=>x.b);
  const discover=B.filter(b=>!popular.includes(b)).slice(0,6);
  return `
  <section class="hero">
    <div class="wrap">
      <div>
        <h1>Les bons plans de Mayotte, réunis au même endroit</h1>
        <p class="lead">Découvrez les entreprises locales, leurs offres et leurs codes promo.</p>
        <form class="search" role="search" data-search>
          ${ic('search')}
          <label class="sr" for="q">Rechercher</label>
          <input id="q" name="q" type="search" placeholder="Une entreprise ou un bon plan" autocomplete="off">
          <button class="btn btn-primary" type="submit" aria-label="Rechercher">${ic('search')}<span class="lbl">Rechercher</span></button>
        </form>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="#/codes">Découvrir les bons plans</a>
          <span>${act.length} codes actifs, ${B.length} entreprises</span>
        </div>
      </div>
      ${SCENE}
    </div>
    <span class="u0 sea-mobile-palm">${PALM_SMALL}</span>
  </section>
  <svg class="sea" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 24C180 4 360 4 540 18s360 28 540 16 270-26 360-18v54H0z" fill="#1FB5C9"/><path d="M0 40c200-18 400-14 600 0s420 18 600 4 190-12 240-8v34H0z" fill="#1597D6" opacity=".55"/><path d="M0 52C240 36 480 38 720 50s480 12 720-2v22H0z" fill="var(--bg)"/></svg>

  ${(()=>{ const n=me()?alertDeals(true).length:0; const tb=tfBanner(); return n||tb?`<section class="block homeflash"><div class="wrap stack">
    ${n?`<a class="tfband alertband" href="#/alertes"><span class="tfemo">🔔</span><span class="grow"><strong>${n} nouveau${n>1?'x':''} bon${n>1?'s':''} plan${n>1?'s':''} pour vos alertes</strong><small>Ils correspondent à ce que vous suivez.</small></span>${ic('left','class="flip"')}</a>`:''}${tb}
  </div></section>`:''; })()}
  <section class="u18 block">
    <div class="wrap">
      <div class="head"><div><h2>Catégories</h2></div><a class="link" href="#/categories">Toutes les catégories</a></div>
      <div class="cats">${CATS.slice(0,7).map(catCard).join('')}<a class="cat more" href="#/categories"><span class="ic">${ic('grid')}</span><strong>Voir tout</strong><small>${CATS.length} catégories</small></a></div>
    </div>
  </section>

  <section class="block alt">
    <div class="wrap">
      <div class="head"><div><h2>🔥 Ça chauffe en ce moment</h2><p class="muted">Les bons plans qui récoltent le plus de Moro.</p></div><a class="link" href="#/tendances">Voir les tendances</a></div>
      ${hotBlock(hot)}
    </div>
  </section>

  <section class="block">
    <div class="wrap commu">
      <a class="commucard" href="#/demandes"><span class="tfemo">🙋</span><strong>Vous cherchez un code ?</strong><small>${DEMANDES.filter(d=>d.status!=='resolue').length?DEMANDES.filter(d=>d.status!=='resolue').length+' demande(s) en cours. ':''}Demandez à la communauté.</small></a>
      <a class="commucard" href="#/recompenses"><span class="tfemo">🎁</span><strong>Récompenses du mois</strong><small>Les 3 meilleurs contributeurs gagnent des lots.</small></a>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="head"><div><h2>Nouveautés</h2><p class="muted">Les derniers bons plans ajoutés.</p></div><a class="link" href="#/codes?tri=nouveaux">Voir les nouveautés</a></div>
      <div class="rail">${news.map(c=>coupon(c)).join('')}</div>
    </div>
  </section>

  ${upcomingEvents().length?`<section class="block alt">
    <div class="wrap">
      <div class="head"><div><h2>Prochains événements à Mayotte</h2><p class="muted">Marchés, soldes, fêtes et animations près de chez vous.</p></div><a class="link" href="#/evenements">Tous les événements</a></div>
      <div class="events">${upcomingEvents().slice(0,3).map(eventCard).join('')}</div>
    </div>
  </section>`:''}

  <section class="block">
    <div class="wrap">
      <div class="head"><div><h2>Explorez Mayotte commune par commune</h2><p class="muted">Touchez une commune pour voir ses entreprises.</p></div><a class="link" href="#/carte">Carte des magasins</a></div>
      ${(mapSel='',mapWidget())}
    </div>
  </section>

  <section class="block alt">
    <div class="wrap">
      <div class="head"><div><h2>Entreprises populaires</h2><p class="muted">Celles dont les codes fonctionnent le mieux.</p></div></div>
      <div class="bizgrid">${popular.map(bizCard).join('')}</div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="head"><div><h2>Découvrez les entreprises de Mayotte</h2></div><a class="link" href="#/entreprises">Toutes les entreprises</a></div>
      <div class="bizgrid">${discover.map(bizCard).join('')}</div>
    </div>
  </section>

  <section class="u19 block">
    <div class="wrap stack">
      <div class="band community">
        <span class="u2 deco">${FLOWER}</span>
        <div><h2>Vous connaissez un bon plan ?</h2><p>Partagez-le avec la communauté Bonszahé : il est publié tout de suite, avec votre pseudo. Gagnez des points et des badges à chaque code qui fonctionne.</p></div>
        <div class="u24 bandbtns"><button class="btn btn-primary" data-propose="">${ic('plus')}Proposer un code promo</button><a class="btn btn-ghost" href="#/classement">${ic('badge')}Voir le classement</a></div>
      </div>
      <div class="band pro">
        <span class="u1 deco">${PALM_SMALL}</span>
        <div><h2>Vous êtes une entreprise ?</h2><p>Revendiquez votre fiche : publiez vos offres officielles et suivez combien de personnes voient votre page et copient vos codes.</p></div>
        <button class="btn btn-sun" data-claim="">${ic('store')}Ajouter ou revendiquer mon entreprise</button>
      </div>
    </div>
  </section>`;
}

const selOpts=(list,cur)=>list.map(([v,l])=>`<option value="${esc(v)}"${v===cur?' selected':''}>${esc(l)}</option>`).join('');
const communeOpts=slugs=>[['','Toutes les communes'],...COMMUNES.filter(c=>slugs.has(c.slug)).sort((a,z)=>a.name.localeCompare(z.name,'fr')).map(c=>[c.slug,c.name])];
let dirState={q:'',cat:'',com:'',sort:'az',deals:false};
function pageDirectory(params){
  dirState={q:params.get('q')||'',cat:params.get('cat')||'',com:params.get('c')||'',sort:params.get('tri')==='codes'?'codes':'az',deals:params.get('bonsplans')==='1'};
  return `<div class="wrap">
    ${backBtn('#/')}<div class="pagehead"><h1>Entreprises</h1><p class="muted">Toutes les entreprises référencées sur Bonszahé.</p></div>
    <div class="toolbar">
      <label class="field">${ic('search')}<span class="sr">Rechercher une entreprise</span><input id="dirQ" type="search" placeholder="Nom, activité…" value="${esc(dirState.q)}"></label>
      <div class="filters">
        <label class="sel"><span>Commune</span><select id="dirCom">${selOpts(communeOpts(new Set(B.map(b=>b.commune))),dirState.com)}</select></label>
        <label class="sel"><span>Trier par</span><select id="dirSort">${selOpts([['az','Nom (A → Z)'],['codes','Plus de bons plans']],dirState.sort)}</select></label>
        <label class="check"><input type="checkbox" id="dirDeals"${dirState.deals?' checked':''}> Avec bons plans en cours</label>
        <button class="btn btn-ghost btn-sm" id="dirReset" type="button">Réinitialiser</button>
      </div>
      <div class="chips" role="group" aria-label="Filtrer par catégorie">
        <button class="chip" data-dircat="" aria-pressed="${!dirState.cat}">Toutes</button>
        ${CATS.map(c=>`<button class="chip" data-dircat="${c.slug}" aria-pressed="${dirState.cat===c.slug}">${c.name}</button>`).join('')}
      </div>
    </div>
    <p class="results" id="dirCount" aria-live="polite"></p>
    <div class="bizgrid compact" id="dirList"></div>
    <div class="u7"></div>
  </div>`;
}
function drawDirectory(){
  const q=norm(dirState.q);
  const list=B.filter(b=>(!dirState.cat||b.cat===dirState.cat)&&(!dirState.com||b.commune===dirState.com)&&(!dirState.deals||codesOf(b.slug).length)&&(!q||norm(b.name+' '+b.desc+' '+catBy(b.cat).name).includes(q)));
  if(dirState.sort==='codes') list.sort((a,z)=>codesOf(z.slug).length-codesOf(a.slug).length||a.name.localeCompare(z.name,'fr'));
  const active=dirState.cat||dirState.com||dirState.deals||q||dirState.sort!=='az';
  document.getElementById('dirReset').hidden=!active;
  document.getElementById('dirCount').textContent=`${list.length} entreprise${list.length>1?'s':''}${dirState.com?' à '+comBy(dirState.com).name:''}`;
  const cat=catBy(dirState.cat); const only=cat&&!q&&!dirState.com&&!dirState.deals;
  document.getElementById('dirList').innerHTML=list.length?list.map(bizCard).join(''):
    `<div class="u5">${empty(only?`Aucune entreprise ${cat.name.toLowerCase()} pour l’instant`:'Aucune entreprise trouvée',only?'Cette catégorie attend ses premières entreprises. Vous en connaissez une ?':'Essayez un autre mot ou d’autres filtres.',`<button class="btn btn-primary" data-claim="">Ajouter une entreprise</button>`)}</div>`;
}

function pageBusiness(slug){
  const b=B.find(x=>x.slug===slug);
  if(!b) return notFound('Cette entreprise n’existe pas','Le lien est peut-être ancien. Retrouvez-la dans l’annuaire.','<a class="btn btn-primary" href="#/entreprises">Voir les entreprises</a>','#/entreprises');
  const codes=codesOf(slug).sort((a,b)=>b.verified-a.verified||b.up-a.up);
  const verified=codes.some(c=>c.verified);
  const fav=S.favs.includes(slug);
  const bizEvents=upcomingEvents().filter(e=>e.biz===slug);
  const similar=B.filter(x=>x.cat===b.cat&&x.slug!==slug).sort((a,z)=>codesOf(z.slug).length-codesOf(a.slug).length).slice(0,3);
  const cat=catBy(b.cat);
  return `<div class="wrap">
    ${backBtn('#/entreprises')}
    <div class="bcover cv cv-${b.cat}" role="img" aria-label="Couverture ${esc(b.name)}"></div>
    <div class="bhead">
      ${logo(b,'lg')}
      <div>
        <h1>${esc(b.name)} ${verified?`<span title="Entreprise avec codes vérifiés">${ic('badge','class="verif"')}</span>`:''}</h1>
        <p class="tagline muted">${esc(cat.name)}${b.sale?' &nbsp;|&nbsp; '+esc(SALES[b.sale]):''} &nbsp;|&nbsp; ${esc(b.desc)}</p>
      </div>
      <div class="bactions">
        ${b.web?`<a class="btn btn-primary" href="${esc(b.web)}" target="_blank" rel="noopener" data-track="site" data-trackbiz="${slug}">${ic('ext')}Visiter le site</a>`:''}
        ${b.phone?`<a class="btn btn-ghost" href="tel:${esc(b.phone.replace(/\s/g,''))}" data-track="appel" data-trackbiz="${slug}">${ic('call')}Appeler</a>`:''}
        ${b.email?`<a class="btn btn-ghost" href="mailto:${esc(b.email)}">${ic('mail')}Contacter</a>`:''}
        ${followBtn('entreprise',slug,'Suivre')}
        <a class="btn btn-wa" href="${waHref(`Découvrez ${b.name} et ses bons plans sur Bonszahé 👉 ${location.origin}/#/entreprises/${slug}`)}" target="_blank" rel="noopener">Partager</a>
        <button class="iconbtn" data-fav="${slug}" aria-pressed="${fav}" aria-label="${fav?'Retirer des':'Ajouter aux'} favoris">${ic('heart')}</button>
      </div>
    </div>
    <div class="contact">
      ${b.addr?`<div>${ic('pin')}<span>${esc(b.addr)}${isShop(b)?`<br><a class="link" href="#/carte?b=${b.slug}">Voir sur la carte des magasins</a>`:b.commune?`<br><a class="link" href="#/carte?c=${b.commune}">Voir les magasins de ${esc(comBy(b.commune).name)}</a>`:''}</span></div>`:`<div>${ic('pin')}<span class="muted">Adresse à compléter</span></div>`}
      ${b.web?`<a href="${esc(b.web)}" target="_blank" rel="noopener" data-track="site" data-trackbiz="${slug}">${ic('globe')}<span>${esc(b.web.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,''))}</span></a>`:''}
      ${b.phone?`<a href="tel:${esc(b.phone.replace(/\s/g,''))}" data-track="appel" data-trackbiz="${slug}">${ic('call')}<span>${esc(b.phone)}</span></a>`:`<div>${ic('call')}<span class="muted">Téléphone à compléter</span></div>`}
      ${b.hours?`<div>${ic('clock')}<span>${esc(b.hours)}</span></div>`:''}
      ${isShop(b)?`<div class="golinks">${goLinks(b)}</div>`:''}
    </div>

    <div class="bpage">
      <div class="stack">
        <div>
          <div class="head"><div><h2>Codes promo ${esc(b.name)}</h2><p class="muted">${codes.length?codes.length+' bon'+(codes.length>1?'s':'')+' plan'+(codes.length>1?'s':'')+' disponible'+(codes.length>1?'s':''):'Aucun code actif pour le moment'}</p></div></div>
          ${codes.length?`<div class="coupons">${codes.map(c=>coupon(c,{showBiz:false})).join('')}</div>`:
            empty('Pas encore de code pour '+esc(b.name),'Si vous en connaissez un, proposez-le : il apparaîtra ici immédiatement.',`<button class="btn btn-sun" data-propose="${slug}">${ic('plus')}Proposer un code promo</button>`)}
        </div>
        ${bizEvents.length?`<div><div class="head"><h2>Événements ${esc(b.name)}</h2></div><div class="events">${bizEvents.map(eventCard).join('')}</div></div>`:''}
        <div class="card">
          <h3>À propos de ${esc(b.name)}</h3>
          <p>${esc(b.desc)}</p>
        </div>
        ${similar.length?`<div><div class="head"><h2>Vous aimerez aussi</h2></div><div class="bizgrid">${similar.map(bizCard).join('')}</div></div>`:''}
      </div>
      <aside class="aside">
        <div class="card proposebig">
          <h3>Vous connaissez un autre code ${esc(b.name)} ?</h3>
          <p>Partagez-le avec la communauté.</p>
          <button class="u24 btn btn-sun" data-propose="${slug}">${ic('plus')}Proposer un code promo</button>
        </div>
        ${me()&&b.owners.includes(me().id)?`<div class="card">
          <h3>Vous gérez cette fiche</h3>
          <p class="muted">Mettez à jour vos informations, annoncez un événement et suivez vos statistiques.</p>
          <div class="bandbtns"><button class="btn btn-ghost btn-sm" data-editbiz="${slug}">Modifier ma fiche</button><button class="btn btn-ghost btn-sm" data-proevent="${slug}">Annoncer un événement</button><a class="btn btn-ghost btn-sm" href="#/profil">Mes statistiques</a></div>
        </div>`:`<div class="card">
          <h3>Vous êtes le propriétaire ?</h3>
          <p class="muted">Revendiquez la fiche pour publier vos offres officielles et suivre vos statistiques : vues de la page, codes copiés, clics.</p>
          <button class="u23 btn btn-ghost" data-claim="${slug}">Revendiquer cette entreprise</button>
        </div>`}
      </aside>
    </div>
    <div class="u7"></div>
  </div>
  <button class="btn btn-sun fab" data-propose="${slug}">${ic('plus')}Proposer un code</button>`;
}

const CODE_SORTS=[['tendance','Tendance'],['chauds','Les plus chauds 🔥'],['nouveaux','Nouveautés'],['expire','Expire bientôt'],['fiables','Les plus confirmés']];
let codeState={q:'',cat:'',com:'',type:'',sort:'tendance',verified:false};
function pageCodes(params){
  const f=params.get('f')||'';
  codeState={q:params.get('q')||'',cat:params.get('cat')||'',com:params.get('c')||'',type:['code','magasin'].includes(params.get('type'))?params.get('type'):'',
    sort:f==='new'?'nouveaux':f==='soon'?'expire':CODE_SORTS.some(x=>x[0]===params.get('tri'))?params.get('tri'):'tendance',verified:f==='verified'};
  const act=activeCodes();
  return `<div class="wrap">
    ${backBtn('#/')}<div class="pagehead"><h1>Codes promo et offres</h1><p class="muted">Tous les bons plans valables aujourd'hui à Mayotte. Les offres expirées disparaissent automatiquement.</p></div>
    <div class="toolbar">
      <label class="field">${ic('search')}<span class="sr">Rechercher un code</span><input id="codeQ" type="search" placeholder="Entreprise, réduction, livraison…" value="${esc(codeState.q)}"></label>
      <div class="filters">
        <label class="sel"><span>Trier par</span><select id="codeSort">${selOpts(CODE_SORTS,codeState.sort)}</select></label>
        <label class="sel"><span>Type d’offre</span><select id="codeType">${selOpts([['','Tous les bons plans'],['code','Codes promo'],['magasin','Offres en magasin']],codeState.type)}</select></label>
        <label class="sel"><span>Commune</span><select id="codeCom">${selOpts(communeOpts(new Set(act.map(c=>bizBy(c.biz).commune))),codeState.com)}</select></label>
        <label class="check"><input type="checkbox" id="codeVer"${codeState.verified?' checked':''}> Vérifiés uniquement</label>
        <button class="btn btn-ghost btn-sm" id="codeReset" type="button">Réinitialiser</button>
      </div>
      <div class="chips" role="group" aria-label="Filtrer par catégorie">
        <button class="chip" data-codecat="" aria-pressed="${!codeState.cat}">Toutes</button>
        ${CATS.filter(c=>act.some(x=>bizBy(x.biz).cat===c.slug)).map(c=>`<button class="chip" data-codecat="${c.slug}" aria-pressed="${codeState.cat===c.slug}">${c.name}</button>`).join('')}
      </div>
    </div>
    <p class="results" id="codeCount" aria-live="polite"></p>
    <div class="coupons" id="codeList"></div>
    <div class="u7"></div>
  </div>`;
}
function drawCodes(){
  const q=norm(codeState.q);
  let list=activeCodes().filter(c=>{
    const b=bizBy(c.biz);
    if(codeState.cat&&b.cat!==codeState.cat) return false;
    if(codeState.com&&b.commune!==codeState.com) return false;
    if(codeState.type==='magasin'&&!c.store) return false;
    if(codeState.type==='code'&&c.store) return false;
    if(codeState.verified&&!c.verified) return false;
    if(q&&!norm(b.name+' '+c.deal+' '+c.detail+' '+c.code).includes(q)) return false;
    return true;
  });
  const by={tendance:(a,z)=>hotScore(z)-hotScore(a),chauds:(a,z)=>z.heat-a.heat||z.moro-a.moro,nouveaux:(a,z)=>z.addedAt-a.addedAt,expire:(a,z)=>a.exp-z.exp,fiables:(a,z)=>(z.up-z.down)-(a.up-a.down)||z.up-a.up};
  list.sort(by[codeState.sort]||by.tendance);
  const active=codeState.cat||codeState.com||codeState.type||codeState.verified||q||codeState.sort!=='tendance';
  document.getElementById('codeReset').hidden=!active;
  const what=codeState.type==='magasin'?['offre','offres']:codeState.type==='code'?['code','codes']:['bon plan','bons plans'];
  document.getElementById('codeCount').textContent=`${list.length} ${list.length>1?what[1]:what[0]}${codeState.com?' à '+comBy(codeState.com).name:''}`;
  document.getElementById('codeList').innerHTML=list.length?list.map(c=>coupon(c)).join(''):
    `<div class="u5">${empty('Aucun bon plan ne correspond','Changez de filtre ou proposez un code que vous connaissez.',`<button class="btn btn-sun" data-propose="">${ic('plus')}Proposer un code promo</button>`)}</div>`;
}

/* ---------- Pages À propos, Contact, Mentions légales, Confidentialité ---------- */
// Les éléments entre [crochets] sont à compléter par l'éditeur du site.
const EDITEUR={nom:'[Nom et prénom ou raison sociale]',statut:'[Statut : entreprise individuelle, association, société…]',adresse:'[Adresse postale], Mayotte',siret:'[Numéro SIRET]',directeur:'[Nom du directeur de la publication]'};
const legalPage=(title,body)=>`<div class="wrap legal">${backBtn('#/')}<div class="pagehead"><h1>${title}</h1></div><div class="card prose">${body}</div><div class="u8"></div></div>`;
const waHref=text=>'https://wa.me/?text='+encodeURIComponent(text);
function pageAbout(){
  return legalPage('À propos de Bonszahé',`
    <p><strong>Bonszahé</strong> réunit les bons plans de Mayotte au même endroit : codes promo, offres en magasin et événements des entreprises de l’île.</p>
    <h2>Une communauté qui partage</h2>
    <p>Les bons plans sont partagés par les habitants eux-mêmes. Chacun peut proposer un code ou une offre en magasin : il est publié tout de suite, avec son pseudo.</p>
    <p>La communauté fait le tri : donnez du <strong>Moro 🔥</strong> aux bons plans qui valent le coup et du <strong>Maji 💧</strong> à ceux qui déçoivent, dites si un code marche encore, commentez et partagez. Les meilleurs contributeurs gagnent des points et des badges.</p>
    <h2>Pour les entreprises</h2>
    <p>Les entreprises de Mayotte peuvent revendiquer leur fiche pour publier leurs offres officielles, placer leur magasin sur la carte, répondre aux clients et suivre leurs statistiques (vues, codes copiés, clics, appels, itinéraires).</p>
    <p><a class="btn btn-primary" href="#/contact">Nous écrire</a></p>`);
}
function pageContact(){
  const u=me();
  return legalPage('Contact',`
    <p>Une question, un problème, une entreprise à ajouter ? Écrivez-nous, nous répondons par e-mail.</p>
    <form class="form" id="contactForm">
      <div class="two"><label>Nom<input name="nom" required maxlength="80" autocomplete="name" value="${u?esc(u.name):''}"></label><label>E-mail<input name="email" type="email" required maxlength="120" autocomplete="email" value="${u?esc(u.email):''}"></label></div>
      <label>Sujet<select name="sujet">${['Question','Signaler un problème','Entreprise / partenariat','Supprimer mon compte','Autre'].map(x=>`<option>${x}</option>`).join('')}</select></label>
      <label>Message<textarea name="message" required maxlength="2000" rows="5"></textarea></label>
      <p class="note">Vos informations servent uniquement à vous répondre. Voir la <a class="link" href="#/confidentialite">politique de confidentialité</a>.</p>
      <button class="btn btn-primary" type="submit">Envoyer</button>
    </form>`);
}
function pageMentions(){
  return legalPage('Mentions légales',`
    <h2>Éditeur du site</h2>
    <p>Bonszahé est édité par ${EDITEUR.nom}, ${EDITEUR.statut}.<br>Adresse : ${EDITEUR.adresse}<br>SIRET : ${EDITEUR.siret}<br>Contact : via la <a class="link" href="#/contact">page Contact</a>.</p>
    <p>Directeur de la publication : ${EDITEUR.directeur}.</p>
    <h2>Hébergement</h2>
    <p>Le site est hébergé par Wix.com Ltd., 40 Namal Tel Aviv St., Tel Aviv 6350671, Israël (www.wix.com).</p>
    <h2>Contenus publiés par les membres</h2>
    <p>Les codes promo, offres, votes et commentaires sont publiés par les membres de la communauté, sous leur responsabilité. Bonszahé ne garantit pas que chaque code fonctionne : la communauté indique s’il marche encore et les codes signalés sont masqués. Tout contenu illicite ou inapproprié peut être signalé (bouton « Signaler » ou page Contact) ; il est alors retiré.</p>
    <h2>Entreprises citées</h2>
    <p>Les noms, marques et logos des entreprises appartiennent à leurs propriétaires respectifs. Une entreprise peut demander la modification ou le retrait de sa fiche via la page Contact.</p>
    <h2>Propriété intellectuelle</h2>
    <p>La présentation du site, son logo et ses textes sont la propriété de l’éditeur. Toute reproduction sans autorisation est interdite.</p>
    <h2>Liens externes</h2>
    <p>Le site contient des liens vers les sites des entreprises. Bonszahé n’est pas responsable de leur contenu.</p>`);
}
function pagePrivacy(){
  return legalPage('Politique de confidentialité',`
    <p>Cette page explique quelles données Bonszahé collecte, pourquoi, et comment exercer vos droits (Règlement général sur la protection des données, RGPD).</p>
    <h2>Responsable du traitement</h2>
    <p>${EDITEUR.nom}, ${EDITEUR.adresse}. Contact : <a class="link" href="#/contact">page Contact</a>.</p>
    <h2>Données collectées</h2>
    <ul>
      <li><strong>Compte membre</strong> : e-mail et pseudo. Le mot de passe est géré par Wix et n’est jamais accessible à Bonszahé.</li>
      <li><strong>Contributions</strong> : codes et offres proposés, votes (Moro/Maji, « le code marche »), commentaires, « j’aime » et signalements. Votre pseudo est affiché publiquement avec vos contributions.</li>
      <li><strong>Demandes des entreprises</strong> : nom du contact, téléphone, e-mail, numéro SIRET et entreprise concernée.</li>
      <li><strong>Messages de contact</strong> : nom, e-mail et message.</li>
      <li><strong>Statistiques pour les entreprises</strong> : nombre de vues des fiches, de codes copiés, de clics et d’appels. Ces mesures ne sont pas reliées à votre identité.</li>
      <li><strong>Stockage dans votre navigateur</strong> : vos favoris et votre session de connexion. Aucun cookie publicitaire n’est utilisé.</li>
      <li><strong>Localisation</strong> : seulement si vous touchez « Autour de moi » (ou, pour une entreprise, « utiliser ma position »). Elle sert dans votre navigateur à calculer les distances : elle n’est ni envoyée à Bonszahé ni enregistrée.</li>
    </ul>
    <h2>Pourquoi</h2>
    <p>Pour faire fonctionner le site (compte, publication des bons plans, points et badges), vérifier les entreprises, répondre à vos messages et fournir des statistiques aux entreprises. Base légale : l’exécution du service que vous utilisez et notre intérêt légitime à le sécuriser.</p>
    <h2>Prestataires</h2>
    <ul>
      <li><strong>Wix</strong> : hébergement du site, comptes membres et base de données.</li>
      <li><strong>Google reCAPTCHA</strong> : protection de l’inscription et de la connexion contre les robots. Les <a class="link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">règles de confidentialité</a> et les <a class="link" href="https://policies.google.com/terms" target="_blank" rel="noopener">conditions d’utilisation</a> de Google s’appliquent.</li>
      <li><strong>Google Fonts</strong> : affichage des polices de caractères.</li>
      <li><strong>OpenStreetMap</strong> (fonds de carte) et <strong>cdnjs / Cloudflare</strong> (outil d’affichage de la carte) : votre navigateur les contacte pour afficher la carte des magasins.</li>
    </ul>
    <h2>Durée de conservation</h2>
    <p>Les données du compte et les contributions sont conservées tant que le compte existe. Les demandes des entreprises et les messages de contact sont conservés 3 ans au plus.</p>
    <h2>Vos droits</h2>
    <p>Vous pouvez accéder à vos données, les corriger, demander leur suppression (y compris la suppression de votre compte) ou vous opposer à leur traitement : écrivez-nous via la <a class="link" href="#/contact">page Contact</a> (sujet « Supprimer mon compte » pour une suppression). Vous pouvez aussi adresser une réclamation à la CNIL (www.cnil.fr).</p>`);
}
// Affichage en caisse d'une offre en magasin
function caisseDialog(id){
  const c=allCodes().find(x=>x.id===id); if(!c) return;
  const b=bizBy(c.biz);
  openDialog(`<header><div><h2 id="dlgTitle">Offre en magasin</h2><p class="u14 note">Montrez cet écran en caisse.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  <div class="caisse">
    <div class="bizline">${logo(b,'md')}<strong>${esc(b.name)}</strong></div>
    <div class="caisse-deal">${esc(c.deal)}</div>
    ${c.detail?`<p>${esc(c.detail)}</p>`:''}
    ${c.cond?`<p class="muted">${esc(c.cond)}</p>`:''}
    <p class="caisse-meta">${c.noExp?'Sans date limite':'Valable jusqu’au '+fmt(c.exp)}${b.addr?'<br>'+esc(b.addr):''}</p>
    <p class="caisse-brand">Bon plan Bonszahé · ${fmt(new Date())}</p>
  </div>`);
}

/* ---------- Commentaires ---------- */
const MASK_AT=3; // signalements de membres différents avant masquage automatique
const ago=d=>{ const s=Math.max(0,(Date.now()-d)/1000);
  if(s<60) return 'à l’instant'; if(s<3600) return 'il y a '+Math.floor(s/60)+' min'; if(s<86400) return 'il y a '+Math.floor(s/3600)+' h';
  if(s<86400*7) return 'il y a '+Math.floor(s/86400)+' j'; return fmt(d); };
const commentsOf=codeId=>COMMENTS.filter(x=>x.code===codeId);
const likesOf=cid=>new Set(LIKES.filter(l=>l.comment===cid).map(l=>l.owner)).size;
const myLike=cid=>me()&&LIKES.find(l=>l.comment===cid&&l.owner===me().id);
const myReport=cid=>me()&&REPORTS.find(r=>r.comment===cid&&r.owner===me().id);
function isHidden(cm){
  const d=MODERATION[cm.id];
  if(d==='approuve') return false;
  if(d==='masque') return true;
  return new Set(REPORTS.filter(r=>r.comment===cm.id).map(r=>r.owner)).size>=MASK_AT;
}
const countComments=codeId=>commentsOf(codeId).filter(cm=>!isHidden(cm)).length;
let commentSort='anciens', replyTo='';
function commentItem(cm,c,isReply){
  const b=bizBy(c.biz)||{owners:[]}; const pro=b.owners.includes(cm.owner); const mine=me()&&cm.owner===me().id;
  const replies=isReply?[]:commentsOf(c.id).filter(r=>r.parent===cm.id).sort((a,z)=>a.at-z.at);
  const hidden=isHidden(cm); const n=likesOf(cm.id);
  const lvl=levelOf(statsFor(cm.owner).points).name;
  return `<li class="cm${isReply?' reply':''}" id="cm-${esc(cm.id)}">
    <div class="cmhead"><strong>${esc(cm.name||'Membre')}</strong>${pro?`<span class="pill ok">${ic('store')}Entreprise</span>`:`<small class="muted">${esc(lvl)}</small>`}<small class="muted">· ${ago(cm.at)}</small></div>
    ${hidden?`<p class="cmtext muted"><em>Commentaire masqué suite à des signalements.</em></p>`:`<p class="cmtext">${esc(cm.text)}</p>
    <div class="cmacts">
      <button class="cmbtn" data-like="${esc(cm.id)}" aria-pressed="${!!myLike(cm.id)}">👍 J’aime${n?' ('+n+')':''}</button>
      ${isReply?'':`<button class="cmbtn" data-reply="${esc(cm.id)}">${ic('left')}Répondre</button>`}
      ${mine?`<button class="cmbtn" data-delcomment="${esc(cm.id)}">Supprimer</button>`:`<button class="cmbtn" data-report="${esc(cm.id)}"${myReport(cm.id)?' disabled':''}>${myReport(cm.id)?'Signalé':'Signaler'}</button>`}
    </div>`}
    ${!isReply&&replyTo===cm.id?commentForm(c.id,cm.id):''}
    ${replies.length?`<ul class="cmlist">${replies.map(r=>commentItem(r,c,true)).join('')}</ul>`:''}
  </li>`;
}
function commentForm(codeId,parent=''){
  const dm=String(codeId).startsWith('dm:');
  if(!me()) return `<div class="cmform"><button class="btn btn-ghost" data-needlogin="${dm?'demande':'comment'}">${ic('plus')}Connectez-vous pour ${dm?'répondre':'commenter'}</button></div>`;
  return `<form class="cmform" data-commentform="${esc(codeId)}" data-parent="${esc(parent)}">
    <label class="sr" for="ta-${esc(parent||'new')}">${parent||dm?'Votre réponse':'Votre commentaire'}</label>
    <textarea id="ta-${esc(parent||'new')}" name="text" required maxlength="500" rows="${parent?2:3}" placeholder="${parent?'Votre réponse…':dm?'Votre réponse : un code, une astuce… (500 caractères max.)':'Votre commentaire… (500 caractères max.)'}"></textarea>
    <div class="cmformacts">${parent?`<button type="button" class="btn btn-ghost btn-sm" data-reply="">Annuler</button>`:''}<button class="btn btn-primary btn-sm" type="submit">${parent?'Répondre':'Publier'}</button></div>
  </form>`;
}
function commentsBlock(c){
  const top=commentsOf(c.id).filter(cm=>!cm.parent).sort((a,z)=>commentSort==='recents'?z.at-a.at:a.at-z.at);
  const n=countComments(c.id), dm=String(c.id).startsWith('dm:'), w=dm?'réponse':'commentaire';
  return `<section class="comments" id="comments">
    <div class="head"><h2>${n} ${w}${n>1?'s':''}</h2>
      <div class="seg" role="group" aria-label="Trier les commentaires"><button data-csort="anciens" aria-pressed="${commentSort==='anciens'}">Plus anciens</button><button data-csort="recents" aria-pressed="${commentSort==='recents'}">Plus récents</button></div></div>
    ${replyTo?'':commentForm(c.id)}
    ${top.length?`<ul class="cmlist">${top.map(cm=>commentItem(cm,c,false)).join('')}</ul>`:`<p class="muted">${dm?'Pas encore de réponse. Vous avez un code ou une astuce ? Partagez-la !':'Aucun commentaire pour l’instant. Donnez votre avis sur ce bon plan !'}</p>`}
  </section>`;
}
const dealUrl=c=>location.origin+'/#/bon-plan/'+encodeURIComponent(c.id);
function pageDeal(id){
  const c=allCodes().find(x=>x.id===id);
  if(!c) return notFound('Ce bon plan n’existe plus','Il a peut-être expiré ou été retiré.','<a class="btn btn-primary" href="#/tendances">Voir les tendances</a>','#/tendances');
  const b=bizBy(c.biz);
  const msg=`${c.deal} chez ${b.name} avec le code ${c.code} 👉 ${dealUrl(c)}`;
  const off=c.status!=='valide'||daysLeft(c)<0;
  return `<div class="wrap">
    ${backBtn('#/tendances')}
    <h1 class="pagetitle">${esc(c.deal)} chez ${esc(b.name)}</h1>
    <div class="dealpage">
      <div class="stack">
        ${off?`<p class="authmsg">Ce bon plan a expiré ou n’est plus actif.</p>`:''}
        <div class="coupons one">${coupon(c,{showBiz:true,noLink:true})}</div>
        <div class="share">
          <a class="btn btn-wa" href="https://wa.me/?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">Partager sur WhatsApp</a>
          <button class="btn btn-ghost" data-copylink="${esc(dealUrl(c))}">${ic('copy')}Copier le lien</button>
        </div>
        ${commentsBlock(c)}
      </div>
      <aside class="aside"><div class="card">${logo(b,'md')}<h3>${esc(b.name)}</h3><p class="muted">${esc(b.desc)}</p><a class="btn btn-ghost btn-sm" href="#/entreprises/${b.slug}">Voir l’entreprise</a></div></aside>
    </div>
    <div class="u7"></div>
  </div>`;
}
async function toggleLike(cid){
  const l=myLike(cid);
  if(l){ await call('DELETE',`/wix-data/v2/items/${encodeURIComponent(l.id)}?dataCollectionId=JaimeCommentaires`); LIKES=LIKES.filter(x=>x.id!==l.id); return false; }
  const r=await sendToWix('JaimeCommentaires',{commentaire:cid});
  LIKES.push({id:r.dataItem&&r.dataItem.id,comment:cid,owner:me().id}); return true;
}
function reportDialog(cid){
  openDialog(`<header><div><h2 id="dlgTitle">Signaler ce commentaire</h2><p class="u14 note">Au bout de ${MASK_AT} signalements, le commentaire est masqué automatiquement.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  <form class="form" id="reportForm" data-cid="${esc(cid)}">
    ${['Spam ou publicité','Insultes ou propos déplacés','Faux code ou arnaque','Autre'].map((m,i)=>`<label class="radio"><input type="radio" name="motif" value="${m}"${i===0?' checked':''}> ${m}</label>`).join('')}
    <button class="btn btn-primary" type="submit">Signaler</button>
  </form>`);
}

/* ---------- Tendances (Moro / Maji) ---------- */
function pageTrends(params){
  const f=params.get('f')||'tendance';
  const tabs=[['tendance','🔥 Tendance'],['chauds','🌋 Les + chauds'],['nouveautes','Nouveautés']];
  let list=activeCodes();
  if(f==='chauds') list.sort((a,b)=>b.heat-a.heat||b.addedAt-a.addedAt);
  else if(f==='nouveautes') list.sort((a,b)=>b.addedAt-a.addedAt);
  else list.sort((a,b)=>hotScore(b)-hotScore(a));
  const intro={tendance:'Les bons plans qui chauffent en ce moment : les Moro récents comptent le plus.',chauds:'Le classement des bons plans les plus chauds de Bonszahé.',nouveautes:'Les derniers bons plans partagés : donnez-leur du Moro 🔥 ou du Maji 💧.'}[f]||'';
  return `<div class="wrap">
    <div class="pagehead"><h1>Tendances</h1><p class="muted">Donnez du <strong>Moro 🔥</strong> aux bons plans qui valent le coup, du <strong>Maji 💧</strong> à ceux qui déçoivent. Au-delà de ${VOLCAN}, un bon plan devient <strong>Volcan 🌋</strong>.</p></div>
    <div class="toolbar"><div class="seg full" role="group" aria-label="Classement">${tabs.map(([k,l])=>`<a href="#/tendances?f=${k}" aria-pressed="${f===k}">${l}</a>`).join('')}</div></div>
    <p class="results">${esc(intro)}</p>
    <div class="u13">${list.length?`<div class="coupons">${list.map(c=>coupon(c)).join('')}</div>`:
      empty('Aucun bon plan pour le moment','Partagez le premier !',`<button class="btn btn-sun" data-propose="">${ic('plus')}Proposer un code promo</button>`)}</div>
    <p class="note u13"><a class="link" href="#/codes">Rechercher dans tous les codes promo</a> · <a class="link" href="#/demandes">Vous cherchez un code ? Demandez à la communauté</a></p>
    <div class="u8"></div>
  </div>`;
}

function pageCategories(){
  return `<div class="wrap">
    ${backBtn('#/')}<div class="pagehead"><h1>Catégories</h1><p class="muted">Parcourez les entreprises de Mayotte par activité.</p></div>
    <div class="u13 cats">${CATS.map(catCard).join('')}</div>
    <div class="u8"></div>
  </div>`;
}

function pageSearch(params){
  const q=params.get('q')||'';
  const nq=norm(q);
  const biz=nq?B.filter(b=>norm(b.name+' '+b.desc+' '+catBy(b.cat).name).includes(nq)):[];
  const codes=nq?activeCodes().filter(c=>norm(bizBy(c.biz).name+' '+c.deal+' '+c.detail+' '+c.code).includes(nq)):[];
  return `<div class="wrap">
    ${backBtn('#/')}<div class="pagehead"><h1>Recherche</h1></div>
    <form class="u15 field" data-search>${ic('search')}<label class="sr" for="sq">Rechercher</label><input id="sq" name="q" type="search" placeholder="Une entreprise ou un bon plan" value="${esc(q)}" autocomplete="off"></form>
    ${!q?`<div class="cats">${CATS.map(catCard).join('')}</div>`:`
      ${codes.length?`<div class="head"><h2>Bons plans</h2></div><div class="coupons">${codes.map(c=>coupon(c)).join('')}</div><div class="u6"></div>`:''}
      ${biz.length?`<div class="head"><h2>Entreprises</h2></div><div class="bizgrid compact">${biz.map(bizCard).join('')}</div>`:''}
      ${!codes.length&&!biz.length?empty(`Aucun résultat pour « ${esc(q)} »`,'Vérifiez l’orthographe, ou demandez à la communauté.','<a class="btn btn-primary" href="#/demandes">Demander un bon plan</a>'):''}
      <div class="card u13 followcard"><p><strong>Être prévenu des prochains bons plans « ${esc(q)} » ?</strong></p>${followBtn('mot',q.slice(0,40),'Créer une alerte','btn btn-primary btn-sm')}</div>
    `}
    <div class="u8"></div>
  </div>`;
}

function pageFavs(){
  const list=S.favs.map(bizBy).filter(Boolean);
  return `<div class="wrap">
    <div class="pagehead"><h1>Mes favoris</h1><p class="muted">Retrouvez vite les entreprises que vous suivez.</p></div>
    <div class="u13">${list.length?`<div class="bizgrid">${list.map(bizCard).join('')}</div>`:
      empty('Aucun favori pour l’instant','Touchez le cœur sur une fiche entreprise pour la retrouver ici.','<a class="btn btn-primary" href="#/entreprises">Parcourir les entreprises</a>')}</div>
    <div class="u8"></div>
  </div>`;
}

/* ---------- Points, niveaux et badges ---------- */
// Barème : 10 points par code publié, 2 par Moro reçu, 1 par « fonctionne » reçu, 1 par avis donné (Moro/Maji ou « ça marche »).
const LEVELS=[[0,'Nouveau membre'],[25,'Débrouillard'],[100,'Chasseur de bons plans'],[250,'Expert des bons plans'],[500,'Légende de l’île']];
function statsFor(memberId){
  const codes=allCodes().filter(c=>c.by===memberId&&c.status==='valide');
  const upReceived=codes.reduce((s,c)=>s+c.up,0);
  const moroReceived=codes.reduce((s,c)=>s+c.moro,0);
  const bestHeat=codes.reduce((m,c)=>Math.max(m,c.heat),0);
  const myComments=COMMENTS.filter(x=>x.owner===memberId&&!isHidden(x));
  const perDay={}; myComments.forEach(x=>{ const k=x.at.toISOString().slice(0,10); perDay[k]=Math.min(5,(perDay[k]||0)+1); });
  const commentPts=Object.values(perDay).reduce((a,b)=>a+b,0);
  const likesReceived=myComments.reduce((s,x)=>s+likesOf(x.id),0);
  const bestComment=myComments.reduce((m,x)=>Math.max(m,likesOf(x.id)),0);
  const votesGiven=new Set(VOTES.filter(v=>v.owner===memberId).map(v=>v.code)).size+new Set(MOROS.filter(v=>v.owner===memberId).map(v=>v.code)).size;
  const cats=new Set(codes.map(c=>bizBy(c.biz).cat)).size;
  const best=codes.reduce((m,c)=>Math.max(m,c.up),0);
  const filleuls=filleulsOf(memberId).filter(x=>x.active).length;
  return {filleuls,codes,upReceived,moroReceived,bestHeat,votesGiven,cats,best,comments:myComments.length,likesReceived,bestComment,points:codes.length*10+moroReceived*2+upReceived+votesGiven+commentPts+likesReceived+filleuls*15};
}
const BADGES=[
  {name:'Premier bon plan',desc:'Partager 1 code',icon:'plus',val:s=>[s.codes.length,1]},
  {name:'Chasseur',desc:'Partager 5 codes',icon:'search',val:s=>[s.codes.length,5]},
  {name:'Expert des codes',desc:'Partager 15 codes',icon:'badge',val:s=>[s.codes.length,15]},
  {name:'Code en or',desc:'Un de vos codes confirmé 10 fois',icon:'up',val:s=>[s.best,10]},
  {name:'Voix de la communauté',desc:'Donner 10 avis',icon:'check',val:s=>[s.votesGiven,10]},
  {name:'Pilier Bonszahé',desc:'Donner 50 avis',icon:'heart',val:s=>[s.votesGiven,50]},
  {name:'Explorateur',desc:'Des codes dans 3 catégories',icon:'grid',val:s=>[s.cats,3]},
  {name:'Volcan',desc:'Un de vos bons plans atteint '+VOLCAN+' de chaleur',icon:'sun',val:s=>[s.bestHeat,VOLCAN]},
  {name:'Bavard',desc:'Écrire 20 commentaires',icon:'mail',val:s=>[s.comments,20]},
  {name:'Bon conseil',desc:'Un commentaire aimé 10 fois',icon:'up',val:s=>[s.bestComment,10]},
  {name:'Ambassadeur',desc:'Parrainer 3 membres actifs',icon:'heart',val:s=>[s.filleuls,3]}
];
function levelOf(p){ let i=0; LEVELS.forEach((l,j)=>{ if(p>=l[0]) i=j; }); return {name:LEVELS[i][1],next:LEVELS[i+1]}; }
function leaderboard(){
  const ids=[...new Set([...baseCodes.filter(c=>c.by).map(c=>c.by),...COMMENTS.map(x=>x.owner),...PARRAINAGES.map(x=>x.parrain)])];
  return ids.map(id=>{ const s=statsFor(id); const name=(baseCodes.find(c=>c.by===id&&c.byName)||{}).byName||(COMMENTS.find(x=>x.owner===id&&x.name)||{}).name||'Membre'; return Object.assign({id,name},s); })
    .filter(x=>x.points>0).sort((a,b)=>b.points-a.points);
}
function badgeGrid(s){
  return `<div class="badges">${BADGES.map(bd=>{ const [v,goal]=bd.val(s); const ok=v>=goal; return `<div class="bdg${ok?' on':''}">
    <span class="bic">${ic(bd.icon)}</span><strong>${bd.name}</strong><small>${ok?'Obtenu':`${bd.desc} (${Math.min(v,goal)}/${goal})`}</small></div>`; }).join('')}</div>`;
}

/* ---------- Connexion / inscription ---------- */
let authMode='login', afterLogin=null;
function authBox(msg=''){
  if(!msg&&loginNotice){ msg=esc(loginNotice); loginNotice=''; }
  if(pendingState) return `<div class="card form authcard">
    <h3>Vérifiez votre e-mail</h3>
    <p class="muted">Nous venons de vous envoyer un code à 6 chiffres. Saisissez-le pour activer votre compte.</p>
    <form class="form" id="verifyForm">
      <label>Code reçu par e-mail<input name="code" required inputmode="numeric" autocomplete="one-time-code" maxlength="8"></label>
      <p class="note err" id="authErr" role="alert"></p>
      <button class="btn btn-primary" type="submit">Valider</button>
    </form></div>`;
  const reg=authMode==='register';
  return `<div class="card form authcard">
    ${msg?`<p class="authmsg">${msg}</p>`:''}
    <div class="seg" role="group" aria-label="Connexion ou inscription">
      <button type="button" data-authmode="login" aria-pressed="${!reg}">Se connecter</button>
      <button type="button" data-authmode="register" aria-pressed="${reg}">Créer un compte</button>
    </div>
    <form class="form" id="authForm">
      ${reg?`<label>Pseudo <span class="opt">(affiché sur les codes que vous partagez)</span><input name="nick" required maxlength="30" autocomplete="nickname"></label>`:''}
      <label>E-mail<input name="email" type="email" required autocomplete="email"></label>
      <label>Mot de passe<input name="password" type="password" required minlength="6" autocomplete="${reg?'new-password':'current-password'}"></label>
      <div id="captchaBox" class="captcha" hidden></div>
      <p class="note err" id="authErr" role="alert"></p>
      <button class="btn btn-primary" type="submit">${reg?'Créer mon compte':'Se connecter'}</button>
      ${reg?'':`<button type="button" class="linkbtn" data-forgot>Mot de passe oublié ?</button>`}
      <p class="note">Connexion sécurisée par Wix : votre mot de passe n’est jamais stocké par Bonszahé. Protégé par reCAPTCHA : les <a class="link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">règles de confidentialité</a> et <a class="link" href="https://policies.google.com/terms" target="_blank" rel="noopener">conditions</a> de Google s’appliquent. <a class="link" href="#/confidentialite">Nos données</a>.</p>
    </form></div>`;
}
function requireLogin(msg,then){
  if(me()) return true;
  afterLogin=then; authMode='login';
  openDialog(`<header><div><h2 id="dlgTitle">Connexion</h2></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>${authBox(msg)}`);
  return false;
}
function redrawAuth(msg){
  const inDlg=dlg.open&&dlgBody.querySelector('.authcard');
  if(inDlg) dlgBody.querySelector('.authcard').outerHTML=authBox(msg);
  else route();
}

/* ---------- Mon espace ---------- */
function pageProfile(){
  if(!me()) return `<div class="u16 wrap">
    <div class="pagehead"><h1>Mon espace</h1><p class="muted">Créez votre compte pour partager des codes, donner votre avis, gagner des points et des badges.</p></div>
    ${authBox()}
    <div class="u8"></div>
  </div>`;
  const u=me(), s=statsFor(u.id), lv=levelOf(s.points);
  const pct=lv.next?Math.round((s.points-LEVELS.find(l=>l[1]===lv.name)[0])/(lv.next[0]-LEVELS.find(l=>l[1]===lv.name)[0])*100):100;
  const status={attente:['wait','En cours de publication'],valide:['ok','Publié'],refuse:['no','Refusé']};
  const owned=B.filter(b=>b.owners.includes(u.id));
  return `<div class="u17 wrap">
    <div class="pagehead"><h1>Bonjour ${esc(u.name)}</h1><p class="muted">${esc(u.email)}</p></div>
    <div class="card level">
      <div class="lvhead"><span class="lvic">${ic('badge')}</span><div><small class="muted">Votre niveau</small><strong>${esc(lv.name)}</strong></div><b class="pts">${s.points} pts</b></div>
      <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><span style="width:${pct}%"></span></div>
      <p class="note">${lv.next?`Encore ${lv.next[0]-s.points} points pour devenir « ${esc(lv.next[1])} ».`:'Niveau maximum atteint, bravo !'} 10 pts par code publié, 2 pts par Moro 🔥 reçu, 1 pt par « fonctionne » reçu, 1 pt par avis donné, 1 pt par commentaire (5 par jour max.) et par « j’aime » reçu, 15 pts par filleul actif.</p>
    </div>
    <div class="stats four">
      <div class="stat"><b>${s.codes.length}</b><span>Codes partagés</span></div>
      <div class="stat"><b>${s.moroReceived}</b><span>Moro 🔥 reçus</span></div>
      <div class="stat"><b>${s.votesGiven}</b><span>Avis donnés</span></div>
      <div class="stat"><b>${S.favs.length}</b><span>Favoris</span></div>
    </div>
    <div class="stack">
      <a class="btn btn-wa" href="${waHref(`Je suis « ${lv.name} » sur Bonszahé avec ${s.points} points 🔥 Rejoins la communauté des bons plans de Mayotte 👉 ${location.origin}/`)}" target="_blank" rel="noopener">Partager mon niveau sur WhatsApp</a>
      <div class="quick"><a href="#/alertes">🔔<span>Mes alertes${MINE.alerts.length?' ('+MINE.alerts.length+')':''}</span></a><a href="#/demandes">🙋<span>Demandes</span></a><a href="#/recompenses">🎁<span>Récompenses</span></a></div>
      ${referralCard()}
      <div><div class="head"><h2>Mes badges</h2><a class="link" href="#/classement">Voir le classement</a></div>${badgeGrid(s)}</div>
      <div>
        <div class="head"><h2>Mes codes partagés</h2><button class="btn btn-sun btn-sm" data-propose="">${ic('plus')}Proposer</button></div>
        ${MINE.proposals.length?`<div class="list">${MINE.proposals.map(p=>{const b=bizBy(p.biz);const c=baseCodes.find(x=>x.by===u.id&&x.code===p.code&&x.biz===p.biz);const st=status[p.status]||status.attente;return `<div class="li">${logo(b)}<div class="grow"><strong>${esc(p.code)}</strong> ${esc(p.deal)}<small>${esc(b.name)}${p.exp?', expire le '+fmt(dateFrom(p.exp)):''}${c?` · ${allCodes().find(x=>x.id===c.id).up} « fonctionne »`:''}</small></div><span class="pill ${st[0]}">${st[1]}</span></div>`}).join('')}</div>`:
          empty('Vous n’avez encore partagé aucun code','Un code partagé aide toute la communauté et vous rapporte 10 points.','')}
      </div>
      ${owned.length?`<div><div class="head"><h2>Espace pro</h2></div><div id="proDash" class="stack"><p class="muted">Chargement de vos statistiques…</p></div></div>`:
      `<div class="card">
        <h3>Espace professionnel</h3>
        <p class="muted">Vous gérez une entreprise ? Revendiquez sa fiche pour publier vos offres officielles et voir vos statistiques : vues de la page, codes copiés, clics vers votre site et appels.</p>
        ${MINE.claims.length?`<div class="list">${MINE.claims.map(c=>`<div class="li"><div class="grow"><strong>${esc(c.name)}</strong><small>Demande du ${fmt(c.at)}</small></div><span class="pill ${c.status==='Validée'?'ok':c.status==='Refusée'||c.status==='Retirée'?'no':'wait'}">${c.status==='Nouvelle'?'En cours de vérification':esc(c.status)}</span></div>`).join('')}</div>`:''}
        <button class="u10 btn btn-ghost" data-claim="">Revendiquer mon entreprise</button>
      </div>`}
      <button class="u9 btn btn-ghost" id="logout">Se déconnecter</button>
    </div>
    <div class="u8"></div>
  </div>`;
}

/* ---------- Espace pro : statistiques, fiche et événements ---------- */
const dayKey=d=>`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
const isCopy=t=>t==='copie'||t==='caisse';
function deltaTxt(now,before){
  if(!before) return now?'<small class="delta up">nouveau</small>':'';
  const p=Math.round((now-before)/before*100);
  return `<small class="delta ${p>0?'up':p<0?'down':''}">${p>0?'+':''}${p} % vs 30 j précédents</small>`;
}
function proChart(days){
  const max=Math.max(1,...days.map(d=>d.views));
  const tot=days.reduce((n,d)=>n+d.views,0), cop=days.reduce((n,d)=>n+d.copies,0);
  return `<figure class="chart"><figcaption><span class="lg lg-v"></span>Vues <span class="lg lg-c"></span>Codes copiés / offres montrées</figcaption>
    <div class="bars" role="img" aria-label="30 derniers jours : ${tot} vues et ${cop} codes copiés">${days.map(d=>{
      const label=d.date.toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'short'});
      return `<div class="day" title="${esc(label)} : ${d.views} vue${d.views>1?'s':''}, ${d.copies} copie${d.copies>1?'s':''}"><span class="v" style="height:${d.views/max*100}%"></span><span class="c" style="height:${Math.min(d.copies,max)/max*100}%"></span></div>`;}).join('')}</div>
    <div class="axis"><span>${days[0].date.toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</span><span>aujourd’hui</span></div></figure>`;
}
async function drawPro(){
  const el=document.getElementById('proDash'); if(!el||!me()) return;
  const since=new Date(TODAY); since.setDate(since.getDate()-29);
  const before=new Date(since); before.setDate(before.getDate()-30);
  const week=Date.now()-7*864e5;
  const owned=B.filter(b=>b.owners.includes(me().id));
  const blocks=await Promise.all(owned.map(async b=>{
    let rows=[]; try{ rows=await queryAll('Statistiques',{entreprise:b.id}); }catch(e){ console.warn(e); }
    rows=rows.map(r=>({type:r.type,code:r.code,at:stamp(r._createdDate)}));
    const match=(r,t)=>t==='copie'?isCopy(r.type):r.type===t;
    const n=(t,from,to)=>rows.filter(r=>match(r,t)&&(!from||r.at>=from)&&(!to||r.at<to)).length;
    const tile=(t,label)=>`<div class="stat"><b>${n(t,since)}</b><span>${label}</span>${deltaTxt(n(t,since),n(t,before,since))}<small>${n(t)} au total</small></div>`;
    const days=Array.from({length:30},(_,i)=>{ const d=new Date(since); d.setDate(d.getDate()+i); return {date:d,key:dayKey(d),views:0,copies:0}; });
    const idx={}; days.forEach(d=>idx[d.key]=d);
    rows.forEach(r=>{ const d=idx[dayKey(r.at)]; if(!d) return; if(r.type==='vue') d.views++; else if(isCopy(r.type)) d.copies++; });
    const best=days.reduce((a,d)=>d.views+d.copies>a.views+a.copies?d:a,days[0]);
    const wk=[0,0,0,0,0,0,0]; rows.filter(r=>r.at>=since).forEach(r=>wk[r.at.getDay()]++);
    const wkBest=wk.indexOf(Math.max(...wk));
    const all=allCodes().filter(c=>c.biz===b.slug);
    const live=all.filter(c=>c.status==='valide'&&daysLeft(c)>=0&&!flagged(c));
    const avgHeat=live.length?Math.round(live.reduce((n,c)=>n+c.heat,0)/live.length*10)/10:0;
    const codes=all.map(c=>({c,copies:rows.filter(r=>isCopy(r.type)&&r.code===c.id).length})).sort((a,z)=>z.copies-a.copies);
    const ids=new Set(all.map(c=>c.id));
    const recent=COMMENTS.filter(cm=>ids.has(cm.code)&&cm.at>=week&&!isHidden(cm)&&!b.owners.includes(cm.owner)).sort((a,z)=>z.at-a.at);
    const edits=MINE.edits.filter(x=>x.entreprise===b.id&&x.status!=='Appliquée').slice(0,3);
    const evs=MINE.events.filter(x=>x.entreprise===b.id&&x.date&&x.date>=TODAY&&!EVENTS.some(e=>e.biz===b.slug&&e.title===x.title)).slice(0,3);
    const hasData=rows.some(r=>r.at>=since);
    return `<div class="card pro">
      <div class="lvhead">${logo(b,'md')}<div><strong>${esc(b.name)}</strong><small class="muted">30 derniers jours</small></div><a class="btn btn-ghost btn-sm" href="#/entreprises/${b.slug}">Voir ma fiche</a></div>
      <div class="bandbtns"><button class="btn btn-sun btn-sm" data-propose="${b.slug}">${ic('plus')}Publier une offre</button><button class="btn btn-ghost btn-sm" data-editbiz="${b.slug}">Modifier ma fiche</button><button class="btn btn-ghost btn-sm" data-proevent="${b.slug}">Annoncer un événement</button></div>
      ${edits.length||evs.length?`<div class="list">${edits.map(x=>`<div class="li"><div class="grow"><strong>Modification de la fiche</strong><small>Envoyée le ${fmt(x.at)}</small></div><span class="pill ${x.status==='Refusée'?'no':'wait'}">${x.status==='Refusée'?'Refusée':'En vérification'}</span></div>`).join('')}${evs.map(x=>`<div class="li"><div class="grow"><strong>${esc(x.title)}</strong><small>Événement du ${fmt(x.date)}</small></div><span class="pill wait">En vérification</span></div>`).join('')}</div>`:''}
      <div class="stats five">${tile('vue','Vues de la fiche')}${tile('copie','Codes copiés / offres montrées')}${tile('site','Clics vers le site')}${tile('appel','Appels')}${tile('itineraire','Itinéraires demandés')}</div>
      ${!b.pos&&b.sale!=='en-ligne'?`<p class="authmsg">Votre magasin n’est pas encore sur la carte. <button class="linkbtn link" data-editbiz="${b.slug}">Placer mon magasin</button></p>`:''}
      ${hasData?proChart(days):'<p class="muted">Les statistiques jour par jour apparaîtront dès les premières visites de votre fiche.</p>'}
      <div class="insights">
        ${hasData?`<div><span>Meilleur jour</span><strong>${best.date.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'})}</strong><small>${best.views} vue${best.views>1?'s':''}, ${best.copies} copie${best.copies>1?'s':''}</small></div>
        <div><span>Jour le plus actif</span><strong>${['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'][wkBest]}</strong><small>sur les 30 derniers jours</small></div>`:''}
        <div><span>Chaleur moyenne de vos offres</span><strong>${live.length?(avgHeat>0?'+':'')+avgHeat+' '+(avgHeat<0?'💧':'🔥'):'—'}</strong><small>${live.length?live.length+' offre'+(live.length>1?'s':'')+' en ligne':'aucune offre en ligne'}</small></div>
        <div><span>Commentaires (7 jours)</span><strong>${recent.length}</strong><small>sur vos offres</small></div>
      </div>
      ${recent.length?`<h3>Derniers commentaires</h3><div class="list">${recent.slice(0,5).map(cm=>{ const c=all.find(x=>x.id===cm.code); return `<a class="li" href="#/bon-plan/${encodeURIComponent(cm.code)}"><div class="grow"><strong>${esc(cm.name||'Membre')}</strong> <small class="muted">${ago(cm.at)} · ${esc(c.deal)}</small><small>${esc(cm.text.slice(0,140))}${cm.text.length>140?'…':''}</small></div><span class="pill">Répondre</span></a>`; }).join('')}</div>`:''}
      <h3>Vos offres</h3>
      ${codes.length?`<div class="list">${codes.map(({c,copies})=>`<div class="li"><div class="grow"><strong>${c.store?'Offre en magasin':esc(c.code)}</strong> ${esc(c.deal)}<small>${copies} ${c.store?'affichage'+(copies>1?'s':'')+' en caisse':'copie'+(copies>1?'s':'')} · chaleur ${c.heat} (${c.moro} Moro, ${c.maji} Maji) · ${c.up} « fonctionne » · ${c.down} « ne fonctionne plus » · ${countComments(c.id)} commentaire${countComments(c.id)>1?'s':''}${daysLeft(c)<0?' · expirée':flagged(c)?' · masquée (signalée)':''}</small></div></div>`).join('')}</div>`:'<p class="muted">Aucune offre pour le moment.</p>'}
    </div>`;
  }));
  el.innerHTML=blocks.join('');
}
const ownerOf=slug=>{ const b=bizBy(slug); return b&&me()&&b.owners.includes(me().id)?b:null; };
const isoDay=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const communeSelect=(name,cur)=>`<select name="${name}">${selOpts([['','Choisir'],...[...COMMUNES].sort((a,z)=>a.name.localeCompare(z.name,'fr')).map(c=>[c.slug,c.name])],cur)}</select>`;
function editBizDialog(slug){
  const b=ownerOf(slug); if(!b){ toast('Seul le gestionnaire de la fiche peut la modifier.'); return; }
  const pending=MINE.edits.find(x=>x.entreprise===b.id&&x.status==='En attente');
  openDialog(`<header><div><h2 id="dlgTitle">Modifier ${esc(b.name)}</h2><p class="u14 note">Vos changements sont vérifiés par Bonszahé puis publiés sur votre fiche.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  ${pending?`<p class="authmsg">Une modification envoyée le ${fmt(pending.at)} est en cours de vérification. Une nouvelle demande la remplacera.</p>`:''}
  <form class="form" id="editBizForm" data-biz="${b.slug}">
    <label>Description<textarea name="description" maxlength="600" rows="4">${esc(b.desc)}</textarea></label>
    <div class="two"><label>Adresse<input name="adresse" maxlength="160" value="${esc(b.addr)}" autocomplete="street-address"></label><label>Commune${communeSelect('commune',b.commune)}</label></div>
    <fieldset class="radios"><legend>Où vendez-vous ?</legend>${Object.keys(SALES).map(k=>`<label class="radio"><input type="radio" name="typeVente" value="${k}"${(b.sale||(b.pos?'boutique':''))===k?' checked':''}> ${SALES[k]}</label>`).join('')}</fieldset>
    <div id="posBox" class="posbox"${b.sale==='en-ligne'?' hidden':''}>
      <p class="u14"><strong>Position du magasin sur la carte</strong><br><span class="note">Touchez la carte à l’endroit exact de l’entrée, puis déplacez le point si besoin.</span></p>
      <div id="posMap" class="leaf small" role="application" aria-label="Carte pour placer le magasin"></div>
      <div class="posrow"><button type="button" class="btn btn-ghost btn-sm" id="posHere">${ic('pin')}Je suis dans le magasin : utiliser ma position</button></div>
      <label>Position GPS <span class="opt">(remplie par la carte, ou collée depuis Google Maps)</span><input id="posInput" name="position" inputmode="decimal" maxlength="40" value="${esc(posStr(b.pos))}" placeholder="-12.7806, 45.2279"></label>
    </div>
    <label>Horaires d’ouverture <span class="opt">(facultatif)</span><input name="horaires" maxlength="160" value="${esc(b.hours)}" placeholder="Lun-Ven 8h-17h, Sam 8h-12h"></label>
    <div class="two"><label>Téléphone<input name="telephone" type="tel" maxlength="30" value="${esc(b.phone)}"></label><label>E-mail de contact<input name="email" type="email" maxlength="120" value="${esc(b.email)}"></label></div>
    <label>Site web <span class="opt">(facultatif)</span><input name="siteWeb" type="url" maxlength="200" value="${esc(b.web)}" placeholder="https://"></label>
    <p class="note">Pour changer votre logo, envoyez-le via la <a class="link" href="#/contact">page Contact</a>.</p>
    <p class="note err" id="editErr" role="alert"></p>
    <button class="btn btn-primary" type="submit">Envoyer les modifications</button>
  </form>`);
  initPosPicker(b.pos);
}
function proEventDialog(slug){
  const b=ownerOf(slug); if(!b){ toast('Seul le gestionnaire de la fiche peut annoncer un événement.'); return; }
  const min=isoDay(TODAY);
  openDialog(`<header><div><h2 id="dlgTitle">Annoncer un événement</h2><p class="u14 note">Vente privée, animation, ouverture… Il apparaîtra dans l’agenda et sur votre fiche après vérification.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  <form class="form" id="proEventForm" data-biz="${b.slug}">
    <label>Titre<input name="titre" required maxlength="90" placeholder="Ex. Grande braderie de fin d’année"></label>
    <div class="two"><label>Date<input name="date" type="date" required min="${min}"></label><label>Date de fin <span class="opt">(facultatif)</span><input name="dateFin" type="date" min="${min}"></label></div>
    <div class="two"><label>Heure <span class="opt">(facultatif)</span><input name="heure" maxlength="40" placeholder="9h - 18h"></label><label>Commune${communeSelect('commune',b.commune)}</label></div>
    <label>Lieu <span class="opt">(facultatif)</span><input name="lieu" maxlength="120" value="${esc(b.addr)}"></label>
    <label>Description<textarea name="description" maxlength="600" rows="3" required></textarea></label>
    <label>Lien <span class="opt">(facultatif)</span><input name="lien" type="url" maxlength="200" placeholder="https://"></label>
    <p class="note err" id="evErr" role="alert"></p>
    <button class="btn btn-primary" type="submit">Envoyer l’événement</button>
  </form>`);
}

/* ---------- Classement ---------- */
function pageRanking(){
  const lb=leaderboard().slice(0,50);
  const mine=me()&&lb.findIndex(x=>x.id===me().id);
  return `<div class="wrap">
    ${backBtn('#/profil')}<div class="pagehead"><h1>Classement de la communauté</h1><a class="btn btn-wa btn-sm u13" href="${waHref(`🏆 Le classement des chasseurs de bons plans de Mayotte sur Bonszahé 👉 ${location.origin}/#/classement`)}" target="_blank" rel="noopener">Partager le classement</a><p class="muted">Merci à celles et ceux qui partagent leurs bons plans ! 10 pts par code publié, 2 pts par Moro 🔥 reçu, 1 pt par « fonctionne » reçu, 1 pt par avis donné, 1 pt par commentaire (5 par jour max.) et par « j’aime » reçu, 15 pts par filleul actif.</p></div>
    <div class="u13">${lb.length?`<ol class="ranking">${lb.map((x,i)=>`<li class="${me()&&x.id===me().id?'me':''}"><span class="rk">${i+1}</span><div class="grow"><strong>${esc(x.name)}</strong><small>${esc(levelOf(x.points).name)} · ${x.codes.length} code${x.codes.length>1?'s':''} partagé${x.codes.length>1?'s':''}</small></div><b>${x.points} pts</b></li>`).join('')}</ol>`:
      empty('Le classement attend ses premiers chasseurs de bons plans','Partagez un code pour y apparaître.',`<button class="btn btn-sun" data-propose="">${ic('plus')}Proposer un code promo</button>`)}
    ${me()&&mine<0?`<p class="note">Vous n’apparaissez pas encore : partagez votre premier code !</p>`:''}</div>
    <div class="u8"></div>
  </div>`;
}

/* ---------- Événements locaux ---------- */
const upcomingEvents=()=>EVENTS.filter(e=>(e.end||e.date)>=TODAY);
function eventCard(e){
  const b=e.biz&&bizBy(e.biz);
  const when=e.date.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'})+(e.end&&e.end>e.date?' au '+e.end.toLocaleDateString('fr-FR',{day:'numeric',month:'long'}):'');
  const where=[e.place,e.commune?comBy(e.commune).name:e.communeName].filter(Boolean).join(', ');
  return `<article class="event">
    ${e.img?`<img class="evimg" src="${esc(e.img)}" alt="" loading="lazy">`:''}
    <div class="evbody">
      <div class="evdate" aria-hidden="true"><b>${e.date.getDate()}</b><span>${e.date.toLocaleDateString('fr-FR',{month:'short'}).replace('.','')}</span></div>
      <div class="grow">
        <h3>${esc(e.title)}</h3>
        <p class="evmeta">${ic('clock')}${esc(when)}${e.time?' · '+esc(e.time):''}</p>
        ${where?`<p class="evmeta">${ic('pin')}${esc(where)}</p>`:''}
        ${e.desc?`<p class="evdesc">${esc(e.desc)}</p>`:''}
        <div class="evacts">
          ${b?`<a class="bizline" href="#/entreprises/${b.slug}">${logo(b)}<span>${esc(b.name)}</span></a>`:''}
          ${e.link?`<a class="btn btn-ghost btn-sm" href="${esc(e.link)}" target="_blank" rel="noopener">${ic('ext')}En savoir plus</a>`:''}
          <a class="btn btn-wa btn-sm" href="${waHref(`📅 ${e.title} – ${when}${where?' – '+where:''} 👉 ${location.origin}/#/evenements`)}" target="_blank" rel="noopener">Partager</a>
        </div>
      </div>
    </div>
  </article>`;
}
function pageEvents(params){
  const sel=params.get('c')||'';
  const all=upcomingEvents();
  const list=all.filter(e=>!sel||e.commune===sel);
  const coms=[...new Set(all.map(e=>e.commune).filter(Boolean))].map(comBy).sort((a,z)=>a.name.localeCompare(z.name,'fr'));
  const groups={};
  list.forEach(e=>{ const k=e.date.toLocaleDateString('fr-FR',{month:'long',year:'numeric'}); (groups[k]=groups[k]||[]).push(e); });
  return `<div class="wrap">
    ${all.length?'':backBtn('#/')}<div class="pagehead"><h1>Événements à Mayotte</h1><p class="muted">Marchés, ventes privées, fêtes, concerts et animations des entreprises de l’île.</p></div>
    ${coms.length>1?`<div class="chips" role="group" aria-label="Filtrer par commune"><a class="chip" href="#/evenements" aria-pressed="${!sel}">Toutes les communes</a>${coms.map(c=>`<a class="chip" href="#/evenements?c=${c.slug}" aria-pressed="${sel===c.slug}">${esc(c.name)}</a>`).join('')}</div>`:''}
    <div class="u13">${list.length?Object.keys(groups).map(k=>`<h2 class="evmonth">${esc(k.charAt(0).toUpperCase()+k.slice(1))}</h2><div class="events">${groups[k].map(eventCard).join('')}</div>`).join(''):
      empty('Aucun événement à venir pour l’instant','Vous organisez un marché, une vente privée ou une animation ? Faites-le savoir à la communauté.',`<button class="btn btn-primary" data-claim="">Annoncer un événement</button>`)}</div>
    <div class="u8"></div>
  </div>`;
}


/* ---------- Carte interactive ---------- */
let mapSel='';
const bizIn = slug => B.filter(b=>b.commune===slug);
function centroid(poly){ let x=0,y=0; poly.forEach(p=>{x+=p[0];y+=p[1]}); return [x/poly.length,y/poly.length]; }
function mapWidget(){
  const zones=COMMUNES.map(c=>c.polys.map((poly,i)=>`<polygon class="zone${mapSel===c.slug?' on':''}" data-commune="${c.slug}" points="${poly.map(p=>p.join(',')).join(' ')}" ${i===0?`tabindex="0" role="button" aria-label="${esc(c.name)}, ${bizIn(c.slug).length} entreprise(s)" aria-pressed="${mapSel===c.slug}"`:'aria-hidden="true"'}><title>${esc(c.name)}</title></polygon>`).join('')).join('');
  const badges=COMMUNES.map(c=>{const n=bizIn(c.slug).length; if(!n) return ''; const [x,y]=centroid(c.polys[0]); return `<g class="badge" aria-hidden="true"><circle cx="${x}" cy="${y+46}" r="26"/><text x="${x}" y="${y+46}">${n}</text></g>`}).join('');
  return `<div class="mapwrap">
    <figure class="map"><img src="${MAP_SRC}" alt="Carte des 17 communes de Mayotte" width="1086" height="1448"><svg viewBox="0 0 1086 1448" role="group" aria-label="Communes de Mayotte">${zones}${badges}</svg></figure>
    <div class="mappanel" id="mapPanel" aria-live="polite">${mapPanel()}</div>
  </div>`;
}
function mapPanel(){
  const chips=`<div class="mapchips" role="group" aria-label="Choisir une commune">${[...COMMUNES].sort((a,z)=>a.name.localeCompare(z.name,'fr')).map(c=>`<button class="chip" data-commune="${c.slug}" aria-pressed="${mapSel===c.slug}">${esc(c.name)}${bizIn(c.slug).length?`<b>${bizIn(c.slug).length}</b>`:''}</button>`).join('')}</div>`;
  if(!mapSel){
    const online=B.filter(b=>!b.commune).length;
    return `<div><h3>Choisissez une commune</h3><p class="u14 muted">Touchez une commune sur la carte pour voir ses entreprises et leurs bons plans. Les pastilles jaunes indiquent le nombre d’entreprises référencées.</p></div>${chips}<p class="note">${online} entreprises vendent en ligne depuis l’extérieur de l’île et livrent à Mayotte.</p>`;
  }
  const c=comBy(mapSel), list=bizIn(mapSel), codes=activeCodes().filter(x=>bizBy(x.biz).commune===mapSel);
  const items=list.sort((a,z)=>codesOf(z.slug).length-codesOf(a.slug).length).map(b=>{const n=codesOf(b.slug).length;return `<div class="li">${logo(b)}<a class="grow" href="#/entreprises/${b.slug}"><strong>${esc(b.name)}</strong><small>${esc(catBy(b.cat).name)}${n?', '+n+' bon'+(n>1?'s':'')+' plan'+(n>1?'s':''):''}</small></a><a class="btn btn-ghost btn-sm" href="#/entreprises/${b.slug}">Voir</a></div>`}).join('');
  return `<div><h3>${esc(c.name)}</h3><p class="u14 muted">${list.length?`${list.length} entreprise${list.length>1?'s':''} et ${codes.length} code${codes.length>1?'s':''} actif${codes.length>1?'s':''}`:'Aucune entreprise référencée pour l’instant'}</p></div>
  ${list.length?`<div class="list">${items}</div>`:empty(`Pas encore d’entreprise à ${esc(c.name)}`,'Vous en connaissez une ? Aidez-nous à compléter la carte.','<button class="btn btn-primary" data-claim="">Ajouter une entreprise</button>')}
  ${codes.length?`<a class="btn btn-sun" href="#/codes">Voir tous les codes promo</a>`:''}
  <details><summary class="u3 link">Changer de commune</summary><div class="u10">${chips}</div></details>`;
}
function selectCommune(slug){
  mapSel = mapSel===slug ? '' : slug;
  document.querySelectorAll('.map .zone').forEach(z=>{const on=z.dataset.commune===mapSel; z.classList.toggle('on',on); if(z.hasAttribute('tabindex')) z.setAttribute('aria-pressed',on);});
  const panel=document.getElementById('mapPanel'); if(panel) panel.innerHTML=mapPanel();
  if(mapSel && window.innerWidth<900 && panel) panel.scrollIntoView({behavior:'smooth',block:'start'});
}
/* ---------- Carte des magasins (OpenStreetMap + Leaflet) ---------- */
const isShop=b=>!!b.pos&&b.sale!=='en-ligne';
const storeOffers=b=>codesOf(b.slug).filter(c=>c.store).length;
const goLinks=(b,waze=true)=>`<a class="btn btn-primary btn-sm" href="https://www.google.com/maps/dir/?api=1&destination=${b.pos.lat},${b.pos.lng}" target="_blank" rel="noopener" data-track="itineraire" data-trackbiz="${b.slug}">${ic('pin')}Y aller</a>${waze?`<a class="btn btn-ghost btn-sm" href="https://waze.com/ul?ll=${b.pos.lat},${b.pos.lng}&navigate=yes" target="_blank" rel="noopener" data-track="itineraire" data-trackbiz="${b.slug}">Waze</a>`:''}`;
function kmBetween(a,z){ const R=6371,r=x=>x*Math.PI/180; const dLat=r(z.lat-a.lat),dLng=r(z.lng-a.lng);
  const h=Math.sin(dLat/2)**2+Math.cos(r(a.lat))*Math.cos(r(z.lat))*Math.sin(dLng/2)**2; return 2*R*Math.asin(Math.sqrt(h)); }
const fmtKm=km=>km<1?Math.max(10,Math.round(km*100)*10)+' m':km.toFixed(1).replace('.',',')+' km';
const LEAFLET='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';
const MAYOTTE_VIEW=[[-13.02,44.98],[-12.62,45.32]];
// Recadrages sans animation : Leaflet plante si la carte est retirée pendant un zoom animé.
const NOANIM={animate:false};
let leafletP=null;
function loadLeaflet(){
  if(window.L) return Promise.resolve(window.L);
  return leafletP||(leafletP=new Promise((ok,ko)=>{
    const css=document.createElement('link'); css.rel='stylesheet'; css.href=LEAFLET+'leaflet.min.css'; document.head.appendChild(css);
    const js=document.createElement('script'); js.src=LEAFLET+'leaflet.min.js'; js.onload=()=>ok(window.L); js.onerror=()=>{ leafletP=null; ko(new Error('Leaflet indisponible')); }; document.head.appendChild(js);
  }));
}
function baseMap(el,opts={}){
  const m=L.map(el,Object.assign({scrollWheelZoom:false},opts));
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(m);
  m.fitBounds(MAYOTTE_VIEW,NOANIM); return m;
}
let mapState={com:'',focus:'',me:null}, storeMap=null, storeMarkers={}, meMarker=null;
function pageMap(params){
  mapState={com:params.get('c')||'',focus:params.get('b')||'',me:mapState.me};
  const shops=B.filter(isShop);
  const coms=new Set(shops.map(b=>b.commune).filter(Boolean));
  if(mapState.com) coms.add(mapState.com);
  return `<div class="wrap">
    ${backBtn('#/')}<div class="pagehead"><h1>Carte des magasins</h1><p class="muted">Les boutiques de l’île, leurs offres en magasin et l’itinéraire pour y aller.</p></div>
    <div class="filters u13">
      <button class="btn btn-primary" id="nearMe" type="button">${ic('pin')}Autour de moi</button>
      <label class="sel"><span>Commune</span><select id="mapCom">${selOpts(communeOpts(coms),mapState.com)}</select></label>
    </div>
    <p class="note" id="geoMsg" role="status"></p>
    <div class="storemap">
      <div class="leafwrap"><div id="storeMap" class="leaf" role="region" aria-label="Carte des magasins de Mayotte"></div></div>
      <div class="storelist"><p class="results" id="mapCount" aria-live="polite"></p><div class="list" id="mapList"></div></div>
    </div>
    <div class="u13" id="mapMissing"></div>
    <div class="u8"></div>
  </div>`;
}
const mapShops=()=>B.filter(b=>isShop(b)&&(!mapState.com||b.commune===mapState.com));
function drawMapList(){
  const list=mapShops().map(b=>({b,d:mapState.me?kmBetween(mapState.me,b.pos):null}));
  list.sort((x,z)=>x.d!=null?x.d-z.d:x.b.name.localeCompare(z.b.name,'fr'));
  const where=mapState.com?' à '+comBy(mapState.com).name:'';
  document.getElementById('mapCount').textContent=`${list.length} magasin${list.length>1?'s':''}${where}${mapState.me?', du plus proche au plus loin':''}`;
  document.getElementById('mapList').innerHTML=list.length?list.map(({b,d})=>{ const n=storeOffers(b), all=codesOf(b.slug).length;
    return `<div class="li shop">${logo(b)}<div class="grow"><button class="linkbtn" data-focus="${b.slug}"><strong>${esc(b.name)}</strong></button><small>${[d!=null?fmtKm(d):'',b.commune?comBy(b.commune).name:'',n?n+' offre'+(n>1?'s':'')+' en magasin':all?all+' bon'+(all>1?'s':'')+' plan'+(all>1?'s':''):''].filter(Boolean).join(' · ')}</small></div><div class="shopacts"><a class="btn btn-ghost btn-sm" href="#/entreprises/${b.slug}">Voir</a>${goLinks(b,false)}</div></div>`; }).join(''):
    empty(mapState.com?`Pas encore de magasin placé à ${esc(comBy(mapState.com).name)}`:'Aucun magasin sur la carte pour l’instant','Les entreprises placent leur magasin depuis leur espace pro.','');
  const missing=B.filter(b=>!b.pos&&b.sale!=='en-ligne'&&(!mapState.com||b.commune===mapState.com));
  document.getElementById('mapMissing').innerHTML=missing.length?`<details class="card"><summary><strong>${missing.length} entreprise${missing.length>1?'s':''} pas encore placée${missing.length>1?'s':''} sur la carte</strong></summary>
    <div class="list u10">${missing.map(b=>`<a class="li" href="#/entreprises/${b.slug}">${logo(b)}<div class="grow"><strong>${esc(b.name)}</strong><small>${b.commune?esc(comBy(b.commune).name):'Commune à préciser'}</small></div></a>`).join('')}</div>
    <p class="note">Vous gérez l’une de ces entreprises ? Placez votre magasin depuis <a class="link" href="#/profil">Mon espace</a>, bouton « Modifier ma fiche ».</p></details>`:'';
}
function popupHtml(b){
  const n=storeOffers(b), all=codesOf(b.slug).length;
  return `<div class="popup"><strong>${esc(b.name)}</strong><small>${esc(catBy(b.cat).name)}${b.addr?' · '+esc(b.addr):''}</small>${b.hours?`<small>${esc(b.hours)}</small>`:''}
    ${n||all?`<span class="pill ok">${n?n+' offre'+(n>1?'s':'')+' en magasin':all+' bon'+(all>1?'s':'')+' plan'+(all>1?'s':'')}</span>`:''}
    <div class="popacts"><a class="btn btn-ghost btn-sm" href="#/entreprises/${b.slug}">Voir la fiche</a>${goLinks(b)}</div></div>`;
}
function fitShops(){
  const pts=mapShops().map(b=>[b.pos.lat,b.pos.lng]); if(mapState.me) pts.push([mapState.me.lat,mapState.me.lng]);
  if(pts.length>1) storeMap.fitBounds(pts,{padding:[40,40],maxZoom:16,animate:false}); else if(pts.length===1) storeMap.setView(pts[0],15,NOANIM); else storeMap.fitBounds(MAYOTTE_VIEW,NOANIM);
}
function focusShop(slug){
  const b=bizBy(slug), m=storeMarkers[slug]; if(!b||!m||!storeMap) return;
  storeMap.setView([b.pos.lat,b.pos.lng],16,NOANIM); m.openPopup();
  document.getElementById('storeMap').scrollIntoView({behavior:'smooth',block:'center'});
}
async function drawMap(){
  drawMapList();
  const el=document.getElementById('storeMap'); if(!el) return;
  try{ await loadLeaflet(); }catch(e){ el.innerHTML='<p class="muted maperr">La carte ne peut pas s’afficher pour le moment. La liste des magasins reste disponible.</p>'; return; }
  if(!document.body.contains(el)) return;
  storeMap=dropMap(storeMap);
  storeMap=baseMap(el); storeMarkers={}; meMarker=null;
  B.filter(isShop).forEach(b=>{
    const hot=storeOffers(b)>0;
    const icon=L.divIcon({className:'pinicon',html:`<span class="pin${hot?' hot':''}">${logo(b)}</span>`,iconSize:[44,52],iconAnchor:[22,50],popupAnchor:[0,-46]});
    storeMarkers[b.slug]=L.marker([b.pos.lat,b.pos.lng],{icon,title:b.name,alt:b.name}).addTo(storeMap).bindPopup(popupHtml(b),{maxWidth:260});
  });
  if(mapState.me) showMe();
  fitShops();
  if(mapState.focus) focusShop(mapState.focus);
}
function showMe(){
  if(!storeMap||!mapState.me) return;
  if(meMarker) meMarker.remove();
  meMarker=L.circleMarker([mapState.me.lat,mapState.me.lng],{radius:9,color:'#fff',weight:3,fillColor:'#1FB5C9',fillOpacity:1}).addTo(storeMap).bindTooltip('Vous êtes ici');
}
function nearMe(btn){
  const msg=document.getElementById('geoMsg');
  if(!navigator.geolocation){ msg.textContent='Votre navigateur ne permet pas la localisation.'; return; }
  btn.disabled=true; msg.textContent='Recherche de votre position…';
  navigator.geolocation.getCurrentPosition(p=>{
    btn.disabled=false;
    mapState.me={lat:p.coords.latitude,lng:p.coords.longitude};
    const far=kmBetween(mapState.me,{lat:-12.83,lng:45.14})>60;
    msg.textContent=far?'Vous semblez être loin de Mayotte : les distances sont tout de même indiquées.':'Votre position sert uniquement à calculer les distances. Elle n’est pas enregistrée.';
    mapState.com=''; const sel=document.getElementById('mapCom'); if(sel) sel.value='';
    drawMapList(); showMe();
    if(storeMap){ const near=mapShops().map(b=>({b,d:kmBetween(mapState.me,b.pos)})).sort((a,z)=>a.d-z.d).slice(0,5).map(x=>[x.b.pos.lat,x.b.pos.lng]);
      storeMap.fitBounds([[mapState.me.lat,mapState.me.lng],...near],{padding:[40,40],maxZoom:16,animate:false}); }
  },err=>{
    btn.disabled=false;
    msg.textContent=err.code===1?'Localisation refusée. Autorisez-la dans les réglages de votre navigateur pour voir les magasins proches.':'Position introuvable pour le moment. Réessayez dans un instant.';
  },{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
}
// Petite carte pour placer son magasin (espace pro)
let posMap=null;
// Retire une carte avant que son conteneur quitte la page (sinon Leaflet plante pendant ses animations).
function dropMap(m){ if(!m) return null; try{ m.stop(); m.remove(); }catch(e){} return null; }
async function initPosPicker(start){
  const el=document.getElementById('posMap'); if(!el) return;
  try{ await loadLeaflet(); }catch(e){ el.innerHTML='<p class="muted maperr">Carte indisponible : collez la position GPS ci-dessous.</p>'; return; }
  if(!document.body.contains(el)) return;
  posMap=dropMap(posMap);
  posMap=baseMap(el); let mk=null;
  const input=document.getElementById('posInput');
  const set=(p,move)=>{ if(!inMayotte(p)){ toast('Ce point est en dehors de Mayotte.'); return; }
    if(!mk){ mk=L.marker([p.lat,p.lng],{draggable:true,title:'Votre magasin',alt:'Votre magasin',icon:L.divIcon({className:'pinicon',html:'<span class="pin hot"><span class="pindot"></span></span>',iconSize:[44,52],iconAnchor:[22,50]})}).addTo(posMap); mk.on('dragend',()=>set(mk.getLatLng(),false)); } else mk.setLatLng([p.lat,p.lng]);
    input.value=posStr({lat:p.lat,lng:p.lng}); if(move) posMap.setView([p.lat,p.lng],17,NOANIM); };
  posMap.on('click',e=>set(e.latlng,false));
  if(start) set(start,true);
  input.addEventListener('change',()=>{ const p=parsePos(input.value); if(p) set(p,true); else if(input.value.trim()) toast('Position non reconnue : format « -12.78, 45.22 », à Mayotte.'); });
  document.getElementById('posHere')?.addEventListener('click',()=>{
    if(!navigator.geolocation){ toast('Localisation indisponible sur cet appareil.'); return; }
    navigator.geolocation.getCurrentPosition(p=>set({lat:p.coords.latitude,lng:p.coords.longitude},true),()=>toast('Position introuvable. Placez le point à la main.'),{enableHighAccuracy:true,timeout:12000});
  });
  setTimeout(()=>posMap&&posMap.invalidateSize(),150);
}

/* ---------- Temps forts : pages spéciales (Noël, Ramadan, rentrée…) ---------- */
const tfBy=s=>TEMPS.find(t=>t.slug===s);
const tfActive=t=>t.start&&t.end&&TODAY>=t.start&&TODAY<=t.end;
const tfNow=()=>TEMPS.find(tfActive);
const tfSoon=()=>TEMPS.filter(t=>t.start&&t.start>TODAY&&(t.start-TODAY)/864e5<=21).sort((a,z)=>a.start-z.start)[0];
const dayMonth=d=>d.toLocaleDateString('fr-FR',{day:'numeric',month:'long'});
function tfStatus(t){
  if(tfActive(t)) return `<span class="pill ok">En ce moment, jusqu’au ${dayMonth(t.end)}</span>`;
  if(t.start&&t.start>TODAY) return `<span class="pill">À partir du ${dayMonth(t.start)}</span>`;
  return `<span class="pill">Période terminée</span>`;
}
function tfBanner(){
  const t=tfNow()||tfSoon(); if(!t) return '';
  return `<a class="tfband${tfActive(t)?' on':''}" href="#/temps-forts/${t.slug}"><span class="tfemo">${esc(t.emoji)}</span><span class="grow"><strong>${tfActive(t)?esc(t.title)+' : les bons plans du moment':'Bientôt : '+esc(t.title)}</strong><small>${esc(t.desc)}</small></span>${ic('left','class="flip"')}</a>`;
}
function pageTempsForts(){
  return `<div class="wrap">
    ${backBtn('#/')}<div class="pagehead"><h1>Temps forts à Mayotte</h1><p class="muted">Les grandes périodes de l’année et leurs bons plans.</p></div>
    <div class="tfgrid u13">${TEMPS.map(t=>`<a class="tfcard" href="#/temps-forts/${t.slug}"><span class="tfemo">${esc(t.emoji)}</span><strong>${esc(t.title)}</strong><small>${esc(t.desc)}</small>${tfStatus(t)}</a>`).join('')||empty('Aucun temps fort pour l’instant','','')}</div>
    <div class="u8"></div>
  </div>`;
}
function pageTempsFort(slug){
  const t=tfBy(slug);
  if(!t) return notFound('Cette page n’existe pas','Ce temps fort n’existe pas ou plus.','<a class="btn btn-primary" href="#/temps-forts">Voir les temps forts</a>','#/temps-forts');
  const act=activeCodes();
  const tagged=act.filter(c=>c.tf.includes(slug)).sort((a,z)=>hotScore(z)-hotScore(a));
  const useful=act.filter(c=>!c.tf.includes(slug)&&t.cats.includes(bizBy(c.biz).cat)).sort((a,z)=>hotScore(z)-hotScore(a)).slice(0,12);
  const evs=t.start&&t.end?upcomingEvents().filter(e=>e.date<=t.end&&(e.end||e.date)>=t.start):[];
  return `<div class="wrap">
    ${backBtn('#/temps-forts')}
    <div class="tfhero"><span class="tfemo big">${esc(t.emoji)}</span><div><h1>${esc(t.title)}</h1><p>${esc(t.desc)}</p>${tfStatus(t)}</div></div>
    <div class="head u13"><div><h2>Offres spéciales ${esc(t.title)}</h2><p class="muted">Les bons plans publiés pour cette période.</p></div></div>
    ${tagged.length?`<div class="coupons">${tagged.map(c=>coupon(c)).join('')}</div>`:empty('Pas encore d’offre spéciale','Vous connaissez une promo pour cette période ? Partagez-la.',`<button class="btn btn-sun" data-propose="" data-tf="${t.slug}">${ic('plus')}Proposer une offre ${esc(t.title)}</button>`)}
    ${evs.length?`<div class="head u13"><h2>Événements pendant la période</h2></div><div class="events">${evs.map(eventCard).join('')}</div>`:''}
    ${useful.length?`<div class="head u13"><div><h2>Aussi utiles en ce moment</h2><p class="muted">Des bons plans dans les catégories de la période.</p></div></div><div class="coupons">${useful.map(c=>coupon(c)).join('')}</div>`:''}
    <div class="card u13"><h3>Vous êtes une entreprise ?</h3><p class="muted">Publiez une offre « ${esc(t.title)} » : elle apparaîtra sur cette page.</p><button class="btn btn-sun btn-sm" data-propose="" data-tf="${t.slug}">${ic('plus')}Publier une offre spéciale</button></div>
    <div class="u8"></div>
  </div>`;
}

/* ---------- Alertes : être prévenu des nouveaux bons plans ---------- */
const ALERT_TYPES={mot:'Mot-clé',entreprise:'Entreprise',categorie:'Catégorie'};
function alertLabel(a){ return a.type==='entreprise'?(bizBy(a.valeur)||{name:a.label||a.valeur}).name:a.type==='categorie'?(catBy(a.valeur)||{name:a.valeur}).name:'« '+a.valeur+' »'; }
function alertMatch(a,c){
  if(a.type==='entreprise') return c.biz===a.valeur;
  if(a.type==='categorie') return bizBy(c.biz).cat===a.valeur;
  const b=bizBy(c.biz); return norm(b.name+' '+c.deal+' '+c.detail+' '+c.code+' '+catBy(b.cat).name).includes(norm(a.valeur));
}
const alertSeenKey=()=>'bonszahe:alertes-vu:'+me().id;
function alertSeen(){ let v=0; try{ v=+localStorage.getItem(alertSeenKey())||0; }catch(e){} if(!v){ v=Date.now(); try{ localStorage.setItem(alertSeenKey(),v); }catch(e){} } return v; }
function alertDeals(onlyNew){
  if(!me()||!MINE.alerts.length) return [];
  const seen=onlyNew?alertSeen():0;
  return activeCodes().filter(c=>c.by!==me().id&&+c.addedAt>seen&&MINE.alerts.some(a=>+c.addedAt>=+a.at-864e5&&alertMatch(a,c))).sort((a,z)=>z.addedAt-a.addedAt);
}
const followed=(type,valeur)=>MINE.alerts.find(a=>a.type===type&&a.valeur===valeur);
const followBtn=(type,valeur,label,cls='btn btn-ghost')=>{ const on=!!(me()&&followed(type,valeur)); return `<button class="${cls}" data-follow="${type}" data-val="${esc(valeur)}" data-label="${esc(label)}" aria-pressed="${on}">🔔 ${on?'Alerte activée':label}</button>`; };
async function toggleFollow(type,valeur,label){
  const a=followed(type,valeur);
  if(a){ await call('DELETE',`/wix-data/v2/items/${encodeURIComponent(a.id)}?dataCollectionId=Alertes`); MINE.alerts=MINE.alerts.filter(x=>x!==a); return false; }
  if(MINE.alerts.length>=20) throw Object.assign(new Error('max'),{max:true});
  const r=await sendToWix('Alertes',{type,valeur,libelle:label});
  MINE.alerts.push({id:r.dataItem&&r.dataItem.id,type,valeur,label,at:new Date()}); return true;
}
function pageAlertes(){
  if(!me()) return `<div class="u16 wrap">${backBtn('#/profil')}<div class="pagehead"><h1>🔔 Mes alertes</h1><p class="muted">Connectez-vous pour être prévenu dès qu’un bon plan correspond à ce que vous cherchez.</p></div>${authBox()}<div class="u8"></div></div>`;
  const seen=alertSeen(), deals=alertDeals(false);
  const html=`<div class="wrap">
    ${backBtn('#/profil')}<div class="pagehead"><h1>🔔 Mes alertes</h1><p class="muted">Suivez un mot-clé, une entreprise ou une catégorie : les nouveaux bons plans qui correspondent apparaissent ici, et une pastille 🔔 vous prévient à votre prochaine visite.</p></div>
    <form class="form card" id="alertForm">
      <div class="two"><label>Je veux suivre<select name="type">${Object.entries(ALERT_TYPES).map(([k,l])=>`<option value="${k}">${l}</option>`).join('')}</select></label>
      <label class="af af-mot">Mot-clé<input name="mot" maxlength="40" placeholder="Ex. canapé, livraison, iPhone…"></label>
      <label class="af af-entreprise" hidden>Entreprise<select name="entreprise">${[...B].sort((a,z)=>a.name.localeCompare(z.name,'fr')).map(b=>`<option value="${b.slug}">${esc(b.name)}</option>`).join('')}</select></label>
      <label class="af af-categorie" hidden>Catégorie<select name="categorie">${CATS.map(c=>`<option value="${c.slug}">${c.name}</option>`).join('')}</select></label></div>
      <button class="btn btn-primary" type="submit">🔔 Créer l’alerte</button>
    </form>
    ${MINE.alerts.length?`<div class="chips u13 wrapchips">${MINE.alerts.map(a=>`<span class="chip on">${esc(ALERT_TYPES[a.type]||'')} : ${esc(alertLabel(a))}<button class="chipx" data-delalert="${esc(a.id)}" aria-label="Supprimer l’alerte">${ic('x')}</button></span>`).join('')}</div>`:''}
    <div class="head u13"><div><h2>Pour vous</h2><p class="muted">${MINE.alerts.length?'Les bons plans en ligne qui correspondent à vos alertes.':'Créez votre première alerte ci-dessus.'}</p></div></div>
    ${deals.length?`<div class="coupons">${deals.map(c=>(+c.addedAt>seen?coupon(c).replace('<article class="coupon','<article class="coupon isnew'):coupon(c))).join('')}</div>`:MINE.alerts.length?empty('Rien de nouveau pour l’instant','Vous serez prévenu dès qu’un bon plan correspondra.',''):''}
    <p class="note u13">Les notifications sur téléphone arriveront avec l’application Bonszahé.</p>
    <div class="u8"></div>
  </div>`;
  try{ localStorage.setItem(alertSeenKey(),Date.now()); }catch(e){}
  return html;
}

/* ---------- Demandes : « quelqu’un a un code pour… ? » ---------- */
let dmFilter='ouvertes';
const dmReplies=id=>countComments('dm:'+id);
function dmCard(d,link=true){
  const b=d.biz&&bizBy(d.biz), cat=d.cat&&catBy(d.cat), n=dmReplies(d.id);
  const inner=`<div class="dmhead"><strong>${esc(d.name)}</strong><small class="muted">· ${ago(d.at)}</small>${d.status==='resolue'?'<span class="pill ok">✓ Résolue</span>':''}</div>
    <p class="dmtext">${esc(d.text)}</p>
    <div class="dmtags">${b?`<span class="pill">${esc(b.name)}</span>`:''}${cat?`<span class="pill">${esc(cat.name)}</span>`:''}<span class="dmn">💬 ${n} réponse${n>1?'s':''}</span></div>`;
  return link?`<a class="dm card" href="#/demandes/${encodeURIComponent(d.id)}">${inner}</a>`:`<div class="dm card">${inner}</div>`;
}
function pageDemandes(params){
  dmFilter=params.get('f')==='toutes'?'toutes':'ouvertes';
  const list=DEMANDES.filter(d=>dmFilter==='toutes'||d.status!=='resolue');
  return `<div class="wrap">
    ${upcomingEvents().length?backBtn('#/'):''}<div class="pagehead"><h1>🙋 Demandes</h1><p class="muted">Vous cherchez un code ou un bon plan ? Demandez à la communauté, et aidez les autres en répondant.</p></div>
    ${me()?`<form class="form card" id="demandeForm">
      <label>Votre demande<textarea name="texte" required maxlength="300" rows="3" placeholder="Ex. Quelqu’un a un code pour une livraison gratuite chez… ?"></textarea></label>
      <div class="two"><label>Entreprise <span class="opt">(facultatif)</span><select name="entreprise"><option value="">Aucune en particulier</option>${[...B].sort((a,z)=>a.name.localeCompare(z.name,'fr')).map(b=>`<option value="${b.slug}">${esc(b.name)}</option>`).join('')}</select></label>
      <label>Catégorie <span class="opt">(facultatif)</span><select name="categorie"><option value="">Toutes</option>${CATS.map(c=>`<option value="${c.slug}">${c.name}</option>`).join('')}</select></label></div>
      <button class="btn btn-primary" type="submit">Publier ma demande</button>
    </form>`:`<div class="card"><p class="muted">Connectez-vous pour publier une demande ou y répondre.</p><button class="btn btn-primary btn-sm" data-needlogin="demande">Se connecter</button></div>`}
    <div class="toolbar u13"><div class="seg full" role="group" aria-label="Filtrer les demandes"><a href="#/demandes" aria-pressed="${dmFilter==='ouvertes'}">Ouvertes</a><a href="#/demandes?f=toutes" aria-pressed="${dmFilter==='toutes'}">Toutes</a></div></div>
    <div class="dmlist">${list.length?list.map(d=>dmCard(d)).join(''):empty('Aucune demande pour l’instant','Soyez le premier à demander un bon plan !','')}</div>
    <div class="u8"></div>
  </div>`;
}
function pageDemande(id){
  const d=DEMANDES.find(x=>x.id===id);
  if(!d) return notFound('Cette demande n’existe plus','Elle a peut-être été supprimée par son auteur.','<a class="btn btn-primary" href="#/demandes">Voir les demandes</a>','#/demandes');
  const mine=me()&&d.owner===me().id;
  return `<div class="wrap">
    ${backBtn('#/demandes')}
    <h1 class="pagetitle">Demande de ${esc(d.name)}</h1>
    <div class="dealpage"><div class="stack">
      ${dmCard(d,false)}
      <div class="bandbtns">${mine?`${d.status!=='resolue'?`<button class="btn btn-primary btn-sm" data-dmresolve="${esc(d.id)}">${ic('check')}Marquer comme résolue</button>`:''}<button class="btn btn-ghost btn-sm" data-dmdel="${esc(d.id)}">Supprimer</button>`:`<button class="btn btn-sun btn-sm" data-propose="${d.biz||''}">${ic('plus')}J’ai un code : le partager</button>`}
        <a class="btn btn-wa btn-sm" href="${waHref(`🙋 ${d.text} — aidez sur Bonszahé 👉 ${location.origin}/#/demandes/${encodeURIComponent(d.id)}`)}" target="_blank" rel="noopener">Partager</a></div>
      ${commentsBlock({id:'dm:'+d.id,biz:d.biz})}
    </div></div>
    <div class="u7"></div>
  </div>`;
}
async function saveDemande(d,statut){
  await call('PUT',`/wix-data/v2/items/${encodeURIComponent(d.id)}`,{dataCollectionId:'Demandes',dataItem:{id:d.id,data:{texte:d.text,entreprise:d.entId||'',categorie:d.cat||'',pseudo:d.name,statut}}});
  d.status=statut;
}

/* ---------- Parrainage ---------- */
const inviteUrl=()=>`${location.origin}/#/invite/${encodeURIComponent(me().id)}?n=${encodeURIComponent(me().name)}`;
const isActiveMember=id=>baseCodes.some(c=>c.by===id)||VOTES.some(v=>v.owner===id)||MOROS.some(v=>v.owner===id)||COMMENTS.some(x=>x.owner===id&&!isHidden(x));
const filleulsOf=id=>PARRAINAGES.filter(p=>p.parrain===id).map(p=>Object.assign({active:isActiveMember(p.filleul)},p));
function pageInvite(id,params){
  const name=(params.get('n')||'').slice(0,40);
  if(!me()||me().id!==id){ try{ localStorage.setItem('bonszahe:parrain',JSON.stringify({id,at:Date.now()})); }catch(e){} }
  return `<div class="u16 wrap">
    <div class="pagehead invitehead"><span class="tfemo big">🤝</span><h1>${name?esc(name)+' vous invite sur Bonszahé':'Rejoignez Bonszahé'}</h1><p class="muted">Les codes promo et bons plans de Mayotte, partagés par les habitants. Créez votre compte gratuit : donnez du Moro 🔥, partagez vos codes et gagnez des récompenses chaque mois.</p></div>
    ${me()?`<div class="card"><p>Vous avez déjà un compte : merci d’être là ! 🎉</p><a class="btn btn-primary btn-sm" href="#/">Voir les bons plans</a></div>`:authBox()}
    <div class="u8"></div>
  </div>`;
}
async function recordReferral(createdAt){
  let p=null; try{ p=JSON.parse(localStorage.getItem('bonszahe:parrain')||'null'); }catch(e){}
  if(!p||!me()) return;
  try{ localStorage.removeItem('bonszahe:parrain'); }catch(e){}
  const u=me(); const isNew=createdAt&&Date.now()-new Date(createdAt)<3*864e5;
  if(p.id===u.id||!isNew||PARRAINAGES.some(x=>x.filleul===u.id)) return;
  try{ await sendToWix('Parrainages',{parrain:p.id,filleulNom:u.name}); PARRAINAGES.push({parrain:p.id,filleul:u.id,name:u.name,at:new Date()});
    setTimeout(()=>toast('🤝 Bienvenue ! Votre parrain gagnera ses points dès votre première contribution.'),900); }catch(e){ console.warn(e); }
}
function referralCard(){
  const f=filleulsOf(me().id), act=f.filter(x=>x.active).length;
  return `<div class="card refcard"><h3>🤝 Parrainage</h3>
    <p class="muted">Invitez vos proches : <strong>+15 points</strong> pour vous à chaque filleul actif (un code, un avis ou un commentaire), et le badge Ambassadeur dès 3 filleuls actifs.</p>
    <div class="bandbtns"><a class="btn btn-wa btn-sm" href="${waHref(`Rejoins-moi sur Bonszahé, les bons plans et codes promo de Mayotte 🔥 👉 ${inviteUrl()}`)}" target="_blank" rel="noopener">Inviter sur WhatsApp</a><button class="btn btn-ghost btn-sm" data-copylink="${esc(inviteUrl())}">${ic('copy')}Copier mon lien</button></div>
    ${f.length?`<p class="u10"><strong>${f.length} filleul${f.length>1?'s':''}</strong>, dont ${act} actif${act>1?'s':''} : ${f.map(x=>`${esc(x.name||'Membre')}${x.active?' ✓':' (en attente)'}`).join(', ')}</p>`:''}
  </div>`;
}

/* ---------- Récompenses du mois ---------- */
const MONTHS=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const monthKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
const monthName=k=>{ const [y,m]=k.split('-'); return MONTHS[+m-1]+' '+y; };
function monthPoints(id,from,to){
  const inM=d=>d>=from&&d<to;
  const codes=allCodes().filter(c=>c.by===id&&c.status==='valide');
  const ids=new Set(codes.map(c=>c.id));
  let p=codes.filter(c=>inM(c.addedAt)).length*10;
  p+=MOROS.filter(v=>ids.has(v.code)&&v.dir==='moro'&&inM(v.at)).length*2;
  p+=VOTES.filter(v=>ids.has(v.code)&&v.dir==='up'&&inM(v.at)).length;
  p+=new Set(VOTES.filter(v=>v.owner===id&&inM(v.at)).map(v=>v.code)).size+new Set(MOROS.filter(v=>v.owner===id&&inM(v.at)).map(v=>v.code)).size;
  const perDay={}; COMMENTS.filter(x=>x.owner===id&&!isHidden(x)&&inM(x.at)).forEach(x=>{ const k=x.at.toISOString().slice(0,10); perDay[k]=Math.min(5,(perDay[k]||0)+1); });
  p+=Object.values(perDay).reduce((a,b)=>a+b,0);
  p+=PARRAINAGES.filter(x=>x.parrain===id&&inM(x.at)&&isActiveMember(x.filleul)).length*15;
  return p;
}
function monthBoard(){
  const from=new Date(TODAY.getFullYear(),TODAY.getMonth(),1), to=new Date(TODAY.getFullYear(),TODAY.getMonth()+1,1);
  return leaderboard().map(x=>Object.assign({},x,{month:monthPoints(x.id,from,to)})).filter(x=>x.month>0).sort((a,z)=>z.month-a.month);
}
function pageRecompenses(){
  const k=monthKey(TODAY), lots=RECOMPENSES.filter(r=>r.mois===k).sort((a,z)=>(a.rang||9)-(z.rang||9));
  const past=RECOMPENSES.filter(r=>r.mois<k&&r.gagnant).sort((a,z)=>z.mois.localeCompare(a.mois)||a.rang-z.rang).slice(0,6);
  const board=monthBoard().slice(0,10), mine=me()&&monthBoard().findIndex(x=>x.id===me().id);
  const end=new Date(TODAY.getFullYear(),TODAY.getMonth()+1,0);
  return `<div class="wrap">
    ${backBtn('#/profil')}<div class="pagehead"><h1>🎁 Récompenses du mois</h1><p class="muted">Chaque mois, les 3 membres qui gagnent le plus de points remportent des lots offerts par les entreprises partenaires. Classement de ${monthName(k)}, clôture le ${dayMonth(end)} à minuit.</p></div>
    <div class="head"><h2>Les lots de ${monthName(k)}</h2></div>
    ${lots.length?`<div class="lots">${lots.map(r=>{ const b=r.biz&&bizBy(r.biz); return `<div class="lot card">${r.img?`<img src="${esc(r.img)}" alt="" loading="lazy">`:''}<span class="lotrank">${MEDALS[(r.rang||1)-1]||'🎁'} ${r.rang?r.rang+(r.rang===1?'re':'e')+' place':'Lot'}</span><strong>${esc(r.titre)}</strong>${r.desc?`<small>${esc(r.desc)}</small>`:''}${b?`<a class="bizline" href="#/entreprises/${b.slug}">${logo(b)}<span>Offert par ${esc(b.name)}</span></a>`:''}</div>`; }).join('')}</div>`:
      `<div class="card"><p>Les lots de ce mois arrivent bientôt.</p><p class="muted">Vous êtes une entreprise ? Offrez un lot et gagnez en visibilité auprès de la communauté. <a class="link" href="#/contact">Contactez-nous</a>.</p></div>`}
    <div class="head u13"><div><h2>Classement de ${monthName(k)}</h2><p class="muted">Seuls les points gagnés ce mois-ci comptent.</p></div></div>
    ${board.length?`<ol class="ranking">${board.map((x,i)=>`<li class="${me()&&x.id===me().id?'me':''}"><span class="rk">${i+1}</span><div class="grow"><strong>${esc(x.name)}</strong><small>${esc(levelOf(x.points).name)}</small></div><b>${x.month} pts</b></li>`).join('')}</ol>`:empty('Le classement du mois démarre','Partagez un code ou donnez votre avis pour marquer vos premiers points.',`<button class="btn btn-sun" data-propose="">${ic('plus')}Proposer un code promo</button>`)}
    ${me()?`<p class="note">${mine>=0?`Vous êtes ${mine+1}${mine?'e':'er'} ce mois-ci avec ${monthBoard()[mine].month} points.`:'Vous n’avez pas encore de points ce mois-ci.'}</p>`:''}
    ${past.length?`<div class="head u13"><h2>Les derniers gagnants</h2></div><div class="list">${past.map(r=>`<div class="li"><div class="grow"><strong>${esc(r.gagnant)}</strong><small>${monthName(r.mois)} · ${esc(r.titre)}</small></div><span class="pill ok">${MEDALS[(r.rang||1)-1]||'🎁'}</span></div>`).join('')}</div>`:''}
    <details class="card u13" id="reglement"><summary><strong>Règlement</strong></summary><div class="prose">
      <p>Les récompenses du mois sont organisées par ${EDITEUR.nom}, éditeur de Bonszahé. La participation est gratuite et sans obligation d’achat : il suffit d’avoir un compte membre.</p>
      <p>Les points sont ceux affichés sur Bonszahé (10 par code publié, 2 par Moro 🔥 reçu, 1 par « fonctionne » reçu, 1 par avis donné, 1 par commentaire dans la limite de 5 par jour, 15 par filleul actif), comptés du 1er au dernier jour du mois.</p>
      <p>Les 3 membres qui ont le plus de points à la clôture gagnent les lots dans l’ordre du classement. En cas d’égalité, le membre arrivé le premier à ce total l’emporte. Les gagnants sont contactés par e-mail et leur pseudo est publié sur cette page.</p>
      <p>Les points obtenus par la fraude (faux codes, comptes multiples, commentaires masqués ou abusifs) sont retirés et peuvent entraîner l’exclusion. Les lots ne sont ni échangeables ni remboursables.</p>
    </div></details>
    <div class="u8"></div>
  </div>`;
}

/* ---------- Navigation : bouton retour, page introuvable, position de défilement ---------- */
const navStack=[]; let navBack=false; const scrollMemo={};
function trackNav(h){
  navBack=navStack.length>1&&navStack[navStack.length-2]===h;
  if(navBack) navStack.pop(); else if(navStack[navStack.length-1]!==h) navStack.push(h);
}
const backBtn=(fallback,label='Retour')=>`<a class="back" href="${fallback}" data-back>${ic('left')}${label}</a>`;
const notFound=(t,txt,cta,fallback)=>`<div class="wrap">${backBtn(fallback)}<h1 class="sr">${t}</h1><div class="u20">${empty(t,txt,cta)}</div><div class="u8"></div></div>`;

// Barre du bas : « Agenda » tant qu'il y a des événements à venir, sinon « Demandes ».
const TAB_AGENDA=['#/evenements','evenements','Agenda','<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>'];
const TAB_DEMANDES=['#/demandes','demandes','Demandes','<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9 11h.01M12 11h.01M15 11h.01"/>'];
function syncTabbar(){
  const a=document.querySelector('.bottomnav a[data-nav="evenements"],.bottomnav a[data-nav="demandes"]'); if(!a) return;
  const [href,nav,label,icon]=upcomingEvents().length?TAB_AGENDA:TAB_DEMANDES;
  if(a.dataset.nav===nav) return;
  a.setAttribute('href',href); a.dataset.nav=nav;
  a.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>${label}`;
}

/* ---------- Routeur ---------- */
const app=document.getElementById('app');
let lastDeal='';
function route(){
  const h=location.hash.slice(1)||'/';
  const [path,qs]=h.split('?');
  const parts=path.split('/').filter(Boolean);
  const params=new URLSearchParams(qs||'');
  const p=parts[0]||'home';
  let html='', nav=p, title='Bonszahé — Acheter malin à Mayotte';
  if(p==='home') html=pageHome();
  else if(p==='entreprises' && parts[1]){ html=pageBusiness(parts[1]); nav='entreprises'; const b=B.find(x=>x.slug===parts[1]); if(b){ title=`${b.name} : codes promo et bons plans | Bonszahé`; track('vue',parts[1]); } }
  else if(p==='bon-plan'&&parts[1]){ const id=decodeURIComponent(parts[1]); if(id!==lastDeal){ lastDeal=id; replyTo=''; } html=pageDeal(id); nav='tendances'; const c=baseCodes.find(x=>x.id===id); if(c) title=`${c.deal} chez ${bizBy(c.biz).name} | Bonszahé`; }
  else if(p==='alertes'){ html=pageAlertes(); nav='profil'; title='Mes alertes | Bonszahé'; }
  else if(p==='demandes'&&parts[1]){ const id=decodeURIComponent(parts[1]); if(id!==lastDeal){ lastDeal=id; replyTo=''; } html=pageDemande(id); nav='demandes'; title='Demande de bon plan | Bonszahé'; }
  else if(p==='demandes'){ html=pageDemandes(params); title='Demandes de bons plans | Bonszahé'; }
  else if(p==='invite'&&parts[1]){ html=pageInvite(decodeURIComponent(parts[1]),params); nav='profil'; title='Invitation | Bonszahé'; }
  else if(p==='recompenses'){ html=pageRecompenses(); nav='profil'; title='Récompenses du mois | Bonszahé'; }
  else if(p==='temps-forts'&&parts[1]){ html=pageTempsFort(parts[1]); nav='home'; const t=tfBy(parts[1]); if(t) title=`${t.title} : les bons plans à Mayotte | Bonszahé`; }
  else if(p==='temps-forts'){ html=pageTempsForts(); nav='home'; title='Temps forts à Mayotte | Bonszahé'; }
  else if(p==='a-propos'){ html=pageAbout(); title='À propos | Bonszahé'; }
  else if(p==='contact'){ html=pageContact(); title='Contact | Bonszahé'; }
  else if(p==='mentions-legales'){ html=pageMentions(); title='Mentions légales | Bonszahé'; }
  else if(p==='confidentialite'){ html=pagePrivacy(); title='Politique de confidentialité | Bonszahé'; }
  else if(p==='tendances'){ html=pageTrends(params); title='Tendances : les bons plans qui chauffent | Bonszahé'; }
  else if(p==='evenements'){ html=pageEvents(params); title='Événements à Mayotte | Bonszahé'; }
  else if(p==='classement'){ html=pageRanking(); nav='profil'; title='Classement de la communauté | Bonszahé'; }
  else if(p==='entreprises') html=pageDirectory(params);
  else if(p==='codes') html=pageCodes(params);
  else if(p==='categories') html=pageCategories();
  else if(p==='carte'){ html=pageMap(params); title='Carte des magasins de Mayotte | Bonszahé'; }
  else if(p==='recherche') html=pageSearch(params);
  else if(p==='favoris') html=pageFavs();
  else if(p==='profil') html=pageProfile();
  else if(p==='home') { html=pageHome(); nav='home'; }
  else { html=notFound('Cette page n’existe pas','Le lien est peut-être incomplet ou ancien.','<a class="btn btn-primary" href="#/">Retour à l’accueil</a>','#/'); nav=''; title='Page introuvable | Bonszahé'; }
  storeMap=dropMap(storeMap); meMarker=null;
  app.innerHTML=html;
  document.title=title;
  if(p==='entreprises'&&!parts[1]) drawDirectory();
  if(p==='codes') drawCodes();
  syncTabbar();
  document.querySelectorAll('[data-nav]').forEach(a=>{ a.getAttribute('data-nav')===nav?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'); });
  document.getElementById('loginBtn').textContent=me()?me().name:'Connexion';
  const nAlert=p==='alertes'?0:alertDeals(true).length;
  document.querySelectorAll('#loginBtn,.bottomnav a[data-nav="profil"]').forEach(el=>nAlert?el.setAttribute('data-alert',nAlert>9?'9+':nAlert):el.removeAttribute('data-alert'));
  if(p==='profil') drawPro();
  if(p==='carte') drawMap();
  if(!quietRender){ pageIn(); reveal(app); }
  checkRewards();
  window.scrollTo(0,!quietRender&&navBack&&scrollMemo[location.hash]||0);
  if(p==='recherche'&&!params.get('q')) document.getElementById('sq')?.focus();
}
function refresh(){ const y=window.scrollY; quietRender=true; try{ route(); }finally{ quietRender=false; } window.scrollTo(0,y); }
window.addEventListener('hashchange',()=>{ trackNav(location.hash||'#/'); if(dlg.open){ dlgByNav=true; dlg.close(); } route(); });
let scrollT; window.addEventListener('scroll',()=>{ clearTimeout(scrollT); scrollT=setTimeout(()=>{ scrollMemo[location.hash||'#/']=window.scrollY; },120); },{passive:true});

/* ---------- Animations (légères, coupées si « réduire les animations ») ---------- */
const CALM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let quietRender=false; // vrai pendant refresh() : pas d'animation d'entrée quand on reste sur la même page
// Apparition douce des cartes au défilement
const revealObs='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(en=>{ if(!en.isIntersecting) return;
  const el=en.target; revealObs.unobserve(el); el.classList.add('in'); setTimeout(()=>el.classList.remove('rv','in'),700); }),{rootMargin:'0px 0px -6% 0px'}):null;
function reveal(root){
  if(CALM||!revealObs) return;
  let k=0;
  root.querySelectorAll('.coupon,.biz,.event,.cat,.prow,.ranking li,.bdg,.dm,.tfcard,.lot,.commucard').forEach(el=>{
    if(el.closest('dialog')) return;
    el.classList.add('rv'); el.style.setProperty('--d',Math.min(k++,5)*60+'ms'); revealObs.observe(el);
  });
}
// Fondu court au changement de page
function pageIn(){ if(CALM) return; app.classList.remove('pagein'); void app.offsetWidth; app.classList.add('pagein'); }
// Moro / Maji : la flamme grossit et des 🔥 s'envolent, ou une goutte tombe
function heatFx(id,dir){
  if(CALM) return;
  document.querySelectorAll(`.hb[data-moro="${CSS.escape(id)}"][data-dir="${dir}"]`).forEach(b=>{
    const box=b.closest('.heat'); if(!box) return;
    b.classList.add('pop'); box.querySelector('.hv b')?.classList.add('bump');
    const x=b.offsetLeft+b.offsetWidth/2, n=dir==='moro'?6:1;
    for(let i=0;i<n;i++){
      const p=document.createElement('span'); p.className='fx fx-'+dir; p.textContent=dir==='moro'?'🔥':'💧'; p.setAttribute('aria-hidden','true');
      p.style.left=x+'px'; p.style.setProperty('--x',(dir==='moro'?Math.round(Math.random()*56-28):0)+'px'); p.style.animationDelay=i*45+'ms';
      box.appendChild(p); setTimeout(()=>p.remove(),1100);
    }
  });
}
// Confettis quand on gagne un badge ou un niveau
function confetti(){
  if(CALM) return;
  const wrap=document.createElement('div'); wrap.className='confetti'; wrap.setAttribute('aria-hidden','true');
  const colors=['#E4502F','#FFB23F','#1FB5C9','#3B8F2C','#D9365E'];
  for(let i=0;i<36;i++){ const c=document.createElement('i');
    c.style.left=Math.random()*100+'%'; c.style.background=colors[i%colors.length];
    c.style.animationDuration=(1.4+Math.random()*1.1)+'s'; c.style.animationDelay=Math.random()*.25+'s'; c.style.setProperty('--r',Math.round(Math.random()*720-360)+'deg');
    wrap.appendChild(c); }
  document.body.appendChild(wrap); setTimeout(()=>wrap.remove(),2800);
}
function checkRewards(){
  const u=me(); if(!u||dataSource!=='wix') return;
  const s=statsFor(u.id), lv=levelOf(s.points).name;
  const got=BADGES.filter(bd=>{ const [v,g]=bd.val(s); return v>=g; }).map(bd=>bd.name);
  const k='bonszahe:rw:'+u.id; let prev=null;
  try{ prev=JSON.parse(localStorage.getItem(k)||'null'); }catch(e){}
  try{ localStorage.setItem(k,JSON.stringify({lv,b:got})); }catch(e){}
  if(!prev) return;
  const nb=got.filter(x=>!prev.b.includes(x));
  if(nb.length){ confetti(); toast('🎉 Nouveau badge : '+nb[0]); }
  else if(prev.lv!==lv&&LEVELS.findIndex(l=>l[1]===lv)>LEVELS.findIndex(l=>l[1]===prev.lv)){ confetti(); toast('🎉 Nouveau niveau : '+lv); }
}

/* ---------- Interactions ---------- */
const toastEl=document.getElementById('toast'); let tt;
function toast(msg){ toastEl.textContent=msg; toastEl.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>toastEl.classList.remove('show'),2600); }

async function copy(text){
  try{ await navigator.clipboard.writeText(text); return true; }
  catch(e){ const t=document.createElement('textarea'); t.value=text; t.style.position='fixed'; t.style.opacity='0'; document.body.appendChild(t); t.select(); let ok=false; try{ok=document.execCommand('copy')}catch(_){} t.remove(); return ok; }
}

const dlg=document.getElementById('dlg'), dlgBody=document.getElementById('dlgBody');
let dlgByNav=false;
function openDialog(html){ dlgBody.innerHTML=html; if(!dlg.open){ dlg.showModal(); try{ history.pushState({bzDlg:1},''); }catch(e){} } dlgBody.querySelector('input,select,textarea')?.focus(); }
window.addEventListener('popstate',()=>{ if(dlg.open&&!(history.state&&history.state.bzDlg)){ dlgByNav=true; dlg.close(); } });

let proposeTF='';
function proposeDialog(slug){
  if(!requireLogin('Connectez-vous pour partager un code : il sera publié avec votre pseudo et vous rapportera des points.',()=>proposeDialog(slug))) return;
  const b=slug&&bizBy(slug);
  const t=new Date(); const min=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
  openDialog(`<header><div><h2 id="dlgTitle">Proposer un code promo</h2><p class="u14 note">Publié tout de suite sous le pseudo <strong>${esc(me().name)}</strong>. La communauté confirme ensuite s’il fonctionne.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  <form class="form" id="proposeForm">
    ${b?`<div class="for">${logo(b)}<div><small class="muted">Pour l’entreprise</small><br><strong>${esc(b.name)}</strong></div><input type="hidden" name="biz" value="${b.slug}"></div>`:
      `<label>Entreprise<select name="biz" required><option value="">Choisir une entreprise</option>${[...B].sort((a,z)=>a.name.localeCompare(z.name,'fr')).map(x=>`<option value="${x.slug}">${esc(x.name)}</option>`).join('')}</select></label>`}
    <div class="seg typeseg" role="radiogroup" aria-label="Type d’offre"><label><input type="radio" name="type" value="code" checked> Code promo</label><label><input type="radio" name="type" value="magasin"> Offre en magasin</label></div>
    <div class="two">
      <label class="codefield">Code<input class="u22" name="code" required placeholder="Ex. MAYOTTE20" maxlength="30"></label>
      <label>Avantage<input name="deal" required placeholder="-15 %, livraison offerte…" maxlength="60"></label>
    </div>
    <label>Détail <span class="opt">(facultatif)</span><input name="detail" placeholder="Ex. 20 % sur tout le site" maxlength="120"></label>
    <label>Conditions <span class="opt">(facultatif)</span><textarea name="cond" placeholder="Montant minimum, produits exclus…"></textarea></label>
    ${TEMPS.length?`<label>Temps fort <span class="opt">(facultatif)</span><select name="tf"><option value="">Aucun</option>${TEMPS.map(t=>`<option value="${t.slug}"${proposeTF===t.slug?' selected':''}>${esc(t.emoji)} ${esc(t.title)}</option>`).join('')}</select></label>`:''}
    <div class="two">
      <label>Date d’expiration<input name="exp" type="date" required min="${min}"></label>
      <label>Lien de l’offre <span class="opt">(facultatif)</span><input name="link" type="url" placeholder="https://"></label>
    </div>
    <button class="btn btn-primary" type="submit">Publier le code</button>
  </form>`);
}
/* ---------- Revendication d'une fiche entreprise ---------- */
// Fournisseurs d'e-mail grand public : jamais considérés comme « domaine officiel ».
const GENERIC_MAIL=/^(gmail|googlemail|hotmail|outlook|live|msn|yahoo|ymail|icloud|me|mac|aol|orange|wanadoo|sfr|neuf|free|laposte|bbox|gmx|proton|protonmail)\./;
const hostOf=u=>{ try{ return new URL(/^https?:/i.test(u)?u:'https://'+u).hostname.replace(/^www\./,'').toLowerCase(); }catch(e){ return ''; } };
const rootOf=h=>h.split('.').slice(-2).join('.');
function emailMatchesBiz(email,b){
  const d=(String(email).split('@')[1]||'').toLowerCase(); if(!d||GENERIC_MAIL.test(d)) return false;
  const official=[hostOf(b.web||''),(String(b.email||'').split('@')[1]||'').toLowerCase()].filter(x=>x&&!GENERIC_MAIL.test(x));
  return official.some(o=>rootOf(o)===rootOf(d));
}
// SIRET : 14 chiffres + clé de Luhn (exception La Poste : somme des chiffres multiple de 5).
function siretValid(v){
  const s=String(v).replace(/\s/g,''); if(!/^\d{14}$/.test(s)) return false;
  if(s.startsWith('356000000')) return [...s].reduce((a,c)=>a+ +c,0)%5===0;
  let sum=0; for(let i=0;i<14;i++){ let n=+s[13-i]; if(i%2){ n*=2; if(n>9) n-=9; } sum+=n; } return sum%10===0;
}
function claimDialog(slug){
  if(!requireLogin('Connectez-vous (ou créez un compte avec l’e-mail de votre entreprise) pour revendiquer une fiche.',()=>claimDialog(slug))) return;
  const b=slug&&bizBy(slug); const u=me();
  if(b&&b.owners.includes(u.id)){ toast('Vous gérez déjà cette fiche : retrouvez-la dans Mon espace.'); return; }
  const pending=MINE.claims.find(c=>c.status==='Nouvelle'&&(!b||c.entreprise===b.id));
  openDialog(`<header><div><h2 id="dlgTitle">${b?'Revendiquer '+esc(b.name):'Ajouter ou revendiquer mon entreprise'}</h2><p class="u14 note">Nous vérifions que vous représentez bien l’entreprise avant d’ouvrir votre espace pro.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  ${pending?`<p class="authmsg">Vous avez déjà une demande en cours${b?' pour cette entreprise':''}. Vous pouvez en envoyer une nouvelle si besoin.</p>`:''}
  <form class="form" id="claimForm">
    ${b?`<input type="hidden" name="biz" value="${b.slug}">`:
      `<label>Entreprise<select name="biz" required><option value="">Choisir votre entreprise</option>${[...B].sort((x,z)=>x.name.localeCompare(z.name,'fr')).map(x=>`<option value="${x.slug}">${esc(x.name)}</option>`).join('')}<option value="__new__">Mon entreprise n’est pas dans la liste</option></select></label>
      <label class="newbiz" hidden>Nom de l’entreprise<input name="name" maxlength="80"></label>`}
    <div class="two"><label>Votre nom<input name="contact" required autocomplete="name" maxlength="80"></label><label>Téléphone<input name="phone" type="tel" autocomplete="tel" maxlength="30"></label></div>
    <label>Numéro SIRET <span class="opt">(14 chiffres)</span><input name="siret" required inputmode="numeric" maxlength="17" placeholder="123 456 789 00012"></label>
    <p class="note">Compte utilisé : <strong>${esc(u.email)}</strong>. Si cet e-mail utilise le domaine de votre entreprise (ex. contact@votre-site.yt), la vérification est plus rapide.</p>
    <label>Message <span class="opt">(facultatif)</span><textarea name="msg" maxlength="500" placeholder="Votre rôle dans l’entreprise, vos promotions…"></textarea></label>
    <p class="note err" id="claimErr" role="alert"></p>
    <button class="btn btn-primary" type="submit">Envoyer la demande</button>
  </form>`);
}

document.addEventListener('click',e=>{ const z=e.target.closest('.map .zone'); if(z){ selectCommune(z.dataset.commune); } });
document.addEventListener('keydown',e=>{ const z=e.target.closest&&e.target.closest('.map .zone'); if(z&&(e.key==='Enter'||e.key===' ')){ e.preventDefault(); selectCommune(z.dataset.commune); } });
async function vote(id,dir){
  const mv=myVote(id);
  if(mv&&mv.dir===dir){
    await call('DELETE',`/wix-data/v2/items/${encodeURIComponent(mv.id)}?dataCollectionId=Votes`);
    VOTES=VOTES.filter(v=>v.id!==mv.id); return 'retire';
  }
  if(mv){
    await call('PUT',`/wix-data/v2/items/${encodeURIComponent(mv.id)}`,{dataCollectionId:'Votes',dataItem:{data:{code:id,sens:dir}}});
    mv.dir=dir; mv.at=new Date(); return dir;
  }
  const r=await sendToWix('Votes',{code:id,sens:dir});
  VOTES.push({id:r.dataItem&&r.dataItem.id,code:id,dir,owner:me().id,at:new Date()});
  return dir;
}
async function moroVote(id,dir){
  const mv=myMoro(id);
  if(mv&&mv.dir===dir){
    await call('DELETE',`/wix-data/v2/items/${encodeURIComponent(mv.id)}?dataCollectionId=Moro`);
    MOROS=MOROS.filter(v=>v.id!==mv.id); return 'retire';
  }
  if(mv){
    await call('PUT',`/wix-data/v2/items/${encodeURIComponent(mv.id)}`,{dataCollectionId:'Moro',dataItem:{data:{code:id,sens:dir}}});
    mv.dir=dir; mv.at=new Date(); return dir;
  }
  const r=await sendToWix('Moro',{code:id,sens:dir});
  MOROS.push({id:r.dataItem&&r.dataItem.id,code:id,dir,owner:me().id,at:new Date()});
  return dir;
}
async function reloadAll(){ try{ await loadData(); await loadMine(); }catch(e){ console.warn(e); } refresh(); }

document.addEventListener('click',async e=>{
  const t=e.target.closest('button,a'); if(!t) return;
  if(t.hasAttribute('data-back')&&navStack.length>1){ e.preventDefault(); history.back(); return; }
  if(t.dataset.track){ track(t.dataset.track,t.dataset.trackbiz); return; }
  if(t.dataset.caisse){ caisseDialog(t.dataset.caisse); track('caisse',t.dataset.copybiz,t.dataset.caisse); return; }
  if(t.dataset.copy!==undefined){
    const ok=await copy(t.dataset.copy);
    if(!t.classList.contains('copied')){ const old=t.innerHTML; t.innerHTML=ic('check')+'Copié !'; t.classList.add('copied'); setTimeout(()=>{ t.innerHTML=old; t.classList.remove('copied'); },1800); }
    if(ok&&!CALM&&navigator.vibrate) try{ navigator.vibrate(25); }catch(_){}
    toast(ok?`Code ${t.dataset.copy} copié`:`Copiez le code : ${t.dataset.copy}`);
    if(t.dataset.copybiz) track('copie',t.dataset.copybiz,t.dataset.copyid);
  }
  else if(t.dataset.vote){
    const id=t.dataset.vote, dir=t.dataset.dir;
    if(!requireLogin('Connectez-vous pour donner votre avis : chaque avis vous rapporte 1 point.',()=>refresh())) return;
    t.disabled=true;
    try{
      const res=await vote(id,dir); refresh();
      toast(res==='up'?'Merci ! Votre avis aide la communauté.':res==='down'?'Merci, le code est signalé. Il disparaît s’il est signalé plusieurs fois.':'Avis retiré');
    }catch(err){ console.warn(err); t.disabled=false; toast('Avis non enregistré. Réessayez dans un instant.'); }
  }
  else if(t.dataset.moro){
    const id=t.dataset.moro, dir=t.dataset.dir;
    if(!requireLogin('Connectez-vous pour donner du Moro 🔥 ou du Maji 💧 aux bons plans.',()=>refresh())) return;
    t.disabled=true;
    try{
      const res=await moroVote(id,dir); refresh(); if(res==='moro'||res==='maji') heatFx(id,res);
      toast(res==='moro'?'🔥 Moro ! Le bon plan chauffe.':res==='maji'?'💧 Maji, le bon plan refroidit.':'Avis retiré');
    }catch(err){ console.warn(err); t.disabled=false; toast('Avis non enregistré. Réessayez dans un instant.'); }
  }
  else if(t.dataset.like){
    if(!requireLogin('Connectez-vous pour aimer les commentaires.',()=>refresh())) return;
    t.disabled=true;
    try{ await toggleLike(t.dataset.like); refresh(); }catch(err){ console.warn(err); t.disabled=false; toast('Action impossible. Réessayez.'); }
  }
  else if(t.dataset.reply!==undefined){
    if(t.dataset.reply&&!requireLogin('Connectez-vous pour répondre.',()=>refresh())) return;
    replyTo=t.dataset.reply; refresh();
    const ta=replyTo&&document.querySelector(`#cm-${CSS.escape(replyTo)} textarea`); if(ta) ta.focus();
  }
  else if(t.dataset.delcomment){
    if(!confirm('Supprimer ce commentaire ?')) return;
    try{ await call('DELETE',`/wix-data/v2/items/${encodeURIComponent(t.dataset.delcomment)}?dataCollectionId=Commentaires`); COMMENTS=COMMENTS.filter(x=>x.id!==t.dataset.delcomment); refresh(); toast('Commentaire supprimé'); }
    catch(err){ console.warn(err); toast('Suppression impossible. Réessayez.'); }
  }
  else if(t.dataset.report){
    if(!requireLogin('Connectez-vous pour signaler un commentaire.',()=>reportDialog(t.dataset.report))) return;
    reportDialog(t.dataset.report);
  }
  else if(t.dataset.csort){ commentSort=t.dataset.csort; refresh(); }
  else if(t.dataset.needlogin){ requireLogin(t.dataset.needlogin==='demande'?'Connectez-vous pour publier une demande ou y répondre.':'Connectez-vous pour commenter : chaque commentaire vous rapporte 1 point.',()=>refresh()); }
  else if(t.dataset.copylink){ const ok=await copy(t.dataset.copylink); toast(ok?'Lien copié : collez-le où vous voulez !':'Copiez le lien : '+t.dataset.copylink); }
  else if(t.dataset.fav){
    e.preventDefault();
    const s=t.dataset.fav; const i=S.favs.indexOf(s);
    if(i>=0){S.favs.splice(i,1); toast('Retiré des favoris');} else {S.favs.push(s); toast('Ajouté aux favoris');}
    save(); refresh();
  }
  else if(t.dataset.commune){ selectCommune(t.dataset.commune); }
  else if(t.dataset.propose!==undefined){ proposeTF=t.dataset.tf||''; proposeDialog(t.dataset.propose); }
  else if(t.dataset.claim!==undefined){ claimDialog(t.dataset.claim); }
  else if(t.dataset.editbiz){ editBizDialog(t.dataset.editbiz); }
  else if(t.dataset.focus){ focusShop(t.dataset.focus); }
  else if(t.dataset.follow){
    const type=t.dataset.follow, val=t.dataset.val, label=t.dataset.label;
    if(!requireLogin('Connectez-vous pour créer une alerte et être prévenu des nouveaux bons plans.',()=>refresh())) return;
    t.disabled=true;
    try{ const on=await toggleFollow(type,val,type==='entreprise'?(bizBy(val)||{}).name||val:val); refresh(); toast(on?'🔔 Alerte créée : vous serez prévenu des nouveaux bons plans.':'Alerte supprimée'); }
    catch(err){ console.warn(err); t.disabled=false; toast(err.max?'Vous avez déjà 20 alertes : supprimez-en une.':'Action impossible. Réessayez.'); }
  }
  else if(t.dataset.delalert){
    t.disabled=true;
    try{ await call('DELETE',`/wix-data/v2/items/${encodeURIComponent(t.dataset.delalert)}?dataCollectionId=Alertes`); MINE.alerts=MINE.alerts.filter(a=>a.id!==t.dataset.delalert); refresh(); toast('Alerte supprimée'); }
    catch(err){ console.warn(err); t.disabled=false; toast('Suppression impossible. Réessayez.'); }
  }
  else if(t.dataset.dmresolve){
    const d=DEMANDES.find(x=>x.id===t.dataset.dmresolve); if(!d) return; t.disabled=true;
    try{ await saveDemande(d,'resolue'); refresh(); toast('✓ Demande marquée comme résolue. Merci à la communauté !'); }catch(err){ console.warn(err); t.disabled=false; toast('Action impossible. Réessayez.'); }
  }
  else if(t.dataset.dmdel){
    if(!confirm('Supprimer cette demande ?')) return; t.disabled=true;
    try{ await call('DELETE',`/wix-data/v2/items/${encodeURIComponent(t.dataset.dmdel)}?dataCollectionId=Demandes`); DEMANDES=DEMANDES.filter(x=>x.id!==t.dataset.dmdel); location.hash='#/demandes'; toast('Demande supprimée'); }
    catch(err){ console.warn(err); t.disabled=false; toast('Suppression impossible. Réessayez.'); }
  }
  else if(t.id==='nearMe'){ nearMe(t); }
  else if(t.dataset.proevent){ proEventDialog(t.dataset.proevent); }
  else if(t.id==='codeReset'){ location.hash='#/codes'; route(); }
  else if(t.id==='dirReset'){ location.hash='#/entreprises'; route(); }
  else if(t.hasAttribute('data-close')){ dlg.close(); }
  else if(t.dataset.toast){ e.preventDefault(); toast(t.dataset.toast); }
  else if(t.dataset.authmode){ authMode=t.dataset.authmode; pendingState=null; redrawAuth(); }
  else if(t.hasAttribute('data-forgot')){
    const email=(t.closest('form').querySelector('[name=email]')||{}).value||'';
    if(!email){ toast('Saisissez d’abord votre e-mail'); return; }
    try{
      await call('POST','/_api/iam/recovery/v1/send-email',{email,redirect:{url:location.origin+'/',clientId:AUTH_CLIENT_ID}},await getAuthVisitorToken());
      toast('E-mail de réinitialisation envoyé');
    }catch(err){ console.warn(err); toast('Envoi impossible. Vérifiez l’adresse e-mail.'); }
  }
  else if(t.dataset.dircat!==undefined){ dirState.cat=t.dataset.dircat; document.querySelectorAll('[data-dircat]').forEach(b=>b.setAttribute('aria-pressed',b===t)); drawDirectory(); }
  else if(t.dataset.codecat!==undefined){ codeState.cat=t.dataset.codecat; document.querySelectorAll('[data-codecat]').forEach(b=>b.setAttribute('aria-pressed',b===t)); drawCodes(); }
  else if(t.id==='logout'){ logout(); route(); toast('Vous êtes déconnecté'); }
});
dlg.addEventListener('click',e=>{ if(e.target===dlg) dlg.close(); });
dlg.addEventListener('close',()=>{ posMap=dropMap(posMap); if(!dlgByNav&&history.state&&history.state.bzDlg) history.back(); dlgByNav=false; });

document.addEventListener('change',e=>{
  if(e.target.name==='type'&&e.target.closest('#proposeForm')){ const cf=document.querySelector('#proposeForm .codefield'); const st=e.target.value==='magasin'; cf.hidden=st; cf.querySelector('input').required=!st; }
  const id=e.target.id;
  if(e.target.name==='type'&&e.target.closest('#alertForm')){ document.querySelectorAll('#alertForm .af').forEach(l=>l.hidden=!l.classList.contains('af-'+e.target.value)); }
  if(id==='codeSort'){ codeState.sort=e.target.value; drawCodes(); }
  if(id==='codeType'){ codeState.type=e.target.value; drawCodes(); }
  if(id==='codeCom'){ codeState.com=e.target.value; drawCodes(); }
  if(id==='codeVer'){ codeState.verified=e.target.checked; drawCodes(); }
  if(id==='dirCom'){ dirState.com=e.target.value; drawDirectory(); }
  if(id==='dirSort'){ dirState.sort=e.target.value; drawDirectory(); }
  if(id==='dirDeals'){ dirState.deals=e.target.checked; drawDirectory(); }
  if(id==='mapCom'){ mapState.com=e.target.value; drawMapList(); if(storeMap) fitShops(); }
  if(e.target.name==='typeVente'&&e.target.closest('#editBizForm')){ const box=document.getElementById('posBox'); box.hidden=e.target.value==='en-ligne'; if(!box.hidden&&posMap) setTimeout(()=>posMap.invalidateSize(),50); }
  if(e.target.name==='biz'&&e.target.closest('#claimForm')){ const nb=document.querySelector('#claimForm .newbiz'); if(nb){ nb.hidden=e.target.value!=='__new__'; nb.querySelector('input').required=!nb.hidden; } }
});
document.addEventListener('input',e=>{
  if(e.target.id==='dirQ'){ dirState.q=e.target.value; drawDirectory(); }
  if(e.target.id==='codeQ'){ codeState.q=e.target.value; drawCodes(); }
});

async function afterAuth(res,btn,label){
  try{
    const st=await handleAuthState(res);
    if(st==='ok'){
      const inDlg=dlg.open; if(inDlg) dlg.close();
      toast(`Bienvenue ${me().name} !`);
      const next=afterLogin; afterLogin=null;
      route(); if(inDlg&&next) next();
    }
    else if(st==='verify') redrawAuth();
    else if(st==='approval') redrawAuth('Votre compte doit être approuvé par Bonszahé. Vous recevrez un e-mail.');
    else throw new Error('state '+res.state);
  }catch(err){ console.warn(err); const el=document.getElementById('authErr'); if(el) el.textContent=authError(err); btn.disabled=false; btn.textContent=label; }
}

document.addEventListener('submit',async e=>{
  const f=e.target;
  if(f.matches('[data-search]')){ e.preventDefault(); const q=f.querySelector('input').value.trim(); location.hash='#/recherche'+(q?'?q='+encodeURIComponent(q):''); }
  else if(f.id==='authForm'){
    e.preventDefault(); const d=Object.fromEntries(new FormData(f));
    const btn=f.querySelector('button[type=submit]'); const label=btn.textContent; btn.disabled=true; btn.textContent='Connexion…';
    const err=document.getElementById('authErr'); if(err) err.textContent='';
    try{
      const visitor=await getAuthVisitorToken();
      const captcha_tokens=await captchaTokens(authMode==='register'?'SIGNUP':'LOGIN');
      const res=authMode==='register'
        ? await call('POST','/_api/iam/authentication/v2/register',{loginId:{email:d.email.trim()},password:d.password,profile:{nickname:d.nick.trim()},captcha_tokens},visitor)
        : await call('POST','/_api/iam/authentication/v2/login',{loginId:{email:d.email.trim()},password:d.password,captcha_tokens},visitor);
      rcVisibleToken='';
      await afterAuth(res,btn,label);
    }catch(ex){
      console.warn(ex);
      // Un jeton de case cochée ne sert qu'une fois : on remet la case à zéro.
      if(rcVisibleToken){ rcVisibleToken=''; try{ window.grecaptcha.enterprise.reset(); }catch(_){} }
      // Captcha invisible refusé (ou case déjà expirée) : on affiche la case « Je ne suis pas un robot ».
      if(isCaptchaError(ex)) showVisibleCaptcha().catch(()=>{});
      if(err) err.textContent=authError(ex); btn.disabled=false; btn.textContent=label;
    }
  }
  else if(f.id==='verifyForm'){
    e.preventDefault(); const d=Object.fromEntries(new FormData(f));
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Vérification…';
    try{
      const res=await call('POST','/_api/iam/verification/v1/auth/verify',{code:d.code.trim(),stateToken:pendingState},await getAuthVisitorToken());
      pendingState=null;
      await afterAuth(res,btn,'Valider');
    }catch(ex){ console.warn(ex); const el=document.getElementById('authErr'); if(el) el.textContent=authError(ex); btn.disabled=false; btn.textContent='Valider'; }
  }
  else if(f.id==='proposeForm'){
    e.preventDefault(); if(!me()) return;
    const d=Object.fromEntries(new FormData(f));
    const store=d.type==='magasin';
    const p={biz:d.biz,code:store?'':(d.code||'').trim().toUpperCase(),deal:d.deal.trim(),detail:(d.detail||'').trim(),cond:d.cond.trim(),exp:d.exp,link:d.link.trim()};
    if(!store&&activeCodes().some(c=>c.biz===p.biz&&c.code.toUpperCase()===p.code)){ toast('Ce code est déjà en ligne pour cette entreprise. Merci !'); return; }
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Publication…';
    sendToWix('PropositionsCodes',{code:p.code,typeOffre:store?'magasin':'code',entreprise:bizId[p.biz]||p.biz,avantage:p.deal,detail:p.detail,conditions:p.cond,dateExpiration:p.exp,lienOffre:p.link,tempsForts:d.tf||'',statut:'En attente',contributeurId:me().id,contributeurNom:me().name})
      .then(()=>{ dlg.close(); toast('Merci ! Votre code est publié dans quelques secondes.'); setTimeout(reloadAll,5000); })
      .catch(err=>{ console.warn(err); btn.disabled=false; btn.textContent='Publier le code'; toast(err.status===401||err.status===403?'Session expirée : reconnectez-vous.':'Envoi impossible pour le moment. Réessayez dans un instant.'); });
  }
  else if(f.dataset.commentform){
    e.preventDefault(); if(!me()) return;
    const text=(new FormData(f).get('text')||'').toString().trim().slice(0,500); if(!text) return;
    const parent=f.dataset.parent||'';
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true;
    try{
      const r=await sendToWix('Commentaires',Object.assign({code:f.dataset.commentform,texte:text,pseudo:me().name},parent?{parent}:{}));
      COMMENTS.push({id:r.dataItem&&r.dataItem.id,code:f.dataset.commentform,text,parent,name:me().name,owner:me().id,at:new Date()});
      replyTo=''; refresh(); toast(parent?'Réponse publiée':'Commentaire publié, merci !');
    }catch(err){ console.warn(err); btn.disabled=false; toast(err.status===401||err.status===403?'Session expirée : reconnectez-vous.':'Publication impossible. Réessayez.'); }
  }
  else if(f.id==='contactForm'){
    e.preventDefault(); const d=Object.fromEntries(new FormData(f));
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Envoi…';
    try{ await sendToWix('MessagesContact',{nom:d.nom.trim(),email:d.email.trim(),sujet:d.sujet,message:d.message.trim(),traite:false}); f.outerHTML='<p class="authmsg">Merci, votre message est bien envoyé. Nous vous répondons par e-mail.</p>'; }
    catch(err){ console.warn(err); btn.disabled=false; btn.textContent='Envoyer'; toast('Envoi impossible pour le moment. Réessayez dans un instant.'); }
  }
  else if(f.id==='reportForm'){
    e.preventDefault(); const cid=f.dataset.cid; const motif=(new FormData(f).get('motif')||'Autre').toString();
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true;
    try{ const r=await sendToWix('Signalements',{commentaire:cid,motif}); REPORTS.push({id:r.dataItem&&r.dataItem.id,comment:cid,owner:me().id}); dlg.close(); refresh(); toast('Merci, le commentaire est signalé.'); }
    catch(err){ console.warn(err); btn.disabled=false; toast('Signalement impossible. Réessayez.'); }
  }
  else if(f.id==='alertForm'){
    e.preventDefault(); if(!me()) return;
    const d=Object.fromEntries(new FormData(f)); const val=String(d[d.type]||'').trim().slice(0,40);
    if(!val){ toast('Indiquez ce que vous voulez suivre.'); return; }
    if(followed(d.type,d.type==='mot'?val:val)){ toast('Cette alerte existe déjà.'); return; }
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true;
    try{ await toggleFollow(d.type,val,d.type==='entreprise'?(bizBy(val)||{}).name||val:d.type==='categorie'?(catBy(val)||{}).name||val:val); refresh(); toast('🔔 Alerte créée'); }
    catch(err){ console.warn(err); btn.disabled=false; toast(err.max?'Vous avez déjà 20 alertes : supprimez-en une.':'Création impossible. Réessayez.'); }
  }
  else if(f.id==='demandeForm'){
    e.preventDefault(); if(!me()) return;
    const d=Object.fromEntries(new FormData(f)); const texte=String(d.texte||'').trim().slice(0,300); if(!texte) return;
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Publication…';
    const ent=d.entreprise?(bizId[d.entreprise]||''):'';
    try{ const r=await sendToWix('Demandes',{texte,entreprise:ent,categorie:d.categorie||'',pseudo:me().name,statut:'ouverte'});
      const id=r.dataItem&&r.dataItem.id; DEMANDES.unshift({id,text:texte,entId:ent,biz:d.entreprise||'',cat:d.categorie||'',name:me().name,status:'ouverte',owner:me().id,at:new Date()});
      location.hash='#/demandes/'+encodeURIComponent(id); toast('Demande publiée ! La communauté va vous répondre.'); }
    catch(err){ console.warn(err); btn.disabled=false; btn.textContent='Publier ma demande'; toast(err.status===401||err.status===403?'Session expirée : reconnectez-vous.':'Publication impossible. Réessayez.'); }
  }
  else if(f.id==='editBizForm'){
    e.preventDefault(); const b=ownerOf(f.dataset.biz); if(!b) return;
    const d=Object.fromEntries(new FormData(f)); const t=k=>String(d[k]||'').trim();
    const online=d.typeVente==='en-ligne'; const pos=online?null:parsePos(t('position'));
    if(!online&&t('position')&&!pos){ document.getElementById('editErr').textContent='Position GPS non reconnue : placez le point sur la carte ou utilisez le format « -12.78, 45.22 ».'; return; }
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Envoi…';
    sendToWix('ModificationsFiches',{typeVente:d.typeVente||'',position:posStr(pos),nomEntreprise:b.name,entreprise:b.id,statut:'En attente',description:t('description'),adresse:t('adresse'),commune:d.commune?comBy(d.commune).name:'',telephone:t('telephone'),siteWeb:t('siteWeb'),email:t('email'),horaires:t('horaires'),membreId:me().id,membreNom:me().name})
      .then(()=>{ dlg.close(); toast('Merci ! Vos modifications seront en ligne après vérification.'); loadMine().then(()=>{ if(location.hash.startsWith('#/profil')) refresh(); }); })
      .catch(ex=>{ console.warn(ex); btn.disabled=false; btn.textContent='Envoyer les modifications'; toast(ex.status===401||ex.status===403?'Session expirée : reconnectez-vous.':'Envoi impossible pour le moment. Réessayez dans un instant.'); });
  }
  else if(f.id==='proEventForm'){
    e.preventDefault(); const b=ownerOf(f.dataset.biz); if(!b) return;
    const d=Object.fromEntries(new FormData(f)); const t=k=>String(d[k]||'').trim();
    if(d.dateFin&&d.dateFin<d.date){ document.getElementById('evErr').textContent='La date de fin doit être après la date de début.'; return; }
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Envoi…';
    sendToWix('EvenementsProposes',Object.assign({titre:t('titre'),date:d.date,heure:t('heure'),commune:d.commune?comBy(d.commune).name:'',lieu:t('lieu'),description:t('description'),lien:t('lien'),entreprise:b.id,membreId:me().id,membreNom:me().name},d.dateFin?{dateFin:d.dateFin}:{}))
      .then(()=>{ dlg.close(); toast('Merci ! Votre événement sera publié après vérification.'); loadMine().then(()=>{ if(location.hash.startsWith('#/profil')) refresh(); }); })
      .catch(ex=>{ console.warn(ex); btn.disabled=false; btn.textContent='Envoyer l’événement'; toast(ex.status===401||ex.status===403?'Session expirée : reconnectez-vous.':'Envoi impossible pour le moment. Réessayez dans un instant.'); });
  }
  else if(f.id==='claimForm'){
    e.preventDefault(); if(!me()) return;
    const d=Object.fromEntries(new FormData(f)); const err=document.getElementById('claimErr');
    const isNew=d.biz==='__new__'; const b=isNew?null:B.find(x=>x.slug===d.biz);
    const name=isNew?(d.name||'').trim():(b&&b.name);
    if(!name){ err.textContent='Indiquez le nom de votre entreprise.'; return; }
    const siret=String(d.siret||'').replace(/\s/g,'');
    if(!siretValid(siret)){ err.textContent='Ce numéro SIRET n’est pas valide : vérifiez les 14 chiffres.'; return; }
    const u=me(); const domaine=!!b&&emailMatchesBiz(u.email,b); const dejaGeree=!!b&&b.owners.length>0&&!b.owners.includes(u.id);
    const indices=[domaine?'✅ E-mail du domaine officiel':'— E-mail hors domaine officiel',u.verified?'✅ E-mail du compte vérifié':'— E-mail du compte non vérifié',dejaGeree?'⚠️ Fiche déjà gérée par un autre compte':'',isNew?'🆕 Entreprise absente de Bonszahé : fiche à créer':''].filter(Boolean).join(' · ');
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Envoi…';
    sendToWix('DemandesEntreprises',Object.assign({nomEntreprise:name,contact:d.contact,telephone:d.phone,email:u.email,siret,message:d.msg||'',membreId:u.id,emailDomaine:domaine,emailVerifie:!!u.verified,dejaGeree,indices,statut:'Nouvelle'},b?{entreprise:b.id}:{}))
      .then(()=>{ dlg.close(); toast('Demande envoyée. Votre espace pro s’ouvrira dès sa validation.'); loadMine().then(()=>{ if(location.hash.startsWith('#/profil')) refresh(); }); })
      .catch(ex=>{ console.warn(ex); btn.disabled=false; btn.textContent='Envoyer la demande'; err.textContent=ex.status===401||ex.status===403?'Session expirée : reconnectez-vous.':'Envoi impossible pour le moment. Réessayez dans un instant.'; });
  }
});

app.innerHTML=`<div class="wrap skel" aria-busy="true"><p class="sr">Chargement des bons plans…</p><div class="sk sk-title"></div><div class="sk sk-line"></div><div class="sk sk-search"></div><div class="skgrid">${'<div class="sk sk-card"></div>'.repeat(3)}</div></div>`;
loadData().then(resumeRedirectLogin).then(loadMine).catch(err=>{ console.warn('CMS Wix indisponible, affichage de la copie locale',err); B.forEach(b=>{ bizId[b.slug]=b.slug; b.owners=b.owners||[]; }); }).finally(()=>{ trackNav(location.hash||'#/'); route(); });
