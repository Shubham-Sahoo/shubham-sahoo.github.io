"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Octokit } from "@octokit/rest";

// Define types for GitHub event data
interface RepoEvent {
  type: string | null; // Ensure this is always a string
  repo: {
    name: string;
  };
}

interface ApiResponse {
  id: number;
  name: string;
  description?: string | null;
  pushed_at?: string | null; // Mark as optional
  stargazers_count?: number | null; // Mark as optional
  html_url: string;
  owner: {
    login: string;
  };
}
interface Repo {
  id: number;
  name: string;
  description: string | null;
  pushed_at: string;
  stargazers_count: number;
  html_url: string;
}

interface Repository {
  id: number;
  name: string;
  description: string | null;
  pushed_at: string | null | undefined; // Ensure this is always a string
  stargazers_count: number;
  html_url: string;
  owner: {
    login: string;
  };
}

const transformToRepository = (repo: ApiResponse): Repository => {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description ?? null,
    pushed_at: repo.pushed_at ?? new Date().toISOString(), // Default to current timestamp if undefined
    stargazers_count: repo.stargazers_count ?? 0, // Default to 0 if undefined
    html_url: repo.html_url,
    owner: {
      login: repo.owner.login,
    },
  };
};

const isApiResponse = (repo: unknown): repo is ApiResponse => {
  if (typeof repo !== 'object' || repo === null) {
    return false;
  }

  const r = repo as Partial<ApiResponse>;
  return (
    typeof r.id === 'number' &&
    typeof r.name === 'string' &&
    (r.description === undefined || r.description === null || typeof r.description === 'string') &&
    (r.pushed_at === undefined || r.pushed_at === null || typeof r.pushed_at === 'string') &&
    (r.stargazers_count === undefined || r.stargazers_count === null || typeof r.stargazers_count === 'number') &&
    typeof r.html_url === 'string' &&
    typeof r.owner?.login === 'string'
  );
};

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(9); // Number of repos to show per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const octokit = new Octokit();

    async function fetchAllContributions(username: string): Promise<RepoEvent[]> {
      const perPage = 100; // Maximum number of events per page
      let page = 1;
      let morePages = true;
      const allEvents: RepoEvent[] = [];

      // Fetch all public events for the user with pagination
      while (morePages) {
        const response = await octokit.rest.activity.listPublicEventsForUser({
          username,
          per_page: perPage,
          page,
        });

        allEvents.push(...response.data);

        // Stop if the number of returned events is less than the perPage limit
        if (response.data.length < perPage) {
          morePages = false;
        } else {
          page++;
        }
      }

      return allEvents;
    }

    async function fetchRepos() {
      try {
        // Fetch repositories owned by the user
        setLoading(true);
        const userRepos = await octokit.rest.repos.listForUser({
          username: 'Shubham-Sahoo',
          per_page: 100,
        });

        // const transformedRepos = userRepos.data.map((repo: ApiResponse) => transformToRepository(repo));
        // setRepos(transformedRepos);

        const transformedRepos = userRepos.data
        .filter(isApiResponse)
        .map((repo) => transformToRepository(repo));

        // Fetch all public events to get contribution repositories
        const allEvents = await fetchAllContributions('Shubham-Sahoo');

        // Filter events for push and pull request contributions
        const contribReposDetails = await Promise.all(
          allEvents
            .filter((event) => {
              const validTypes = ['PushEvent', 'PullRequestEvent', 'PullRequestReviewCommentEvent'];
              return event.repo?.name && validTypes.includes(event.type || ''); // Ensure event.repo exists and type is valid
            })
            .map(async (event) => {
              try {
                if (!event.repo || !event.repo.name) return null; // Skip if repo or repo.name is null or undefined
                const repoName = event.repo.name || ""; // Fallback to an empty string if repo.name is null or undefined
                const [owner, repo] = repoName.split("/");

                if (!owner || !repo) return null; // Skip if the repo name is malformed
                const repoDetails = await octokit.rest.repos.get({
                  owner,
                  repo,
                });
                return repoDetails.data;
              } catch (error) {
                if (error instanceof Error) {
                  console.error(`Failed to fetch details for ${event.repo?.name || 'unknown repo'}:`, error.message);
                } else {
                  console.error('Unknown error occurred while fetching repo details.');
                }
                return null; // Skip on error
              }
            })
        );

        const validContribRepos = contribReposDetails.filter(Boolean) as Repository[]; // Type assertion here to specify it's an array of Repository objects
        console.log("Contributed Repositories: ", validContribRepos);

        // Combine user's repos with contributed repos
        const allRepos = [...transformedRepos.slice(0, 20), ...validContribRepos];

        // Remove duplicates based on the repository name and prefer the one with more stars
        const repoMap = new Map();
        allRepos.forEach((repo: Repository) => {
          const stargazersCount = repo.stargazers_count ?? 0; // Use 0 if undefined
          if (!repoMap.has(repo.name) || repoMap.get(repo.name).stargazers_count < stargazersCount) {
            repoMap.set(repo.name, repo);
          }
        });

        // Convert the map back to an array of repos
        const uniqueRepos = Array.from(repoMap.values());

        // Sort repositories by the latest pushed date
        const sortedRepos = uniqueRepos.sort(
          (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );

        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
      finally {
        setLoading(false);
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
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
            ) : (
          <>
            {/* Repository Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <h3 className="text-xl font-semibold text-teal-500">{repo.name}</h3>
                  <p className="text-sm mt-2 text-gray-400">{repo.description || "No description provided."}</p>
                  <p className="text-xs mt-2 text-gray-500">
                    Last updated: {new Date(repo.pushed_at).toLocaleDateString()}
                  </p>
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
                        className={`px-4 py-2 border rounded-lg ${
                          currentPage === index + 1
                            ? "bg-teal-500 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
          )}
        
        </section>
      </main>

      <footer className="text-center mt-16 py-6 border-t border-gray-700">
        <p className="text-gray-400">© {new Date().getFullYear()} Shubham Sahoo. All rights reserved.</p>
      </footer>
    </div>
  );
}
