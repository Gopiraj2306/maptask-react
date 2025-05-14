import React, { useState } from "react";
import "./WorldMap.css"; // import the CSS file
import worldMap from '../assets/Map.png';


const countries = [
  { name: "USA", code: "us", left: "21.1%", top: "27.51%" },
  { name: "Saudi Arabia", code: "sa", left: "58.75%", top: "38.15%" },
  { name: "UAE", code: "ae", left: "62.80%", top: "39.2%" },
  { name: "Egypt", code: "eg", left: "54.63%", top: "43.54%" },
  { name: "India", code: "in", left: "68.9%", top: "39.99%" },
  { name: "Singapore", code: "sg", left: "75.5%", top: "51.9%" },
  { name: "Australia", code: "au", left: "83.88%", top: "63.9%" },
];

const WorldMap = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="map-container">
      <img src={worldMap} alt="Hexagon World Map" className="map-image" />
      {countries.map((country, idx) => (
        <div
          key={idx}
          className="country-marker"
          style={{ left: country.left, top: country.top }}
          onMouseEnter={() => setHovered(country.name)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Dot Marker */}
          <div className="dot" />

          {/* Tooltip on hover */}
          {hovered === country.name && (
            <div className="tooltip">
              <img
                src={`/flags/${country.code}.svg`}
                alt={`${country.name} flag`}
                className="flag-icon"
              />
              <span className="name">{country.name}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorldMap;


