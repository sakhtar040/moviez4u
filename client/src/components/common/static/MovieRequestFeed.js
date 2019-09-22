import React, { Component } from "react";
import PropTypes from "prop-types";
import EachRequest from "./EachRequest";

export class MovieRequestFeed extends Component {
	render() {
		const { movieRequests } = this.props;
		return movieRequests.map(request => (
			<EachRequest key={request._id} request={request} />
		));
	}
}

MovieRequestFeed.propTypes = {
	movieRequests: PropTypes.array.isRequired
};

export default MovieRequestFeed;
