import React from 'react';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import RealNumbers from '../components/RealNumbers.jsx';
import SixThings from '../components/SixThings.jsx';
import Testimonial from '../components/Testimonial.jsx';
import Process from '../components/Process.jsx';
import Faq from '../components/Faq.jsx';
import Team from '../components/Team.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Nav />
        <Hero />
      </section>
      <RealNumbers />
      <SixThings />
      <Testimonial />
      <Process />
      <Faq />
      <Team />
      <Footer />
    </main>
  );
}
