/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['pt-BR', 'en', 'es'],
    localeDetection: true
  }
}

module.exports = nextConfig
