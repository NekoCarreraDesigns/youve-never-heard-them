const router = require("express").Router();
const db = require("../models");

router.get("/archives", (req, res) => {
  db.Archives.find({
    title: { $regex: new RegExp(req.query.q, "i") },
  })
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(404).end());
});

module.exports = router;
