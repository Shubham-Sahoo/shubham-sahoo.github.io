// next.config.js (or .ts if using TypeScript)
import type { NextConfig } from "next";

const isGithubActions = !!process.env.GITHUB_ACTIONS;

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  basePath: isGithubActions ? `/${repo}` : "",
};

module.exports = nextConfig;
