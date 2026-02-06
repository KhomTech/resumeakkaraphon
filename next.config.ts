import type { NextConfig } from "next";

/*
  ==============================
  NEXT.JS CONFIGURATION
  ==============================
  - Enables external images from devicon CDN for skill icons
  - Configures image optimization settings
*/

const nextConfig: NextConfig = {
  // Enable Static Export for GitHub Pages
  output: 'export',

  // Allow external images from CDN & Disable optimization for static export
  images: {
    unoptimized: true, // Required for GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/**',
      },
    ],
  },
  // Improve performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
