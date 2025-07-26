"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const navigate = (path: string) => router.push(path);

  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-xl font-bold text-white">Shubham Sahoo</h1>
          </div>

          {/* Desktop links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Publications", "/publications"],
                ["Open Source", "/open-source-contributions"],
                ["Contact", "/contact"]
              ].map(([label, href]) => (
                <button
                  key={href}
                  onClick={() => navigate(href)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
