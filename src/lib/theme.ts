export type Theme = 'dark' | 'light';

export const THEME_KEY = 'theme';
export const DEFAULT_THEME: Theme = 'dark';

type ReadableStorage = Pick<Storage, 'getItem'>;

export function resolveTheme(stored: string | null | undefined): Theme {
  return stored === 'light' ? 'light' : DEFAULT_THEME;
}

export function readStoredTheme(storage: ReadableStorage | null | undefined): Theme {
  try {
    return resolveTheme(storage?.getItem(THEME_KEY));
  } catch {
    return DEFAULT_THEME;
  }
}
