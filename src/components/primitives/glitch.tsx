import type {CSSProperties} from 'react';

/** Text with CRT/VHS glitch layers. The extra layers are aria-hidden so the text is read once. */
export function Glitch({children, delay = 0}: {children: string; delay?: number}) {
  return (
    <span className="glitch" style={{'--glitch-delay': `${delay}s`} as CSSProperties}>
      <span className="glitch-main">{children}</span>
      <span aria-hidden className="glitch-layer glitch-a">{children}</span>
      <span aria-hidden className="glitch-layer glitch-b">{children}</span>
    </span>
  );
}
