/**
 * lib/content.ts
 *
 * Central content layer. All pages import from here — never read .md files directly.
 * Uses gray-matter for frontmatter parsing and remark for MD→HTML rendering.
 *
 * Install deps:
 *   npm install gray-matter remark remark-html
 *   npm install --save-dev @types/mdast
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

// ─── Paths ───────────────────────────────────────────────────────────────────

const CONTENT_DIR = path.join(process.cwd(), "content");

function contentPath(...segments: string[]) {
  return path.join(CONTENT_DIR, ...segments);
}

// ─── MD → HTML helper ────────────────────────────────────────────────────────

async function mdToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

function readMd(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  return matter(raw);
}

function readDir(dir: string): string[] {
  return fs
    .readdirSync(contentPath(dir))
    .filter((f) => f.endsWith(".md"))
    .map((f) => contentPath(dir, f));
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  huggingface?: string;
  website?: string;
}

export interface StatItem {
  num: string;
  label: string;
}

export interface SiteMeta {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  subtitle: string;
  available: boolean;
  availabilityLabel: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
  cgpa: string;
  university: string;
  degree: string;
  specialisation: string;
  graduationYear: number;
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  social: SocialLinks;
  stats: StatItem[];
  bio: string; // rendered from MD body
}

export interface Experience {
  slug: string;
  order: number;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  companyColor: string;
  tags: string[];
  featured: boolean;
  bullets: string[];
  bodyHtml: string;
  // Computed display fields
  period: string;
}

export interface Project {
  slug: string;
  order: number;
  title: string;
  company: string;
  companyColor: string;
  category: string;
  status: string;
  timeline: string;
  featured: boolean;
  icon: string;
  iconColor: string;
  bgGradient: string;
  impact: string;
  tags: string[];
  links: Record<string, string>;
  bodyHtml: string;
  desc: string; // plain text excerpt
}

export interface Publication {
  slug: string;
  order: number;
  title: string;
  authors: string[];
  venue: string;
  fullVenue: string;
  year: number;
  type: string;
  pages: string;
  doi: string;
  url: string;
  citations: number;
  tags: string[];
  status: string;
  abstract: string; // rendered from MD body
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
  coreSkills: string[];
}

export interface AboutContent {
  bio: string;
  heroBio: string;
  achievements: string[];
  openSource: { name: string; desc: string; stars: string; url: string }[];
}

// ─── Date formatting ─────────────────────────────────────────────────────────

function formatPeriod(startDate: string, endDate: string, current: boolean): string {
  const fmt = (d: string) => {
    const [year, month] = d.split("-");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };
  const end = current ? "Present" : fmt(endDate);
  return `${fmt(startDate)} – ${end}`;
}

// ─── Fetchers ────────────────────────────────────────────────────────────────

/** Site-wide meta — used in layout, hero, contact, footer */
export async function getMeta(): Promise<SiteMeta> {
  const { data, content } = readMd(contentPath("meta.md"));
  return {
    ...(data as Omit<SiteMeta, "bio">),
    bio: content.trim(),
  };
}

/** All experience entries sorted by order */
export async function getExperience(): Promise<Experience[]> {
  const files = readDir("experience");
  const entries = await Promise.all(
    files.map(async (file) => {
      const { data, content } = readMd(file);
      const slug = path.basename(file, ".md");
      return {
        slug,
        ...(data as Omit<Experience, "slug" | "bodyHtml" | "period">),
        bodyHtml: await mdToHtml(content),
        period: formatPeriod(data.startDate, data.endDate, data.current),
      } as Experience;
    })
  );
  return entries.sort((a, b) => a.order - b.order);
}

/** Featured experience only (for homepage) */
export async function getFeaturedExperience(): Promise<Experience[]> {
  const all = await getExperience();
  return all.filter((e) => e.featured);
}

/** All projects sorted by order */
export async function getProjects(): Promise<Project[]> {
  const files = readDir("projects");
  const entries = await Promise.all(
    files.map(async (file) => {
      const { data, content } = readMd(file);
      const slug = path.basename(file, ".md");
      const bodyHtml = await mdToHtml(content);
      // Plain text excerpt: strip tags, truncate at 160 chars
      const desc = content.replace(/#+\s/g, "").replace(/\n/g, " ").trim().slice(0, 160);
      return {
        slug,
        ...(data as Omit<Project, "slug" | "bodyHtml" | "desc">),
        bodyHtml,
        desc,
      } as Project;
    })
  );
  return entries.sort((a, b) => a.order - b.order);
}

/** Featured projects only (for homepage) */
export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  return all.filter((p) => p.featured);
}

/** Single project by slug */
export async function getProject(slug: string): Promise<Project | null> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) ?? null;
}

/** All publications sorted by year desc */
export async function getPublications(): Promise<Publication[]> {
  const files = readDir("publications");
  const entries = await Promise.all(
    files.map(async (file) => {
      const { data, content } = readMd(file);
      const slug = path.basename(file, ".md");
      const abstract = content.replace(/\n/g, " ").trim();
      return {
        slug,
        ...(data as Omit<Publication, "slug" | "abstract">),
        abstract,
      } as Publication;
    })
  );
  return entries.sort((a, b) => b.year - a.year);
}

/** Skills */
export function getSkills(): Skills {
  const { data } = readMd(contentPath("skills.md"));
  return data as Skills;
}

/** About page content */
export function getAbout(): AboutContent {
  const { data } = readMd(contentPath("about.md"));
  return data as AboutContent;
}

// ─── Aggregated homepage data (single call for page.tsx) ─────────────────────

export interface HomePageData {
  meta: SiteMeta;
  featuredProjects: Project[];
  about: AboutContent;
  skills: Skills;
}

export async function getHomePageData(): Promise<HomePageData> {
  const [meta, featuredProjects] = await Promise.all([
    getMeta(),
    getFeaturedProjects(),
  ]);
  const about = getAbout();
  const skills = getSkills();
  return { meta, featuredProjects, about, skills };
}

// ─── Aggregated about page data ──────────────────────────────────────────────

export interface AboutPageData {
  meta: SiteMeta;
  experience: Experience[];
  skills: Skills;
  publications: Publication[];
  about: AboutContent;
}

export async function getAboutPageData(): Promise<AboutPageData> {
  const [meta, experience, publications] = await Promise.all([
    getMeta(),
    getExperience(),
    getPublications(),
  ]);
  const skills = getSkills();
  const about = getAbout();
  return { meta, experience, skills, publications, about };
}