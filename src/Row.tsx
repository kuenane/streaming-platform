import { type } from "os";
import { title } from "process";
import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url: string = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export interface Welcome6 {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
}

export interface Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

export interface Hits {
  total: Total;
  max_score: number;
  hits: Hit[];
}

export interface Hit {
  _index: Index;
  _type: Type;
  _id: string;
  _score: number;
  _source: Movie;
}

export enum Index {
  ContentIndex = "content-index",
}

export interface Movie {
  metadata: Metadata;
  year: string;
  rating: number;
  description: string;
  episode: number;
  type: SourceType;
  duration: number;
  objectKey: string;
  genre: Genre[];
  name: string;
  guid: string;
  season: number;
  order: number;
  parents: string[];
}

export enum Genre {
  Adventure = "Adventure",
  Drama = "Drama",
  Fantasy = "Fantasy",
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

export enum SourceType {
  Episode = "episode",
}

export enum Type {
  Doc = "_doc",
}

export interface Total {
  value: number;
  relation: string;
}

function Row({ title, fetchUrl }: Props): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
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
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, i) => (
          <React.Fragment key={movie.guid}>
            <div>
              <h5>{movie.name}</h5>
            </div>
            <div>
              {movie.metadata &&
                movie.metadata.images.map((image) => (
                  <img key={image.type} src={image.url} alt={movie.name} />
                ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Row;
