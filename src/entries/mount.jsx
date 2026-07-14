import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

// `npm run build` prerenders every page to static HTML (scripts/prerender.mjs),
// so in production #root already holds markup and we hydrate it rather than
// throwing it away and re-rendering. Under `vite dev` the container is empty,
// so fall back to a plain client render.
export default function mount(node) {
  const el = document.getElementById('root');
  const app = <React.StrictMode>{node}</React.StrictMode>;

  if (el.firstChild) {
    hydrateRoot(el, app);
  } else {
    createRoot(el).render(app);
  }
}
