/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "api.iconify.design", "www.transparenttextures.com"],
  },
  env: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
