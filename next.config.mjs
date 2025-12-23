/** @type {import('next').NextConfig} */
export default {
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
