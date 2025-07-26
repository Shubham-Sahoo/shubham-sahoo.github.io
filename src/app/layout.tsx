import type { Metadata } from "next";
import { Inter, Crimson_Text, Fira_Code } from "next/font/google";
import Navbar from "./components/Navbar";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-family-base", display: "swap" });
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-family-serif", display: "swap" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-family-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Shubham Sahoo – Deep Learning Researcher",
  description: "Professional portfolio and research website of Shubham Sahoo.",
  authors: [{ name: "Shubham Sahoo" }],
  openGraph: {
    type: "website",
    url: "https://shubham-sahoo.github.io",
    title: "Shubham Sahoo",
    description: "Deep Learning Researcher",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shubhamsahoo",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable} ${fira.variable}`}>
      <body className="bg-[var(--color-background)] text-[var(--color-text)] font-[var(--font-family-base)] antialiased min-h-screen flex flex-col">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-1 py-[var(--space-24)]">
          {children}
        </main>
        <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-[var(--space-24)] text-[var(--color-text-secondary)]">
          <div className="container flex flex-col items-center gap-[var(--space-16)]">
            <div className="flex gap-[var(--space-16)]">
              <a href="https://github.com/shubhamsahoo" className="text-[var(--font-size-base)] hover:text-[var(--color-primary)] transition-colors" aria-label="GitHub profile">GitHub</a>
              <a href="https://linkedin.com/in/shubhamsahoo" className="text-[var(--font-size-base)] hover:text-[var(--color-primary)] transition-colors" aria-label="LinkedIn profile">LinkedIn</a>
              <a href="https://twitter.com/shubhamsahoo" className="text-[var(--font-size-base)] hover:text-[var(--color-primary)] transition-colors" aria-label="Twitter profile">Twitter</a>
            </div>
            <p className="text-[var(--font-size-xs)] m-0">© {new Date().getFullYear()} Shubham Sahoo. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}