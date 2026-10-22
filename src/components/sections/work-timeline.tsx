import {timeline} from '@/content';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {TimelinePanel} from './timeline-panel';
import {TimelinePin} from './timeline-pin';

export function WorkTimeline() {
  const years = timeline.map((e) => ({
    id: e.id,
    label: e.yearLabel,
    aria: e.kind === 'company' ? `${e.yearLabel}: ${e.company}` : e.kind === 'education' ? 'Education' : 'Certifications',
  }));

  return (
    <section id="timeline" aria-labelledby="timeline-title" className="rule">
      <div className="gutter pb-10 pt-24">
        <Eyebrow>(Experience)</Eyebrow>
        <h2 id="timeline-title" className="display-md mt-4">
          Scroll back <span className="italic-wide">with me</span>
        </h2>
        <p className="body-copy mt-4 max-w-[46ch]">
          The roles that shaped how I work, newest first. Scroll to move along, or jump by year.
        </p>
      </div>
      <TimelinePin years={years}>
        {timeline.map((entry) => (
          <TimelinePanel key={entry.id} entry={entry} />
        ))}
      </TimelinePin>
    </section>
  );
}
