import React, { useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import ServicesHero from '../components/ServicesHero.jsx';
import ServiceBlock from '../components/ServiceBlock.jsx';
import Footer from '../components/Footer.jsx';

const BLOCKS = [
  {
    id: 'ai-strategy',
    tone: 'dark',
    heading: { highlight: 'AI Strategy', rest: ' clarity before code' },
    lead: 'A two-week engagement that turns "we should use AI somewhere" into a ranked, costed, de-risked plan.',
    body: 'We map your operations end to end, find the three or four places AI actually earns its keep, and hand back a plan your team can act on with or without us.',
    image: '/figma/services/imgs-strategy.webp',
    imageAlt: 'AI strategy work in progress',
    tags: ['Miro', 'Motion', 'OpenAI', 'Custom survey tooling'],
    whatYouGet: [
      { n: '01', text: 'Operational map every tool, handoff, and manual step' },
      { n: '02', text: 'Opportunity register ranked by ROI, effort, and risk' },
      { n: '03', text: 'Reference architecture how the pieces would fit' },
      { n: '04', text: 'Build-vs-buy recommendation for each opportunity' },
      { n: '05', text: '90-day roadmap with success metrics' },
    ],
    whoItsFor: [
      { n: '01', text: 'Teams of 5-200 feeling the cost of manual ops' },
      { n: '02', text: "Founders who've tried off-the-shelf AI and bounced off" },
      { n: '03', text: 'Leaders who need board-ready evidence before funding a build' },
    ],
    process: [
      { n: '01', text: 'Discover . Interviews + process shadowing.' },
      { n: '02', text: 'Synthesize . Rank, cost, priorities.' },
    ],
  },
  {
    id: 'custom-automation',
    tone: 'light',
    reversed: true,
    heading: { highlight: 'Custom Automation', rest: ' built to fit owned forever' },
    lead: 'Production-grade AI workflows wired into the tools you already use. No middleware tax, no vendor lock-in.',
    body: "We design, build, and ship bespoke automation AI agents, n8n workflows, and internal dashboards that replace the spreadsheets, inboxes, and copy-paste tax eating your team's week.",
    image: '/figma/services/imgs-automation.webp',
    imageAlt: 'Automation workflows and dashboards',
    tags: ['n8n', 'OpenAI', 'Claude', 'Postgres', 'Retool', 'Twilio', 'Stripe', 'HubSpot'],
    whatYouGet: [
      { n: '01', text: 'End-to-end workflow design documented in plain English' },
      { n: '02', text: 'Production AI agents + n8n/custom orchestration' },
      { n: '03', text: 'Internal dashboard (Retool/custom) as the single surface' },
      { n: '04', text: 'Observability: logs, costs, error alerts on day one' },
      { n: '05', text: 'Handover docs' },
    ],
    whoItsFor: [
      { n: '01', text: 'Operations teams drowning in manual data entry' },
      { n: '02', text: "Service businesses with bespoke processes off-the-shelf tools can't model" },
      { n: '03', text: 'Leaders who want full code ownership at the end' },
    ],
    process: [
      { n: '01', text: 'Discover . Interviews + process shadowing.' },
      { n: '02', text: 'Synthesize . Rank, cost, priorities.' },
    ],
  },
  {
    id: 'custom-software',
    tone: 'blue',
    heading: { highlight: 'Custom Software', rest: ' built around you owned by you', box: true },
    lead: 'Bespoke web apps, internal tools, and client portals for when off-the-shelf software cannot do the job.',
    body: 'When a spreadsheet or a generic SaaS tool is holding your team back, we design and build production-grade software on a modern stack: web apps, internal tools, dashboards, and customer portals. Documented, deployed, and yours at handover.',
    image: '/figma/services/imgs-software.webp',
    imageAlt: 'Custom software design and build',
    tags: ['Next.js', 'React', 'Node', 'Postgres', 'Vercel', 'Stripe'],
    whatYouGet: [
      { n: '01', text: 'Product scope + UX flows mapped before any code' },
      { n: '02', text: 'Web app, internal tool, or client portal built to fit' },
      { n: '03', text: 'Auth, payments, and the integrations you already use' },
      { n: '04', text: 'Deployment + observability, logs, uptime, error alerts' },
      { n: '05', text: 'Handover docs, training, and full source ownership' },
    ],
    whoItsFor: [
      { n: '01', text: 'Teams forcing a spreadsheet to do a job it was never built for' },
      { n: '02', text: 'Businesses outgrowing off-the-shelf SaaS' },
      { n: '03', text: 'Founders who need a custom tool but not a full in-house dev team' },
    ],
    process: [
      { n: '01', text: 'Scope . Flows + spec, agreed.', strong: true },
      { n: '02', text: 'Build . Iterative ship weekly demos' },
      { n: '03', text: 'Launch . Deploy, train, hand off' },
    ],
  },
  {
    id: 'data-insights',
    tone: 'data',
    heading: { highlight: 'Data-Driven', rest: ' Insights turn logs into leverage.' },
    lead: 'Dashboards and analytics pipelines that turn the data your ops already generate into decisions the business can act on.',
    body: 'Most teams sit on a goldmine of operational data nobody reads. We build the pipelines, models, and dashboards that surface the two or three numbers that actually move the business.',
    image: '/figma/services/imgs-data.webp',
    imageAlt: 'Analytics dashboards and pipelines',
    tags: ['BigQuery / Postgres', 'dbt', 'Metabase', 'Python', 'n8n'],
    whatYouGet: [
      { n: '01', text: 'Data pipeline from your tools of record into a warehouse' },
      { n: '02', text: 'Metric definitions, documented, shared, agreed' },
      { n: '03', text: 'Executive dashboard + operational drilldowns' },
      { n: '04', text: 'Weekly digest (automated, human-readable)' },
      { n: '05', text: 'Training session for whoever owns the numbers' },
    ],
    whoItsFor: [
      { n: '01', text: 'Teams reporting from spreadsheets and screenshots' },
      { n: '02', text: 'Ops leaders who know the answers are in the data' },
    ],
    process: [
      { n: '01', text: 'Align . Agree the 3 numbers that matter', strong: true },
      { n: '02', text: 'Pipe & model . Warehouse transforms.' },
      { n: '03', text: 'Ship . Dashboards live, team trained.' },
    ],
  },
];

export default function Services() {
  // The blocks don't exist until React mounts, so the browser's native
  // #hash scroll (e.g. /services#custom-software) fires too early.
  // Re-run it once the blocks are in the DOM.
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
      <section className="shero">
        <Nav />
        <ServicesHero />
      </section>

      <div id="services">
        {BLOCKS.map((b, i) => (
          <ServiceBlock key={i} {...b} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
