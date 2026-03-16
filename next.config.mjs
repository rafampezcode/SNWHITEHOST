/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/servers/dedicated-amd',
        destination: '/servers/dedicated',
        permanent: true,
      },
      {
        source: '/servers/dedicated-intel',
        destination: '/servers/dedicated',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
