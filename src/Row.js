import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import MovieService from "./services/movie.service";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const fillMovies = (res) => {
    setMovies(res.results);
  };

  useEffect(() => {
    // if [], run once when the row loads, and don't un again
    const fetchData = () => {
      MovieService.fetchTrending({
        language: "en-US",
      }).then(fillMovies);
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log("url", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className={`row__posters ${isLargeRow && "row__posterLarge"} `}>
        {movies.map((movie) => (
          <img
            className="row__poster"
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
