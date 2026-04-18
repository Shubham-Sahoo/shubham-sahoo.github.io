"use client";

import Link from "next/link";

const EXPERIENCE = [
  {
    role: "Machine Learning Engineer",
    company: "Snap Inc.",
    companyColor: "#5DC8A5",
    location: "London",
    period: "Dec 2025 – Present",
    tags: ["FLUX", "QWEN", "LoRA", "PEFT", "GAN", "NAS", "Distillation", "Mobile ML"],
    bullets: [
      "Fine-tuned FLUX, QWEN diffusion models for Snap Lenses using LoRA and PEFT adapters for domain-specific Image2Image tasks.",
      "Built a modular, config-driven prompt mining framework for image edit, style, video, and txt2image generation with taxonomy generation from specs.",
      "Compressed teacher diffusion models into student GANs via kernel alignment and adversarial training for real-time mobile lens effects.",
      "Distilled diffusion models into NAS-searched GAN architectures via kernel alignment, preserving latent structure for on-device inference, piloting face effect Lenses across 1M+ users.",
    ],
  },
  {
    role: "Deep Learning Research Engineer",
    company: "NeuroPixel.AI Labs",
    companyColor: "#c85d9e",
    location: "",
    period: "Dec 2023 – Aug 2025",
    tags: ["FitDiT", "SAM", "TensorRT", "Redis", "FastAPI"],
    bullets: [
      "Implemented flat-lay to model image translation with FitDiT; refined apparel masks for garment alignment and realism.",
      "Optimised Meta's Segment Anything (SAM) to TensorRT format achieving 2.69× faster inference for real-time segmentation.",
      "Built a preemptive Redis queue to prioritise batch and real-time image generation requests by time, size, and urgency.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Analog Devices India",
    companyColor: "#5d7dc8",
    location: "",
    period: "May 2022 – Nov 2023",
    tags: ["DSP", "C++", "DMA", "MIPS", "Dolby Atmos"],
    bullets: [
      "Reduced in-vehicle speech miss rate to 0.121% (at 72 km/h) with MIPS value of 13 for Voice Activity Detection.",
      "Integrated Dolby Atmos In-Car Experience decoder using DMA interrupts and GPIO in a synchronous network.",
      "Led deployment of non-contiguous memory allocation techniques, managing memory fragmentation and resource constraints.",
    ],
  },
  {
    role: "Research Intern",
    company: "RPAD Lab, Carnegie Mellon University",
    companyColor: "#c8a85d",
    location: "",
    period: "Jun 2020 – Aug 2020",
    tags: ["Self-supervised RL", "GCN", "ICP", "CNN"],
    bullets: [
      "Worked on Safety Envelope Tracking using self-supervised reward function and Graph Convolutional Neural Networks.",
      "Devised approach to use temporal knowledge from environment by clustering points and greedy matching between frames.",
      "Obtained over 80% accuracy with CNNs on residual policy prediction; optimised velocity baseline with ICP matching.",
    ],
  },
  {
    role: "Robotics Intern",
    company: "AMX Innovation, Bengaluru",
    companyColor: "rgba(255,255,255,0.4)",
    location: "",
    period: "May 2019 – Jul 2019",
    tags: ["YOLO v3", "Transfer Learning", "ROS", "UAV"],
    bullets: [
      "Improved aerial detection model using transfer learning on YOLO V3-tiny object detection.",
      "Integrated object avoidance planner for UAV manoeuvring and integrated code with ROS.",
    ],
  },
];

const SKILLS = [
  { category: "Generative AI", items: ["FLUX", "SDXL", "QWEN Image Edit", "LoRA", "PEFT", "Adapters", "Diffusers"] },
  { category: "Model Compression", items: ["Knowledge Distillation", "Kernel Alignment", "NAS", "GAN", "Quantisation"] },
  { category: "Computer Vision", items: ["Image2Image", "Segmentation", "SAM", "FitDiT", "YOLO", "Object Detection"] },
  { category: "Deployment", items: ["ONNX", "TensorRT", "CUDA", "Mobile ML", "Kubernetes", "GCP", "Azure"] },
  { category: "Frameworks", items: ["PyTorch", "OpenCV", "FastAPI", "LangGraph", "Kafka", "Redis"] },
  { category: "Languages", items: ["Python", "C++", "CUDA", "TypeScript"] },
];

const PUBLICATIONS = [
  {
    title: "A Novel Machine Learning Approach for Link Adaptation in 5G Wireless Networks",
    venue: "IEEE PhDEDITS 2020",
    doi: "10.1109/PhDEDITS51180.2020.9315299",
    url: "https://ieeexplore.ieee.org/abstract/document/9315299",
  },
  {
    title: "A Prototype of an Intelligent Ground Vehicle for Constrained Environment: Design and Development",
    venue: "IEEE ICCRT 2019",
    doi: "10.1145/3387304.3387321",
    url: "https://dl.acm.org/doi/pdf/10.1145/3387304.3387321",
  },
];

const NAV = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "publications", href: "/publications" },
  { label: "contact", href: "/contact" },
];

export default function About() {
  const C = {
    bg: "#0C0C0E", s1: "#111113",
    border: "rgba(255,255,255,0.07)", border2: "rgba(255,255,255,0.12)",
    accent: "#5DC8A5",
    tp: "rgba(255,255,255,0.93)", tm: "rgba(255,255,255,0.5)", td: "rgba(255,255,255,0.25)",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 768px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .pub-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 2.5rem", height: "52px",
        background: "rgba(12,12,14,0.92)", backdropFilter: "blur(16px)",
        borderBottom: `0.5px solid ${C.border}`,
      }}>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: C.accent }}>SS/</Link>
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
              color: n.href === "/about" ? C.tm : C.td,
              letterSpacing: ".08em",
            }}>{n.label}</Link>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "4rem 2.5rem" }}>

        {/* Page header */}
        <div style={{ marginBottom: "4rem", paddingBottom: "2.5rem", borderBottom: `0.5px solid ${C.border}` }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> About & CV
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1.25rem" }}>
            Shubham Somnath Sahoo
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, fontWeight: 300 }}>
              Machine Learning Engineer at Snap Inc. London, specialising in generative AI systems — from fine-tuning large diffusion models to distilling them into mobile-ready architectures. IIT Kharagpur dual degree with an M.Tech specialisation in Visual Information Processing.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignContent: "flex-start" }}>
              {[
                { l: "shubhamsomnath@gmail.com", h: "mailto:shubhamsomnath@gmail.com" },
                { l: "GitHub ↗", h: "https://github.com/Shubham-Sahoo" },
                { l: "LinkedIn ↗", h: "https://www.linkedin.com/in/shubham-sahoo-62819b138" },
                { l: "HuggingFace ↗", h: "https://huggingface.co/spaces/shubham-sahoo" },
              ].map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
                  padding: "6px 12px", border: `0.5px solid ${C.border}`, borderRadius: "4px",
                  color: C.tm, letterSpacing: ".04em",
                }}>{s.l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Experience
          </div>

          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="exp-row" style={{
              display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem",
              padding: "2.25rem 0", borderBottom: `0.5px solid ${C.border}`,
            }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, lineHeight: 1.7, letterSpacing: ".02em" }}>{exp.period}</div>
                {exp.location && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, marginTop: "3px" }}>{exp.location}</div>}
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "3px" }}>{exp.role}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: exp.companyColor, marginBottom: "1rem", letterSpacing: ".02em" }}>{exp.company}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "13px", color: C.tm, lineHeight: 1.65, padding: "3px 0 3px 1.25rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: C.td, fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", top: "7px" }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {exp.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 7px", border: "0.5px solid rgba(255,255,255,0.13)", borderRadius: "3px", color: "rgba(255,255,255,0.4)", letterSpacing: ".04em" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Skills & Expertise
          </div>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
            {SKILLS.map((s, i) => (
              <div key={i} style={{ padding: "1.25rem", background: C.s1, borderRight: `0.5px solid ${C.border}`, borderBottom: `0.5px solid ${C.border}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.accent, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: ".75rem" }}>{s.category}</div>
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
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Education
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem", padding: "2rem 0", borderBottom: `0.5px solid ${C.border}` }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, lineHeight: 1.7 }}>Jul 2017 – May 2022</div>
            <div>
              <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "3px" }}>Indian Institute of Technology Kharagpur</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: C.accent, marginBottom: "8px" }}>Dual Degree (B.Tech + M.Tech)</div>
              <div style={{ fontSize: "13px", color: C.tm, lineHeight: 1.65 }}>Electronics and Electrical Communication Engineering · M.Tech in Visual Information Processing · Minor in Computer Science and Engineering</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: C.td, marginTop: "8px" }}>CGPA: 8.65 / 10.0</div>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Publications
          </div>
          {PUBLICATIONS.map((p, i) => (
            <div key={i} className="pub-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem", padding: "1.75rem 0", borderBottom: i < PUBLICATIONS.length - 1 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, lineHeight: 1.6 }}>{p.venue}</div>
              <div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: C.tp, lineHeight: 1.6, display: "block", marginBottom: "5px", transition: "color .2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.tp)}
                >{p.title}</a>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".04em" }}>DOI: {p.doi}</div>
              </div>
            </div>
          ))}
        </section>

      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>SHUBHAM SAHOO · 2025</span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>← Back to home</Link>
      </footer>
    </div>
  );
}