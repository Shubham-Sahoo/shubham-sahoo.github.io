export default function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">📚 Publications</h1>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 text-white">
          <p className="text-lg mb-8 text-center">
            For a complete list, visit my&nbsp;
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar profile
            </a>.
          </p>

          {/* Publication entries */}
          {[
            [
              "Efficient last-mile link adaptation in next-gen wireless heterogeneous networks",
              "14th Int. Conf. on COMSNETS (2022)"
            ],
            [
              "Integration of 5G Communications in Autonomous Vehicle Networks",
              "2nd PhD Colloquium EDITS (2020)"
            ],
            [
              "A Prototype of an Intelligent Ground Vehicle for constrained environment: Design and Development",
              "ICCRT (2019)"
            ]
          ].map(([title, venue]) => (
            <div key={title} className="border-l-4 border-blue-400 pl-6 mb-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 mb-1">Shubham Sahoo et al.</p>
              <p className="text-sm text-gray-400">{venue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
