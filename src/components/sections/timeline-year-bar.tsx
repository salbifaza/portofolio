import {forwardRef} from 'react';

export interface YearItem {
  id: string;
  label: string;
  aria: string;
}

interface Props {
  years: YearItem[];
  active: number;
  onJump: (index: number) => void;
  fillRef: React.Ref<HTMLSpanElement>;
  markerRef: React.Ref<HTMLSpanElement>;
}

/** Year buttons with a progress line and position marker. The line and marker only show while pinned. */
export const TimelineYearBar = forwardRef<HTMLDivElement, Props>(function TimelineYearBar(
  {years, active, onJump, fillRef, markerRef},
  ref,
) {
  return (
    <div ref={ref} className="gutter bg-bg pb-4 pt-2">
      <ul className="flex flex-wrap justify-between gap-x-4">
        {years.map((y, i) => (
          <li key={y.id}>
            <button
              type="button"
              onClick={() => onJump(i)}
              aria-label={y.aria}
              aria-current={i === active ? 'true' : undefined}
              className={`inline-flex min-h-[44px] items-center font-mono text-sm uppercase tracking-[0.06em] transition-colors hover:text-text ${
                i === active ? 'text-text' : 'text-label'
              }`}
            >
              {y.label}
            </button>
          </li>
        ))}
      </ul>
      <div aria-hidden className="relative mt-1 h-px bg-text/[0.12] group-data-[pinned=false]:hidden">
        <span ref={fillRef} className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-accent" />
        <span
          ref={markerRef}
          className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
          style={{left: '0%'}}
        />
      </div>
    </div>
  );
});
