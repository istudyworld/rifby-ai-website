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

        {/* labelled team members */}
        <div className="team-tag" style={{ left: 488, top: 120 }}>
          <img className="team-av" src={AV('shedrack-mekoma')} alt="Shedrack Mekoma, Project Manager" style={{ width: 108, height: 108 }} />
          <span className="team-name">
            Shedrack Mekoma
            <span className="team-name-role">Project Manager</span>
          </span>
        </div>
        <div className="team-tag" style={{ left: 170, top: 260 }}>
          <img className="team-av" src={AV('imran-hossen')} alt="Imran Hossen, Digital Product Designer" style={{ width: 120, height: 120 }} />
          <span className="team-name">
            Imran Hossen
            <span className="team-name-role">Digital Product Designer</span>
          </span>
        </div>
        <div className="team-tag" style={{ left: 70, top: 470 }}>
          <img className="team-av" src={AV('amara-okafor')} alt="Amara Okafor, AI Engineer" style={{ width: 146, height: 146 }} />
          <span className="team-name">
            Amara Okafor
            <span className="team-name-role">AI Engineer</span>
          </span>
        </div>
        <div className="team-tag" style={{ left: 1004, top: 292 }}>
          <span className="team-name">
            Dimitrios Ladas
            <span className="team-name-role">Technical Lead</span>
          </span>
          <img className="team-av" src={AV('dimitrios-ladas')} alt="Dimitrios Ladas, Technical Lead" style={{ width: 146, height: 146 }} />
        </div>
        <div className="team-tag" style={{ left: 941, top: 679 }}>
          <span className="team-name">
            Joseph Idowu
            <span className="team-name-role">AI Business Analyst</span>
          </span>
          <img className="team-av" src={AV('joseph-idowu')} alt="Joseph Idowu, AI Business Analyst" style={{ width: 108, height: 108 }} />
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
