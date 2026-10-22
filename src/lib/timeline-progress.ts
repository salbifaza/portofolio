/** Pure mapping for the pinned horizontal timeline (plan KTD5). No DOM access. */

export const PIN_MIN_WIDTH = 1025;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export function shouldPin(opts: { viewportWidth: number; motionOn: boolean; ready: boolean }): boolean {
  return opts.ready && opts.motionOn && opts.viewportWidth >= PIN_MIN_WIDTH;
}

/** How far the track can slide: its width beyond the viewport. */
export function overflowWidth(trackWidth: number, viewportWidth: number): number {
  return Math.max(0, trackWidth - viewportWidth);
}

/** Scroll position to 0..1 progress. `scrollRange` is the section height minus one viewport. */
export function progressFor(scrollY: number, sectionTop: number, scrollRange: number): number {
  if (scrollRange <= 0) return 0;
  return clamp01((scrollY - sectionTop) / scrollRange);
}

export function trackOffset(progress: number, overflow: number): number {
  return -progress * overflow;
}

export function markerPosition(progress: number, barWidth: number): number {
  return progress * barWidth;
}

/** Progress at which a panel's left edge is aligned with the viewport's left edge. */
export function progressForPanel(panelLeft: number, overflow: number): number {
  if (overflow <= 0) return 0;
  return clamp01(panelLeft / overflow);
}

export function scrollForPanel(panelLeft: number, overflow: number, sectionTop: number, scrollRange: number): number {
  return sectionTop + progressForPanel(panelLeft, overflow) * scrollRange;
}

/** The panel whose left edge the track has most recently passed. */
export function activePanelIndex(progress: number, panelLefts: number[], overflow: number): number {
  const offset = progress * overflow;
  let active = 0;
  panelLefts.forEach((left, i) => {
    if (left <= offset + 1) active = i;
  });
  return active;
}
