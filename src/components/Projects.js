import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { projects } from "../data";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "tailwindcss-dark-mode";

export default function Projects() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to trigger animations
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className={`bg-gray-900 text-white py-16 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          Projects Showcase
        </motion.h1>
        <motion.p
          className="text-lg mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          Check out some of the exciting projects I've worked on.
        </motion.p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
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
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-blue-400 hover:text-blue-500 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </section>
  );
}
