const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tvseriesSchema = new Schema({
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
		type: Date,
		required: true
	},
	genre: {
		type: [String],
		required: true
	},
	type: {
		type: String
	},
	imdbLink: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	quality: {
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

module.exports = TvSeries = mongoose.model("tvseries", tvseriesSchema);
