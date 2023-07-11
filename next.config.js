/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://restcountries.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
