import React from 'react';
import './AboutServices.css';

const CARDS = [
  {
    img: 'svc-automation', badge: 'Build & Ship', title: 'Custom Automation',
    desc: 'n8n workflows, custom agents, integrations. We design, prototype, and deploy the highest-leverage system first, not the easiest one.',
  },
  {
    img: 'svc-software', badge: 'Apps & Portals', title: 'Custom Software',
    desc: 'Bespoke web apps, internal tools, and client portals for when off-the-shelf software cannot do the job. Production-grade, documented, and owned by you.',
  },
  {
    img: 'svc-insights', badge: 'Dashboard & Decision', title: 'Data Driven Insights',
    desc: 'The system you ship is only as good as what it tells you. Custom analytics, real-time dashboards, and the runbooks to act on them.',
  },
];

export default function AboutServices() {
  return (
    <section className="asvc">
      <div className="container">
        <h2 className="asvc-title">
          We Help You Move The Work <span className="asvc-highlight">That Compounds</span>
        </h2>

        <div className="asvc-stack">
          {/* AI Strategy feature row */}
          <div className="asvc-feature">
            <div className="asvc-feature-img">
              <img src="/figma/about/svc-strategy.png" alt="AI strategy workshop" />
            </div>
            <div className="asvc-feature-body">
              <span className="asvc-badge">Discovery &amp; TMAP</span>
              <div className="asvc-feature-text">
                <h3 className="asvc-feature-h">AI Strategy</h3>
                <p className="asvc-feature-desc">
                  Two workshops. We map your real workflows, find the pain that compounds,
                  and agree on measurable outcomes before a single line of code is written.
                </p>
              </div>
            </div>
          </div>

          {/* 3 cards */}
          <div className="asvc-cards">
            {CARDS.map((c) => (
              <article className="asvc-card" key={c.title}>
                <div className="asvc-card-img">
                  <img src={`/figma/about/${c.img}.png`} alt={c.title} />
                </div>
                <div className="asvc-card-body">
                  <span className="asvc-badge">{c.badge}</span>
                  <div className="asvc-card-text">
                    <h3 className="asvc-card-h">{c.title}</h3>
                    <p className="asvc-card-desc">{c.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
