//api routes
const fs = require('fs');
const notesData = require('../db/db.json');

module.exports = function (app) {
    // The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

    // GET /api/notes - Should read the db.json file and return all saved notes as JSON.
    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });

    // POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    // app.post("/api/notes", function (req, res) {
    //     let lastNotesId;

    //     if (allNotes.length) {
    //         lastNotesId = Math.max(...lastNotesId(allNotes.map(notes => notes.id)))
    //     } else {
    //         lastNotesId = 0;
    //     }

    //     console.log(newNotes);
    //     notes.push(newNotes);

    //     let jsonNotes = JSON.stringify(notes);
    //     fs.writeFile("db/db.json", jsonNotes, function (err) {
    //         if (err) {
    //             return console.log(err);
    //         } console.log("Notes successfully saved!");
    //     })
    // });

    //     // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    //     app.delete("/api/notes/:id", function (req, res) {
    //         const notesId = req.params.id;
    //         notes.forEach((n, index) => {
    //             if (id === n.id) {
    //                 notes.splice(index, 1);
    //                 const notesCopy = notes.slice();
    //                 let jsonNotesCopy = jSON.stringify(notesCopy);
    //                 fs.writeFile("db/db.json", jsonNotesCopy, function (err) {
    //                     if (err) {
    //                         return console.log(err);
    //                     }
    //                     console.log("Notes sucessfully deleted!");
    //                 })
    //             }
    //         })

    //     });

    //     // //update notes for add or delete notes
    //     // function updateNotes() {
    //     //     fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
    //     //         if (err) throw err;
    //     //         return true;
    //     //     })
    //     // }

}
