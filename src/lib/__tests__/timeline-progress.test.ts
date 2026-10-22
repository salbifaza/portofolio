import { describe, expect, it } from 'vitest';
import {
  PIN_MIN_WIDTH,
  activePanelIndex,
  markerPosition,
  overflowWidth,
  progressFor,
  progressForPanel,
  scrollForPanel,
  shouldPin,
  trackOffset,
} from '@/lib/timeline-progress';

describe('overflowWidth', () => {
  it('is track minus viewport', () => {
    expect(overflowWidth(5000, 1400)).toBe(3600);
  });
  it('is zero when the track is narrower than the viewport, without dividing by it', () => {
    expect(overflowWidth(800, 1400)).toBe(0);
  });
});

describe('progressFor', () => {
  it('is 0 at the section top and 1 at the end', () => {
    expect(progressFor(1000, 1000, 3600)).toBe(0);
    expect(progressFor(4600, 1000, 3600)).toBe(1);
  });
  it('clamps before and after the section', () => {
    expect(progressFor(200, 1000, 3600)).toBe(0);
    expect(progressFor(9000, 1000, 3600)).toBe(1);
  });
  it('is 0 with no scroll range', () => {
    expect(progressFor(1500, 1000, 0)).toBe(0);
  });
  it('is proportional in between', () => {
    expect(progressFor(2800, 1000, 3600)).toBeCloseTo(0.5);
  });
});

describe('trackOffset and markerPosition', () => {
  it('offset is the full overflow at progress 1', () => {
    expect(trackOffset(1, 3600)).toBe(-3600);
    expect(trackOffset(0, 3600)).toBeCloseTo(0);
    expect(trackOffset(0.5, 3600)).toBe(-1800);
  });
  it('marker spans the year bar', () => {
    expect(markerPosition(0, 1000)).toBe(0);
    expect(markerPosition(1, 1000)).toBe(1000);
  });
});

describe('panel jumps', () => {
  const lefts = [0, 900, 1800, 2700, 3600, 4500];
  const overflow = 4500; // end spacer lets the last panel left-align
  it('each panel jump lands inside that panel', () => {
    lefts.forEach((left, i) => {
      const p = progressForPanel(left, overflow);
      expect(activePanelIndex(p, lefts, overflow)).toBe(i);
    });
  });
  it('maps a panel to a scroll position inside the section', () => {
    expect(scrollForPanel(900, overflow, 1000, 4500)).toBe(1900);
    expect(scrollForPanel(0, overflow, 1000, 4500)).toBe(1000);
  });
  it('clamps a panel beyond the reachable overflow', () => {
    expect(progressForPanel(9999, overflow)).toBe(1);
  });
  it('handles zero overflow', () => {
    expect(progressForPanel(900, 0)).toBe(0);
    expect(activePanelIndex(0, lefts, 0)).toBe(0);
  });
});

describe('shouldPin (AE1, AE2)', () => {
  it('stacks at 1024px and pins at 1025px', () => {
    expect(PIN_MIN_WIDTH).toBe(1025);
    expect(shouldPin({ viewportWidth: 1024, motionOn: true, ready: true })).toBe(false);
    expect(shouldPin({ viewportWidth: 1025, motionOn: true, ready: true })).toBe(true);
  });
  it('stacks with motion off even on a wide viewport', () => {
    expect(shouldPin({ viewportWidth: 1920, motionOn: false, ready: true })).toBe(false);
  });
  it('stacks until script has run', () => {
    expect(shouldPin({ viewportWidth: 1920, motionOn: true, ready: false })).toBe(false);
  });
});
