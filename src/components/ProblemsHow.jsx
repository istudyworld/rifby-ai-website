import React from 'react';
import './ProblemsHow.css';

// "Why choose" panel + enquiry form panel — layout modelled on
// cps.co.uk/problems-we-solve (Joseph's reference, 2026-07-06).
const HELPS = [
  { lead: 'Strategise', text: 'Align AI and automation with your organisation’s goals' },
  { lead: 'Implement', text: 'Ship working systems in weeks, built on proven patterns' },
  { lead: 'Adopt', text: 'Drive change through training, handover, and support' },
  { lead: 'Optimise', text: 'Measure and evolve performance as your business grows' },
];

const ENQUIRY_AREAS = [
  'AI Agents & Automation',
  'Workflow Automation',
  'Real-Time Reporting',
  'Custom Software',
  'Web & App Development',
  'Social Media Automation',
];

export default function ProblemsHow() {
  return (
    <section className="pwhy">
      <div className="container">
        <article className="pwhy-panel">
          <h2 className="pwhy-h">Why Businesses Choose Rifby</h2>
          <p className="pwhy-lede">
            Rifby brings <strong>AI strategy, automation engineering, and custom software</strong>{' '}
            together under one roof, so everything you need to succeed comes from one team.
          </p>
          <p className="pwhy-sub">We help you:</p>
          <ul className="pwhy-list">
            {HELPS.map((h) => (
              <li key={h.lead}>
                <strong>{h.lead}:</strong> {h.text}
              </li>
            ))}
          </ul>
          <p className="pwhy-close">
            You&rsquo;ll get more than a supplier: a partner who understands your processes,
            your tools, and your people.
          </p>
        </article>

        <article className="pwhy-panel pwhy-panel--form">
          <h2 className="pwhy-h">Ready to solve your biggest business challenges?</h2>
          <p className="pwhy-lede">
            <strong>Book a consultation</strong> by completing the form, or call us on{' '}
            <a className="pwhy-tel" href="tel:+441483963255">01483 963255</a>.
          </p>
          <form
            className="pform"
            action="mailto:info@rifby.ai"
            method="post"
            encType="text/plain"
          >
            <div className="pform-grid">
              <input className="pform-input" type="text" name="first_name" placeholder="First Name" aria-label="First name" required />
              <input className="pform-input" type="text" name="last_name" placeholder="Last Name" aria-label="Last name" required />
              <input className="pform-input" type="email" name="email" placeholder="Email Address" aria-label="Email address" required />
              <input className="pform-input" type="tel" name="phone" placeholder="Phone Number" aria-label="Phone number" />
              <input className="pform-input" type="text" name="company" placeholder="Company Name" aria-label="Company name" />
            </div>
            <fieldset className="pform-areas">
              <legend className="pform-legend">
                What is your area of enquiry? <em>Choose all that apply.</em>
              </legend>
              {ENQUIRY_AREAS.map((a) => (
                <label className="pform-check" key={a}>
                  <input type="checkbox" name="enquiry" value={a} />
                  <span>{a}</span>
                </label>
              ))}
            </fieldset>
            <button className="pform-submit" type="submit">Submit</button>
          </form>
        </article>
      </div>
    </section>
  );
}
