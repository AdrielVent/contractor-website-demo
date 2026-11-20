// Local preview of dist/, matching Vercel's cleanUrls: /example serves example.html, unknown paths get 404.html.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const port = Number(process.env.PORT || 5173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

async function tryRead(pathname) {
  const file = resolve(join(root, pathname));
  if (!file.startsWith(root)) return null;
  try {
    return { file, data: await readFile(file) };
  } catch {
    return null;
  }
}

createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', `http://${request.headers.host}`);
  const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
  const found = (await tryRead(pathname)) ?? (extname(pathname) ? null : await tryRead(`${pathname}.html`));
  if (found) {
    response.writeHead(200, { 'Content-Type': types[extname(found.file)] ?? 'application/octet-stream' });
    response.end(found.data);
    return;
  }
  const notFound = await tryRead('/404.html');
  response.writeHead(404, { 'Content-Type': types['.html'] });
  response.end(notFound ? notFound.data : 'Not found');
}).listen(port, '127.0.0.1', () => {
  console.log(`Preview running at http://127.0.0.1:${port}/`);
});
