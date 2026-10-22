import {projects} from '@/content';
import {ProjectsSlider} from './projects-slider';
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

      <ProjectsSlider projects={projects} />
    </section>
  );
}
