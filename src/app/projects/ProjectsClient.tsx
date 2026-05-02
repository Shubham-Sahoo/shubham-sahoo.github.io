"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { C, STATUS_COLORS, STATUS_TEXT } from "../../lib/theme";
import type { Project } from "../../lib/content";

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
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp }}>
      <Navbar />

      {/* Page header */}
      <div className="container page-top" style={{ paddingBottom: "3rem" }}>
        <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Projects</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1rem" }}>
          Work & Research
        </h1>
        <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "560px", fontWeight: 300 }}>
          Production systems, generative AI research, and applied ML — from Snap Lenses reaching millions to autonomous vehicle perception at CMU.
        </p>

        {/* Stats */}
        <div className="metrics-grid" style={{ marginTop: "2.5rem" }}>
          {[
            { n: projects.length, l: "Total projects" },
            { n: projects.filter(p => p.status === "Active").length, l: "Active" },
            { n: projects.filter(p => p.status === "Production").length, l: "In production" },
            { n: projects.filter(p => p.status === "Published").length, l: "Published" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.s1, padding: ".9rem 1rem", borderLeft: i > 0 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: C.accent, lineHeight: 1, marginBottom: "4px" }}>{s.n}</div>
              <div style={{ fontSize: "10px", color: C.td, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Filters */}
      <div className="container" style={{ padding: "1.75rem var(--pad-x)" }}>
        <div className="filter-row">
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".08em", marginRight: "4px" }}>CATEGORY</span>
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "4px 10px", borderRadius: "3px", letterSpacing: ".04em", background: cat === c ? C.accent : "transparent", color: cat === c ? C.bg : C.td, border: cat === c ? "none" : `0.5px solid ${C.border}`, transition: "all .15s" }}>{c}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".08em", marginRight: "4px" }}>STATUS</span>
            {statuses.map(s => (
              <button key={s} onClick={() => setStatus(s)} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "4px 10px", borderRadius: "3px", letterSpacing: ".04em", background: status === s ? C.accent : "transparent", color: status === s ? C.bg : C.td, border: status === s ? "none" : `0.5px solid ${C.border}`, transition: "all .15s" }}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Projects grid */}
      <div className="container" style={{ padding: "2.5rem var(--pad-x)" }}>
        <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: C.td, marginBottom: "1.5rem", letterSpacing: ".06em" }}>
          {filtered.length} / {projects.length} projects
        </div>
        <div className="projects-grid">
          {filtered.map((p) => (
            <div key={p.slug} style={{ background: C.s1, padding: "1.75rem", borderBottom: `0.5px solid ${C.border}`, borderRight: `0.5px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: p.companyColor, letterSpacing: ".1em" }}>{p.company} · {p.timeline}</div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "2px 8px", borderRadius: "99px", background: STATUS_COLORS[p.status] || "rgba(255,255,255,0.05)", color: STATUS_TEXT[p.status] || C.td, letterSpacing: ".06em" }}>{p.status}</span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 500, marginBottom: "8px", lineHeight: 1.4 }}>{p.title}</div>
              <div style={{ fontSize: "12px", color: C.tm, lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.accent, marginBottom: "1rem", letterSpacing: ".04em" }}>↗ {p.impact}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "1rem" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "8px", padding: "2px 6px", border: `0.5px solid rgba(255,255,255,0.1)`, borderRadius: "3px", color: "rgba(255,255,255,0.35)" }}>{t}</span>
                ))}
              </div>
              {Object.keys(p.links).length > 0 && (
                <div style={{ display: "flex", gap: "8px", paddingTop: "1rem", borderTop: `0.5px solid ${C.border}` }}>
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>GitHub ↗</a>}
                  {p.links.paper && <a href={p.links.paper} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>Paper ↗</a>}
                  {p.links.video && <a href={p.links.video} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>Video ↗</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Open Source */}
      <div className="container" style={{ padding: "3rem var(--pad-x)" }}>
        <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Open source contributions</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
          {openSource.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
              style={{ background: C.s1, padding: "1.25rem", borderRight: `0.5px solid ${C.border}`, display: "block", transition: "background .2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.s2)}
              onMouseLeave={e => (e.currentTarget.style.background = C.s1)}
            >
              <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>{r.name}</div>
              <div style={{ fontSize: "11px", color: C.tm, lineHeight: 1.6, marginBottom: "1rem" }}>{r.desc}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td }}>★ {r.stars}</div>
            </a>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 0" }} className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>SHUBHAM SAHOO · 2025</span>
          <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>← home</Link>
        </div>
      </footer>
    </div>
  );
}
