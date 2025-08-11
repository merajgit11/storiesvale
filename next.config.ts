import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ skip TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip ESLint errors
  },
};

export default nextConfig;
