import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieDetailPage(props) {
  const id = props.match.params.id;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>

      {Object.entries(movie).map(([key, value]) => {
        let displayValue = value;

        if (key === "release_date" && value) {
          displayValue = new Date(value).toLocaleDateString();
        }

        if (key === "runtime" && value) {
          displayValue = `${value} minutes`;
        }

        return (
          <p key={key}>
            <strong>{key}:</strong> {String(displayValue)}
          </p>
        );
      })}

      <Link to="/">← Back to Movies</Link>
    </div>
  );
}

export default MovieDetailPage;