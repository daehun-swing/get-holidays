import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
      allowedOrigins: ['http://localhost:3000', 'https://get-holidays-omega.vercel.app'],
    }
  },
};

export default nextConfig;
