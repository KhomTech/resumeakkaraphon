import type { NextConfig } from "next";

/*
  ==============================
  NEXT.JS CONFIGURATION
  ==============================
  - Enables external images from devicon CDN for skill icons
  - Configures image optimization settings
*/

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  basePath: '/resumeakkaraphon',
  assetPrefix: '/resumeakkaraphon/',
  // Allow external images from CDN
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/**',
      },
    ],
  },
  // Improve performance
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;
