'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import {profile} from '@/content';
import {LocalTime} from './local-time';
import {ThemeToggle} from './theme-toggle';

const NAV = [
  {id: 'about', label: 'About'},
  {id: 'services', label: 'Services'},
  {id: 'projects', label: 'Work'},
  {id: 'timeline', label: 'Experience'},
] as const;

const controlClass =
  'font-mono text-[11px] uppercase tracking-[0.06em] text-label transition-colors hover:text-text';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Active-section dot applies on the home page only.
  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const els = NAV.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => !!el);
    if (els.length === 0 || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((prev) => (prev === entry.target.id ? null : prev));
        }
      },
      {rootMargin: '-45% 0px -50% 0px'},
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (id: string) =>
    `relative inline-flex min-h-[44px] items-center font-mono text-xs uppercase tracking-[0.06em] transition-colors hover:text-text ${
      active === id ? 'text-text' : 'text-muted'
    }`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{background: 'linear-gradient(rgb(var(--bg)) 10%, transparent)'}}
    >
      <div className="gutter grid grid-cols-[1fr_auto] items-center py-3 min-[901px]:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" aria-label={`${profile.name}, home`}>
          <span aria-hidden className="inline-block h-4 w-4 bg-accent" />
          <span className="uppercase" style={{fontVariationSettings: 'var(--fvs-display)'}}>Salbi</span>
          <span className="italic-wide">Faza</span>
        </Link>

        <p className="eyebrow-sm max-[900px]:hidden">
          {profile.base.place} <span className="opacity-50">|</span> <LocalTime timeZone={profile.base.timeZone} />
        </p>

        <nav aria-label="Main" className="flex items-center justify-end gap-5 max-[900px]:hidden">
          {NAV.map((n) => (
            <Link key={n.id} href={`/#${n.id}`} className={linkClass(n.id)}>
              {active === n.id && <span aria-hidden className="absolute -left-3 h-1.5 w-1.5 rounded-full bg-accent" />}
              {n.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary !min-h-0 !py-2.5">
            Contact
          </Link>
          <ThemeToggle className={controlClass} />
        </nav>

        <button
          type="button"
          className="btn btn-outline min-[901px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="gutter flex flex-col gap-1 border-t border-text/[0.12] bg-bg pb-6 pt-3 min-[901px]:hidden"
        >
          {[...NAV, {id: 'contact', label: 'Contact'}].map((n) => (
            <Link key={n.id} href={`/#${n.id}`} className="inline-flex min-h-[44px] items-center text-2xl" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-5">
            <ThemeToggle className={`${controlClass} min-h-[44px]`} />
          </div>
        </nav>
      )}
    </header>
  );
}
