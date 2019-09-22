import React, { Component } from "react";
import SidePanel from "../SidePanel";
import Spinner from "../Spinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FeaturedItem from "../FeaturedItem";
import { getLimtedFeaturedMovies } from "../../../actions/moviesActions";

class ContactUs extends Component {
	componentDidMount() {
		this.props.getLimtedFeaturedMovies();
	}
	render() {
		const { featuredMovies, loading } = this.props.featuredMovies;
		let featuredContent;
		if (featuredMovies == null || loading) {
			featuredContent = (
				<div className="col-md-12 col-12 text-center">
					<Spinner />
				</div>
			);
		} else {
			if (featuredMovies.length > 0) {
				featuredContent = featuredMovies.map((movie, index) => (
					<div className="col-md-2 col-4 padding-zero" key={index}>
						<FeaturedItem movie={movie} from="featured" />
					</div>
				));
			} else {
				featuredContent = (
					<div className="col-md-12 col-12 text-center">
						<h4 className="text-warning">No Movie Found...</h4>
					</div>
				);
			}
		}

		return (
			<div className="ContactUs">
				<main className="container text-white" role="main">
					<div className="row">
						<div className="col-md-8 blog-main">
							<h4 className="pb-4 mb-4 font-italic border-bottom">
								Contact Us
							</h4>
							<div className="blog-post">
								<p style={{ color: "red" }}>Read This First!</p>
								<p>
									If Our site gave you a virus or crashed your computer, it
									didn’t. Our site has no malicious software of any kind. We
									simply link to sites that host the videos, and we have no
									control over the ads they put on. If you have the basic
									Antivirus protection, you’re gonna be fine.
								</p>
								<p>
									For Queries, Suggestions, Advertising or Complaints, feel free
									to <a href="mailto:moviez4u@gmail.com">Email US</a>
								</p>
							</div>

							<h4 className="pb-4 mb-4 font-italic border-bottom">
								Featured Movies
							</h4>
							<div className="blog-post">
								<div className="row">{featuredContent}</div>
							</div>
						</div>
						<aside className="col-md-4 blog-sidebar">
							<SidePanel />
						</aside>
					</div>
				</main>
			</div>
		);
	}
}

ContactUs.propTypes = {
	getLimtedFeaturedMovies: PropTypes.func.isRequired,
	featuredMovies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	featuredMovies: state.movies
});

export default connect(
	mapStateToProps,
	{ getLimtedFeaturedMovies }
)(ContactUs);
