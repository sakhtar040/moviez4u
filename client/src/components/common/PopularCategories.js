import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PopularCategories extends Component {
	render() {
		const genre = [
			"action",
			"adventure",
			"comedy",
			"history",
			"horror",
			"mystery",
			"romance",
			"thriller"
		];

		let genreContent = genre.map((item, index) => (
			<Link
				key={index}
				to={`/genre/${item}`}
				className="btn btn-secondary m-1 p-1"
			>
				{item.toUpperCase()}
			</Link>
		));
		return (
			<div className="PopularCategories">
				<h5>Popular Categories</h5>
				{genreContent}
			</div>
		);
	}
}

export default PopularCategories;
