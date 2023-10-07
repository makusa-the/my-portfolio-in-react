import React, { useState } from "react";
import { CodeBracketIcon } from "@heroicons/react/outline";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleProjectChange = (index) => {
    setActiveProjectIndex(index);
  };

  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <CodeBracketIcon className="w-12 h-12 mx-auto mb-6 text-green-400" />
        <h1 className="text-4xl font-bold mb-6">Projects Showcase</h1>
        <p className="text-lg mb-12">
          Check out some of the exciting projects I've worked on.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
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
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleProjectChange(index)}
                  className={`${
                    index === activeProjectIndex
                      ? "bg-blue-500"
                      : "bg-gray-700"
                  } px-4 py-2 rounded-full text-white`}
                >
                  {index === activeProjectIndex ? "Active" : "Switch"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
