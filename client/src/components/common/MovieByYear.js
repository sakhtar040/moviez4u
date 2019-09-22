import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieByYear extends Component {
	render() {
		let date = new Date(),
			years = [],
			year = date.getFullYear();
		for (let i = year; i > year - 8; i--) {
			years.push(i);
		}

		let yearsContent = years.map((item, index) => (
			<Link key={index} to={`/year/${item}`} className="btn btn-secondary m-1">
				{item}
			</Link>
		));
		return (
			<div className="MovieByYear">
				<h5>Movies By Years</h5>
				{yearsContent}
			</div>
		);
	}
}

export default MovieByYear;
