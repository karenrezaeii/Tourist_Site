// src/components/MobileMenu.jsx
import React, { useEffect, useState } from "react";
import "../styles/MobileMenu.css";

// Only visible on small screens (see MobileMenu.css). Replaces the
// desktop navbar there with a hamburger icon that opens a dropdown
// list of the same items (countries on the home page, cities on a
// country page), plus a light/dark mode entry at the bottom.
//
// items: [{ id, label }]
// onSelect: (id) => void  — called when the user taps an item
function MobileMenu({ items, onSelect }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("site-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  const handleSelect = (id) => {
    setOpen(false);
    onSelect(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__controls">
        <button
          className="mobile-menu__icon-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          ☰
        </button>
        <button
          className="mobile-menu__icon-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>

      {open && (
        <>
          <div
            className="mobile-menu__backdrop"
            onClick={() => setOpen(false)}
          ></div>
          <div className="mobile-menu__dropdown">
            {items.map((item) => (
              <button
                key={item.id}
                className="mobile-menu__item"
                onClick={() => handleSelect(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              className="mobile-menu__item mobile-menu__theme"
              onClick={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
            >
              {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileMenu;