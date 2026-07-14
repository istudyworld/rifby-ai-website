import React from 'react';
import './AboutHero.css';

const INFO = [
  { label: 'Founded', value: '2025, United Kingdom' },
  { label: 'Model', value: 'Senior team, outcome-priced, fully owned by you' },
  { label: 'Stack', value: 'n8n, Python, OpenAI, custom dashboards' },
];

export default function AboutHero() {
  return (
    <div className="container ahero-inner">
        <div className="ahero-photo">
          <img src="/figma/about/hero.webp" alt="Rifby AI working with a client" />
        </div>

        <div className="ahero-right">
          <h1 className="ahero-h1">
            <span className="ahero-line">
              The Smarter
              <img className="ahero-chip ahero-chip1" src="/figma/about/chip1.webp" alt="" aria-hidden="true" />
              AI
            </span>
            <span className="ahero-line">
              For Small
              <img className="ahero-chip ahero-chip2" src="/figma/about/chip2.webp" alt="" aria-hidden="true" />
              Business
            </span>
            <span className="ahero-line">Growth</span>
          </h1>

          <a className="btn btn-primary btn-lg ahero-cta" href="/contact">Book a Strategy Call</a>

          <div className="ahero-bottom">
            <p className="ahero-desc">
              Automate routine work, engage customers faster, and grow your business with AI
              that delivers real results.
            </p>

            <div className="ahero-info">
              <span className="ahero-info-rule" />
              <div className="ahero-info-list">
                {INFO.map((item, i) => (
                  <div className="ahero-info-item" key={item.label}>
                    <span className="ahero-info-label">{item.label}</span>
                    <span className="ahero-info-value">{item.value}</span>
                    {i < INFO.length - 1 && <span className="ahero-info-line" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
