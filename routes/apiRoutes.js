//api routes
const fs = require('fs');
const notesData = require('../db/db.json');

module.exports = function (app) {

    const content = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    // The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

    // GET /api/notes - Should read the db.json file and return all saved notes as JSON.
    app.get("/api/notes", function (req, res) {
        console.log("Getting Notes");
        res.json(notesData);
    });

    // POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post("/api/notes", function (req, res) {

        let newNotes = req.body;

        newNotes.id = content.length;
        console.log(newNotes);

        notesData.push(newNotes);
        updateNotes();
        console.log(notesData);

        res.json(newNotes);
    });

    // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.delete("/api/notes/:id", function (req, res) {
        // fs.readFileSync('../db/db.json', )
        let id = req.params.id;
        console.log(id);
        updateNotes();

    });

    function updateNotes() {
        fs.writeFile("db/db.json", JSON.stringify(notesData, '\t'), err => {
            if (err) throw err;
            return true;
        })
    }
}
