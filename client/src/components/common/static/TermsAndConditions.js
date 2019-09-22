import React, { Component } from "react";
import SidePanel from "../SidePanel";
import Spinner from "../Spinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FeaturedItem from "../FeaturedItem";
import { getLimtedFeaturedMovies } from "../../../actions/moviesActions";

class TermsAndConditions extends Component {
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
			<div className="Terms">
				<main className="container text-white" role="main">
					<div className="row">
						<div className="col-md-8 blog-main">
							<h4 className="pb-4 mb-4 font-italic border-bottom">
								Terms & Conditions
							</h4>
							<div className="blog-post">
								<p>
									Using Moviez4u
									<br />
									When you enter Moviez4u you automatically agree to all our
									rules and regulations!
								</p>
								<p>
									Hosting and Legal Issues
									<br />
									Moviez4u is not hosting or uploading any copyrighted content
									or media of any kind, we only store links to third-party
									websites that carry their own legal responsibility for their
									content. If you want to remove content from these websites,
									please contact these media hosts directly.
								</p>
								<p>
									Responsibilities
									<br />
									Moviez4u is not responsible for anything that might happen on
									third-party websites. We are not responsible for the accuracy,
									compliance, copyright, legality, decency, or any other aspect
									of the content of other linked sites. Please, be careful when
									you install, download or submit any personal or CC
									information!
								</p>
								<p>
									Moviez4u holds no responsibility for any legal or copyright
									issues that may occur due to the use of Moviez4u. Please check
									local copyright laws or the rules of your provider to avoid
									legal problems.
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

TermsAndConditions.propTypes = {
	getLimtedFeaturedMovies: PropTypes.func.isRequired,
	featuredMovies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	featuredMovies: state.movies
});

export default connect(
	mapStateToProps,
	{ getLimtedFeaturedMovies }
)(TermsAndConditions);
