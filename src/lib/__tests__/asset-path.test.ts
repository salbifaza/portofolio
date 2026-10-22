import { describe, expect, it } from 'vitest';
import { assetPath } from '@/lib/asset-path';

describe('assetPath', () => {
  it('returns the path unchanged with no base path', () => {
    expect(assetPath('/logos/dbt.svg', '')).toBe('/logos/dbt.svg');
  });
  it('prefixes the base path', () => {
    expect(assetPath('/profile-photo.jpg', '/portofolio')).toBe('/portofolio/profile-photo.jpg');
  });
  it('adds a missing leading slash and trims a trailing base slash', () => {
    expect(assetPath('cv.pdf', '/portofolio/')).toBe('/portofolio/cv.pdf');
  });
  it('leaves absolute URLs alone', () => {
    expect(assetPath('https://example.com/a.png', '/portofolio')).toBe('https://example.com/a.png');
  });
});
