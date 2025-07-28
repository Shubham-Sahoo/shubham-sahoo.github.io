"use client";

import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FitDit Vision Transformer Implementation",
      category: "Research",
      status: "Completed",
      timeline: "2024-2025",
      description: "Novel approach to convert flat-lay to model images with FitDiT architecture, refined apparel masks to improve garment alignment and realism, attention mechanism improvements, and training strategies.",
      technologies: ["PyTorch", "Transformers", "CUDA", "TensorBoard", "Weights & Biases"],
      objectives: [
        "Increased apparel context by change in masking",
        "Updated loss function to use DFT loss for better convergence and fidelity"
      ],
      impact: {
        metric: "Quality Gain",
        value: "Better texture",
      },
      links: {
      },
      image: "/placeholder-project-6.jpg",
      collaborators: ["NeuroPixel.AI Research"]
    },
    {
      id: 2,
      title: "Real-time Segmentation Pipeline",
      category: "Applied AI",
      status: "Production",
      timeline: "2024 - Present",
      description: "Production-grade object segmentation system optimized for real-time performance in apparel segmentation application, featuring TensorRT conversion and efficient post-processing.",
      technologies: ["Segment Anything Model (Meta AI)", "TensorRT", "CUDA", "Docker", "Kubernetes", "FastAPI"],
      objectives: [
        "Process 0.5 FPS on standard CPUs",
        "Deploy scalable inference services",
        "Implement model versioning and A/B testing"
      ],
      impact: {
        metric: "Processing Speed",
        value: "0.5 FPS average",
      },
      links: {
      },
      image: "/placeholder-project-3.jpg",
      collaborators: ["NeuroPixel.AI"]
    },
    {
      id: 3,
      title: "Active Perception using Light Curtains",
      category: "Research",
      status: "Collaboration",
      timeline: "2023",
      description: "Collaborative research with CMU RPAD Labs on developing novel perception systems for autonomous vehicles using light curtain sensors for efficient obstacle detection and navigation.",
      technologies: ["Python", "OpenCV", "Light Curtain Sensors", "C++", "Graph Neural Networks"],
      objectives: [
        "Develop real-time light curtain processing algorithms",
        "Implement adaptive sensing strategies",
        "Create 3D environment reconstruction methods",
        "Validate on autonomous vehicle platforms"
      ],
      impact: {
        metric: "Detection Accuracy",
        value: "95% precision",
      },
      links: {
        github: "https://github.com/Shubham-Sahoo/ObjectDetection?tab=readme-ov-file",
        paper: "https://siddancha.github.io/projects/active-perception-light-curtains/",
        video: "https://www.youtube.com/watch?v=WSb5T3HFE7w"
      },
      image: "https://github.com/Shubham-Sahoo/ObjectDetection/blob/master/images/thumbnail.gif",
      collaborators: ["CMU RPAD Labs", "Siddharth Ancha", "Prof. David Held"]
    },
    {
      id: 4,
      title: "MLOps Platform for Model Deployment",
      category: "Infrastructure",
      status: "Active",
      timeline: "2024 - Present",
      description: "Comprehensive MLOps platform enabling seamless model development, validation, and deployment with automated CI/CD pipelines and monitoring capabilities.",
      technologies: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Loki", "GPU-slicing"],
      objectives: [
        "Implement comprehensive model monitoring",
        "Enable A/B testing for model deployments",
        "Create reusable deployment templates"
      ],
      impact: {
        metric: "Inference Speed",
        value: "75% faster",
      },
      links: {
      },
      image: "/placeholder-project-5.jpg",
      collaborators: ["NeuroPixel.AI", "DevOps Team"]
    },
    {
      id: 5,
      title: "Intelligent Ground Vehicle Prototype",
      category: "Robotics",
      status: "Completed",
      timeline: "2019",
      description: "Design and development of an autonomous ground vehicle capable of navigation in constrained environments using sensor fusion, path planning, and lane detection algorithms.",
      technologies: ["ROS", "Gazebo", "OpenCV", "Python", "Arduino", "Sensors"],
      objectives: [
        "Implement autonomous navigation in GPS-denied environments",
        "Develop robust obstacle avoidance algorithms",
        "Create sensor fusion for localization",
        "Build modular hardware platform"
      ],
      impact: {
        metric: "Navigation Accuracy",
        value: "Published in ICCRT 2019",
      },
      links: {
        paper: "https://dl.acm.org/doi/abs/10.1145/3387304.3387321",
      },
      image: "/placeholder-project-4.jpg",
      collaborators: ["Autonomous Ground Vehicle Research Group, IIT Kharagpur"]
    }
  ];

  const categories = ["all", "Research", "Applied AI", "Robotics", "Infrastructure"];
  const statuses = ["all", "Active", "Completed", "Collaboration", "Production", "Under Review"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  type Status =
  | "Active"
  | "Completed"
  | "Collaboration"
  | "Production"
  | "Under Review";

  const getStatusColor = (status: Status | string): string => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      case "Collaboration":
        return "bg-purple-100 text-purple-800";
      case "Production":
        return "bg-orange-100 text-orange-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Projects
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              A portfolio of research projects, applied AI solutions, and technical innovations 
              spanning computer vision, robotics, and machine learning systems.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">{projects.length}</div>
              <div className="text-sm text-secondary">Total Projects</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {projects.filter(p => p.status === "Active").length}
              </div>
              <div className="text-sm text-secondary">Active Projects</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {projects.filter(p => p.status === "Production").length}
              </div>
              <div className="text-sm text-secondary">In Production</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {projects.filter(p => p.category === "Research").length}
              </div>
              <div className="text-sm text-secondary">Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Contributions */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">
            Open Source Contributions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Neural Compression Toolkit</h3>
              <p className="text-secondary mb-4 text-sm">
                Open-source library for neural network compression with PyTorch integration.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">⭐ 234 stars</span>
                <a href="#" className="text-accent text-sm hover:text-primary">View on GitHub →</a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Edge AI Deployment Tools</h3>
              <p className="text-secondary mb-4 text-sm">
                Utilities and scripts for deploying AI models on edge devices and embedded systems.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">⭐ 156 stars</span>
                <a href="#" className="text-accent text-sm hover:text-primary">View on GitHub →</a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Computer Vision Benchmarks</h3>
              <p className="text-secondary mb-4 text-sm">
                Standardized benchmarks and evaluation metrics for computer vision models.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">⭐ 89 stars</span>
                <a href="#" className="text-accent text-sm hover:text-primary">View on GitHub →</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/open-source-contributions" 
              className="btn btn-primary"
            >
              View All Contributions
            </a>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-secondary mr-2">Category:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-white text-secondary border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {category === "all" ? "All Categories" : category}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-secondary mr-2">Status:</span>
              {statuses.map(status => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedStatus === status
                      ? 'bg-primary text-white'
                      : 'bg-white text-secondary border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {status === "all" ? "All Status" : status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      
      <section className="section">
        <div className="container">
          <div className="mb-6">
            <p className="text-secondary">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card hover:shadow-xl transition-all duration-300">
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-serif font-semibold text-primary">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-secondary">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-4xl mb-2">
                      {project.category === "Research" ? "🔬" : 
                       project.category === "Applied AI" ? "🤖" :
                       project.category === "Robotics" ? "🚗" : "⚙️"}
                    </div>
                    <div className="text-sm">Project Screenshot</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 px-2 py-1 rounded text-xs text-secondary"
                      >
                        {tech},
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Objectives */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3">Key Objectives</h4>
                  <ul className="space-y-1">
                    {project.objectives.slice(0, 3).map((objective, index) => (
                      <li key={index} className="text-sm text-secondary flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Project Impact</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-accent">{project.impact.value}</div>
                      <div className="text-xs text-secondary">{project.impact.metric}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-secondary">{project.impact.additional}</div>
                    </div>
                  </div>
                </div>

                {/* Collaborators */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2">Collaborators</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.collaborators.map((collab, index) => (
                      <span 
                        key={index}
                        className="text-xs text-secondary bg-blue-50 px-2 py-1 rounded"
                      >
                        {collab},
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="px-4 py-2 bg-primary text-white rounded hover:bg-accent transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👨‍💻 Code
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      className="px-4 py-2 bg-gray-100 text-secondary rounded hover:bg-gray-200 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📄 Paper
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="px-4 py-2 bg-gray-100 text-secondary rounded hover:bg-gray-200 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🎬 Demo
                    </a>
                  )}
                  {project.links.video && (
                    <a
                      href={project.links.video}
                      className="px-4 py-2 bg-gray-100 text-secondary rounded hover:bg-gray-200 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📹 Video
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      className="px-4 py-2 bg-gray-100 text-secondary rounded hover:bg-gray-200 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📚 Docs
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-secondary">
                Try adjusting your filter criteria to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">
            Interested in Collaborating?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I&apos;m always excited to work on innovative projects that push the boundaries 
            of AI and create real-world impact. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a Project
            </a>
            <a 
              href="/research" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Explore Research
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}