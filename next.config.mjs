/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/brenno-calado/",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/brenno-calado/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
