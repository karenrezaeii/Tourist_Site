// src/components/CountryCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CountryCard.css";

// index is the position of this country in the list (0-based).
// Even index (0, 2, 4...) => flag LEFT, text RIGHT  -> matches countries 1, 3, 5...
// Odd index (1, 3, 5...)  => flag RIGHT, text LEFT   -> matches countries 2, 4, 6...
function CountryCard({ country, index }) {
  const navigate = useNavigate();
  const isReversed = index % 2 !== 0;

  const goToCountry = () => {
    navigate(`/country/${country.id}`);
  };

  return (
    <div
      id={country.id}
      className={`country-card ${isReversed ? "country-card--reversed" : ""}`}
    >
      {/* Only the flag image itself is clickable / shows a pointer cursor */}
      <div
        className="country-card__flag-wrap"
        onClick={goToCountry}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToCountry();
        }}
      >
        <img
          className="country-card__flag"
          src={country.flag}
          alt={`${country.name} flag`}
        />
        <span className="country-card__flag-label">
          {country.name} - {country.continent}
        </span>
      </div>

      <div className="country-card__info">
        <h2 className="country-card__title">{country.name}</h2>
        <p className="country-card__summary">{country.summary}</p>
        {/* The button is its own separate clickable target too */}
        <button className="country-card__cta" onClick={goToCountry}>
          Explore {country.name} →
        </button>
      </div>
    </div>
  );
}

export default CountryCard;
