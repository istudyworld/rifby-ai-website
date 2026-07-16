import React from 'react';
import './AssessForm.css';

// On-page application form (replaces a Google Form). Submission reuses the
// /problems enquiry-form mechanism: a mailto to info@rifby.ai. The submit
// handler composes the subject + all answers into the email body; the plain
// mailto action remains as the no-JS fallback. Native validation (required
// attributes) runs before submit fires.
const ROLES = ['Owner / Founder', 'Managing Director / Partner', 'Operations lead', 'Other'];
const HEADCOUNTS = ['Just me', '2–5', '6–20', '21+'];
const REVENUES = ['Under £100k', '£100k–£500k', '£500k–£1M', '£1M–£5M', '£5M+'];
const IMPLEMENT = [
  'Yes — I’d rather someone did it for/with me',
  'Maybe — depends what’s involved',
  'No — I’ll implement myself',
];

function onSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const get = (k) => (data.get(k) || '').toString().trim();
  const name = get('name');
  const body = [
    `Name: ${name}`,
    `Email: ${get('email')}`,
    `Phone / WhatsApp: ${get('phone')}`,
    `Business name & website: ${get('business')}`,
    `Role: ${get('role')}`,
    `Headcount (including them): ${get('headcount')}`,
    `Rough annual revenue: ${get('revenue')}`,
    `Industry: ${get('industry')}`,
    '',
    'Top 2–3 time drains:',
    get('drains'),
    '',
    'Current software:',
    get('software') || '(not answered)',
    '',
    `Wants help implementing: ${get('implement')}`,
    '',
    'Anything else:',
    get('anything') || '(not answered)',
  ].join('\n');
  const subject = `Free AI Assessment application — ${name}`;
  window.location.href =
    `mailto:info@rifby.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Req() {
  return <em className="assess-req" aria-hidden="true">*</em>;
}

export default function AssessForm() {
  return (
    <section className="assess-apply" id="apply">
      <div className="container">
        <article className="assess-apply-panel">
          <h2 className="assess-apply-h">Apply for your free AI Opportunity Assessment</h2>
          <p className="assess-apply-lede">
            We run 8 free assessments a month (normally £799). This form takes 2 minutes
            and helps us confirm we can genuinely find you 5+ hours a week before we take
            a slot. <span className="assess-apply-reqnote">Fields marked <em className="assess-req">*</em> are required.</span>
          </p>

          <form
            className="assess-form"
            action="mailto:info@rifby.ai"
            method="post"
            encType="text/plain"
            onSubmit={onSubmit}
          >
            <div className="assess-form-grid">
              <label className="assess-field">
                <span className="assess-label">Your name <Req /></span>
                <input className="assess-input" type="text" name="name" autoComplete="name" required />
              </label>

              <label className="assess-field">
                <span className="assess-label">Email <Req /></span>
                <input className="assess-input" type="email" name="email" autoComplete="email" required />
              </label>

              <label className="assess-field">
                <span className="assess-label">Phone / WhatsApp <Req /></span>
                <input className="assess-input" type="tel" name="phone" autoComplete="tel" required />
              </label>

              <label className="assess-field">
                <span className="assess-label">Business name &amp; website <Req /></span>
                <span className="assess-help">No website is fine — just say &ldquo;none&rdquo;.</span>
                <input className="assess-input" type="text" name="business" autoComplete="organization" required />
              </label>

              <label className="assess-field">
                <span className="assess-label">What&rsquo;s your role? <Req /></span>
                <select className="assess-input assess-select" name="role" required defaultValue="">
                  <option value="" disabled>Select your role</option>
                  {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </label>

              <label className="assess-field">
                <span className="assess-label">How many people work in the business (including you)? <Req /></span>
                <select className="assess-input assess-select" name="headcount" required defaultValue="">
                  <option value="" disabled>Select headcount</option>
                  {HEADCOUNTS.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </label>

              <label className="assess-field">
                <span className="assess-label">Rough annual revenue <Req /></span>
                <span className="assess-help">
                  This stays private; it just helps us prescribe tools at the right size
                  for your business.
                </span>
                <select className="assess-input assess-select" name="revenue" required defaultValue="">
                  <option value="" disabled>Select a band</option>
                  {REVENUES.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </label>

              <label className="assess-field">
                <span className="assess-label">What industry are you in? <Req /></span>
                <input className="assess-input" type="text" name="industry" required />
              </label>
            </div>

            <label className="assess-field assess-field--full">
              <span className="assess-label">
                What are the 2–3 most time-consuming parts of running your business right now? <Req />
              </span>
              <textarea className="assess-input assess-textarea" name="drains" rows="4" required />
            </label>

            <label className="assess-field assess-field--full">
              <span className="assess-label">What software do you currently run the business on?</span>
              <span className="assess-help">CRM, accounting, spreadsheets, anything. Optional.</span>
              <textarea className="assess-input assess-textarea" name="software" rows="3" />
            </label>

            <label className="assess-field assess-field--full">
              <span className="assess-label">
                If we find you 5+ hours a week of savings, would you want help implementing them? <Req />
              </span>
              <select className="assess-input assess-select" name="implement" required defaultValue="">
                <option value="" disabled>Select an answer</option>
                {IMPLEMENT.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>

            <label className="assess-field assess-field--full">
              <span className="assess-label">Anything else we should know?</span>
              <span className="assess-help">Optional.</span>
              <textarea className="assess-input assess-textarea" name="anything" rows="3" />
            </label>

            <button className="assess-submit" type="submit">Submit application</button>
            <p className="assess-reply-note">We reply to every application within one working day.</p>
          </form>
        </article>
      </div>
    </section>
  );
}
