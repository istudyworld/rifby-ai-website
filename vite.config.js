import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const root = import.meta.dirname;

// Rewrite extensionless nav URLs (/services -> /services.html) so the clean
// hrefs in <Nav> resolve in both `vite` (dev) and `vite preview`.
// Production (Vercel) does this via its own "cleanUrls" rewrite.
function cleanUrls() {
  const routes = {
    '/about': '/about.html',
    '/services': '/services.html',
    '/case-studies': '/case-studies.html',
    '/contact': '/contact.html',
    '/privacy': '/privacy.html',
    '/terms': '/terms.html',
    '/cookies': '/privacy.html',
  };
  const mw = (req, _res, next) => {
    const path = (req.url || '/').split('?')[0].replace(/\/+$/, '');
    if (routes[path]) req.url = routes[path] + (req.url.slice(path.length));
    next();
  };
  return {
    name: 'clean-urls',
    configureServer(server) { server.middlewares.use(mw); },
    configurePreviewServer(server) { server.middlewares.use(mw); },
  };
}

export default defineConfig({
  plugins: [react(), cleanUrls()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about.html'),
        // Pages are added here as they are built (Figma redesign, page by page):
        services: resolve(root, 'services.html'),
        'case-studies': resolve(root, 'case-studies.html'),
        contact: resolve(root, 'contact.html'),
        privacy: resolve(root, 'privacy.html'),
        terms: resolve(root, 'terms.html'),
      },
    },
  },
});
