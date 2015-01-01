var express = require("express"),
	app = express(),
	cors = require("cors"),
	bParser = require("body-parser"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	local = require("passport-local"),
	session = require("express-session"),
	movieCtrl = require("./libs/controllers/movieCtrl")
	mongoUri = "mongodb://localhost/movies",
	connection = mongoose.connection,
	port = 9000;

app.use(express.static(__dirname + "/Public/"));

app.use(bParser.json());

app.use(cors());

app.use(session({secret: "shush it's a secret"}));

mongoose.connect(mongoUri);

app.post("/api/movies", movieCtrl.addMovie)


connection.once("open", function(){
	console.log("mongoose connected");
});

app.listen(port, function(){
	console.log("server listening");
});






