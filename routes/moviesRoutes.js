import express from "express";
const router = express.Router();
import movies from "../data.js";
import { v4 as uuidv4 } from "uuid";
import {
  getMovies,
  addMovie,
  finMovieById,
  deleteMovieById,
} from "../controllers/moviesControllers.js";

router.get("/", getMovies);

router.post("/", addMovie);

router.get("/:id", finMovieById);

router.delete("/:id", deleteMovieById);

export default router;
