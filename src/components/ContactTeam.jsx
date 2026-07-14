import React from 'react';
import './ContactTeam.css';

const RINGS = [
  { w: 1545, x: -35, y: 120 },
  { w: 1360, x: 57, y: 235 },
  { w: 951, x: 261, y: 393 },
  { w: 495, x: 489, y: 576 },
];

const AV = (n) => `/figma/home/team/${n}.webp`;

// Real team roster (shared photos with the Home team section).
const MEMBERS = [
  { name: 'Shedrack Mekoma', role: 'Project Manager', img: 'shedrack-mekoma', size: 108, x: 488, y: 120 },
  { name: 'Imran Hossen', role: 'Digital Product Designer', img: 'imran-hossen', size: 120, x: 170, y: 260 },
  { name: 'Dimitrios Ladas', role: 'Technical Lead', img: 'dimitrios-ladas', size: 146, x: 1004, y: 292, labelFirst: true },
  { name: 'Joseph Idowu', role: 'AI Business Analyst', img: 'joseph-idowu', size: 108, x: 941, y: 679, labelFirst: true },
];

export default function ContactTeam() {
  return (
    <section className="cteam">
      <div className="cteam-stage">
        {RINGS.map((r, i) => (
          <span
            className="cteam-ring"
            key={i}
            style={{ width: r.w, height: r.w, left: r.x, top: r.y }}
          />
        ))}

        {MEMBERS.map((m) => (
          <div key={m.img} className="cteam-tag" style={{ left: m.x, top: m.y }}>
            {m.labelFirst && (
              <span className="cteam-name">
                {m.name}
                <span className="cteam-name-role">{m.role}</span>
              </span>
            )}
            <img
              className="cteam-avatar"
              src={AV(m.img)}
              alt={`${m.name}, ${m.role}`}
              style={{ width: m.size, height: m.size }}
            />
            {!m.labelFirst && (
              <span className="cteam-name">
                {m.name}
                <span className="cteam-name-role">{m.role}</span>
              </span>
            )}
          </div>
        ))}

        <div className="cteam-center">
          <h2 className="cteam-h2">Our <span className="cteam-hl">Team</span></h2>
          <p className="cteam-body">
            Tell us what&rsquo;s costing you time. We&rsquo;ll tell you whether AI is the right lever
          </p>
          <a className="btn btn-primary cteam-cta" href="/contact">Book a 30 Minutes Call</a>
        </div>
      </div>
    </section>
  );
}
