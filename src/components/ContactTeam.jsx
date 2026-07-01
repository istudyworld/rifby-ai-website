import React from 'react';
import './ContactTeam.css';

const RINGS = [
  { w: 1545, x: -35, y: 120 },
  { w: 1360, x: 57, y: 235 },
  { w: 951, x: 261, y: 393 },
  { w: 495, x: 489, y: 576 },
];

const AVATARS = [
  { src: 'avatar-top', size: 108, x: 488, y: 120 },
  { src: 'avatar-left', size: 146, x: 92, y: 325 },
  { src: 'avatar-lowerleft', size: 103, x: 261, y: 630 },
  { src: 'avatar-upperright', size: 108, x: 913, y: 228 },
  { src: 'avatar-right', size: 146, x: 1274, y: 292 },
  { src: 'avatar-lowerright', size: 108, x: 1179, y: 679 },
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

        {AVATARS.map((a) => (
          <img
            key={a.src}
            className="cteam-avatar"
            src={`/figma/contact/${a.src}.png`}
            alt=""
            aria-hidden="true"
            style={{ width: a.size, height: a.size, left: a.x, top: a.y }}
          />
        ))}

        <span className="cteam-name cteam-name--aniie">Aniie</span>
        <span className="cteam-name cteam-name--smith">Smith Jhon</span>

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
