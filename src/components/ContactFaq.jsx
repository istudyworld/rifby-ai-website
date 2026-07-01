import React, { useState } from 'react';
import './ContactFaq.css';

function Toggle({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 14l6-6 6 6" stroke="#18181a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M6 10l6 6 6-6" stroke="#18181a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

const ITEMS = [
  {
    q: 'How long until something ships',
    a: 'Pricing is bespoke per engagement, agreed during discovery. After the discovery phase we agree on a fixed monthly rate tied to a TMAP with clear deliverables. Typical engagements run 3-6 months.',
  },
  {
    q: 'Do I own what we build',
    a: 'You do, on day one. Every line of code, every workflow, and full documentation is yours. We hand off runbooks and training so your team can run the system without us.',
  },
  {
    q: "What if I don't know what to automate yet",
    a: "That's what the call is for. We map your workflow, find the highest-leverage bottleneck, and tell you what is worth automating first, with or without us.",
  },
  {
    q: 'Do you support what you build',
    a: 'Yes. We offer optional retainers for monitoring, optimisation, and expansion, but you are never locked in. The system is yours to run in-house whenever you choose.',
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="cfaq">
      <span className="cfaq-star" aria-hidden="true">
        <svg width="286" height="286" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 4c4 22 20 38 42 42-22 4-38 20-42 42-4-22-20-38-42-42 22-4 38-20 42-42z"
            stroke="#e96800" strokeWidth="14" strokeLinejoin="round"
          />
        </svg>
      </span>

      <div className="container cfaq-inner">
        <div className="cfaq-intro">
          <h2 className="cfaq-title">Before You Book</h2>
          <p className="cfaq-sub">Everything You Need to Know Plainly Answered</p>
        </div>

        <div className="cfaq-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`cfaq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <button className="cfaq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <Toggle open={isOpen} />
                </button>
                {isOpen && <p className="cfaq-a">{item.a}</p>}
                {i < ITEMS.length - 1 && <span className="cfaq-line" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
