/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // GitHub Pages uses a custom domain or username.github.io/repo-name
  // If you're using a custom domain, you can remove this
  basePath: '/anuptiwari32',
  assetPrefix: '/anuptiwari32',
}

module.exports = nextConfig 