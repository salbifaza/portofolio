/**
 * Prefix a `public/` asset path with the configured base path so assets resolve
 * under a GitHub Pages sub-path as well as a root-served host.
 */
export function assetPath(path: string, basePath: string = process.env.NEXT_PUBLIC_BASE_PATH ?? ''): string {
  if (/^(https?:)?\/\//.test(path)) return path;
  const base = basePath.replace(/\/+$/, '');
  const rel = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rel}`;
}
