const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server listening at: http://localhost:" + port);
});

app.get("/", function (req, res) {
  res.send("Welcome to the Music blog");
});

app.get("/archives", function (req, res) {
  let chosen = req.params.blogs;

  res.send("this is the archive");
  console.log(chosen);

  res.end();
});
