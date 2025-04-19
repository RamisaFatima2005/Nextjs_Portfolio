import React from "react";
import Link from "next/link";

const ProjectsMainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <Link href="/nextjs_projects">
          <div className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold">Next.js Projects</h2>
          </div>
        </Link>
        <Link href="/python_projects">
          <div className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold">Python Projects</h2>
          </div>
        </Link>
        <Link href="/cli_projects">
          <div className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold">CLI Projects</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsMainPage;
