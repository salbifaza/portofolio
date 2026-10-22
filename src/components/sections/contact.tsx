import {profile} from '@/content';
import {assetPath} from '@/lib/asset-path';
import {Eyebrow} from '@/components/primitives/eyebrow';
import {PillButton} from '@/components/primitives/pill-button';
import {FooterInfo} from '@/components/site/footer-info';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="rule gutter pb-12 pt-24">
      <Eyebrow>(Contact)</Eyebrow>
      <h2 id="contact-title" className="display mt-6" style={{fontSize: 'clamp(56px, 12vw, 200px)'}}>
        <span className="block">Let&apos;s build</span>
        <span className="italic-wide block">your next</span>
        <span className="block">data platform</span>
      </h2>

      <div className="mt-12 flex flex-wrap gap-4">
        <PillButton href={`mailto:${profile.email}`}>Email Me</PillButton>
        {profile.bookingUrl && <PillButton href={profile.bookingUrl} variant="outline">Book a Call</PillButton>}
        {/* Plain anchor: assetPath already applies the base path, next/link would add it twice. */}
        <a href={assetPath(profile.cv)} download className="btn btn-outline">
          Download CV
        </a>
      </div>

      <div className="rule mt-24 pt-8">
        <FooterInfo />
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="flex gap-6">
            <a className="eyebrow hover:text-text" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="eyebrow hover:text-text" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="eyebrow hover:text-text" href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <a className="eyebrow hover:text-text" href="#top">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}
