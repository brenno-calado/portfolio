/** @type {import('next').NextConfig} */
const nextConfig = {
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
