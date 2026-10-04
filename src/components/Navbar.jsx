// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

// onHoverCountry(countryId | null): tells the parent (Home) which
// country's shape on the background map should light up right now
// (kept for whenever the map is added back).
function Navbar({ countries, onHoverCountry }) {
  const navigate = useNavigate();

  const handleClick = (e, countryId) => {
    e.preventDefault();
    // Clicking a name goes straight to that country's own page (the
    // one with its flag as the background).
    navigate(`/country/${countryId}`);
  };

  const handleHover = (countryId) => {
    onHoverCountry && onHoverCountry(countryId);
    // Hovering also smooth-scrolls to that country's own section
    // (with its flag) further down this same home page.
    const target = document.getElementById(countryId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {countries.map((country) => (
          <a
            key={country.id}
            href={`/country/${country.id}`}
            className="navbar__link"
            onClick={(e) => handleClick(e, country.id)}
            onMouseEnter={() => handleHover(country.id)}
            onMouseLeave={() => onHoverCountry && onHoverCountry(null)}
          >
            {country.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;