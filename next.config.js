import createNextDocsMDX from 'next-docs-mdx/config'
 
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true
}
export default withFumaMDX(config)

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  appDir: true,
  serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = withContentlayer(nextConfig);
