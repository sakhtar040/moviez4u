import React, { Component } from "react";
import Subscribe from "./Subscribe";
import PopularCategories from "./PopularCategories";
import MostViewed from "./MostViewed";
import MovieByYear from "./MovieByYear";
import RecentlyUploaded from "./RecentlyUploaded";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
	getRecentlyUploadedMovies,
	getMostViewedMovies
} from "../../actions/sidebarActions";

export class SidePanel extends Component {
	componentDidMount() {
		this.props.getRecentlyUploadedMovies();
		this.props.getMostViewedMovies();
	}
	render() {
		const { recentlyUploaded, mostViewed } = this.props.movies;
		//console.log(recentlyUploaded);
		return (
			<div className="sidePanel">
				<div className="card bg-dark p-2 mb-1">
					{recentlyUploaded ? (
						<RecentlyUploaded movies={recentlyUploaded} />
					) : (
						"loading..."
					)}
				</div>

				<div className="card p-2 bg-dark mb-1">
					<MovieByYear />
				</div>

				<div className="card bg-dark p-2 mb-1">
					{mostViewed ? <MostViewed movies={mostViewed} /> : "loading..."}
				</div>

				<div className="card bg-dark p-2 mb-1">
					<PopularCategories />
				</div>

				<div className="card bg-dark p-2 mb-1">
					<Subscribe />
				</div>
			</div>
		);
	}
}

SidePanel.propTypes = {
	getRecentlyUploadedMovies: PropTypes.func.isRequired,
	getMostViewedMovies: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movies: state.sidebar
});

export default connect(
	mapStateToProps,
	{ getRecentlyUploadedMovies, getMostViewedMovies }
)(SidePanel);
