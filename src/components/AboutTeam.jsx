import React from 'react';
import './AboutTeam.css';

function VerifiedBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="#0060ff" />
      <path d="M6.5 11.2l3 3 6-6.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowRight({ color = '#6b6c70' }) {
  return (
    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
      <path d="M0 6h20M15 1l5 5-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16.78 13.7c-.41-.2-1.4-.69-1.79-.69s-.62.39-1.1.69-.65.39-1.04.39-1.05-.46-1.81-1.12c-.6-.52-1.2-1.18-1.62-1.91-.39-.69-.39-1.04 0-1.43s.69-.65.69-1.04-.49-1.38-.69-1.79-.49-1.04-.93-1.04c-.39 0-.91.16-1.36.61C5.4 5.59 5 6.4 5 7.27c0 1.51.79 3.19 2.36 4.96 1.91 2.14 4.21 3.5 6.05 3.5.87 0 1.68-.4 2.91-1.61.45-.45.61-.97.61-1.36 0-.44-.55-.86-.96-1.06Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutTeam() {
  return (
    <section className="at">
      <div className="container at-inner">
        <div className="at-left">
          <div className="at-head">
            <h2 className="at-title"><span className="at-hl">Small Team</span><br />Full Accountability</h2>
            <p className="at-desc">
              Backgrounds in operations and software engineering. We've built systems for
              accountants, real-estate teams, e-commerce ops, education, gaming, and field
              services. The pattern is always the same: find the bottleneck that compounds,
              automate it, prove it.
            </p>
          </div>

          <div className="at-card">
            <div className="at-card-img">
              <img src="/figma/about/founder.png" alt="Founder of Rifby AI" />
            </div>
            <div className="at-card-body">
              <div className="at-card-meta">
                <span className="at-card-name">John Smith <VerifiedBadge /></span>
                <span className="at-card-role">Founder, Rifby LTD</span>
              </div>
              <div className="at-card-actions">
                <a className="at-btn at-btn-light" href="https://www.linkedin.com/company/rifby" target="_blank" rel="noreferrer">
                  <span>LinkedIn</span><ArrowRight />
                </a>
                <a className="at-btn at-btn-dark" href="/contact">
                  <span>Book a strategy call</span><PhoneIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="at-photo">
          <img src="/figma/about/team-photo.png" alt="Rifby AI team at work" />
        </div>
      </div>
    </section>
  );
}
