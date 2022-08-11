import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      {/*navbar */}
      <Banner />

      <Row
        title="Collections"
        fetchUrl={requests.fetchCollections}
        isLargeRow
      />
      <Row title="Movies" fetchUrl={requests.fetchMovies} />
      <Row title="Series" fetchUrl={requests.fetchSeries} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
    </div>
  );
}
export default App;
