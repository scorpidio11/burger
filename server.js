// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var exphbs = require('express-handlebars');


var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;



// Routes contains "index"
var routes = require("./controllers/routes.js");
app.use("/", routes);



// Sets an initial port. We"ll use this later in our listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
