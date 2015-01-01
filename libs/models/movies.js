var mongoose = require("mongoose"),
	Schema = mongoose.Schema,

	Movie = new Schema({
		title: {type: String, required: true},
		director: {type: String},
		year: {type: Number}
	});

module.exports = mongoose.model("Movie", Movie)