'use client';

import {Moon, Sun} from 'lucide-react';
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
    <button type="button" onClick={toggle} className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center ${className ?? ''}`} aria-label="Switch between dark and light theme">
      <Sun aria-hidden className="show-when-dark h-4 w-4" />
      <Moon aria-hidden className="show-when-light h-4 w-4" />
    </button>
  );
}
