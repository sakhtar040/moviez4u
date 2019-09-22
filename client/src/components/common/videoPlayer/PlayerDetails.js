import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

export class PlayerDetails extends Component {
	render() {
		const { movie } = this.props;
		const { category } = movie;
		//console.log(movie);

		let categoryDetails;
		if (category === "0") {
			categoryDetails = "| Language: English";
		} else if (category === "1" || category === "2") {
			categoryDetails = "| Language: Hindi";
		} else {
			categoryDetails = "";
		}

		return (
			<div className="PlayerDetails">
				<div className="row">
					<div className="col-3">
						<img
							src={
								movie ? `http://localhost:2000/images/${movie.thumbnail}` : ""
							}
							alt={movie ? movie.name : ""}
							height="200"
							className="img-fluid"
						/>
					</div>
					<div className="col-9">
						<p>Starring: {movie ? movie.casts : ""}</p>
						<p>
							Directors: {movie ? movie.directors : ""} {categoryDetails}
						</p>
						<p>Genre: {movie ? movie.genre.join().toUpperCase() : ""}</p>
						<p>IMDb: {movie ? movie.imdbLink : ""}</p>
						<p>
							Release:{" "}
							{movie ? (
								<Moment format="YYYY/MM/DD">{movie.releaseDate}</Moment>
							) : (
								""
							)}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<p>
							{movie ? movie.name : ""}: {movie ? movie.description : ""}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

PlayerDetails.propTypes = {
	movie: PropTypes.object
};

export default PlayerDetails;
