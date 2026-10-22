import type {Project} from '@/content';
import {assetPath} from '@/lib/asset-path';
import {cn} from '@/lib/utils';

/** Supplied image when there is one, otherwise the project name set in display type (KTD10). */
export function Cover({project, className}: {project: Project; className?: string}) {
  const frame = 'relative aspect-[4/3] w-full overflow-hidden rounded-card';
  if (project.cover) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={assetPath(project.cover)}
        alt=""
        loading="lazy"
        decoding="async"
        className={cn(frame, 'object-cover', className)}
      />
    );
  }
  return (
    <div aria-hidden className={cn(frame, 'cover-type flex items-end bg-surface p-[6%]', className)}>
      <span className="display block">
        {project.name}
      </span>
      <span className="absolute right-[6%] top-[6%] h-3 w-3 rotate-45 bg-accent" />
    </div>
  );
}
