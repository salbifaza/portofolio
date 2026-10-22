import type {TimelineEntry} from '@/content';
import {Chip} from '@/components/primitives/chip';
import {Eyebrow} from '@/components/primitives/eyebrow';

const panelClass =
  'timeline-panel grid min-h-0 grid-rows-[minmax(0,1fr)] gap-8 border-t border-text/[0.12] px-[var(--gutter)] py-10 ' +
  'min-[700px]:grid-cols-[1fr_1.1fr] min-[700px]:gap-12 ' +
  'group-data-[pinned=true]:h-full group-data-[pinned=true]:w-[min(78vw,1100px)] group-data-[pinned=true]:flex-none ' +
  'group-data-[pinned=true]:border-l group-data-[pinned=true]:border-t-0';

const detailClass =
  'min-h-0 pr-2 group-data-[pinned=true]:overflow-y-auto group-data-[pinned=true]:overscroll-auto ' +
  'focus-visible:outline-offset-2';

function Title({children}: {children: React.ReactNode}) {
  return (
    <h3 className="uppercase" style={{fontSize: 'clamp(36px, 4.6vw, 76px)', lineHeight: 0.92, fontVariationSettings: 'var(--fvs-display)'}}>
      {children}
    </h3>
  );
}

export function TimelinePanel({entry}: {entry: TimelineEntry}) {
  if (entry.kind === 'company') {
    return (
      <article id={`timeline-${entry.id}`} data-panel className={panelClass} aria-label={entry.company}>
        <header>
          <Eyebrow>{entry.period}</Eyebrow>
          <div className="mt-4">
            <Title>{entry.company}</Title>
          </div>
          <p className="italic-wide mt-4 text-2xl">{entry.role}</p>
        </header>
        <div data-detail aria-label={`${entry.company} details`} className={detailClass}>
          <p className="statement max-w-[32ch]">{entry.summary}</p>
          <Eyebrow className="mt-8 block">What I worked on</Eyebrow>
          <ul className="body-copy mt-3 list-disc space-y-3 pl-5 marker:text-accent">
            {entry.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <Eyebrow className="mt-8 block">Stack</Eyebrow>
          <ul className="mt-3 flex flex-wrap gap-2">
            {entry.stack.map((s) => (
              <li key={s}>
                <Chip>{s}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  }

  if (entry.kind === 'education') {
    return (
      <article id={`timeline-${entry.id}`} data-panel className={panelClass} aria-label="Education">
        <header>
          <Eyebrow>{entry.period}</Eyebrow>
          <div className="mt-4">
            <Title>Education</Title>
          </div>
        </header>
        <div data-detail aria-label="Education details" className={detailClass}>
          <p className="statement max-w-[28ch]">{entry.institution}</p>
          <p className="body-copy mt-4">{entry.degree}</p>
          <p className="body-copy mt-4">{entry.notes}</p>
        </div>
      </article>
    );
  }

  return (
    <article id={`timeline-${entry.id}`} data-panel className={panelClass} aria-label="Certifications">
      <header>
        <Eyebrow>{entry.yearLabel === 'Certs' ? '2025' : entry.yearLabel}</Eyebrow>
        <div className="mt-4">
          <Title>Certifications</Title>
        </div>
      </header>
      <div data-detail aria-label="Certification details" className={detailClass}>
        <ul>
          {entry.items.map((c) => (
            <li key={c.name} className="rule py-4 first:border-t-0 first:pt-0">
              <p className="text-xl">{c.name}</p>
              <Eyebrow className="mt-1 block">{c.date}</Eyebrow>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
