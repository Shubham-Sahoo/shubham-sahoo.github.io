"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/")}
        >
          Shubham Sahoo
        </h1>
        <ul className="flex space-x-6">
          <li
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/open-source-contributions")}
          >
            Open Source Contributions
          </li>
          <li
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/publications")}
          >
            Publications
          </li>
          <li
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
