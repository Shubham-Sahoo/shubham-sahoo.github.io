'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center text-white px-6">
      {/* Hero */}
      <motion.div
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Avatar substitute */}
        <motion.div
          className="mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          SS
        </motion.div>

        <div>
          <h1 className="text-6xl font-extrabold mb-4">
            Hello, I'm <span className="text-blue-400">Shubham Sahoo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Deep Learning Engineer | Open Source Contributor | Tech Enthusiast
          </p>
        </div>

        {/* Skills */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <ul className="space-y-2">
              <li>• Model development and optimization</li>
              <li>• Transfer learning</li>
              <li>• Computer Vision (OpenCV/Kornia)</li>
            </ul>
            <ul className="space-y-2">
              <li>• TensorRT/ONNX</li>
              <li>• Kafka</li>
              <li>• Kubernetes</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cards repeated three times */}
            {['1', '2', '3'].map(n => (
              <div key={n} className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Project {n}</h3>
                <p className="text-gray-300 mb-3">A brief description of the project goes here.</p>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>
          <motion.a
            href="/projects"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Projects
          </motion.a>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">Let's work together to build something amazing!</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors">
              Download Resume
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-16 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>© 2025 Shubham Sahoo. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
