// Static build: Vite compiles Tailwind into one CSS file, then each route is rendered to its own HTML file
// (index.html, example.html, about.html, contact.html, 404.html). No JavaScript is shipped, so every page
// reads the same with scripts off, in "view source", and for search engines and link previews.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrOut = resolve(root, '.ssr');
const site = 'https://www.adrielv.me';

await build({ root, logLevel: 'warn', build: { outDir: dist, emptyOutDir: true } });
await build({ root, logLevel: 'warn', build: { ssr: 'src/entry-server.tsx', outDir: ssrOut, emptyOutDir: true } });

const { render, routes } = await import(pathToFileURL(resolve(ssrOut, 'entry-server.js')).href);
const template = await readFile(resolve(dist, 'index.html'), 'utf8');
for (const marker of ['<!--app-html-->', '%TITLE%', '%DESCRIPTION%', '%URL%']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}.`);
}

const escape = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const page of routes) {
  const html = template
    .replaceAll('%TITLE%', escape(page.title))
    .replaceAll('%DESCRIPTION%', escape(page.description))
    .replaceAll('%URL%', site + (page.path === '/' ? '/' : page.path))
    .replace('<!--app-html-->', render(page.route));
  await writeFile(resolve(dist, page.file), html);
}
await rm(ssrOut, { recursive: true, force: true });

console.log(`Built ${routes.length} pages to dist/`);
