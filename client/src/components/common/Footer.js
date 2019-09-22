import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
	render() {
		return (
			<footer className="blog-footer bg-dark mt-3">
				<p>
					<Link to="/">Moviez4u | Watch Movies Online Free</Link> | Download
					Full Movies Free | Here you can watch movies online free in HD without
					annoying ads, just come and enjoy latest full movies online. You can
					also download movie to your pc to watch movies later offline |{" "}
					<Link to="/genres">Genres</Link> |{" "}
					<Link to="/contact-us">Contact US</Link> |{" "}
					<Link to="/privacy-policy">Privacy Policy</Link> |{" "}
					<Link to="/terms-and-conditions">TOS</Link>
				</p>
				<p>
					<Link to="/">Back to top</Link>
				</p>
			</footer>
		);
	}
}

export default Footer;
