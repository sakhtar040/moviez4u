const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const MovieRequest = require("../models/MovieRequest");
const TvSeries = require("../models/TvSeries");
const gravatar = require("gravatar");

router.get("/movies/all", (req, res) => {
	Movie.find()
		.sort({ uploadDate: -1 })
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/movies/hollywood", (req, res) => {
	Movie.find({ category: "0" })
		.sort({ uploadDate: -1 })
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/movies/bollywood", (req, res) => {
	Movie.find({ category: "1" })
		.sort({ uploadDate: -1 })
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/movies/featured", (req, res) => {
	Movie.find({ featured: true })
		.sort({ uploadDate: -1 })
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/movie/watch/:slug", (req, res) => {
	Movie.findOneAndUpdate(
		{ slug: req.params.slug },
		{ $inc: { views: 1 } },
		{ new: true }
	)
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/series/watch/:slug", (req, res) => {
	TvSeries.findOneAndUpdate(
		{ slug: req.params.slug },
		{ $inc: { views: 1 } },
		{ new: true }
	)
		.then(series => res.json(series))
		.catch(err => res.status(400).json(err));
});

router.get("/movies/dubbed", (req, res) => {
	Movie.find({ category: "2" })
		.sort({ uploadDate: -1 })
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/genre/:genre", (req, res) => {
	Movie.find({ genre: req.params.genre })
		.sort({ uploadDate: -1 })
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/year/:year", (req, res) => {
	Movie.find({
		releaseDate: req.params.year
	})
		.sort({ uploadDate: -1 })
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/tv-series/all", (req, res) => {
	TvSeries.find()
		.sort({ uploadDate: -1 })
		.then(series => res.json(series))
		.catch(err => res.status(400).json(err));
});

router.get("/tc-series/watch/:slug", (req, res) => {
	TvSeries.find({ slug: req.params.slug })
		.then(series => res.json(series))
		.catch(err => res.status(400).json(err));
});

router.get("/search/:item", (req, res) => {
	Movie.find({ forSearch: { $regex: req.params.item } })
		.then(movie => {
			if (movie == "") {
				TvSeries.find({ forSearch: { $regex: req.params.item } }).then(series =>
					res.json(series)
				);
			} else {
				TvSeries.find({ forSearch: { $regex: req.params.item } }).then(
					series => {
						if (series == "") {
							res.json(movie);
						} else {
							const obj = [...movie, ...series];
							res.json(obj);
						}
					}
				);
			}
		})
		.catch(err => res.status(400).json(err));
});

router.get("/movie-requests", (req, res) => {
	MovieRequest.find()
		.sort({ date: -1 })
		.then(requests => res.json(requests))
		.catch(err => res.status(400).json(err));
});

router.post("/movie-request", (req, res) => {
	const { name, email, desc } = req.body;
	const avatar = gravatar.url(req.body.email, {
		s: "55",
		r: "g",
		d: "wavatar"
	});
	const newRequest = new MovieRequest({
		name: name,
		email: email,
		avatar,
		comment: desc
	});

	newRequest.save().then(movierequest => res.json(movierequest));
});

router.get("/recently-uploaded-movies", (req, res) => {
	Movie.find()
		.sort({ date: -1 })
		.limit(10)
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/most-viewed", (req, res) => {
	Movie.find()
		.sort({ views: -1 })
		.limit(10)
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

router.get("/featured-movies", (req, res) => {
	Movie.find({ featured: true })
		.sort({ views: -1 })
		.limit(6)
		.then(movies => res.json(movies))
		.catch(err => res.status(400).json(err));
});

module.exports = router;
