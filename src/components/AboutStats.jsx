import React from 'react';
import './AboutStats.css';

const STATS = [
  { num: '20+', label: 'Production agents shipped' },
  { num: '6', label: 'Industries served' },
  { num: '3wk', label: 'Median time to first POC' },
  { num: '100%', label: 'Client retention to date' },
];

export default function AboutStats() {
  return (
    <section className="astats">
      <div className="container astats-inner">
        {STATS.map((s, i) => (
          <React.Fragment key={s.num}>
            {i > 0 && <span className="astats-divider" />}
            <div className="astats-item">
              <span className="astats-num">{s.num}</span>
              <span className="astats-label">{s.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
