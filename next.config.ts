
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

export default nextConfig;
