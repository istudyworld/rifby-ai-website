// Ambient animated background — plain white with subtle drift.
// A grid of dots with a soft radial aurora that slowly moves.
// Theme-aware via CSS vars so it works in both light and dark modes.

const AmbientBg = () => {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0, h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Three slow-moving aurora blobs
    const blobs = [
      { x: 0.25, y: 0.30, r: 520, hue: 0,    sx: 0.00004, sy: 0.00003, phase: 0 },
      { x: 0.75, y: 0.45, r: 620, hue: 1,    sx: -0.00003, sy: 0.00004, phase: 2 },
      { x: 0.50, y: 0.80, r: 480, hue: 2,    sx: 0.00003, sy: -0.00002, phase: 4 },
    ];

    const getPalette = () => {
      const isDark = document.body.classList.contains('dark');
      // Palette pulled from Rifby logo: navy #16397a + cyan #3da5f5
      return isDark
        ? {
            bg: '#0a1428',
            dot: 'rgba(234,242,255,0.08)',
            blobs: [
              'rgba(61,165,245,0.22)',   // cyan-blue accent
              'rgba(22,57,122,0.35)',    // deep navy
              'rgba(110,175,235,0.18)',  // soft azure
            ],
          }
        : {
            bg: '#ffffff',
            dot: 'rgba(0,0,0,0)',      /* hide dot grid in light */
            blobs: [
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
            ],
          };
    };

    const start = performance.now();

    const draw = (t) => {
      const elapsed = t - start;
      const palette = getPalette();
      const ambientOn = window.__ambientOn !== false;
      const intensity = typeof window.__ambientIntensity === 'number' ? window.__ambientIntensity : 1;
      // Pull live bg color from CSS var so the canvas always matches the chosen background
      const cssBg = getComputedStyle(document.documentElement).getPropertyValue('--a-bg').trim() || palette.bg;
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--brand-blue').trim() || '#3da5f5';

      // wash bg
      ctx.fillStyle = cssBg;
      ctx.fillRect(0, 0, w, h);

      // aurora blobs
      if (ambientOn && intensity > 0) {
        ctx.globalCompositeOperation = 'source-over';
        // Build per-frame blob colors from accent so it tracks brand color
        const r = parseInt(accent.slice(1,3),16), g = parseInt(accent.slice(3,5),16), bl = parseInt(accent.slice(5,7),16);
        const blobColors = [
          `rgba(${r},${g},${bl},${0.22 * intensity})`,
          `rgba(${Math.max(0,r-60)},${Math.max(0,g-60)},${Math.max(0,bl-60)},${0.30 * intensity})`,
          `rgba(${Math.min(255,r+30)},${Math.min(255,g+30)},${Math.min(255,bl+30)},${0.18 * intensity})`,
        ];
        blobs.forEach((b, i) => {
          const drift = 80 * Math.sin(elapsed * 0.00015 + b.phase);
          const drift2 = 60 * Math.cos(elapsed * 0.00012 + b.phase);
          const cx = b.x * w + drift;
          const cy = b.y * h + drift2;
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
          grad.addColorStop(0, blobColors[i]);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        });
      }

      // faint noise-free dot grid
      const spacing = 32;
      const offsetX = (elapsed * 0.002) % spacing;
      const offsetY = (elapsed * 0.0015) % spacing;
      ctx.fillStyle = palette.dot;
      for (let x = -spacing + offsetX; x < w + spacing; x += spacing) {
        for (let y = -spacing + offsetY; y < h + spacing; y += spacing) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, width: '100vw', height: '100vh',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  );
};

window.AmbientBg = AmbientBg;
