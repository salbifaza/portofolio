import { describe, expect, it } from 'vitest';
import { projects } from '@/content';
import { caseStudyModel, caseStudyStaticParams } from '@/content/case-study-model';

describe('caseStudyStaticParams', () => {
  it('matches the project slugs exactly', () => {
    expect(caseStudyStaticParams().map((p) => p.slug)).toEqual(projects.map((p) => p.slug));
  });
});

describe('caseStudyModel', () => {
  it('omits problem, architecture and results for a summary project (AE4)', () => {
    const model = caseStudyModel('bigquery-modernization');
    expect(model).not.toBeNull();
    expect(model!.blocks.map((b) => b.kind)).toEqual(['summary']);
  });
  it('includes every block for a full project', () => {
    const model = caseStudyModel('lakehouse-iceberg-stream');
    expect(model!.blocks.map((b) => b.kind)).toEqual(['summary', 'problem', 'architecture', 'results']);
  });
  it('omits the repo link for employer work', () => {
    expect(caseStudyModel('superset-platform')!.repo).toBeUndefined();
  });
  it('keeps the repo link for a public project', () => {
    expect(caseStudyModel('stream-flink-fluss')!.repo).toMatch(/^https:\/\/github\.com\//);
  });
  it('returns null for an unknown slug so the route can 404', () => {
    expect(caseStudyModel('does-not-exist')).toBeNull();
  });
});
