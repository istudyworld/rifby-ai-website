import React from 'react';
import Nav from '../components/Nav.jsx';
import ContactHero from '../components/ContactHero.jsx';
import ContactFeatures from '../components/ContactFeatures.jsx';
import ContactFaq from '../components/ContactFaq.jsx';
import ContactTeam from '../components/ContactTeam.jsx';
import Footer from '../components/Footer.jsx';

export default function Contact() {
  return (
    <main>
      <section className="cbook-section">
        <Nav />
        <ContactHero />
      </section>
      <ContactFeatures />
      <ContactFaq />
      <ContactTeam />
      <Footer />
    </main>
  );
}
