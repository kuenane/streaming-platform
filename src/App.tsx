import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';



function App() {
  return (
    <div className="App">
      <h1> Let's get pumping</h1>

      <Row title = "Collections"  fetchUrl={requests.fetchCollections} />
      <Row title = "Movies" fetchUrl={requests.fetchMovies} />
      <Row title = "Series" fetchUrl={requests.fetchSeries} />
      <Row title = "Action" fetchUrl={requests.fetchAction} />
      <Row title = "Adventure" fetchUrl={requests.fetchAdventure} />
      <Row title = "Animation" fetchUrl={requests.fetchAnimation} />
    </div>
  );
}
export default App;