import React from 'react';
import './ServiceBlock.css';

function NumberList({ items, variant = '' }) {
  return (
    <ul className={`svc-list ${variant}`}>
      {items.map((it, i) => (
        <li className={`svc-list-item${it.strong ? ' is-strong' : ''}`} key={i}>
          <span className="svc-list-num">{it.n}</span>
          <span className="svc-list-text">{it.text}</span>
        </li>
      ))}
    </ul>
  );
}

function Heading({ heading }) {
  const cls = heading.box ? 'svc-hl-box' : 'svc-hl';
  return (
    <h2 className="svc-heading">
      <span className={cls}>{heading.highlight}</span>
      {heading.rest}
    </h2>
  );
}

export default function ServiceBlock({
  id,
  tone,
  reversed = false,
  heading,
  lead,
  body,
  image,
  imageAlt = '',
  tags = [],
  whatYouGet = [],
  whoItsFor = [],
  process = [],
}) {
  return (
    <section id={id} className={`svc svc--${tone}${reversed ? ' svc--reversed' : ''}`}>
      <div className="container">
        <div className="svc-inner">
          <div className="svc-text-col">
            <Heading heading={heading} />
            <div className="svc-text-groups">
              <div className="svc-group">
                <h3 className="svc-group-title">What you get</h3>
                <NumberList items={whatYouGet} />
              </div>
              <div className="svc-group">
                <h3 className="svc-group-title">Who it&rsquo;s for</h3>
                <NumberList items={whoItsFor} />
              </div>
            </div>
          </div>

          <div className="svc-media-col">
            <div className="svc-media-main">
              <div className="svc-media-top">
                <div className="svc-lead-block">
                  <p className="svc-lead">{lead}</p>
                  <p className="svc-body">{body}</p>
                </div>
                <div className="svc-images">
                  <img src={image} alt={imageAlt} />
                </div>
              </div>
              <div className="svc-tags">
                {tags.map((t) => (
                  <span className="svc-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="svc-process">
              <h3 className="svc-group-title">Process</h3>
              <NumberList items={process} variant="svc-list--process" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
