import { getProject, projects } from './projects';
import type { Project } from './types';

export type CaseStudyBlock =
  | { kind: 'summary'; text: string }
  | { kind: 'problem'; text: string }
  | { kind: 'architecture'; items: string[] }
  | { kind: 'results'; items: string[] };

export interface CaseStudyModel {
  project: Project;
  blocks: CaseStudyBlock[];
  repo?: string;
}

export function caseStudyStaticParams(): { slug: string }[] {
  return projects.map((p) => ({ slug: p.slug }));
}

/** Only blocks that have real content are returned, so a summary project never renders empty headings. */
export function caseStudyModel(slug: string): CaseStudyModel | null {
  const project = getProject(slug);
  if (!project) return null;

  const cs = project.caseStudy;
  const blocks: CaseStudyBlock[] = [{ kind: 'summary', text: cs.summary }];
  if (cs.detail === 'full') {
    blocks.push(
      { kind: 'problem', text: cs.problem },
      { kind: 'architecture', items: cs.architecture },
      { kind: 'results', items: cs.results },
    );
  }

  return { project, blocks, repo: project.repo };
}
