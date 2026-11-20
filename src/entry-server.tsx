import { renderToStaticMarkup } from 'react-dom/server';
import App, { type Route } from './App';

// Each route becomes one HTML file. `path` is the clean URL Vercel serves it at.
export const routes: { route: Route; file: string; path: string; title: string; description: string }[] = [
  {
    route: 'home',
    file: 'index.html',
    path: '/',
    title: 'DatumPane | See what changed, know what to inspect',
    description:
      "DatumPane, a concept by Vnua Industries, would help machine shops see what changed between drawing revisions and what to inspect because of it.",
  },
  {
    route: 'example',
    file: 'example.html',
    path: '/example',
    title: 'Bracket example | DatumPane',
    description: 'A made-up bracket goes from revision A to B and one tolerance tightens. This is what DatumPane would show.',
  },
  {
    route: 'about',
    file: 'about.html',
    path: '/about',
    title: 'About | DatumPane',
    description: "DatumPane is built by Adriel Ventura, a mechanical engineering student at Hofstra, under Vnua Industries.",
  },
  {
    route: 'contact',
    file: 'contact.html',
    path: '/contact',
    title: 'Contact | DatumPane',
    description: 'Tell Adriel how your shop handles drawing changes today.',
  },
  {
    route: 'not-found',
    file: '404.html',
    path: '/404',
    title: 'Page not found | DatumPane',
    description: "This page doesn't exist.",
  },
];

export function render(route: Route): string {
  return renderToStaticMarkup(<App route={route} />);
}
