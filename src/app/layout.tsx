import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Sahoo",
  description: "Machine Learning Engineer at Snap Inc. London. Building diffusion models, LoRA adapters, and on-device generative systems.",
  authors: [{ name: "Shubham Sahoo" }],
  openGraph: {
    type: "website",
    url: "https://shubham-sahoo.github.io",
    title: "Shubham Sahoo – Deep Learning Engineer",
    description: "MLE at Snap Inc. London. Diffusion models, LoRA, mobile ML.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#0C0C0E", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}