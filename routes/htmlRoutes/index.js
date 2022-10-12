//imports
const path = require("path");
const router = require("express").Router();

// root route that will display the index.html file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// "/notes" route that will display the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//wildcard route that will display the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
