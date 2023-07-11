/** @type {import('next').NextConfig} */
const nextConfig = {
  // The rewrites function allows you to map incoming request paths to different destination paths.
  async rewrites() {
    return [
      {
        // The source property defines the incoming request path pattern.
        // In this case, it matches any request that starts with '/api' and has any number of additional path segments.
        source: "/api/:path*",
        // The destination property defines the destination path for the matched request.
        // In this case, it proxies the request to the REST Countries API by replacing the '/api' part of the request path with 'https://restcountries.com'.
        destination: "https://restcountries.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
