import React from "react";
import WorldMap from "./components/WorldMap";
import ImageCardContainer from "./components/testing";
import SearchAppBar from "./components/material";
import Para from "./components/para";
function App() {
  return (
    <div className="app-container">
      <SearchAppBar />
      <WorldMap />
      <ImageCardContainer />
      <Para />
    </div>
  );
}

export default App;
