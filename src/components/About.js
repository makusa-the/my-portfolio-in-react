import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "tailwindcss-dark-mode";

export default function About() {
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
      id="about"
      className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="container mx-auto flex flex-col items-center">
        <motion.img
          src="../profile-pic.jpg"
          alt="Innocent Makusa"
          className="rounded-full w-32 h-32 mb-4 border-4 border-white"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        />
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          Hi, I'm Innocent Makusa
        </motion.h1>
        <motion.p
          className="text-lg text-center max-w-prose mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          A
          <span className="text-pink-500"> passionate</span> web developer{" "}
          <span className="text-yellow-500">crafting</span> delightful{" "}
          <span className="text-green-500">online experiences</span>. I thrive on{" "}
          <span className="text-blue-400">creative challenges</span> and enjoy{" "}
          <span className="text-purple-500">solving complex problems</span> with{" "}
          <span className="text-indigo-500">elegant solutions</span>.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          <motion.div
            className="p-6 rounded-lg shadow-md bg-white text-gray-900 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">My Mission</h2>
            <p>
              To <span className="text-pink-500">inspire</span> and{" "}
              <span className="text-blue-400">empower</span> others by{" "}
              <span className="text-yellow-500">sharing knowledge</span> and{" "}
              <span className="text-green-500">creating exceptional</span>{" "}
              <span className="text-purple-500">web solutions</span>.
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg shadow-md bg-white text-gray-900 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">My Hobbies</h2>
            <p>
              When I'm not coding, you can find me{" "}
              <span className="text-blue-400">exploring</span> the outdoors,{" "}
              <span className="text-green-500">reading sci-fi novels</span>,{" "}
              <span className="text-pink-500">strumming my guitar</span>, or{" "}
              <span className="text-yellow-500">baking</span> delicious{" "}
              <span className="text-indigo-500">desserts</span>.
            </p>
          </motion.div>
        </motion.div>
        <div className="mt-4">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="mt-8 text-blue-400 hover:text-blue-500 cursor-pointer"
        >
          Explore My Projects
        </Link>
      </div>
    </section>
  );
}
