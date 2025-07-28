"use client";

import { useState, useMemo } from "react";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Your publications data array
  const publications = [
    {
      id: 1,
      title: "Efficient last-mile link adaptation in next-gen wireless heterogeneous networks",
      authors: ["Shubham Sahoo", "Preeti S. Pati", "Raja Datta"],
      venue: "14th International Conference on Communication Systems and Networks (COMSNETS)",
      year: 2022,
      type: "Conference",
      pages: "31-36",
      doi: "10.1109/COMSNETS53615.2022.9668503",
      pdf: "#",
      citations: 1,
      abstract: "This paper presents a novel approach to link adaptation in heterogeneous wireless networks, focusing on optimizing the last-mile connectivity through intelligent resource allocation and dynamic protocol adaptation.",
      tags: ["Wireless Networks", "5G", "Link Adaptation", "Heterogeneous Networks"],
      status: "Published"
    },
    {
      id: 2,
      title: "A prototype of an intelligent ground vehicle for constrained environment: Design and development",
      authors: ["Shubham Sahoo", "Debashish Chakravarty", "et. al"],
      venue: "International Conference on Computer, Communication and Robotic Technology (ICCRT)",
      year: 2019,
      type: "Conference",
      pages: "103-107",
      doi: "10.1145/3387304",
      pdf: "#",
      citations: 2,
      abstract: "This work presents the design and development of an intelligent ground vehicle prototype capable of operating in constrained environments using advanced sensor fusion and machine learning algorithms.",
      tags: ["Robotics", "Autonomous Vehicles", "Sensor Fusion", "Machine Learning"],
      status: "Published"
    },
    {
      id: 3,
      title: "A novel machine learning approach for link adaptation in 5g wireless networks",
      authors: ["Shubham Sahoo", "Preeti S. Pati", "Raja Datta"],
      venue: "2020 2nd PhD Colloquium on Ethically Driven Innovation and Technology for Society (PhD EDITS)",
      year: 2020,
      type: "Conference",
      pages: "1-2",
      doi: "10.1109/PhDEDITS51180.2020.9315299",
      pdf: "#",
      citations: 6,
      abstract: "This study presents a Deep Neural Network-based Link Adaptation scheme for 5G NR Sub-6GHz networks that optimizes spectral efficiency by selecting the best Modulation and Coding Scheme.",
      tags: ["Wireless Networks", "5G", "Machine Learning", "Heterogeneous Networks"],
      status: "Published"
    },
  ];

  // Filtering logic
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch = searchTerm === "" || 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
      const matchesType = selectedType === "all" || pub.type === selectedType;
      
      return matchesSearch && matchesYear && matchesType;
    });
  }, [searchTerm, selectedYear, selectedType]);

  // Unique years and types for filters
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  const types = [...new Set(publications.map(pub => pub.type))];

  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);
  const hIndex = calculateHIndex(publications);

  interface Publication {
    citations: number;
  }

  function calculateHIndex(pubs: Publication[]): number {
    const sortedCitations = pubs
      .map((p) => p.citations)
      .sort((a, b) => b - a);

    let h = 0;
    for (let i = 0; i < sortedCitations.length; i++) {
      if (sortedCitations[i] >= i + 1) {
        h = i + 1;
      } else {
        break;
      }
    }
    return h;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Publications
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              Research contributions spanning deep learning, computer vision, autonomous systems, 
              and wireless communications, published in top-tier venues.
            </p>

            {/* Publication Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary">{publications.length}</div>
                <div className="text-sm text-secondary mt-1">Publications</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary">{totalCitations}</div>
                <div className="text-sm text-secondary mt-1">Total Citations</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary">{hIndex}</div>
                <div className="text-sm text-secondary mt-1">h-index</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary">
                  {publications.filter(p => p.year >= 2023).length}
                </div>
                <div className="text-sm text-secondary mt-1">Recent (2023+)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96">
              <input
                type="text"
                placeholder="Search publications, authors, venues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            {/* External Links */}
            <div className="flex gap-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors text-sm"
              >
                Google Scholar
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
              >
                ORCID
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="section">
        <div className="container">
          <div className="mb-6">
            <p className="text-secondary">
              Showing {filteredPublications.length} of {publications.length} publications
            </p>
          </div>
          <div className="space-y-8">
            {filteredPublications.map((pub) => (
              <div key={pub.id} className="card hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-primary mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-secondary mb-2">
                      {pub.authors.map((author, index) => (
                        <span key={index}>
                          <span className={author === "Shubham Sahoo" ? "font-semibold" : ""}>
                            {author}
                          </span>
                          {index < pub.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pub.status === "Published" 
                        ? "bg-green-100 text-green-800"
                        : pub.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {pub.status}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs text-secondary">
                      {pub.type}
                    </span>
                  </div>
                </div>
                {/* Venue and Details */}
                <div className="mb-4">
                  <p className="font-medium text-secondary italic mb-1">{pub.venue}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                    <span>{pub.year}</span>
                    {pub.pages !== "Under Review" && <span>Pages: {pub.pages}</span>}
                    {pub.citations > 0 && <span>Citations: {pub.citations}</span>}
                    {pub.doi !== "TBD" && (
                      <a href={`https://doi.org/${pub.doi}`} className="text-accent hover:text-primary">
                        DOI: {pub.doi}
                      </a>
                    )}
                  </div>
                </div>
                {/* Abstract */}
                <div className="mb-4">
                  <p className="text-secondary leading-relaxed">{pub.abstract}</p>
                </div>
                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 px-2 py-1 rounded text-xs text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  <a
                    href={pub.pdf}
                    className="px-4 py-2 bg-accent text-white rounded hover:bg-primary transition-colors text-sm"
                  >
                    📄 PDF
                  </a>
                  <button className="px-4 py-2 bg-gray-100 text-secondary rounded hover:bg-gray-200 transition-colors text-sm">
                    📋 BibTeX
                  </button>
                  {pub.citations > 0 && (
                    <button className="px-4 py-2 bg-gray-100 text-secondary rounded hover:bg-gray-200 transition-colors text-sm">
                      📊 Citations ({pub.citations})
                    </button>
                  )}
                  <button className="px-4 py-2 bg-gray-100 text-secondary rounded hover:bg-gray-200 transition-colors text-sm">
                    🔗 Share
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* No Results */}
          {filteredPublications.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">No publications found</h3>
              <p className="text-secondary">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Research Impact and Recognition */}
      {/* ...other sections as per your original code can go here... */}
    </div>
  );
}
