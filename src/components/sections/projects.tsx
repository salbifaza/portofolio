import Link from 'next/link';
import {projects} from '@/content';
import {Cover} from '@/components/case-study/cover';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {Reveal} from '@/components/primitives/reveal';

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="rule gutter py-24">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 id="projects-title" className="display-md">
            Selected <span className="italic-wide">work</span>
          </h2>
          <p className="body-copy mt-4 max-w-[46ch]">
            A selection of projects across streaming, lakehouse, batch and platform engineering.
          </p>
        </div>
        <Eyebrow>({String(projects.length).padStart(2, '0')} projects)</Eyebrow>
      </Reveal>

      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 min-[1200px]:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <Reveal>
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-card transition-transform duration-500 group-hover:scale-[0.985]">
                  <Cover project={p} />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium group-hover:text-accent">{p.name}</h3>
                  <span className="chip shrink-0 !px-3 !py-1 !text-xs">{p.category}</span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
