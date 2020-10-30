const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

const validateProjectId = (request, response, next) => {

  const { id } = request.params

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' })
  }

  return next()
}

app.get("/repositories", (request, response) => {
  // TODO
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body
  const repository = { id: uuid(), title, url, techs, likes: 0 }

  repositories.push(repository)

  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
