import type { NextConfig } from "next";

/*
  ==============================
  NEXT.JS CONFIGURATION
  ==============================
  - Enables external images from devicon CDN for skill icons
  - Vercel deployment configuration (Standard)
*/

const nextConfig: NextConfig = {
  // Allow external images from CDN
  images: {
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

