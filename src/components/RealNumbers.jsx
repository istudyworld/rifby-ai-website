import React from 'react';
import './RealNumbers.css';

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STATS = [
  { num: '17hrs', label: 'Average Operating Cost Cut' },
  { num: '42%', label: 'Reclaimed Per Employee/Week' },
  { num: '3wk', label: 'First Production PoC' },
];

export default function RealNumbers() {
  return (
    <section className="real-numbers">
      <div className="container rn-inner">
        <div className="rn-photo">
          <img src="/figma/home/real-numbers.png" alt="Team reviewing business data together" />
        </div>

        <div className="rn-right">
          <div className="rn-content">
            <div className="rn-head">
              <h2 className="rn-title">
                Real Numbers. Real <span className="blue">Business</span> Value
              </h2>
              <p className="rn-sub">
                Make confident decisions backed by accurate data and measurable results.
                Our solutions transform complex financial information.
              </p>
            </div>

            <div className="rn-stats">
              {STATS.map((s, i) => (
                <React.Fragment key={s.num}>
                  {i > 0 && <span className="rn-divider" />}
                  <div className="rn-stat">
                    <span className="rn-stat-num">{s.num}</span>
                    <span className="rn-stat-label">{s.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <a className="btn btn-primary rn-cta" href="/services">
            <span>Learn More</span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
