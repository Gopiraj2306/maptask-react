import React from "react";
import WorldMap from "./components/WorldMap";
import ImageCardContainer from "./components/testing";
import SearchAppBar from "./components/material";
import Para from "./components/para";
import Footer from "./components/footer";
function App() {
  return (
    <div className="app-container">
      <SearchAppBar />
      <WorldMap />
      <ImageCardContainer />
      <Para />
      <Footer />
    </div>
  );
}

export default App;
