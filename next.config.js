/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org','mir-s3-cdn-cf.behance.net','image.tmdb.org'],
  },
}

module.exports = nextConfig
