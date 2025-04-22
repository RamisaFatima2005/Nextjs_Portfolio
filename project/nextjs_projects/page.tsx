import React from "react";
import Link from "next/link";

const projects = [
  {
    name: "Sanity Blog",
    url: "https://sanity-blog-lovat-gamma.vercel.app",
    description: "A blog website powered by Sanity CMS and Next.js."
  },
  {
    name: "Next.js Blog Website",
    url: "https://blog-website-eight-fawn.vercel.app",
    description: "A feature-rich blog website built with Next.js."
  },
  {
    name: "Nike E-commerce Website",
    url: "https://e-commerce-website-nike.vercel.app",
    description: "A stylish e-commerce website showcasing Nike products."
  },
  {
    name: "API Routes Demo",
    url: "https://class-11-api-route.vercel.app",
    description: "A Next.js project demonstrating API Routes functionality."
  },
  {
    name: "Books API",
    url: "https://class-10-assignment-books-api-nxiw.vercel.app",
    description: "A book management API created with Next.js."
  },
  {
    name: "Skincare Website",
    url: "https://nextjs-skincare-website-customcss.vercel.app",
    description: "A beautifully designed skincare product website."
  }
];

const Nextjs_Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <Link href={project.url} passHref>
              <button className="text-blue-400 hover:underline">
                View Project
              </button>
            </Link>
          </div>
        ))}
        <div className="col-span-3 text-center mt-6">
          <Link href="/project" className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-500">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Nextjs_Projects;
