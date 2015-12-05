//Requires express engine
var express = require ("express");

//Kick off the server, app is the heart of the server.
var app = express ();

//View engine -- it's ejs or jade!!
app.set("view engine", "ejs");
// app.set("view engine", "jade");

//Any traffic we get to the server, we are passing this function.

// Below are all the routes.
// The / is the root of the application.
// e.g. / is the root of facebook.com when you call it.
app.get("/", function(req, res) {
  var name = "mike";
  res.render("people", {"name":name});
});

// app.get("/people", function(req, res) {
//   res.send("Hello to everyone in this room");
// });
//
app.get("/people/:name/:city/:state", function(req, res) {
  var state = req.params.state;
  var name = req.params.name;
  var city = req.params.city;
  // res.send("hello to everyone, especially "+ individual + "who lives in " + state);//Send something to webpage html
  res.render("people", {"state": state, "name": name, "city": city});// Render the page
});

app.get("/clients", function(req, res) {
  res.send("Hello to everyone in this room");
});

app.get("/profiles/:dinosaur", function(req, res) {
  var dinosaur=req.params.dinosaur;
  res.render("profile", {"dinosaur": dinosaur}); //Goes to profile page in views folder
});

app.get("*", function(req, res) {    // Catch all for everything else
  res.send("404 not found suckas");
});


//Setting the app to constantly listen on the port.
// 3000 is this convention, like 8000 is the port for python.
app.listen(3000, function() {
  console.log(" I am listening on port 3000.  Recognize me.")
});


//add nodemon and then the server is always listening for changes in your app.
