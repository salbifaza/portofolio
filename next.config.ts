
import type {NextConfig} from 'next';

// Set NEXT_PUBLIC_BASE_PATH (e.g. /portofolio) when serving under a sub-path such as GitHub Pages.
// assetPath() reads the same variable, so public/ assets resolve under it too.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  ...(basePath ? {basePath} : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Derive the client-side base path from the final config, so a basePath injected by
// actions/configure-pages is honoured by assetPath() as well as one set via the env var.
nextConfig.env = {NEXT_PUBLIC_BASE_PATH: nextConfig.basePath ?? ''};

export default nextConfig;
