import {profile} from '@/content';
import {Marquee} from '@/components/primitives/marquee';
import {PillButton} from '@/components/primitives/pill-button';
import {Eyebrow} from '@/components/primitives/eyebrow';

export function Hero() {
  const {hero} = profile;
  return (
    <section aria-labelledby="hero-title" className="pb-16" style={{paddingTop: 'var(--page-top)'}}>
      <div className="gutter">
        <Eyebrow>(Hello)</Eyebrow>
        <h1 id="hero-title" className="mt-6">
          <span className="display block">Salbi</span>
          <span
            className="italic-wide block"
            style={{fontSize: 'clamp(40px, 9vw, 150px)', lineHeight: 0.95, marginTop: '0.1em'}}
          >
            Faza Rinaldi
          </span>
        </h1>

        <div className="mt-12 grid gap-8 min-[900px]:grid-cols-[1.4fr_1fr] min-[900px]:gap-16">
          <p className="statement max-w-[30ch]">{hero.statement}</p>
          <p className="body-copy max-w-[36ch]">{hero.audience}</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Eyebrow>↓ Scroll, gently.</Eyebrow>
          <PillButton href="#projects" variant="outline">
            See the work →
          </PillButton>
        </div>
      </div>

      <Marquee
        label="What I do"
        duration={36}
        className="mt-16"
        items={() =>
          hero.words.map((word, i) =>
            i % 2 === 0 ? (
              <span
                key={word}
                className="outline-text whitespace-nowrap uppercase"
                style={{fontSize: 'clamp(48px, 8vw, 128px)', lineHeight: 1.05, fontVariationSettings: '"wdth" 78, "wght" 800'}}
              >
                {word}
              </span>
            ) : (
              <span
                key={word}
                className="italic-wide whitespace-nowrap"
                style={{fontSize: 'clamp(48px, 8vw, 128px)', lineHeight: 1.05, fontVariationSettings: '"wdth" 120, "wght" 250'}}
              >
                {word}
              </span>
            ),
          )
        }
      />
    </section>
  );
}
