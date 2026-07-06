import React from 'react';
import './ProblemBlocks.css';

function ArrowMini() {
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
      <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Copy drafted from FEEDBACK-2026-07-06.md — pending Joseph's sign-off.
// Case-study links use the #slug anchors rendered by CaseRow.
const PROBLEMS = [
  {
    heading: 'Your team is buried in repetitive admin',
    body: 'Manual data entry, reconciliation, and copy-paste between systems eat hours every week and invite errors. We build workflow automations that take the mundane off your team’s plate, so the time goes back into work that grows the business.',
    href: '/case-studies#ahmad-co-accountant',
    linkLabel: 'See how an accounting practice saved 20 hours a week',
  },
  {
    heading: 'You know AI matters, but not where to start',
    body: 'Everyone says “use AI”; nobody says where it actually pays back. We audit your processes, find the highest-value opportunities, and prove them with a working pilot before you commit to anything big.',
    href: '/contact',
    linkLabel: 'Book an AI audit',
  },
  {
    heading: 'Leads and enquiries slip through the cracks',
    body: 'Slow responses lose deals, and busy teams can’t answer everything first. We build AI agents that qualify, triage, and route every enquiry in minutes, around the clock.',
    href: '/case-studies#hartwell-vine',
    linkLabel: 'Intake time cut from 45 minutes to 12',
  },
  {
    heading: 'Marketing never makes it off the to-do list',
    body: 'Your social channels go quiet the moment business gets busy, which is exactly when you need them working. We put content drafting and scheduling on autopilot, with you approving in one click.',
    href: '/case-studies#another-world',
    linkLabel: '8 hours a week back, 4 platforms synced',
  },
  {
    heading: 'Decisions run on gut feel, not data',
    body: 'Your numbers live in scattered spreadsheets and disconnected tools, so nobody sees the full picture. We unify your data into live dashboards that give you real-time visibility and confident decisions.',
    href: '/services',
    linkLabel: 'Explore data-driven insights',
  },
  {
    heading: 'Off-the-shelf software doesn’t fit how you work',
    body: 'Forcing your processes into generic tools costs more than it saves. We design and ship custom apps and portals shaped around your workflows, your tools, and your edge cases.',
    href: '/case-studies#simply-carers',
    linkLabel: 'A booking app that cut no-shows 38%',
  },
  {
    heading: 'Your website isn’t winning you customers',
    body: 'An outdated site quietly costs you credibility and orders every day. We build fast, branded websites designed to convert visitors into customers.',
    href: '/case-studies#hunnys-taste',
    linkLabel: 'From no online presence to taking orders',
  },
  {
    heading: 'Automation that nobody looks after',
    body: 'Systems drift, break, and lose your team’s trust when no one owns them. Our monthly retainers keep everything monitored, optimised, and growing, and you own every line of what we build.',
    href: '/contact',
    linkLabel: 'Talk to us about a retainer',
  },
];

export default function ProblemBlocks() {
  return (
    <>
      {PROBLEMS.map((p, i) => (
        <section className={`prob ${i % 2 === 0 ? 'prob--light' : 'prob--soft'}`} key={p.heading}>
          <div className="container prob-inner">
            <span className="prob-num">{String(i + 1).padStart(2, '0')}</span>
            <div className="prob-main">
              <h2 className="prob-h">{p.heading}</h2>
              <p className="prob-desc">{p.body}</p>
              <a className="prob-link" href={p.href}>
                <span>{p.linkLabel}</span>
                <ArrowMini />
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
