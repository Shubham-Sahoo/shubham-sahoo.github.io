"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Octokit } from "@octokit/rest";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  pushed_at: string;
  stargazers_count: number;
  html_url: string;
}

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(9); // Number of repos to show per page

  useEffect(() => {
    const octokit = new Octokit();

    async function fetchRepos() {
      try {
        // Fetch your repositories
        const userRepos = await octokit.rest.repos.listForUser({
          username: 'Shubham-Sahoo',
        });

        // Fetch public events (push and PR events)
        const contributedReposData = await octokit.rest.activity.listPublicEventsForUser({
          username: 'Shubham-Sahoo',
        });

        // Filter events for push and pull request contributions
        const contribReposDetails = await Promise.all(
          contributedReposData.data
            .filter((event) => {
              const isPushEvent = event.type === 'PushEvent';
              const isPullRequestEvent = event.type === 'PullRequestEvent';
              return isPushEvent || isPullRequestEvent;
            })
            .map(async (event) => {
              const repoDetails = await octokit.rest.repos.get({
                owner: event.repo.name.split('/')[0],
                repo: event.repo.name.split('/')[1],
              });
              return repoDetails.data;
            })
        );

        // Combine your repos with the contributed repos
        const allRepos = [...userRepos.data, ...contribReposDetails];

        // Remove duplicates based on the repository name and prefer the one with more stars
        const repoMap = new Map();
        allRepos.forEach((repo) => {
          if (!repoMap.has(repo.name) || repoMap.get(repo.name).stargazers_count < (repo.stargazers_count??0)) {
            repoMap.set(repo.name, repo);
          }
        });

        // Convert the map back to an array of repos
        const uniqueRepos = Array.from(repoMap.values());

        // Sort repositories by the latest pushed date
        const sortedRepos = uniqueRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    }

    fetchRepos();
  }, []);

  // Handle search query
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Shubham Sahoo - AI Research Portfolio</title>
        <meta name="description" content="A personal portfolio showcasing my GitHub repositories and AI research." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-8">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-teal-400 to-blue-600">Shubham Sahoo</h1>
          <p className="text-lg mt-2 text-gray-300">AI Researcher | Open Source Enthusiast | Software Engineer</p>
          <p className="mt-2 text-gray-400">Exploring the boundaries of Artificial Intelligence and Machine Learning</p>
        </header>

        <section className="mt-12">
          <div className="mb-8 text-center">
            <input
              type="text"
              placeholder="Search repositories..."
              className="p-2 border border-gray-500 rounded-md w-full max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <h2 className="text-3xl font-semibold text-center mb-8">Recent GitHub Repositories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentRepos.map((repo) => (
              <div
                key={repo.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold text-teal-500">{repo.name}</h3>
                <p className="text-sm mt-2 text-gray-400">{repo.description || 'No description provided.'}</p>
                <p className="text-xs mt-2 text-gray-500">Last updated: {new Date(repo.pushed_at).toLocaleDateString()}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-teal-400 hover:text-teal-500 font-medium"
                >
                  View Repository
                </a>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <nav>
              <ul className="flex space-x-4">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index + 1}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <footer className="text-center mt-16 py-6 border-t border-gray-700">
        <p className="text-gray-400">© {new Date().getFullYear()} Shubham Sahoo. All rights reserved.</p>
      </footer>
    </div>
  );
}
