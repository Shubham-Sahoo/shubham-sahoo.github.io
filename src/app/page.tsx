"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="section flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-[600px]">
          <motion.h1
            className="text-[56px] font-[var(--font-family-serif)] font-[var(--font-weight-bold)] text-[var(--color-text)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shubham Sahoo
          </motion.h1>
          <motion.p
            className="text-[var(--font-size-xl)] text-[var(--color-text-secondary)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dual Degree in Electronics and Electrical Communication Engineering, IIT Kharagpur
          </motion.p>
          <motion.p
            className="text-[var(--font-size-lg)] text-[var(--color-text)] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I specialize in Computer Vision, Generative AI and Embedded Systems. Explore my work in research, publications, and projects.
          </motion.p>
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/projects" className="btn btn--primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn btn--secondary">
              Contact Me
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="max-w-[320px] aspect-square rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://avatars.githubusercontent.com/Shubham-Sahoo"
            alt="Shubham Sahoo Profile"
            width={320}
            height={320}
            className="rounded-full object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-sm">
        <h2 className="text-[var(--font-size-3xl)] text-[var(--color-text)]">
          About Me
        </h2>
        <p className="text-[var(--font-size-lg)] text-[var(--color-text-secondary)]">
          I am a dedicated researcher with a passion for developing intelligent systems that bridge the gap between theoretical innovation and real-world application.
          My work focuses on deep learning, computer vision, and efficient neural network deployment, particularly for edge devices and production-scale AI systems.
          Learn more about my journey and contributions as I continue to explore ways to make AI more accessible, impactful, and responsible.
        </p>
        <div className="mt-16">
          <Link href="/about" className="btn btn--primary">
            Read More
          </Link>
        </div>
      </section>

      {/* Research Section */}
      <section className="section-sm bg-[var(--color-surface)]">
        <h2 className="text-[var(--font-size-3xl)] text-[var(--color-text)]">
          Research Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-24">
          <div className="card">
            <div className="card__body">
              <h3>FitDit Vision Transformer Implementation</h3>
              <p className="text-[var(--color-text-secondary)]">
                Novel approach to convert flat-lay to model images with FitDiT architecture, refined apparel masks to improve garment alignment and realism, attention mechanism improvements, and training strategies.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__body">
              <h3>Active Perception using Light Curtains</h3>
              <p className="text-[var(--color-text-secondary)]">
                Collaborative research with CMU RPAD Labs on developing novel perception systems for autonomous vehicles using light curtain sensors for efficient obstacle detection and navigation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}