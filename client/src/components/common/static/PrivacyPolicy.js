import React, { Component } from "react";
import SidePanel from "../SidePanel";
import Spinner from "../Spinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FeaturedItem from "../FeaturedItem";
import { getLimtedFeaturedMovies } from "../../../actions/moviesActions";

class PrivacyPolicy extends Component {
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
			<div className="PrivacyPolicy">
				<main className="container text-white" role="main">
					<div className="row">
						<div className="col-md-8 blog-main">
							<h4 className="pb-4 mb-4 font-italic border-bottom">
								Privacy Policy
							</h4>
							<div className="blog-post">
								<p>
									Please read the following terms and conditions carefully and
									pay attention to the fact that by entering this site you
									completely agree to its terms and conditions. UWatchFree site
									reserves the right to change these terms and conditions
									without any prior notice. To get the changes check this policy
									on a regular base.
								</p>
								<p>
									This Site (Moviez4u) shall have no responsibilities or
									liabilities for the content, data, opinions, statements and
									links this site contains.
								</p>
								<p>
									YOU HEREBY FURTHER AFFIRM AND WARRANT THAT YOU ARE CURRENTLY
									OVER THE AGE OF EIGHTEEN (18) YEARS (TWENTYONE (21) IN PLACES
									WHERE EIGHTEEN (18) YEARS IS NOT THE AGE OF MAJORITY) AND ARE
									CAPABLE OF LAWFULLY ENTERING INTO AND EXECUTING THE TERMS OF
									THIS AGREEMENT.
								</p>
								<p>Moviez4u uses the right of “Free Speech”.</p>
								<p>
									This site (Moviez4u) works in accordance with copyright law.
									Persons who reproduce or distribute any works without a
									copyright owner’s consent, may be in violation of this law.
								</p>
								<p>
									If you have any questions please feel free to{" "}
									<a href="mailto:moviez4u@gmail.com">Contact US</a>.
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

PrivacyPolicy.propTypes = {
	getLimtedFeaturedMovies: PropTypes.func.isRequired,
	featuredMovies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	featuredMovies: state.movies
});

export default connect(
	mapStateToProps,
	{ getLimtedFeaturedMovies }
)(PrivacyPolicy);
