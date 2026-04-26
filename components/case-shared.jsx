// Case Study — shared primitives.
// Nav, Footer, tokens shared with the homepage (Direction A v2).
// Real-estate case study content drafted as realistic placeholder.

const CS_W = 1440;

const v2 = (name) => `var(--${name})`;
const CS = {
  bg:    v2('a-bg'),
  bg2:   v2('a-bg2'),
  fg:    v2('a-fg'),
  sub:   v2('a-sub'),
  line:  v2('a-line'),
  chip:  v2('a-chip'),
  invBg: v2('a-invert-bg'),
  invFg: v2('a-invert-fg'),
  ok:    v2('a-ok'),
  navy:  '#0a1428',
  blue:  '#3da5f5',
  serif: '"Instrument Serif", Georgia, serif',
  sans:  '"DM Sans", system-ui, sans-serif',
  mono:  '"JetBrains Mono", ui-monospace, Menlo, monospace',
};

// ───── Case study content (drafted, easy to swap) ─────────────
const CASE = {
  client:   'Harbor & Main',
  industry: 'Real Estate',
  solution: 'Lead Qualification Agent',
  tagline:  'From 2,400 monthly leads to 180 sales-ready conversations — in 30 days.',
  one_line: 'A brokerage drowning in unqualified inquiries. We built the agent that separated signal from noise.',
  tldr: 'We designed a conversational qualification agent that engages every new lead within 60 seconds, scores intent, and books discovery calls directly on agent calendars — freeing the sales team to focus on buyers ready to transact.',
  timeline: '30 days',
  team:     'Rifby — 2 engineers, 1 strategist',
  year:     '2025',
  metrics: [
    { v: '12.3×', l: 'qualified lead rate' },
    { v: '58%',   l: 'reduction in sales SLA' },
    { v: '$180k', l: 'agent hours saved / yr' },
  ],
  inlineNums: {
    leadsMonth:   '2,400',
    qualifiedBefore: '3%',
    qualifiedAfter:  '37%',
    avgResponse:     '60 sec',
    bookedCalls:     '180',
  },
  quote: {
    text: 'We were missing deals because our agents couldn\'t respond fast enough. Rifby\'s system qualifies and books every lead while our team sleeps. It\'s the first AI investment that paid back in six weeks.',
    name: 'Priya Desai',
    role: 'Head of Sales, Harbor & Main',
  },
  stack: ['OpenAI GPT-4.1', 'n8n', 'Salesforce', 'Twilio', 'Calendly API'],
};

// ───── Nav (matches homepage exactly) ─────────────────────────
const CSNav = ({ active = 'Case Studies' }) => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '22px 56px', borderBottom: `1px solid ${CS.line}`,
  }}>
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <img src="assets/logo-v2.png" alt="Rifby" style={{ height: 32, width: 'auto', display: 'block', filter: 'url(#logo-navy)' }} />
    </a>
    <div style={{ display: 'flex', gap: 34, fontFamily: CS.sans, fontSize: 14, color: CS.sub }}>
      {[
        { l: 'About', h: '/about' },
        { l: 'Case Studies', h: '/case-studies' },
        { l: 'Services', h: '/services' },
      ].map(({ l, h }) => (
        <a key={l} href={h} style={{ cursor: 'pointer', color: l === active ? CS.fg : CS.sub, textDecoration: 'none' }}>{l}</a>
      ))}
    </div>
    <a href="/contact" style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px',
      border: `1px solid ${CS.line}`, borderRadius: 999, color: CS.fg,
      fontFamily: CS.sans, fontSize: 13, fontWeight: 500, cursor: 'pointer',
      background: CS.chip, textDecoration: 'none',
    }}>
      Book a call <Icon name="arrow-up-right" size={14} />
    </a>
  </div>
);

// ───── Footer (matches homepage) ──────────────────────────────
const CSFooter = () => (
  <div style={{ padding: '56px 56px 32px', background: 'transparent', borderTop: `1px solid ${CS.line}` }}>
    <div style={{
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48,
      paddingBottom: 48, borderBottom: `1px solid ${CS.line}`,
    }}>
      <div>
        <img src="assets/logo-v2.png" alt="Rifby" style={{ height: 48, width: 'auto', display: 'block', filter: 'url(#logo-navy)' }} />
        <div style={{ marginTop: 16, fontFamily: CS.sans, fontSize: 15, color: CS.sub, maxWidth: 320 }}>
          Cut cost. Save time. Scale faster.
        </div>
      </div>
      {[
        { h: 'Company', l: ['About', 'Case studies', 'Services'] },
        { h: 'Contact', l: ['info@rifby.ai', 'Book a call', 'LinkedIn'] },
        { h: 'Legal',   l: ['Privacy', 'Terms'] },
      ].map((col, i) => (
        <div key={i}>
          <div style={{ fontFamily: CS.mono, fontSize: 11, color: CS.sub, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 16 }}>{col.h}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col.l.map((x, j) => (
              <div key={j} style={{ fontFamily: CS.sans, fontSize: 14, color: CS.fg }}>{x}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div style={{
      display: 'flex', justifyContent: 'space-between', paddingTop: 24,
      fontFamily: CS.mono, fontSize: 11, color: CS.sub,
      textTransform: 'uppercase', letterSpacing: 0.5,
    }}>
      <span>© 2026 Rifby Ltd</span>
    </div>
  </div>
);

// ───── Placeholder tuned for case study scale ─────────────────
const CSPlaceholder = ({ label, aspect = '16/9', pattern = 'dots', style = {} }) => {
  const patt = pattern === 'dots'
    ? `radial-gradient(var(--a-sub) 1px, transparent 1.5px)`
    : `repeating-linear-gradient(135deg, var(--a-chip) 0 2px, transparent 2px 14px)`;
  return (
    <div style={{
      aspectRatio: aspect, background: CS.chip, backgroundImage: patt,
      backgroundSize: pattern === 'dots' ? '14px 14px' : 'auto',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: CS.mono, fontSize: 11, color: CS.sub, letterSpacing: 0.4,
      textTransform: 'uppercase',
      border: `1px solid ${CS.line}`, borderRadius: 6, ...style,
    }}>[{label}]</div>
  );
};

Object.assign(window, { CS, CS_W, CASE, CSNav, CSFooter, CSPlaceholder });
