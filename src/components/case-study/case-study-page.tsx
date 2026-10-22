import Link from 'next/link';
import type {CaseStudyModel} from '@/content/case-study-model';
import {Cover} from './cover';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {Chip} from '@/components/primitives/chip';
import {PillButton} from '@/components/primitives/pill-button';
import {Contact} from '@/components/sections/contact';

function Block({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <section className="rule grid gap-6 py-10 min-[900px]:grid-cols-[1fr_2fr] min-[900px]:gap-16">
      <h2 className="eyebrow">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function CaseStudyPage({model}: {model: CaseStudyModel}) {
  const {project, blocks, repo} = model;
  return (
    <>
      <main id="top" className="gutter" style={{paddingTop: 'var(--page-top)'}}>
        <Link href="/#projects" className="eyebrow inline-flex min-h-[44px] items-center hover:text-text">
          ← All work
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Chip>{project.category}</Chip>
          <Eyebrow>{project.kind === 'employer' ? 'Employer project' : 'Public repo'}</Eyebrow>
        </div>
        <h1 className="display mt-6" style={{fontSize: 'clamp(48px, 10vw, 168px)'}}>
          {project.name}
        </h1>

        <div className="mt-12 max-w-[1100px]">
          <Cover project={project} className="!aspect-[16/7]" />
        </div>

        <div className="mt-12">
          {blocks.map((block) => {
            switch (block.kind) {
              case 'summary':
                return (
                  <section key="summary" className="rule py-10">
                    <p className="statement max-w-[34ch]">{block.text}</p>
                  </section>
                );
              case 'problem':
                return (
                  <Block key="problem" title="Problem">
                    <p className="body-copy max-w-[56ch]">{block.text}</p>
                  </Block>
                );
              case 'architecture':
                return (
                  <Block key="architecture" title="Architecture">
                    <ul className="body-copy max-w-[56ch] list-disc space-y-3 pl-5 marker:text-accent">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Block>
                );
              case 'results':
                return (
                  <Block key="results" title="Results">
                    <ul className="body-copy max-w-[56ch] list-disc space-y-3 pl-5 marker:text-accent">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Block>
                );
            }
          })}

          <Block title="Stack">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>
          </Block>

          {repo && (
            <Block title="Repository">
              <PillButton href={repo}>View on GitHub ↗</PillButton>
            </Block>
          )}
        </div>
      </main>
      <Contact />
    </>
  );
}
