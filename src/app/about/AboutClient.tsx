"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { C } from "../../lib/theme";
import type { AboutPageData } from "../../lib/content";

export default function AboutClient({ meta, experience, skills, publications }: AboutPageData) {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp }}>
      <Navbar />

      <div className="container" style={{ paddingTop: "calc(var(--nav-height) + 2rem)", paddingBottom: "4rem" }}>

        {/* Page header */}
        <div style={{ marginBottom: "4rem", paddingBottom: "2.5rem", borderBottom: `0.5px solid ${C.border}` }}>
          <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> About & CV</div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <img
              src={meta.photo}
              alt={meta.name}
              style={{ width: "80px", height: "80px", borderRadius: "50%", border: `0.5px solid ${C.border2}`, objectFit: "cover", filter: "grayscale(15%)", flexShrink: 0 }}
            />
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em" }}>
              {meta.name}
            </h1>
          </div>
          <div className="about-header-grid">
            <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, fontWeight: 300 }}>
              {meta.bio}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignContent: "flex-start" }}>
              {[
                { l: meta.email, h: `mailto:${meta.email}` },
                { l: "GitHub ↗", h: meta.social.github ?? "" },
                { l: "LinkedIn ↗", h: meta.social.linkedin ?? "" },
                { l: "HuggingFace ↗", h: meta.social.huggingface ?? "" },
              ].filter(s => s.h).map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "var(--font-mono)", fontSize: "10px",
                  padding: "6px 12px", border: `0.5px solid ${C.border}`, borderRadius: "4px",
                  color: C.tm, letterSpacing: ".04em",
                }}>{s.l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <section style={{ marginBottom: "4rem" }}>
          <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Experience</div>
          {experience.map((exp, i) => (
            <div key={i} className="exp-row">
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.td, lineHeight: 1.7, letterSpacing: ".02em" }}>{exp.period}</div>
                {exp.location && <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.td, marginTop: "3px" }}>{exp.location}</div>}
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "3px" }}>{exp.role}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: exp.companyColor, marginBottom: "1rem", letterSpacing: ".02em" }}>{exp.company}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "13px", color: C.tm, lineHeight: 1.65, padding: "3px 0 3px 1.25rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: C.td, fontFamily: "var(--font-mono)", fontSize: "9px", top: "7px" }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {exp.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "2px 7px", border: "0.5px solid rgba(255,255,255,0.13)", borderRadius: "3px", color: "rgba(255,255,255,0.4)", letterSpacing: ".04em" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section style={{ marginBottom: "4rem" }}>
          <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Skills & Expertise</div>
          <div className="skills-grid">
            {skills.categories.map((s, i) => (
              <div key={i} style={{ padding: "1.25rem", background: C.s1, borderRight: `0.5px solid ${C.border}`, borderBottom: `0.5px solid ${C.border}` }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.accent, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: ".75rem" }}>{s.name}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {s.items.map((item) => (
                    <span key={item} style={{ fontSize: "12px", color: C.tm }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section style={{ marginBottom: "4rem" }}>
          <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Education</div>
          <div className="exp-row" style={{ borderBottom: `0.5px solid ${C.border}` }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.td, lineHeight: 1.7 }}>Jul 2017 – May {meta.graduationYear}</div>
            <div>
              <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "3px" }}>{meta.university}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: C.accent, marginBottom: "8px" }}>{meta.degree}</div>
              <div style={{ fontSize: "13px", color: C.tm, lineHeight: 1.65 }}>Electronics and Electrical Communication Engineering · M.Tech in {meta.specialisation} · Minor in Computer Science and Engineering</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: C.td, marginTop: "8px" }}>CGPA: {meta.cgpa} / 10.0</div>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section>
          <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Publications</div>
          {publications.map((p, i) => (
            <div key={i} className="pub-row" style={{ borderBottom: i < publications.length - 1 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: C.td, lineHeight: 1.6 }}>{p.venue}</div>
              <div>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "14px", color: C.tp, lineHeight: 1.6, display: "block", marginBottom: "5px", transition: "color .2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.tp)}
                >{p.title}</a>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".04em" }}>DOI: {p.doi}</div>
              </div>
            </div>
          ))}
        </section>

      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 0" }} className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>SHUBHAM SAHOO · 2025</span>
          <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>← Back to home</Link>
        </div>
      </footer>
    </div>
  );
}
