import {profile} from '@/content';
import {DataPortrait} from './data-portrait';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {Reveal} from '@/components/primitives/reveal';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="rule gutter py-24">
      <div className="grid gap-12 min-[900px]:grid-cols-[minmax(0,360px)_1fr] min-[900px]:gap-24">
        <Reveal>
          <DataPortrait />
        </Reveal>
        <Reveal>
          <Eyebrow>(About)</Eyebrow>
          <h2 id="about-title" className="display-md mt-4">
            Data, <span className="italic-wide">built to last</span>
          </h2>
          <div className="mt-10 space-y-6">
            {profile.about.map((p, i) => (
              <p key={i} className={i === 0 ? 'statement max-w-[34ch]' : 'body-copy max-w-[46ch]'}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
