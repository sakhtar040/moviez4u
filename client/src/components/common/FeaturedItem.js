import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class FeaturedItem extends Component {
	render() {
		const { movie, from } = this.props;
		return (
			<div className="FeaturedItem">
				<div className="card bg-dark border-0">
					<Link to={`/watch/${movie.slug}?from=${from}`}>
						<img
							className="img-fluid"
							src={`http://localhost:2000/images/${movie.thumbnail}`}
							alt=""
						/>
					</Link>
					<div className="card-body bg-dark p-0 border-movie">
						<Link
							to={`/watch/${movie.slug}?from=${from}`}
							className="text-color"
						>
							{movie.name.length > 25
								? `${movie.name.substr(0, 15)}...`
								: movie.name}
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

FeaturedItem.propTypes = {
	movie: PropTypes.object.isRequired
};

export default FeaturedItem;
