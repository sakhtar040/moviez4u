import React, { Component } from "react";
import MovieItem from "../common/MovieItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getYearMovies } from "../../actions/genreActions";

export class Year extends Component {
	componentDidMount() {
		const year = this.props.match.params.type;
		this.props.getYearMovies(year);
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
						<MovieItem movie={movie} from="year" />
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
			<div className="Year">
				<main role="main" className="container">
					<div className="row">{movieItem}</div>
				</main>
			</div>
		);
	}
}

Year.propTypes = {
	getYearMovies: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movies: state.genres
});

export default connect(
	mapStateToProps,
	{ getYearMovies }
)(Year);
