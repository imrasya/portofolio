/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['drive.google.com'], // Optimizing known domains if needed
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
