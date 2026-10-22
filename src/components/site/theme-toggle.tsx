'use client';

import {THEME_KEY} from '@/lib/theme';

export function ThemeToggle({className}: {className?: string}) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // storage blocked: the choice just won't persist
    }
  };

  return (
    <button type="button" onClick={toggle} className={className} aria-label="Switch between dark and light theme">
      <span className="show-when-dark">Light</span>
      <span className="show-when-light">Dark</span>
    </button>
  );
}
