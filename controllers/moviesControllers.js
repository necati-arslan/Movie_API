import movies from "../data.js";
import { v4 as uuidv4 } from "uuid";

export const getMovies = (req, res) => {
  res.status(200).json(movies);
};

export const addMovie = (req, res) => {
  const newMovie = {
    id: uuidv4(),
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date,
  };

  if (!newMovie.title || !newMovie.director || !newMovie.release_date) {
    return res
      .status(400)
      .json({ msg: "Please fill title, director, release date fields." });
  }

  movies.push(newMovie);
  res.status(200).send(`a new movie is added as with ${newMovie.id}`);
};

export const finMovieById = (req, res) => {
  const found = movies.some((movie) => movie.id == req.params.id);

  if (found) {
    res.status(200).json(movies.filter((movie) => movie.id == req.params.id));
  } else {
    res.status(400).json({ msg: `No movie with the id of ${req.params.id}` });
  }
};

export const deleteMovieById = (req, res) => {
  const found = movies.some((movie) => movie.id == req.params.id);

  if (found) {
    res.status(200).json({
      msg: `the movie with id: ${req.params.id} is deleted`,
      movies: movies.filter((movie) => movie.id != req.params.id),
    });
  } else {
    res
      .status(400)
      .json({ msg: `No movie with the id ${req.params.id} exist` });
  }
};
