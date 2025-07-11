import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://specials-images.forbesimg.com")],
  },
};

export default nextConfig;
