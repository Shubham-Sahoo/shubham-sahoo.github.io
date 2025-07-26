export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">About Me</h1>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 text-white">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I am an experienced engineer passionate about cutting-edge technology and problem-solving.
              My journey spans from embedded systems to advanced deep learning research.
            </p>
            <p>
              Currently, I am a Deep Learning Research Engineer at NeuroPixel.AI, focusing on innovative AI
              solutions in neural networks and computer vision.
            </p>
            <p>
              I began my career at Analog Devices as an Embedded Systems Engineer, honing skills in hardware-software
              integration and real-time systems.
            </p>
            <p>
              My research experience includes an internship at RPAD Labs, Carnegie Mellon University, where I worked
              on Active Perception using Light Curtains for autonomous driving.
            </p>
            <p>
              This diverse experience bridges theoretical concepts and real-world AI applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
