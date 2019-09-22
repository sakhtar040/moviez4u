import React, { Component } from "react";
import SidePanel from "../common/SidePanel";
import MovieRequestFeed from "../common/static/MovieRequestFeed";
import Player from "./videoPlayer/Player";
import PlayerDetails from "./videoPlayer/PlayerDetails";
import MovieDownloadLink from "./videoPlayer/MovieDownloadLink";
import ShareLinks from "./videoPlayer/ShareLinks";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import {
	getSingleMovie,
	getSingleSeries,
	emptyMovie,
	getLimtedFeaturedMovies
} from "../../actions/moviesActions";
import { getMovieRequests } from "../../actions/movieRequestActions";
import FeaturedItem from "../common/FeaturedItem";

export class Play extends Component {
	componentDidMount() {
		let query = this.props.location.search.split("=")[1];
		if (query === "tv-series") {
			this.props.getSingleSeries(this.props.match.params.slug);
		} else {
			this.props.getSingleMovie(this.props.match.params.slug);
		}
		this.props.getLimtedFeaturedMovies();
		this.props.getMovieRequests();
	}

	componentWillReceiveProps(nextProps) {
		let query = this.props.location.search.split("=")[1];
		let queryP = nextProps.location.search.split("=")[1];

		if (
			query === queryP &&
			queryP === "play" &&
			this.props.location.pathname !== nextProps.location.pathname
		) {
			nextProps.getSingleMovie(nextProps.match.params.slug);
			nextProps.getLimtedFeaturedMovies();
			nextProps.getMovieRequests();
		} else {
			if (query !== queryP) {
				nextProps.getSingleMovie(nextProps.match.params.slug);
				nextProps.getLimtedFeaturedMovies();
				nextProps.getMovieRequests();
			}
		}
	}

	componentWillUnmount() {
		console.log("unmount");
		this.props.emptyMovie();
	}

	render() {
		const { movie } = this.props.movie;
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

		let playerContent;
		if (movie == null || loading) {
			playerContent = <Spinner />;
		} else {
			playerContent = (
				<div>
					<Player movie={movie} />
					<PlayerDetails movie={movie} />
					<MovieDownloadLink movie={movie} />
					<ShareLinks links={this.props.location} />
				</div>
			);
		}

		return (
			<div className="Play">
				<main className="container playerContainer text-white" role="main">
					<div className="row">
						<div className="col-md-8 blog-main">
							<h5>{movie ? movie.name : ""}</h5>
							<div className="blog-post videoPlayerDiv mb-4">
								{playerContent}
							</div>

							<h4 className="pb-4 font-italic border-bottom pt-0 mt-0">
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

Play.propTypes = {
	getSingleMovie: PropTypes.func.isRequired,
	getMovieRequests: PropTypes.func.isRequired,
	getSingleSeries: PropTypes.func.isRequired,
	getLimtedFeaturedMovies: PropTypes.func.isRequired,
	emptyMovie: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired,
	movieRequests: PropTypes.object.isRequired,
	featuredMovies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movie: state.movies,
	featuredMovies: state.movies,
	movieRequests: state.movieRequests
});

export default connect(
	mapStateToProps,
	{
		getMovieRequests,
		getSingleMovie,
		getSingleSeries,
		emptyMovie,
		getLimtedFeaturedMovies
	}
)(Play);
