import React from "react";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <CodeBracketIcon className="w-12 h-12 mx-auto mb-6 text-green-400" />
        <h1 className="text-4xl font-bold mb-6">Projects Showcase</h1>
        <p className="text-lg mb-12">
          Check out some of the exciting projects I've worked on.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4">{project.subtitle}</p>
                <p className="text-gray-500">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="text-green-400 hover:text-green-500 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
