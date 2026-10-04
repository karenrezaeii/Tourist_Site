// src/components/CityBlock.jsx
import React from "react";
import slugify from "../utils/slugify";
import "../styles/CityBlock.css";

// Same zigzag logic as CountryCard:
// even index (0,2,4) => image left, text right
// odd index (1,3)     => image right, text left
function CityBlock({ city, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      id={slugify(city.name)}
      className={`city-block ${isReversed ? "city-block--reversed" : ""}`}
    >
      <div className="city-block__image-wrap">
        <img
          className="city-block__image"
          src={city.image}
          alt={`${city.name}`}
        />
      </div>

      <div className="city-block__info">
        <span className="city-block__role">{city.role}</span>
        <h3 className="city-block__name">{city.name}</h3>
        <p className="city-block__description">{city.description}</p>
      </div>
    </div>
  );
}

export default CityBlock;