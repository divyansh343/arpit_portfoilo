/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "placeimg.com",
      "images.unsplash.com"
    ],
  },
}

module.exports = nextConfig
