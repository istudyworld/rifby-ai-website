import React, { useState } from 'react';
import './Testimonial.css';

function ArrowMini() {
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
      <path d="M0 6h26M21 1l5 5-5 5" stroke="#4e91ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron({ dir }) {
  return (
    <svg width="16" height="26" viewBox="0 0 16 26" fill="none" aria-hidden="true">
      {dir === 'prev' ? (
        <path d="M14 2 3 13l11 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="m2 2 11 11L2 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

// One testimonial per case study, in case-studies page order. Drafted from the
// case-study facts — pending Joseph's sign-off (see FEEDBACK-2026-07-06.md).
const TESTIMONIALS = [
  {
    quote:
      'I was drowning in reconciliation. Rifby built AI into how the practice runs and gave me twenty hours a week back. I spend that time advising clients now, not chasing paperwork.',
    role: 'Owner',
    company: 'Ahmad & Co Accountant',
    slug: 'ahmad-co-accountant',
  },
  {
    quote:
      'Invoicing used to eat days every month. Now it runs end to end without me touching it. Fifteen hours a week back, and we haven’t missed a single invoice since.',
    role: 'Director',
    company: 'ISW Consulting LTD',
    slug: 'isw-consulting',
  },
  {
    quote:
      'Rifby took our companion app from brief to a live release on iOS and Android in six weeks. They worked like an extension of our own team.',
    role: 'Studio Lead',
    company: 'Tmtam Studio',
    slug: 'tmtam-studio',
  },
  {
    quote:
      'Social media used to be a daily chore we never kept up with. Rifby put our scheduling on autopilot across four platforms and saves us eight hours every week.',
    role: 'Owner',
    company: 'Another World Camberley',
    slug: 'another-world',
  },
  {
    quote:
      'Rifby delivered the brand and the build. We went from no online presence to a website our customers actually order from.',
    role: 'Founder',
    company: 'Hunny’s Taste',
    slug: 'hunnys-taste',
  },
  {
    quote:
      'Client intake used to take forty-five minutes per case. Rifby’s AI triage does it in twelve with 96% routing accuracy. Our fee earners feel the difference every day.',
    role: 'Practice Manager',
    company: 'Hartwell & Vine Solicitors',
    slug: 'hartwell-vine',
  },
  {
    quote:
      'No-shows were quietly draining the business. The booking app Rifby built cut them by 38% and recovered around $24k in bookings.',
    role: 'Operations Lead',
    company: 'Simply Carers',
    slug: 'simply-carers',
  },
  {
    quote:
      'Rifby drafts our branded content across three channels. We review, approve in one click, and it publishes. Our social presence stays alive without stealing hours from the business.',
    role: 'Founder',
    company: 'Immersa (Nirvana VR)',
    slug: 'immersa',
  },
];

const CASE_TEXT =
  'A SaaS company, 250 engineers. Zero AI usage to 28% AI-generated code in six weeks. Code review time down 42%.';
const CASES = [CASE_TEXT, CASE_TEXT, CASE_TEXT];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const step = (d) => setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="testimonial">
      <div className="testi-quote">
        <button
          className="testi-nav testi-nav--prev"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => step(-1)}
        >
          <Chevron dir="prev" />
        </button>

        <div className="testi-body">
          <span className="testi-mark" aria-hidden="true">”</span>
          <blockquote className="testi-text">{t.quote}</blockquote>
          <div className="testi-author-meta">
            <span className="testi-name">{t.role}</span>
            <span className="testi-role">{t.company}</span>
          </div>
          <a className="btn btn-primary testi-more" href={`/case-studies#${t.slug}`}>
            See More
          </a>
        </div>

        <button
          className="testi-nav testi-nav--next"
          type="button"
          aria-label="Next testimonial"
          onClick={() => step(1)}
        >
          <Chevron dir="next" />
        </button>
      </div>

      <div className="testi-cases">
        <div className="testi-cases-inner">
          <div className="testi-cases-row">
            {CASES.map((text, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="testi-divider">
                    <span className="testi-divider-fill" />
                  </div>
                )}
                <div className="testi-case">
                  <div className="testi-case-top">
                    <span className="testi-badge">Case Study</span>
                    <p className="testi-case-text">{text}</p>
                  </div>
                  <span className="testi-case-arrow"><ArrowMini /></span>
                </div>
              </React.Fragment>
            ))}
          </div>

          <a className="btn btn-primary testi-cta" href="/case-studies">Audit your AI Then Decide</a>
        </div>
      </div>
    </section>
  );
}
