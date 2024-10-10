/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  i18n: {
    defaultLocale: 'en',
    locales: ['pt-BR', 'en', 'es']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/brenno-calado/**',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
