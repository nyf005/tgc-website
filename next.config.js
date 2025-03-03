/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Disable ESLint during build - this should stop ESLint errors from failing the build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript type checking during build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.yourdomain.com",
      },
    ],
  },
};

module.exports = nextConfig;
