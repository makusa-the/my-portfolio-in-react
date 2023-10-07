import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 md:sticky top-0 z-10">
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
          <a
            href="#about"
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0"
          >
            About
          </a>
          <a
            href="#projects"
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block md:inline-block text-white hover:text-yellow-400 md:mr-4 py-2 md:py-0"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </nav>
  );
}
