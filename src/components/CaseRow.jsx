import React, { useRef } from 'react';
import './CaseRow.css';

function scrollToSibling(section, dir) {
  if (!section) return;
  let el = dir === 'next' ? section.nextElementSibling : section.previousElementSibling;
  while (el && !el.classList.contains('case')) {
    el = dir === 'next' ? el.nextElementSibling : el.previousElementSibling;
  }
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function BackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 6l-6 6 6 6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12h10" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function NextIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 6l6 6-6 6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 12H6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseRow({
  slug,
  tone,
  reversed = false,
  company,
  smallCompany = false,
  heading,
  list,
  tags = [],
  stats = [],
  photo,
  photoAlt = '',
}) {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} id={slug} className={`case case--${tone}${reversed ? ' case--reversed' : ''}`}>
      <div className="container case-container">
        <div className="case-inner">
          <div className={`case-text${smallCompany ? ' is-smalllabel' : ''}`}>
            <div className="case-head">
              <span className="case-company">{company}</span>
              <h2 className="case-heading">{heading}</h2>
            </div>

            {list && (
              <ol className="case-list">
                {list.map((item, i) => (
                  <li className="case-list-item" key={i}>
                    <span className="case-list-num">{i + 1}</span>
                    <span className="case-list-text">{item}</span>
                  </li>
                ))}
              </ol>
            )}

            <div className="case-tags">
              {tags.map((t, i) => (
                <span className={`case-tag ${i === 0 ? 'case-tag--primary' : 'case-tag--ghost'}`} key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="case-cluster">
            <img className="case-photo" src={photo} alt={photoAlt} />
            <div className="case-card">
              {stats.map((s, i) => (
                <div className="case-stat" key={i}>
                  <span className="case-stat-big">{s.big}</span>
                  <span className={`case-stat-small${s.lightSmall ? ' is-light' : ''}`}>{s.small}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="case-arrows">
          <button className="case-arrow case-arrow--back" aria-label="Previous case study" onClick={() => scrollToSibling(sectionRef.current, 'prev')}><BackIcon /></button>
          <button className="case-arrow case-arrow--next" aria-label="Next case study" onClick={() => scrollToSibling(sectionRef.current, 'next')}><NextIcon /></button>
        </div>
      </div>
    </section>
  );
}
