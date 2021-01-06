//Dependencies
const express = require('express');
const path = require('path');

//set up express app
const app = express();
const PORT = 3000;

//starts server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
