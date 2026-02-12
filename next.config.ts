import type { NextConfig } from "next";

/*
  ==============================
  NEXT.JS CONFIGURATION
  ==============================
  - Enables external images from devicon CDN for skill icons
  - Conditionally configures static export for GitHub Pages
  - Vercel deploys work without any special config
*/

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  // Static export + basePath only for GitHub Pages
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/resumeakkaraphon',
    assetPrefix: '/resumeakkaraphon/',
  }),
  // Allow external images from CDN
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/**',
      },
    ],
  },
};

export default nextConfig;

