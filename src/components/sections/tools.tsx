import {tools} from '@/content';
import {assetPath} from '@/lib/asset-path';
import {Marquee} from '@/components/primitives/marquee';
import {Eyebrow} from '@/components/primitives/eyebrow';

export function Tools() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="py-20">
      <div className="gutter mb-10">
        <Eyebrow>Modern techstack</Eyebrow>
        <h2 id="tools-title" className="mt-3 text-3xl">
          <span className="uppercase" style={{fontVariationSettings: 'var(--fvs-display)'}}>Professional</span>{' '}
          <span className="italic-wide">at</span>
        </h2>
      </div>
      <Marquee
        label="Tools I work with"
        duration={50}
        items={(isCopy) =>
          tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isCopy ? -1 : undefined}
              className="flex items-center gap-3 text-text opacity-45 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
            >
              <span
                aria-hidden
                className="logo-mask h-9 w-9"
                style={{['--logo' as string]: `url(${assetPath(tool.logo)})`}}
              />
              <span className="eyebrow !text-inherit whitespace-nowrap">{tool.name}</span>
            </a>
          ))
        }
      />
    </section>
  );
}
