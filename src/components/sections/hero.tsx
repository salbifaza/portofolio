import {profile} from '@/content';
import {Marquee} from '@/components/primitives/marquee';
import {PillButton} from '@/components/primitives/pill-button';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {Glitch} from '@/components/primitives/glitch';

export function Hero() {
  const {hero} = profile;
  return (
    <>
    <section
      aria-labelledby="hero-title"
      className="flex min-h-[100svh] flex-col pb-12"
      style={{paddingTop: 'clamp(96px, 14vh, 140px)'}}
    >
      <div className="gutter flex flex-1 flex-col">
        <Eyebrow className="grid gap-1 min-[700px]:grid-cols-3">
          <span>(Hello)</span>
          <span className="min-[700px]:text-center">{profile.title}</span>
          <span className="min-[700px]:text-right">Portfolio ©{new Date().getFullYear()}</span>
        </Eyebrow>
        <h1 id="hero-title" style={{marginTop: 'clamp(32px, 3.2vw, 64px)'}}>
          <span className="display block">
            <Glitch>Salbi</Glitch>
          </span>
          <span
            className="italic-wide block"
            style={{fontSize: 'clamp(40px, 9vw, 150px)', lineHeight: 0.95, marginTop: '0.1em'}}
          >
            <Glitch delay={1.3}>Faza Rinaldi</Glitch>
          </span>
        </h1>

        <div className="mt-auto pt-12">
          <div className="grid gap-8 min-[900px]:grid-cols-[1.4fr_1fr] min-[900px]:gap-16">
            <p className="statement max-w-[30ch]">{hero.statement}</p>
            <p className="body-copy max-w-[36ch]">{hero.audience}</p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Eyebrow>↓ Scroll to query more</Eyebrow>
            <PillButton href="#projects" variant="outline">
              Trace the pipelines →
            </PillButton>
          </div>
        </div>
      </div>
    </section>

      <Marquee
        label="What I do"
        duration={36}
        items={() =>
          hero.words.map((word, i) =>
            i % 2 === 0 ? (
              <span
                key={word}
                className="outline-text whitespace-nowrap uppercase"
                style={{fontSize: 'clamp(32px, 3.75vw, 72px)', lineHeight: 1.05, fontVariationSettings: '"wdth" 78, "wght" 800'}}
              >
                {word}
              </span>
            ) : (
              <span
                key={word}
                className="italic-wide whitespace-nowrap"
                style={{fontSize: 'clamp(32px, 3.75vw, 72px)', lineHeight: 1.05, fontVariationSettings: '"wdth" 120, "wght" 250'}}
              >
                {word}
              </span>
            ),
          )
        }
      />
    </>
  );
}
