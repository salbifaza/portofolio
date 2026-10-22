import {cn} from '@/lib/utils';

interface MarqueeProps {
  /** Called once per copy; the second copy is hidden from assistive tech and the tab order. */
  items: (isCopy: boolean) => React.ReactNode[];
  label: string;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

function Diamond() {
  return <span aria-hidden className="mx-6 inline-block h-3.5 w-3.5 shrink-0 rotate-45 bg-accent sm:mx-9" />;
}

/** Seamless looping strip: two identical groups, translated by -50% in CSS while motion is on. */
export function Marquee({items, label, duration = 40, reverse, className}: MarqueeProps) {
  const group = (isCopy: boolean) => (
    <div className="marquee-group" aria-hidden={isCopy || undefined}>
      {items(isCopy).map((node, i) => (
        <span key={i} className="flex items-center">
          {node}
          <Diamond />
        </span>
      ))}
    </div>
  );

  return (
    <div
      role="group"
      aria-label={label}
      className={cn('marquee overflow-hidden border-y border-text/[0.12] py-3.5', reverse && 'marquee-reverse', className)}
      style={{['--marquee-duration' as string]: `${duration}s`}}
    >
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
