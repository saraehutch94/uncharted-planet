// Require dependencies

const { application } = require("express");
const express = require("express");
const methodOverride = require("method-override");
const scientists = require("./models/scientists");

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
    res.render("index.ejs", {scientists});
});

// new route
app.get("/planets/new", (req, res) => {
    res.render("new.ejs");
});

// delete route
app.delete("/planets/:id", (req, res) => {
    scientists.splice(req.params.id, 1);
    res.redirect("/planets");
});


// update route


// create route
app.post("/planets", (req, res) => {
    scientists.push(req.body);
    res.redirect("/planets");
});

// edit route


// show route

app.get("/planets/:id", (req, res) => {
    const foundScientist = scientists[req.params.id];
    console.log(foundScientist);
    res.render("show.ejs", {foundScientist});
});

// Tell app to listen for client requests

app.listen(port, () => {
    console.log("Express is listening to client requests on port " + port);
});
