import React, { Component } from "react";
import SidePanel from "../common/SidePanel";
import MovieRequestFeed from "../common/static/MovieRequestFeed";
import { getMovieRequests } from "../../actions/movieRequestActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import FeaturedItem from "../common/FeaturedItem";
import { getLimtedFeaturedMovies } from "../../actions/moviesActions";

export class Genres extends Component {
	componentDidMount() {
		this.props.getMovieRequests();
		this.props.getLimtedFeaturedMovies();
	}
	render() {
		const genre = [
			"action",
			"adult",
			"adventure",
			"animation",
			"biography",
			"comedy",
			"crime",
			"documentation",
			"drama",
			"dubbed",
			"family",
			"fantasy",
			"featured",
			"HD",
			"hindi",
			"history",
			"hollywood",
			"horror",
			"mystery",
			"romance",
			"Sci-Fi",
			"Short",
			"Sport",
			"suspense",
			"thriller",
			"Tv-Series",
			"war"
		];

		let genreContent = genre.map((item, index) => {
			return (
				<Link
					key={index}
					to={`/genre/${item}`}
					className="btn btn-secondary m-1"
				>
					{item.toUpperCase()}
				</Link>
			);
		});

		const { movieRequests, loading } = this.props.movieRequests;
		let movieRequestFeed;
		if (movieRequests == null || loading) {
			movieRequestFeed = <Spinner />;
		} else {
			movieRequestFeed = <MovieRequestFeed movieRequests={movieRequests} />;
		}

		const { featuredMovies } = this.props.featuredMovies;
		let featuredContent;
		if (featuredMovies == null || loading) {
			featuredContent = (
				<div className="col-md-12 col-12 text-center">
					<Spinner />
				</div>
			);
		} else {
			if (featuredMovies.length > 0) {
				featuredContent = featuredMovies.map((movie, index) => (
					<div className="col-md-2 col-4 padding-zero" key={index}>
						<FeaturedItem movie={movie} from="featured" />
					</div>
				));
			} else {
				featuredContent = (
					<div className="col-md-12 col-12 text-center">
						<h4 className="text-warning">No Movie Found...</h4>
					</div>
				);
			}
		}

		return (
			<div className="movieRequest">
				<main className="container text-white" role="main">
					<div className="row">
						<div className="col-md-8 blog-main">
							<h4 className="pb-4 mb-4 font-italic border-bottom">Genres</h4>
							<div className="blog-post">{genreContent}</div>

							<h4 className="pb-4 mb-4 font-italic border-bottom">
								Featured Movies
							</h4>
							<div className="blog-post">
								<div className="row">{featuredContent}</div>
							</div>

							<div className="blog-post">
								<h4 className="pb-4 mb-4 font-italic border-bottom">
									Recent Movie Requests
									<span className="float-right" style={{ fontSize: "15px" }}>
										{movieRequests ? movieRequests.length : "0"} Requests
									</span>
								</h4>

								{movieRequests ? (
									movieRequestFeed
								) : (
									<div className="text-center">
										<h4>No Request Found</h4>
									</div>
								)}
							</div>
						</div>
						<aside className="col-md-4 blog-sidebar">
							<SidePanel />
						</aside>
					</div>
				</main>
			</div>
		);
	}
}

Genres.propTypes = {
	getMovieRequests: PropTypes.func.isRequired,
	getLimtedFeaturedMovies: PropTypes.func.isRequired,
	movieRequests: PropTypes.object.isRequired,
	featuredMovies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movieRequests: state.movieRequests,
	featuredMovies: state.movies
});

export default connect(
	mapStateToProps,
	{ getMovieRequests, getLimtedFeaturedMovies }
)(Genres);
