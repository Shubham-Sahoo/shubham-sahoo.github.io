export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Projects</h1>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 text-white text-center">
          <p className="text-lg mb-8">Coming Up.</p>
          <p className="text-gray-300">
            A showcase of my personal and collaborative projects in AI, machine learning, and software engineering.
          </p>
          {/* Dynamic project cards can be added here */}
        </div>
      </div>
    </div>
  );
}
