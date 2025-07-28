export default function About() {
  return (
    <div className="min-h-screen bg-background ">
      
      {/* Header Section */}
      <section className="section bg-white">
        <div className="container-narrow ">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              About Me
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              A passionate researcher bridging the gap between cutting-edge AI theory 
              and real-world applications, with a focus on making deep learning more 
              efficient and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-sm bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-text-primary mb-6">
              I am an experienced Deep Learning Research Engineer with a diverse background 
              spanning embedded systems, wireless communications, and artificial intelligence. 
              I graduated from <strong>IIT Kharagpur</strong> with a dual degree in <strong>Electronics and Electrical Communications Engineering (E&ECE)</strong>, 
              where I built a strong foundation in both theoretical and applied aspects of engineering.
              Currently working at <strong>NeuroPixel.AI</strong>, I focus on developing 
              innovative solutions that push the boundaries of what&apos;s possible with neural networks.
            </p>

            <p className="text-lg leading-relaxed text-text-primary mb-6">
              My research journey has taken me from the fundamental challenges of embedded 
              systems engineering at Analog Devices to the cutting-edge frontiers of AI 
              research. This unique combination of hardware expertise and AI research gives 
              me a distinctive perspective on building efficient, deployable AI systems.
            </p>

            <p className="text-lg leading-relaxed text-text-primary">
              I believe in research that makes a tangible impact. Whether it&apos;s optimizing 
              neural networks for edge deployment, advancing computer vision capabilities, 
              or exploring new paradigms in machine learning, my work is driven by the 
              desire to solve real problems and create technologies that benefit society.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Career Timeline */}
      <section className="section bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif font-semibold text-center mb-16">
            Professional Journey
          </h2>
          
          <div className="space-y-12">
            
            {/* Current Position */}
            <div className="timeline-item">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-48 flex-shrink-0">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg text-center">
                    <div className="font-semibold">2024 - Present</div>
                    <div className="text-sm opacity-90">Current</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                    Deep Learning Research Engineer
                  </h3>
                  <p className="text-lg font-medium text-secondary mb-4">
                    NeuroPixel.AI
                  </p>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Leading research initiatives in neural network optimization and computer vision 
                      applications. My work focuses on developing novel architectures and training 
                      methodologies that improve model efficiency while maintaining high performance.
                    </p>
                    <p className="mb-4">
                      <strong>Key Contributions:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-secondary">
                      <li>Model development and optimization for production environments</li>
                      <li>Transfer learning research for domain-specific applications</li>
                      <li>Computer vision systems using OpenCV and Kornia frameworks</li>
                      <li>Integration of TensorRT and ONNX for deployment optimization</li>
                      <li>Kubernetes-based MLOps pipeline development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CMU Research */}
            <div className="timeline-item">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-48 flex-shrink-0">
                  <div className="bg-accent text-white px-4 py-2 rounded-lg text-center">
                    <div className="font-semibold">2020</div>
                    <div className="text-sm opacity-90">Research</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                    Research Intern
                  </h3>
                  <p className="text-lg font-medium text-secondary mb-4">
                    RPAD Labs, Carnegie Mellon University
                  </p>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Collaborated with world-class researchers on cutting-edge projects in autonomous 
                      driving and perception systems. This experience exposed me to the intersection 
                      of AI research and robotics applications.
                    </p>
                    <p className="mb-4">
                      <strong>Research Focus:</strong> Active Perception using Light Curtains for 
                      autonomous vehicle navigation and obstacle detection.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-secondary">
                      <li>Developed novel perception algorithms for autonomous systems</li>
                      <li>Implemented real-time processing pipelines for sensor data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Analog Devices */}
            <div className="timeline-item">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-48 flex-shrink-0">
                  <div className="bg-secondary text-white px-4 py-2 rounded-lg text-center">
                    <div className="font-semibold">2022 - 2023</div>
                    <div className="text-sm opacity-90">Industry</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                    Software Engineer
                  </h3>
                  <p className="text-lg font-medium text-secondary mb-4">
                    Analog Devices
                  </p>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Built expertise in hardware-software integration and real-time systems. 
                      This role provided crucial insights into the practical constraints and 
                      opportunities for deploying AI systems on embedded platforms.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-secondary">
                      <li>Designed and implemented embedded software solutions</li>
                      <li>Optimized speech miss rate for Voice Activity Detection inside vehicles</li>
                      <li>Integrated Dolby Atmos In-Car Experience decoder inside a synchronous network using DMA interrupts and GPIO</li>
                      <li>Gained deep understanding of hardware limitations and opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-semibold text-center mb-16">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* AI/ML */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">AI & Machine Learning</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>Deep Learning Architectures</li>
                <li>Computer Vision</li>
                <li>Transfer Learning</li>
                <li>Neural Network Optimization</li>
                <li>Model Compression</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frameworks & Tools</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>PyTorch & TensorFlow</li>
                <li>OpenCV & Kornia</li>
                <li>TensorRT & ONNX</li>
                <li>Kubernetes & Docker</li>
                <li>Apache Kafka</li>
                <li>MLOps Pipelines</li>
              </ul>
            </div>

            {/* Systems */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Systems & Hardware</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>Embedded Systems</li>
                <li>Real-time Processing</li>
                <li>GPU Optimization</li>
                <li>Hardware Acceleration</li>
              </ul>
            </div>

            {/* Research */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Research Skills</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>Experimental Design</li>
                <li>Statistical Analysis</li>
                <li>Technical Writing</li>
                <li>Patent Development</li>
                <li>Conference Presentations</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="section-sm bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">
            Research Philosophy
          </h2>
          
          <div className="prose prose-lg max-w-none text-center">
            <blockquote className="text-xl italic border-l-4 border-accent pl-6 my-8">
              &quot;The best research doesn&apos;t just advance our understanding-it creates 
              tangible value that improves people&apos;s lives and solves real problems.&quot;
            </blockquote>
            
            <p className="text-lg leading-relaxed">
              I believe in interdisciplinary research that brings together insights from 
              multiple fields. My experience spans from low-level embedded systems to 
              high-level AI algorithms, giving me a unique perspective on the full stack 
              of technology development.
            </p>
            
            <p className="text-lg leading-relaxed">
              I&apos;m particularly passionate about making AI more efficient and accessible. 
              This means developing algorithms that can run on resource-constrained devices, 
              creating tools that democratize AI development, and ensuring that the benefits 
              of artificial intelligence reach everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-sm bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">
            Let&apos;s Collaborate
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new research opportunities, 
            collaborative projects, and innovative applications of AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/cv" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}