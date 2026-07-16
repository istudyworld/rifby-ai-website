import React from 'react';
import './AssessFaq.css';
import { BOOKING_URL } from './AssessHero.jsx';

const ITEMS = [
  {
    q: 'Is this actually free?',
    a: 'Yes. 8 per month, first come, first served.',
  },
  {
    q: 'Will you try to sell me something?',
    a: 'We’ll walk you through the report. If it uncovers work you want help with, we’ll quote it — you’ll never get a hard sell.',
  },
  {
    q: 'What if I’m not technical?',
    a: 'That’s the point. Every tool we prescribe is chosen because you can switch it on without a developer.',
  },
  {
    q: 'What kind of tools?',
    a: 'Established, off-the-shelf software — typically £10–£30/month each. The average total across our prescriptions is around £50/month, against hundreds of pounds a month in reclaimed time.',
  },
  {
    q: 'Do I need to prepare anything?',
    a: 'No. Just show up and be honest about where your week goes.',
  },
];

export default function AssessFaq() {
  return (
    <section className="assess-faq">
      <div className="container assess-faq-inner">
        <div className="assess-faq-intro">
          <h2 className="assess-faq-title">FAQ</h2>
          <p className="assess-faq-sub">Straight answers before you book</p>
        </div>

        <div className="assess-faq-list">
          {ITEMS.map((item, i) => (
            <div className="assess-faq-item" key={item.q}>
              <h3 className="assess-faq-q">{item.q}</h3>
              <p className="assess-faq-a">{item.a}</p>
              {i < ITEMS.length - 1 && <span className="assess-faq-line" />}
            </div>
          ))}
        </div>
      </div>

      <div className="container assess-final">
        <h2 className="assess-final-h">Ready to find your 5 hours?</h2>
        <p className="assess-final-p">Book one of this month&rsquo;s free assessments.</p>
        <a className="btn btn-primary btn-lg assess-final-cta" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Book your call &rarr;
        </a>
      </div>
    </section>
  );
}
