import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /movies", () => {
  it(" should be a title,director,release date", async () => {
    const body = {
      title: "",
      director: "",
      release_date: "",
    };
    const response = await request.post("/movies").send(body);
    expect(response.statusCode).toBe(400);
  });

  it(" it shoul  be work", async () => {
    const body = {
      title: "Test Movie ",
      director: "Test Director",
      release_date: "Test date",
    };
    const response = await request.post("/movies").send(body);
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /movies", () => {
  it("response to all movies", async () => {
    const response = await request.get("/movies");
    expect(response.statusCode).toBe(200);
  });

  it("response ony one movie by id", async () => {
    const response = await request.get("/movies/1");
    expect(response.statusCode).toBe(200);
  });
  it("response no movie exist", async () => {
    const response = await request.get("/movies/6767676");
    expect(response.statusCode).toBe(400);
  });
});

describe("DELETE /movies", () => {
  it(" presponse delete a movie by id", async () => {
    const response = await request.delete("/movies/1");
    expect(response.statusCode).toBe(200);
  });

  it(" presponse  movie not exist", async () => {
    const response = await request.delete("/movies/89898");
    expect(response.statusCode).toBe(400);
  });
});
