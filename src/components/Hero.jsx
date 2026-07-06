import React, { useState } from 'react';
import './Hero.css';

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 0.5l2.35 5.02 5.51.66-4.07 3.74 1.08 5.43L9 13.9l-4.85 1.95 1.08-5.43L1.16 6.68l5.51-.66L9 .5z" fill="var(--star)" />
    </svg>
  );
}

function PlayBadge() {
  return (
    <span className="watch-play">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M5 3.5v9l8-4.5-8-4.5z" fill="#fff" />
      </svg>
    </span>
  );
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <div className="container hero-inner">
      {/* LEFT: copy + social proof */}
      <div className="hero-left">
        <div className="hero-top">
          <h1 className="hero-h1">
            <span className="hero-line">Custom AI &amp; Software</span>
            <span className="hero-line hero-line-inline">
              <img
                className="hero-inline-avatars"
                src="/figma/home/hero-inline-avatars.png"
                alt="Team avatars"
              />
              <span>Built for Your</span>
            </span>
            <span className="hero-line"><span className="blue">Business</span></span>
          </h1>

          <p className="hero-sub">
            AI agents Automations and Bespoke Software Design, Built and Run For You
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="/contact">Book a Strategy Call</a>
            <a className="btn btn-secondary btn-lg" href="/case-studies">See Case Studies</a>
          </div>
        </div>

        <div className="hero-proof">
          <span className="hero-proof-label">Trusted Client</span>
          <div className="hero-proof-row">
            <img
              className="hero-proof-avatars"
              src="/figma/home/trusted-avatars.png"
              alt="Customer avatars"
            />
            <span className="hero-proof-num">2M</span>
          </div>
          <div className="hero-stars">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            <span className="hero-stars-text">20K+ Customer</span>
          </div>
        </div>
      </div>

      {/* RIGHT: hero image + watch-a-video pill */}
      <div className="hero-right">
        <img className="hero-main" src="/figma/home/hero-main.png" alt="Team collaborating in a meeting" />
        <button className="watch-pill" type="button" onClick={() => setVideoOpen(true)}>
          <span className="watch-thumb">
            <img src="/figma/home/watch-thumb.png" alt="" />
            <PlayBadge />
          </span>
          <span className="watch-label">Watch a Video</span>
        </button>
      </div>

      {videoOpen && (
        <div className="hero-video-modal" onClick={() => setVideoOpen(false)}>
          <div className="hero-video-box" onClick={(e) => e.stopPropagation()}>
            <button className="hero-video-close" onClick={() => setVideoOpen(false)} aria-label="Close video">&times;</button>
            <video src="/assets/rifby-brand-film.mp4" controls autoPlay playsInline className="hero-video-el" />
          </div>
        </div>
      )}
    </div>
  );
}
