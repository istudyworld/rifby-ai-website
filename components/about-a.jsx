// About — Variation A: Typographic manifesto.
// Long-form: hero headline, stats strip, services explainer, principles,
// founder card with photo + LinkedIn, final CTA.
// Reuses CSNav + CSFooter from case-shared.jsx.

const AboutA = () => {
  const stats = [
  { n: '20+', k: 'Production agents shipped' },
  { n: '6', k: 'Industries served' },
  { n: '3 wk', k: 'Median time to first POC' },
  { n: '100%', k: 'Client retention to date' }];


  const principles = [
  {
    n: '01',
    h: 'Outcomes, not hours.',
    d: 'Fixed monthly rate tied to a measurable TMAP. We win when your bottleneck moves — not when the timesheet fills.'
  },
  {
    n: '02',
    h: 'Working software in three weeks.',
    d: 'Not a deck, not a demo. A POC running in your environment within 21 days of kickoff, or we don\'t bill the next cycle.'
  },
  {
    n: '03',
    h: 'You own everything.',
    d: 'Code, workflows, data, runbooks — all yours from day one. If we part ways, you keep operating without us.'
  },
  {
    n: '04',
    h: 'No generic chatbots.',
    d: 'Every agent is custom-built around your workflows, your tools, your edge cases. Off-the-shelf is rarely the answer.'
  }];


  const services = [
  {
    n: '01',
    title: 'AI Strategy',
    sub: 'Discovery & TMAP',
    d: 'Two workshops. We map your real workflows, find the pain that compounds, and agree on measurable outcomes before a single line of code is written.'
  },
  {
    n: '02',
    title: 'Custom Automation',
    sub: 'Build & ship',
    d: 'n8n workflows, custom agents, integrations. We design, prototype, and deploy the highest-leverage system first — not the easiest one.'
  },
  {
    n: '03',
    title: 'Data-Driven Insights',
    sub: 'Dashboards & decisions',
    d: 'The system you ship is only as good as what it tells you. Custom analytics, real-time dashboards, and the runbooks to act on them.'
  }];


  const LINKEDIN = 'https://www.linkedin.com/in/joseph-id-8b3b6a27a';
  const CALENDLY = 'https://calendly.com/joseph-rifby/30min';

  return (
    <div style={{ background: CS.bg, color: CS.fg, minHeight: '100%' }}>
      <CSNav active="About" />

      {/* ───────── HERO MANIFESTO ───────── */}
      <div style={{
        maxWidth: CS_W, margin: '0 auto', width: '100%',
        padding: '96px 56px 48px'
      }}>
        <div style={{
          fontFamily: CS.mono, fontSize: 11, color: CS.sub,
          letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 32
        }}>
          About · The operating brief
        </div>
        <h1 style={{
          margin: 0, fontFamily: CS.sans, fontSize: 144, lineHeight: 0.88,
          letterSpacing: -6, fontWeight: 500, maxWidth: 1300
        }}>
          The AI small businesses<br />
          <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
            deserve.
          </span>
        </h1>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          gap: 48, marginTop: 80, paddingTop: 48,
          borderTop: `1px solid ${CS.line}`
        }}>
          <div>
            <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12
            }}>
              Founded
            </div>
            <div style={{ fontFamily: CS.sans, fontSize: 22, fontWeight: 500, lineHeight: 1.3 }}>
              2025 · United Kingdom
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12
            }}>
              Model
            </div>
            <div style={{ fontFamily: CS.sans, fontSize: 22, fontWeight: 500, lineHeight: 1.3 }}>
              Small senior team, outcome-priced, fully owned by you
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12
            }}>
              Stack
            </div>
            <div style={{ fontFamily: CS.sans, fontSize: 22, fontWeight: 500, lineHeight: 1.3 }}>
              n8n · Python · OpenAI · Custom dashboards
            </div>
          </div>
        </div>
      </div>

      {/* ───────── STATS STRIP ───────── */}
      <div style={{
        maxWidth: CS_W, margin: '0 auto', width: '100%',
        padding: '64px 56px'
      }}>
        <div style={{
          fontFamily: CS.mono, fontSize: 11, color: CS.sub,
          letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 24
        }}>
          Strategies that work
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24, paddingTop: 32, borderTop: `1px solid ${CS.line}`
        }}>
          {stats.map((s) =>
          <div key={s.k}>
              <div style={{
              fontFamily: CS.sans, fontSize: 72, lineHeight: 1, fontWeight: 500,
              letterSpacing: -2, marginBottom: 16, color: CS.fg
            }}>
                {s.n}
              </div>
              <div style={{ fontFamily: CS.sans, fontSize: 14, color: CS.sub, lineHeight: 1.45 }}>
                {s.k}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ───────── WHAT WE DO ───────── */}
      <div style={{
        maxWidth: CS_W, margin: '0 auto', width: '100%',
        padding: '96px 56px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 64 }}>
          <div style={{
            fontFamily: CS.mono, fontSize: 11, color: CS.sub,
            letterSpacing: 1.2, textTransform: 'uppercase'
          }}>
            What we do
          </div>
          <h2 style={{
            margin: 0, fontFamily: CS.sans, fontSize: 64, lineHeight: 1.0,
            letterSpacing: -2, fontWeight: 500
          }}>
            We help <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>you</span><br />
            move the work that <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>compounds</span>.
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, borderTop: `1px solid ${CS.line}`
        }}>
          {services.map((s, i) =>
          <div key={s.n} style={{
            padding: '40px 32px 40px 0',
            borderRight: i < services.length - 1 ? `1px solid ${CS.line}` : 'none',
            paddingLeft: i === 0 ? 0 : 32
          }}>
              <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, marginBottom: 24
            }}>
                {s.n} / {s.sub}
              </div>
              <h3 style={{
              margin: '0 0 20px', fontFamily: CS.sans, fontSize: 28,
              lineHeight: 1.1, letterSpacing: -0.8, fontWeight: 500
            }}>
                {s.title}
              </h3>
              <p style={{
              margin: 0, fontFamily: CS.sans, fontSize: 15, lineHeight: 1.55,
              color: CS.sub
            }}>
                {s.d}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ───────── THE TEAM + PRINCIPLES (split) ───────── */}
      <div style={{
        maxWidth: CS_W, margin: '0 auto', width: '100%',
        padding: '96px 56px',
        borderTop: `1px solid ${CS.line}`
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 96, alignItems: 'start' }}>
          {/* Headline + bio */}
          <div>
            <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 24
            }}>
              The team · UK
            </div>
            <h2 style={{
              margin: 0, fontFamily: CS.sans, fontSize: 72, lineHeight: 0.95,
              letterSpacing: -2.5, fontWeight: 500
            }}>
              Small team,<br />
              <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
                full accountability.
              </span>
            </h2>
            <p style={{
              margin: '32px 0 0', fontFamily: CS.sans, fontSize: 19, lineHeight: 1.5,
              color: CS.sub, maxWidth: 620
            }}>Rifby is a small senior team — strategists, engineers, and operators who run every engagement end-to-end. 




            </p>
            <p style={{
              margin: '20px 0 0', fontFamily: CS.sans, fontSize: 19, lineHeight: 1.5,
              color: CS.sub, maxWidth: 620
            }}>
              Backgrounds in operations and software engineering. We've built systems
              for accountants, real-estate teams, e-commerce ops, education, gaming,
              and field services. The pattern is always the same: find the bottleneck
              that compounds, automate it, prove it.
            </p>
          </div>

          {/* Founder badge — compact horizontal card */}
          <div style={{
            background: CS.chip, border: `1px solid ${CS.line}`,
            borderRadius: 20, padding: 24
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <img
                src="assets/joseph-avatar-square.png"
                alt="Joseph Idowu"
                style={{
                  width: 72, height: 72, borderRadius: '50%',
                  objectFit: 'cover', display: 'block', flexShrink: 0
                }} />
              
              <div>
                <div style={{ fontFamily: CS.sans, fontSize: 18, fontWeight: 600, color: CS.fg, letterSpacing: -0.3 }}>
                  Joseph Idowu
                </div>
                <div style={{ fontFamily: CS.sans, fontSize: 13, color: CS.sub, marginTop: 2 }}>
                  Founder, Rifby Ltd
                </div>
              </div>
            </div>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', borderRadius: 999,
              border: `1px solid ${CS.line}`, background: CS.bg,
              fontFamily: CS.sans, fontSize: 13, fontWeight: 500,
              color: CS.fg, textDecoration: 'none', marginBottom: 8
            }}>
              <span>LinkedIn</span>
              <Icon name="arrow-up-right" size={14} color="currentColor" />
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', borderRadius: 999,
              background: CS.fg, color: CS.bg,
              fontFamily: CS.sans, fontSize: 13, fontWeight: 600,
              textDecoration: 'none'
            }}>
              <span>Book a strategy call</span>
              <Icon name="arrow-right" size={14} color="currentColor" />
            </a>
          </div>
        </div>
      </div>

      {/* ───────── PRINCIPLES ───────── */}
      <div style={{
        maxWidth: CS_W, margin: '0 auto', width: '100%',
        padding: '96px 56px', borderTop: `1px solid ${CS.line}`
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 64 }}>
          <div style={{
            fontFamily: CS.mono, fontSize: 11, color: CS.sub,
            letterSpacing: 1.2, textTransform: 'uppercase'
          }}>
            How we work
          </div>
          <h2 style={{
            margin: 0, fontFamily: CS.sans, fontSize: 64, lineHeight: 1.0,
            letterSpacing: -2, fontWeight: 500
          }}>
            Four principles.<br />
            <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
              No exceptions.
            </span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 48, rowGap: 0
        }}>
          {principles.map((p, i) =>
          <div key={p.n} style={{
            padding: '32px 0', borderTop: `1px solid ${CS.line}`,
            borderBottom: i >= principles.length - 2 ? `1px solid ${CS.line}` : 'none'
          }}>
              <div style={{
              fontFamily: CS.mono, fontSize: 11, color: CS.sub,
              letterSpacing: 1.2, marginBottom: 16
            }}>
                / {p.n}
              </div>
              <h3 style={{
              margin: '0 0 12px', fontFamily: CS.sans, fontSize: 26,
              lineHeight: 1.15, letterSpacing: -0.5, fontWeight: 500
            }}>
                {p.h}
              </h3>
              <p style={{
              margin: 0, fontFamily: CS.sans, fontSize: 15, lineHeight: 1.55,
              color: CS.sub, maxWidth: 480
            }}>
                {p.d}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ───────── QUIET CLOSE ───────── */}
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
          Now you know us.{' '}
          <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
            See if we'd work together.
          </span>
        </div>
        <a href="https://calendly.com/joseph-rifby/30min" target="_blank" rel="noopener noreferrer" style={{
          flexShrink: 0,
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '14px 22px', borderRadius: 999,
          border: `1px solid ${CS.line}`, background: CS.chip,
          fontFamily: CS.sans, fontSize: 14, fontWeight: 500,
          color: CS.fg, textDecoration: 'none',
        }}>
          Book a 30-minute call <Icon name="arrow-right" size={14} color="currentColor" />
        </a>
      </div>

      <CSFooter />
    </div>);

};

window.AboutA = AboutA;