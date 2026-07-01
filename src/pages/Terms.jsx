import React from 'react';
import LegalPage from '../components/LegalPage.jsx';

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <p>
        These terms govern your use of the Rifby AI website and the services we provide. They are a
        concise summary while our full terms are being finalised.
      </p>

      <h2>Our services</h2>
      <p>
        Rifby AI designs and builds AI automations, custom software, and data solutions. The exact
        scope, deliverables, and price of any engagement are agreed with you in writing before work
        begins.
      </p>

      <h2>Engagements and pricing</h2>
      <p>
        Pricing is bespoke per engagement and confirmed during discovery. Nothing on this website is
        a binding quote; a proposal becomes an agreement only once both parties accept it.
      </p>

      <h2>Ownership</h2>
      <p>
        You own what we build for you. On handover you receive the code, workflows, and documentation
        for your project, with no lock-in.
      </p>

      <h2>Liability</h2>
      <p>
        We deliver our work with reasonable care and skill. To the extent permitted by law, our
        liability is limited to the fees paid for the engagement in question.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at <a href="mailto:info@rifby.ai">info@rifby.ai</a>.
      </p>
    </LegalPage>
  );
}
