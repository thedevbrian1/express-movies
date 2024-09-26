import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Instantiate an express server
let app = express();

let port = 3000;

let __fileName = fileURLToPath(import.meta.url);
console.log({ __fileName });

let __dirName = path.dirname(__fileName);
console.log({ __dirName });

// Use static assets
app.use(express.static("public"));

let movies = [
  {
    title: "Diddy",
    rating: 10,
    genre: "horror",
    poster:
      "https://www.hindustantimes.com/ht-img/img/2024/09/24/550x309/PEOPLE-SEAN-COMBS--0_1727188282559_1727188479644.JPG",
  },
  {
    title: "Surviving R Kelly",
    rating: 7,
    genre: "thriller",
    poster: "https://ryroeinmotion.com/wp-content/uploads/2019/10/rkelly.png",
  },
  {
    title: "House of the dragons",
    rating: 10,
    genre: "action",
    poster: "https://static.hbo.com/2024-05/house-of-the-dragon-s2-ka-1920.jpg",
  },
  {
    title: "Real housewives of Kawangware",
    rating: 8,
    genre: "drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2E1ZmM5MDgtNWIzZC00NmE4LTlkNjItYTNiNjQ2ZTU0OTQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Betty Kyalo",
    rating: 2,
    genre: "drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2E1ZmM5MDgtNWIzZC00NmE4LTlkNjItYTNiNjQ2ZTU0OTQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
];

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirName, "public", "index.html"));
});

// About route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirName, "public", "about.html"));
});

// Api route
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

// Specify where to access our app
app.listen(port, () => console.log(`Server started on port ${port}`));
