import React from 'react';
import './Team.css';

const AV = (n) => `/figma/home/team/${n}.png`;

export default function Team() {
  return (
    <section className="team">
      <div className="team-canvas">
        {/* concentric rings */}
        <span className="team-ring" style={{ width: 1545, height: 1545, left: -35, top: 120 }} />
        <span className="team-ring" style={{ width: 1360, height: 1360, left: 57, top: 235 }} />
        <span className="team-ring" style={{ width: 951, height: 951, left: 261, top: 393 }} />
        <span className="team-ring" style={{ width: 495, height: 495, left: 489, top: 576 }} />

        {/* floating avatars */}
        <img className="team-av" src={AV('team-1')} alt="Team member" style={{ width: 146, height: 146, left: 92, top: 325 }} />
        <img className="team-av" src={AV('team-2')} alt="Team member" style={{ width: 103, height: 103, left: 261, top: 630 }} />
        <img className="team-av" src={AV('team-3')} alt="Team member" style={{ width: 146, height: 146, left: 1274, top: 292 }} />
        <img className="team-av" src={AV('team-4')} alt="Team member" style={{ width: 108, height: 108, left: 913, top: 228 }} />

        {/* labelled avatars */}
        <div className="team-tag team-tag-left" style={{ left: 488, top: 120 }}>
          <img className="team-av" src={AV('team-annie')} alt="Annie" style={{ width: 108, height: 108 }} />
          <span className="team-name">Annie</span>
        </div>
        <div className="team-tag team-tag-right" style={{ left: 941, top: 679 }}>
          <span className="team-name">Smith John</span>
          <img className="team-av" src={AV('team-john')} alt="Smith John" style={{ width: 108, height: 108 }} />
        </div>

        {/* center content */}
        <div className="team-center">
          <h2 className="team-title">Our <span className="team-highlight">Team</span></h2>
          <p className="team-sub">
            Tell us what's costing you time. We'll tell you whether AI is the right lever.
          </p>
          <a className="btn btn-primary team-cta" href="/contact">Book a 30 Minute Call</a>
        </div>
      </div>
    </section>
  );
}
