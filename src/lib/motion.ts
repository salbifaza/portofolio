export type Motion = 'on' | 'off';

export const MOTION_KEY = 'motion';

type ReadableStorage = Pick<Storage, 'getItem'>;

/** A stored choice wins, even over reduced-motion; otherwise follow the system. */
export function resolveMotion(stored: string | null | undefined, prefersReduced: boolean): Motion {
  if (stored === 'on' || stored === 'off') return stored;
  return prefersReduced ? 'off' : 'on';
}

export function readStoredMotion(
  storage: ReadableStorage | null | undefined,
  prefersReduced: boolean,
): Motion {
  try {
    return resolveMotion(storage?.getItem(MOTION_KEY), prefersReduced);
  } catch {
    return resolveMotion(null, prefersReduced);
  }
}
