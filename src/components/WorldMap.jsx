import React, { useState } from "react";
import "./WorldMap.css"; // import the CSS file
import worldMap from '../assets/Map.png';


const countries = [
  { name: "USA", code: "us", left: "21.1%", top: "27.51%" },
  { name: "Saudi Arabia", code: "sa", left: "58.75%", top: "38.15%" },
  { name: "UAE", code: "ae", left: "62.95%", top: "38.25%", direction: "down" }, // 👈 only this has "down"
  { name: "Egypt", code: "eg", left: "54.63%", top: "43.54%" },
  { name: "India", code: "in", left: "68.9%", top: "39.99%" },
  { name: "Singapore", code: "sg", left: "75.5%", top: "51.9%" },
  { name: "Australia", code: "au", left: "83.88%", top: "63.9%" },
];

const WorldMap = () => {
  return (
    <div className="map-container">
      <img src={worldMap} alt="Hexagon World Map" className="map-image" />
      {countries.map((country, idx) => (
        <div
          key={idx}
          className="country-marker"
          style={{ left: country.left, top: country.top }}
        >
          <div className="dot" />
          <div
            className={`tooltip tooltip-${country.code} ${country.direction === "down" ? "tooltip-down" : ""}`}
          >
            <div className="flag-circle">
              <img
                src={`/flags/${country.code}.svg`}
                alt={`${country.name} flag`}
                className="flag-icon"
              />
            </div>
            <span className="name">{country.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;


/*
const countries = [
  { name: "USA", code: "us", left: "21.1%", top: "27.51%" },
  { name: "Saudi Arabia", code: "sa", left: "58.75%", top: "38.15%" },
  { name: "UAE", code: "ae", left: "62.80%", top: "45.99%" ,direction :"down"},
  { name: "Egypt", code: "eg", left: "54.63%", top: "43.54%" },
  { name: "India", code: "in", left: "68.9%", top: "39.99%" },
  { name: "Singapore", code: "sg", left: "75.5%", top: "51.9%" },
  { name: "Australia", code: "au", left: "83.88%", top: "63.9%" },
];

const WorldMap = () => {
  return (
    <div className="map-container">
      <img src={worldMap} alt="Hexagon World Map" className="map-image" />
      {countries.map((country, idx) => (
        <div
          key={idx}
          className="country-marker"
          style={{ left: country.left, top: country.top }}
        >
          <div className="dot" />
          <div className={`tooltip tooltip-${country.code}`}>
            <div className="flag-circle">
              <img
                src={`/flags/${country.code}.svg`}
                alt={`${country.name} flag`}
                className="flag-icon"
              />
            </div>
            <span className="name">{country.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;


*/

