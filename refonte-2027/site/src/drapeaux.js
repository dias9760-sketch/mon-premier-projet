/* =========================================================================
   Drapeaux des îles (SVG simplifiés, format 3:2) pour la section
   « Des bijoux inspirés de nos îles ». Mayotte : blason simplifié (écu bleu
   au croissant, rouge aux deux fleurs d'ylang), sans les hippocampes.
   ========================================================================= */
const svg = (inner, label) => `<svg viewBox="0 0 150 100" role="img" aria-label="${label}">${inner}</svg>`;
const etoile = (cx, cy, r) => {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r;
    return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return `<polygon points="${pts}" fill="#fff"/>`;
};
const fleur = (cx, cy) => Array.from({ length: 6 }, (_, i) => `<ellipse cx="${cx}" cy="${cy - 7}" rx="2.4" ry="7" fill="#F2C230" transform="rotate(${i * 60} ${cx} ${cy})"/>`).join('') + `<circle cx="${cx}" cy="${cy}" r="2.2" fill="#C1272D"/>`;

export const DRAPEAUX = {
  'mayotte': svg(`<rect width="150" height="100" fill="#fff"/>
    <path d="M50 10 H100 V58 Q100 86 75 94 Q50 86 50 58 Z" fill="#C1272D" stroke="#1B2A41" stroke-width="2"/>
    <path d="M50 10 H100 V46 H50 Z" fill="#1E4FA3"/>
    <path d="M70 18 a12 12 0 1 0 12 18 a9 9 0 1 1 -12 -18z" fill="#fff"/>
    ${fleur(64, 66)}${fleur(86, 66)}`, 'Mayotte'),
  'comores': svg(`<rect width="150" height="25" fill="#FFC61E"/><rect y="25" width="150" height="25" fill="#fff"/>
    <rect y="50" width="150" height="25" fill="#CE1126"/><rect y="75" width="150" height="25" fill="#3A75C4"/>
    <path d="M0 0 L65 50 L0 100 Z" fill="#3D8E33"/>
    <path d="M24 30 a21 21 0 1 0 0 40 a17 17 0 1 1 0 -40z" fill="#fff"/>
    ${[36, 45, 54, 63].map(y => etoile(33, y, 3.6)).join('')}`, 'Comores'),
  'guadeloupe': svg(`<rect width="150" height="100" fill="#CE1126"/><rect width="150" height="28" fill="#1E3C96"/>
    ${[38, 75, 112].map(x => `<text x="${x}" y="21" text-anchor="middle" font-size="18" fill="#F5D33A">⚜</text>`).join('')}
    <path d="M38 88 L112 48" stroke="#2E8B3A" stroke-width="7" stroke-linecap="round"/>
    ${Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8; return `<line x1="${75 + 14 * Math.cos(a)}" y1="${64 + 14 * Math.sin(a)}" x2="${75 + 24 * Math.cos(a)}" y2="${64 + 24 * Math.sin(a)}" stroke="#F5D33A" stroke-width="3"/>`; }).join('')}
    <circle cx="75" cy="64" r="14" fill="#F5D33A"/>`, 'Guadeloupe'),
  'martinique': svg(`<rect width="150" height="50" fill="#00A651"/><rect y="50" width="150" height="50" fill="#231F20"/>
    <path d="M0 0 L62 50 L0 100 Z" fill="#E4202E"/>`, 'Martinique'),
  'madagascar': svg(`<rect width="150" height="100" fill="#fff"/><rect x="50" width="100" height="50" fill="#FC3D32"/>
    <rect x="50" y="50" width="100" height="50" fill="#007E3A"/>`, 'Madagascar'),
  'la-reunion': svg(`<rect width="150" height="100" fill="#1E5EBA"/>
    ${[-62, -40, -18, 0, 18, 40, 62].map(d => { const a = (d - 90) * Math.PI / 180; return `<path d="M75 62 L${75 + 110 * Math.cos(a - .045)} ${62 + 110 * Math.sin(a - .045)} L${75 + 110 * Math.cos(a + .045)} ${62 + 110 * Math.sin(a + .045)} Z" fill="#F5D33A"/>`; }).join('')}
    <path d="M75 62 L150 100 L0 100 Z" fill="#E4202E"/>`, 'La Réunion'),
};
