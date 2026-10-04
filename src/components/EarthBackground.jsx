// src/components/EarthBackground.jsx
import React from "react";
import "../styles/EarthBackground.css";

function EarthBackground() {
  return (
    <div className="earth-bg-wrapper">
      {/* Twinkling stars layer */}
      <div className="stars-layer"></div>
      <div className="stars-layer stars-layer-2"></div>

      {/* Rotating earth sphere */}
      <div className="earth-sphere">
        <div className="earth-surface"></div>
        <div className="earth-continents"></div>
        <div className="earth-glow"></div>
        <div className="earth-rim"></div>
      </div>

      {/* Soft vignette so foreground content stays readable */}
      <div className="earth-overlay"></div>
    </div>
  );
}

export default EarthBackground;
