// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./routes");

// Require Schemas
// var Article = require("./model/Chores");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 4000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Enable CORS so that browsers don't block requests.
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
// Serve files created by create-react-app.
app.use(express.static("client/public"));
app.use(routes);
// -------------------------------------------------

// MongoDB Configuration configuration
// mongoose.connect("mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chorePoster",
  {
    useMongoClient: true
  }
);

// -------------------------------------------------
// // Route to get all saved articles
// app.get("/api/chores", function(req, res) {
//   Article.find({})
//     .exec(function(err, doc) {
//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// // Route to add an article to saved list
// app.post("/api/chores", function(req, res) {
//   var newArticle = new Article(req.body);
//   console.log(req.body);
//   newArticle.save(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// app.post("/accept/:id", function(req, res) {
//   console.log(req.params.id)
//   Article.update({
//     "_id": req.params.id
//   }, {
//     $set: {
//       "inProgress": true
//     }
//   }, function(err, doc) {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     }
//     else {
//       console.log(doc);
//       res.send(doc);
//     }
//   }
// )
// })

// app.post("/reject/:id", function(req, res) {
//   console.log(req.params.id)
//   Article.update({
//     "_id": req.params.id
//   }, {
//     $set: {
//       "inProgress": false
//     }
//   }, function(err, doc) {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     }
//     else {
//       console.log(doc);
//       res.send(doc);
//     }
//   }
// )
// })

// // Route to delete an article from saved list
// app.delete("/api/saved/", function(req, res) {
//   var url = req.param("url");
//   Article.find({ url: url }).remove().exec(function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Deleted");
//     }
//   });
// });

// // Any non API GET routes will be directed to our React App and handled by React Router
// app.get("*", function(req, res) {
//   if ( process.env.NODE_ENV === 'production' ) {
//     res.sendFile(__dirname + "/client/build/index.html");
//   } else {
//     res.sendFile(__dirname + "/client/public/index.html");
//   }
// });

// -------------------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});