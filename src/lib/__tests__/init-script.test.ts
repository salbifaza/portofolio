import { describe, expect, it } from 'vitest';
import { initScript } from '@/lib/init-script';

function run(opts: { store?: Record<string, string>; reduced?: boolean; throwStorage?: boolean }) {
  const attrs: Record<string, string> = {};
  const document = { documentElement: { setAttribute: (k: string, v: string) => (attrs[k] = v) } };
  const localStorage = {
    getItem: (k: string) => {
      if (opts.throwStorage) throw new Error('blocked');
      return opts.store?.[k] ?? null;
    },
  };
  const matchMedia = () => ({ matches: !!opts.reduced });
  new Function('document', 'localStorage', 'matchMedia', initScript)(document, localStorage, matchMedia);
  return attrs;
}

describe('initScript', () => {
  it('first visit: dark, motion on', () => {
    expect(run({})).toEqual({ 'data-theme': 'dark', 'data-motion': 'on' });
  });
  it('stored light survives', () => {
    expect(run({ store: { theme: 'light' } })['data-theme']).toBe('light');
  });
  it('reduced motion defaults motion off', () => {
    expect(run({ reduced: true })['data-motion']).toBe('off');
  });
  it('stored on overrides reduced motion', () => {
    expect(run({ reduced: true, store: { motion: 'on' } })['data-motion']).toBe('on');
  });
  it('throwing storage falls back to dark and the system preference', () => {
    expect(run({ throwStorage: true, reduced: true })).toEqual({ 'data-theme': 'dark', 'data-motion': 'off' });
  });
});
