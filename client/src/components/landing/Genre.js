import React, { Component } from "react";
import MovieItem from "../common/MovieItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getGenreMovies } from "../../actions/genreActions";

export class Genre extends Component {
	componentDidMount() {
		const genre = this.props.match.params.type;
		this.props.getGenreMovies(genre);
	}

	render() {
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
						<MovieItem movie={movie} from="genre" />
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
			<div className="Genre">
				<main role="main" className="container">
					<div className="row">{movieItem}</div>
				</main>
			</div>
		);
	}
}

Genre.propTypes = {
	getGenreMovies: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movies: state.genres
});

export default connect(
	mapStateToProps,
	{ getGenreMovies }
)(Genre);
