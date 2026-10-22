'use client';

import {MOTION_KEY} from '@/lib/motion';

export function MotionToggle({className}: {className?: string}) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-motion') === 'off' ? 'on' : 'off';
    root.setAttribute('data-motion', next);
    try {
      localStorage.setItem(MOTION_KEY, next);
    } catch {
      // storage blocked: the choice just won't persist
    }
  };

  return (
    <button type="button" onClick={toggle} className={className} aria-label="Pause or play motion">
      <span className="show-when-motion-on">Pause motion</span>
      <span className="show-when-motion-off">Play motion</span>
    </button>
  );
}
