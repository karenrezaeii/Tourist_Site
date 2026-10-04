// src/components/CityNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import slugify from "../utils/slugify";
// Reuses the exact same navbar styles as the home page (fixed to the
// top, centered, evenly spaced) so this looks and behaves consistently
// with the rest of the site.
import "../styles/Navbar.css";

// Hovering a city name smooth-scrolls straight to that city's section
// on this same page. The "back to all countries" link is now just a
// regular item in this same row, first in line, with its own color.
function CityNavbar({ cities }) {
  const handleHover = (cityId) => {
    const target = document.getElementById(cityId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__link navbar__link--back">
          ← Back to all countries
        </Link>

        {cities.map((city) => (
          <span
            key={city.name}
            className="navbar__link"
            onMouseEnter={() => handleHover(slugify(city.name))}
          >
            {city.name}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default CityNavbar;