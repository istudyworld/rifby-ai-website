import React from 'react';
import Nav from '../components/Nav.jsx';
import AboutHero from '../components/AboutHero.jsx';
import AboutStats from '../components/AboutStats.jsx';
import AboutServices from '../components/AboutServices.jsx';
import AboutTeam from '../components/AboutTeam.jsx';
import AboutPrinciples from '../components/AboutPrinciples.jsx';
import Team from '../components/Team.jsx';
import Footer from '../components/Footer.jsx';

export default function About() {
  return (
    <main>
      <section className="ahero">
        <Nav />
        <AboutHero />
      </section>
      <AboutStats />
      <AboutServices />
      <AboutTeam />
      <AboutPrinciples />
      <Team />
      <Footer />
    </main>
  );
}
