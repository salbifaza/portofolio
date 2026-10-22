import { describe, expect, it } from 'vitest';
import { resolveMotion, readStoredMotion, MOTION_KEY } from '@/lib/motion';

describe('resolveMotion', () => {
  it('is on by default', () => {
    expect(resolveMotion(null, false)).toBe('on');
  });
  it('is off when the system prefers reduced motion and nothing is stored', () => {
    expect(resolveMotion(null, true)).toBe('off');
  });
  it('respects a stored "on" even with reduced motion, since the visitor chose it', () => {
    expect(resolveMotion('on', true)).toBe('on');
  });
  it('respects a stored "off"', () => {
    expect(resolveMotion('off', false)).toBe('off');
  });
  it('ignores an unknown stored value and uses the system preference', () => {
    expect(resolveMotion('maybe', true)).toBe('off');
    expect(resolveMotion('maybe', false)).toBe('on');
  });
});

describe('readStoredMotion', () => {
  it('reads from storage under the shared key', () => {
    const storage = { getItem: (k: string) => (k === MOTION_KEY ? 'off' : null) };
    expect(readStoredMotion(storage, false)).toBe('off');
  });
  it('uses the system preference when storage throws', () => {
    const storage = {
      getItem: () => {
        throw new Error('blocked');
      },
    };
    expect(readStoredMotion(storage, true)).toBe('off');
    expect(readStoredMotion(storage, false)).toBe('on');
  });
});
