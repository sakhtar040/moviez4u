import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/landing/Home";
import Hollywood from "./components/landing/Hollywood";
import Bollywood from "./components/landing/Bollywood";
import Dubbed from "./components/landing/Dubbed";
import TvSeries from "./components/landing/TvSeries";
import Featured from "./components/landing/Featured";
import Genres from "./components/landing/Genres";
import Genre from "./components/landing/Genre";
import Year from "./components/landing/Year";
import MovieRequest from "./components/landing/MovieRequest";
import ContactUs from "./components/common/static/ContactUs";
import PrivacyPolicy from "./components/common/static/PrivacyPolicy";
import TermsAndConditions from "./components/common/static/TermsAndConditions";
import Play from "./components/common/Play";
import Search from "./components/common/search/Search";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App bg-dark">
					<div className="container">
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/category/hollywood" component={Hollywood} />
							<Route exact path="/category/bollywood" component={Bollywood} />
							<Route exact path="/category/dubbed" component={Dubbed} />
							<Route exact path="/category/tvseries" component={TvSeries} />
							<Route exact path="/category/featured" component={Featured} />
							<Route exact path="/genres" component={Genres} />
							<Route exact path="/genre/:type" component={Genre} />
							<Route exact path="/year/:type" component={Year} />
							<Route exact path="/watch/:slug" component={Play} />
							<Route exact path="/movie-request" component={MovieRequest} />
							<Route exact path="/contact-us" component={ContactUs} />
							<Route exact path="/privacy-policy" component={PrivacyPolicy} />
							<Route
								exact
								path="/terms-and-conditions"
								component={TermsAndConditions}
							/>
							<Route exact path="/search" component={Search} />
						</Switch>
						<Footer />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
