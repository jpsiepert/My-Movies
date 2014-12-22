var express = require("express"),
	app = express(),
	cors = require("cors"),
	bParser = require("body-parser"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	local = require("passport-local"),
	session = require("express-session"),
	mongoUri = "mongodb://localhost/movies",
	connection = mongoose.connection,
	port = 9000;

app.use(express.static(__dirname + "/public/"));

app.use(bParser());

app.use(cors());

app.use(session({secret: "shush it's a secret"}));

mongoose.connect(mongoUri);

connection.once("open", function(){
	console.log("mongoose connected");
});

app.listen(port, function(){
	console.log("server listening");
});






