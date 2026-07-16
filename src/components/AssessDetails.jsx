import React from 'react';
import './AssessDetails.css';

// Dark card panels — same visual system as /problems (ProblemBlocks /
// ProblemsHow): navy section, #0e2740 panels, coloured right accent bars.
const STEPS = [
  {
    accent: 'orange',
    num: '1',
    heading: 'Tell us where your week goes',
    body: 'A 30-minute call. No pitch, no jargon — we just map where your business loses time: email, quoting, chasing invoices, admin, scheduling.',
  },
  {
    accent: 'green',
    num: '2',
    heading: 'We do the research',
    body: 'We analyse the conversation and research the tools that fix your specific bottlenecks. Off-the-shelf, small-business-sized, mostly £10–£30 a month. Nothing custom, nothing complicated.',
  },
  {
    accent: 'sky',
    num: '3',
    heading: 'You get the plan',
    body: 'A written report: 3–7 tool prescriptions matched to your pain points, the cost and setup time of each, a 4-day quick-start plan, and the monthly ROI in pounds. We walk you through it on a 30-minute call.',
  },
];

const REPORT = [
  { lead: 'Your top time drains', text: 'quantified in hours per week' },
  { lead: 'Tool prescriptions', text: 'each one: what it fixes, what it costs, setup time, hours saved' },
  { lead: 'A 4-day quick-start plan', text: 'under 10 minutes a day to switch the quick wins on' },
  { lead: 'Your financial impact', text: 'hours reclaimed × what your time is worth, minus tool costs' },
  { lead: 'What comes next', text: 'the bigger opportunities we spotted, if you ever want to go further' },
];

export default function AssessDetails() {
  return (
    <section className="assess-details">
      <div className="container">
        <h2 className="assess-details-h">How It Works</h2>
        <div className="assess-steps">
          {STEPS.map((s) => (
            <article className={`assess-card assess-card--${s.accent}`} key={s.heading}>
              <div className="assess-card-body">
                <span className="assess-step-num" aria-hidden="true">{s.num}</span>
                <h3 className="assess-card-h">{s.heading}</h3>
                <p className="assess-card-desc">{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        <article className="assess-panel assess-panel--sky">
          <h2 className="assess-panel-h">What&rsquo;s in Your Report</h2>
          <ul className="assess-list">
            {REPORT.map((r) => (
              <li key={r.lead}>
                <strong>{r.lead}</strong> — {r.text}
              </li>
            ))}
          </ul>
        </article>

        <div className="assess-pair">
          <article className="assess-panel assess-panel--green">
            <h2 className="assess-panel-h">Why Free?</h2>
            <p className="assess-panel-p">
              Because it&rsquo;s how we earn trust. Some businesses take the report and
              implement it themselves — genuinely fine by us. Others ask us to build the
              bigger things the assessment uncovers. Either way, you get the full report
              and the full value. No strings.
            </p>
          </article>

          <article className="assess-panel assess-panel--orange">
            <h2 className="assess-panel-h">Who It&rsquo;s For</h2>
            <p className="assess-panel-p">
              Businesses with 2–20 people who are too busy running the business to figure
              out AI. If you&rsquo;re an owner or director and your week is full of work a
              tool should be doing, this is for you.
            </p>
            <p className="assess-panel-note">
              Not for: pre-revenue startups, hobby projects, or anyone just curious about
              AI — the slots are limited and we protect them.
            </p>
          </article>
        </div>

        <article className="assess-panel assess-panel--yellow assess-guarantee">
          <h2 className="assess-panel-h">The Guarantee</h2>
          <p className="assess-panel-p">
            If we can&rsquo;t find you at least <strong>5 hours a week</strong> in genuine
            time savings, we&rsquo;ll tell you straight — and you&rsquo;ve spent 30
            minutes, nothing more.
          </p>
        </article>
      </div>
    </section>
  );
}
