export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Me</h1>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 text-white text-center">
          <p className="text-lg mb-8">
            Feel free to reach out to discuss projects, collaborations, or any opportunities.
          </p>
          <div className="space-y-4">
            <p className="text-xl">You can reach me at:</p>
            <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4 inline-block">
              <a
                href="mailto:shubhamsomnath@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors"
              >
                shubhamsomnath@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
