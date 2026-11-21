(function(){
'use strict';
var catalogues=[{key:'321566_bedb6e7ed0ab4b0bb738b389bbc1e86c.pdf',name:'Carrefour Mayotte — Bons plans à petits prix',ends:'2026-11-29',pages:["https://static.wixstatic.com/media/321566_2396e291f5dd4f7ab7807d45161d2a48~mv2.webp","https://static.wixstatic.com/media/321566_48a828d3a1594ea48822958475c8d248~mv2.webp","https://static.wixstatic.com/media/321566_9549cdc5a6664d749de3bbac9ebc0005~mv2.webp","https://static.wixstatic.com/media/321566_cb0ecf07ecb54809a12df9787abb25aa~mv2.webp","https://static.wixstatic.com/media/321566_b9ae4ba048424149aa52135d1a8cdba7~mv2.webp","https://static.wixstatic.com/media/321566_0e9912f8852f480190a4df0dc44d09e5~mv2.webp","https://static.wixstatic.com/media/321566_d957d2e37b104717a4590f09cfcb184c~mv2.webp","https://static.wixstatic.com/media/321566_947f96ba093144ba8cfe90558adaf781~mv2.webp","https://static.wixstatic.com/media/321566_c146a7dd3e0847cfbf9278a228832b09~mv2.webp","https://static.wixstatic.com/media/321566_d7fd23dcb602487293089347d78623a3~mv2.webp","https://static.wixstatic.com/media/321566_b0ca260766ec4ef3838b24ad3b2c2087~mv2.webp"]},{key:'321566_b5ba857b0c814d709a05f536ea663411.pdf',name:'Diam Loisirs Mayotte — Catalogue Noël novembre–décembre 2026',ends:'2027-01-02',pdf:'https://32761e4f-414e-47d0-9089-2d5676be0455.usrfiles.com/ugd/321566_b5ba857b0c814d709a05f536ea663411.pdf',count:84}];
var root=null,page=0,zoom=false,focusBefore=null,touchX=null;
function current(){return root&&catalogues.find(function(c){return root.dataset.key===c.key;});}
function expired(c){var day=new Intl.DateTimeFormat('en-CA',{timeZone:'Indian/Mayotte',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());return day>c.ends;}
function button(text,cls,action){var b=document.createElement('button');b.type='button';b.className='bzcr-btn '+(cls||'');b.textContent=text;b.dataset.crAction=action;return b;}
function render(){
 var c=current();if(!c)return;
 var img=root.querySelector('.bzcr-main-image');img.src=c.pages[page];img.alt='Catalogue Carrefour Mayotte, page '+(page+1)+' sur '+c.pages.length;img.loading='eager';img.decoding='async';
 root.querySelector('.bzcr-count').textContent='Page '+(page+1)+' / '+c.pages.length;
 root.querySelector('[data-cr-action=prev]').disabled=page===0;
 root.querySelector('[data-cr-action=next]').disabled=page===c.pages.length-1;
 img.classList.toggle('bzcr-zoomed',zoom);
 var bar=root.querySelector('.bzcr-thumbs');bar.textContent='';
 c.pages.forEach(function(u,i){var b=document.createElement('button');b.type='button';b.className='bzcr-thumb'+(i===page?' selected':'');b.dataset.crPage=String(i);b.setAttribute('aria-label','Aller à la page '+(i+1));b.setAttribute('aria-current',i===page?'page':'false');var t=document.createElement('img');t.src=u;t.alt='';t.loading=i===page?'eager':'lazy';b.appendChild(t);var n=document.createElement('span');n.textContent=String(i+1);b.appendChild(n);bar.appendChild(b);});
 var selected=bar.querySelector('.selected');if(selected)selected.scrollIntoView({block:'nearest',inline:'center'});
 if(c.pages[page+1]){var preload=new Image();preload.src=c.pages[page+1];}
}
function open(c){
 if(expired(c)){return;}
 close();
 focusBefore=document.activeElement;
 root=document.createElement('section');root.id='bz-catalogue-reader';root.className='bzcr';root.dataset.key=c.key;
 root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label',c.name);
 var shell=document.createElement('div');shell.className='bzcr-shell';
 var header=document.createElement('header');header.className='bzcr-head';
 var heading=document.createElement('div');heading.className='bzcr-heading';
 var eyebrow=document.createElement('span');eyebrow.className='bzcr-eyebrow';eyebrow.textContent='📖 Catalogue interactif · Bonszahé';
 var title=document.createElement('h2');title.textContent=c.name;heading.append(eyebrow,title);
 var closeBtn=button('✕ Fermer','bzcr-close','close');header.append(heading,closeBtn);
 var content=document.createElement('div');content.className='bzcr-body';
 if(c.pdf){
  content.classList.add('bzcr-pdf-body');
  var note=document.createElement('p');note.className='bzcr-pdf-note';note.textContent='84 pages · Le document peut prendre un moment à s’afficher sur mobile.';
  var iframe=document.createElement('iframe');iframe.className='bzcr-pdf-frame';iframe.title='Feuilleter le catalogue '+c.name;iframe.loading='eager';iframe.src=c.pdf+'#view=FitH&toolbar=1';
  var fallback=document.createElement('a');fallback.className='bzcr-btn bzcr-pdf-link';fallback.href=c.pdf;fallback.target='_blank';fallback.rel='noopener';fallback.textContent='Ouvrir le PDF si le lecteur ne fonctionne pas';
  content.append(note,iframe,fallback);shell.append(header,content);root.appendChild(shell);document.body.appendChild(root);document.body.classList.add('bzcr-open');closeBtn.focus();return;
 }
 var stage=document.createElement('div');stage.className='bzcr-stage';
 var image=document.createElement('img');image.className='bzcr-main-image';image.draggable=false;
 image.addEventListener('dblclick',function(){zoom=!zoom;render();});
 stage.appendChild(image);
 var controls=document.createElement('div');controls.className='bzcr-controls';
 var prev=button('‹ Précédent','','prev');var count=document.createElement('span');count.className='bzcr-count';var next=button('Suivant ›','bzcr-primary','next');
 controls.append(prev,count,next);
 var note=document.createElement('p');note.className='bzcr-note';note.textContent='Glissez pour changer de page. Touchez deux fois une page pour zoomer.';
 var toolbar=document.createElement('div');toolbar.className='bzcr-tools';toolbar.append(button('🔍 Zoom','', 'zoom'),button('↺ Recentrer','','reset'));
 var thumbs=document.createElement('div');thumbs.className='bzcr-thumbs';thumbs.setAttribute('aria-label','Pages du catalogue');
 content.append(stage,controls,toolbar,note,thumbs);shell.append(header,content);root.appendChild(shell);document.body.appendChild(root);
 document.body.classList.add('bzcr-open');page=0;zoom=false;render();closeBtn.focus();
}
function close(){if(!root)return;root.remove();root=null;document.body.classList.remove('bzcr-open');if(focusBefore&&document.contains(focusBefore))focusBefore.focus();}
function change(n){var c=current();if(!c||!c.pages)return;page=Math.max(0,Math.min(c.pages.length-1,n));zoom=false;render();}
document.addEventListener('click',function(e){
 var link=e.target.closest('a[href]');if(!link||link.closest('#bz-catalogue-reader'))return;
 var c=catalogues.find(function(o){return link.href.indexOf(o.key)!==-1;});
 if(!c)return;
 e.preventDefault();e.stopPropagation();if(typeof e.stopImmediatePropagation==='function')e.stopImmediatePropagation();open(c);
},true);
document.addEventListener('click',function(e){if(!root)return;
 var pageBtn=e.target.closest('[data-cr-page]');if(pageBtn){change(Number(pageBtn.dataset.crPage));return;}
 var b=e.target.closest('[data-cr-action]');if(!b)return;
 switch(b.dataset.crAction){case 'close':close();break;case 'next':change(page+1);break;case 'prev':change(page-1);break;case 'zoom':zoom=!zoom;render();break;case 'reset':zoom=false;render();break;}
});
document.addEventListener('keydown',function(e){if(!root)return;if(e.key==='Escape'){close();e.preventDefault();}else if(e.key==='ArrowRight'){change(page+1);e.preventDefault();}else if(e.key==='ArrowLeft'){change(page-1);e.preventDefault();}});
document.addEventListener('touchstart',function(e){if(!root||!e.target.closest('.bzcr-stage')||e.touches.length!==1)return;touchX=e.touches[0].clientX;},{passive:true});
document.addEventListener('touchend',function(e){if(!root||touchX===null||!e.changedTouches.length)return;var dx=e.changedTouches[0].clientX-touchX;touchX=null;if(!zoom&&Math.abs(dx)>65)change(page+(dx<0?1:-1));},{passive:true});
document.addEventListener('click',function(e){if(root&&e.target===root)close();});
function enrich(){catalogues.forEach(function(c){if(expired(c))return;document.querySelectorAll('a[href]').forEach(function(a){if(a.href.indexOf(c.key)===-1)return;
 var label='Feuilleter le catalogue '+c.name+' sur Bonszahé';
 if(a.classList.contains('catcover')){if(a.getAttribute('aria-label')!==label)a.setAttribute('aria-label',label);}
 else if(a.classList.contains('btn')){var value=c.pages?'📖 Feuilleter les '+c.pages.length+' pages':'📖 Lire les '+c.count+' pages';if(a.textContent!==value)a.textContent=value;}
});});}
var ob=new MutationObserver(function(){if(!root)enrich();});ob.observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enrich);else enrich();
})();