import React, { useState } from 'react';
import './Nav.css';
import PhoneIcon from './PhoneIcon.jsx';

const logoMark = '/figma/logo-mark.svg';

const LINKS = [
  { label: 'Problems We Solve', href: '/problems' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Services', href: '/services' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`nav${open ? ' nav-open' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-logo" href="/">
          <img src={logoMark} alt="" className="nav-logo-mark" width="30" height="28" />
          <span className="nav-logo-text">RIFBY AI</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav className="nav-pill">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <a className="nav-phone" href="tel:+441483963255">
          <PhoneIcon color="var(--blue)" />
          <span>+44 (0)1483 963255</span>
        </a>

        <a className="btn btn-primary nav-cta" href="/contact">
          <span>Book a Call</span>
          <PhoneIcon />
        </a>
      </div>
    </header>
  );
}
