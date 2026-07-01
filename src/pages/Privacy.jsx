import React from 'react';
import LegalPage from '../components/LegalPage.jsx';

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This policy explains how Rifby AI (Rifby LTD) handles the information you share with us.
        We are finalising our full privacy documentation; the summary below covers the essentials.
      </p>

      <h2>What we collect</h2>
      <p>
        Only what you give us: your name, email, and any details you submit through our contact
        form or booking calendar, plus basic, anonymised analytics about how the site is used.
      </p>

      <h2>How we use it</h2>
      <p>
        To reply to your enquiry, arrange and deliver work you have asked for, and improve our
        website and services. We do not sell your data or share it for advertising.
      </p>

      <h2>Cookies</h2>
      <p>
        We use a small number of cookies for essential functionality and privacy-friendly
        analytics. You can block cookies in your browser settings; the site will still work.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct, or delete the information we hold about you at any time.
        Email <a href="mailto:info@rifby.ai">info@rifby.ai</a> and we will action it promptly.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at <a href="mailto:info@rifby.ai">info@rifby.ai</a>.
      </p>
    </LegalPage>
  );
}
