//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

//set up express app
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routers

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

//starts server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
