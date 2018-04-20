var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var routes = require("./app/routing/htmlRoutes.js")(app,bodyParser);
var apiroutes = require("./app/routing/apiRoutes.js")(app, bodyParser); 

app.listen(PORT, function(){
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});



