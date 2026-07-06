import React from 'react';
import Nav from '../components/Nav.jsx';
import ProblemsHero from '../components/ProblemsHero.jsx';
import ProblemBlocks from '../components/ProblemBlocks.jsx';
import ProblemsHow from '../components/ProblemsHow.jsx';
import Footer from '../components/Footer.jsx';

export default function Problems() {
  return (
    <main>
      <section className="phero-section">
        <Nav />
        <ProblemsHero />
      </section>
      <ProblemBlocks />
      <ProblemsHow />
      <Footer />
    </main>
  );
}
