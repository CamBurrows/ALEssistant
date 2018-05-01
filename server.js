const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressJWT = require('express-JWT');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/alessistantdb");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets

mongoose.connect("mongodb://localhost/alessistantdb");

//Verify token on every request
//app.use(expressJWT({secret:'my secret'}));

//Routes
app.use(require('./routes/authRoutes'));

app.get('/test', function(req, res) {
  res.send('<h1>test</h1>');
});

// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});