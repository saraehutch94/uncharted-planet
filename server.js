// Require dependencies

const express = require("express");
const methodOverride = require("method-override");

// Initialize the application

const app = express();

// Configure application settings

// Set up port value

require("dotenv").config();

const port = process.env.PORT;

// Mount middleware

// body-parser
app.use(express.urlencoded ({ extended: false }));

// making public assets available
app.use(express.static("public"));

// method-overriding
app.use(methodOverride("_method"));

// Mount routes

// index route
app.get("/planets", (req, res) => {
    res.render("index.ejs");
});

// new route
app.get("/planets/new", (req, res) => {
    res.render("new.ejs");
});

// Tell app to listen for client requests

app.listen(port, () => {
    console.log("Express is listening to client requests on port " + port);
});
