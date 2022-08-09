import { type } from "os";
import { title } from "process";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export interface Movie {
  metadata: Metadata;
  year: string;
  rating: number;
  description: string;
  episode: number;
  duration: number;
  objectKey: string;
  name: string;
  guid: string;
  season: number;
  order: number;
  parents: string[];
}

export interface Metadata {
  images: Image[];
}

export interface Image {
  type: ImageType;
  url: string;
}

export enum ImageType {
  Poster = "poster",
}

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

function Row({ title, fetchUrl, isLargeRow }: Props): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");
  // A snippet of code that runs based on a specific condition
  useEffect(() => {
    // if [], run once when row loads and don't run again
    // While the data is loading, do something
    async function fetchData() {
      const fetchRequest = await axios.get(fetchUrl);
      setMovies(fetchRequest.data);
      return fetchRequest;
    }
    fetchData();
  }, [fetchUrl]);

  //console.log(movies);
  if (!movies) return null as any;
  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row__posters">
        {movies.map((movie) => (
          <React.Fragment key={movie.guid}>
            <div>
              <h5>{movie.name}</h5>
            </div>
            <div>
              {movie.metadata &&
                movie.metadata.images.map((image) => (
                  <img
                    key={image.url}
                    src={image.url}
                    alt={movie.name}
                    className={`Row_poster`}
                  />
                ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Row;
