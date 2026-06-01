const express = require("express");
const cors = require("cors");

const movies = require("./movies_metadata.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  const movieList = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    vote_average: movie.vote_average,
  }));

  res.json(movieList);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(
    (m) => String(m.id) === req.params.id
  );

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  res.json(movie);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});