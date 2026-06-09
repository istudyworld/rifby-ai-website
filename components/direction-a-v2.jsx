// Direction A (v2) — Bold Dark / Cream
// ALL colors route through CSS vars on :root so body.light / body.dark
// instantly repaint the palette. No hard-coded hexes in component JSX.

const A_W = 1440;

// helpers — resolve to var() strings so React inline styles track theme
const v = (name) => `var(--${name})`;
const A = {
  bg: v('a-bg'),
  bg2: v('a-bg2'),
  fg: v('a-fg'),
  sub: v('a-sub'),
  line: v('a-line'),
  chip: v('a-chip'),
  invBg: v('a-invert-bg'),
  invFg: v('a-invert-fg'),
  ok: v('a-ok'),
  serif: '"Instrument Serif", Georgia, serif',
  sans: '"DM Sans", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, Menlo, monospace'
};

// Theme-aware Placeholder + LogoRow (override the shared ones locally for A)
const APlaceholder = ({ label, aspect = '16/9', pattern = 'stripes', style = {} }) => {
  const patt = pattern === 'dots' ?
  `radial-gradient(var(--a-sub) 1px, transparent 1.5px)` :
  `repeating-linear-gradient(135deg, var(--a-chip) 0 2px, transparent 2px 14px)`;
  return (
    <div style={{
      aspectRatio: aspect, background: A.chip, backgroundImage: patt,
      backgroundSize: pattern === 'dots' ? '12px 12px' : 'auto',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: A.mono, fontSize: 11, color: A.sub, letterSpacing: 0.4,
      textTransform: 'uppercase',
      border: `1px solid ${A.line}`, borderRadius: 4, ...style
    }}>[{label}]</div>);

};

const ALogoRow = () => {
  const names = ['AWS', 'CANVAS', 'TOPGOLF', 'BARK', 'TEXT'];
  return (
    <div style={{ display: 'flex', gap: 64, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      {names.map((n, i) =>
      <div key={i} style={{
        color: A.sub, fontSize: 18, fontWeight: 600, letterSpacing: 2, fontFamily: A.mono
      }}>{n}</div>
      )}
    </div>);

};

// ── Nav ──
const ANav = () =>
<div style={{
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '22px 56px', borderBottom: `1px solid ${A.line}`
}}>
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      {/* Logo tinted to brand navy #0a1428 via SVG feColorMatrix filter */}
      <img src="assets/logo-v2.png" alt="Rifby" style={{ height: 32, width: 'auto', display: 'block', filter: 'url(#logo-navy)' }} />
    </a>
    <div style={{ display: 'flex', gap: 34, fontFamily: A.sans, fontSize: 14, color: A.sub }}>
      {[
    { l: 'About', h: '/about' },
    { l: 'Case Studies', h: '/case-studies' },
    { l: 'Services', h: '/services' }].
    map(({ l, h }) =>
    <a key={l} href={h} style={{ cursor: 'pointer', color: A.sub, textDecoration: 'none' }}>{l}</a>
    )}
    </div>
    <a href="/contact" style={{
    display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px',
    border: `1px solid ${A.line}`, borderRadius: 999, color: A.fg,
    fontFamily: A.sans, fontSize: 13, fontWeight: 500, cursor: 'pointer',
    background: A.chip, textDecoration: 'none'
  }}>
      Book a call <Icon name="arrow-up-right" size={14} />
    </a>
  </div>;


// ── Hero ──
const AHero = () =>
<div style={{ padding: '56px 56px 72px', position: 'relative' }}>
    <h1 style={{
    margin: 0, fontFamily: A.sans, lineHeight: 0.92,
    letterSpacing: -4.5, fontWeight: 500, color: A.fg, maxWidth: 1200, fontSize: "128px"
  }}>
      AI automation,<br />
      <span style={{ fontFamily: A.serif, fontStyle: 'italic', fontWeight: 400 }}>built</span> for your<br />
      business.
    </h1>

    <div style={{
    display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64,
    marginTop: 56, alignItems: 'end'
  }}>
      <div>
        <p style={{
        margin: 0, fontFamily: A.sans, fontSize: 20, lineHeight: 1.45,
        color: A.sub, maxWidth: 520
      }}>
          We design, build, and operate custom AI agents.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
          <a href="https://calendly.com/joseph-rifby/30min" target="_blank" rel="noopener noreferrer" style={{
          padding: '18px 28px',
          background: A.invBg,
          color: A.invFg,
          border: 'none',
          borderRadius: 999, fontFamily: A.sans, fontSize: 15, fontWeight: 600,
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 8px 24px rgba(8,86,152,0.28)', textDecoration: 'none'
        }}>
            Book a strategy call <Icon name="arrow-right" size={16} color="currentColor" />
          </a>
          <a href="/case-studies" style={{
          padding: '18px 28px', background: 'transparent', color: A.fg,
          border: `1px solid ${A.line}`, borderRadius: 999,
          fontFamily: A.sans, fontSize: 15, fontWeight: 500, cursor: 'pointer',
          textDecoration: 'none'
        }}>
            See case studies
          </a>
        </div>
      </div>

      <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
      borderTop: `1px solid ${A.line}`
    }}>
        {[
      { n: '42%', l: 'avg operating cost cut' },
      { n: '17h', l: 'reclaimed per employee / week' },
      { n: '3wk', l: 'first production POC' }].
      map((s, i, arr) =>
      <div key={i} style={{
        padding: '20px 18px 0',
        borderRight: i < arr.length - 1 ? `1px solid ${A.line}` : 'none'
      }}>
            <div style={{
          fontFamily: A.serif, fontSize: 52, lineHeight: 1, color: A.fg,
          fontStyle: 'italic', fontWeight: 400
        }}>{s.n}</div>
            <div style={{
          fontFamily: A.mono, fontSize: 11, color: A.sub, marginTop: 10,
          textTransform: 'uppercase', letterSpacing: 0.5
        }}>{s.l}</div>
          </div>
      )}
      </div>
    </div>

    <div style={{
    marginTop: 56, borderRadius: 16, overflow: 'hidden',
    boxShadow: '0 30px 80px -48px rgba(8,86,152,0.40)'
  }}>
      <video autoPlay muted loop playsInline poster="assets/hero-poster.jpg"
      style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16 / 9', objectFit: 'cover' }}>
        <source src="assets/hero-loop-v2.mp4" type="video/mp4" />
      </video>
    </div>
  </div>;


const ALogos = () => null;

const AServices = () => {
  const [active, setActive] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const items = [
  { k: '01', t: 'Custom AI agents', d: 'Agents that handle the long-tail of workflows no SaaS tool covers — scoped, tested, owned by you.', icon: 'cpu' },
  { k: '02', t: 'Custom software', d: 'Bespoke web apps, internal tools, and client portals for when off-the-shelf software cannot do the job.', icon: 'code' },
  { k: '03', t: 'Workflow automation', d: 'n8n, Zapier, or custom — the right tool for the job. We pick based on what you want to maintain.', icon: 'workflow' },
  { k: '04', t: 'Analytics & data', d: 'Clean pipelines plus real-time dashboards on the metrics your automations actually move. No vanity KPIs.', icon: 'bar-chart' },
  { k: '05', t: 'AI strategy & roadmapping', d: 'A TMAP — technical mutual action plan — with deliverables, timelines, and what we will not do.', icon: 'target' },
  { k: '06', t: 'Handoff & ownership', d: 'You own the IP on day one. Full docs, training, runbooks. Leave any time.', icon: 'shield' }];

  return (
    <div style={{ padding: '120px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 64 }}>
        <div style={{ fontFamily: A.mono, fontSize: 12, color: A.sub, letterSpacing: 1, textTransform: 'uppercase' }}>
          What we build
        </div>
        <h2 style={{
          margin: 0, fontFamily: A.sans, fontSize: 56, lineHeight: 1,
          letterSpacing: -2, color: A.fg, fontWeight: 500, maxWidth: 800
        }}>
          Six things, done deliberately.<span style={{ color: A.sub }}> The rest is noise.</span>
        </h2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        borderTop: `1px solid ${A.line}`, borderLeft: `1px solid ${A.line}`
      }}>
        {items.map((it, i) => {
        const on = active === i;
        const hot = hover === i;
        return (
        <div key={i}
          onClick={() => setActive(i)}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(-1)}
          style={{
          padding: '36px 32px 40px',
          borderBottom: `1px solid ${A.line}`,
          borderRight: `1px solid ${A.line}`,
          display: 'flex', flexDirection: 'column', gap: 16, minHeight: 260,
          cursor: 'pointer',
          background: on ? 'rgba(8,86,152,0.06)' : hot ? A.chip : 'transparent',
          boxShadow: on ? `inset 0 0 0 2px ${A.ok}` : 'none',
          transition: 'background .18s ease, box-shadow .18s ease'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: A.mono, fontSize: 11, color: on ? A.ok : A.sub, letterSpacing: 0.5 }}>{it.k}</div>
              <Icon name={it.icon} size={22} color={on ? A.ok : 'currentColor'} stroke={1.2} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 12px', fontFamily: A.sans, fontSize: 24, letterSpacing: -0.5, color: A.fg, fontWeight: 500 }}>{it.t}</h3>
              <p style={{ margin: 0, fontFamily: A.sans, fontSize: 14, lineHeight: 1.55, color: A.sub }}>{it.d}</p>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: A.mono, fontSize: 11, letterSpacing: 0.6, textTransform: 'uppercase',
              color: A.ok, opacity: on ? 1 : 0, transition: 'opacity .18s ease'
            }}>
              Selected <Icon name="arrow-right" size={12} color="currentColor" />
            </div>
          </div>
        );
        })}
      </div>
    </div>);

};

const AProcess = () => {
  const steps = [
  { n: 'I', t: 'Discover', w: 'Week 1–2', d: 'Two workshops. We map your real workflows, find the pain that compounds, agree on measurable outcomes and a fixed monthly rate.', bullets: ['TMAP drafted', 'Success criteria signed', 'Scope locked'] },
  { n: 'II', t: 'Design', w: 'Week 2–4', d: 'We prototype the highest-leverage agent first. You see a working POC within three weeks — not a deck.', bullets: ['Architecture decisions documented', 'POC in your environment', 'Weekly demos'] },
  { n: 'III', t: 'Automate', w: 'Week 4+', d: 'We ship, measure, and hand off. Documentation, training, and runbooks so your team owns the system — not us.', bullets: ['Production rollout', 'Dashboards live', 'Full IP handoff'] }];

  return (
    <div style={{ padding: '120px 56px', background: 'transparent', borderTop: `1px solid ${A.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 80 }}>
        <div style={{ fontFamily: A.mono, fontSize: 12, color: A.sub, letterSpacing: 1, textTransform: 'uppercase' }}>Process</div>
        <h2 style={{ margin: 0, fontFamily: A.sans, fontSize: 56, lineHeight: 1, letterSpacing: -2, color: A.fg, fontWeight: 500, maxWidth: 800 }}>
          From kickoff to production,<span style={{ fontFamily: A.serif, fontStyle: 'italic', color: A.sub }}> in three moves.</span>
        </h2>
      </div>

      <div style={{ marginBottom: 32 }}>
        <img src="assets/process-flow.jpg" alt="Rifby three-stage delivery pipeline: discover, design, automate"
        style={{
          width: '100%', height: 'auto', display: 'block',
          WebkitMaskImage: 'radial-gradient(115% 130% at 50% 50%, #000 52%, transparent 100%)',
          maskImage: 'radial-gradient(115% 130% at 50% 50%, #000 52%, transparent 100%)'
        }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
        {steps.map((s, i) =>
        <div key={i} style={{
          padding: '32px 28px', background: A.chip,
          border: `1px solid ${A.line}`, borderRadius: 4,
          display: 'flex', flexDirection: 'column', gap: 18, minHeight: 340
        }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: A.serif, fontStyle: 'italic', fontSize: 72, lineHeight: 0.9, color: A.fg, fontWeight: 400 }}>{s.n}</div>
              <div style={{ fontFamily: A.mono, fontSize: 11, color: A.sub, textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.w}</div>
            </div>
            <h3 style={{ margin: 0, fontFamily: A.sans, fontSize: 28, letterSpacing: -0.8, color: A.fg, fontWeight: 500 }}>{s.t}</h3>
            <p style={{ margin: 0, fontFamily: A.sans, fontSize: 14.5, lineHeight: 1.6, color: A.sub, flex: 1 }}>{s.d}</p>
            <div style={{ borderTop: `1px solid ${A.line}`, paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {s.bullets.map((b, j) =>
            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: A.mono, fontSize: 11.5, color: A.fg }}>
                  <Icon name="check" size={12} color="currentColor" />
                  <span>{b}</span>
                </div>
            )}
            </div>
          </div>
        )}
      </div>
    </div>);

};

const AQuote = () =>
<div style={{
  padding: '120px 56px', background: 'transparent',
  borderTop: `1px solid ${A.line}`, borderBottom: `1px solid ${A.line}`
}}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <Icon name="quote" size={48} color="currentColor" />
      <div style={{
      fontFamily: A.sans, fontSize: 44, lineHeight: 1.2,
      letterSpacing: -1.2, color: A.fg, fontWeight: 400,
      marginTop: 32, marginBottom: 40
    }}>
        "Rifby didn't sell us AI. They sold us outcomes, and then they actually
        hit them. We cut <span style={{ fontFamily: A.serif, fontStyle: 'italic' }}>40% of operational costs</span> in
        three months — and we own every line of code they wrote."
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div>
          <div style={{ fontFamily: A.sans, fontSize: 16, color: A.fg, fontWeight: 500 }}>James Patel</div>
          <div style={{ fontFamily: A.mono, fontSize: 12, color: A.sub, marginTop: 2 }}>CEO · mid-market SaaS</div>
        </div>
      </div>
    </div>
  </div>;


const AFaq = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
  { q: 'What does an engagement actually cost?', a: 'Pricing is bespoke per engagement, agreed during discovery. After the discovery phase we agree on a fixed monthly rate tied to a TMAP with clear deliverables. Typical engagements run 3–6 months.' },
  { q: 'Who owns the IP?', a: 'You do — from day one. All n8n workflows, custom code, databases, and documentation. If we part ways, we provide a full handoff with runbooks and user guides.' },
  { q: 'How fast will I see something working?', a: 'A production POC within 3 weeks of kickoff. Not a deck, not a demo — something real running in your environment.' },
  { q: 'What industries do you know?', a: 'SaaS, Retail, Finance, Real Estate, E-commerce. Our approach is industry-agnostic — we go deep during discovery.' },
  { q: 'Custom build or off-the-shelf?', a: 'Whichever is more efficient. We scope it together and show our reasoning — including what we would skip entirely.' }];

  return (
    <div style={{ padding: '120px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }}>
        <div>
          <div style={{ fontFamily: A.mono, fontSize: 12, color: A.sub, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>FAQ</div>
          <h2 style={{ margin: 0, fontFamily: A.sans, fontSize: 56, lineHeight: 1, letterSpacing: -2, color: A.fg, fontWeight: 500 }}>Plainly<br />answered.</h2>
        </div>
        <div>
          {items.map((it, i) =>
          <AFaqItem key={i} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          )}
          <div style={{ borderTop: `1px solid ${A.line}` }} />
        </div>
      </div>
    </div>);

};

const AFaqItem = ({ q, a, open, onToggle }) =>
<div style={{ borderTop: `1px solid ${A.line}` }}>
    <button onClick={onToggle} style={{
    width: '100%', padding: '22px 0', background: 'none', border: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    cursor: 'pointer', textAlign: 'left', color: A.fg, font: 'inherit'
  }}>
      <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: -0.2 }}>{q}</span>
      <Icon name={open ? 'minus' : 'plus'} size={18} color="currentColor" />
    </button>
    {open &&
  <div style={{ paddingBottom: 22, color: A.sub, fontSize: 15, lineHeight: 1.6, maxWidth: 640 }}>
        {a}
      </div>
  }
  </div>;


const ACta = () =>
<div style={{
  maxWidth: A_W, margin: '0 auto', width: '100%',
  padding: '120px 56px 96px',
  borderTop: `1px solid ${A.line}`,
  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 64
}}>
    <div style={{
    fontFamily: A.sans, fontSize: 32, lineHeight: 1.25,
    letterSpacing: -0.8, fontWeight: 500, maxWidth: 720, color: A.fg
  }}>
      Tell us what's costing you time.{' '}
      <span style={{ fontFamily: A.serif, fontStyle: 'italic', fontWeight: 400, color: A.sub }}>
        We'll tell you whether AI is the right lever.
      </span>
    </div>
    <a href="https://calendly.com/joseph-rifby/30min" target="_blank" rel="noopener noreferrer" style={{
    flexShrink: 0,
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '14px 22px', borderRadius: 999,
    border: `1px solid ${A.line}`, background: A.chip,
    fontFamily: A.sans, fontSize: 14, fontWeight: 500,
    color: A.fg, textDecoration: 'none'
  }}>
      Book a 30-minute call <Icon name="arrow-right" size={14} color="currentColor" />
    </a>
  </div>;


const AFooter = () =>
<div style={{ padding: '56px 56px 32px', background: 'transparent', borderTop: `1px solid ${A.line}` }}>
    <div style={{
    display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48,
    paddingBottom: 48, borderBottom: `1px solid ${A.line}`
  }}>
      <div>
        <img src="assets/logo-v2.png" alt="Rifby" style={{ height: 48, width: 'auto', display: 'block', filter: 'url(#logo-navy)' }} />
        <div style={{ marginTop: 16, fontFamily: A.sans, fontSize: 15, color: A.sub, maxWidth: 320 }}>
          Cut cost. Save time. Scale faster.
        </div>
      </div>
      {[
    { h: 'Company', l: ['About', 'Case studies', 'Services'] },
    { h: 'Contact', l: ['info@rifby.ai', 'Book a call', 'LinkedIn'] },
    { h: 'Legal', l: ['Privacy', 'Terms'] }].
    map((col, i) =>
    <div key={i}>
          <div style={{ fontFamily: A.mono, fontSize: 11, color: A.sub, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 16 }}>{col.h}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col.l.map((x, j) =>
        <div key={j} style={{ fontFamily: A.sans, fontSize: 14, color: A.fg }}>{x}</div>
        )}
          </div>
        </div>
    )}
    </div>
    <div style={{
    display: 'flex', justifyContent: 'space-between',
    paddingTop: 24, fontFamily: A.mono, fontSize: 11,
    color: A.sub, textTransform: 'uppercase', letterSpacing: 0.5
  }}>
      <span>© 2026 Rifby Ltd</span>
    </div>
  </div>;


const DirectionA = () =>
<div style={{
  maxWidth: A_W, margin: '0 auto', background: 'transparent', color: A.fg, fontFamily: A.sans,
  fontSynthesis: 'none', WebkitFontSmoothing: 'antialiased',
  position: 'relative', zIndex: 1
}}>
    <ANav />
    <AHero />
    <AServices />
    <AProcess />
    <AQuote />
    <AFaq />
    <ACta />
    <AFooter />
  </div>;


window.DirectionA = DirectionA;