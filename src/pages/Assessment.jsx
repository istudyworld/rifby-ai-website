import React from 'react';
import Nav from '../components/Nav.jsx';
import AssessHero from '../components/AssessHero.jsx';
import AssessDetails from '../components/AssessDetails.jsx';
import AssessFaq from '../components/AssessFaq.jsx';
import Footer from '../components/Footer.jsx';

export default function Assessment() {
  return (
    <main>
      <section className="assess-hero-section">
        <Nav />
        <AssessHero />
      </section>
      <AssessDetails />
      <AssessFaq />
      <Footer />
    </main>
  );
}
