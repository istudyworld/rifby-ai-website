import React from 'react';
import './ServicesHero.css';

export default function ServicesHero() {
  return (
    <div className="shero-grid">
      <div className="shero-photo">
        <img src="/figma/services/hero.webp" alt="A founder working at a laptop" />
      </div>

      <div className="shero-text">
        <h1 className="shero-h1">
          <span className="shero-hl">Four Services</span>
          <br />One Outcome
          <br />time Back
        </h1>
        <p className="shero-desc">
          Pick the entry point that matches where you are. Every engagement ends with your
          team owning the result, not renting it from us.
        </p>
        <a className="btn btn-primary btn-md shero-cta" href="#services">Explore our services</a>
      </div>
    </div>
  );
}
