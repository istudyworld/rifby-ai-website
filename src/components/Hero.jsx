import React, { useState } from 'react';
import './Hero.css';

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
                src="/figma/home/hero-inline-avatars.webp"
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

        {/* Proof points must be verifiable: 6 = the real client case studies
            on /case-studies (Ahmad & Co, ISW Consulting, Tmtam Studio, Another
            World Camberley, Hunny's Taste, Immersa). */}
        <div className="hero-proof">
          <span className="hero-proof-label">Businesses we have built for</span>
          <div className="hero-proof-row">
            <span className="hero-proof-num">6</span>
            <a className="hero-proof-cta" href="/case-studies">See the case studies &rarr;</a>
          </div>
        </div>
      </div>

      {/* RIGHT: hero image + watch-a-video pill */}
      <div className="hero-right">
        <img className="hero-main" src="/figma/home/hero-main.webp" alt="Team collaborating in a meeting" />
        <button className="watch-pill" type="button" onClick={() => setVideoOpen(true)}>
          <span className="watch-thumb">
            <img src="/figma/home/watch-thumb.webp" alt="" />
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
