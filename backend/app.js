const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from ft_transcendance BackEnd inside a docker container...</h1>");
});

app.listen(3000, () => {
  console.log("React app example is running on port 9090...");
});