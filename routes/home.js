const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const TvSeries = require("../models/TvSeries");
let duration = 0;

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/movies", (req, res) => {
	if (req.query.query) {
		switch (req.query.query) {
			case "hollywood":
				return Movie.find({ category: "0" })
					.sort({ uploadDate: -1 })
					.then(movies => {
						res.render("movies", {
							movies: movies
						});
					})
					.catch(err => console.log(err));
				break;

			case "bollywood":
				return Movie.find({ category: "1" })
					.sort({ uploadDate: -1 })
					.then(movies => {
						res.render("movies", {
							movies: movies
						});
					})
					.catch(err => console.log(err));
				break;

			case "dubbed":
				return Movie.find({ category: "2" })
					.sort({ uploadDate: -1 })
					.then(movies => {
						res.render("movies", {
							movies: movies
						});
					})
					.catch(err => console.log(err));
				break;

			default:
				break;
		}
	} else {
		Movie.find()
			.sort({ uploadDate: -1 })
			.then(movies => {
				res.render("movies", {
					movies: movies
				});
			})
			.catch(err => console.log(err));
	}
});

router.get("/featured-movies", (req, res) => {
	if (req.query.query) {
		switch (req.query.query) {
			case "hollywood":
				return Movie.find({ featured: true, category: "0" })
					.sort({ uploadDate: -1 })
					.then(movies => {
						res.render("featured-movies", {
							movies: movies
						});
					});
				break;

			case "bollywood":
				return Movie.find({ featured: true, category: "1" })
					.sort({ uploadDate: -1 })
					.then(movies => {
						res.render("featured-movies", {
							movies: movies
						});
					});
				break;

			case "dubbed":
				return Movie.find({ featured: true, category: "2" })
					.sort({ uploadDate: -1 })
					.then(movies => {
						res.render("featured-movies", {
							movies: movies
						});
					});
				break;

			default:
				break;
		}
	} else {
		Movie.find({ featured: true })
			.sort({ uploadDate: -1 })
			.then(movies => {
				res.render("featured-movies", {
					movies: movies
				});
			});
	}
});

router.get("/genres", (req, res) => {
	res.render("genres");
});

router.get("/tv-series", (req, res) => {
	TvSeries.find()
		.sort({ uploadDate: -1 })
		.then(series => {
			res.render("tv-series", {
				series: series
			});
		})
		.catch(err => console.log(err));
});

router.get("/movies-requests", (req, res) => {
	res.render("movies-requests");
});

router.get("/add-movie", (req, res) => {
	res.render("add-movie");
});

const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "public/images");
		},
		filename: (req, file, cb) => {
			cb(
				null,
				`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
			);
		}
	})
});

router.post(
	"/add-movie",
	upload.fields([
		{
			name: "source",
			maxCount: 1
		},
		{
			name: "thumbnail",
			maxCount: 1
		}
	]),
	(req, res) => {
		const {
			name,
			casts,
			directors,
			releaseDate,
			genre,
			imdb,
			category,
			desc,
			quality,
			featured
		} = req.body;
		const { source, thumbnail } = req.files;

		const slug = name
			.replace(/[^a-zA-Z ]/g, "")
			.split(" ")
			.join("-")
			.toLowerCase();

		const releaseDateM = new Date(releaseDate).getFullYear();

		const newMovie = new Movie({
			name: name,
			source: source[0].filename,
			thumbnail: thumbnail[0].filename,
			slug: slug,
			forSearch: name.toLowerCase(),
			casts: casts,
			directors: directors,
			genre: genre.toLowerCase().split(","),
			releaseDate: releaseDateM,
			imdbLink: imdb,
			category: category,
			description: desc,
			quality: quality,
			featured: featured ? true : false,
			type: "movie",
			duration: duration
		});

		newMovie
			.save()
			.then(movie => {
				Movie.find()
					.sort({ uploadDate: -1 })
					.then(movies => {
						res.render("movies", {
							msg: "New Movie Added",
							movies: movies
						});
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	}
);

router.get("/add-tv-series", (req, res) => {
	res.render("add-tv-series");
});

router.post(
	"/add-tv-series",
	upload.fields([
		{
			name: "source",
			maxCount: 1
		},
		{
			name: "thumbnail",
			maxCount: 1
		}
	]),
	(req, res) => {
		const {
			name,
			casts,
			directors,
			releaseDate,
			genre,
			imdb,
			desc,
			quality
		} = req.body;
		const { source, thumbnail } = req.files;

		const slug = name
			.replace(/[^a-zA-Z ]/g, "")
			.split(" ")
			.join("-")
			.toLowerCase();

		const releaseDateM = new Date(releaseDate).getFullYear();

		const newSeries = new TvSeries({
			name: name,
			source: source[0].filename,
			thumbnail: thumbnail[0].filename,
			slug: slug,
			forSearch: name.toLowerCase(),
			casts: casts,
			directors: directors,
			genre: genre,
			releaseDate: releaseDateM,
			imdbLink: imdb,
			type: "tv-series",
			description: desc,
			quality: quality,
			duration: duration
		});

		newSeries
			.save()
			.then(tvseries => {
				TvSeries.find()
					.sort({ uploadDate: -1 })
					.then(series => {
						res.render("tv-series", {
							msg: "New Tv Series Added",
							series: series
						});
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	}
);

module.exports = router;
