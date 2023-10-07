import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  // Toggle dark mode and update the class on the body element
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.body.classList.toggle('dark-mode');
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
    <header>
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </header>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section (Personal Introduction) */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Additional Sections */}
      {/* Add more sections here as needed, such as Blog, Awards, or Resume. */}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Innocent Makusa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
