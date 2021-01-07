//api routes
const path = require('path');
const fs = require('fs');
const util = require('util');

module.exports = function (app) {
    // The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        let notes = JSON.parse(data);

        // GET /api/notes - Should read the db.json file and return all saved notes as JSON.
        app.get("/api/notes", function (req, res) {
            res.json(notes);
        });

        // POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
        app.post("/api/notes", function (req, res) {
            let newNotes = req.body;

            console.log(newNotes);
            notes.push(newNotes);
            updateNotes();

        });

        // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
        app.delete("/api/notes/:id", function (req, res) {
            notes.splice(req.params.id, 1);
            updateNotes();
        });

        //update notes for add or delete notes
        function updateNotes() {
            fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;
            })
        }
    });
}

