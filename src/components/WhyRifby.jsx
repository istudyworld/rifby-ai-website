import React from 'react';
import './WhyRifby.css';

function Tick() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="10" stroke="var(--blue)" strokeWidth="1.5" />
      <path d="m6.5 11.2 3 3 6-6.4" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DIFFERENTIATORS = [
  'Outcome-driven delivery, not just technical implementation',
  'Human-centred design and a business-led approach',
  'Working software in weeks, not slide decks',
  'You own everything we build: code, workflows, and data',
  'Flexible engagement, from one-off builds to monthly retainers',
  'Governance and scalable foundations built in from day one',
  'Long-term partnership and continuous improvement',
];

export default function WhyRifby() {
  return (
    <section className="why">
      <div className="container">
        <div className="why-row">
          <div className="why-left">
            <h2 className="why-title">
              Why <span className="why-highlight">Rifby?</span>
            </h2>
            <div className="why-copy">
              <p>
                At Rifby, your goals come first. We focus on people and outcomes, and treat AI
                and automation as the means, not the end: the way to create real, measurable
                impact for your organisation. With hands-on expertise across agentic AI,
                workflow automation, and custom software, we make sure you get the right tools,
                implemented the right way.
              </p>
              <p>
                We build on today’s leading AI platforms and automation tools, so you benefit
                from the newest capabilities without being locked into a single vendor. And
                because every engagement starts small, with an audit or a working proof of
                concept before any big commitment, you de-risk the investment and see value in
                weeks rather than months.
              </p>
              <p>
                From discovery to delivery and ongoing optimisation, we work alongside your
                team to align technology with your people, your processes, and your
                priorities: strengthening governance, driving adoption, and delivering
                outcomes you can measure.
              </p>
            </div>
            <p className="why-close">
              Let’s make AI work for you, and make great things happen together.
            </p>
          </div>

          <div className="why-right">
            <h3 className="why-sub">What sets us apart</h3>
            <ul className="why-list">
              {DIFFERENTIATORS.map((d) => (
                <li className="why-item" key={d}>
                  <span className="why-tick"><Tick /></span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
