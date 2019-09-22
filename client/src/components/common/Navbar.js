import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import SearchBar from "./search/SearchBar";

export class Navbar extends Component {
	render() {
		return (
			<div className="mb-3">
				<header className="blog-header py-3">
					<div className="row flex-nowrap justify-content-between align-items-center">
						<div className="col-12 text-center">
							<Link className="blog-header-logo text-dark" to="/">
								<img src={logo} alt="Logo | Moviez4u" height="40" />
							</Link>
						</div>
					</div>
				</header>

				<div className="nav-scroller py-1 mb-2">
					<nav className="nav d-flex justify-content-between">
						<Link className="p-2" to="/category/hollywood">
							Hollywood
						</Link>
						<Link className="p-2" to="/category/bollywood">
							Bollywood
						</Link>
						<Link className="p-2" to="/category/tvseries">
							TvSeries
						</Link>
						<Link className="p-2" to="/category/featured">
							Featured
						</Link>
						<Link className="p-2" to="/genres">
							Genre
						</Link>
						<Link className="p-2" to="/category/dubbed">
							Dubbed
						</Link>
						<Link className="p-2" to="/movie-request">
							Movie Request
						</Link>
					</nav>
				</div>

				<SearchBar />
			</div>
		);
	}
}

export default Navbar;
