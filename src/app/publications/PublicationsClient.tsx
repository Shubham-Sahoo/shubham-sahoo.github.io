"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { C } from "../../lib/theme";
import type { Publication } from "../../lib/content";

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
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp }}>
      <Navbar />

      <div className="container page-top" style={{ paddingBottom: "4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Publications</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1rem" }}>
            Research
          </h1>
          <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "520px", fontWeight: 300 }}>
            Published work spanning deep learning, wireless communications, and autonomous systems.
          </p>
        </div>

        {/* Metrics */}
        <div className="metrics-grid" style={{ marginBottom: "3rem" }}>
          {[
            { n: publications.length, l: "Publications" },
            { n: totalCite, l: "Total citations" },
            { n: hIndex(publications), l: "h-index" },
            { n: years[0], l: "Latest year" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.s1, padding: ".9rem 1rem", borderLeft: i > 0 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: C.accent, lineHeight: 1, marginBottom: "4px" }}>{s.n}</div>
              <div style={{ fontSize: "10px", color: C.td, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "2.5rem", flexWrap: "wrap", alignItems: "center" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search title, author, tag…"
            style={{
              background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "4px",
              padding: "7px 12px", fontSize: "12px", color: C.tp,
              fontFamily: "var(--font-mono)", width: "260px", maxWidth: "100%",
              letterSpacing: ".02em",
            }}
          />
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
            style={{
              background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "4px",
              padding: "7px 12px", fontSize: "12px", color: C.tm,
              fontFamily: "var(--font-mono)", cursor: "pointer",
            }}
          >
            <option value="all">All years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".06em", marginLeft: "auto" }}>
            {filtered.length} / {publications.length}
          </div>
        </div>

        {/* Publications list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {filtered.map((p, i) => (
            <div key={p.slug} className="pub-row" style={{ borderBottom: i < filtered.length - 1 ? `0.5px solid ${C.border}` : "none" }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.td, lineHeight: 1.7 }}>{p.venue}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.td, marginTop: "4px" }}>{p.year}</div>
                {p.citations > 0 && (
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.accent, marginTop: "8px" }}>↗ {p.citations} citations</div>
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
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "1rem" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "8px", padding: "2px 7px", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "3px", color: "rgba(255,255,255,0.35)" }}>{t}</span>
                  ))}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".04em" }}>
                  DOI: <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: C.tm }}>{p.doi}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 0" }} className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td }}>SHUBHAM SAHOO · 2025</span>
          <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td }}>← home</Link>
        </div>
      </footer>
    </div>
  );
}
