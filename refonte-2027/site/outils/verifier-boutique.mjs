// Vérifie la connexion du nouveau site à la boutique Wix actuelle, EN LECTURE SEULE.
// Ne crée, ne modifie et ne supprime rien : il lit seulement ce qu'une visiteuse peut voir.
//
// Usage : node refonte-2027/site/outils/verifier-boutique.mjs
// (après avoir collé l'identifiant client dans site/src/rest/wix-config.js)
//
// Affiche : la version du catalogue Wix (V1 ou V3), le nombre de produits, les catégories,
// et les options / champs de gravure de quelques produits, pour préparer le branchement.
import { WIX_CLIENT_ID, wixApiRequest } from '../src/rest/wix-client.js';
import { countProducts, queryCategories, queryProducts } from '../src/rest/wix-store-catalog.js';

if (!WIX_CLIENT_ID || WIX_CLIENT_ID.startsWith('<')) {
  console.error('Identifiant client manquant : colle-le dans site/src/rest/wix-config.js');
  process.exit(1);
}

const ligne = (t = '') => console.log(t);

try {
  // 1. Catalogue V3 ?
  let version = 'V3';
  let total;
  try {
    total = await countProducts();
  } catch (e) {
    version = 'V1';
    ligne(`Catalogue V3 indisponible (${e.status ?? e.message}) : essai du catalogue V1…`);
  }

  if (version === 'V3') {
    ligne(`✔ Connexion OK · catalogue Wix Stores V3 · ${total} produit(s) visible(s)`);
    const { categories } = await queryCategories({ limit: 100 });
    const cats = categories.filter(c => c.visible !== false && c.slug !== 'all-products');
    ligne(`\nCatégories (${cats.length}) :`);
    cats.forEach(c => ligne(`  · ${c.name}  [${c.slug}]  ${c.itemCounter ?? '?'} produit(s)`));
    const { products } = await queryProducts({ limit: 8 });
    ligne(`\nExemples de produits :`);
    for (const p of products) {
      const prix = p.actualPriceRange?.minValue?.formattedAmount ?? '?';
      const opts = (p.options ?? []).map(o => `${o.name} (${(o.choicesSettings?.choices ?? []).map(c => c.name).join(', ')})`).join(' · ');
      const mods = (p.modifiers ?? []).map(m => `${m.name}${m.mandatory ? '*' : ''} [${m.modifierRenderType}]`).join(' · ');
      ligne(`  · ${p.name} — ${prix}${opts ? `\n      options : ${opts}` : ''}${mods ? `\n      personnalisation : ${mods}` : ''}`);
    }
  } else {
    const res = await wixApiRequest('/stores-reader/v1/products/query', { method: 'POST', body: { query: { paging: { limit: 8 } }, includeVariants: false } });
    const products = res?.products ?? [];
    ligne(`✔ Connexion OK · catalogue Wix Stores V1 · ${res?.totalResults ?? products.length} produit(s)`);
    ligne(`\nExemples de produits :`);
    for (const p of products) {
      const opts = (p.productOptions ?? []).map(o => `${o.name} (${(o.choices ?? []).map(c => c.description).join(', ')})`).join(' · ');
      const mods = (p.customTextFields ?? []).map(f => `${f.title}${f.mandatory ? '*' : ''} (${f.maxLength} car.)`).join(' · ');
      ligne(`  · ${p.name} — ${p.priceData?.formatted?.price ?? '?'}${opts ? `\n      options : ${opts}` : ''}${mods ? `\n      gravure : ${mods}` : ''}`);
    }
    ligne('\n⚠ Catalogue V1 : les fonctions de branchement fournies ciblent le V3. Il faudra les adapter (ou que Wix migre la boutique).');
  }
} catch (e) {
  console.error(`✘ Échec : ${e.message}`);
  if (String(e.message).includes('OAuth')) console.error('  → Vérifie l\'identifiant client (Paramètres › Développement et intégrations › Headless Settings).');
  if (e.status === 428) console.error('  → Wix Stores n\'est pas installé sur ce site.');
  process.exit(1);
}
