import React, { Component } from "react";
import PropTypes from "prop-types";

export class Player extends Component {
	render() {
		const { movie } = this.props;
		return (
			<div className="Player">
				<video
					style={{ width: "100%", height: "auto" }}
					controls
					autoPlay="autoplay"
					preload="none"
					className="videoPlayer"
					poster={
						movie ? `http://localhost:2000/images/${movie.thumbnail}` : ""
					}
				>
					<source
						src={movie ? `http://localhost:2000/images/${movie.source}` : ""}
						type="video/mp4"
					/>
				</video>
			</div>
		);
	}
}

Player.propTypes = {
	movie: PropTypes.object
};

export default Player;
