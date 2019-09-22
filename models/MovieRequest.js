const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieRequestSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	comment: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = MovieRequest = mongoose.model(
	"movieRequest",
	movieRequestSchema
);
