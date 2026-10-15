// Assemble le prototype en un seul fichier HTML autonome.
//   prototype/zarahissi-prototype.html : à ouvrir dans un navigateur
//   prototype/zarahissi-artifact.html  : même page sans <html>/<head>/<body>, pour la publication sur claude.ai
// Usage : node prototype/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = dirname(fileURLToPath(import.meta.url));
const src = (f) => readFileSync(join(dir, 'src', f), 'utf8');
const html = src('index.html').replace(/<!-- @inline (\S+) -->/g, (_, f) =>
  f.endsWith('.css') ? `<style>\n${src(f)}\n</style>` : `<script>\n${src(f)}\n</script>`);
writeFileSync(join(dir, 'zarahissi-prototype.html'), html);
const artifact = html
  .replace(/<!doctype html>\s*/i, '')
  .replace(/<\/?html[^>]*>\s*/gi, '')
  .replace(/<\/?head>\s*/gi, '')
  .replace(/<\/?body>\s*/gi, '')
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '')
  .replace(/<title>[^<]*<\/title>/, '<title>Zarahissi 2027</title>\n<meta name="robots" content="noindex">');
writeFileSync(join(dir, 'zarahissi-artifact.html'), artifact);
console.log('OK', (html.length / 1024).toFixed(0) + ' Ko');
