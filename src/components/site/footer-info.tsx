import {profile} from '@/content';
import {Eyebrow} from '@/components/primitives/eyebrow';

export function FooterInfo() {
  return (
    <dl className="grid gap-x-12 gap-y-3 sm:grid-cols-3">
      <div>
        <dt><Eyebrow small>Name</Eyebrow></dt>
        <dd className="mt-1 text-text">{profile.name}</dd>
      </div>
      <div>
        <dt><Eyebrow small>Title</Eyebrow></dt>
        <dd className="mt-1 text-text">{profile.title}</dd>
      </div>
      <div>
        <dt><Eyebrow small>Location</Eyebrow></dt>
        <dd className="mt-1 text-text">{profile.location}</dd>
      </div>
    </dl>
  );
}
