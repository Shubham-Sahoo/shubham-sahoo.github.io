"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Octokit } from "@octokit/rest";
import { components } from "@octokit/openapi-types";

type GitHubRepo = components["schemas"]["full-repository"];

// ——— typing helpers ———
interface RepoEvent {
  type: string | null;
  repo: { name: string };
}

interface Repository {
  id: number;
  name: string;
  description: string | null;
  pushed_at: string;
  stargazers_count: number;
  html_url: string;
  owner: { login: string };
}

const transform = (r: GitHubRepo): Repository => ({
  id: r.id,
  name: r.name,
  description: r.description ?? null,
  pushed_at: r.pushed_at ?? new Date().toISOString(),
  stargazers_count: r.stargazers_count ?? 0,
  html_url: r.html_url ?? "", // Fix for optional html_url
  owner: { login: r.owner.login }
});


// ——— component ———
export default function OpenSource() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [searchQuery, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 9;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const octokit = new Octokit();

    async function fetchAllEvents(user: string): Promise<RepoEvent[]> {
      const events: RepoEvent[] = [];
      let pg = 1;
      let more = true;
      while (more) {
        const res = await octokit.rest.activity.listPublicEventsForUser({
          username: user,
          per_page: 100,
          page: pg,
        });
        events.push(...res.data);
        more = res.data.length === 100;
        pg++;
      }
      return events;
    }

    async function gather() {
      try {
        setLoading(true);

        const own = await octokit.rest.repos.listForUser({
          username: "Shubham-Sahoo",
          per_page: 100,
        });
        const ownRepos: Repository[] = (own.data as GitHubRepo[])
                                        .map(transform)
                                        .slice(0, 20);

        const events = await fetchAllEvents("Shubham-Sahoo");
        const contribDetails = await Promise.all(
          events
            .filter((e) =>
              ["PushEvent", "PullRequestEvent", "PullRequestReviewCommentEvent"].includes(e.type || "")
            )
            .map(async (e) => {
              const [owner, repo] = (e.repo?.name || "").split("/");
              if (!owner || !repo) return null;
              const { data } = await octokit.rest.repos.get({ owner, repo });
              return data;
            })
        );

       const contribRepos = contribDetails
                            .filter((r): r is GitHubRepo => !!r)
                            .map(transform);

        const map = new Map<string, Repository>();
        [...ownRepos, ...contribRepos].forEach((r) => {
          if (!map.has(r.name) || map.get(r.name)!.stargazers_count < r.stargazers_count) {
            map.set(r.name, r);
          }
        });

        const all = Array.from(map.values()).sort(
          (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );

        setRepos(all);
      } catch (err) {
        console.error("Error fetching repos", err);
      } finally {
        setLoading(false);
      }
    }

    gather();
  }, []);

  const filtered = repos.filter((r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const view = filtered.slice((page - 1) * perPage, page * perPage);
  const total = Math.ceil(filtered.length / perPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-6">
      <Head>
        <title>Shubham Sahoo – Open-Source</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Shubham Sahoo</h1>
          <p className="text-xl text-gray-300">
            AI Researcher | Open Source Enthusiast | Deep Learning Engineer
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <input
            className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full max-w-md border border-gray-700 focus:border-blue-500 focus:outline-none"
            placeholder="Search repositories…"
            value={searchQuery}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Recent GitHub Repositories
          </h2>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {view.map((r) => (
                  <div
                    key={r.id}
                    className="bg-gray-700 bg-opacity-50 rounded-lg p-6 hover:bg-opacity-70 transition-all"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{r.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {r.description || "No description provided."}
                    </p>
                    <div className="text-sm text-gray-400 mb-4">
                      Last updated: {new Date(r.pushed_at).toLocaleDateString()}
                    </div>
                    <a
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                      href={r.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-2">
                {Array.from({ length: total }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 rounded ${
                      page === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <footer className="mt-12 text-center text-gray-400">
          <p>© 2025 Shubham Sahoo. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
