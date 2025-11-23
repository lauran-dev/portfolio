import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/senior-software-engineer",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
