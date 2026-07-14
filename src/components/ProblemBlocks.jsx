import React from 'react';
import './ProblemBlocks.css';

// Layout modelled on cps.co.uk/problems-we-solve (Joseph's reference,
// 2026-07-06): dark 2-col card grid, colored right accent bar per card,
// colored pill CTA. Copy is Rifby's own — no Microsoft references.
const PROBLEMS = [
  {
    accent: 'orange',
    heading: 'Turning Digital Transformation into Real Outcomes',
    body: 'Digital transformation shouldn’t mean expensive tools and buzzwords. Rifby helps you build a clear, actionable roadmap, connecting people, processes, and data through AI and automation. Discover how strategy, not just software, can drive meaningful change.',
    cta: 'Digital Transformation That Delivers Real Change',
    href: '/services#custom-software',
  },
  {
    accent: 'green',
    heading: 'Adopting AI Strategically Across Your Organisation',
    body: 'Embrace AI that empowers your people, not replaces them. Rifby guides you in building a practical, business-focused AI strategy grounded in trusted data, robust governance, and real-world impact. See how intelligent automation can transform your operations, safely and at scale.',
    cta: 'AI That Works for You, Not the Other Way Around',
    href: '/services#custom-automation',
  },
  {
    accent: 'yellow',
    heading: 'Automate the Mundane',
    body: 'Free your team from repetitive, low-value tasks with intelligent automation. Rifby builds workflow automations and AI agents that streamline processes, reduce manual effort, and let your people focus on what matters most. Explore how automation can drive efficiency and measurable ROI.',
    cta: 'Reduce Manual Processes, Automate the Mundane',
    href: '/case-studies#ahmad-co-accountant',
  },
  {
    accent: 'red',
    heading: 'Get Real-Time Reporting',
    body: 'Stop chasing data and start making confident decisions. Rifby unifies your business intelligence with live dashboards and real-time reporting, giving you instant visibility across projects, customers, and departments. Learn how connected insights can fuel better outcomes.',
    cta: 'Get Real-Time Insight with Unified Reporting',
    href: '/services#data-insights',
  },
  {
    accent: 'orange',
    heading: 'Deliver Projects on Time',
    body: 'Take control of your delivery with unified, real-time management. Rifby brings order to the chaos with automated tracking and AI-driven reporting, ensuring every project is visible, predictable, and aligned to your business goals. Find out how to deliver on time, every time.',
    cta: 'Deliver Projects on Time, Every Time',
    href: '/case-studies#tmtam-studio',
  },
  {
    accent: 'blue',
    heading: 'Stay Compliant and Secure in a Changing World',
    body: 'Protect your data, strengthen governance, and stay ahead of evolving threats. Rifby builds automation with security and compliance baked in, keeping your systems safe, auditable, and productive no matter how the landscape changes. See how you can turn compliance into a business strength.',
    cta: 'Protect Your People, Data, and Operations',
    href: '/services#ai-strategy',
  },
  {
    accent: 'sky',
    heading: 'Stop Losing Leads to Slow Follow-Up',
    body: 'Every slow reply is a deal quietly walking out the door. Rifby builds AI agents that qualify, triage, and respond to every enquiry in minutes, around the clock, so no lead goes cold while your team is busy. See how faster follow-up turns into won business.',
    cta: 'Respond to Every Lead in Minutes',
    href: '/services#custom-automation',
  },
  {
    accent: 'green',
    heading: 'Keep Your Brand Visible on Autopilot',
    body: 'Your marketing goes quiet exactly when business gets busy, which is when you need it most. Rifby puts content drafting, approval, and scheduling on autopilot across your channels, keeping your brand in front of customers without stealing hours from the week.',
    cta: 'Stay Visible Without the Overhead',
    href: '/case-studies#another-world',
  },
];

export default function ProblemBlocks() {
  return (
    <section className="pblocks">
      <div className="container">
        <div className="pblocks-grid">
          {PROBLEMS.map((p) => (
            <article className={`pcard pcard--${p.accent}`} key={p.heading}>
              <div className="pcard-body">
                <h2 className="pcard-h">{p.heading}</h2>
                <p className="pcard-desc">{p.body}</p>
                <a className="pcard-cta" href={p.href}>{p.cta}</a>
              </div>
            </article>
          ))}
        </div>

        <article className="pcard pcard--orange pcard--wide">
          <div className="pcard-body">
            <h2 className="pcard-h">One Accountable Partner for Your Entire Journey</h2>
            <p className="pcard-desc">
              Experience end-to-end AI and automation expertise with a single, accountable
              partner. Rifby delivers strategy, implementation, security, and ongoing
              support across your whole stack, removing complexity and ensuring seamless
              results. See why growing businesses trust Rifby for their automation journey.
            </p>
            <a className="pcard-cta" href="/about">One Partner for Your Entire Journey</a>
          </div>
        </article>
      </div>
    </section>
  );
}
