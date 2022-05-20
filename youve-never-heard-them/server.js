const express = require("express");
const mongoose = require("mongoose");

const app = express();
const apiRoutes = require("./routes/api");
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve static assets on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ynhot", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use("/api", apiRoutes);

app.get("/", function (req, res) {
  res.send("Welcome to the Music blog");
});

app.get("/archives", function (req, res) {
  let chosen = req.params.blogs;

  res.send("this is the archive");
  console.log(chosen);

  res.end();
});

app.get("/comments", function (req, res) {
  let comment = req.params.comments;

  res.send("The comment section");
  console.log(comment);

  res.end();
});

app.listen(port, function () {
  console.log(`Server listening at: http://localhost: ${port}`);
});
