// Contact — Variation A: Classic split.
// Left: hero, founder note, what-to-expect, email fallback.
// Right: sticky Calendly embed.
// Uses CS.* tokens from case-shared.jsx so light/dark applies automatically.

const CALENDLY = 'https://calendly.com/joseph-rifby/30min';

const ContactA = () => (
  <div style={{
    minHeight: '100%', color: CS.fg, background: CS.bg,
    fontFamily: CS.sans, WebkitFontSmoothing: 'antialiased',
    position: 'relative', zIndex: 1,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ maxWidth: CS_W, margin: '0 auto', width: '100%' }}>
      <CSNav active="Contact" />
    </div>

    {/* ───────── HERO + embed (split) ───────── */}
    <div style={{
      maxWidth: CS_W, margin: '0 auto', width: '100%',
      padding: '64px 56px 48px',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
      alignItems: 'start',
    }}>
      {/* LEFT: hero */}
      <div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          fontFamily: CS.mono, fontSize: 11, color: CS.sub,
          letterSpacing: 1.2, textTransform: 'uppercase',
          marginBottom: 56,
        }}>
          <span>Contact</span>
          <span>30-min · Free</span>
        </div>

        <h1 style={{
          margin: 0, fontFamily: CS.sans, fontSize: 96, lineHeight: 0.92,
          letterSpacing: -4, fontWeight: 500,
        }}>
          Book a
          <br/>
          <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
            strategy call.
          </span>
        </h1>

        <p style={{
          margin: '32px 0 0', fontFamily: CS.sans, fontSize: 20, lineHeight: 1.55,
          color: CS.sub, maxWidth: 520,
        }}>
          30 minutes. No pitch, no pressure. We look at where your time is going,
          find the bottleneck, and leave you with a clear next step — with or
          without us.
        </p>

        {/* Founder note */}
        <div style={{
          marginTop: 56,
          padding: '24px 28px',
          border: `1px solid ${CS.line}`, borderRadius: 16,
          background: CS.chip,
          display: 'flex', alignItems: 'center', gap: 20,
        }}>
          <img src="assets/joseph-avatar-square.png" alt="Joseph Idowu" style={{
            width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
            objectFit: 'cover', display: 'block',
          }} />
          <div>
            <div style={{
              fontFamily: CS.sans, fontSize: 15, lineHeight: 1.5, color: CS.fg,
            }}>
              You'll talk to me — not a sales rep.
            </div>
            <div style={{
              marginTop: 6, fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1, textTransform: 'uppercase',
            }}>
              Joseph Idowu · Founder
            </div>
          </div>
        </div>

        {/* What to expect */}
        <div style={{ marginTop: 64 }}>
          <div style={{
            fontFamily: CS.mono, fontSize: 11, color: CS.sub,
            letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 24,
          }}>
            What to expect
          </div>
          {[
            {
              n: '01',
              t: 'The 10-minute scan',
              d: 'We walk through your current workflow and flag where the biggest leaks are — repetitive tasks, tool gaps, data bottlenecks.',
            },
            {
              n: '02',
              t: 'A concrete next step',
              d: 'One specific thing you could automate or build first — scoped, sequenced, and realistic for your team.',
            },
            {
              n: '03',
              t: 'No obligation',
              d: 'You leave with a clear plan. If it makes sense to build it together, we talk scope. If not, you still got the plan.',
            },
          ].map((s, i, arr) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '48px 1fr', gap: 24,
              paddingBlock: 20,
              borderTop: i === 0 ? `1px solid ${CS.line}` : 'none',
              borderBottom: `1px solid ${CS.line}`,
            }}>
              <div style={{
                fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                letterSpacing: 1.2, textTransform: 'uppercase',
              }}>
                {s.n}
              </div>
              <div>
                <div style={{
                  fontFamily: CS.sans, fontSize: 18, fontWeight: 500, color: CS.fg,
                  letterSpacing: -0.3, marginBottom: 6,
                }}>
                  {s.t}
                </div>
                <div style={{
                  fontFamily: CS.sans, fontSize: 14, lineHeight: 1.55, color: CS.sub,
                }}>
                  {s.d}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Email fallback */}
        <div style={{
          marginTop: 40, padding: '20px 24px',
          border: `1px dashed ${CS.line}`, borderRadius: 12,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 4,
            }}>
              Prefer email?
            </div>
            <div style={{
              fontFamily: CS.sans, fontSize: 18, color: CS.fg, fontWeight: 500,
            }}>
              info@rifby.ai
            </div>
          </div>
          <div style={{
            fontFamily: CS.sans, fontSize: 13, color: CS.sub,
          }}>
            Reply within <span style={{ color: CS.fg, fontWeight: 500 }}>24 hours</span>, Mon–Fri.
          </div>
        </div>
      </div>

      {/* RIGHT: Booking card */}
      <div style={{ position: 'sticky', top: 24 }}>
        <BookingCard />
      </div>
    </div>

    {/* ───────── FAQ ───────── */}
    <div style={{ borderTop: `1px solid ${CS.line}`, marginTop: 72 }}>
      <div style={{
        maxWidth: CS_W, margin: '0 auto', width: '100%',
        padding: '96px 56px',
        display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80,
      }}>
        <div>
          <div style={{
            fontFamily: CS.mono, fontSize: 11, color: CS.sub,
            letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 24,
          }}>
            FAQ
          </div>
          <h2 style={{
            margin: 0, fontFamily: CS.sans, fontSize: 56, lineHeight: 1,
            letterSpacing: -2, fontWeight: 500,
          }}>
            Before
            <span style={{ display: 'block', fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
              you book.
            </span>
          </h2>
        </div>

        <div>
          {[
            {
              q: 'How long until something ships?',
              a: 'First useful automation usually lands in 2–3 weeks. Most engagements wrap inside 3.',
            },
            {
              q: 'Do I own what we build?',
              a: 'Yes. Code, workflows, accounts — all yours. We document everything so your team can run it without us if you want to.',
            },
            {
              q: 'What if I don\'t know what to automate yet?',
              a: 'Perfect — that\'s most of our calls. We\'ll walk through your week together and identify the highest-value target. You leave with a plan either way.',
            },
            {
              q: 'Do you support what you build?',
              a: 'Optional retainers cover monitoring, tweaks, and new workflows as your business grows. Nothing locked in.',
            },
          ].map((f, i, arr) => (
            <details key={i} style={{
              borderTop: `1px solid ${CS.line}`,
              borderBottom: i === arr.length - 1 ? `1px solid ${CS.line}` : 'none',
              padding: '20px 0',
            }}>
              <summary style={{
                listStyle: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily: CS.sans, fontSize: 20, fontWeight: 500, color: CS.fg,
                letterSpacing: -0.3,
              }}>
                <span>{f.q}</span>
                <span style={{
                  fontFamily: CS.mono, fontSize: 13, color: CS.sub, flexShrink: 0, marginLeft: 24,
                }}>
                  +
                </span>
              </summary>
              <div style={{
                marginTop: 14, fontFamily: CS.sans, fontSize: 16, lineHeight: 1.6,
                color: CS.sub, maxWidth: 720,
              }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>

    {/* Quiet close */}
    <div style={{
      maxWidth: CS_W, margin: '0 auto', width: '100%',
      padding: '120px 56px 96px',
      borderTop: `1px solid ${CS.line}`,
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 64,
    }}>
      <div style={{
        fontFamily: CS.sans, fontSize: 32, lineHeight: 1.25,
        letterSpacing: -0.8, fontWeight: 500, maxWidth: 720, color: CS.fg,
      }}>
        30 minutes.{' '}
        <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
          A clear next step.
        </span>
      </div>
      <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
        flexShrink: 0,
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '15px 24px', borderRadius: 999,
        border: 'none', background: CS.invBg,
        fontFamily: CS.sans, fontSize: 14, fontWeight: 600,
        color: CS.invFg, textDecoration: 'none',
      }}>
        Book a 30-minute call <Icon name="arrow-right" size={14} color="currentColor" />
      </a>
    </div>

    <div style={{ maxWidth: CS_W, margin: '0 auto', width: '100%' }}>
      <CSFooter />
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Booking card — real Calendly inline embed, framed in a card chrome.
// Loads the Calendly widget script once on mount.
const BookingCard = () => {
  React.useEffect(() => {
    const id = 'calendly-widget-script';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.id = id;
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div style={{
      border: `1px solid ${CS.line}`, borderRadius: 20,
      background: CS.bg,
      overflow: 'hidden',
      boxShadow: '0 20px 60px -30px rgba(10,20,40,0.25)',
    }}>
      {/* Header */}
      <div style={{ padding: '28px 28px 20px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        }}>
          <div>
            <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8,
            }}>
              Strategy call · 30 min
            </div>
            <div style={{
              fontFamily: CS.sans, fontSize: 24, fontWeight: 600,
              color: CS.fg, letterSpacing: -0.5,
            }}>
              Pick a time
            </div>
          </div>
          <div style={{
            padding: '6px 12px', borderRadius: 999,
            border: `1px solid ${CS.line}`,
            fontFamily: CS.mono, fontSize: 10, color: CS.fg,
            letterSpacing: 1, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#3EB1FF', display: 'inline-block',
            }} />
            Online
          </div>
        </div>
      </div>

      {/* Calendly inline embed */}
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0a1428&primary_color=085698`}
        style={{ minWidth: 280, height: 700, borderTop: `1px solid ${CS.line}` }}
      />
      {/* Always-available fallback (e.g. if the embed is blocked or fails to load on mobile) */}
      <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
        display: 'block', textAlign: 'center', padding: '15px 16px',
        borderTop: `1px solid ${CS.line}`, background: CS.bg,
        fontFamily: CS.sans, fontSize: 13, fontWeight: 500,
        color: CS.ok, textDecoration: 'none',
      }}>
        Calendar not loading? Open booking in a new tab →
      </a>
    </div>
  );
};

window.ContactA = ContactA;
