
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
const bizBy = s => B.find(b=>b.slug===s) || {slug:s,name:'Entreprise',cat:'shopping',desc:'',addr:'',phone:'',web:'',email:'',commune:''};

/* ---------- Communes ---------- */
const MAP_SRC='carte.webp';
const COMMUNES=[{"slug": "mtsamboro", "name": "Mtsamboro", "polys": [[[150, 270], [200, 210], [270, 170], [300, 120], [350, 90], [355, 130], [315, 170], [290, 245], [315, 330], [185, 315]], [[35, 60], [70, 35], [120, 75], [95, 100], [60, 120], [30, 75]]]}, {"slug": "acoua", "name": "Acoua", "polys": [[[105, 355], [145, 275], [185, 315], [315, 330], [310, 395], [210, 410], [120, 450], [115, 430]]]}, {"slug": "bandraboua", "name": "Bandraboua", "polys": [[[290, 245], [315, 170], [380, 215], [420, 300], [490, 375], [535, 495], [420, 470], [335, 420], [310, 395], [315, 330]]]}, {"slug": "mtsangamouji", "name": "M'Tsangamouji", "polys": [[[120, 450], [210, 410], [310, 395], [335, 420], [420, 470], [335, 545], [300, 535], [200, 500], [150, 480]]]}, {"slug": "koungou", "name": "Koungou", "polys": [[[490, 375], [560, 345], [600, 390], [700, 400], [790, 440], [825, 475], [690, 515], [535, 495]]]}, {"slug": "tsingoni", "name": "Tsingoni", "polys": [[[335, 545], [420, 470], [535, 495], [595, 505], [580, 560], [520, 660], [450, 685], [330, 640], [305, 590]]]}, {"slug": "mamoudzou", "name": "Mamoudzou", "polys": [[[595, 505], [690, 515], [825, 475], [835, 580], [760, 650], [680, 730], [530, 720], [520, 660], [580, 560]]]}, {"slug": "dzaoudzi", "name": "Dzaoudzi", "polys": [[[885, 575], [935, 560], [1000, 495], [1055, 580], [1045, 590], [950, 620], [905, 600]]]}, {"slug": "pamandzi", "name": "Pamandzi", "polys": [[[950, 620], [1045, 590], [1050, 650], [1020, 710], [990, 690], [960, 665]]]}, {"slug": "chiconi", "name": "Chiconi", "polys": [[[330, 655], [410, 675], [420, 795], [380, 800], [330, 775], [335, 700]]]}, {"slug": "ouangani", "name": "Ouangani", "polys": [[[410, 675], [520, 660], [530, 720], [480, 760], [500, 790], [520, 915], [465, 905], [410, 800]]]}, {"slug": "dembeni", "name": "Dembéni", "polys": [[[530, 720], [680, 730], [665, 790], [690, 870], [770, 910], [665, 960], [620, 965], [560, 945], [520, 915], [500, 790], [480, 760]]]}, {"slug": "sada", "name": "Sada", "polys": [[[300, 840], [330, 820], [380, 800], [410, 800], [465, 905], [445, 965], [420, 945], [360, 890], [310, 860]]]}, {"slug": "chirongui", "name": "Chirongui", "polys": [[[465, 905], [520, 915], [560, 945], [570, 1055], [545, 1150], [530, 1235], [485, 1260], [400, 1150], [440, 1140], [495, 1090], [445, 960]]]}, {"slug": "bandrele", "name": "Bandrélé", "polys": [[[560, 945], [620, 965], [665, 960], [770, 910], [740, 1000], [690, 1020], [720, 1095], [635, 1110], [625, 1155], [655, 1240], [710, 1295], [680, 1320], [600, 1370], [530, 1330], [485, 1260], [530, 1235], [545, 1150], [570, 1055]]]}, {"slug": "boueni", "name": "Bouéni", "polys": [[[220, 1015], [310, 1005], [340, 1070], [420, 1120], [400, 1150], [370, 1180], [270, 1240], [245, 1245], [330, 1195], [310, 1130], [270, 1110], [250, 1060]]]}, {"slug": "kani-keli", "name": "Kani-Kéli", "polys": [[[270, 1240], [370, 1180], [400, 1150], [485, 1260], [530, 1330], [530, 1390], [470, 1395], [440, 1350], [360, 1330], [345, 1260]]]}];
const comBy=s=>COMMUNES.find(c=>c.slug===s);
const COMMUNE_OF={zarahissi:'mamoudzou','coffret-yangou':'mamoudzou',oishii:'tsingoni','volutes-coffee-shop':'mamoudzou',encreco:'mamoudzou','arome-d-orient':'sada','univers-ktech':'mamoudzou',meubles110:'mamoudzou',cazdeco:'mamoudzou',mayanadistrib:'mtsangamouji',zazaland:'mamoudzou',mhd:'mamoudzou',mayphone:'sada','maji-mewou':'sada',samcom:'koungou',doukamay:'mtsangamouji',cjumo:'ouangani','maore-discount':'mamoudzou','bebe-wangou':'tsingoni','meubles-et-deco':'mamoudzou','mzuri-sana':'mamoudzou','maison-surbon':'mamoudzou','caribou-bebe':'mamoudzou',mayplaytech:'mamoudzou',samani:'mamoudzou','jeleo-boutique':'chirongui','la-mahoraise':'bandraboua','sunday-officiel':'mamoudzou'};
B.forEach(b=>b.commune=COMMUNE_OF[b.slug]||'');


const TODAY = new Date(); TODAY.setHours(0,0,0,0);
const inDays = n => { const d = new Date(TODAY); d.setDate(d.getDate()+n); return d; };

/* ---------- Connexion au CMS Wix ---------- */
const WIX_CLIENT_ID='5ead703b-03d1-45f5-8049-74802f2b86f2';
const API='https://www.wixapis.com';
let baseCodes=[];
let bizId={};
let EVENTS=[];
let VOTES=[];
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
  const r=await fetch(API+'/oauth2/token',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:WIX_CLIENT_ID,grantType:'refresh_token',refreshToken:AUTH.refresh})});
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
async function finishLogin(sessionToken){
  const verifier=randomStr(), state=randomStr();
  const challenge=b64url(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(verifier)));
  const visitor=await getVisitorToken();
  const rs=await call('POST','/_api/redirects-api/v1/redirect-session',{auth:{authRequest:{clientId:WIX_CLIENT_ID,codeChallenge:challenge,codeChallengeMethod:'S256',responseMode:'web_message',responseType:'code',scope:'offline_access',state,sessionToken}}},visitor);
  const code=await new Promise((resolve,reject)=>{
    const frame=document.createElement('iframe'); frame.style.display='none'; frame.title='Connexion';
    const timer=setTimeout(()=>{ cleanup(); reject(new Error('timeout')); },20000);
    function cleanup(){ clearTimeout(timer); window.removeEventListener('message',onMsg); frame.remove(); }
    function onMsg(e){
      let d=e.data; if(typeof d==='string'){ try{ d=JSON.parse(d); }catch(_){ return; } }
      if(!d||d.state!==state) return;
      cleanup(); d.code?resolve(d.code):reject(new Error(d.error||'auth'));
    }
    window.addEventListener('message',onMsg);
    frame.src=rs.redirectSession.fullUrl; document.body.appendChild(frame);
  });
  const t=await call('POST','/oauth2/token',{clientId:WIX_CLIENT_ID,grantType:'authorization_code',code,codeVerifier:verifier},visitor);
  AUTH={access:t.access_token,refresh:t.refresh_token,exp:Date.now()+(t.expires_in||14400)*1000,member:null};
  const m=(await call('GET','/members/v1/members/my',undefined,t.access_token)).member||{};
  const p=m.profile||{};
  AUTH.member={id:m.id,name:p.nickname||[p.firstName,p.lastName].filter(Boolean).join(' ')||(m.loginEmail||'').split('@')[0]||'Membre',email:m.loginEmail||''};
  saveAuth();
  await loadMine();
}
// Gère la réponse de Login V2 / Register V2 / Verify : SUCCESS, vérification e-mail ou approbation.
async function handleAuthState(res){
  if(res.state==='SUCCESS'&&res.sessionToken){ await finishLogin(res.sessionToken); return 'ok'; }
  if(res.state==='REQUIRE_EMAIL_VERIFICATION'){ pendingState=res.stateToken; return 'verify'; }
  if(res.state==='REQUIRE_OWNER_APPROVAL') return 'approval';
  return 'error';
}
let pendingState=null;
function logout(){ AUTH=null; saveAuth(); MINE={proposals:[]}; }

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

function authError(err){
  const code=JSON.stringify(err&&err.data||{});
  if(/CAPTCHA/i.test(code)||/recaptcha/i.test(String(err&&err.message||''))) return 'Cochez la case « Je ne suis pas un robot » ci-dessus, puis réessayez.';
  if(/IDENTITY_NOT_FOUND|not.?found/i.test(code)) return 'Aucun compte avec cet e-mail. Créez votre compte.';
  if(/INVALID_PASSWORD|wrong.?password|credentials/i.test(code)) return 'E-mail ou mot de passe incorrect.';
  if(/ALREADY_EXISTS|EMAIL_ALREADY/i.test(code)) return 'Un compte existe déjà avec cet e-mail. Connectez-vous.';
  if(/PASSWORD/i.test(code)) return 'Mot de passe trop faible : 6 caractères minimum.';
  if(/RESET_PASSWORD|CODE/i.test(code)) return 'Code incorrect ou expiré.';
  return 'Connexion impossible pour le moment. Réessayez dans un instant.';
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
async function loadData(){
  const [ents,codes,votes,events]=await Promise.all([
    queryAll('Entreprises'),queryAll('CodesPromo'),
    queryAll('Votes').catch(()=>[]),queryAll('Evenements').catch(()=>[])
  ]);
  const idToSlug={}; const used=new Set();
  const list=ents.filter(e=>e.publiee!==false&&e.nom).map(e=>{
    let slug=slugify(e.slug||e.nom)||String(e._id);
    while(used.has(slug)) slug+='-2';
    used.add(slug); idToSlug[e._id]=slug;
    const owners=String(e.proprietaire||'').split(/[\s,;]+/).filter(Boolean);
    return {slug,id:e._id,name:e.nom,cat:catFrom(e.categorie),commune:communeFrom(e.commune),desc:e.description||'',addr:e.adresse||'',phone:e.telephone||'',web:e.siteWeb||'',email:e.email||'',logo:imgUrl(e.logo),owners};
  }).sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  B=list; bizId={}; Object.keys(idToSlug).forEach(id=>bizId[idToSlug[id]]=id);
  VOTES=votes.filter(v=>v.code&&(v.sens==='up'||v.sens==='down')).map(v=>({id:v._id,code:v.code,dir:v.sens,owner:v._owner,at:dateFrom(v._updatedDate||v._createdDate)||TODAY}));
  baseCodes=codes.filter(c=>c.code&&idToSlug[refId(c.entreprise)]).map(c=>{
    const exp=dateFrom(c.dateExpiration);
    return {id:c._id,biz:idToSlug[refId(c.entreprise)],deal:c.avantage||'Bon plan',detail:c.detail||'',code:String(c.code).trim(),cond:c.conditions||'',exp:exp||inDays(3650),noExp:!exp,verified:!!c.verifie,baseUp:+c.votesOui||0,baseDown:+c.votesNon||0,added:dateFrom(c._createdDate)||TODAY,status:statutFrom(c.statut),link:c.lienOffre||'',by:c.contributeur||'',byName:c.contributeurNom||''};
  });
  EVENTS=events.filter(e=>e.publie!==false&&e.titre&&dateFrom(e.date)).map(e=>({
    id:e._id,title:e.titre,date:dateFrom(e.date),end:dateFrom(e.dateFin),time:e.heure||'',commune:communeFrom(e.commune),communeName:e.commune||'',place:e.lieu||'',desc:e.description||'',img:imgUrl(e.image),link:e.lien||'',biz:idToSlug[refId(e.entreprise)]||''
  })).sort((a,b)=>a.date-b.date);
  dataSource='wix';
}
async function sendToWix(collection,data){
  return wix('/wix-data/v2/items',{dataCollectionId:collection,dataItem:{data}});
}

/* ---------- Données du membre connecté ---------- */
let MINE={proposals:[]};
async function loadMine(){
  if(!me()){ MINE={proposals:[]}; return; }
  try{
    const items=await queryAll('PropositionsCodes');
    MINE.proposals=items.map(p=>({id:p._id,biz:B.find(b=>b.id===refId(p.entreprise))?.slug||'',code:p.code,deal:p.avantage||'',exp:p.dateExpiration||'',status:statutFrom(p.statut==='Traité'?'valide':p.statut),created:dateFrom(p._createdDate)||TODAY})).sort((a,b)=>b.created-a.created);
  }catch(e){ console.warn('Propositions indisponibles',e); }
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
function voteMap(){
  const last={};
  VOTES.forEach(v=>{ const k=v.code+'|'+v.owner; if(!last[k]||last[k].at<=v.at) last[k]=v; });
  const out={};
  Object.values(last).forEach(v=>{ const o=out[v.code]||(out[v.code]={up:0,down:0}); o[v.dir]++; });
  return out;
}
const myVote=codeId=>me()&&VOTES.filter(v=>v.code===codeId&&v.owner===me().id).sort((a,b)=>b.at-a.at)[0];
// Masqué automatiquement quand la communauté le signale : au moins 3 « ne fonctionne plus » et plus de non que de oui.
const flagged=c=>c.down>=3&&c.down>c.up;
function allCodes(){
  const vm=voteMap();
  return baseCodes.map(c=>{ const v=vm[c.id]||{up:0,down:0}; return Object.assign({},c,{up:c.baseUp+v.up,down:c.baseDown+v.down}); });
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

function coupon(c,{showBiz=true}={}){
  const b=bizBy(c.biz); const left=daysLeft(c); const mv=myVote(c.id); const v=mv&&mv.dir;
  const soon = !c.noExp && left<=7;
  const official = c.by && b.owners && b.owners.includes(c.by);
  return `<article class="coupon">
    <div class="main">
      ${showBiz?`<a class="bizline" href="#/entreprises/${b.slug}">${logo(b)}<span>${esc(b.name)}</span></a>`:''}
      <div class="deal">${esc(c.deal)}</div>
      <p class="detail">${esc(c.detail)}</p>
      ${c.cond?`<p class="cond">${esc(c.cond)}</p>`:''}
      <div class="meta">
        ${c.verified?`<span class="pill ok">${ic('check')}Code vérifié</span>`:''}
        ${soon?`<span class="pill soon">${ic('clock')}${left===0?'Dernier jour':left===1?'Plus qu’1 jour':'Plus que '+left+' jours'}</span>`:(c.noExp?`<span class="pill">${ic('clock')}Sans date limite</span>`:`<span class="pill">${ic('clock')}Expire le ${fmt(c.exp)}</span>`)}
        ${official?`<span class="pill ok">${ic('store')}Offre officielle</span>`:''}
        ${isNew(c)?`<span class="pill wait">Nouveau</span>`:''}
      </div>
      ${c.byName&&!official?`<p class="by">${ic('heart')}Partagé par <strong>${esc(c.byName)}</strong>, merci !</p>`:''}
    </div>
    <div class="perf" aria-hidden="true"></div>
    <div class="stub">
      <div class="coderow">
        <span class="code" aria-label="Code promo">${esc(c.code)}</span>
        <button class="btn btn-primary btn-sm" data-copy="${esc(c.code)}" data-copybiz="${b.slug}" data-copyid="${esc(c.id)}">${ic('copy')}Copier le code</button>
      </div>
      <div class="votes" role="group" aria-label="Ce code a-t-il fonctionné ?">
        <button class="vote up" data-vote="${c.id}" data-dir="up" aria-pressed="${v==='up'}">${ic('up')}Fonctionne (${c.up})</button>
        <button class="vote down" data-vote="${c.id}" data-dir="down" aria-pressed="${v==='down'}">${ic('down')}Ne fonctionne plus${c.down?' ('+c.down+')':''}</button>
      </div>
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

function pageHome(){
  const act=activeCodes();
  const moment=[...act].sort((a,b)=>(b.verified-a.verified)||(b.up-a.up)).slice(0,6);
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

  <section class="u18 block">
    <div class="wrap">
      <div class="head"><div><h2>Catégories</h2></div><a class="link" href="#/categories">Toutes les catégories</a></div>
      <div class="cats">${CATS.slice(0,7).map(catCard).join('')}<a class="cat more" href="#/categories"><span class="ic">${ic('grid')}</span><strong>Voir tout</strong><small>${CATS.length} catégories</small></a></div>
    </div>
  </section>

  <section class="block alt">
    <div class="wrap">
      <div class="head"><div><h2>Bons plans du moment</h2><p class="muted">Les codes les plus utilisés par la communauté.</p></div><a class="link" href="#/codes">Tous les codes</a></div>
      <div class="coupons">${moment.map(c=>coupon(c)).join('')}</div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="head"><div><h2>Nouveautés</h2><p class="muted">Les derniers bons plans ajoutés.</p></div><a class="link" href="#/codes?f=new">Voir les nouveautés</a></div>
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
      <div class="head"><div><h2>Explorez Mayotte commune par commune</h2><p class="muted">Touchez une commune pour voir ses entreprises.</p></div><a class="link" href="#/carte">Ouvrir la carte</a></div>
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

let dirState={q:'',cat:''};
function pageDirectory(params){
  dirState={q:params.get('q')||'',cat:params.get('cat')||''};
  return `<div class="wrap">
    <div class="pagehead"><h1>Entreprises</h1><p class="muted">Toutes les entreprises référencées sur Bonszahé.</p></div>
    <div class="toolbar">
      <label class="field">${ic('search')}<span class="sr">Rechercher une entreprise</span><input id="dirQ" type="search" placeholder="Nom, activité…" value="${esc(dirState.q)}"></label>
      <div class="chips" role="group" aria-label="Filtrer par catégorie">
        <button class="chip" data-dircat="" aria-pressed="${!dirState.cat}">Toutes</button>
        ${CATS.map(c=>`<button class="chip" data-dircat="${c.slug}" aria-pressed="${dirState.cat===c.slug}">${c.name}</button>`).join('')}
      </div>
    </div>
    <p class="results" id="dirCount"></p>
    <div class="bizgrid" id="dirList"></div>
    <div class="u7"></div>
  </div>`;
}
function drawDirectory(){
  const q=norm(dirState.q);
  const list=B.filter(b=>(!dirState.cat||b.cat===dirState.cat)&&(!q||norm(b.name+' '+b.desc+' '+catBy(b.cat).name).includes(q)));
  document.getElementById('dirCount').textContent=`${list.length} entreprise${list.length>1?'s':''}`;
  const cat=catBy(dirState.cat);
  document.getElementById('dirList').innerHTML=list.length?list.map(bizCard).join(''):
    `<div class="u5">${empty(cat&&!q?`Aucune entreprise ${cat.name.toLowerCase()} pour l’instant`:'Aucune entreprise trouvée',cat&&!q?'Cette catégorie attend ses premières entreprises. Vous en connaissez une ?':'Essayez un autre mot ou une autre catégorie.',`<button class="btn btn-primary" data-claim="">Ajouter une entreprise</button>`)}</div>`;
}

function pageBusiness(slug){
  const b=bizBy(slug);
  if(!b) return `<div class="u20 wrap">${empty('Cette entreprise n’existe pas','Le lien est peut-être ancien. Retrouvez-la dans l’annuaire.','<a class="btn btn-primary" href="#/entreprises">Voir les entreprises</a>')}</div>`;
  const codes=codesOf(slug).sort((a,b)=>b.verified-a.verified||b.up-a.up);
  const verified=codes.some(c=>c.verified);
  const fav=S.favs.includes(slug);
  const bizEvents=upcomingEvents().filter(e=>e.biz===slug);
  const similar=B.filter(x=>x.cat===b.cat&&x.slug!==slug).sort((a,z)=>codesOf(z.slug).length-codesOf(a.slug).length).slice(0,3);
  const cat=catBy(b.cat);
  return `<div class="wrap">
    <a class="back" href="#/entreprises">${ic('left')}Retour aux entreprises</a>
    <div class="bcover cv cv-${b.cat}" role="img" aria-label="Couverture ${esc(b.name)}"></div>
    <div class="bhead">
      ${logo(b,'lg')}
      <div>
        <h1>${esc(b.name)} ${verified?`<span title="Entreprise avec codes vérifiés">${ic('badge','class="verif"')}</span>`:''}</h1>
        <p class="tagline muted">${esc(cat.name)} &nbsp;|&nbsp; ${esc(b.desc)}</p>
      </div>
      <div class="bactions">
        ${b.web?`<a class="btn btn-primary" href="${esc(b.web)}" target="_blank" rel="noopener" data-track="site" data-trackbiz="${slug}">${ic('ext')}Visiter le site</a>`:''}
        ${b.phone?`<a class="btn btn-ghost" href="tel:${esc(b.phone.replace(/\s/g,''))}" data-track="appel" data-trackbiz="${slug}">${ic('call')}Appeler</a>`:''}
        ${b.email?`<a class="btn btn-ghost" href="mailto:${esc(b.email)}">${ic('mail')}Contacter</a>`:''}
        <button class="iconbtn" data-fav="${slug}" aria-pressed="${fav}" aria-label="${fav?'Retirer des':'Ajouter aux'} favoris">${ic('heart')}</button>
      </div>
    </div>
    <div class="contact">
      ${b.addr?`<div>${ic('pin')}<span>${esc(b.addr)}${b.commune?`<br><a class="link" href="#/carte?c=${b.commune}">Voir ${esc(comBy(b.commune).name)} sur la carte</a>`:''}</span></div>`:`<div>${ic('pin')}<span class="muted">Adresse à compléter</span></div>`}
      ${b.web?`<a href="${esc(b.web)}" target="_blank" rel="noopener" data-track="site" data-trackbiz="${slug}">${ic('globe')}<span>${esc(b.web.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,''))}</span></a>`:''}
      ${b.phone?`<a href="tel:${esc(b.phone.replace(/\s/g,''))}" data-track="appel" data-trackbiz="${slug}">${ic('call')}<span>${esc(b.phone)}</span></a>`:`<div>${ic('call')}<span class="muted">Téléphone à compléter</span></div>`}
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
        <div class="card">
          <h3>Vous êtes le propriétaire ?</h3>
          <p class="muted">Revendiquez la fiche pour publier vos offres officielles et suivre vos statistiques : vues de la page, codes copiés, clics.</p>
          <button class="u23 btn btn-ghost" data-claim="${slug}">Revendiquer cette entreprise</button>
        </div>
      </aside>
    </div>
    <div class="u7"></div>
  </div>
  <button class="btn btn-sun fab" data-propose="${slug}">${ic('plus')}Proposer un code</button>`;
}

let codeState={q:'',cat:'',f:'all'};
function pageCodes(params){
  codeState={q:params.get('q')||'',cat:params.get('cat')||'',f:params.get('f')||'all'};
  const segs=[['all','Tous'],['new','Nouveautés'],['soon','Expire bientôt'],['verified','Codes vérifiés']];
  return `<div class="wrap">
    <div class="pagehead"><h1>Codes promo</h1><p class="muted">Tous les bons plans valables aujourd'hui à Mayotte. Les codes expirés disparaissent automatiquement.</p></div>
    <div class="toolbar">
      <label class="field">${ic('search')}<span class="sr">Rechercher un code</span><input id="codeQ" type="search" placeholder="Entreprise, réduction, livraison…" value="${esc(codeState.q)}"></label>
      <div class="seg" role="group" aria-label="Trier les codes">${segs.map(([k,l])=>`<button data-seg="${k}" aria-pressed="${codeState.f===k}">${l}</button>`).join('')}</div>
      <div class="chips" role="group" aria-label="Filtrer par catégorie">
        <button class="chip" data-codecat="" aria-pressed="${!codeState.cat}">Toutes</button>
        ${CATS.filter(c=>activeCodes().some(x=>bizBy(x.biz).cat===c.slug)).map(c=>`<button class="chip" data-codecat="${c.slug}" aria-pressed="${codeState.cat===c.slug}">${c.name}</button>`).join('')}
      </div>
    </div>
    <p class="results" id="codeCount"></p>
    <div class="coupons" id="codeList"></div>
    <div class="u7"></div>
  </div>`;
}
function drawCodes(){
  const q=norm(codeState.q);
  let list=activeCodes().filter(c=>{
    const b=bizBy(c.biz);
    if(codeState.cat&&b.cat!==codeState.cat) return false;
    if(q&&!norm(b.name+' '+c.deal+' '+c.detail+' '+c.code).includes(q)) return false;
    if(codeState.f==='new'&&!isNew(c)) return false;
    if(codeState.f==='soon'&&daysLeft(c)>7) return false;
    if(codeState.f==='verified'&&!c.verified) return false;
    return true;
  });
  if(codeState.f==='soon') list.sort((a,b)=>a.exp-b.exp);
  else if(codeState.f==='new') list.sort((a,b)=>b.added-a.added);
  else list.sort((a,b)=>b.up-a.up);
  document.getElementById('codeCount').textContent=`${list.length} code${list.length>1?'s':''} actif${list.length>1?'s':''}`;
  document.getElementById('codeList').innerHTML=list.length?list.map(c=>coupon(c)).join(''):
    `<div class="u5">${empty('Aucun code ne correspond','Changez de filtre ou proposez un code que vous connaissez.',`<button class="btn btn-sun" data-propose="">${ic('plus')}Proposer un code promo</button>`)}</div>`;
}

function pageCategories(){
  return `<div class="wrap">
    <div class="pagehead"><h1>Catégories</h1><p class="muted">Parcourez les entreprises de Mayotte par activité.</p></div>
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
    <div class="pagehead"><h1>Recherche</h1></div>
    <form class="u15 field" data-search>${ic('search')}<label class="sr" for="sq">Rechercher</label><input id="sq" name="q" type="search" placeholder="Une entreprise ou un bon plan" value="${esc(q)}" autocomplete="off"></form>
    ${!q?`<div class="cats">${CATS.map(catCard).join('')}</div>`:`
      ${codes.length?`<div class="head"><h2>Bons plans</h2></div><div class="coupons">${codes.map(c=>coupon(c)).join('')}</div><div class="u6"></div>`:''}
      ${biz.length?`<div class="head"><h2>Entreprises</h2></div><div class="bizgrid">${biz.map(bizCard).join('')}</div>`:''}
      ${!codes.length&&!biz.length?empty(`Aucun résultat pour « ${esc(q)} »`,'Vérifiez l’orthographe ou parcourez les catégories.','<a class="btn btn-primary" href="#/categories">Voir les catégories</a>'):''}
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
// Barème : 10 points par code publié, 2 points par « fonctionne » reçu sur ses codes, 1 point par avis donné.
const LEVELS=[[0,'Nouveau membre'],[25,'Débrouillard'],[100,'Chasseur de bons plans'],[250,'Expert des bons plans'],[500,'Légende de l’île']];
function statsFor(memberId){
  const codes=allCodes().filter(c=>c.by===memberId&&c.status==='valide');
  const upReceived=codes.reduce((s,c)=>s+c.up,0);
  const votesGiven=new Set(VOTES.filter(v=>v.owner===memberId).map(v=>v.code)).size;
  const cats=new Set(codes.map(c=>bizBy(c.biz).cat)).size;
  const best=codes.reduce((m,c)=>Math.max(m,c.up),0);
  return {codes,upReceived,votesGiven,cats,best,points:codes.length*10+upReceived*2+votesGiven};
}
const BADGES=[
  {name:'Premier bon plan',desc:'Partager 1 code',icon:'plus',val:s=>[s.codes.length,1]},
  {name:'Chasseur',desc:'Partager 5 codes',icon:'search',val:s=>[s.codes.length,5]},
  {name:'Expert des codes',desc:'Partager 15 codes',icon:'badge',val:s=>[s.codes.length,15]},
  {name:'Code en or',desc:'Un de vos codes confirmé 10 fois',icon:'up',val:s=>[s.best,10]},
  {name:'Voix de la communauté',desc:'Donner 10 avis',icon:'check',val:s=>[s.votesGiven,10]},
  {name:'Pilier Bonszahé',desc:'Donner 50 avis',icon:'heart',val:s=>[s.votesGiven,50]},
  {name:'Explorateur',desc:'Des codes dans 3 catégories',icon:'grid',val:s=>[s.cats,3]}
];
function levelOf(p){ let i=0; LEVELS.forEach((l,j)=>{ if(p>=l[0]) i=j; }); return {name:LEVELS[i][1],next:LEVELS[i+1]}; }
function leaderboard(){
  const ids=[...new Set(baseCodes.filter(c=>c.by).map(c=>c.by))];
  return ids.map(id=>{ const s=statsFor(id); const name=(baseCodes.find(c=>c.by===id&&c.byName)||{}).byName||'Membre'; return Object.assign({id,name},s); })
    .filter(x=>x.points>0).sort((a,b)=>b.points-a.points);
}
function badgeGrid(s){
  return `<div class="badges">${BADGES.map(bd=>{ const [v,goal]=bd.val(s); const ok=v>=goal; return `<div class="bdg${ok?' on':''}">
    <span class="bic">${ic(bd.icon)}</span><strong>${bd.name}</strong><small>${ok?'Obtenu':`${bd.desc} (${Math.min(v,goal)}/${goal})`}</small></div>`; }).join('')}</div>`;
}

/* ---------- Connexion / inscription ---------- */
let authMode='login', afterLogin=null;
function authBox(msg=''){
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
      <p class="note">Connexion sécurisée par Wix : votre mot de passe n’est jamais stocké par Bonszahé.</p>
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
      <p class="note">${lv.next?`Encore ${lv.next[0]-s.points} points pour devenir « ${esc(lv.next[1])} ».`:'Niveau maximum atteint, bravo !'} 10 pts par code publié, 2 pts par « fonctionne » reçu, 1 pt par avis donné.</p>
    </div>
    <div class="stats four">
      <div class="stat"><b>${s.codes.length}</b><span>Codes partagés</span></div>
      <div class="stat"><b>${s.upReceived}</b><span>« Fonctionne » reçus</span></div>
      <div class="stat"><b>${s.votesGiven}</b><span>Avis donnés</span></div>
      <div class="stat"><b>${S.favs.length}</b><span>Favoris</span></div>
    </div>
    <div class="stack">
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
        <button class="u10 btn btn-ghost" data-claim="">Revendiquer mon entreprise</button>
      </div>`}
      <button class="u9 btn btn-ghost" id="logout">Se déconnecter</button>
    </div>
    <div class="u8"></div>
  </div>`;
}

/* ---------- Espace pro : statistiques ---------- */
async function drawPro(){
  const el=document.getElementById('proDash'); if(!el||!me()) return;
  const since=new Date(TODAY); since.setDate(since.getDate()-30);
  const owned=B.filter(b=>b.owners.includes(me().id));
  const blocks=await Promise.all(owned.map(async b=>{
    let rows=[]; try{ rows=await queryAll('Statistiques',{entreprise:b.id}); }catch(e){ console.warn(e); }
    const n=(t,recent)=>rows.filter(r=>r.type===t&&(!recent||(dateFrom(r._createdDate)||TODAY)>=since)).length;
    const tile=(t,label)=>`<div class="stat"><b>${n(t,true)}</b><span>${label}<br><small>${n(t)} au total</small></span></div>`;
    const codes=allCodes().filter(c=>c.biz===b.slug).map(c=>({c,copies:rows.filter(r=>r.type==='copie'&&r.code===c.id).length})).sort((a,z)=>z.copies-a.copies);
    return `<div class="card pro">
      <div class="lvhead">${logo(b,'md')}<div><strong>${esc(b.name)}</strong><small class="muted">30 derniers jours</small></div><a class="btn btn-ghost btn-sm" href="#/entreprises/${b.slug}">Voir ma fiche</a></div>
      <div class="stats four">${tile('vue','Vues de la fiche')}${tile('copie','Codes copiés')}${tile('site','Clics vers le site')}${tile('appel','Appels')}</div>
      <h3>Vos codes</h3>
      ${codes.length?`<div class="list">${codes.map(({c,copies})=>`<div class="li"><div class="grow"><strong>${esc(c.code)}</strong> ${esc(c.deal)}<small>${copies} copie${copies>1?'s':''} · ${c.up} « fonctionne » · ${c.down} « ne fonctionne plus »${daysLeft(c)<0?' · expiré':flagged(c)?' · masqué (signalé)':''}</small></div></div>`).join('')}</div>`:'<p class="muted">Aucun code pour le moment.</p>'}
      <div class="bandbtns"><button class="btn btn-sun btn-sm" data-propose="${b.slug}">${ic('plus')}Publier une offre officielle</button><button class="btn btn-ghost btn-sm" data-toast="Envoyez votre événement à Bonszahé via « Revendiquer / contact » : il sera publié dans l’onglet Événements.">Annoncer un événement</button></div>
    </div>`;
  }));
  el.innerHTML=blocks.join('');
}

/* ---------- Classement ---------- */
function pageRanking(){
  const lb=leaderboard().slice(0,50);
  const mine=me()&&lb.findIndex(x=>x.id===me().id);
  return `<div class="wrap">
    <div class="pagehead"><h1>Classement de la communauté</h1><p class="muted">Merci à celles et ceux qui partagent leurs bons plans ! 10 pts par code publié, 2 pts par « fonctionne » reçu, 1 pt par avis donné.</p></div>
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
    <div class="pagehead"><h1>Événements à Mayotte</h1><p class="muted">Marchés, ventes privées, fêtes, concerts et animations des entreprises de l’île.</p></div>
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
function pageMap(params){
  mapSel=params.get('c')||'';
  return `<div class="wrap">
    <div class="pagehead"><h1>Carte des communes</h1><p class="muted">Explorez les entreprises de Mayotte commune par commune, de Mtsamboro à Kani-Kéli.</p></div>
    <div class="u13">${mapWidget()}</div>
    <div class="u8"></div>
  </div>`;
}

/* ---------- Routeur ---------- */
const app=document.getElementById('app');
function route(){
  const h=location.hash.slice(1)||'/';
  const [path,qs]=h.split('?');
  const parts=path.split('/').filter(Boolean);
  const params=new URLSearchParams(qs||'');
  const p=parts[0]||'home';
  let html='', nav=p, title='Bonszahé — Acheter malin à Mayotte';
  if(p==='home') html=pageHome();
  else if(p==='entreprises' && parts[1]){ html=pageBusiness(parts[1]); nav='entreprises'; const b=bizBy(parts[1]); if(b) title=`${b.name} : codes promo et bons plans | Bonszahé`; track('vue',parts[1]); }
  else if(p==='evenements'){ html=pageEvents(params); title='Événements à Mayotte | Bonszahé'; }
  else if(p==='classement'){ html=pageRanking(); nav='profil'; title='Classement de la communauté | Bonszahé'; }
  else if(p==='entreprises') html=pageDirectory(params);
  else if(p==='codes') html=pageCodes(params);
  else if(p==='categories') html=pageCategories();
  else if(p==='carte') html=pageMap(params);
  else if(p==='recherche') html=pageSearch(params);
  else if(p==='favoris') html=pageFavs();
  else if(p==='profil') html=pageProfile();
  else { html=pageHome(); nav='home'; }
  app.innerHTML=html;
  document.title=title;
  if(p==='entreprises'&&!parts[1]) drawDirectory();
  if(p==='codes') drawCodes();
  document.querySelectorAll('[data-nav]').forEach(a=>{ a.getAttribute('data-nav')===nav?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'); });
  document.getElementById('loginBtn').textContent=me()?me().name:'Connexion';
  if(p==='profil') drawPro();
  window.scrollTo(0,0);
  if(p==='recherche'&&!params.get('q')) document.getElementById('sq')?.focus();
}
function refresh(){ const y=window.scrollY; route(); window.scrollTo(0,y); }
window.addEventListener('hashchange',route);

/* ---------- Interactions ---------- */
const toastEl=document.getElementById('toast'); let tt;
function toast(msg){ toastEl.textContent=msg; toastEl.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>toastEl.classList.remove('show'),2600); }

async function copy(text){
  try{ await navigator.clipboard.writeText(text); return true; }
  catch(e){ const t=document.createElement('textarea'); t.value=text; t.style.position='fixed'; t.style.opacity='0'; document.body.appendChild(t); t.select(); let ok=false; try{ok=document.execCommand('copy')}catch(_){} t.remove(); return ok; }
}

const dlg=document.getElementById('dlg'), dlgBody=document.getElementById('dlgBody');
function openDialog(html){ dlgBody.innerHTML=html; dlg.showModal(); dlgBody.querySelector('input,select,textarea')?.focus(); }

function proposeDialog(slug){
  if(!requireLogin('Connectez-vous pour partager un code : il sera publié avec votre pseudo et vous rapportera des points.',()=>proposeDialog(slug))) return;
  const b=slug&&bizBy(slug);
  const t=new Date(); const min=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
  openDialog(`<header><div><h2 id="dlgTitle">Proposer un code promo</h2><p class="u14 note">Publié tout de suite sous le pseudo <strong>${esc(me().name)}</strong>. La communauté confirme ensuite s’il fonctionne.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  <form class="form" id="proposeForm">
    ${b?`<div class="for">${logo(b)}<div><small class="muted">Pour l’entreprise</small><br><strong>${esc(b.name)}</strong></div><input type="hidden" name="biz" value="${b.slug}"></div>`:
      `<label>Entreprise<select name="biz" required><option value="">Choisir une entreprise</option>${[...B].sort((a,z)=>a.name.localeCompare(z.name,'fr')).map(x=>`<option value="${x.slug}">${esc(x.name)}</option>`).join('')}</select></label>`}
    <div class="two">
      <label>Code<input class="u22" name="code" required placeholder="Ex. MAYOTTE20" maxlength="30"></label>
      <label>Avantage<input name="deal" required placeholder="-15 %, livraison offerte…" maxlength="60"></label>
    </div>
    <label>Détail <span class="opt">(facultatif)</span><input name="detail" placeholder="Ex. 20 % sur tout le site" maxlength="120"></label>
    <label>Conditions <span class="opt">(facultatif)</span><textarea name="cond" placeholder="Montant minimum, produits exclus…"></textarea></label>
    <div class="two">
      <label>Date d’expiration<input name="exp" type="date" required min="${min}"></label>
      <label>Lien de l’offre <span class="opt">(facultatif)</span><input name="link" type="url" placeholder="https://"></label>
    </div>
    <button class="btn btn-primary" type="submit">Publier le code</button>
  </form>`);
}
function claimDialog(slug){
  const b=slug&&bizBy(slug);
  openDialog(`<header><div><h2 id="dlgTitle">${b?'Revendiquer '+esc(b.name):'Ajouter ou revendiquer mon entreprise'}</h2><p class="u14 note">Nous vérifions que vous représentez bien l’entreprise, puis nous vous donnons accès à la fiche.</p></div><button class="iconbtn" data-close aria-label="Fermer">${ic('x')}</button></header>
  <form class="form" id="claimForm">
    <label>Nom de l’entreprise<input name="name" required value="${b?esc(b.name):''}"></label>
    <div class="two"><label>Votre nom<input name="contact" required autocomplete="name"></label><label>Téléphone<input name="phone" type="tel" autocomplete="tel"></label></div>
    <label>E-mail professionnel<input name="email" type="email" required autocomplete="email" value="${me()?esc(me().email):''}"></label>
    ${me()?'':`<p class="note">Astuce : connectez-vous d’abord à votre compte Bonszahé, votre espace pro y sera rattaché.</p>`}
    <label>Message <span class="opt">(facultatif)</span><textarea name="msg" placeholder="Votre activité, votre site, vos promotions…"></textarea></label>
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
async function reloadAll(){ try{ await loadData(); await loadMine(); }catch(e){ console.warn(e); } refresh(); }

document.addEventListener('click',async e=>{
  const t=e.target.closest('button,a'); if(!t) return;
  if(t.dataset.track){ track(t.dataset.track,t.dataset.trackbiz); return; }
  if(t.dataset.copy!==undefined){
    const ok=await copy(t.dataset.copy);
    const old=t.innerHTML; t.innerHTML=ic('check')+'Copié'; setTimeout(()=>t.innerHTML=old,1800);
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
  else if(t.dataset.fav){
    e.preventDefault();
    const s=t.dataset.fav; const i=S.favs.indexOf(s);
    if(i>=0){S.favs.splice(i,1); toast('Retiré des favoris');} else {S.favs.push(s); toast('Ajouté aux favoris');}
    save(); refresh();
  }
  else if(t.dataset.commune){ selectCommune(t.dataset.commune); }
  else if(t.dataset.propose!==undefined){ proposeDialog(t.dataset.propose); }
  else if(t.dataset.claim!==undefined){ claimDialog(t.dataset.claim); }
  else if(t.hasAttribute('data-close')){ dlg.close(); }
  else if(t.dataset.toast){ e.preventDefault(); toast(t.dataset.toast); }
  else if(t.dataset.authmode){ authMode=t.dataset.authmode; pendingState=null; redrawAuth(); }
  else if(t.hasAttribute('data-forgot')){
    const email=(t.closest('form').querySelector('[name=email]')||{}).value||'';
    if(!email){ toast('Saisissez d’abord votre e-mail'); return; }
    try{
      await call('POST','/_api/iam/recovery/v1/send-email',{email,redirect:{url:location.origin+'/',clientId:WIX_CLIENT_ID}},await getVisitorToken());
      toast('E-mail de réinitialisation envoyé');
    }catch(err){ console.warn(err); toast('Envoi impossible. Vérifiez l’adresse e-mail.'); }
  }
  else if(t.dataset.dircat!==undefined){ dirState.cat=t.dataset.dircat; document.querySelectorAll('[data-dircat]').forEach(b=>b.setAttribute('aria-pressed',b===t)); drawDirectory(); }
  else if(t.dataset.codecat!==undefined){ codeState.cat=t.dataset.codecat; document.querySelectorAll('[data-codecat]').forEach(b=>b.setAttribute('aria-pressed',b===t)); drawCodes(); }
  else if(t.dataset.seg){ codeState.f=t.dataset.seg; document.querySelectorAll('[data-seg]').forEach(b=>b.setAttribute('aria-pressed',b===t)); drawCodes(); }
  else if(t.id==='logout'){ logout(); route(); toast('Vous êtes déconnecté'); }
});
dlg.addEventListener('click',e=>{ if(e.target===dlg) dlg.close(); });

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
      const visitor=await getVisitorToken();
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
      const res=await call('POST','/_api/iam/verification/v1/auth/verify',{code:d.code.trim(),stateToken:pendingState},await getVisitorToken());
      pendingState=null;
      await afterAuth(res,btn,'Valider');
    }catch(ex){ console.warn(ex); const el=document.getElementById('authErr'); if(el) el.textContent=authError(ex); btn.disabled=false; btn.textContent='Valider'; }
  }
  else if(f.id==='proposeForm'){
    e.preventDefault(); if(!me()) return;
    const d=Object.fromEntries(new FormData(f));
    const p={biz:d.biz,code:d.code.trim().toUpperCase(),deal:d.deal.trim(),detail:(d.detail||'').trim(),cond:d.cond.trim(),exp:d.exp,link:d.link.trim()};
    if(activeCodes().some(c=>c.biz===p.biz&&c.code.toUpperCase()===p.code)){ toast('Ce code est déjà en ligne pour cette entreprise. Merci !'); return; }
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Publication…';
    sendToWix('PropositionsCodes',{code:p.code,entreprise:bizId[p.biz]||p.biz,avantage:p.deal,detail:p.detail,conditions:p.cond,dateExpiration:p.exp,lienOffre:p.link,statut:'En attente',contributeurId:me().id,contributeurNom:me().name})
      .then(()=>{ dlg.close(); toast('Merci ! Votre code est publié dans quelques secondes.'); setTimeout(reloadAll,5000); })
      .catch(err=>{ console.warn(err); btn.disabled=false; btn.textContent='Publier le code'; toast(err.status===401||err.status===403?'Session expirée : reconnectez-vous.':'Envoi impossible pour le moment. Réessayez dans un instant.'); });
  }
  else if(f.id==='claimForm'){
    e.preventDefault(); const d=Object.fromEntries(new FormData(f));
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; btn.textContent='Envoi…';
    const account=me()?`\n\nCompte Bonszahé : ${me().name} (${me().email})\nID membre : ${me().id}`:'';
    sendToWix('DemandesEntreprises',{nomEntreprise:d.name,contact:d.contact,telephone:d.phone,email:d.email,message:(d.msg||'')+account,statut:'Nouvelle'})
      .then(()=>{ dlg.close(); toast('Demande envoyée. Nous revenons vers vous rapidement.'); })
      .catch(()=>{ btn.disabled=false; btn.textContent='Envoyer la demande'; toast('Envoi impossible pour le moment. Réessayez dans un instant.'); });
  }
});

app.innerHTML='<div class="wrap"><div class="pagehead"><p class="muted">Chargement des bons plans…</p></div></div>';
loadData().then(loadMine).catch(err=>{ console.warn('CMS Wix indisponible, affichage de la copie locale',err); B.forEach(b=>{ bizId[b.slug]=b.slug; b.owners=b.owners||[]; }); }).finally(route);
