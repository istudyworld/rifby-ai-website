import React from 'react';
import './Process.css';

const check = '/figma/home/icons/check.svg';

function Checklist({ items }) {
  return (
    <ul className="step-checklist">
      {items.map((t) => (
        <li key={t}><img src={check} alt="" aria-hidden="true" /><span>{t}</span></li>
      ))}
    </ul>
  );
}

function WeekBadge({ week, tone }) {
  return (
    <span className={`step-week step-week-${tone}`}>
      <span>Week</span><span>{week}</span>
    </span>
  );
}

const SMALL_STEPS = [
  {
    tone: 'green', img: 'step-design', title: 'Design', week: '3-4',
    desc: 'We prototype the highest-leverage agent first. You see a working POC within three weeks, not a deck.',
    items: ['Architecture Decisions Documented', 'POC in your Environment', 'Weekly Demos'],
  },
  {
    tone: 'peach', img: 'step-automate', title: 'Automate', week: '5-6',
    desc: 'We ship, measure, and hand off. Documentation, training, and runbooks so your team owns the system, not us.',
    items: ['Production Rollout', 'Dashboards Live', 'Full IP Handoff'],
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="container process-inner">
        <div className="process-left">
          <img className="process-star" src="/figma/home/stars/star-blue-sm.svg" alt="" aria-hidden="true" />
          <span className="process-label">Process</span>
          <h2 className="process-title">From Idea to Launch in 3 Steps</h2>
        </div>

        <div className="process-right">
          {/* Discover — wide card */}
          <div className="step-discover">
            <div className="step-discover-img">
              <img src="/figma/home/step-discover.png" alt="Discovery workshop" />
            </div>
            <div className="step-discover-body">
              <div className="step-text">
                <h3 className="step-title">Discover</h3>
                <p className="step-desc step-desc-blue">
                  Two workshops. We map your real workflows, find the pain that compounds,
                  agree on measurable outcomes and a fixed monthly rate.
                </p>
              </div>
              <div className="step-foot">
                <Checklist items={['TMAP Drafted', 'Success Criteria Signed', 'Scope Locked']} />
                <WeekBadge week="1-2" tone="blue" />
              </div>
            </div>
          </div>

          {/* Design + Automate */}
          <div className="step-row">
            {SMALL_STEPS.map((s) => (
              <div className={`step-card step-card-${s.tone}`} key={s.title}>
                <div className="step-card-img">
                  <img src={`/figma/home/${s.img}.png`} alt={s.title} />
                </div>
                <div className="step-card-body">
                  <div className="step-text">
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                  <div className="step-foot">
                    <Checklist items={s.items} />
                    <WeekBadge week={s.week} tone={s.tone} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
