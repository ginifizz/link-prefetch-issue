/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  eslint: {
    dirs: ["app"],
  },
};

export default nextConfig;
