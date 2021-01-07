//Dependencies
const express = require('express');
const path = require('path');

//set up express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

// GET /notes - Should return the notes.html file.
// GET * - Should return the index.html file

// The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

//api routes

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

//starts server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
