"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import type { Project } from "../../lib/content";

const STATUS_COLORS: Record<string, string> = {
  Active:     "rgba(93,200,165,0.15)",
  Production: "rgba(93,165,200,0.15)",
  Published:  "rgba(200,168,93,0.15)",
};
const STATUS_TEXT: Record<string, string> = {
  Active:     "#5DC8A5",
  Production: "#5da8c8",
  Published:  "#c8a85d",
};

const C = {
  bg: "#0C0C0E", surface: "#111113", border: "rgba(255,255,255,0.07)",
  border2: "rgba(255,255,255,0.12)", accent: "#5DC8A5",
  tp: "rgba(255,255,255,0.93)", tm: "rgba(255,255,255,0.5)", td: "rgba(255,255,255,0.25)",
};

interface Props {
  projects: Project[];
  openSource: { name: string; desc: string; stars: string; url: string }[];
}

export default function ProjectsClient({ projects, openSource }: Props) {
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const statuses = ["All", ...Array.from(new Set(projects.map(p => p.status)))];

  const [cat, setCat] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = projects.filter(p =>
    (cat === "All" || p.category === cat) &&
    (status === "All" || p.status === status)
  );

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: rgba(93,200,165,0.2); }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .filter-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      <Navbar />

      {/* Page header */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: C.accent, opacity: .6 }}>▸</span> Projects
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1rem" }}>
          Work & Research
        </h1>
        <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "560px", fontWeight: 300 }}>
          Production systems, generative AI research, and applied ML — from Snap Lenses reaching millions to autonomous vehicle perception at CMU.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "6px", overflow: "hidden", maxWidth: "480px", marginTop: "2.5rem" }}>
          {[
            { n: projects.length, l: "Total projects" },
            { n: projects.filter(p => p.status === "Active").length, l: "Active" },
            { n: projects.filter(p => p.status === "Production").length, l: "In production" },
            { n: projects.filter(p => p.status === "Published").length, l: "Published" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.surface, padding: ".9rem 1rem", borderLeft: i > 0 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "22px", color: C.accent, lineHeight: 1, marginBottom: "4px" }}>{s.n}</div>
              <div style={{ fontSize: "10px", color: C.td, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Filters */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "1.75rem 2.5rem" }}>
        <div className="filter-row" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const, alignItems: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em", marginRight: "4px" }}>CATEGORY</span>
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "4px 10px", borderRadius: "3px", letterSpacing: ".04em", cursor: "pointer", background: cat === c ? C.accent : "transparent", color: cat === c ? "#0C0C0E" : C.td, border: cat === c ? "none" : `0.5px solid ${C.border}`, transition: "all .15s" }}>{c}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const, alignItems: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em", marginRight: "4px" }}>STATUS</span>
            {statuses.map(s => (
              <button key={s} onClick={() => setStatus(s)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "4px 10px", borderRadius: "3px", letterSpacing: ".04em", cursor: "pointer", background: status === s ? C.accent : "transparent", color: status === s ? "#0C0C0E" : C.td, border: status === s ? "none" : `0.5px solid ${C.border}`, transition: "all .15s" }}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Projects grid */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "2.5rem 2.5rem" }}>
        <div style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", color: C.td, marginBottom: "1.5rem", letterSpacing: ".06em" }}>
          {filtered.length} / {projects.length} projects
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
          {filtered.map((p) => (
            <div key={p.slug} style={{ background: C.surface, padding: "1.75rem", borderBottom: `0.5px solid ${C.border}`, borderRight: `0.5px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: p.companyColor, letterSpacing: ".1em" }}>{p.company} · {p.timeline}</div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 8px", borderRadius: "99px", background: STATUS_COLORS[p.status] || "rgba(255,255,255,0.05)", color: STATUS_TEXT[p.status] || C.td, letterSpacing: ".06em" }}>{p.status}</span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 500, marginBottom: "8px", lineHeight: 1.4 }}>{p.title}</div>
              <div style={{ fontSize: "12px", color: C.tm, lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.accent, marginBottom: "1rem", letterSpacing: ".04em" }}>↗ {p.impact}</div>

              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "4px", marginBottom: "1rem" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", padding: "2px 6px", border: `0.5px solid rgba(255,255,255,0.1)`, borderRadius: "3px", color: "rgba(255,255,255,0.35)" }}>{t}</span>
                ))}
              </div>

              {Object.keys(p.links).length > 0 && (
                <div style={{ display: "flex", gap: "8px", paddingTop: "1rem", borderTop: `0.5px solid ${C.border}` }}>
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>GitHub ↗</a>}
                  {p.links.paper && <a href={p.links.paper} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>Paper ↗</a>}
                  {p.links.video && <a href={p.links.video} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>Video ↗</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Open Source */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "3rem 2.5rem" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: C.accent, opacity: .6 }}>▸</span> Open source contributions
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
          {openSource.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{ background: C.surface, padding: "1.25rem", borderRight: `0.5px solid ${C.border}`, display: "block", transition: "background .2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#171719")}
              onMouseLeave={e => (e.currentTarget.style.background = C.surface)}
            >
              <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>{r.name}</div>
              <div style={{ fontSize: "11px", color: C.tm, lineHeight: 1.6, marginBottom: "1rem" }}>{r.desc}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td }}>★ {r.stars}</div>
            </a>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>SHUBHAM SAHOO · 2025</span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>← home</Link>
      </footer>
    </div>
  );
}
