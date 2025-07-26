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
            Ph.D. Candidate in [Your Field] at [Your University]
          </motion.p>
          <motion.p
            className="text-[var(--font-size-lg)] text-[var(--color-text)] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I specialize in [Your Research Area]. Explore my work in research, publications, and projects.
          </motion.p>
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/research" className="btn btn--primary">
              View Research
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
          I am a dedicated researcher with a passion for [Your Research Interest].
          My work focuses on [Brief Description]. Learn more about my journey and contributions.
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
              <h3>Project Title 1</h3>
              <p className="text-[var(--color-text-secondary)]">
                A brief description of your research project. Highlight key findings or contributions.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__body">
              <h3>Project Title 2</h3>
              <p className="text-[var(--color-text-secondary)]">
                A brief description of another research project. Highlight key findings or contributions.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-right">
          <Link href="/research" className="btn btn--primary">
            View All Research
          </Link>
        </div>
      </section>
    </main>
  );
}