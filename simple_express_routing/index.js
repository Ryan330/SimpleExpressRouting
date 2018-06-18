//Init Express.js
const express = require("express");
const app = express();


//Homepage
app.get("/", function(request, response) {
    response.send("Homepage");
});


//About
app.get("/about", function(request, response) {
    response.send("About");
});


//Menu
app.get("/menu", function(request, response) {
    response.send("Menu");
});

//Server Port
app.listen(8000, function() {
    console.log("Server: http://localhost:8000");
});