import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">Dark Mode</span>
    </div>
  );
};

export default DarkModeToggle;
