import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MostViewed extends Component {
	render() {
		const { movies } = this.props;
		let movieLinks = movies.map(movie => (
			<li className="list-group-item bg-dark" key={movie._id}>
				<Link
					to={{
						pathname: `/watch/${movie.slug}`,
						search: "?from=play",
						state: { movie: movie }
					}}
				>
					<i className="fas fa-play-circle"></i> {movie.name}
				</Link>
			</li>
		));
		return (
			<div className="MostViewed">
				<h5>Most Viewed</h5>
				<ul className="list-group text-color">{movieLinks}</ul>
			</div>
		);
	}
}

export default MostViewed;
