import React from 'react';
import './CasesHero.css';

export default function CasesHero({ categories = ['All'], active = 'All', onSelect = () => {} }) {
  return (
    <div className="chero">
      <div className="container chero-grid">
        <div className="chero-left">
          <h1 className="chero-h1">
            <span className="chero-box">Proof Over Promises</span>
            <span className="chero-rest"> Performance Over Claims</span>
          </h1>
          <p className="chero-desc">
            A selection of recent work, AI automations, custom apps, and websites built for
            real businesses solving real bottlenecks.
          </p>
          <a className="btn btn-primary chero-cta" href="/contact">Book a Strategy Call</a>
        </div>

        <div className="chero-photo">
          <img src="/figma/cases/hero.webp" alt="The Rifby AI team working with a client" />
        </div>
      </div>

      <div className="chero-filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`chero-chip${active === c ? ' is-active' : ''}`}
            onClick={() => onSelect(c)}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
