const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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

// Get Movies API
app.get('/movies', (req, res) => {
  res.json(movies);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

