import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTvSeries } from "../../actions/moviesActions";
import MovieItem from "../common/MovieItem";
import Spinner from "../common/Spinner";
import Content from "../common/static/Content";

export class TvSeries extends Component {
	componentDidMount() {
		this.props.getTvSeries();
	}

	render() {
		const details =
			"Watch series online free. We have hundreds of tv series to watch online and download in HD. Latest tv-shows to watch for the year 2019, 2018.";

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
						<MovieItem movie={movie} from="tv-series" />
					</div>
				));
			} else {
				movieItem = (
					<div className="col-md-12 col-12 text-center">
						<h4 className="text-warning">No Series Found...</h4>
					</div>
				);
			}
		}

		return (
			<div className="TvSeries">
				<main role="main" className="container">
					<Content title="Tv-Series" details={details} />
					<div className="row">{movieItem}</div>
				</main>
			</div>
		);
	}
}

TvSeries.propTypes = {
	getTvSeries: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movies: state.movies
});

export default connect(
	mapStateToProps,
	{ getTvSeries }
)(TvSeries);
