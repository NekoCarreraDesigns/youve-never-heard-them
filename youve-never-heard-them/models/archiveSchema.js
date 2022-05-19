const mongoose = require("mongoose");

const archiveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    alt: String,
    required: false,
  },
  date: {
    type: Number,
    required: true,
  },
  href: {
    type: String,
    default: "",
    unique: true,
  },
});

const Archive = mongoose.model("Archive", archiveSchema);

module.exports = Archive;
