'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        {/* Profile Picture */}
        <motion.div
          className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://github.com/shubham-sahoo.png"
            alt="Shubham Sahoo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name and Role */}
        <motion.h1
          className="text-4xl font-bold text-gradient bg-gradient-to-r from-teal-400 to-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Shubham Sahoo
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          AI Researcher | Open Source Enthusiast | Software Engineer
        </motion.p>

        {/* Dynamic Buttons */}
        <motion.div
          className="flex justify-center space-x-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition duration-300"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-lg transition duration-300"
          >
            My Projects
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm">
        © {new Date().getFullYear()} Shubham Sahoo. All rights reserved.
      </footer>
    </main>
  );
}
