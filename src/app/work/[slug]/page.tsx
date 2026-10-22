import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {caseStudyModel, caseStudyStaticParams} from '@/content/case-study-model';
import {CaseStudyPage} from '@/components/case-study/case-study-page';

// Static export: slugs outside generateStaticParams must 404, not render on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyStaticParams();
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const model = caseStudyModel(slug);
  if (!model) return {};
  return {
    title: `${model.project.name} | Salbi Faza Rinaldi`,
    description: model.blocks[0].kind === 'summary' ? model.blocks[0].text : undefined,
    openGraph: {title: model.project.name, type: 'article'},
  };
}

export default async function WorkPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const model = caseStudyModel(slug);
  if (!model) notFound();
  return <CaseStudyPage model={model} />;
}
