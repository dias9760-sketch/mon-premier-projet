// Assemble le prototype en un seul fichier HTML autonome : prototype/zarahissi-prototype.html
// Usage : node prototype/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = dirname(fileURLToPath(import.meta.url));
const src = (f) => readFileSync(join(dir, 'src', f), 'utf8');
const html = src('index.html').replace(/<!-- @inline (\S+) -->/g, (_, f) =>
  f.endsWith('.css') ? `<style>\n${src(f)}\n</style>` : `<script>\n${src(f)}\n</script>`);
writeFileSync(join(dir, 'zarahissi-prototype.html'), html);
console.log('OK', (html.length / 1024).toFixed(0) + ' Ko');
