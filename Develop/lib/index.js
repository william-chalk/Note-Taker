//imports
const fs = require("fs");
const path = require("path");

//creates new note
function createNote(body, noteArray) {
  noteArray.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: noteArray }, null, 2)
  );
  return body;
}

function findById(id, noteArray) {
  const result = noteArray.filter((note) => note.id === id)[0];
  return result;
}

function deleteNote(note, noteArray) {
  const index = noteArray.indexOf(note);
  noteArray.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: noteArray }, null, 2)
  );
  return noteArray;
}

module.exports = { createNote, findById, deleteNote };
