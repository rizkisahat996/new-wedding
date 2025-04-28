/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
};

export default nextConfig;
