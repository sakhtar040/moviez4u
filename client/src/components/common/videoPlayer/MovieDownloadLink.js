import React, { Component } from "react";
import PropTypes from "prop-types";
import DownloadLink from "react-download-link";

export class MovieDownloadLink extends Component {
	render() {
		const { movie } = this.props;
		return (
			<div className="DownloadLink">
				<div className="row">
					<div className="col-12">
						<DownloadLink
							className="btn btn-secondary btn-block text-white"
							label={`Download ${movie ? movie.name : ""}`}
							filename={movie ? movie.source : ""}
							exportFile={() => "My cached data"}
						/>
					</div>
				</div>
			</div>
		);
	}
}

MovieDownloadLink.propTypes = {
	movie: PropTypes.object
};

export default MovieDownloadLink;
