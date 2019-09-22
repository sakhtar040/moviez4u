import React, { Component } from "react";

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ""
		};

		this.onChangeSearchText = this.onChangeSearchText.bind(this);
	}

	onChangeSearchText = ev => {
		this.setState({ query: ev.target.value });
	};

	render() {
		return (
			<div className="SearchBar">
				<div className="row flex-nowrap justify-content-between align-items-center">
					<div className="col-12 text-center">
						<form action="/search" method="GET">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Search Movies & TvSeries Here"
									name="query"
									onChange={this.onChangeSearchText}
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<button
											className="btn btn-secondary p-0 pl-2 pr-2"
											style={{ fontSize: "14px" }}
											disabled={!this.state.query}
										>
											<i className="fa fa-search" /> search
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
