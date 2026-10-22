import {skills} from '@/content';
import {Marquee} from '@/components/primitives/marquee';

export function SkillsStrip() {
  return (
    <section aria-label="Skills" className="py-8">
      <Marquee
        label="Main skills"
        duration={55}
        reverse
        items={() =>
          skills.map((skill, i) => (
            <span
              key={skill}
              className={`whitespace-nowrap ${i % 2 === 0 ? 'uppercase' : 'italic-wide'}`}
              style={{
                fontSize: 'clamp(28px, 4vw, 56px)',
                lineHeight: 1.15,
                fontVariationSettings: i % 2 === 0 ? '"wdth" 80, "wght" 700' : '"wdth" 118, "wght" 250',
              }}
            >
              {skill}
            </span>
          ))
        }
      />
    </section>
  );
}
