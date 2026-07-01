import React from 'react';
import './Nav.css';

const logoMark = '/figma/logo-mark.svg';

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.78 13.7c-.41-.2-1.4-.69-1.79-.69s-.62.39-1.1.69-.65.39-1.04.39-1.05-.46-1.81-1.12c-.6-.52-1.2-1.18-1.62-1.91-.39-.69-.39-1.04 0-1.43s.69-.65.69-1.04-.49-1.38-.69-1.79-.49-1.04-.93-1.04c-.39 0-.91.16-1.36.61C5.4 5.59 5 6.4 5 7.27c0 1.51.79 3.19 2.36 4.96 1.91 2.14 4.21 3.5 6.05 3.5.87 0 1.68-.4 2.91-1.61.45-.45.61-.97.61-1.36 0-.44-.55-.86-.96-1.06Z"
        stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

const LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Services', href: '/services' },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-logo" href="/">
          <img src={logoMark} alt="" className="nav-logo-mark" width="30" height="28" />
          <span className="nav-logo-text">RIFBY AI</span>
        </a>

        <nav className="nav-pill">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <a className="btn btn-primary nav-cta" href="/contact">
          <span>Book a Call</span>
          <PhoneIcon />
        </a>
      </div>
    </header>
  );
}
