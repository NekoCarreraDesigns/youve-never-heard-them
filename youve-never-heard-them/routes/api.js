const router = require("express").Router();
const db = require("../models/archiveSchema");

router.get("/archives", (req, res) => {
  db.Archive.find({
    title: { $regex: new RegExp(req.query.q, "i") },
  })
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(404).end());
});

module.exports = router;
