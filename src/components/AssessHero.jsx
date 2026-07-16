import React from 'react';
import './AssessHero.css';

// Booking goes straight to Calendly — there is no on-page application form.
export const BOOKING_URL = 'https://calendly.com/joseph-rifby/30min';

export default function AssessHero() {
  return (
    <div className="assess-hero">
      <div className="container assess-hero-inner">
        <h1 className="assess-hero-h1">
          Get <span className="assess-hero-box">5–10 hours</span> of your week back.
          <br />
          We&rsquo;ll show you exactly how — free.
        </h1>
        <p className="assess-hero-lede">
          The Rifby AI Audit Assessment is completely free for 8 businesses
          each month (it&rsquo;s normally £799). One 30-minute conversation, and we
          hand you a written plan: the exact AI and software tools that fit your
          business, what they cost, and how many hours they give you back.
        </p>
        <a className="btn btn-primary btn-lg assess-hero-cta" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Book your free assessment call
        </a>
        <p className="assess-hero-micro">
          8 slots per month &middot; No obligation &middot; If we can&rsquo;t find you
          5+ hours a week, you&rsquo;ve lost nothing but 30 minutes.
        </p>
      </div>
    </div>
  );
}
