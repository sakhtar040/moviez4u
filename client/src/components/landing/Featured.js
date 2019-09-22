import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFeaturedMovies } from "../../actions/moviesActions";
import MovieItem from "../common/MovieItem";
import Spinner from "../common/Spinner";
import Content from "../common/static/Content";

export class Featured extends Component {
	componentDidMount() {
		this.props.getFeaturedMovies();
	}

	render() {
		const details =
			"Watch featured movies online free. We have hundreds of featured movies to watch online and download in HD. Latest featured movies to watch for the year 2019, 2018.";

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
						<MovieItem movie={movie} from="featured" />
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
			<div className="Featured">
				<main role="main" className="container">
					<Content title="Featured" details={details} />
					<div className="row">{movieItem}</div>
				</main>
			</div>
		);
	}
}

Featured.propTypes = {
	getFeaturedMovies: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movies: state.movies
});

export default connect(
	mapStateToProps,
	{ getFeaturedMovies }
)(Featured);
