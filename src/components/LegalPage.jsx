import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import './LegalPage.css';

// Generic legal / policy page shell. Content is intentionally a concise,
// honest placeholder — replace with full reviewed policy copy before launch.
export default function LegalPage({ title, updated, children }) {
  return (
    <main>
      <section className="legal-top">
        <Nav />
        <div className="container legal-head">
          <h1 className="legal-title">{title}</h1>
          {updated && <p className="legal-updated">Last updated {updated}</p>}
        </div>
      </section>

      <article className="container legal-body">{children}</article>

      <Footer />
    </main>
  );
}
