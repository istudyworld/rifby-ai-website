import React from 'react';
import './ProblemsHero.css';

export default function ProblemsHero() {
  return (
    <div className="phero">
      <div className="container phero-inner">
        <h1 className="phero-h1">
          <span className="phero-box">Problems</span> We Solve
        </h1>
        <p className="phero-lede">
          Solving today&rsquo;s biggest business challenges, with AI and automation
          expertise that delivers real results.
        </p>
        <p className="phero-desc">
          Every business faces a unique mix of pressures: tighter budgets, growing
          expectations, evolving technology, and the need to deliver more with less.
          At Rifby, we help you cut through complexity, using agentic AI, workflow
          automation, and custom software to solve your most important business problems.
        </p>
        <p className="phero-desc">
          Whether you&rsquo;re in professional services, retail, hospitality, or field
          services, we combine deep technical expertise with sector insight to help you
          transform operations, empower people, and deliver lasting impact.
        </p>
        <h2 className="phero-explore">Explore the Problems We Solve</h2>
        <p className="phero-desc">
          We&rsquo;ve grouped the most common challenges our clients face, and how Rifby
          helps solve them, into eight focus areas. Each one explains the issue, its
          real-world impact, and how we help you overcome it.
        </p>
      </div>
    </div>
  );
}
