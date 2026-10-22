'use client';

import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  activePanelIndex,
  markerPosition,
  overflowWidth,
  progressFor,
  scrollForPanel,
  shouldPin,
  trackOffset,
} from '@/lib/timeline-progress';
import {TimelineYearBar, type YearItem} from './timeline-year-bar';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const motionIsOn = () => document.documentElement.getAttribute('data-motion') === 'on';

/**
 * Wraps the timeline panels. The server-rendered default is the stacked list; this enables
 * the pinned horizontal slide only at >=1025px with motion on (KTD5, AE1, AE2).
 */
export function TimelinePin({years, children}: {years: YearItem[]; children: React.ReactNode}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const pinnedRef = useRef(false);
  const activeRef = useRef(0);
  const restoreIndex = useRef<number | null>(null);
  const geo = useRef({sectionTop: 0, overflow: 0, lefts: [] as number[]});

  const panels = useCallback(
    () => Array.from(trackRef.current?.querySelectorAll<HTMLElement>('[data-panel]') ?? []),
    [],
  );

  // Decide the layout; on a switch, remember which panel the visitor is on so we can keep them there.
  useEffect(() => {
    const evaluate = () => {
      const next = shouldPin({viewportWidth: window.innerWidth, motionOn: motionIsOn(), ready: true});
      if (next === pinnedRef.current) return;
      const section = sectionRef.current;
      const rect = section?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        restoreIndex.current = pinnedRef.current
          ? activeRef.current
          : Math.max(0, panels().findIndex((p) => p.getBoundingClientRect().bottom > 80));
      }
      pinnedRef.current = next;
      setPinned(next);
    };
    evaluate();
    window.addEventListener('resize', evaluate);
    const mo = new MutationObserver(evaluate);
    mo.observe(document.documentElement, {attributes: true, attributeFilter: ['data-motion']});
    return () => {
      window.removeEventListener('resize', evaluate);
      mo.disconnect();
    };
  }, [panels]);

  // Pinned behaviour: size the section, map scroll to the track, keep the year bar in sync.
  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const els = panels();
    const markDetails = () => {
      // Overflowing detail columns become keyboard-scrollable regions; the rest are left alone.
      track.querySelectorAll<HTMLElement>('[data-detail]').forEach((el) => {
        if (pinned && el.scrollHeight > el.clientHeight + 1) {
          el.setAttribute('tabindex', '0');
          el.setAttribute('role', 'region');
        } else {
          el.removeAttribute('tabindex');
          el.removeAttribute('role');
        }
      });
    };

    if (!pinned) {
      markDetails();
      if (restoreIndex.current !== null) {
        els[restoreIndex.current]?.scrollIntoView({block: 'start', behavior: 'instant'});
        restoreIndex.current = null;
      }
      return;
    }

    const measure = () => {
      const vh = window.innerHeight;
      const overflow = overflowWidth(track.offsetWidth, window.innerWidth);
      section.style.height = `${vh + overflow}px`;
      geo.current = {
        sectionTop: section.getBoundingClientRect().top + window.scrollY,
        overflow,
        lefts: els.map((p) => p.offsetLeft),
      };
      markDetails();
    };

    const update = () => {
      const {sectionTop, overflow, lefts} = geo.current;
      const p = progressFor(window.scrollY, sectionTop, overflow);
      track.style.transform = `translate3d(${trackOffset(p, overflow)}px,0,0)`;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`;
      if (markerRef.current && barRef.current) {
        markerRef.current.style.left = `${markerPosition(p, 100)}%`;
      }
      const idx = activePanelIndex(p, lefts, overflow);
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    if (restoreIndex.current !== null) {
      const {lefts, overflow, sectionTop} = geo.current;
      window.scrollTo({
        top: scrollForPanel(lefts[restoreIndex.current] ?? 0, overflow, sectionTop, overflow),
        behavior: 'instant',
      });
      restoreIndex.current = null;
    }
    update();

    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(track);
    document.fonts?.ready.then(onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
      section.style.height = '';
      track.style.transform = '';
    };
  }, [pinned, panels]);

  const jump = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      if (pinnedRef.current) {
        const {lefts, overflow, sectionTop} = geo.current;
        window.scrollTo({top: scrollForPanel(lefts[index] ?? 0, overflow, sectionTop, overflow), behavior});
      } else {
        panels()[index]?.scrollIntoView({block: 'start', behavior: motionIsOn() ? behavior : 'auto'});
      }
    },
    [panels],
  );

  // Focusing something inside a panel brings that panel into view while pinned.
  const onFocusCapture = (e: React.FocusEvent) => {
    if (!pinnedRef.current) return;
    const panel = (e.target as HTMLElement).closest('[data-panel]');
    const index = panels().indexOf(panel as HTMLElement);
    if (index >= 0 && index !== activeRef.current) jump(index, 'instant');
  };

  return (
    <div ref={sectionRef} data-pinned={pinned} className="group relative">
      <div className="group-data-[pinned=true]:sticky group-data-[pinned=true]:top-0 group-data-[pinned=true]:flex group-data-[pinned=true]:h-screen group-data-[pinned=true]:flex-col group-data-[pinned=true]:overflow-clip group-data-[pinned=true]:pt-16">
        <TimelineYearBar
          ref={barRef}
          years={years}
          active={active}
          onJump={(i) => jump(i)}
          fillRef={fillRef}
          markerRef={markerRef}
        />
        <div
          ref={trackRef}
          onFocusCapture={onFocusCapture}
          className="flex flex-col group-data-[pinned=true]:min-h-0 group-data-[pinned=true]:w-max group-data-[pinned=true]:flex-1 group-data-[pinned=true]:flex-row group-data-[pinned=true]:will-change-transform"
          style={pinned ? {paddingInlineEnd: 'calc(100vw - min(78vw, 1100px))'} : undefined}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
