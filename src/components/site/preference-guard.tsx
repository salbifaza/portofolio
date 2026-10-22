'use client';

import {useEffect} from 'react';
import {initScript} from '@/lib/init-script';

/**
 * Re-applies data-theme and data-motion after hydration. If something injects a node into the
 * document (Netlify adds an HTML comment to <head>), React falls back to client rendering and
 * drops the attributes the head script set, which switches every motion and theme rule off.
 * Reuses the head script so the two cannot drift apart.
 */
export function PreferenceGuard() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.hasAttribute('data-theme') && root.hasAttribute('data-motion')) return;
    new Function(initScript)();
  }, []);
  return null;
}
