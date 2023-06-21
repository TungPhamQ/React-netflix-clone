import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import MovieService from "./services/movie.service";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const fillMovies = (res) => {
    setMovies(res.results);
  }

  useEffect(() => {
    // if [], run once when the row loads, and don't un again
    const fetchData = () => {
      MovieService.fetchTrending({
        language: "en-US",
      }).then(fillMovies);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
