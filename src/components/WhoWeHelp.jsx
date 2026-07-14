import React from 'react';
import './WhoWeHelp.css';

// "Who We Help" sector strip, modelled on cps.co.uk (Joseph's reference,
// 2026-07-06). Sectors with a matching case study deep-link to its row
// anchor on this page; the rest are static pills.
const SECTORS = [
  { label: 'Construction', tone: 'yellow' },
  { label: 'Education', tone: 'orange', href: '#isw-consulting' },
  { label: 'Finance', tone: 'blue', href: '#ahmad-co-accountant' },
  { label: 'Healthcare', tone: 'red', href: '#simply-carers' },
  { label: 'Retail', tone: 'green', href: '#hunnys-taste' },
  { label: 'Professional Services', tone: 'yellow', href: '#hartwell-vine' },
  { label: 'SMEs', tone: 'sky' },
];

export default function WhoWeHelp() {
  return (
    <section className="wwh">
      <div className="container wwh-inner">
        <h2 className="wwh-title">Who We <span className="wwh-hl">Help</span></h2>
        <p className="wwh-lede">Believe in a better way to work.</p>
        <p className="wwh-body">
          Our AI automation and agentic solutions are designed to inspire, engage,
          and elevate your operations.
        </p>
        <p className="wwh-body">
          From healthcare to finance, education to retail, our expertise spans
          sectors, helping businesses unlock their full potential. With tailored
          strategies and a collaborative approach, we empower organisations to
          embrace change, drive growth, and achieve more with less.
        </p>

        <div className="wwh-pills">
          {SECTORS.map((s) =>
            s.href ? (
              <a key={s.label} className={`wwh-pill wwh--${s.tone}`} href={s.href}>
                {s.label}
              </a>
            ) : (
              <span key={s.label} className={`wwh-pill wwh--${s.tone}`}>{s.label}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
