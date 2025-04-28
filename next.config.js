/** @type {import('next').NextConfig} */
const nextConfig = {
    // Use remotePatterns for future-proofing instead of domains
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.iconify.design',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'www.transparenttextures.com',
          pathname: '**',
        }
      ]
    },
    // Enable strict mode for React
    reactStrictMode: true,
    // Explicitly set module type
    experimental: {
      esmExternals: 'loose',
    }
  };
  
  export default nextConfig;