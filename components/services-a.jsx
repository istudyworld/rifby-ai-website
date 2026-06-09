// Services — Variation A · Stacked chapters.
// Each service gets its own full-width vertical chapter: oversized number,
// positioning headline, deliverables, "who it's for", process micro-timeline,
// and a small type-led schematic diagram.

// Tiny SVG schematics, all using currentColor so they theme with light/dark.
const ServiceDiagram = ({ kind }) => {
  const stroke = 'currentColor';
  const fill = 'none';
  const common = { stroke, fill, strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round' };

  if (kind === 'funnel') {
    return (
      <svg viewBox="0 0 260 180" style={{ width: '100%', height: 'auto', color: 'currentColor' }}>
        {/* wide top, narrow out */}
        {[18, 40, 62, 84, 106, 128, 150].map((y, i) => (
          <circle key={i} cx={20 + (i % 3) * 22} cy={y} r="3" fill={stroke} opacity={0.5 - i * 0.04} />
        ))}
        <path d="M 80 20 L 240 20 L 200 90 L 180 90 L 180 170 L 140 170 L 140 90 L 120 90 Z" {...common} />
        <circle cx="160" cy="170" r="4" fill={stroke} />
      </svg>
    );
  }
  if (kind === 'network') {
    return (
      <svg viewBox="0 0 260 180" style={{ width: '100%', height: 'auto', color: 'currentColor' }}>
        {/* hub + spokes */}
        <circle cx="130" cy="90" r="22" {...common} />
        <text x="130" y="94" fontSize="10" fontFamily="monospace" fill={stroke} textAnchor="middle">RFBY</text>
        {[
          [30, 30], [230, 30], [20, 150], [240, 150], [130, 20], [130, 160],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={130} y1={90} x2={x} y2={y} {...common} strokeDasharray="2 3" opacity="0.5" />
            <rect x={x - 18} y={y - 10} width="36" height="20" rx="3" {...common} />
          </g>
        ))}
      </svg>
    );
  }
  // pipeline
  return (
    <svg viewBox="0 0 260 180" style={{ width: '100%', height: 'auto', color: 'currentColor' }}>
      {/* horizontal pipe with stages */}
      {[40, 100, 160, 220].map((x, i) => (
        <g key={i}>
          <rect x={x - 18} y={80} width="36" height="36" rx="4" {...common} />
          {i < 3 && <line x1={x + 18} y1={98} x2={x + 42} y2={98} {...common} />}
        </g>
      ))}
      {/* output bars */}
      {[30, 50, 42, 66].map((h, i) => (
        <rect key={i} x={28 + i * 16} y={160 - h} width="10" height={h} fill={stroke} opacity={0.7} />
      ))}
      <text x="130" y="40" fontSize="10" fontFamily="monospace" fill={stroke} textAnchor="middle" opacity="0.6">SOURCE → MODEL → METRICS</text>
    </svg>
  );
};

const ServicesA = () => {
  const SV = window.SERVICES;
  const M = window.SERVICES_META;

  return (
    <div style={{ background: CS.bg, color: CS.fg, minHeight: '100%' }}>
      <CSNav active="Services" />

      {/* ───────── HERO ───────── */}
      <div style={{
        maxWidth: CS_W, margin: '0 auto', width: '100%',
        padding: '96px 56px 72px',
      }}>
        <div style={{
          fontFamily: CS.mono, fontSize: 11, color: CS.sub,
          letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 32,
        }}>
          Services · What we do
        </div>
        <h1 style={{
          margin: 0, fontFamily: CS.sans, fontSize: 136, lineHeight: 0.9,
          letterSpacing: -6, fontWeight: 500, maxWidth: 1300,
        }}>
          {M.headline}
          <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
            {' '}{M.headlineItalic}{' '}
          </span>
          {M.headlineCont}
        </h1>
        <p style={{
          margin: '40px 0 0', fontFamily: CS.sans, fontSize: 22,
          lineHeight: 1.55, color: CS.sub, maxWidth: 780,
        }}>
          {M.subhead}
        </p>
      </div>

      {/* ───────── SERVICE CHAPTERS ───────── */}
      {SV.map((s, i) => (
        <div key={s.slug} style={{
          borderTop: `1px solid ${CS.line}`,
          background: i % 2 === 1 ? CS.bg2 : CS.bg,
        }}>
          <div style={{
            maxWidth: CS_W, margin: '0 auto', width: '100%',
            padding: '120px 56px',
          }}>
            {/* Chapter header: big number + title + tag */}
            <div style={{
              display: 'grid', gridTemplateColumns: '240px 1fr', gap: 80,
              alignItems: 'start', marginBottom: 72,
            }}>
              <div style={{
                fontFamily: CS.sans, fontSize: 180, lineHeight: 0.85,
                letterSpacing: -8, fontWeight: 500, color: CS.fg,
              }}>
                {s.n}
              </div>
              <div>
                <div style={{
                  fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                  letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 20,
                }}>
                  Service {s.n}
                </div>
                <h2 style={{
                  margin: 0, fontFamily: CS.sans, fontSize: 88, lineHeight: 0.95,
                  letterSpacing: -3.5, fontWeight: 500,
                }}>
                  {s.name}
                  <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
                    {' '}— {s.tag.toLowerCase()}.
                  </span>
                </h2>
                <p style={{
                  margin: '32px 0 0', fontFamily: CS.sans, fontSize: 24,
                  lineHeight: 1.45, color: CS.fg, letterSpacing: -0.4, maxWidth: 820,
                }}>
                  {s.lead}
                </p>
                <p style={{
                  margin: '20px 0 0', fontFamily: CS.sans, fontSize: 17,
                  lineHeight: 1.65, color: CS.sub, maxWidth: 820,
                }}>
                  {s.description}
                </p>
              </div>
            </div>

            {/* Three-col body: deliverables / who it's for / diagram */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 40,
              borderTop: `1px solid ${CS.line}`, paddingTop: 40,
            }}>
              {/* Deliverables */}
              <div>
                <div style={{
                  fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                  letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 20,
                }}>
                  What you get
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {s.deliverables.map((d, di) => (
                    <li key={di} style={{
                      display: 'grid', gridTemplateColumns: '28px 1fr', gap: 10,
                      padding: '14px 0', borderBottom: `1px solid ${CS.line}`,
                      fontFamily: CS.sans, fontSize: 15, lineHeight: 1.5,
                      color: CS.fg,
                    }}>
                      <span style={{ fontFamily: CS.mono, fontSize: 11, color: CS.sub, letterSpacing: 1.2 }}>
                        {String(di + 1).padStart(2, '0')}
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who it's for */}
              <div>
                <div style={{
                  fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                  letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 20,
                }}>
                  Who it's for
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {s.forWho.map((w, wi) => (
                    <li key={wi} style={{
                      padding: '14px 0', borderBottom: `1px solid ${CS.line}`,
                      fontFamily: CS.sans, fontSize: 15, lineHeight: 1.5, color: CS.fg,
                    }}>
                      {w}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 28 }}>
                  <div style={{
                    fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                    letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12,
                  }}>
                    Process
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {s.process.map((p, pi) => (
                      <div key={pi} style={{
                        display: 'grid', gridTemplateColumns: '70px 1fr', gap: 12,
                        fontFamily: CS.sans, fontSize: 14,
                      }}>
                        <span style={{ fontFamily: CS.mono, color: CS.sub, fontSize: 11, letterSpacing: 0.8 }}>
                          {p.step}
                        </span>
                        <span>
                          <span style={{ fontWeight: 500, color: CS.fg }}>{p.title}.</span>
                          <span style={{ color: CS.sub }}> {p.body}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Diagram + stack */}
              <div>
                <div style={{
                  fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                  letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 20,
                }}>
                  Snapshot
                </div>
                {s.image
                  ? <img src={s.image} alt={s.name} style={{
                      width: '100%', height: 'auto', display: 'block', borderRadius: 10,
                      WebkitMaskImage: 'radial-gradient(120% 122% at 50% 48%, #000 56%, transparent 100%)',
                      maskImage: 'radial-gradient(120% 122% at 50% 48%, #000 56%, transparent 100%)'
                    }} />
                  : <div style={{
                      border: `1px solid ${CS.line}`, borderRadius: 12, background: CS.chip,
                      padding: 24, minHeight: 200, color: CS.fg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <ServiceDiagram kind={s.diagram} />
                    </div>}
                <div style={{ marginTop: 24 }}>
                  <div style={{
                    fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                    letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12,
                  }}>
                    Stack
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {s.stack.map((t, ti) => (
                      <span key={ti} style={{
                        padding: '6px 10px', border: `1px solid ${CS.line}`,
                        borderRadius: 999, fontFamily: CS.mono, fontSize: 11,
                        color: CS.fg, letterSpacing: 0.2,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

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
          Not sure which?{' '}
          <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
            Start with a call.
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
    </div>
  );
};

Object.assign(window, { ServicesA });
