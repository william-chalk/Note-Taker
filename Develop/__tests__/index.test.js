const fs = require("fs");

const { findById, createNote } = require("../lib/index");

const { notes } = require("../db/db.json");

jest.mock("fs");

test("creates note object", () => {
  const note = createNote(
    { title: "Note Test", text: "note text", id: "1" },
    notes
  );

  expect(note.title).toBe("Note Test");
  expect(note.text).toBe("note text");
  expect(note.id).toBe("1");
});

test("finds by id", () => {
  const testNote = [
    {
      title: "Note Test One",
      text: "this is test text one",
      id: "1",
    },
    {
      title: "Note Test Two",
      text: "this is test text two",
      id: "2",
    },
  ];

  const result = findById("2", testNote);

  expect(result.title).toBe("Note Test Two");
});
