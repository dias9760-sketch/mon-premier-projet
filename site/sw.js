// Bonszahé : garde les fichiers du site sur le téléphone pour un chargement rapide et un message clair hors connexion.
const CACHE='bonszahe-v1';
const OFFLINE=`<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Hors connexion | Bonszahé</title>
<body style="font-family:system-ui,sans-serif;background:#FFF7EC;color:#1F2B3D;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px;text-align:center">
<div><div style="font-size:3rem">📶</div><h1 style="font-size:1.4rem">Pas de connexion pour le moment</h1><p>Vérifiez votre réseau, puis réessayez : les bons plans de Mayotte vous attendent.</p>
<button onclick="location.reload()" style="font:inherit;font-weight:700;padding:12px 20px;border-radius:999px;border:0;background:#E4502F;color:#fff">Réessayer</button></div></body></html>`;
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.add('/')).catch(()=>{})); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const req=e.request, url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==location.origin) return;
  // Pages : toujours la version en ligne, la dernière page d'accueil gardée en secours.
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(r=>{ if(r.ok&&url.pathname==='/'){ const copy=r.clone(); caches.open(CACHE).then(c=>c.put('/',copy)); } return r; })
      .catch(()=>caches.match('/').then(r=>r||new Response(OFFLINE,{headers:{'Content-Type':'text/html; charset=utf-8'}}))));
    return;
  }
  // Fichiers du site (scripts, styles, icônes) : réponse immédiate depuis le téléphone, mise à jour en arrière-plan.
  if(/\.(js|css|png|jpg|webp|json)$/.test(url.pathname)&&url.pathname!=='/sw.js'){
    e.respondWith(caches.open(CACHE).then(async c=>{
      const hit=await c.match(req);
      const net=fetch(req).then(r=>{ if(r.ok){ c.put(req,r.clone()); c.keys().then(ks=>ks.forEach(k=>{ const u=new URL(k.url); if(u.pathname===url.pathname&&u.search!==url.search) c.delete(k); })); } return r; }).catch(()=>hit);
      return hit||net;
    }));
  }
});
