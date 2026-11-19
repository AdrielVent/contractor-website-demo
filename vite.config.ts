import { defineConfig } from 'vite';

// The page has no client-side interactivity, so it ships as static HTML and one CSS file.
// scripts/build.mjs renders <App /> to markup at build time; no JavaScript reaches the browser.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
});
