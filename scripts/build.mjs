import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, 'src'), { recursive: true });
await cp(resolve(root, 'public'), dist, { recursive: true });

const configSource = await readFile(resolve(root, 'src/siteConfig.ts'), 'utf8');
const appSource = await readFile(resolve(root, 'src/App.tsx'), 'utf8');

const configStart = configSource.indexOf('export const siteConfig');
if (configStart === -1) {
  throw new Error('Could not find siteConfig export.');
}

const configJs = configSource
  .slice(configStart)
  .replace('export const siteConfig: SiteConfig =', 'const siteConfig =');

const appJsx = appSource
  .replace(/import \{[\s\S]*?\} from 'lucide-react';/, (match) => match)
  .replace(
    "import { type CSSProperties, type FormEvent, useEffect, useMemo, useState } from 'react';",
    "import { useEffect, useMemo, useState } from 'react';",
  )
  .replace("import { siteConfig } from './siteConfig';", '')
  .replace('} as CSSProperties;', '};')
  .replace('(url?: string)', '(url)')
  .replace('async function handleEstimateSubmit(event: FormEvent<HTMLFormElement>)', 'async function handleEstimateSubmit(event)')
  .replaceAll('label as string', 'label')
  .replace('export default App;', '');

const mainJsx = `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

${configJs}

${appJsx}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`;

await writeFile(resolve(dist, 'src/app.jsx'), mainJsx);

const html = await readFile(resolve(root, 'index.html'), 'utf8');
const productionHtml = html
  .replace(
    '<script type="module" src="/src/main.tsx"></script>',
    `<script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@19.0.0",
          "react/jsx-runtime": "https://esm.sh/react@19.0.0/jsx-runtime",
          "react-dom/client": "https://esm.sh/react-dom@19.0.0/client",
          "lucide-react": "https://esm.sh/lucide-react@0.468.0?external=react"
        }
      }
    </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel" data-type="module" data-presets="react,typescript" src="/src/app.jsx"></script>`,
  )
  .replace(
    '</head>',
    `    <style>
      :root {
        color: #292524;
        background: #f7f7f5;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      html { scroll-behavior: smooth; }
      body { margin: 0; min-width: 320px; }
      button, input, textarea, select { font: inherit; }
      .section-anchor { scroll-margin-top: 88px; }
    </style>
  </head>`,
  );

await writeFile(resolve(dist, 'index.html'), productionHtml);

console.log('Built production site to dist/');
