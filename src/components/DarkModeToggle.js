import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

export default function DarkModeToggle() {
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
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
        <span className="slider round">
          <SunIcon className={`text-yellow-500 ${darkMode ? "hidden" : ""}`} />
          <MoonIcon className={`text-indigo-500 ${!darkMode ? "hidden" : ""}`} />
        </span>
      </label>
      <span className={`toggle-label ${darkMode ? "text-white" : "text-gray-900"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}
