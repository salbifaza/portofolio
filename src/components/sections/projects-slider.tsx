'use client';

import Link from 'next/link';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {useCallback, useEffect, useRef, useState} from 'react';
import type {Project} from '@/content/types';
import {Cover} from '@/components/case-study/cover';

export function ProjectsSlider({projects}: {projects: Project[]}) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({start: true, end: false});

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({left: dir * el.clientWidth, behavior: 'smooth'});
  };

  const arrow =
    'inline-flex h-11 w-11 items-center justify-center rounded-full border border-text/[0.2] transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-text/[0.2] disabled:hover:text-inherit';

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button type="button" className={arrow} onClick={() => scrollByPage(-1)} disabled={edge.start} aria-label="Previous projects">
          <ChevronLeft aria-hidden className="h-5 w-5" />
        </button>
        <button type="button" className={arrow} onClick={() => scrollByPage(1)} disabled={edge.end} aria-label="Next projects">
          <ChevronRight aria-hidden className="h-5 w-5" />
        </button>
      </div>

      <ul
        ref={track}
        onScroll={update}
        tabIndex={0}
        aria-label="Selected projects"
        className="grid auto-cols-[100%] grid-flow-col grid-rows-2 gap-x-8 gap-y-10 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] snap-x snap-mandatory md:auto-cols-[calc((100%-2rem)/2)] min-[1200px]:auto-cols-[calc((100%-4rem)/3)] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <li key={p.slug} className="snap-start">
            <Link href={`/work/${p.slug}`} className="group block">
              <div className="overflow-hidden rounded-card transition-transform duration-500 group-hover:scale-[0.985]">
                <Cover project={p} />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium group-hover:text-accent">{p.name}</h3>
                <span className="chip shrink-0 !px-3 !py-1 !text-xs">{p.category}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
