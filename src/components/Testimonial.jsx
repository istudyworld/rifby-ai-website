import React from 'react';
import './Testimonial.css';

function PlayCircle() {
  return (
    <span className="testi-play">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
        <path d="M3 2v9l8-4.5L3 2z" fill="#fff" />
      </svg>
    </span>
  );
}

function ArrowMini() {
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
      <path d="M0 6h26M21 1l5 5-5 5" stroke="#4e91ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CASE_TEXT =
  'A SaaS company, 250 engineers. Zero AI usage to 28% AI-generated code in six weeks. Code review time down 42%.';
const CASES = [CASE_TEXT, CASE_TEXT, CASE_TEXT];

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testi-quote">
        <div className="testi-video">
          <img src="/figma/home/testi-video.png" alt="Client testimonial video" />
          <PlayCircle />
        </div>

        <div className="testi-body">
          <span className="testi-mark">”</span>
          <p className="testi-text">
            Rifby didn't sell us AI. They sold us outcomes, and then they actually hit them.
            We cut 40% of operational costs in three months, and we own every line of code they wrote.
          </p>
          <div className="testi-author">
            <img className="testi-avatar" src="/figma/home/testi-avatar.png" alt="James Patel" />
            <div className="testi-author-meta">
              <span className="testi-name">James Patel</span>
              <span className="testi-role">CEO <span className="testi-dot">•</span> Mid-Market SaaS</span>
            </div>
          </div>
        </div>
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
