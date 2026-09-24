import type { NextConfig } from "next";

// Static export for GitHub Pages. The repo is named michelledong200.github.io,
// so the site is served from the domain root and no basePath is needed.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
