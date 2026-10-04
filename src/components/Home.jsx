// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorldMapBackground from "./WorldMapBackground";
import CountryCard from "./CountryCard";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import countries from "../data/countries";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const [scrolledCountry, setScrolledCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".country-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrolledCountry(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const activeCountry = hoveredCountry || scrolledCountry;

  // On mobile, tapping a country in the hamburger menu behaves like
  // the desktop navbar's click — it goes straight to that country's page.
  const mobileMenuItems = countries.map((c) => ({ id: c.id, label: c.name }));
  const handleMobileSelect = (countryId) => {
    navigate(`/country/${countryId}`);
  };

  return (
    <div className="home-page">
      <WorldMapBackground activeCountry={activeCountry} />

      <Navbar countries={countries} onHoverCountry={setHoveredCountry} />
      <MobileMenu items={mobileMenuItems} onSelect={handleMobileSelect} />

      <header className="home-header">
        <h1 className="home-header__title">World Explorer</h1>
        <p className="home-header__subtitle">
          Discover history, culture, and cities from around the world
        </p>
      </header>

      <main className="home-list">
        {countries.map((country, index) => (
          <CountryCard key={country.id} country={country} index={index} />
        ))}
      </main>
    </div>
  );
}

export default Home;