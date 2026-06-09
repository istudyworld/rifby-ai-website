// Shared primitives — Icon + Placeholder.
// Attached to window so every Babel script can consume them.

const Icon = ({ name, size = 20, color = 'currentColor', stroke = 1.5 }) => {
  const c = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arrow-right':
      return <svg {...c}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'arrow-up-right':
      return <svg {...c}><path d="M7 17L17 7M7 7h10v10"/></svg>;
    case 'arrow-down':
      return <svg {...c}><path d="M12 5v14M5 12l7 7 7-7"/></svg>;
    case 'check':
      return <svg {...c}><path d="M20 6L9 17l-5-5"/></svg>;
    case 'plus':
      return <svg {...c}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus':
      return <svg {...c}><path d="M5 12h14"/></svg>;
    case 'quote':
      return <svg {...c}><path d="M3 7c0-1.1.9-2 2-2h4v6H5c-1.1 0-2-.9-2-2V7zM15 7c0-1.1.9-2 2-2h4v6h-4c-1.1 0-2-.9-2-2V7z"/><path d="M5 11v4c0 1.1-.9 2-2 2M17 11v4c0 1.1-.9 2-2 2"/></svg>;
    case 'zap':
      return <svg {...c}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
    case 'layers':
      return <svg {...c}><path d="M12 2l10 6-10 6L2 8l10-6z"/><path d="M2 14l10 6 10-6M2 18l10 6 10-6"/></svg>;
    case 'bar-chart':
      return <svg {...c}><path d="M3 20h18M7 20V10M12 20V4M17 20v-7"/></svg>;
    case 'cpu':
      return <svg {...c}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>;
    case 'target':
      return <svg {...c}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
    case 'code':
      return <svg {...c}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>;
    case 'workflow':
      return <svg {...c}><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a3 3 0 0 0 3 3h6"/></svg>;
    case 'database':
      return <svg {...c}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>;
    case 'shield':
      return <svg {...c}><path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>;
    default:
      return <svg {...c}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

const Placeholder = ({ label, aspect = '16/9', style = {} }) => (
  <div style={{
    aspectRatio: aspect,
    background: 'var(--a-chip, rgba(0,0,0,0.04))',
    backgroundImage: 'radial-gradient(var(--a-sub, rgba(0,0,0,0.4)) 1px, transparent 1.5px)',
    backgroundSize: '14px 14px',
    border: '1px solid var(--a-line, rgba(0,0,0,0.1))',
    borderRadius: 6,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
    color: 'var(--a-sub, rgba(0,0,0,0.5))',
    letterSpacing: 0.4, textTransform: 'uppercase',
    ...style,
  }}>[{label}]</div>
);

Object.assign(window, { Icon, Placeholder });
