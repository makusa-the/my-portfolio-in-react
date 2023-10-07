import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import ScrollToTop from "./components/ScrollToTop";
import { pageVariants, pageTransition } from "./animations";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <header>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        </header>

        {/* Navigation Bar */}
        <Navbar />

        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                {/* Home Page (Personal Introduction) */}
                <Route
                  path="/"
                  exact
                  render={() => (
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <About />
                    </motion.div>
                  )}
                />

                {/* Projects Page */}
                <Route
                  path="/projects"
                  render={() => (
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Projects />
                    </motion.div>
                  )}
                />

                {/* Skills Page */}
                <Route
                  path="/skills"
                  render={() => (
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Skills />
                    </motion.div>
                  )}
                />

                {/* Testimonials Page */}
                <Route
                  path="/testimonials"
                  render={() => (
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Testimonials />
                    </motion.div>
                  )}
                />

                {/* Contact Page */}
                <Route
                  path="/contact"
                  render={() => (
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Contact />
                    </motion.div>
                  )}
                />
              </Routes>
            </AnimatePresence>
          )}
        />

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-6 text-center">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Innocent Makusa. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
