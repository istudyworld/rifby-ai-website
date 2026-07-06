import React from 'react';
import './AboutTeam.css';
import PhoneIcon from './PhoneIcon.jsx';

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
            <div className="at-card-img at-card-img--avatar">
              <img src="/figma/home/team/joseph-idowu.png" alt="Joseph Idowu, AI Business Analyst at Rifby" />
            </div>
            <div className="at-card-body">
              <div className="at-card-meta">
                <span className="at-card-name">Joseph Idowu <VerifiedBadge /></span>
                <span className="at-card-role">AI Business Analyst, Rifby LTD</span>
              </div>
              <div className="at-card-actions">
                <a className="at-btn at-btn-light" href="https://www.linkedin.com/company/rifby" target="_blank" rel="noreferrer">
                  <span>LinkedIn</span><ArrowRight />
                </a>
                <a className="at-btn at-btn-dark" href="/contact">
                  <span>Book a strategy call</span><PhoneIcon size={20} />
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
