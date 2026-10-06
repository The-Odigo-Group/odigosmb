import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/login", destination: "https://portal.theodigogroup.com", permanent: false },
      { source: "/faq", destination: "/how-it-works", permanent: false },
      { source: "/specialty-services", destination: "/pricing", permanent: false },
      { source: "/powered-by-contentgen", destination: "/", permanent: false },
      { source: "/hvac-and-trades", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
