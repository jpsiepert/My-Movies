var Movie = require("../models/movies"),
	movieService = require("../services/movieService");

module.exports.addMovie = function(req, res){
	movieService.addMovie(req.body, function(err, movies){
		if(!err){
			res.status(200).send(movies)
		} else {
			res.end()	
		}
	})
}