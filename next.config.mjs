/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.iconify.design'
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com'
      }
    ]
  }
};

export default nextConfig;