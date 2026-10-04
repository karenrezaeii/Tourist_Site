// src/components/WorldMapBackground.jsx
import React from "react";
import "../styles/WorldMapBackground.css";

// NOTE: the SVG world map has been temporarily removed at the user's
// request (they have their own map file to try instead). This now just
// renders the plain gradient + stars backdrop. The "activeCountry" prop
// is kept (and simply unused) so nothing else has to change when the
// map is added back later.
function WorldMapBackground({ activeCountry }) {
  return (
    <div className="world-map-wrapper" data-active={activeCountry || ""}>
      <div className="world-map-stars"></div>
      <div className="world-map-overlay"></div>
    </div>
  );
}

export default WorldMapBackground;
