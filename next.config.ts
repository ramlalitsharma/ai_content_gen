import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',  // Optional, leave empty if not needed
        pathname: '/**',  // Matches all paths
      },
    ],
  },
};

export default nextConfig;
