import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import CaseStudies from '../pages/CaseStudies.jsx';
import Contact from '../pages/Contact.jsx';
import Problems from '../pages/Problems.jsx';
import Privacy from '../pages/Privacy.jsx';
import Terms from '../pages/Terms.jsx';

// Built HTML file -> page component. Mirrors rollupOptions.input in
// vite.config.js; a page added there must be added here too or it ships
// with an empty <div id="root">.
export const PAGES = {
  'index.html': Home,
  'about.html': About,
  'services.html': Services,
  'case-studies.html': CaseStudies,
  'contact.html': Contact,
  'problems.html': Problems,
  'privacy.html': Privacy,
  'terms.html': Terms,
};

export function render(file) {
  const Component = PAGES[file];
  if (!Component) throw new Error(`No page component registered for ${file}`);
  return renderToString(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
}
