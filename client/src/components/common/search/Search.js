import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSearchMovies } from "../../../actions/searchAction";
import MovieItem from "../MovieItem";
import Spinner from "../Spinner";

export class Search extends Component {
	componentDidMount() {
		let query = this.props.location.search
			.split("=")[1]
			.split("+")
			.join(" ");
		this.props.getSearchMovies(query);
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
						<MovieItem movie={movie} from={movie.type} />
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
			<div className="Search">
				<main role="main" className="container">
					<div className="row">{movieItem}</div>
				</main>
			</div>
		);
	}
}

Search.propTypes = {
	getSearchMovies: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movies: state.movies
});

export default connect(
	mapStateToProps,
	{ getSearchMovies }
)(Search);
