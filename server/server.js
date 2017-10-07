// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var flash = require("connect-flash");
// Require Schemas
var routes = require("../routes");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 4000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(flash());

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
// Serve files created by create-react-app.
app.use(express.static("client/build"));
app.use(routes);
// -------------------------------------------------

// MongoDB Configuration configuration
// mongoose.connect("mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk");
mongoose.connect("mongodb://localhost/chorePoster");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});