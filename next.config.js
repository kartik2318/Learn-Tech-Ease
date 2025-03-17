/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ibb.co", "i.ibb.co"], // Allow external images from ImgBB
  },
}

module.exports = nextConfig
