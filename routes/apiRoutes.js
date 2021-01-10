//api routes
const fs = require('fs');
const notesData = require('../db/db.json');

module.exports = function (app) {

    // const content = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    // The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

    // GET /api/notes - Should read the db.json file and return all saved notes as JSON.
    app.get("/api/notes", function (req, res) {
        console.log("Getting Notes");
        res.json(notesData);
    });

    // POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post("/api/notes", function (req, res) {

        let newNotes = req.body;

        console.log(newNotes);

        notesData.push(newNotes);

        console.log(notesData);
        console.log(notesData.length);

        //add id to each note
        for (let i = 0; i < notesData.length; i++) {
            notesData[i].id = i + 1;
        }

        const stringifyNotes = JSON.stringify(notesData);

        fs.writeFile('db/db.json', stringifyNotes, 'utf8', (err, data) => {
            if (err) throw err;
            console.log("New notes successfully saved!");

        });

        res.json(notesData);
    });

    // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.delete("/api/notes/:id", function (req, res) {
        // console.log(typeof (notesData));
        const noteIdToDelete = parseInt(req.params.id);
        let notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

        for (let i = 0; i < notes.length; i++) {
            if (noteIdToDelete === parseInt(notes[i].id)) {
                notes.splice(i, 1);
            }
        };

        const stringifyNotes = JSON.stringify(notes);

        fs.writeFile('db/db.json', stringifyNotes, 'utf8', (err, data) => {
            if (err) throw err;
            console.log("Note successfully deleted!");

        });

        res.json(notes);
    });


}
