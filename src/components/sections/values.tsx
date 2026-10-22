import {values} from '@/content';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {Reveal} from '@/components/primitives/reveal';

export function Values() {
  return (
    <section id="values" aria-labelledby="values-title" className="rule gutter py-24">
      <div className="grid gap-12 min-[900px]:grid-cols-[1fr_1.6fr] min-[900px]:gap-24">
        <Reveal>
          <Eyebrow>(Values)</Eyebrow>
          <h2 id="values-title" className="display-md mt-4">
            How I <span className="italic-wide">work</span>
          </h2>
          <span aria-hidden className="mt-6 block h-0.5 w-16 bg-accent" />
          <p className="body-copy mt-6 max-w-[30ch]">What I try to stick to, on the job and off it.</p>
        </Reveal>

        <ol>
          {values.map((v, i) => (
            <li key={v.title} className="rule py-8 first:border-t-0 first:pt-0">
              <Reveal className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="pt-2 font-mono text-xs tracking-[0.06em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-3xl" style={{fontVariationSettings: 'var(--fvs-row)'}}>
                    {v.title}
                  </h3>
                  <p className="body-copy mt-3 max-w-[46ch]">{v.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
