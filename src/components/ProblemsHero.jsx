import React from 'react';
import './ProblemsHero.css';

export default function ProblemsHero() {
  return (
    <div className="phero">
      <div className="container">
        <h1 className="phero-h1">
          <span className="phero-box">Problems</span> We Solve
        </h1>
        <p className="phero-lede">
          Solving the business problems that slow you down, with AI and automation that
          deliver real results.
        </p>
        <p className="phero-desc">
          Every business faces the same squeeze: more to do, tighter margins, and not enough
          hours. At Rifby, we help you cut through it, using agentic AI, workflow automation,
          and custom software to remove the bottlenecks that hold your business back.
        </p>
        <p className="phero-desc">
          We’ve grouped the most common problems we’re asked to solve into eight areas. If one
          sounds familiar, that’s where to start.
        </p>
      </div>
    </div>
  );
}
