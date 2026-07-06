import React from 'react';
import './Footer.css';

const logoMark = '/figma/logo-mark.svg';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Problems We Solve', href: '/problems' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'info@rifby.ai', href: 'mailto:info@rifby.ai' },
      { label: 'Book a call', href: '/contact' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rifby', target: '_blank' },
      { label: '01483 963255', href: 'tel:+441483963255' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="footer-logo" href="/">
              <img src={logoMark} alt="" width="30" height="28" />
              <span className="footer-logo-text">RIFBY AI</span>
            </a>
            <p className="footer-tagline">Cut cost, Save time, Scale faster.</p>
          </div>

          <div className="footer-cols">
            {COLUMNS.map((col) => (
              <div className="footer-col" key={col.title}>
                <span className="footer-col-title">{col.title}</span>
                <span className="footer-col-line" />
                <ul className="footer-col-links">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} target={l.target} rel={l.target ? 'noreferrer' : undefined}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-line" />
          <div className="footer-bottom-row">
            <span className="footer-copy">© 2026 RIFBY LTD</span>
            <span className="footer-legal">
              <a href="/privacy">Privacy</a>
              <span className="footer-dot" />
              <a href="/cookies">Cookies</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
