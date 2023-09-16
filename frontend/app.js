const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from ft_transcendance FrontEnd inside a docker container...</h1>");
});

app.listen(9090, () => {
  console.log("Simple React app is running on port 9090...");
});