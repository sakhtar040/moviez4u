import React, { Component } from "react";

export class Subscribe extends Component {
	render() {
		return (
			<div className="Subscribe">
				<h5>Connect with us</h5>
				<p>
					Subscribe to Moviez4u mailing list and get updates on latest release
					movies.
				</p>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Enter your email here"
					/>
				</div>
				<button className="btn btn-secondary btn-block">Subscribe!</button>
			</div>
		);
	}
}

export default Subscribe;
