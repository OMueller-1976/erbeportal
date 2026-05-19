import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'erbeportal.de' }],
        destination: 'https://www.erbeportal.de/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL("https://www.erbeportal.de/**"),
      new URL("https://eritaj.de/**"),
    ],
  },
};

export default nextConfig;
