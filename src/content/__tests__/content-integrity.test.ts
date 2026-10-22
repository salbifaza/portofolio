import { describe, expect, it } from 'vitest';
import { projects, services, timeline, values, tools, skills } from '@/content';

describe('services', () => {
  it('has exactly five services', () => {
    expect(services).toHaveLength(5);
  });
  it('each has a title and a one-line description', () => {
    for (const s of services) {
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
    }
  });
});

describe('values', () => {
  it('has six principles', () => {
    expect(values).toHaveLength(6);
  });
});

describe('projects', () => {
  it('slugs are unique and URL-safe', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  it('every project has a category tag and a case study', () => {
    for (const p of projects) {
      expect(p.category.trim(), p.slug).not.toBe('');
      expect(p.caseStudy, p.slug).toBeDefined();
      expect(p.caseStudy.summary.trim(), p.slug).not.toBe('');
    }
  });
  it('summary-level case studies carry no architecture, problem or results', () => {
    for (const p of projects.filter((p) => p.caseStudy.detail === 'summary')) {
      const cs = p.caseStudy as unknown as Record<string, unknown>;
      expect(cs.architecture, p.slug).toBeUndefined();
      expect(cs.results, p.slug).toBeUndefined();
      expect(cs.problem, p.slug).toBeUndefined();
    }
  });
  it('full case studies populate every block', () => {
    for (const p of projects.filter((p) => p.caseStudy.detail === 'full')) {
      const cs = p.caseStudy as unknown as Record<string, unknown>;
      expect(cs.problem, p.slug).toBeTruthy();
      expect((cs.architecture as string[]).length, p.slug).toBeGreaterThan(0);
      expect((cs.results as string[]).length, p.slug).toBeGreaterThan(0);
    }
  });
  it('employer projects ship at summary level and have no repo', () => {
    for (const p of projects.filter((p) => p.kind === 'employer')) {
      expect(p.caseStudy.detail, p.slug).toBe('summary');
      expect(p.repo, p.slug).toBeUndefined();
    }
  });
  it('covers the streaming lakehouse, the other public repos and four employer projects', () => {
    expect(projects.filter((p) => p.kind === 'employer')).toHaveLength(4);
    expect(projects.filter((p) => p.kind === 'public')).toHaveLength(7);
    expect(projects.map((p) => p.slug)).toContain('lakehouse-iceberg-stream');
  });
});

describe('timeline', () => {
  it('lists the four companies newest first, then education and certifications', () => {
    expect(timeline.map((e) => e.id)).toEqual([
      'farmbyte',
      'dibimbing',
      'ismaya',
      'sirclo',
      'education',
      'certifications',
    ]);
    expect(timeline.slice(0, 4).every((e) => e.kind === 'company')).toBe(true);
    expect(timeline.slice(4).every((e) => e.kind !== 'company')).toBe(true);
  });
  it('companies are in reverse-chronological order by start year', () => {
    const years = timeline.filter((e) => e.kind === 'company').map((e) => e.startYear);
    expect([...years].sort((a, b) => b - a)).toEqual(years);
  });
});

describe('strips', () => {
  it('has skills and tools', () => {
    expect(skills.length).toBeGreaterThan(5);
    expect(tools.length).toBeGreaterThan(5);
    for (const t of tools) expect(t.href).toMatch(/^https:\/\//);
  });
});
