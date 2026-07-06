import React from 'react';
import './ProblemsHow.css';

const STEPS = [
  { title: 'Assess', desc: 'We audit your processes and find where automation pays back fastest.' },
  { title: 'Build', desc: 'Working software in weeks, not slide decks.' },
  { title: 'Adopt', desc: 'Training and handover so your team actually uses what we ship.' },
  { title: 'Optimise', desc: 'We measure, maintain, and extend it, and you own everything.' },
];

export default function ProblemsHow() {
  return (
    <>
      <section className="phow">
        <div className="container">
          <h2 className="phow-title">How we work with you</h2>
          <div className="phow-grid">
            {STEPS.map((s, i) => (
              <div className="phow-step" key={s.title}>
                <span className="phow-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="phow-step-h">{s.title}</h3>
                <p className="phow-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pcta">
        <div className="container pcta-inner">
          <h2 className="pcta-h">Ready to remove your biggest bottleneck?</h2>
          <p className="pcta-desc">
            Book a free consultation and we’ll show you where AI pays back first.
          </p>
          <a className="btn btn-primary btn-lg pcta-btn" href="/contact">Book a Free Consultation</a>
        </div>
      </section>
    </>
  );
}
