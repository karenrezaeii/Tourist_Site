// src/components/CountryPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import countries from "../data/countries";
import CityBlock from "./CityBlock";
import CityNavbar from "./CityNavbar";
import MobileMenu from "./MobileMenu";
import slugify from "../utils/slugify";
import "../styles/CountryPage.css";

function CountryPage() {
  const { countryId } = useParams();
  const country = countries.find((c) => c.id === countryId);

  // Fallback if someone visits an invalid URL like /country/xyz
  if (!country) {
    return (
      <div className="country-not-found">
        <h2>Country not found</h2>
        <Link to="/" className="country-not-found__link">
          ← Back to World Explorer
        </Link>
      </div>
    );
  }

  // On mobile, tapping a city in the hamburger menu scrolls to it,
  // same as hovering a city name does in the desktop CityNavbar.
  const mobileMenuItems = country.cities.map((city) => ({
    id: slugify(city.name),
    label: city.name,
  }));
  const handleMobileSelect = (cityId) => {
    const target = document.getElementById(cityId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="country-page">
      {/* Flag as the full-page background */}
      <div
        className="country-page__flag-bg"
        style={{ backgroundImage: `url(${country.flag})` }}
      ></div>
      <div className="country-page__flag-overlay"></div>

      {/* Same fixed, centered navbar style as the home page — but for
          this country's cities. Hovering a name scrolls to it. */}
      <CityNavbar cities={country.cities} />
      <MobileMenu items={mobileMenuItems} onSelect={handleMobileSelect} />

      <div className="country-page__content">
        <Link to="/" className="country-page__back">
          ← Back to all countries
        </Link>

        <header className="country-page__header">
          <h1 className="country-page__title">{country.name}</h1>
        </header>

        <section className="country-page__history">
          <h2 className="country-page__section-title">History</h2>
          <p className="country-page__history-text">{country.history}</p>
        </section>

        <section className="country-page__cities">
          <h2 className="country-page__section-title">Cities to Explore</h2>
          <div className="country-page__cities-list">
            {country.cities.map((city, index) => (
              <CityBlock key={city.name} city={city} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CountryPage;