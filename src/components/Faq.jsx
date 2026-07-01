import React, { useState } from 'react';
import './Faq.css';

function Chevron({ open }) {
  return (
    <svg
      className={`faq-chevron${open ? ' is-open' : ''}`}
      width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"
    >
      <path d="M8 12l8 8 8-8" stroke="#141b34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ITEMS = [
  {
    q: 'What Does An Engagement Actually Cost?',
    a: 'Pricing is bespoke per engagement, agreed during discovery. After the discovery phase we agree on a fixed monthly rate tied to a TMAP with clear deliverables. Typical engagements run 3-6 months.',
  },
  {
    q: 'How Fast Will I See Something Working?',
    a: 'You see a working proof of concept within three weeks of kickoff, not a slide deck. We prototype the highest-leverage agent first and demo progress every week.',
  },
  {
    q: 'Who Owns The IP?',
    a: 'You do, on day one. Every line of code, every workflow, and full documentation is yours. We hand off runbooks and training so your team can run the system without us.',
  },
  {
    q: 'What Happens If We Want To Leave?',
    a: 'Nothing locks you in. You keep the code, the docs, and the access. We build for handoff from the start, so you can take it in-house or move on whenever you choose.',
  },
  {
    q: 'What Industries Do You Work In?',
    a: 'We work across SaaS, professional services, e-commerce, and operations-heavy businesses. The common thread is repetitive, high-volume workflows that AI and automation can measurably improve.',
  },
  {
    q: 'Custom Build Or Off The Shelf?',
    a: 'Whatever serves the outcome. We use n8n, Zapier, or off-the-shelf tools when they fit, and build custom only where they fall short. We pick based on what you will actually maintain.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq">
      <img className="faq-star" src="/figma/home/stars/star-orange-outline.svg" alt="" aria-hidden="true" />
      <div className="container faq-inner">
        <div className="faq-left">
          <h2 className="faq-title">Question</h2>
          <p className="faq-subtitle">Everything You Need to Know Plainly Answered</p>
        </div>

        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <Chevron open={isOpen} />
                </button>
                {isOpen && <p className="faq-a">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
