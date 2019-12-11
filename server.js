var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Dependencies
var exphbs = require("express-handlebars");

// setting the main handlebars view to main.handlebars. setting the view engine to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// requiring the routes controller file
var routes = require('./controllers/burgers_controller');
// app.use(routes);

app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT)
});