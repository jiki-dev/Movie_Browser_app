const express = require("express");
const path = require("path");

const app = express();

// Load movie data
const movies = require("./movies_metadata.json");

// ------------------------------------
// API: Ping
// ------------------------------------
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

// ------------------------------------
// API: List Movies
// ------------------------------------
app.get("/api/movies", (request, response) => {
  console.log("❇️ Received GET request to /api/movies");

  const movieList = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    vote_average: movie.vote_average,
  }));

  response.json(movieList);
});

// ------------------------------------
// API: Get Single Movie
// ------------------------------------
app.get("/api/movies/:id", (request, response) => {
  console.log(
    `❇️ Received GET request to /api/movies/${request.params.id}`
  );

  const movie = movies.find(
    (m) => String(m.id) === request.params.id
  );

  if (!movie) {
    return response.status(404).json({
      message: "Movie not found",
    });
  }

  response.json(movie);
});

// ------------------------------------
// Express port-switching logic
// ------------------------------------
let port;

console.log("❇️ NODE_ENV is", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;

  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (request, response) => {
    response.sendFile(
      path.join(__dirname, "../build", "index.html")
    );
  });
} else {
  port = 3001;

  console.log(
    "⚠️ Not seeing your changes as you develop?"
  );

  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// ------------------------------------
// Start Server
// ------------------------------------
const listener = app.listen(port, () => {
  console.log(
    "❇️ Express server is running on port",
    listener.address().port
  );
});