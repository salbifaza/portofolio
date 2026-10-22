import {Fragment, type CSSProperties} from 'react';
import {services} from '@/content';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {PillButton} from '@/components/primitives/pill-button';
import {Reveal} from '@/components/primitives/reveal';

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="rule gutter py-24">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 id="services-title" className="display-md">
          Things I <span className="italic-wide">keep running</span>
        </h2>
        <Eyebrow>(05 services)</Eyebrow>
      </Reveal>

      <ol className="grid gap-x-8 sm:grid-cols-2 min-[1100px]:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title} className="service-card rule py-8">
            <Reveal>
              <span className="font-mono text-xs tracking-[0.06em] text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 text-3xl uppercase" style={{fontVariationSettings: 'var(--fvs-row)'}}>
                {s.title}
              </h3>
              <p className="body-copy mt-3 max-w-[34ch] !text-[17px]">{s.description}</p>
              <div className="pipeline" role="img" aria-label={`Flow: ${s.flow.join(', then ')}`}>
                {s.flow.map((stage, j) => (
                  <Fragment key={stage}>
                    {j > 0 && <span aria-hidden className="pipe-link" style={{'--i': j - 1} as CSSProperties} />}
                    <span aria-hidden className="pipe-node" style={{'--i': j} as CSSProperties}>
                      <span className="pipe-box" />
                      <span className="pipe-label">{stage}</span>
                    </span>
                  </Fragment>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
        <li className="rule flex flex-col justify-between gap-6 py-8">
          <p className="statement max-w-[16ch]">Got a data problem?</p>
          <div>
            <PillButton href="#contact">Tell me about it</PillButton>
          </div>
        </li>
      </ol>
    </section>
  );
}
