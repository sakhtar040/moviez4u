import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	FacebookShareButton,
	WhatsappShareButton,
	TwitterShareButton
} from "react-share";

export class ShareLinks extends Component {
	render() {
		const { links } = this.props;
		const { pathname, search } = links;
		const url = `http://localhost:3002${pathname}${search}`;
		console.log(links);
		return (
			<div className="ShareLinks">
				<div className="row mt-1">
					<div className="col-4 pr-1">
						<FacebookShareButton
							url={url}
							className="btn btn-primary btn-block"
						>
							<i className="fab fa-facebook"></i> Facebook
						</FacebookShareButton>
					</div>
					<div className="col-4 pl-0 pr-0">
						<WhatsappShareButton
							url={url}
							className="btn btn-success btn-block"
						>
							<i className="fab fa-whatsapp"></i> Whatsapp
						</WhatsappShareButton>
					</div>
					<div className="col-4 pl-1">
						<TwitterShareButton url={url} className="btn btn-info btn-block">
							<i className="fab fa-twitter"></i> Twitter
						</TwitterShareButton>
					</div>
				</div>
			</div>
		);
	}
}

ShareLinks.propTypes = {
	movie: PropTypes.object
};

export default ShareLinks;
