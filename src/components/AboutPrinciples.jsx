import React from 'react';
import './AboutPrinciples.css';

function ArrowRight({ color = '#18181a' }) {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden="true">
      <path d="M0 6h22M17 1l5 5-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const VALUES = [
  { icon: 'v1', title: 'Outcomes not hours', desc: 'Fixed monthly rate tied to a measurable TMAP. We win when your bottleneck moves, not when the timesheet fills.' },
  { icon: 'v2', title: 'Working Software in Three Weeks', desc: 'Not a deck, not a demo. A POC running in your environment within 21 days of kickoff, or we don’t bill the next cycle.' },
  { icon: 'v3', title: 'You own everything', desc: 'Code, workflows, data, runbooks, all yours from day one. If we part ways, you keep operating without us.' },
  { icon: 'v4', title: 'No generic chatbots', desc: 'Every agent is custom-built around your workflows, your tools, your edge cases. Off-the-shelf is rarely the answer.' },
];

export default function AboutPrinciples() {
  return (
    <section className="ap">
      <div className="container">
        <span className="ap-label">How we work</span>
        <div className="ap-row">
          <div className="ap-left">
            <div className="ap-head">
              <h2 className="ap-title">For principals no Exceptions</h2>
              <p className="ap-desc">
                We believe true success comes from staying committed to our core values,
                every step of the way.
              </p>
            </div>
            <a className="btn btn-primary ap-cta" href="/services">
              <span>Learn more</span><ArrowRight color="#fff" />
            </a>
          </div>

          <div className="ap-grid">
            {VALUES.map((v) => (
              <div className="ap-item" key={v.title}>
                <img className="ap-item-icon" src={`/figma/about/icons/${v.icon}.svg`} alt="" aria-hidden="true" />
                <div className="ap-item-body">
                  <h3 className="ap-item-title">{v.title}</h3>
                  <p className="ap-item-desc">{v.desc}</p>
                </div>
                <span className="ap-item-arrow"><ArrowRight /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
