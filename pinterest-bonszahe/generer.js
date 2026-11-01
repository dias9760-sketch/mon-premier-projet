// Génère les visuels Pinterest BonsZahé (1000x1500) depuis pins.json
// Usage : node pinterest-bonszahe/generer.js
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const dir = __dirname;
const pins = JSON.parse(fs.readFileSync(path.join(dir, 'pins.json'), 'utf8'));
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');

const NAVY='#1E3765', ORANGE='#E0532F';
const art = p => {
  const t = esc(p.artText), s = esc(p.artSub);
  switch (p.art) {
    case 'coupon': case 'code': return `
      <div class="coupon"><div class="cl">${p.art==='code'?'<small>CODE</small>':''}<b class="${p.art==='code'?'mono':''}">${t}</b></div>
      <div class="cr">${s}</div></div>`;
    case 'calendar': return `<div class="cal"><div class="calh">CETTE SEMAINE</div><b>${t}</b><div class="cals">${s}</div></div>`;
    case 'tag': return `<div class="tagw"><div class="tag"><i></i><b>${t}</b><span>${s}</span></div></div>`;
    case 'map': return `<div class="mapc">${svgPin}<div class="pill">${s}</div></div>`;
    case 'gift': return `<div class="mapc">${svgGift}<div class="pill">${s}</div></div>`;
    case 'trophy': return `<div class="mapc">${svgTrophy}<div class="pill">${s}</div></div>`;
    case 'shop': return `<div class="mapc">${svgShop}<div class="pill">${s}</div></div>`;
  }
};
const svgPin = `<svg width="200" height="200" viewBox="0 0 100 100"><path d="M50 8c-17 0-30 13-30 30 0 22 30 54 30 54s30-32 30-54C80 21 67 8 50 8z" fill="${ORANGE}"/><circle cx="50" cy="38" r="12" fill="#fff"/></svg>`;
const svgGift = `<svg width="200" height="200" viewBox="0 0 100 100"><rect x="14" y="40" width="72" height="50" rx="6" fill="${ORANGE}"/><rect x="10" y="28" width="80" height="16" rx="5" fill="${NAVY}"/><rect x="45" y="28" width="10" height="62" fill="#F6DC7A"/><path d="M50 28c-8-14-26-14-22-2 2 5 14 4 22 2zm0 0c8-14 26-14 22-2-2 5-14 4-22 2z" fill="#F6DC7A"/></svg>`;
const svgTrophy = `<svg width="200" height="200" viewBox="0 0 100 100"><path d="M28 12h44v24c0 14-10 24-22 24S28 50 28 36z" fill="#F2B83A"/><path d="M28 18H14c0 14 8 20 16 20M72 18h14c0 14-8 20-16 20" stroke="#F2B83A" stroke-width="6" fill="none"/><rect x="44" y="58" width="12" height="16" fill="#E0A42E"/><rect x="30" y="74" width="40" height="12" rx="3" fill="${NAVY}"/><text x="50" y="42" font-size="22" font-weight="800" text-anchor="middle" fill="#fff" font-family="Poppins">1</text></svg>`;
const svgShop = `<svg width="200" height="200" viewBox="0 0 100 100"><rect x="16" y="42" width="68" height="46" rx="4" fill="#fff" stroke="${NAVY}" stroke-width="4"/><path d="M12 42l8-26h60l8 26z" fill="${ORANGE}"/><path d="M12 42h76" stroke="${NAVY}" stroke-width="4"/><rect x="26" y="56" width="18" height="32" fill="${NAVY}"/><rect x="52" y="56" width="22" height="16" rx="2" fill="#BFE3EE"/></svg>`;
const logo = `<svg width="78" height="96" viewBox="0 0 39 48"><rect x="3" y="2" width="28" height="44" rx="5" fill="#fff" stroke="${NAVY}" stroke-width="3"/><rect x="11" y="16" width="24" height="16" rx="3" fill="${ORANGE}" transform="rotate(-14 23 24)"/><text x="22" y="28.5" font-size="10" font-weight="800" fill="#fff" text-anchor="middle" font-family="Poppins" transform="rotate(-14 23 24)">%</text><path d="M34 4l1.2 2.6L38 7.5l-2.8 1-1.2 2.6-1.2-2.6-2.8-1 2.8-.9z" fill="#F2B83A"/></svg>`;

const html = p => `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=block">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1000px;height:1500px;overflow:hidden;font-family:Poppins,sans-serif;color:${NAVY};
 background:linear-gradient(180deg,#FBF4E8 0%,#F8E3CC 55%,#F1C39C 100%);position:relative}
.sun{position:absolute;right:-170px;top:-170px;width:620px;height:620px;border-radius:50%;
 background:radial-gradient(circle,#F7DE7E 0%,#F7DE7Ecc 45%,#F7DE7E00 72%)}
.top{position:relative;padding:70px 70px 0;display:flex;align-items:center;gap:20px}
.brand{font-size:76px;font-weight:800;letter-spacing:-1.5px;line-height:1}
.brand span{color:${ORANGE}}
.uline{height:7px;width:290px;background:${ORANGE};border-radius:4px;margin:14px 0 0 168px}
.chip{display:inline-block;margin:56px 0 0 70px;background:#fff;border-radius:40px;padding:12px 28px;font-weight:700;font-size:26px;box-shadow:0 4px 14px #0001}
.chip:before{content:"●";color:${ORANGE};margin-right:10px;font-size:20px;vertical-align:3px}
h1{position:relative;margin:36px 70px 0;font-size:88px;line-height:1.04;font-weight:800;letter-spacing:-2px}
h1 .o{color:${ORANGE}}
.sub{margin:30px 70px 0;font-size:32px;line-height:1.4;font-weight:500;color:#3A4E73;max-width:820px}
.art{position:absolute;left:0;right:0;top:960px;display:flex;justify-content:center}
.coupon{display:flex;background:#fff;border-radius:26px;box-shadow:0 14px 34px #1E376522;overflow:hidden;transform:rotate(-3deg)}
.cl{background:${ORANGE};color:#fff;padding:26px 46px;display:flex;flex-direction:column;justify-content:center;border-right:6px dashed #FBF4E8}
.cl b{font-size:74px;font-weight:800;line-height:1}.cl b.mono{font-size:58px;letter-spacing:4px}.cl small{font-size:20px;font-weight:700;opacity:.85}
.cr{padding:26px 40px;font-weight:800;font-size:28px;display:flex;align-items:center;max-width:300px}
.cal{background:#fff;border-radius:26px;width:330px;text-align:center;box-shadow:0 14px 34px #1E376522;overflow:hidden}
.calh{background:${NAVY};color:#fff;font-weight:700;font-size:24px;padding:14px}
.cal b{display:block;font-size:130px;line-height:1.1;color:${ORANGE}}.cals{font-weight:700;font-size:20px;padding:0 0 22px}
.tag{position:relative;background:#1B1B1F;color:#fff;border-radius:22px 70px 70px 22px;padding:30px 90px 30px 60px;transform:rotate(-4deg);box-shadow:0 14px 34px #0003}
.tag i{position:absolute;right:38px;top:50%;width:28px;height:28px;margin-top:-14px;border-radius:50%;background:#F8E3CC}
.tag b{display:block;font-size:84px;font-weight:800;line-height:1}.tag span{font-size:36px;font-weight:700;color:#F7DE7E}
.mapc{display:flex;flex-direction:column;align-items:center;gap:6px}
.pill{background:${NAVY};color:#fff;font-weight:700;font-size:24px;padding:10px 26px;border-radius:30px}
.cta{position:absolute;left:0;right:0;top:1250px;text-align:center}
.cta a{display:inline-block;background:${NAVY};color:#fff;font-weight:700;font-size:38px;padding:22px 54px;border-radius:22px;text-decoration:none;box-shadow:0 10px 24px #1E376533}
.soc{margin-top:16px;font-size:22px;font-weight:600;color:#3A4E73}
.waves{position:absolute;left:0;right:0;bottom:0;height:120px}
.palm{position:absolute;right:30px;bottom:60px}
</style></head><body>
<div class="sun"></div>
<svg class="palm" width="230" height="360" viewBox="0 0 115 180"><path d="M70 178c-4-50-2-90 6-120" stroke="#5E8A3A" stroke-width="7" fill="none" stroke-linecap="round"/>
<g fill="#4E8F3A"><path d="M76 58C60 36 34 34 18 46c22-6 40 0 58 12z"/><path d="M76 58c4-26 22-42 40-44-16 12-26 26-40 44z"/><path d="M76 58c20-14 36-8 38 6-14-8-24-8-38-6z"/><path d="M76 58C66 40 52 24 40 22c10 12 22 22 36 36z"/></g></svg>
<div class="top">${logo}<div class="brand">Bons<span>Zahé</span></div></div>
<div class="uline"></div>
<div class="chip">${esc(p.chip)}</div>
<h1>${esc(p.l1)}<br><span class="o">${esc(p.l2)}</span><br>${esc(p.l3)}</h1>
<p class="sub">${esc(p.sub)}</p>
<div class="art">${art(p)}</div>
<div class="cta"><a>${esc(p.cta)}</a><div class="soc">Achetez malin, achetez mahorais · @bonszahe</div></div>
<svg class="waves" viewBox="0 0 1000 120" preserveAspectRatio="none"><path d="M0 40 Q250 0 500 35 T1000 30 V120 H0z" fill="#7CCAD8"/><path d="M0 70 Q260 35 520 68 T1000 62 V120 H0z" fill="#2E93B5"/></svg>
</body></html>`;

(async () => {
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 1000, height: 1500 } });
  for (const p of pins) {
    const f = path.join(dir, 'html', p.id + '.html');
    fs.writeFileSync(f, html(p));
    await pg.goto('file://' + f, { waitUntil: 'networkidle' });
    await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(dir, 'images', p.id + '.png') });
    console.log('ok', p.id);
  }
  await b.close();
})();
