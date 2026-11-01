/* Bonszahé — référencement : titres, descriptions, données structurées et contenu lisible par les robots.
   Fichier partagé : chargé par le site (window.BZSEO) et par le pré-rendu Cloudflare (functions/). */
(function(g){
const SITE='https://bonszahe.com';
const NAME='Bonszahé';
const DEFAULT_IMAGE='https://bonszahe.com/og-bonszahe.jpg';
const LOGO='https://bonszahe.com/logo/logo-horizontal-couleur.png';
const CATS=[
  ['shopping','Shopping','mode, cadeaux et shopping'],['beaute','Beauté','beauté, cosmétiques et bien-être'],
  ['maison','Maison','maison, déco, bricolage et matériaux'],['high-tech','High-Tech','téléphonie, informatique et high-tech'],
  ['alimentation','Alimentation','alimentation, épicerie et produits locaux'],['enfants','Enfants','puériculture, jouets et enfants'],
  ['restaurants','Restaurants','restaurants, snacks et livraison de repas'],['auto','Automobile','automobile, location et deux-roues'],
  ['loisirs','Loisirs','loisirs, sorties et activités'],['services','Services','services aux particuliers et aux professionnels']
].map(([slug,name,phrase])=>({slug,name,phrase}));
const COMMUNES=[['mtsamboro','Mtsamboro'],['acoua','Acoua'],['bandraboua','Bandraboua'],['mtsangamouji','M’Tsangamouji'],['koungou','Koungou'],
  ['tsingoni','Tsingoni'],['mamoudzou','Mamoudzou'],['dzaoudzi','Dzaoudzi'],['pamandzi','Pamandzi'],['chiconi','Chiconi'],['ouangani','Ouangani'],
  ['dembeni','Dembéni'],['sada','Sada'],['chirongui','Chirongui'],['bandrele','Bandrélé'],['boueni','Bouéni'],['kani-keli','Kani-Kéli']].map(([slug,name])=>({slug,name}));
const PRIVATE=['profil','favoris','alertes','recherche','invite','controle'];

const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const key=s=>norm(s).replace(/[^a-z0-9]/g,'');
const slugify=s=>norm(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clip=(s,n)=>{ s=String(s||'').replace(/\s+/g,' ').trim(); return s.length<=n?s:s.slice(0,n-1).replace(/[\s,;:.–-]+\S*$/,'')+'…'; };
const catBy=s=>CATS.find(c=>c.slug===s);
const comBy=s=>COMMUNES.find(c=>c.slug===s);
const frDate=d=>d.toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const plural=(n,one,many)=>`${n} ${n>1?many:one}`;
const urlOf=path=>SITE+path;
const expOf=c=>c.noExp?null:c.exp;

// Lecture des données brutes du CMS Wix (utilisée par le pré-rendu ; le site a ses propres fonctions équivalentes).
function catFrom(v){ const k=key(v); if(!k) return 'shopping'; const hit=CATS.find(c=>key(c.name)===k||key(c.slug)===k)||CATS.find(c=>k.startsWith(key(c.name).slice(0,5))); return hit?hit.slug:(k.startsWith('auto')?'auto':'services'); }
function communeFrom(v){ const k=key(v); if(!k) return ''; const hit=COMMUNES.find(c=>key(c.name)===k||key(c.slug)===k); return hit?hit.slug:''; }
function imgUrl(v){ if(!v) return ''; const s=typeof v==='object'?(v.url||v.src||''):String(v); const m=s.match(/^wix:image:\/\/v1\/([^/#]+)/); if(m) return 'https://static.wixstatic.com/media/'+m[1]; return /^https?:\/\//.test(s)?s:''; }
function dateFrom(v){ if(!v) return null; const raw=typeof v==='object'?(v.$date||v.date||''):String(v); const m=raw.match(/^(\d{4})-(\d{2})-(\d{2})/); if(m) return new Date(+m[1],+m[2]-1,+m[3]); const d=new Date(raw); return isNaN(d)?null:d; }
function parsePos(v){ const m=String(v||'').trim().match(/^(-?\d+(?:\.\d+)?)\s*[,;\s]\s*(-?\d+(?:\.\d+)?)$/); if(!m) return null; const p={lat:+m[1],lng:+m[2]}; return p.lat>-13.1&&p.lat<-12.5&&p.lng>44.9&&p.lng<45.4?p:null; }
function fromCMS(ents,codes,tfs,today,arts,holo){
  const idToSlug={}, used=new Set();
  const biz=ents.filter(e=>e.publiee!==false&&e.nom).map(e=>{
    let slug=slugify(e.slug||e.nom)||String(e._id); while(used.has(slug)) slug+='-2'; used.add(slug); idToSlug[e._id]=slug;
    return {slug,id:e._id,name:e.nom,cat:catFrom(e.categorie),commune:communeFrom(e.commune),desc:e.description||'',addr:e.adresse||'',phone:e.telephone||'',
      web:e.siteWeb||'',email:e.email||'',hours:e.horaires||'',pos:parsePos(e.position),sale:e.typeVente||'',logo:imgUrl(e.logo),updated:dateFrom(e._updatedDate)};
  }).sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  const ref=v=>typeof v==='object'&&v?v._id:v;
  const st=v=>{ const k=key(v); return k.includes('attente')?'attente':k.includes('refus')?'refuse':k.includes('retir')?'retire':'valide'; };
  const list=codes.filter(c=>(c.code||c.typeOffre==='magasin')&&idToSlug[ref(c.entreprise)]&&st(c.statut)==='valide').map(c=>{ const exp=dateFrom(c.dateExpiration);
    return {id:c._id,biz:idToSlug[ref(c.entreprise)],deal:c.avantage||'Bon plan',detail:c.detail||'',code:String(c.code||'').trim(),store:c.typeOffre==='magasin',cond:c.conditions||'',exp,noExp:!exp,updated:dateFrom(c._updatedDate)}; })
    .filter(c=>c.noExp||c.exp>=today);
  const tf=(tfs||[]).filter(x=>x.slug&&x.titre).map(x=>({slug:x.slug,title:x.titre,desc:x.description||''}));
  return {biz,codes:list,tf,arts:mergeArticles(articlesFrom(arts,today),holoFrom(holo,today))};
}

/* ---------- Blog (collection Wix « Articles ») ----------
   Champs : titre, slug (facultatif), resume, contenu (texte enrichi, ou texte simple / Markdown), image (ou imageLien),
   datePublication, categorie, auteur, entreprises (noms ou slugs séparés par des virgules), aLaUne, publie.
   Un article s'affiche seulement si « publie » est coché et si sa date de publication est arrivée. */
const ART_TAGS=new Set(['p','br','h2','h3','h4','strong','b','em','i','u','s','a','ul','ol','li','blockquote','img','figure','figcaption','hr','table','thead','tbody','tr','th','td']);
const ART_VOID=new Set(['br','img','hr']);
const attrOf=(attrs,name)=>{ const m=String(attrs||'').match(new RegExp('\\b'+name+'\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\'|([^\\s>]+))','i')); return m?(m[1]??m[2]??m[3]??'').replace(/&amp;/g,'&').trim():''; };
const linkAttrs=h=>/^(https?:|mailto:|tel:|\/|#)/i.test(h)?` href="${esc(h)}"`+(/^https?:/i.test(h)&&!/^https?:\/\/(www\.)?bonszahe\.com/i.test(h)?' target="_blank" rel="noopener"':''):'';
// Garde seulement la mise en forme utile (titres, gras, listes, liens, images) : aucun script, style ni cadre.
function cleanHtml(html){
  return String(html||'').replace(/<(script|style|iframe|object|embed|noscript|template|svg|form)\b[\s\S]*?<\/\1\s*>/gi,'').replace(/<!--[\s\S]*?-->/g,'')
    .replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)>/g,(m,close,tag,attrs)=>{
      tag=tag.toLowerCase(); if(tag==='h1') tag='h2'; if(tag==='h5'||tag==='h6') tag='h4';
      if(!ART_TAGS.has(tag)) return '';
      if(close) return ART_VOID.has(tag)?'':`</${tag}>`;
      if(tag==='a') return `<a${linkAttrs(attrOf(attrs,'href'))}>`;
      if(tag==='img'){ const src=imgUrl(attrOf(attrs,'src')); return src?`<img src="${esc(src)}" alt="${esc(attrOf(attrs,'alt'))}" loading="lazy">`:''; }
      return `<${tag}>`;
    });
}
// Texte simple ou Markdown (titres #, listes -, citations >, **gras**, *italique*, [lien](https://…), ![image](https://…)).
function mdInline(s){
  return esc(s).replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g,(m,a,u)=>`<img src="${u}" alt="${a}" loading="lazy">`)
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|mailto:|tel:)[^\s)]+)\)/g,(m,t,u)=>`<a${linkAttrs(u.replace(/&amp;/g,'&'))}>${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/__([^_]+)__/g,'<strong>$1</strong>')
    .replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g,'$1<em>$2</em>');
}
function mdToHtml(src){
  const out=[]; let para=[], list=null, quote=[];
  const flush=()=>{ if(para.length){ out.push(`<p>${para.map(mdInline).join('<br>')}</p>`); para=[]; } if(list){ out.push(`<${list.t}>${list.items.map(x=>`<li>${mdInline(x)}</li>`).join('')}</${list.t}>`); list=null; } if(quote.length){ out.push(`<blockquote><p>${quote.map(mdInline).join('<br>')}</p></blockquote>`); quote=[]; } };
  String(src||'').replace(/\r/g,'').split('\n').forEach(raw=>{
    const l=raw.trim(); let m;
    if(!l){ flush(); return; }
    if((m=l.match(/^(#{1,6})\s+(.*)$/))){ flush(); const h=m[1].length<=2?'h2':m[1].length===3?'h3':'h4'; out.push(`<${h}>${mdInline(m[2].replace(/\s#+$/,''))}</${h}>`); return; }
    if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){ flush(); out.push('<hr>'); return; }
    if((m=l.match(/^[-*•]\s+(.*)$/))||(m=l.match(/^\d+[.)]\s+(.*)$/))){ const t=/^\d/.test(l)?'ol':'ul'; if(para.length||quote.length||(list&&list.t!==t)) flush(); if(!list) list={t,items:[]}; list.items.push(m[1]); return; }
    if((m=l.match(/^>\s?(.*)$/))){ if(para.length||list) flush(); quote.push(m[1]); return; }
    if(list||quote.length) flush();
    para.push(l);
  });
  flush();
  return out.join('\n');
}
// Champ « Contenu enrichi » (format Ricos de Wix) : conversion simple en HTML.
function ricosToHtml(doc){
  const run=n=>{ const kids=(n.nodes||[]).map(run).join('');
    switch(n.type){
      case 'TEXT':{ let t=esc(n.textData&&n.textData.text||''); (n.textData&&n.textData.decorations||[]).forEach(d=>{ if(d.type==='BOLD') t=`<strong>${t}</strong>`; else if(d.type==='ITALIC') t=`<em>${t}</em>`; else if(d.type==='UNDERLINE') t=`<u>${t}</u>`; else if(d.type==='LINK'&&d.linkData&&d.linkData.link) t=`<a href="${esc(d.linkData.link.url||'')}">${t}</a>`; }); return t; }
      case 'PARAGRAPH': return `<p>${kids}</p>`;
      case 'HEADING':{ const lv=Math.min(4,Math.max(2,+(n.headingData&&n.headingData.level)||2)); return `<h${lv}>${kids}</h${lv}>`; }
      case 'BULLETED_LIST': return `<ul>${kids}</ul>`;
      case 'ORDERED_LIST': return `<ol>${kids}</ol>`;
      case 'LIST_ITEM': return `<li>${kids.replace(/^<p>([\s\S]*)<\/p>$/,'$1')}</li>`;
      case 'BLOCKQUOTE': return `<blockquote>${kids}</blockquote>`;
      case 'DIVIDER': return '<hr>';
      case 'IMAGE':{ const s=n.imageData&&n.imageData.image&&n.imageData.image.src||{}; const u=s.url||(s.id?'https://static.wixstatic.com/media/'+s.id:''); return u?`<img src="${esc(u)}" alt="${esc(n.imageData.altText||'')}">`:''; }
      default: return kids;
    } };
  return run(doc||{});
}
function articleHtml(v){
  if(!v) return '';
  if(typeof v==='object') return cleanHtml(ricosToHtml(v));
  const s=String(v);
  return cleanHtml(/<\/?(p|h[1-6]|ul|ol|li|br|strong|em|b|i|a|div|span|blockquote|img)\b/i.test(s)?s:mdToHtml(s));
}
const plainText=html=>String(html||'').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim();
function articlesFrom(rows,today){
  const used=new Set();
  return (rows||[]).filter(a=>a.publie===true&&a.titre).map(a=>{
    let slug=slugify(a.slug||a.titre)||String(a._id); while(used.has(slug)) slug+='-2'; used.add(slug);
    const html=articleHtml(a.contenu), text=plainText(html);
    return {id:a._id,slug,title:String(a.titre).trim(),summary:String(a.resume||'').trim(),html,text,words:text?text.split(' ').length:0,
      img:imgUrl(a.image)||imgUrl(a.imageLien),date:dateFrom(a.datePublication)||dateFrom(a._createdDate),updated:dateFrom(a._updatedDate),
      cat:String(a.categorie||'').trim(),author:String(a.auteur||'').trim(),featured:a.aLaUne===true,theme:themeOf(a.categorie,a.titre,a.resume),source:'wix',
      biz:String(a.entreprises||'').split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean)};
  }).filter(a=>a.date&&a.date<=today).sort((a,b)=>b.date-a.date);
}
// Thèmes du blog. Un article Wix prend le thème choisi dans « categorie » ; un article TRyholo (sans thème) est classé
// d'après les mots de son titre et de son résumé. Sans mot reconnu : « Vie pratique ».
const BLOG_THEMES=[
  ['courses','Courses & prix','🛒',['course','prix','vie chere','carburant','essence','gazole','gaz ','supermarche','panier','riz','huile','budget','econom','moins cher','pouvoir d achat']],
  ['fetes','Fêtes & saisons','🎁',['noel','fete','ramadan','aid','mariage','manzaraka','nouvel an','rentree','saison','cadeau']],
  ['bons-plans','Bons plans','🔥',['code promo','promo','bon plan','bons plans','solde','reduction','remise','offre','catalogue']],
  ['commerces','Commerces de l’île','🏪',['commerce','commercant','boutique','magasin','artisan','portrait','entreprise','producteur','marche local']],
  ['diaspora','Diaspora','✈️',['diaspora','colis','envoi','metropole','hexagone','retour','voyage','billet','avion','famille a mayotte']],
  ['pratique','Vie pratique','💡',[]]
].map(([slug,name,emoji,kw])=>({slug,name,emoji,kw}));
const themeBy=s=>BLOG_THEMES.find(t=>t.slug===s);
function themeOf(cat,title,summary){
  const k=key(cat); if(k){ const t=BLOG_THEMES.find(x=>key(x.name)===k||key(x.slug)===k||key(x.name).startsWith(k)); if(t) return t.slug; }
  const txt=' '+norm(title+' '+summary).replace(/[^a-z0-9]+/g,' ')+' ';
  // Les mots du titre comptent double ; à égalité, le thème le plus précis l'emporte sur « Courses & prix ».
  const ttl=' '+norm(title).replace(/[^a-z0-9]+/g,' ')+' ';
  let best='pratique',score=0;
  ['fetes','diaspora','commerces','bons-plans','courses'].map(themeBy).forEach(t=>{ const n=t.kw.reduce((s,w)=>s+(ttl.includes(w)?2:txt.includes(w)?1:0),0); if(n>score){ score=n; best=t.slug; } });
  return best;
}
// Articles TRyholo : la liste que leur script d'intégration contient (champs slug, title, excerpt, isoDate, imageUrl, content).
const HOLO_KEY='2ff253da-2366-4c76-819b-c2c919371dcd';
const HOLO_SRC='https://prod-api-holo-ai.fly.dev/public/seo/embed/'+HOLO_KEY+'.js';
function holoParse(js){
  const m=String(js||'').match(/var HOLO_ARTICLES\s*=\s*(\[[\s\S]*?\]);\s*\n/);
  if(!m) return null;
  try{ const list=JSON.parse(m[1]); return Array.isArray(list)?list:null; }catch(e){ return null; }
}
function holoFrom(rows,today){
  return (rows||[]).filter(a=>a&&a.title&&a.slug).map(a=>{
    const html=articleHtml(a.content), text=plainText(html), d=dateFrom(a.isoDate||a.date);
    return {id:'holo-'+a.slug,slug:slugify(a.slug)||slugify(a.title),title:String(a.title).trim(),summary:String(a.excerpt||'').trim(),html,text,words:text?text.split(' ').length:0,
      img:/^https?:\/\//.test(a.imageUrl||'')?a.imageUrl:'',date:d,updated:d,cat:'',author:'',featured:false,biz:[],theme:themeOf('',a.title,a.excerpt),source:'holo'};
  }).filter(a=>a.date&&a.date<=today);
}
// Les deux sources réunies, du plus récent au plus ancien, avec des adresses toutes différentes.
function mergeArticles(wix,holo){
  const used=new Set(), out=[];
  [...(wix||[]),...(holo||[])].sort((a,b)=>b.date-a.date).forEach(a=>{ let s=a.slug; while(used.has(s)) s+='-2'; used.add(s); out.push(s===a.slug?a:Object.assign({},a,{slug:s})); });
  return out;
}
const artDesc=a=>clip(a.summary||a.text||a.title,158);
const readMin=a=>Math.max(1,Math.round(a.words/200));

// Données structurées schema.org
// FAQ d'un article : section « Questions fréquentes » (h2), puis des paires question (h3) / réponse (premier paragraphe qui suit).
function faqOf(html){
  const m=String(html||'').match(/<h2>\s*Questions fr[ée]quentes\s*<\/h2>([\s\S]*?)(?=<h2>|$)/i); if(!m) return [];
  const out=[], re=/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g; let x;
  while((x=re.exec(m[1]))){ const q=plainText(x[1]), r=plainText(x[2]); if(q&&r) out.push([q,r]); }
  return out;
}
const faqLd=items=>({'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(([q,r])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:r}}))});
const crumbs=items=>({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map(([name,path],i)=>({'@type':'ListItem',position:i+1,name,item:urlOf(path)}))});
function bizLd(b,codes){
  const com=comBy(b.commune); const cp=(String(b.addr).match(/\b976\d{2}\b/)||[])[0];
  const o={'@context':'https://schema.org','@type':b.sale==='en-ligne'?'Organization':'LocalBusiness','@id':urlOf('/entreprises/'+b.slug)+'#entreprise',name:b.name,url:urlOf('/entreprises/'+b.slug)};
  if(b.desc) o.description=clip(b.desc,500);
  if(b.logo){ o.image=b.logo; o.logo=b.logo; }
  if(b.phone) o.telephone=b.phone;
  if(b.email) o.email=b.email;
  if(b.web) o.sameAs=[b.web];
  if(b.addr||com) o.address=Object.assign({'@type':'PostalAddress',addressRegion:'Mayotte',addressCountry:'YT'},b.addr?{streetAddress:b.addr}:{},com?{addressLocality:com.name}:{},cp?{postalCode:cp}:{});
  if(b.pos) o.geo={'@type':'GeoCoordinates',latitude:b.pos.lat,longitude:b.pos.lng};
  if(b.hours) o.openingHours=b.hours;
  o.areaServed={'@type':'AdministrativeArea',name:'Mayotte'};
  if(codes.length) o.makesOffer=codes.slice(0,20).map(c=>Object.assign({'@type':'Offer',name:c.store?`${c.deal} (offre en magasin)`:`${c.deal} avec le code ${c.code}`,url:urlOf('/bon-plan/'+encodeURIComponent(c.id))},c.detail?{description:clip(c.detail,200)}:{},expOf(c)?{validThrough:iso(expOf(c))}:{}));
  return o;
}
const WEBSITE_LD={'@context':'https://schema.org','@graph':[
  {'@type':'WebSite','@id':SITE+'/#site',url:SITE+'/',name:NAME,inLanguage:'fr-FR',description:'Codes promo et bons plans des commerces de Mayotte',
   potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:SITE+'/recherche?q={search_term_string}'},'query-input':'required name=search_term_string'}},
  {'@type':'Organization','@id':SITE+'/#org',name:NAME,url:SITE+'/',logo:LOGO,slogan:'Achetez malin, achetez mahorais',areaServed:'Mayotte',email:'contact@bonszahe.com',sameAs:['https://www.facebook.com/share/1A9v8WGbjW/','https://www.instagram.com/bonszahe','https://www.tiktok.com/@bonszahe3']}]};

// Contenu HTML lisible sans JavaScript (robots, aperçus) — remplacé par l'application au chargement.
const bizLink=b=>`<li><a href="/entreprises/${esc(b.slug)}">${esc(b.name)}</a>${b.desc?` — ${esc(clip(b.desc,140))}`:''}</li>`;
const codeLink=(c,data)=>{ const b=data.biz.find(x=>x.slug===c.biz)||{name:''}; return `<li><a href="/bon-plan/${encodeURIComponent(c.id)}">${esc(c.deal)} chez ${esc(b.name)}</a>${c.store?' (offre en magasin)':c.code?` — code <strong>${esc(c.code)}</strong>`:''}</li>`; };
const block=(h1,intro,inner)=>`<div class="wrap u16"><h1>${esc(h1)}</h1>${intro?`<p>${intro}</p>`:''}${inner||''}</div>`;
const catLinks=data=>`<h2>Par catégorie</h2><ul>${CATS.filter(c=>data.biz.some(b=>b.cat===c.slug)).map(c=>`<li><a href="/entreprises?cat=${c.slug}">${esc(c.name)} à Mayotte</a></li>`).join('')}</ul>`;
const comLinks=data=>`<h2>Par commune</h2><ul>${COMMUNES.filter(c=>data.biz.some(b=>b.commune===c.slug)).map(c=>`<li><a href="/entreprises?c=${c.slug}">Bons plans à ${esc(c.name)}</a></li>`).join('')}</ul>`;

// Méta de chaque page. path : « /entreprises/x » ; params : URLSearchParams ; data : {biz, codes (actifs), tf}.
function meta(path,params,data,opts){
  opts=opts||{}; const today=opts.today||new Date();
  const parts=path.split('/').filter(Boolean); const p=parts[0]||'home'; const id=parts[1]?decodeURIComponent(parts[1]):'';
  const biz=data.biz||[], codes=data.codes||[];
  let title, desc, canonical=path==='/'?'/':path.replace(/\/+$/,''), robots='index,follow', image=DEFAULT_IMAGE, type='website', ld=[], body='', status=200;
  const nB=biz.length, nC=codes.length;
  if(p==='home'){
    title='Codes promo et bons plans à Mayotte | Bonszahé';
    desc=`Tous les codes promo, réductions et bons plans des commerces de Mayotte, partagés et vérifiés par la communauté : ${nB?nB+' entreprises, ':''}mode, maison, high-tech, beauté, restaurants… Achetez malin !`;
    ld.push(WEBSITE_LD);
    body=block('Codes promo et bons plans à Mayotte','Bonszahé rassemble les codes promo, réductions et offres en magasin des entreprises de Mayotte, partagés et vérifiés par la communauté.',
      `${nC?`<h2>Les bons plans du moment</h2><ul>${codes.slice(0,15).map(c=>codeLink(c,data)).join('')}</ul>`:''}${catLinks(data)}${comLinks(data)}<h2>Entreprises</h2><ul>${biz.map(bizLink).join('')}</ul>`);
  }
  else if(p==='entreprises'&&id){
    const b=biz.find(x=>x.slug===id);
    if(!b){ status=404; robots='noindex,follow'; title='Entreprise introuvable | Bonszahé'; desc='Cette entreprise n’est pas ou plus référencée sur Bonszahé.'; body=block('Entreprise introuvable','',`<p><a href="/entreprises">Voir toutes les entreprises de Mayotte</a></p>`); }
    else{
      const com=comBy(b.commune), cat=catBy(b.cat)||CATS[0], mine=codes.filter(c=>c.biz===b.slug), where=com?`à ${com.name}`:'à Mayotte';
      title=`${b.name} : code promo et bons plans ${where} | Bonszahé`;
      desc=mine.length?clip(`${plural(mine.length,'code promo','codes promo')} ${b.name} en ce moment : ${mine.slice(0,2).map(c=>c.deal+(c.store?' en magasin':c.code?' avec '+c.code:'')).join(', ')}. ${b.desc}`,158)
        :clip(b.desc?`${b.name} ${where} : ${b.desc} Adresse, contact et bons plans sur Bonszahé.`:`${b.name}, ${cat.phrase} ${where} : adresse, contact et bons plans sur Bonszahé.`,158);
      if(b.logo) image=b.logo;
      ld.push(bizLd(b,mine),crumbs([['Accueil','/'],['Entreprises','/entreprises'],[cat.name,'/entreprises?cat='+cat.slug],[b.name,'/entreprises/'+b.slug]]));
      body=block(b.name,`${esc(cat.name)}${com?' · '+esc(com.name):''} · Mayotte`,
        `${b.logo?`<p><img src="${esc(b.logo)}" alt="Logo ${esc(b.name)}" width="120" height="120"></p>`:''}${b.desc?`<p>${esc(b.desc)}</p>`:''}
        <h2>Codes promo et bons plans ${esc(b.name)}</h2>${mine.length?`<ul>${mine.map(c=>codeLink(c,data)).join('')}</ul>`:'<p>Aucun code en cours pour le moment.</p>'}
        <h2>Infos pratiques</h2><ul>${b.addr?`<li>Adresse : ${esc(b.addr)}</li>`:''}${b.phone?`<li>Téléphone : ${esc(b.phone)}</li>`:''}${b.hours?`<li>Horaires : ${esc(b.hours)}</li>`:''}${b.web?`<li>Site : ${esc(b.web)}</li>`:''}</ul>
        <p><a href="/entreprises?cat=${cat.slug}">Autres entreprises ${esc(cat.name)} à Mayotte</a>${com?` · <a href="/entreprises?c=${com.slug}">Bons plans à ${esc(com.name)}</a>`:''}</p>`);
    }
  }
  else if(p==='entreprises'){
    const cat=catBy(params.get('cat')||''), com=comBy(params.get('c')||'');
    if(cat){ const list=biz.filter(b=>b.cat===cat.slug); canonical='/entreprises?cat='+cat.slug;
      title=`${cat.name} à Mayotte : codes promo et bons plans | Bonszahé`;
      desc=`${plural(list.length,'entreprise','entreprises')} ${cat.phrase} à Mayotte et leurs codes promo, réductions et offres du moment, vérifiés par la communauté Bonszahé.`;
      ld.push(crumbs([['Accueil','/'],['Entreprises','/entreprises'],[cat.name,canonical]]));
      body=block(`${cat.name} à Mayotte`,`Les entreprises ${esc(cat.phrase)} de Mayotte et leurs bons plans.`,`<ul>${list.map(bizLink).join('')}</ul>`); }
    else if(com){ const list=biz.filter(b=>b.commune===com.slug); canonical='/entreprises?c='+com.slug;
      title=`Bons plans à ${com.name} (Mayotte) : commerces et codes promo | Bonszahé`;
      desc=`Les commerces de ${com.name} et leurs codes promo, offres en magasin et bons plans : ${plural(list.length,'entreprise référencée','entreprises référencées')} sur Bonszahé.`;
      ld.push(crumbs([['Accueil','/'],['Entreprises','/entreprises'],[com.name,canonical]]));
      body=block(`Bons plans à ${com.name}`,`Les entreprises de ${esc(com.name)} référencées sur Bonszahé.`,`<ul>${list.map(bizLink).join('')}</ul>`); }
    else{ canonical='/entreprises';
      title='Commerces et entreprises de Mayotte | Bonszahé';
      desc=`${nB?nB+' entreprises':'Les entreprises'} de Mayotte avec leurs codes promo, offres en magasin, adresses et contacts. Trouvez les bons plans près de chez vous.`;
      body=block('Entreprises de Mayotte','Toutes les entreprises référencées sur Bonszahé.',`${catLinks(data)}${comLinks(data)}<h2>Toutes les entreprises</h2><ul>${biz.map(bizLink).join('')}</ul>`); }
  }
  else if(p==='bon-plan'&&id){
    const c=codes.find(x=>x.id===id); const b=c&&biz.find(x=>x.slug===c.biz);
    if(!c||!b){ status=404; robots='noindex,follow'; title='Bon plan expiré ou introuvable | Bonszahé'; desc='Ce bon plan a expiré ou a été retiré. Découvrez les codes promo en cours à Mayotte.'; body=block('Ce bon plan n’existe plus','',`<p><a href="/codes">Voir les codes promo en cours</a></p>`); }
    else{
      title=`${c.deal} chez ${b.name}${c.code&&!c.store?' : code '+c.code:''} | Bonszahé`;
      desc=clip(`${c.store?'Offre en magasin':'Code promo'} ${b.name} : ${c.deal}${c.detail?' – '+c.detail:''}. ${expOf(c)?'Valable jusqu’au '+frDate(expOf(c)):'Sans date limite'}. ${c.store?'Montrez l’offre en caisse.':'Copiez le code sur Bonszahé.'}`,158);
      if(b.logo) image=b.logo;
      ld.push(crumbs([['Accueil','/'],['Codes promo','/codes'],[b.name,'/entreprises/'+b.slug],[c.deal,'/bon-plan/'+encodeURIComponent(c.id)]]));
      body=block(`${c.deal} chez ${b.name}`,c.store?'Offre à montrer en caisse.':`Code promo : <strong>${esc(c.code)}</strong>`,
        `${c.detail?`<p>${esc(c.detail)}</p>`:''}${c.cond?`<p>Conditions : ${esc(c.cond)}</p>`:''}<p>${expOf(c)?'Valable jusqu’au '+frDate(expOf(c)):'Sans date limite'}.</p><p><a href="/entreprises/${esc(b.slug)}">Tous les bons plans ${esc(b.name)}</a></p>`);
    }
  }
  else if(p==='codes'){ canonical='/codes'; title='Tous les codes promo de Mayotte | Bonszahé';
    desc=`${nC?nC+' codes promo et offres':'Les codes promo et offres'} en cours chez les commerces de Mayotte, mis à jour chaque jour. Les offres expirées disparaissent automatiquement.`;
    body=block('Codes promo et offres à Mayotte','Tous les bons plans valables aujourd’hui à Mayotte.',`<ul>${codes.map(c=>codeLink(c,data)).join('')}</ul>`); }
  else if(p==='tendances'){ canonical='/tendances'; title='Les bons plans qui chauffent à Mayotte | Bonszahé';
    desc='Les codes promo et bons plans les plus appréciés du moment à Mayotte, classés par la communauté Bonszahé : votez « Moro » pour les meilleurs !';
    body=block('Tendances : les bons plans qui chauffent','Les offres préférées de la communauté.',`<ul>${codes.slice(0,30).map(c=>codeLink(c,data)).join('')}</ul>`); }
  else if(p==='categories'){ title='Catégories de commerces à Mayotte | Bonszahé';
    desc='Parcourez les commerces de Mayotte par activité : shopping, beauté, maison, high-tech, alimentation, enfants, restaurants, automobile, loisirs et services.';
    body=block('Catégories',`Les entreprises de Mayotte par activité.`,catLinks(data)); }
  else if(p==='carte'){ canonical='/carte'; title='Carte des magasins de Mayotte et itinéraires | Bonszahé';
    desc='La carte des boutiques de Mayotte référencées sur Bonszahé : leurs offres en magasin et l’itinéraire Google Maps ou Waze pour y aller.';
    body=block('Carte des magasins','Les boutiques de l’île, leurs offres en magasin et l’itinéraire pour y aller.',comLinks(data)); }
  else if(p==='evenements'){ canonical='/evenements'; title='Événements, marchés et ventes privées à Mayotte | Bonszahé';
    desc='L’agenda des marchés, ventes privées, fêtes, concerts et animations des entreprises de Mayotte.'; body=block('Événements à Mayotte',esc(desc)); }
  else if(p==='blog'&&id){ const a=(data.arts||[]).find(x=>x.slug===id);
    if(!a){ status=404; robots='noindex,follow'; title='Article introuvable | Bonszahé'; desc='Cet article n’existe pas ou n’est plus en ligne.'; body=block('Article introuvable','',`<p><a href="/blog">Voir tous les articles du blog</a></p>`); }
    else{ const th=themeBy(a.theme); canonical='/blog/'+a.slug; title=`${a.title} | Bonszahé`; desc=artDesc(a); type='article'; if(a.img) image=a.img;
      ld.push(Object.assign({'@context':'https://schema.org','@type':'BlogPosting',headline:clip(a.title,110),description:desc,url:urlOf(canonical),mainEntityOfPage:urlOf(canonical),inLanguage:'fr-FR',
        datePublished:iso(a.date),dateModified:iso(a.updated&&a.updated>a.date?a.updated:a.date),wordCount:a.words,articleSection:th.name,
        author:a.author?{'@type':'Person',name:a.author}:{'@type':'Organization',name:NAME,url:SITE+'/'},publisher:{'@type':'Organization',name:NAME,logo:{'@type':'ImageObject',url:LOGO}}},
        a.img?{image:[a.img]}:{}),
        crumbs([['Accueil','/'],['Blog','/blog'],[th.name,'/blog?theme='+th.slug],[a.title,canonical]]));
      const faq=faqOf(a.html); if(faq.length) ld.push(faqLd(faq));
      body=block(a.title,a.summary?esc(a.summary):'',`<p>Publié le ${frDate(a.date)}${a.author?' par '+esc(a.author):''} · <a href="/blog?theme=${th.slug}">${esc(th.name)}</a></p>${a.img?`<p><img src="${esc(a.img)}" alt=""></p>`:''}${a.html}<p><a href="/blog">Tous les articles du blog</a></p>`); } }
  else if(p==='blog'){ const arts=data.arts||[], th=themeBy(params.get('theme')||''), list=th?arts.filter(a=>a.theme===th.slug):arts;
    if(th){ canonical='/blog?theme='+th.slug; title=`${th.name} : articles et conseils pour Mayotte | Bonszahé`; desc=clip(`Les articles du blog Bonszahé sur le thème « ${th.name} » : guides et conseils pour acheter malin à Mayotte.`,158);
      ld.push(crumbs([['Accueil','/'],['Blog','/blog'],[th.name,canonical]])); }
    else{ canonical='/blog'; title='Le blog Bonszahé : guides et conseils pour acheter malin à Mayotte';
      desc='Guides, conseils, portraits d’entreprises et actualités pour acheter malin à Mayotte et faire vivre les commerces de l’île.'; }
    if(params.get('q')) robots='noindex,follow';
    body=block(th?th.name:'Le blog Bonszahé',esc(desc),(list.length?`<ul>${list.map(a=>`<li><a href="/blog/${esc(a.slug)}">${esc(a.title)}</a> — ${esc(artDesc(a))}</li>`).join('')}</ul>`:'')
      +(th?'':`<h2>Thèmes</h2><ul>${BLOG_THEMES.filter(t=>arts.some(a=>a.theme===t.slug)).map(t=>`<li><a href="/blog?theme=${t.slug}">${esc(t.name)}</a></li>`).join('')}</ul>`)
      +`<template id="holo-embed"><div id="holo-blog"></div><script src="${HOLO_SRC}" defer></script></template>`); }
  else if(p==='prix'){ canonical='/prix'; title='Prix à Mayotte : comparez les prix des produits du quotidien | Bonszahé';
    desc='Riz, huile, sucre, lait, mabawa, gaz… Les prix relevés par les habitants dans les magasins de Mayotte, pour faire ses courses au meilleur prix.'; body=block('Prix à Mayotte',esc(desc)); }
  else if(p==='semaine'){ canonical='/semaine'; title='Les bons plans de la semaine à Mayotte | Bonszahé';
    desc='Le récap des meilleurs codes promo et bons plans de Mayotte cette semaine : les plus chauds, les nouveautés, les dernières chances et l’agenda.'; body=block('Les bons plans de la semaine',esc(desc)); }
  else if(p==='catalogues'){ canonical='/catalogues'; title='Catalogues & arrivages des magasins de Mayotte | Bonszahé';
    desc='Les catalogues promotionnels et les arrivages des commerces de Mayotte au même endroit : alimentation, maison, high-tech, beauté, enfants…'; body=block('Catalogues & arrivages à Mayotte',esc(desc)); }
  else if(p==='demandes'&&id){ title='Demande de bon plan à Mayotte | Bonszahé'; desc='Un membre cherche un code promo ou un bon plan à Mayotte : aidez-le en répondant sur Bonszahé.'; body=block('Demande de bon plan',esc(desc)); }
  else if(p==='demandes'){ canonical='/demandes'; title='Demandes de bons plans à Mayotte | Bonszahé'; desc='Vous cherchez un code promo à Mayotte ? Demandez à la communauté Bonszahé, et aidez les autres en répondant.'; body=block('Demandes',esc(desc)); }
  else if(p==='temps-forts'&&id){ const t=(data.tf||[]).find(x=>x.slug===id);
    if(!t){ status=404; robots='noindex,follow'; title='Page introuvable | Bonszahé'; desc='Ce temps fort n’existe pas.'; body=block('Page introuvable','',`<p><a href="/temps-forts">Voir les temps forts</a></p>`); }
    else{ title=`${t.title} à Mayotte : bons plans et promos | Bonszahé`; desc=clip(t.desc||`Les bons plans ${t.title} à Mayotte sur Bonszahé.`,158);
      ld.push(crumbs([['Accueil','/'],['Temps forts','/temps-forts'],[t.title,'/temps-forts/'+t.slug]])); body=block(t.title,esc(t.desc)); } }
  else if(p==='temps-forts'){ title='Temps forts à Mayotte : Noël, ramadan, rentrée… | Bonszahé';
    desc='Les grandes périodes de l’année à Mayotte et leurs bons plans : Noël, nouvel an, ramadan, rentrée scolaire, saison des mariages.';
    body=block('Temps forts à Mayotte',esc(desc),`<ul>${(data.tf||[]).map(t=>`<li><a href="/temps-forts/${esc(t.slug)}">${esc(t.title)}</a></li>`).join('')}</ul>`); }
  else if(p==='classement'){ title='Classement des chasseurs de bons plans | Bonszahé'; desc='Les membres qui partagent le plus de bons plans à Mayotte ce mois-ci sur Bonszahé.'; body=block('Classement de la communauté',esc(desc)); }
  else if(p==='recompenses'){ title='Récompenses du mois | Bonszahé'; desc='Chaque mois, les membres les plus actifs de Bonszahé gagnent des lots offerts par les entreprises de Mayotte.'; body=block('Récompenses du mois',esc(desc)); }
  else if(p==='a-propos'){ title='À propos de Bonszahé'; desc='Bonszahé aide les habitants de Mayotte à acheter malin et les entreprises de l’île à faire connaître leurs offres.'; body=block('À propos',esc(desc)); }
  else if(p==='contact'){ title='Contact | Bonszahé'; desc='Contactez Bonszahé : questions, partenariats, référencement de votre entreprise à Mayotte.'; body=block('Contact',esc(desc)); }
  else if(p==='mentions-legales'){ title='Mentions légales | Bonszahé'; desc='Mentions légales du site Bonszahé.'; body=block('Mentions légales',''); }
  else if(p==='confidentialite'){ title='Politique de confidentialité | Bonszahé'; desc='Comment Bonszahé protège vos données personnelles.'; body=block('Politique de confidentialité',''); }
  else if(PRIVATE.includes(p)){ robots='noindex,follow'; title={profil:'Mon profil',favoris:'Mes favoris',alertes:'Mes alertes',recherche:'Recherche',invite:'Invitation',controle:'Contrôle'}[p]+' | Bonszahé'; desc='Codes promo et bons plans à Mayotte sur Bonszahé.'; }
  else{ status=404; robots='noindex,follow'; title='Page introuvable | Bonszahé'; desc='Cette page n’existe pas sur Bonszahé.'; body=block('Page introuvable','',`<p><a href="/">Retour à l’accueil</a></p>`); }
  if(opts.withoutBody) body='';
  return {title,desc,canonical:urlOf(canonical),robots,image,type,ld,body,status};
}

// Plan du site (sitemap.xml)
function sitemap(data,today){
  const u=(path,last,pri,freq)=>`<url><loc>${esc(urlOf(path))}</loc>${last?`<lastmod>${iso(last)}</lastmod>`:''}<changefreq>${freq}</changefreq><priority>${pri}</priority></url>`;
  const out=[u('/',today,'1.0','daily'),u('/codes',today,'0.9','daily'),u('/entreprises',today,'0.9','daily'),u('/tendances',today,'0.8','daily'),
    u('/categories',null,'0.6','weekly'),u('/carte',null,'0.6','weekly'),u('/evenements',null,'0.6','weekly'),u('/catalogues',today,'0.7','daily'),u('/semaine',today,'0.7','daily'),u('/prix',today,'0.8','daily'),u('/demandes',null,'0.5','daily'),
    u('/temps-forts',null,'0.6','monthly'),u('/a-propos',null,'0.3','yearly'),u('/contact',null,'0.3','yearly')];
  CATS.filter(c=>data.biz.some(b=>b.cat===c.slug)).forEach(c=>out.push(u('/entreprises?cat='+c.slug,null,'0.7','weekly')));
  COMMUNES.filter(c=>data.biz.some(b=>b.commune===c.slug)).forEach(c=>out.push(u('/entreprises?c='+c.slug,null,'0.7','weekly')));
  data.biz.forEach(b=>out.push(u('/entreprises/'+b.slug,b.updated,'0.8','weekly')));
  data.codes.forEach(c=>out.push(u('/bon-plan/'+encodeURIComponent(c.id),c.updated,'0.6','weekly')));
  (data.tf||[]).forEach(t=>out.push(u('/temps-forts/'+t.slug,null,'0.6','monthly')));
  const arts=data.arts||[];
  out.push(u('/blog',arts.length?arts[0].date:null,'0.7','weekly'));
  BLOG_THEMES.filter(t=>arts.some(a=>a.theme===t.slug)).forEach(t=>out.push(u('/blog?theme='+t.slug,null,'0.5','weekly')));
  arts.forEach(a=>out.push(u('/blog/'+a.slug,a.updated&&a.updated>a.date?a.updated:a.date,'0.7','monthly')));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${out.join('\n')}\n</urlset>\n`;
}

g.BZSEO={SITE,DEFAULT_IMAGE,CATS,COMMUNES,meta,sitemap,fromCMS,esc,articlesFrom,articleHtml,faqOf,readMin,artDesc,BLOG_THEMES,themeBy,themeOf,holoParse,holoFrom,mergeArticles,HOLO_SRC};
})(typeof globalThis!=='undefined'?globalThis:window);
