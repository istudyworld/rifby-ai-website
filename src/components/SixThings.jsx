import React from 'react';
import './SixThings.css';

const CARDS = [
  {
    icon: 'ai-chip', img: 'card-ai', title: 'Custom AI Agents',
    desc: 'Agents that handle the long tail of workflows no SaaS tool covers — scoped, tested, owned by you.',
  },
  {
    icon: 'software', img: 'card-software', title: 'Custom Software',
    desc: 'Bespoke web apps, internal tools, and client portals for when off-the-shelf software cannot do the job.',
  },
  {
    icon: 'workflow', img: 'card-workflow', title: 'Workflow Automation',
    desc: 'n8n, Zapier, or custom — the right tool for the job. We pick based on what you want to maintain.',
  },
  {
    icon: 'analytics', img: 'card-analytics', title: 'Analytics & Data',
    desc: 'Clean pipelines plus real-time dashboards on the metrics your automations actually move. No vanity KPIs.',
  },
  {
    icon: 'road', img: 'card-strategy', title: 'AI Strategy & Roadmapping',
    desc: 'A TMAP (technical mutual action plan) with deliverables, timelines, and what we will not do.',
  },
  {
    icon: 'shield', img: 'card-handoff', title: 'Handoff & Ownership',
    desc: 'You own the IP on day one. Full docs, training, runbooks. Leave any time.',
  },
];

const ICON = (n) => `/figma/home/icons/${n}.svg`;
const IMG = (n) => `/figma/home/cards/${n}.webp`;

export default function SixThings() {
  return (
    <section className="deliberate">
      <div className="container">
        <div className="delib-card">
          {/* decorative stars */}
          <img className="delib-star star-blue" src="/figma/home/stars/star-blue.svg" alt="" aria-hidden="true" />
          <img className="delib-star star-orange" src="/figma/home/stars/star-orange.svg" alt="" aria-hidden="true" />
          <img className="delib-star star-blue-lg" src="/figma/home/stars/star-blue-lg.svg" alt="" aria-hidden="true" />

          <div className="delib-header">
            <h2 className="delib-title">Six Things Done Deliberately<br />The Rest is Noise</h2>
            <p className="delib-sub">
              Everything we do is guided by six deliberate choices that deliver measurable value.
            </p>
            <a className="btn btn-primary btn-lg" href="/contact">Book a Strategy Call</a>
          </div>

          <div className="delib-grid">
            {CARDS.map((c) => (
              <article className="delib-item" key={c.title}>
                <div className="delib-item-img">
                  <img src={IMG(c.img)} alt={c.title} />
                </div>
                <div className="delib-item-body">
                  <div className="delib-item-head">
                    <img className="delib-item-icon" src={ICON(c.icon)} alt="" aria-hidden="true" />
                    <h3 className="delib-item-title">{c.title}</h3>
                  </div>
                  <p className="delib-item-desc">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
