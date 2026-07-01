import React from 'react';
import './ContactFeatures.css';

function ClockIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#101111" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="#101111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StepIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7h9a4 4 0 0 1 0 8H8" stroke="#101111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11l-2 4 2 4" stroke="#101111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function NeqIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9.5h12M6 14.5h12" stroke="#101111" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 5L9 19" stroke="#101111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path d="M1 7h17M12 1l6 6-6 6" stroke="#0060ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ITEMS = [
  {
    icon: <ClockIcon />,
    title: 'The 10 minute scan',
    body: 'We walk through your current workflow and flag where the biggest leaks are repetitive tasks, tool gaps, data bottlenecks.',
  },
  {
    icon: <StepIcon />,
    title: 'A concrete next step',
    body: 'One specific thing you could automate or build first scoped, sequenced, and realistic for your team.',
  },
  {
    icon: <NeqIcon />,
    title: 'No obligation',
    body: 'You leave with a clear plan. If it makes sense to build it together, we talk scope. If not, you still got the plan.',
  },
];

export default function ContactFeatures() {
  return (
    <section className="cfeat">
      <div className="container cfeat-grid">
        {ITEMS.map((it, i) => (
          <div className="cfeat-col" key={it.title}>
            {i > 0 && <span className="cfeat-divider" aria-hidden="true" />}
            <div className="cfeat-icon">{it.icon}</div>
            <h3 className="cfeat-title">{it.title}</h3>
            <p className="cfeat-body">{it.body}</p>
            <a className="cfeat-link" href="/contact">Learn more <Arrow /></a>
          </div>
        ))}
      </div>
    </section>
  );
}
