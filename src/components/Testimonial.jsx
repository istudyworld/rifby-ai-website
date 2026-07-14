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

// One testimonial per case study, in case-studies page order. Quotes drafted
// from the case-study facts — pending client sign-off. Named attributions
// supplied by Joseph 2026-07-06; entries without a name show role + company.
const TESTIMONIALS = [
  {
    quote:
      'I was drowning in reconciliation. Rifby built AI into how the practice runs and gave me twenty hours a week back. I spend that time advising clients now, not chasing paperwork.',
    name: 'Shakeel Ahmad',
    role: 'Owner',
    company: 'Ahmad & Co Accountant',
    slug: 'ahmad-co-accountant',
  },
  {
    quote:
      'Invoicing used to eat days every month. Now it runs end to end without me touching it. Fifteen hours a week back, and we haven’t missed a single invoice since.',
    name: 'Ben Scott',
    role: 'Operational Director',
    company: 'ISW Consulting LTD',
    slug: 'isw-consulting',
  },
  {
    quote:
      'Rifby took our companion app from brief to a live release on iOS and Android in six weeks. They worked like an extension of our own team.',
    name: 'Jamal Almari',
    role: 'Director',
    company: 'Tmtam Studio',
    slug: 'tmtam-studio',
  },
  {
    quote:
      'Social media used to be a daily chore we never kept up with. Rifby put our scheduling on autopilot across four platforms and saves us eight hours every week.',
    name: 'Emmanuel Sekumade',
    role: 'Operational Director',
    company: 'Another World Camberley',
    slug: 'another-world',
  },
  {
    quote:
      'Rifby delivered the brand and the build. We went from no online presence to a website our customers actually order from.',
    name: 'Oyinkansola Akinniran',
    role: 'Managing Director',
    company: 'Hunny’s Taste',
    slug: 'hunnys-taste',
  },
  {
    quote:
      'Rifby drafts our branded content across three channels. We review, approve in one click, and it publishes. Our social presence stays alive without stealing hours from the business.',
    role: 'Founder',
    company: 'Immersa (Nirvana VR)',
    slug: 'immersa',
  },
];

// Real case studies (summaries derived from the /case-studies rows — see
// ROWS in src/pages/CaseStudies.jsx; keep stats in sync with that page).
const CASES = [
  {
    company: 'Ahmad & Co Accountant',
    text: 'A solo accounting practice turned AI-powered firm. Reconciliation and client prep run AI-assisted, saving 20 hours a week.',
    slug: 'ahmad-co-accountant',
  },
  {
    company: 'ISW Consulting LTD',
    text: 'Client invoicing automated end to end. 15 hours saved every week and not a single missed invoice.',
    slug: 'isw-consulting',
  },
  {
    company: 'Tmtam Studio',
    text: 'A companion app for a flagship game product, shipped to iOS and Android in six weeks.',
    slug: 'tmtam-studio',
  },
  {
    company: 'Another World Camberley',
    text: 'Social scheduling on autopilot across four synced platforms, saving 8 hours every week.',
    slug: 'another-world',
  },
  {
    company: 'Hunny’s Taste',
    text: 'A food brand website built for ordering. Brand and build delivered end to end.',
    slug: 'hunnys-taste',
  },
];

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
            <span className="testi-name">{t.name || t.role}</span>
            <span className="testi-role">{t.name ? `${t.role}, ${t.company}` : t.company}</span>
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
            {CASES.map((c, i) => (
              <React.Fragment key={c.slug}>
                {i > 0 && (
                  <div className="testi-divider">
                    <span className="testi-divider-fill" />
                  </div>
                )}
                <div className="testi-case">
                  <div className="testi-case-top">
                    <span className="testi-badge">Case Study</span>
                    <span className="testi-case-company">{c.company}</span>
                    <p className="testi-case-text">{c.text}</p>
                  </div>
                  <a
                    className="testi-case-arrow"
                    href={`/case-studies#${c.slug}`}
                    aria-label={`Read the ${c.company} case study`}
                  >
                    <ArrowMini />
                  </a>
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
