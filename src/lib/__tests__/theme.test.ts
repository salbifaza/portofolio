import { describe, expect, it } from 'vitest';
import { resolveTheme, readStoredTheme, THEME_KEY } from '@/lib/theme';

describe('resolveTheme', () => {
  it('defaults to dark with nothing stored', () => {
    expect(resolveTheme(null)).toBe('dark');
    expect(resolveTheme(undefined)).toBe('dark');
  });
  it('returns light when light is stored', () => {
    expect(resolveTheme('light')).toBe('light');
  });
  it('ignores an unknown stored value', () => {
    expect(resolveTheme('sepia')).toBe('dark');
  });
});

describe('readStoredTheme', () => {
  it('reads from storage under the shared key', () => {
    const storage = { getItem: (k: string) => (k === THEME_KEY ? 'light' : null) };
    expect(readStoredTheme(storage)).toBe('light');
  });
  it('falls back to dark when storage throws', () => {
    const storage = {
      getItem: () => {
        throw new Error('blocked');
      },
    };
    expect(readStoredTheme(storage)).toBe('dark');
  });
  it('falls back to dark with no storage', () => {
    expect(readStoredTheme(null)).toBe('dark');
  });
});
