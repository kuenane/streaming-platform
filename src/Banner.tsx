import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

//type Props = {};

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // Math.floor(Math.random() * request.data.results.length -1)
      return request;
    }
  }, []);
  return (
    <header>
      {/*Background images*/}
      {/*title*/}
      {/*div two buttons*/}
      {/*description*/}
    </header>
  );
}

export default Banner;
function fetchMovies(fetchMovies: any) {
  throw new Error("Function not implemented.");
}
