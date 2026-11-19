# DatumPane · Vnua Industries

Source for **https://www.adrielv.me**, the DatumPane page of Vnua Industries.

DatumPane is a concept in development: a tool for machine-shop quality teams to see what changed between
drawing revisions and draft inspection checks from those changes. The bracket on the page (DP-EX-01) is a
fictional part drawn for the page, not a customer or employer drawing, and not working software.

Other Vnua Industries work is listed on the hub: https://adrielvent.github.io/vnua-systems/

## How it's built

- React components in `src/` are rendered to static HTML at build time (`scripts/build.mjs`).
- Tailwind CSS 3.4 is compiled by Vite into one stylesheet.
- No JavaScript ships to the browser. The page works with scripts off.

```bash
npm ci
npm run build     # writes dist/
npm run preview   # serves dist/ at http://127.0.0.1:5173
```

Vercel builds `main` with `npm run build` and serves `dist/` (see `vercel.json`).

## Editing

Company name, email and links live in `src/siteConfig.ts`. The bracket exhibit's numbers live in the
`change` object at the top of `src/App.tsx`, so the drawing, table and inspection check stay consistent.

Contact: adriel@adrielv.me
