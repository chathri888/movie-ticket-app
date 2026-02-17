const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Movies Data
const movies = [
  {
    id: 1,
    name: "Leo",
    seats: 50,
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7a/Leo_2023_Indian_film.jpg"
  },
  {
    id: 2,
    name: "Jailer",
    seats: 40,
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Jailer_film_poster.jpg"
  },
  {
    id: 3,
    name: "Vikram",
    seats: 30,
    poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Vikram_2022_poster.jpg"
  }
];

// Health Check Route
app.get("/", (req, res) => {
  res.json({ message: "Movie Backend Running Successfully 🚀" });
});

// Get Movies API
app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route Not Found" });
});

// IMPORTANT: Bind to 0.0.0.0 for Docker
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
