var Movie = require("../models/movies");

module.exports.addMovie = function(newMovie, cb){
	return new Movie(newMovie).save(function(err, savedMovie){
		if(err){
			cb(err)
		} else {
			(null, savedMovie)
		}
	})

}