// getting-started.js

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection Open!!!");
  })
  .catch((err) => {
    console.log("Oh Error");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  Score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);  //Movie is the important keyword/value it is used t createthe collection and it will pluralizes it and makes it in lowercase and make it as movies
// const conjuring = new Movie({title: "Conjuring",year: 2000,Score: 9.2,rating: "A"});

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])   // by using insertMany in mongoose we don't need to save it, it will automatically insert in the db
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
