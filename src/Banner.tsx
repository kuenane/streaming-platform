// import React, { useState, useEffect } from "react";
// //import requests from "./requests";
// import axios from "./axios";
// import "./Banner.css";
// import requests from "./request";

// type Props = {
//   title: string;
//   fetchUrl: string;
//   isLargeRow?: boolean;
// };

// export interface Movie {
//   metadata: Metadata;
//   year: string;
//   rating: number;
//   description: string;
//   episode: number;
//   duration: number;
//   objectKey: string;
//   name: string;
//   guid: string;
//   season: number;
//   order: number;
//   parents: string[];
// }

// export interface Metadata {
//   images: Image[];
// }

// export interface Image {
//   type: ImageType;
//   url: string;
// }

// export enum ImageType {
//   Poster = "poster",
// }

// function Banner() {
//   const [movie, setMovies] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(requests.fetchMovies);
//       setMovies(
//         request.data.results[
//           Math.floor(Math.random() * request.data.results.length - 1)
//         ]
//       );
//       return request;
//     }
//     fetchData();
//   }, []);

//   function truncate(str: string, n: number) {
//     return str?.length > n ? str.substring(0, n - 1) + "..." : str;
//   }

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//         //backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//       }}
//     >
//       <div className="banner_content">
//         {/* ? is optional chaining */}
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>
//       <div className="banner_fadeBottom"></div>
//     </header>
//   );
// }

// export default Banner;
export {};
