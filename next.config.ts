import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'shubham-sahoo.github.io';
  assetPrefix = `/${repo}`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: assetPrefix, // Ensure it starts with a leading slash
  basePath: basePath, // Base path for GitHub Pages
  trailingSlash: true, // Ensure paths have trailing slashes
};

export default nextConfig;
