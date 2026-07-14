import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav.jsx';
import WhoWeHelp from '../components/WhoWeHelp.jsx';
import CasesHero from '../components/CasesHero.jsx';
import CaseRow from '../components/CaseRow.jsx';
import Footer from '../components/Footer.jsx';

export const CATEGORIES = [
  'All',
  'AI & Automation',
  'App Development',
  'Web Development',
  'Social Media Automation',
  'Data / Analytics',
  'Strategy',
];

// Map a row's primary (first) tag to one of the filter categories.
function categoryOf(row) {
  const t = (row.tags[0] || '').toLowerCase();
  if (t.includes('social')) return 'Social Media Automation';
  if (t.includes('web')) return 'Web Development';
  if (t.includes('app')) return 'App Development';
  if (t.includes('data')) return 'Data / Analytics';
  if (t.includes('strateg')) return 'Strategy';
  if (t.includes('ai')) return 'AI & Automation';
  return 'AI & Automation';
}

const ROWS = [
  {
    slug: 'ahmad-co-accountant',
    tone: 'dark',
    smallCompany: true,
    company: 'Ahmad & Co Accountant',
    heading: (
      <span className="case-h1-stack">
        <span>Manual reconciliation</span>
        <span className="case-h1-accent">AI Assisted Close</span>
      </span>
    ),
    list: [
      'Transformed a solo accounting practice into an AI-powered firm.',
      'Reconciliation, categorisation, and client prep now run assisted by AI.',
      'Freeing the owner to focus on advisory work.',
    ],
    tags: ['AI & Automation', 'Accounting'],
    stats: [
      { big: '20h', small: 'Saved/week' },
      { big: '0', small: 'Missed Invoice' },
    ],
    photo: '/figma/cases/photo1.webp',
    photoAlt: 'Accounting work assisted by AI',
  },
  {
    slug: 'isw-consulting',
    tone: 'blue',
    reversed: true,
    smallCompany: true,
    company: 'ISW Consulting LTD',
    heading: (
      <>
        Client <span className="case-hl-box">Invoice</span> automated end to end
        <img className="case-h-strip" src="/figma/cases/strip2.webp" alt="" aria-hidden="true" />
      </>
    ),
    tags: ['AI & Automation', 'Education'],
    stats: [
      { big: '15hrs', small: 'Saved/week' },
      { big: '0', small: 'Missed Invoice' },
    ],
    photo: '/figma/cases/photo2.webp',
    photoAlt: 'Invoicing automation in use',
  },
  {
    slug: 'tmtam-studio',
    tone: 'light',
    company: 'Tmtam Studio for Game Development W.L.L',
    heading: 'Companion app for a Flagship game product',
    tags: ['App Development', 'Gaming'],
    stats: [
      { big: 'iOS + Android', small: 'Shipped platforms' },
      { big: '6 wk', small: 'To first release' },
    ],
    photo: '/figma/cases/photo3.webp',
    photoAlt: 'Mobile companion app',
  },
  {
    slug: 'another-world',
    tone: 'blue',
    reversed: true,
    company: 'Another World Camberley',
    heading: 'Social scheduling on autopilot',
    tags: ['Social media automation', 'Gaming'],
    stats: [
      { big: '8hrs', small: 'Saved/Week' },
      { big: '4', small: 'Platforms Synced' },
    ],
    photo: '/figma/cases/photo4.webp',
    photoAlt: 'Social content scheduling',
  },
  {
    slug: 'hunnys-taste',
    tone: 'light',
    company: "Hunny's Taste",
    heading: 'A food brand website build for ordering',
    tags: ['Web Development', 'Food & Hospitality'],
    stats: [
      { big: 'Brand', small: 'Delivers', lightSmall: true },
      { big: 'Build', small: 'Delivers', lightSmall: true },
    ],
    photo: '/figma/cases/photo5.webp',
    photoAlt: 'Food brand website',
  },
  {
    slug: 'hartwell-vine',
    tone: 'dark',
    reversed: true,
    company: 'Hartwell & Vine Solicitors',
    heading: 'AI intake that triages cases in minutes',
    tags: ['AI automation', 'Legal'],
    stats: [
      { big: '12min', small: 'Per intake (was 45)' },
      { big: '96%', small: 'Routing accuracy' },
    ],
    photo: '/figma/cases/photo6.webp',
    photoAlt: 'AI case intake screen',
  },
  {
    slug: 'simply-carers',
    tone: 'light',
    company: 'Simply Carers',
    heading: 'Booking app that fills the no show gap',
    tags: ['App development', 'Healthcare'],
    stats: [
      { big: '-38%', small: 'No show rate' },
      { big: '$24k', small: 'Recovered' },
    ],
    photo: '/figma/cases/photo7.webp',
    photoAlt: 'Care booking app',
  },
  {
    slug: 'immersa',
    tone: 'blue',
    reversed: true,
    company: 'Immersa (Nirvana VR)',
    heading: 'Branded social content drafted on autopilot',
    tags: ['Social Media Automation', 'VR Education'],
    stats: [
      { big: '3', small: 'Channels staged' },
      { big: '1-click', small: 'Approve & publish' },
    ],
    photo: '/figma/cases/photo8.webp',
    photoAlt: 'ImmersaLab immersive learning visual',
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? ROWS : ROWS.filter((r) => categoryOf(r) === active);

  // The rows don't exist until React mounts, so the browser's native
  // #hash scroll (e.g. /case-studies#hartwell-vine) fires too early.
  // Re-run it once the rows are in the DOM.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
    });
  }, []);

  return (
    <main>
      <section className="chero-section">
        <Nav />
        <WhoWeHelp />
        <CasesHero categories={CATEGORIES} active={active} onSelect={setActive} />
      </section>

      {visible.length > 0 ? (
        visible.map((r, i) => <CaseRow key={`${active}-${i}`} {...r} />)
      ) : (
        <p className="case-empty">More {active} case studies coming soon.</p>
      )}

      <Footer />
    </main>
  );
}
