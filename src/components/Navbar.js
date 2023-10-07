import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "tailwindcss-dark-mode";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-gradient-to-r from-blue-500 to-indigo-600 p-4 md:sticky top-0 z-10`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <button
          className="text-white text-xl font-medium md:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">Menu</span>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0 cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0 cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <a
            href="https://1drv.ms/w/s!Au_wnQIyOF5zgVM1FSUl4REIru5s?e=HUwhca"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white hover:text-yellow-400 transition duration-300"
          >
            My Resume
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </nav>
  );
}
