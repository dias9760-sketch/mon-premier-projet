/* =========================================================================
   Zarahissi 2027 · Illustrations provisoires des produits (SVG)
   Elles remplacent les photos dans le prototype. Dans Wix Studio, ce sont
   les vraies photos produits (fond uni crème, format carré 1:1) qui
   prennent leur place.
   art(visuel, { s, metal, text, text2, font, ile, alt })
   ========================================================================= */
function art(v, o = {}) {
  const s = o.s || 140;
  const m = (METAUX[o.metal] || METAUX.or).couleur;
  const ink = '#1B2A41';
  const esc = (t) => String(t || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const font = o.font || POLICES[0];
  const ff = `font-family:${font.css.replace(/"/g, "'")};${font.style ? 'font-style:' + font.style + ';' : ''}${font.poids ? 'font-weight:' + font.poids + ';' : ''}`;
  // Taille du texte gravé : s'adapte à la longueur pour rester dans le bijou
  const fit = (t, base, width) => {
    const n = Math.max(String(t || '').length, 1);
    return Math.min(base, (width / (n * .5)) ) * font.taille;
  };
  const chain = (y = 108) => `<path d="M24 22 Q100 ${y + 70} 176 22" fill="none" stroke="${m}" stroke-width="1.6"/>`;
  const sh = 'fill="#fff" opacity=".35"';
  const svg = (inner) => `<svg width="${s}" height="${s}" viewBox="0 0 200 200" aria-hidden="true" role="img">${inner}</svg>`;
  const T = o.text ?? '', T2 = o.text2 ?? '';

  switch (v) {
    case 'nom': {
      const t = T || 'Amina';
      return svg(`<path d="M24 22 Q40 90 54 118" fill="none" stroke="${m}" stroke-width="1.6"/><path d="M176 22 Q160 90 146 118" fill="none" stroke="${m}" stroke-width="1.6"/>
        <text x="100" y="134" text-anchor="middle" style="${ff}" font-size="${fit(t, 54, 150)}" fill="${m}">${esc(t)}</text>`);
    }
    case 'coeur': {
      const t = T || 'Chafia';
      return svg(`${chain(40)}<path d="M100 170 C40 130 40 70 74 66 C90 64 98 74 100 82 C102 74 110 64 126 66 C160 70 160 130 100 170Z" fill="none" stroke="${m}" stroke-width="4"/>
        <text x="100" y="128" text-anchor="middle" style="${ff}" font-size="${fit(t, 36, 96)}" fill="${m}">${esc(t)}</text>`);
    }
    case 'plaque': {
      const t = T || 'Houssam';
      return svg(`${chain(30)}<rect x="66" y="78" width="68" height="104" rx="16" fill="${o.metal === 'or' ? m : '#3A4252'}" stroke="${m}" stroke-width="3"/><circle cx="100" cy="90" r="4" fill="#fff" opacity=".6"/>
        <text x="100" y="140" text-anchor="middle" transform="rotate(-90 100 134)" style="${ff}" font-size="${fit(t, 26, 86)}" fill="${o.metal === 'or' ? ink : '#E9E0B8'}">${esc(t)}</text>`);
    }
    case 'duo-plaque': {
      const a = T || 'Houssam', b = T2 || 'Kamela';
      const pl = (x, t) => `<rect x="${x}" y="70" width="54" height="92" rx="13" fill="#2A3243" stroke="${m}" stroke-width="2.5"/><path d="M${x + 12} 96 l5 -12 l10 8 l10 -8 l5 12z" fill="${m}"/>
        <text x="${x + 27}" y="130" text-anchor="middle" style="${ff}" font-size="${fit(t, 18, 48)}" fill="#E9E0B8">${esc(t)}</text>`;
      return svg(`<path d="M30 20 Q50 60 60 70 M110 70 Q130 30 140 20 M60 20 Q80 50 88 70 M140 70 Q160 40 170 20" fill="none" stroke="${m}" stroke-width="1.4"/>${pl(36, a)}${pl(110, b)}`);
    }
    case 'pieds': {
      const a = T || 'Aaliyah', b = T2 || 'Ilyes';
      const foot = (x, r, t) => `<g transform="rotate(${r} ${x} 120)"><ellipse cx="${x}" cy="126" rx="22" ry="38" fill="${m}"/>${[0, 1, 2, 3, 4].map(i => `<circle cx="${x - 16 + i * 8}" cy="${82 - (i === 0 ? 4 : 0)}" r="${i === 0 ? 6 : 4}" fill="${m}"/>`).join('')}
        <text x="${x}" y="130" text-anchor="middle" transform="rotate(-90 ${x} 126)" style="${ff}" font-size="${fit(t, 14, 60)}" fill="${ink}">${esc(t)}</text></g>`;
      return svg(`${chain(10)}${foot(78, -8, a)}${foot(122, 8, b)}`);
    }
    case 'jonc':
    case 'cuir':
    case 'barre': {
      const t = T || (v === 'cuir' ? 'Ibrahim' : 'Inaya');
      const band = v === 'cuir' ? `<ellipse cx="100" cy="110" rx="78" ry="40" fill="none" stroke="#2B2B2B" stroke-width="9" stroke-dasharray="6 3"/>` : `<path d="M30 110 A70 38 0 1 0 170 110" fill="none" stroke="${m}" stroke-width="7"/><path d="M30 110 A70 38 0 0 1 64 78" fill="none" stroke="${m}" stroke-width="7"/>`;
      return svg(`${band}<rect x="48" y="128" width="104" height="30" rx="4" fill="${m}"/><rect x="48" y="128" width="104" height="8" rx="4" ${sh}/>
        <text x="100" y="150" text-anchor="middle" style="${ff}" font-size="${fit(t, 22, 92)}" fill="${ink}">${esc(t)}</text>`);
    }
    case 'duo-bracelet':
      return svg(`<ellipse cx="78" cy="104" rx="52" ry="30" fill="none" stroke="#2B2B2B" stroke-width="7"/><ellipse cx="122" cy="112" rx="52" ry="30" fill="none" stroke="${m}" stroke-width="7"/>
        ${T || T2 ? `<rect x="40" y="128" width="58" height="22" rx="3" fill="${m}"/><rect x="104" y="128" width="58" height="22" rx="3" fill="${m}"/>
        <text x="69" y="144" text-anchor="middle" style="${ff}" font-size="${fit(T || 'Lui', 15, 52)}" fill="${ink}">${esc(T || 'Lui')}</text><text x="133" y="144" text-anchor="middle" style="${ff}" font-size="${fit(T2 || 'Elle', 15, 52)}" fill="${ink}">${esc(T2 || 'Elle')}</text>` : ''}`);
    case 'bague': {
      const t = T || 'Toujours';
      return svg(`<ellipse cx="100" cy="104" rx="64" ry="64" fill="none" stroke="${m}" stroke-width="18"/><ellipse cx="100" cy="104" rx="64" ry="64" fill="none" stroke="#fff" stroke-width="2" opacity=".35"/>
        <path id="ring-${s}" d="M48 136 A62 62 0 0 0 152 136" fill="none"/><text style="${ff}" font-size="${fit(t, 18, 110)}" fill="${ink}"><textPath href="#ring-${s}" startOffset="50%" text-anchor="middle">${esc(t)}</textPath></text>`);
    }
    case 'duo-bague':
      return svg(`<ellipse cx="80" cy="104" rx="44" ry="44" fill="none" stroke="${m}" stroke-width="12"/><ellipse cx="124" cy="110" rx="38" ry="38" fill="none" stroke="#A9AFB7" stroke-width="10"/>
        <text x="100" y="186" text-anchor="middle" style="${ff}" font-size="20" fill="${ink}">${esc((T || 'Lui') + ' & ' + (T2 || 'Elle'))}</text>`);
    case 'initiales': {
      const t = (T || 'AK').slice(0, 2);
      return svg(`${[...t].map((c, i) => `<circle cx="${70 + i * 60}" cy="70" r="7" fill="none" stroke="${m}" stroke-width="3"/><text x="${70 + i * 60}" y="132" text-anchor="middle" style="font-family:'Cormorant Garamond',serif;font-weight:700" font-size="64" fill="${m}">${esc(c.toUpperCase())}</text>`).join('')}`);
    }
    case 'cheville': {
      const t = T || 'Nawal';
      return svg(`<path d="M20 70 Q100 170 180 70" fill="none" stroke="${m}" stroke-width="1.6" stroke-dasharray="2 4"/>${[40, 70, 130, 160].map(x => `<circle cx="${x}" cy="${x < 100 ? 70 + (x - 20) * .9 : 70 + (180 - x) * .9}" r="3" fill="${m}"/>`).join('')}
        <text x="100" y="130" text-anchor="middle" style="${ff}" font-size="${fit(t, 34, 100)}" fill="${m}">${esc(t)}</text>`);
    }
    case 'porte-cles': {
      const t = T || 'Sois prudent';
      return svg(`<circle cx="100" cy="42" r="22" fill="none" stroke="#A9AFB7" stroke-width="5"/><path d="M100 64 v14" stroke="#A9AFB7" stroke-width="4"/>
        <rect x="56" y="78" width="88" height="98" rx="8" fill="${m}"/><rect x="56" y="78" width="88" height="14" rx="6" ${sh}/>
        <text x="100" y="134" text-anchor="middle" style="${ff}" font-size="${fit(t, 26, 80)}" fill="${ink}">${esc(t)}</text>`);
    }
    case 'musique': {
      const t = T || 'Pour toi';
      return svg(`<circle cx="100" cy="100" r="72" fill="${ink}"/><circle cx="100" cy="100" r="60" fill="none" stroke="#2E3B52" stroke-width="2"/><circle cx="100" cy="100" r="46" fill="none" stroke="#2E3B52" stroke-width="2"/><circle cx="100" cy="100" r="22" fill="#C9A55A"/><circle cx="100" cy="100" r="4" fill="${ink}"/>
        <path d="M138 30 v40 a10 8 0 1 1 -6 -7 V38 l22 -6 v30 a10 8 0 1 1 -6 -7 V28z" fill="#C9A55A"/>
        <text x="100" y="192" text-anchor="middle" style="font-family:'Great Vibes',cursive" font-size="${fit(t, 30, 160)}" fill="${ink}">${esc(t)}</text>`);
    }
    case 'ile': {
      const shapes = {
        'Mayotte': 'M92 70 q14 -8 20 6 q4 14 -2 26 q8 12 2 24 q-4 16 -16 18 q-12 -6 -8 -20 q-10 -10 -4 -24 q-6 -16 8 -30z M124 104 q8 -2 8 6 q-4 6 -8 -6z',
        'La Réunion': 'M70 92 q20 -26 52 -20 q24 10 20 36 q-4 26 -32 30 q-34 2 -44 -20 q-4 -14 4 -26z',
        'Comores': 'M60 70 q10 -6 14 6 q2 18 -6 22 q-10 -4 -8 -28z M98 104 q10 -4 16 4 q-2 8 -16 -4z M120 120 q8 -2 10 6 q-6 8 -10 -6z M140 136 q10 -2 10 8 q-8 6 -10 -8z',
        'Madagascar': 'M112 50 q16 6 10 30 q-6 30 -18 56 q-10 22 -24 18 q-10 -10 -4 -30 q4 -20 14 -40 q10 -30 22 -34z',
        'Martinique': 'M84 66 q14 -6 22 8 q10 6 12 20 q10 14 2 30 q-12 14 -26 6 q-16 -6 -14 -24 q-10 -20 4 -40z',
        'Guadeloupe': 'M56 92 q12 -24 34 -10 q10 14 0 34 q-18 10 -30 0 q-8 -10 -4 -24z M104 78 q22 -12 38 6 q4 22 -16 32 q-18 0 -22 -16 q-4 -14 0 -22z',
      };
      const d = shapes[o.ile] || shapes['Mayotte'];
      return svg(`${chain(30)}<path d="${d}" fill="${m}"/><path d="${d}" fill="#fff" opacity=".18" transform="translate(-2 -2)"/>${o.label !== false ? `<text x="100" y="186" text-anchor="middle" style="font-family:'Cormorant Garamond',serif;font-style:italic" font-size="18" fill="${ink}">${esc(o.ile || '')}</text>` : ''}`);
    }
    case 'fleur':
    case 'fleur-bo': {
      const fl = (cx, cy, r) => [0, 1, 2, 3, 4, 5].map(i => `<ellipse cx="${cx}" cy="${cy - r}" rx="${r * .28}" ry="${r}" transform="rotate(${i * 60 + 15} ${cx} ${cy})" fill="${m}" opacity=".9"/>`).join('') + `<circle cx="${cx}" cy="${cy}" r="${r * .22}" fill="#F4E7C1"/>`;
      return v === 'fleur' ? svg(`${chain(40)}${fl(100, 124, 34)}`) : svg(`${fl(66, 100, 26)}${fl(134, 100, 26)}`);
    }
    case 'calligraphie':
      return svg(`${chain(40)}<circle cx="100" cy="128" r="44" fill="none" stroke="${m}" stroke-width="4"/><text x="100" y="146" text-anchor="middle" font-size="46" fill="${m}" style="font-family:serif">الله</text>`);
    case 'perles':
      return svg(`${[...Array(16)].map((_, i) => { const a = i / 16 * Math.PI * 2; return `<circle cx="${100 + 66 * Math.cos(a)}" cy="${104 + 40 * Math.sin(a)}" r="9" fill="#F3EEE4" stroke="#D8CDB4"/>`; }).join('')}<circle cx="100" cy="150" r="7" fill="${m}"/>`);
    case 'creoles':
      return svg(`${[66, 134].map(x => `<path d="M${x} 40 v14" stroke="${m}" stroke-width="3"/><circle cx="${x}" cy="62" r="8" fill="none" stroke="${m}" stroke-width="3"/><path d="M${x} 70 q-24 44 0 90 q24 -46 0 -90z" fill="none" stroke="${m}" stroke-width="4"/>`).join('')}`);
    case 'solitaire':
      return svg(`<ellipse cx="100" cy="118" rx="54" ry="54" fill="none" stroke="${m}" stroke-width="9"/><path d="M80 60 l20 -26 l20 26 l-20 16z" fill="#7FC4CB" stroke="${m}" stroke-width="3"/><path d="M80 60 h40 M100 34 v42" stroke="#fff" stroke-width="1" opacity=".6"/>`);
    case 'coeur-partage':
      return svg(`<path d="M24 22 Q60 80 80 92 M176 22 Q140 80 120 92" fill="none" stroke="${m}" stroke-width="1.5"/><path d="M96 168 C40 130 40 90 70 88 C84 86 94 96 96 104 l-8 14 l10 12 l-6 14z" fill="${m}"/><path d="M104 168 C160 130 160 90 130 88 C116 86 106 96 104 104 l-6 14 l10 12 l-6 14z" fill="#A9AFB7"/>`);
    case 'montre':
      return svg(`<rect x="76" y="14" width="48" height="172" rx="10" fill="none" stroke="${m}" stroke-width="3" stroke-dasharray="${o.metal === 'or' ? '0' : '4 2'}"/><circle cx="100" cy="100" r="40" fill="#FBF8F1" stroke="${m}" stroke-width="7"/>${[0, 3, 6, 9].map(i => { const a = i / 12 * Math.PI * 2; return `<circle cx="${100 + 30 * Math.sin(a)}" cy="${100 - 30 * Math.cos(a)}" r="2" fill="${ink}"/>`; }).join('')}<path d="M100 100 V76 M100 100 H118" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`);
    case 'montre-connectee':
      return svg(`<rect x="74" y="10" width="52" height="180" rx="16" fill="#2B3445"/><rect x="58" y="58" width="84" height="94" rx="20" fill="${ink}" stroke="#4A5468" stroke-width="3"/><text x="100" y="112" text-anchor="middle" font-size="26" font-weight="700" fill="#E9E0B8" style="font-family:'DM Sans',sans-serif">10:09</text><path d="M78 128 h10 l4 -8 l6 14 l4 -6 h20" fill="none" stroke="#7FC4CB" stroke-width="2"/>`);
    case 'pince':
      return svg(`<path d="M40 120 q60 -70 120 0" fill="none" stroke="#3B3B3B" stroke-width="10" stroke-linecap="round"/>${[...Array(7)].map((_, i) => `<circle cx="${52 + i * 16}" cy="${112 - Math.sin(i / 6 * Math.PI) * 38}" r="9" fill="#F3EEE4" stroke="#D8CDB4"/>`).join('')}`);
    case 'lunettes':
      return svg(`<path d="M24 92 q4 40 40 40 q30 0 32 -34 q-2 -12 -16 -12 q-30 -4 -56 6z M176 92 q-4 40 -40 40 q-30 0 -32 -34 q2 -12 16 -12 q30 -4 56 6z" fill="#3A2E28" opacity=".88"/><path d="M96 96 q4 -6 8 0" stroke="#3A2E28" stroke-width="4" fill="none"/><path d="M40 98 q12 -4 22 4" stroke="#fff" stroke-width="2" opacity=".4" fill="none"/>`);
    case 'coque':
      return svg(`<rect x="58" y="16" width="84" height="170" rx="18" fill="#EEF3F4" stroke="#C9A55A" stroke-width="4"/><rect x="68" y="28" width="34" height="34" rx="9" fill="#2B3445"/><circle cx="78" cy="38" r="5" fill="#556"/><circle cx="92" cy="52" r="5" fill="#556"/>`);
    case 'support':
      return svg(`<rect x="62" y="30" width="76" height="130" rx="12" fill="#2B3445"/><circle cx="100" cy="166" r="16" fill="#A9AFB7"/><rect x="88" y="176" width="24" height="12" fill="#7A8090"/>`);
    case 'lampe':
      return svg(`<circle cx="100" cy="92" r="64" fill="#F4E7C1"/><circle cx="76" cy="74" r="10" fill="#E9D9A6"/><circle cx="118" cy="110" r="14" fill="#E9D9A6"/><circle cx="122" cy="66" r="6" fill="#E9D9A6"/><rect x="74" y="164" width="52" height="14" rx="4" fill="#B8925A"/><circle cx="100" cy="92" r="80" fill="#F4E7C1" opacity=".25"/>`);
    case 'carte': {
      const t = o.text || '20 €';
      return svg(`<rect x="22" y="52" width="156" height="100" rx="10" fill="${ink}"/><path d="M84 52 v100" stroke="#C9A55A" stroke-width="5"/><path d="M84 78 c-14 -18 -32 -10 -24 2 c6 8 24 0 24 -2z M84 78 c14 -18 32 -10 24 2 c-6 8 -24 0 -24 -2z" fill="#C9A55A"/>
        <text x="132" y="96" text-anchor="middle" font-size="12" letter-spacing="2" fill="#E9E0B8" style="font-family:'Cormorant Garamond',serif">ZA RAHISSI</text><text x="132" y="126" text-anchor="middle" font-size="22" fill="#C9A55A" style="font-family:'DM Sans',sans-serif;font-weight:700">${esc(t)}</text>`);
    }
    case 'calendrier':
      return svg(`<rect x="28" y="34" width="144" height="140" rx="8" fill="${ink}"/>${[...Array(12)].map((_, i) => `<rect x="${40 + (i % 4) * 32}" y="${50 + Math.floor(i / 4) * 40}" width="24" height="30" rx="3" fill="${i % 3 ? '#26344B' : '#C9A55A'}"/><text x="${52 + (i % 4) * 32}" y="${70 + Math.floor(i / 4) * 40}" text-anchor="middle" font-size="11" fill="${i % 3 ? '#E9E0B8' : ink}" style="font-family:'DM Sans'">${i * 2 + 1}</text>`).join('')}`);
    default:
      return svg(`${chain(40)}<circle cx="100" cy="128" r="10" fill="${m}"/>`);
  }
}
