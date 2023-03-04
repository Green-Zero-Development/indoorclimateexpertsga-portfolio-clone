/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {appDir: true},
  images: {
    domains: ['inside.indoorclimateexpertsga.com'],
  },
  compiler: {
    styledComponents: true
  },
}


module.exports = nextConfig
