/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
