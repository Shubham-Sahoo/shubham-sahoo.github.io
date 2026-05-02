"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import type { Publication } from "../../lib/content";

const C = {
  bg: "#0C0C0E", surface: "#111113", border: "rgba(255,255,255,0.07)",
  accent: "#5DC8A5", tp: "rgba(255,255,255,0.93)",
  tm: "rgba(255,255,255,0.5)", td: "rgba(255,255,255,0.25)",
};

function hIndex(pubs: { citations: number }[]) {
  const sorted = [...pubs].sort((a, b) => b.citations - a.citations);
  let h = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].citations >= i + 1) h = i + 1; else break;
  }
  return h;
}

export default function PublicationsClient({ publications }: { publications: Publication[] }) {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("all");

  const filtered = useMemo(() => publications.filter(p => {
    const q = search.toLowerCase();
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.authors.some(a => a.toLowerCase().includes(q)) || p.tags.some(t => t.toLowerCase().includes(q));
    const matchY = year === "all" || p.year.toString() === year;
    return matchQ && matchY;
  }), [search, year, publications]);

  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
  const totalCite = publications.reduce((s, p) => s + p.citations, 0);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: rgba(93,200,165,0.2); }
        input, select { outline: none; }
        @media (max-width: 768px) {
          .pub-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .metrics-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      <Navbar />

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Publications
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1rem" }}>
            Research
          </h1>
          <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "520px", fontWeight: 300 }}>
            Published work spanning deep learning, wireless communications, and autonomous systems.
          </p>
        </div>

        {/* Metrics */}
        <div className="metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "6px", overflow: "hidden", maxWidth: "480px", marginBottom: "3rem" }}>
          {[
            { n: publications.length, l: "Publications" },
            { n: totalCite, l: "Total citations" },
            { n: hIndex(publications), l: "h-index" },
            { n: years[0], l: "Latest year" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.surface, padding: ".9rem 1rem", borderLeft: i > 0 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "22px", color: C.accent, lineHeight: 1, marginBottom: "4px" }}>{s.n}</div>
              <div style={{ fontSize: "10px", color: C.td, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "2.5rem", flexWrap: "wrap" as const, alignItems: "center" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search title, author, tag…"
            style={{
              background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: "4px",
              padding: "7px 12px", fontSize: "12px", color: C.tp,
              fontFamily: "'JetBrains Mono', monospace", width: "260px",
              letterSpacing: ".02em",
            }}
          />
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
            style={{
              background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: "4px",
              padding: "7px 12px", fontSize: "12px", color: C.tm,
              fontFamily: "'JetBrains Mono', monospace", cursor: "pointer",
            }}
          >
            <option value="all">All years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".06em", marginLeft: "auto" }}>
            {filtered.length} / {publications.length}
          </div>
        </div>

        {/* Publications list */}
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {filtered.map((p, i) => (
            <div key={p.slug} className="pub-row" style={{
              display: "grid", gridTemplateColumns: "140px 1fr", gap: "3rem",
              padding: "2.25rem 0",
              borderBottom: i < filtered.length - 1 ? `0.5px solid ${C.border}` : "none",
            }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, lineHeight: 1.7 }}>{p.venue}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, marginTop: "4px" }}>{p.year}</div>
                {p.citations > 0 && (
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.accent, marginTop: "8px" }}>↗ {p.citations} citations</div>
                )}
              </div>
              <div>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4, display: "block", marginBottom: "8px", transition: "color .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.tp)}
                >{p.title}</a>

                <div style={{ fontSize: "12px", color: C.tm, marginBottom: "10px", lineHeight: 1.5 }}>
                  {p.authors.map((a, j) => (
                    <span key={j} style={{ fontWeight: a === "Shubham Sahoo" ? 500 : 400, color: a === "Shubham Sahoo" ? C.tp : C.tm }}>
                      {a}{j < p.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>

                <p style={{ fontSize: "12px", color: C.tm, lineHeight: 1.65, marginBottom: "1rem" }}>{p.abstract}</p>

                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "5px", marginBottom: "1rem" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", padding: "2px 7px", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "3px", color: "rgba(255,255,255,0.35)" }}>{t}</span>
                  ))}
                </div>

                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".04em" }}>
                  DOI: <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: C.tm }}>{p.doi}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td }}>SHUBHAM SAHOO · 2025</span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td }}>← home</Link>
      </footer>
    </div>
  );
}
