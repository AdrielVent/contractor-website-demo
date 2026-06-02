import ts from 'typescript';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const sourceDir = resolve(root, 'src');

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, 'src'), { recursive: true });
await cp(resolve(root, 'public'), dist, { recursive: true });

const sourceFiles = (await readdir(sourceDir)).filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'));

for (const file of sourceFiles) {
  const source = await readFile(resolve(sourceDir, file), 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
    },
    fileName: file,
    reportDiagnostics: true,
  });

  const diagnostics = transpiled.diagnostics ?? [];
  if (diagnostics.length > 0) {
    const message = ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCanonicalFileName: (name) => name,
      getCurrentDirectory: () => root,
      getNewLine: () => '\n',
    });
    throw new Error(message);
  }

  const js = transpiled.outputText
    .replaceAll("from './App'", "from './App.js'")
    .replaceAll('from "./App"', 'from "./App.js"')
    .replaceAll("from './siteConfig'", "from './siteConfig.js'")
    .replaceAll('from "./siteConfig"', 'from "./siteConfig.js"');

  await writeFile(resolve(dist, 'src', file.replace(/\.tsx?$/, '.js')), js);
}

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
    <script type="module" src="/src/main.js"></script>`,
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
