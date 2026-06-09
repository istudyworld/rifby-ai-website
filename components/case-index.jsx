// Case Studies — index gallery page.
// Asymmetric bento/masonry grid: one featured card spans wide, others flow.
// Filter chips at top toggle visible cards.
// Matches homepage tokens (CS.* routes to CSS vars).

const CaseIndex = () => {
  const [filter, setFilter] = React.useState('All');

  const visible = filter === 'All'
    ? CASES
    : CASES.filter(c => c.categories.includes(filter));

  return (
    <div style={{
      maxWidth: CS_W, margin: '0 auto', color: CS.fg, fontFamily: CS.sans,
      fontSynthesis: 'none', WebkitFontSmoothing: 'antialiased',
      position: 'relative', zIndex: 1,
    }}>
      <CSNav />

      {/* Page hero */}
      <div style={{ padding: '80px 56px 56px' }}>
        <div style={{ fontFamily: CS.mono, fontSize: 11, color: CS.sub, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24 }}>
          Case Studies
        </div>
        <h1 style={{
          margin: 0, fontFamily: CS.sans, fontSize: 96, lineHeight: 0.98,
          letterSpacing: -4, fontWeight: 500, maxWidth: 1200,
        }}>
          Proof, not
          <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}> promises.</span>
        </h1>
        <p style={{
          marginTop: 32, fontFamily: CS.sans, fontSize: 20, lineHeight: 1.5,
          color: CS.sub, maxWidth: 640,
        }}>
          A selection of recent work — AI automations, custom apps, and websites built for real businesses solving real bottlenecks.
        </p>
      </div>

      {/* Filter chips */}
      <div style={{
        padding: '0 56px 48px',
        display: 'flex', flexWrap: 'wrap', gap: 8,
        borderBottom: `1px solid ${CS.line}`, paddingBottom: 32,
      }}>
        {CATEGORIES.map(cat => {
          const on = filter === cat;
          return (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              padding: '10px 16px', borderRadius: 999,
              border: `1px solid ${on ? CS.fg : CS.line}`,
              background: on ? CS.fg : 'transparent',
              color: on ? CS.bg : CS.fg,
              fontFamily: CS.sans, fontSize: 13, fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.15s',
            }}>
              {cat}
            </button>
          );
        })}
      </div>

      {/* Bento grid — 6 columns × variable rows */}
      <div style={{ padding: '48px 56px 120px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 16,
        }}>
          {visible.map((c, i) => {
            // Featured card spans 4 cols × 2 rows, others span 3 cols
            const isFeatured = c.featured;
            return (
              <div key={c.id} style={{
                gridColumn: isFeatured ? 'span 4' : 'span 3',
                gridRow: isFeatured ? 'span 2' : 'span 1',
                minHeight: isFeatured ? 560 : 420,
                padding: isFeatured ? 40 : 32,
                border: `1px solid ${CS.line}`,
                borderRadius: 10,
                background: CS.chip,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative', overflow: 'hidden',
                color: 'inherit',
              }}>
                {/* Top meta row */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'start',
                }}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: CS.mono, fontSize: 10, color: CS.sub,
                      padding: '4px 10px', border: `1px solid ${CS.line}`,
                      borderRadius: 999, textTransform: 'uppercase', letterSpacing: 0.8,
                      background: CS.bg,
                    }}>
                      {c.service}
                    </span>
                    <span style={{
                      fontFamily: CS.mono, fontSize: 10, color: CS.sub,
                      padding: '4px 10px', textTransform: 'uppercase', letterSpacing: 0.8,
                    }}>
                      {c.industry}
                    </span>
                  </div>
                </div>

                {/* Body — headline + blurb */}
                <div style={{ marginTop: 32 }}>
                  <div style={{
                    fontFamily: CS.mono, fontSize: 11, color: CS.sub,
                    letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 14,
                  }}>
                    {c.client}{c.location ? ` · ${c.location}` : ''}
                  </div>
                  <h3 style={{
                    margin: 0, fontFamily: CS.sans,
                    fontSize: isFeatured ? 40 : 26,
                    lineHeight: 1.1, letterSpacing: isFeatured ? -1.5 : -0.8,
                    fontWeight: 500, color: CS.fg,
                  }}>
                    {c.headline.split('.')[0]}.
                    {c.headline.split('.').length > 2 && (
                      <span style={{ fontFamily: CS.serif, fontStyle: 'italic', color: CS.sub }}>
                        {' '}{c.headline.split('.').slice(1).join('.')}
                      </span>
                    )}
                  </h3>
                  {isFeatured && (
                    <p style={{
                      margin: '20px 0 0', fontFamily: CS.sans, fontSize: 16,
                      lineHeight: 1.55, color: CS.sub, maxWidth: 540,
                    }}>
                      {c.blurb}
                    </p>
                  )}
                </div>

                {/* Metrics strip */}
                <div style={{
                  marginTop: 32, paddingTop: 24,
                  borderTop: `1px solid ${CS.line}`,
                  display: 'flex', gap: isFeatured ? 40 : 24,
                }}>
                  {c.metrics.map((m, j) => (
                    <div key={j}>
                      <div style={{
                        fontFamily: CS.sans,
                        fontSize: isFeatured ? 36 : 24,
                        fontWeight: 500, letterSpacing: -1,
                        color: CS.fg, lineHeight: 1,
                      }}>
                        {m.v}
                      </div>
                      <div style={{
                        marginTop: 6, fontFamily: CS.mono, fontSize: 10,
                        color: CS.sub, textTransform: 'uppercase', letterSpacing: 0.8,
                      }}>
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {visible.length === 0 && (
          <div style={{
            padding: '80px 0', textAlign: 'center',
            fontFamily: CS.sans, fontSize: 18, color: CS.sub,
          }}>
            No projects in this category yet.
          </div>
        )}
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
          Got a bottleneck{' '}
          <span style={{ fontFamily: CS.serif, fontStyle: 'italic', fontWeight: 400, color: CS.sub }}>
            worth solving?
          </span>
        </div>
        <a href="https://calendly.com/joseph-rifby/30min" target="_blank" rel="noopener noreferrer" style={{
          flexShrink: 0,
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '15px 24px', borderRadius: 999,
          border: 'none', background: CS.invBg,
          fontFamily: CS.sans, fontSize: 14, fontWeight: 600,
          color: CS.invFg, textDecoration: 'none',
        }}>
          Book a strategy call <Icon name="arrow-right" size={14} color="currentColor" />
        </a>
      </div>

      <CSFooter />
    </div>
  );
};

window.CaseIndex = CaseIndex;
