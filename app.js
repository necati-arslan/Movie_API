import express from "express";
import router from "./routes/moviesRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", router);

export default app;
