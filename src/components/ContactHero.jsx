import React, { useEffect, useRef } from 'react';
import './ContactHero.css';

const CALENDLY = 'https://calendly.com/joseph-rifby/30min';
const EMBED_URL = `${CALENDLY}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0060ff`;

// Real, working Calendly inline booking widget, framed in card chrome that
// matches the Figma calendar card. Loads the Calendly script once, then
// initialises the widget explicitly (survives React StrictMode remounts).
function BookingCalendar() {
  const ref = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const SCRIPT_ID = 'calendly-widget-script';

    function init() {
      if (cancelled || !ref.current || !window.Calendly) return;
      ref.current.innerHTML = '';
      window.Calendly.initInlineWidget({ url: EMBED_URL, parentElement: ref.current });
    }

    if (window.Calendly) {
      init();
    } else {
      let s = document.getElementById(SCRIPT_ID);
      if (!s) {
        s = document.createElement('script');
        s.id = SCRIPT_ID;
        s.src = 'https://assets.calendly.com/assets/external/widget.js';
        s.async = true;
        document.body.appendChild(s);
      }
      s.addEventListener('load', init);
    }

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="cbook-cal">
      <div className="cbook-embed" ref={ref} />
      <a className="cbook-embed-fallback" href={CALENDLY} target="_blank" rel="noreferrer">
        Calendar not loading? Open booking in a new tab &rarr;
      </a>
    </div>
  );
}

export default function ContactHero() {
  return (
    <div className="cbook">
      <div className="container cbook-inner">
        <span className="cbook-badge">Reply within 24 hours Mon-Fri</span>
        <div className="cbook-left">
          <h1 className="cbook-h1">Book a <span className="cbook-hl">Strategy Call</span></h1>
          <p className="cbook-body">
            30 minutes. No pitch, no pressure. We look at where your time is going, find the
            bottleneck, and leave you with a clear next step with or without us.
          </p>
          <div className="cbook-form-wrap">
            <span className="cbook-form-label">Prefer email</span>
            <form className="cbook-form" action="mailto:info@rifby.ai" method="post" encType="text/plain">
              <input className="cbook-input" type="email" name="email" placeholder="Type your email" aria-label="Your email" required />
              <button className="cbook-send" type="submit">Send</button>
            </form>
            <span className="cbook-phone">
              Or call us on <a href="tel:+441483963255">01483 963255</a>
            </span>
          </div>
        </div>

        <BookingCalendar />
      </div>
    </div>
  );
}
