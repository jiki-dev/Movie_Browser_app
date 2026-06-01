import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./MovieListPage.css";

function MovieListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="container">
      <h1>Movies</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            className="movie-card"
            key={movie.id}
          >
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            <p>Rating: {movie.vote_average}/10</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieListPage;