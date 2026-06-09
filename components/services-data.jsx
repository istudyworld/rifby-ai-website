// Services content — 3 services, pulled from the homepage positioning.
// No prices. Each service has a positioning line, deliverables, who it's for,
// a short process, and a small diagram concept for the type-led visuals.

window.SERVICES = [
  {
    n: '01',
    slug: 'strategy',
    name: 'AI Strategy',
    tag: 'Clarity before code',
    lead: 'A two-week engagement that turns "we should use AI somewhere" into a ranked, costed, de-risked plan.',
    description:
      'We map your operations end-to-end, find the three or four places AI actually earns its keep, and hand back a plan your team can act on — with or without us.',
    deliverables: [
      'Operational map — every tool, handoff, and manual step',
      'Opportunity register — ranked by ROI, effort, and risk',
      'Reference architecture — how the pieces would fit',
      'Build-vs-buy recommendation for each opportunity',
      '90-day roadmap with success metrics',
    ],
    forWho: [
      'Teams of 5–200 feeling the cost of manual ops',
      'Founders who\'ve tried off-the-shelf AI and bounced off',
      'Leaders who need board-ready evidence before funding a build',
    ],
    process: [
      { step: 'Wk 1', title: 'Discover', body: 'Interviews + process shadowing.' },
      { step: 'Wk 2', title: 'Synthesise', body: 'Rank, cost, prioritise.' },
    ],
    stack: ['Miro', 'Notion', 'OpenAI', 'Custom survey tooling'],
    // Diagram: simple funnel — many candidates in, ranked few out.
    diagram: 'funnel',
    image: 'assets/service-strategy.jpg',
  },
  {
    n: '02',
    slug: 'custom-automation',
    name: 'Custom Automation',
    tag: 'Built to fit, owned forever',
    lead: 'Production-grade AI workflows wired into the tools you already use. No middleware tax, no vendor lock-in.',
    description:
      'We design, build, and ship bespoke automation — AI agents, n8n workflows, internal dashboards — that replaces the spreadsheets, inboxes, and copy-paste tax eating your team\'s week.',
    deliverables: [
      'End-to-end workflow design documented in plain English',
      'Production AI agents + n8n / custom orchestration',
      'Internal dashboard (Retool / custom) as the single surface',
      'Observability: logs, costs, error alerts on day one',
      'Handover docs',
    ],
    forWho: [
      'Operations teams drowning in manual data entry',
      'Service businesses with bespoke processes off-the-shelf tools can\'t model',
      'Leaders who want full code ownership at the end',
    ],
    process: [
      { step: 'Wk 1', title: 'Scope', body: 'Tight spec + success metric.' },
      { step: 'Wk 2', title: 'Build', body: 'Iterative ship, weekly demos.' },
      { step: 'Wk 3', title: 'Roll out', body: 'Train team, monitor, hand off.' },
    ],
    stack: ['n8n', 'OpenAI', 'Claude', 'Postgres', 'Retool', 'Twilio', 'Stripe', 'HubSpot'],
    diagram: 'network',
    image: 'assets/service-automation.jpg',
  },
  {
    n: '03',
    slug: 'custom-software',
    name: 'Custom Software',
    tag: 'Built around you, owned by you',
    lead: 'Bespoke web apps, internal tools, and client portals for when off-the-shelf software cannot do the job.',
    description:
      'When a spreadsheet or a generic SaaS tool is holding your team back, we design and build production-grade software on a modern stack: web apps, internal tools, dashboards, and customer portals. Documented, deployed, and yours at handover.',
    deliverables: [
      'Product scope + UX flows mapped before any code',
      'Web app, internal tool, or client portal built to fit',
      'Auth, payments, and the integrations you already use',
      'Deployment + observability: logs, uptime, error alerts',
      'Handover docs, training, and full source ownership',
    ],
    forWho: [
      'Teams forcing a spreadsheet to do a job it was never built for',
      'Businesses outgrowing off-the-shelf SaaS',
      'Founders who need a custom tool but not a full in-house dev team',
    ],
    process: [
      { step: 'Wk 1', title: 'Scope', body: 'Flows + spec, agreed.' },
      { step: 'Wk 2–4', title: 'Build', body: 'Iterative ship, weekly demos.' },
      { step: 'Wk 4+', title: 'Launch', body: 'Deploy, train, hand off.' },
    ],
    stack: ['Next.js', 'React', 'Node', 'Postgres', 'Vercel', 'Stripe'],
    diagram: 'network',
    image: 'assets/service-software.jpg',
  },
  {
    n: '04',
    slug: 'data-insights',
    name: 'Data-Driven Insights',
    tag: 'Turn logs into leverage',
    lead: 'Dashboards and analytics pipelines that turn the data your ops already generate into decisions the business can act on.',
    description:
      'Most teams sit on a goldmine of operational data nobody reads. We build the pipelines, models, and dashboards that surface the two or three numbers that actually move the business.',
    deliverables: [
      'Data pipeline from your tools of record into a warehouse',
      'Metric definitions — documented, shared, agreed',
      'Executive dashboard + operational drilldowns',
      'Weekly digest (automated, human-readable)',
      'Training session for whoever owns the numbers',
    ],
    forWho: [
      'Teams reporting from spreadsheets and screenshots',
      'Ops leaders who know the answers are in the data',
    ],
    process: [
      { step: 'Wk 1', title: 'Align', body: 'Agree the 3 numbers that matter.' },
      { step: 'Wk 2', title: 'Pipe & model', body: 'Warehouse + transforms.' },
      { step: 'Wk 3', title: 'Ship', body: 'Dashboards live, team trained.' },
    ],
    stack: ['BigQuery / Postgres', 'dbt', 'Metabase', 'Python', 'n8n'],
    diagram: 'pipeline',
    image: 'assets/service-data.jpg',
  },
];

window.SERVICES_META = {
  headline: 'Four services.',
  headlineItalic: 'One outcome:',
  headlineCont: 'time back.',
  subhead:
    'Pick the entry point that matches where you are. Every engagement ends with your team owning the result — not renting it from us.',
};
