//imports
const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { createNote, findById, deleteNote } = require("../../lib/index");

//get "/notes" route and turns notes to jsno
router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

//post "/notes" route calls createNote imported function
router.post("/notes", (req, res) => {
  // creates id based on what the next index of the array will be
  req.body.id = notes.length.toString();
  const newNote = createNote(req.body, notes);

  res.json(newNote);
  console.log(newNote);
});

router.delete("/notes/:id", (req, res) => {
  const note = findById(req.params.id, notes);
  deleteNote(note, notes);
  res.json();
});

module.exports = router;
