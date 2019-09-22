const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	source: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		required: true
	},
	views: {
		type: Number,
		default: 0
	},
	slug: {
		type: String,
		required: true
	},
	forSearch: {
		type: String
	},
	casts: {
		type: [String],
		required: true
	},
	directors: {
		type: [String],
		required: true
	},
	releaseDate: {
		type: String,
		required: true
	},
	genre: {
		type: [String],
		required: true
	},
	imdbLink: {
		type: String,
		required: true
	},
	category: {
		type: String
	},
	description: {
		type: String,
		required: true
	},
	quality: {
		type: String
	},
	featured: {
		type: Boolean,
		required: true
	},
	type: {
		type: String
	},
	duration: {
		type: Number
	},
	uploadDate: {
		type: Date,
		default: Date.now()
	}
});

module.exports = Movie = mongoose.model("movie", movieSchema);
