import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDubbedMovies } from "../../actions/moviesActions";
import MovieItem from "../common/MovieItem";
import Spinner from "../common/Spinner";
import Content from "../common/static/Content";

export class Dubbed extends Component {
	componentDidMount() {
		this.props.getDubbedMovies();
	}

	render() {
		const details =
			"Watch hindi dubbed movies online free. Hollywood movies in hindi download. We have hundreds of dubbed movies to watch online and download in HD. Latest dubbed movies to watch for the year 2019, 2018.";

		const { movies, loading } = this.props.movies;
		let movieItem;
		if (movies === null || loading) {
			movieItem = (
				<div className="col-12 col-md-12 text-center">
					<Spinner />
				</div>
			);
		} else {
			if (movies.length > 0) {
				movieItem = movies.map((movie, index) => (
					<div className="col-md-2 col-6 mb-1 padding-zero" key={index}>
						<MovieItem movie={movie} from="dubbed" />
					</div>
				));
			} else {
				movieItem = (
					<div className="col-md-12 col-12 text-center">
						<h4 className="text-warning">No Movie Found...</h4>
					</div>
				);
			}
		}

		return (
			<div className="Dubbed">
				<main role="main" className="container">
					<Content title="Dubbed" details={details} />
					<div className="row">{movieItem}</div>
				</main>
			</div>
		);
	}
}

Dubbed.propTypes = {
	getDubbedMovies: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movies: state.movies
});

export default connect(
	mapStateToProps,
	{ getDubbedMovies }
)(Dubbed);
