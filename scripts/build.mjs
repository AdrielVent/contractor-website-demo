// Static build: Vite compiles Tailwind into one CSS file, then <App /> is rendered to HTML.
// The output is plain HTML + CSS. No JavaScript is shipped, so the page reads the same
// with scripts off, in "view source", and for search engines and link previews.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrOut = resolve(root, '.ssr');

await build({ root, logLevel: 'warn', build: { outDir: dist, emptyOutDir: true } });
await build({ root, logLevel: 'warn', build: { ssr: 'src/entry-server.tsx', outDir: ssrOut, emptyOutDir: true } });

const { render } = await import(pathToFileURL(resolve(ssrOut, 'entry-server.js')).href);
const htmlPath = resolve(dist, 'index.html');
const template = await readFile(htmlPath, 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('index.html is missing the <!--app-html--> placeholder.');
await writeFile(htmlPath, template.replace('<!--app-html-->', render()));
await rm(ssrOut, { recursive: true, force: true });

console.log('Built static site to dist/');
