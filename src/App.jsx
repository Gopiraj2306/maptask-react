import React from "react";
import WorldMap from "./components/WorldMap";
import ImageCardContainer from "./components/testing";
import SearchAppBar from "./components/material";
function App() {
  return (
    <div className="app-container">
      <SearchAppBar />
      <WorldMap />
      <ImageCardContainer />
    </div>
  );
}

export default App;
