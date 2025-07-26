"use client";

import { useState } from "react";

export default function Research() {
  const [activeTab, setActiveTab] = useState("overview");

  const researchAreas = [
    {
      id: "computer-vision",
      title: "Computer Vision & Perception",
      description: "Developing advanced algorithms for image and video understanding, with applications in autonomous systems and robotics.",
      keywords: ["Object Detection", "Scene Understanding", "Image Segmentation", "Video Analysis"],
      projects: [
        "Real-time object detection for autonomous vehicles",
        "Multi-modal perception systems using camera and LiDAR",
        "Efficient vision transformers for edge deployment"
      ],
      publications: 3
    },
    {
      id: "model-optimization",
      title: "Neural Network Optimization",
      description: "Research on model compression, quantization, and efficient architectures for deployment on resource-constrained devices.",
      keywords: ["Model Compression", "Quantization", "Pruning", "Knowledge Distillation"],
      projects: [
        "Hardware-aware neural architecture search",
        "Dynamic quantization for real-time inference",
        "Efficient transformer architectures for mobile devices"
      ],
      publications: 2
    },
    {
      id: "transfer-learning",
      title: "Transfer Learning & Domain Adaptation",
      description: "Investigating methods to transfer knowledge across domains and tasks, enabling rapid adaptation to new applications.",
      keywords: ["Domain Adaptation", "Few-shot Learning", "Meta-learning", "Cross-domain Transfer"],
      projects: [
        "Cross-domain object detection for surveillance systems",
        "Few-shot learning for medical image analysis",
        "Meta-learning algorithms for rapid deployment"
      ],
      publications: 4
    },
    {
      id: "autonomous-systems",
      title: "Autonomous Systems & Robotics",
      description: "AI for autonomous decision-making, including perception, planning, and control for robotic systems.",
      keywords: ["Autonomous Navigation", "Path Planning", "Robot Control", "SLAM"],
      projects: [
        "Active perception using light curtains (CMU collaboration)",
        "Intelligent ground vehicle prototype development",
        "Multi-agent coordination algorithms"
      ],
      publications: 5
    }
  ];

  const methodologies = [
    {
      category: "Deep Learning",
      techniques: [
        "Convolutional Neural Networks (CNNs)",
        "Vision Transformers (ViTs)",
        "Recurrent Neural Networks (RNNs)",
        "Generative Adversarial Networks (GANs)",
        "Attention Mechanisms",
        "Self-supervised Learning"
      ]
    },
    {
      category: "Optimization",
      techniques: [
        "Gradient-based Optimization",
        "Neural Architecture Search (NAS)",
        "Hyperparameter Optimization",
        "Multi-objective Optimization",
        "Evolutionary Algorithms",
        "Bayesian Optimization"
      ]
    },
    {
      category: "Systems",
      techniques: [
        "Real-time Processing Pipelines",
        "Edge Computing Frameworks",
        "Distributed Training Systems",
        "Hardware Acceleration (GPU/TPU)",
        "Model Serving Architectures",
        "MLOps and CI/CD Pipelines"
      ]
    },
    {
      category: "Experimental",
      techniques: [
        "A/B Testing for ML Models",
        "Statistical Significance Testing",
        "Cross-validation Strategies",
        "Benchmark Dataset Development",
        "Performance Profiling",
        "Ablation Studies"
      ]
    }
  ];

  const collaborations = [
    {
      institution: "Carnegie Mellon University",
      lab: "RPAD Labs",
      project: "Active Perception using Light Curtains",
      duration: "2023",
      description: "Collaborative research on advanced perception systems for autonomous driving, focusing on novel sensing modalities and real-time processing algorithms."
    },
    {
      institution: "NeuroPixel.AI",
      lab: "Research Team",
      project: "Production ML Systems",
      duration: "2024 - Present",
      description: "Leading research initiatives on deploying deep learning models in production environments, with focus on efficiency and reliability."
    },
    {
      institution: "Industry Partners",
      lab: "Joint R&D",
      project: "Edge AI Solutions",
      duration: "2023 - Present",
      description: "Collaborative development of AI solutions for edge computing applications, including optimization for specific hardware platforms."
    }
  ];

  const tabs = [
    { id: "overview", label: "Research Overview" },
    { id: "areas", label: "Research Areas" },
    { id: "methodology", label: "Methodologies" },
    { id: "collaborations", label: "Collaborations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Research
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Advancing the frontiers of artificial intelligence through interdisciplinary 
              research that bridges theory and practical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
        <div className="container">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-secondary hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="section">
        <div className="container">
          
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-16">
              
              {/* Research Vision */}
              <div className="container-narrow">
                <h2 className="text-3xl font-serif font-semibold mb-8">Research Vision</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    My research is driven by the vision of making artificial intelligence more 
                    efficient, accessible, and applicable to real-world problems. I focus on the 
                    intersection of theoretical advances and practical implementation, with particular 
                    emphasis on systems that can operate effectively in resource-constrained environments.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    The core of my work lies in understanding the fundamental trade-offs between 
                    model complexity, computational efficiency, and performance. This understanding 
                    enables the development of AI systems that are not only powerful but also 
                    deployable in real-world scenarios.
                  </p>
                </div>
              </div>

              {/* Research Impact */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Research Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm font-medium text-secondary">Publications & Patents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">5</div>
                    <div className="text-sm font-medium text-secondary">Active Research Areas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">3</div>
                    <div className="text-sm font-medium text-secondary">Industry Collaborations</div>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="container-narrow">
                <h2 className="text-3xl font-serif font-semibold mb-8">Current Research Focus</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-semibold mb-4">Efficient AI Systems</h3>
                    <p className="text-secondary mb-4">
                      Developing neural network architectures and optimization techniques that 
                      enable deployment on edge devices without sacrificing performance.
                    </p>
                    <div className="text-sm text-accent">Active Projects: 3</div>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-semibold mb-4">Computer Vision Applications</h3>
                    <p className="text-secondary mb-4">
                      Advancing perception systems for autonomous applications, with focus on 
                      real-time processing and robust performance in challenging conditions.
                    </p>
                    <div className="text-sm text-accent">Active Projects: 2</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Research Areas Tab */}
          {activeTab === "areas" && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-semibold mb-4">Research Areas</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">
                  My research spans multiple domains within artificial intelligence, 
                  with each area contributing to the overarching goal of practical AI deployment.
                </p>
              </div>
              
              {researchAreas.map((area, index) => (
                <div key={area.id} className="card">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary">
                      {area.title}
                    </h3>
                    <div className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                      {area.publications} Publications
                    </div>
                  </div>
                  
                  <p className="text-lg text-secondary mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Key Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.keywords.map((keyword) => (
                          <span 
                            key={keyword}
                            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-secondary"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Current Projects</h4>
                      <ul className="space-y-2">
                        {area.projects.map((project, projIndex) => (
                          <li key={projIndex} className="text-sm text-secondary flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Methodologies Tab */}
          {activeTab === "methodology" && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-semibold mb-4">Research Methodologies</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">
                  A comprehensive toolkit of techniques and approaches that enable rigorous 
                  investigation and robust experimental validation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {methodologies.map((methodology, index) => (
                  <div key={index} className="card">
                    <h3 className="text-xl font-semibold mb-6 text-primary">
                      {methodology.category}
                    </h3>
                    <div className="space-y-3">
                      {methodology.techniques.map((technique, techIndex) => (
                        <div 
                          key={techIndex}
                          className="flex items-center text-secondary hover:text-primary transition-colors"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{technique}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
                  Research Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Problem Definition", desc: "Identify real-world challenges" },
                    { step: "2", title: "Literature Review", desc: "Analyze existing solutions" },
                    { step: "3", title: "Experimentation", desc: "Develop and test hypotheses" },
                    { step: "4", title: "Validation", desc: "Evaluate on real applications" }
                  ].map((phase, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                        {phase.step}
                      </div>
                      <h4 className="font-semibold mb-2">{phase.title}</h4>
                      <p className="text-sm text-secondary">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Collaborations Tab */}
          {activeTab === "collaborations" && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-semibold mb-4">Research Collaborations</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">
                  Collaborative research partnerships that leverage diverse expertise 
                  and resources to tackle complex challenges in AI and machine learning.
                </p>
              </div>
              
              <div className="space-y-8">
                {collaborations.map((collab, index) => (
                  <div key={index} className="card">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="lg:w-64 flex-shrink-0">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {collab.institution}
                        </h3>
                        <p className="text-secondary font-medium mb-2">{collab.lab}</p>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-secondary inline-block">
                          {collab.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-3">{collab.project}</h4>
                        <p className="text-secondary leading-relaxed">{collab.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Interested in Collaboration?
                </h3>
                <p className="mb-6 opacity-90">
                  I'm always open to discussing new research opportunities and partnerships.
                </p>
                <a 
                  href="/contact" 
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}