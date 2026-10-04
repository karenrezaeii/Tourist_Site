// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import "../styles/ThemeToggle.css";

// A floating button, fixed to the bottom-left of the browser window at
// all times (even while scrolling), that switches the whole site between
// dark mode (jade/teal) and light mode (gray/crimson). The choice is
// remembered in localStorage so it persists on the next visit.
function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("site-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
