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

// Set up templating engine
app.set("views", "./views");
app.set("view engine", "pug");

let movies = [
  {
    id: 1,
    title: "Diddy",
    rating: 10,
    genre: "horror",
    poster:
      "https://www.hindustantimes.com/ht-img/img/2024/09/24/550x309/PEOPLE-SEAN-COMBS--0_1727188282559_1727188479644.JPG",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 2,
    title: "Surviving R Kelly",
    rating: 7,
    genre: "thriller",
    poster: "https://ryroeinmotion.com/wp-content/uploads/2019/10/rkelly.png",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 3,
    title: "House of the dragons",
    rating: 10,
    genre: "action",
    poster: "https://static.hbo.com/2024-05/house-of-the-dragon-s2-ka-1920.jpg",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 4,
    title: "Real housewives of Kawangware",
    rating: 8,
    genre: "drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2E1ZmM5MDgtNWIzZC00NmE4LTlkNjItYTNiNjQ2ZTU0OTQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 5,
    title: "Betty Kyalo",
    rating: 2,
    genre: "drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2E1ZmM5MDgtNWIzZC00NmE4LTlkNjItYTNiNjQ2ZTU0OTQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
];

let series = [
  {
    id: 1,
    title: "Vikings",
    rating: 9.5,
    genre: "action",
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9155926_b_v10_au.jpg",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 2,
    title: "Breaking Bad",
    rating: 9.5,
    genre: "drama",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 3,
    title: "Game of Thrones",
    rating: 9.8,
    genre: "action",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGY3NTg1ODMtOGIzZS00YWFiLTgzYzktNzBiYWZkYjcwNGRhXkEyXkFqcGc@._V1_.jpg",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 4,
    title: "Money Heist",
    rating: 10,
    genre: "action",
    poster:
      "https://i0.wp.com/thsindex.org/wp-content/uploads/2023/04/Money-Heist-was-first-released-on-Antena-3-in-Spain-in-2017-Netflix.jpg?fit=1920%2C2560&ssl=1",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
  {
    id: 5,
    title: "Into the badlands",
    rating: 5,
    genre: "action",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGQzMWI4OGMtNmE3ZC00ZGM0LWI0ZjEtN2I1YmUwNzhjNTdmXkEyXkFqcGc@._V1_.jpg",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum sit molestiae tempore reiciendis suscipit quam deleniti saepe quo, eligendi facere sapiente commodi, error expedita, impedit optio? Quibusdam, aliquid atque. Maxime consectetur iste tempora iusto eos libero? Magni optio nihil explicabo. Labore perspiciatis delectus quas neque, nobis nihil inventore iusto in numquam facere atque laborum ad doloribus asperiores magnam voluptatem excepturi maiores quis odio et nemo? Libero molestiae deserunt ratione corrupti facere laborum blanditiis temporibus commodi animi magni rem iste quibusdam et assumenda, repellat dolores! Libero deleniti eligendi quas rerum earum, adipisci qui voluptates nihil, debitis voluptatem magni, modi ipsum?",
  },
];

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirName, "public", "index.html"));
});

// Render using template
// app.get("/other", (req, res) => {
//   res.render("index", { data: movies });
// });

// About route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirName, "public", "about.html"));
});

// Api route
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

// Movie route
app.get("/movies", (req, res) => {
  res.render("movies", { data: movies });
});

// Single movie route
app.get("/movies/:id", (req, res) => {
  let id = Number(req.params.id);
  let movie = movies.find((item) => item.id === id);
  res.render("movie", { data: movie });
});

// Series route
app.get("/series", (req, res) => {
  res.render("series", { data: series });
});

// Specify where to access our app
app.listen(port, () => console.log(`Server started on port ${port}`));
