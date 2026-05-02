// src/app/page.tsx
// This is a React Server Component — no "use client" needed here.
// Content is read from /content/*.md at build time via lib/content.ts

import { getHomePageData } from "../lib/content";
import HeroClient from "./components/HeroClient";

// Next.js static export: this runs at build time
export default async function Home() {
  const { meta, featuredProjects, about, skills } = await getHomePageData();
  return <HeroClient meta={meta} featuredProjects={featuredProjects} about={about} skills={skills} />;
}