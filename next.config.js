const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  appDir: true,
  serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = withContentlayer(nextConfig);
