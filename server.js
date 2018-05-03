const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressJWT = require('express-jwt');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/alessistantdb");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// Serve up static assets
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/alessistantdb");

//Verify token on every request
//app.use(expressJWT({secret:'my secret'}));

//Routes
app.use(require('./routes/authRoutes'));
app.use('/api', require('./routes/api/ingredients'));
app.use('/api', require('./routes/api/recipes'));
app.use('/api', require('./routes/api/users'));
app.use('/api', require('routes/api/brewing'));

// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});