import React, { Component } from "react";
import InputFiled from "../formFields/InputField";
import TextAreaField from "../formFields/TextAreaField";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { requestMovie } from "../../../actions/movieRequestActions";

export class MovieRequestForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			desc: ""
		};

		this.onChangeInput = this.onChangeInput.bind(this);
		this.onSubmitRequest = this.onSubmitRequest.bind(this);
	}

	onChangeInput = ev => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	onSubmitRequest = ev => {
		ev.preventDefault();
		const { name, email, desc } = this.state;
		const requestPayload = {
			name: name,
			email: email,
			desc: desc
		};

		this.props.requestMovie(requestPayload);
		this.setState({ name: "", email: "", desc: "" });
	};

	render() {
		return (
			<div className="MovieRequestForm">
				<div className="blog-post">
					<p>
						Leave a Request
						<br />
						Your email address will not be published. Required fields are marked{" "}
						<sup style={{ color: "red" }}>*</sup>
					</p>
					<form method="post" onSubmit={this.onSubmitRequest}>
						<InputFiled
							label="Name"
							type="text"
							placeholder="Enter name here"
							name="name"
							value={this.state.name}
							onChange={this.onChangeInput}
						/>
						<InputFiled
							label="Email"
							type="email"
							placeholder="Enter email here"
							name="email"
							value={this.state.email}
							onChange={this.onChangeInput}
						/>
						<TextAreaField
							label="Description"
							name="desc"
							value={this.state.desc}
							placeholder="Enter movie name here"
							onChange={this.onChangeInput}
						/>
						<input
							type="submit"
							value="Post Request"
							className="btn btn-secondary"
						/>
					</form>
				</div>
			</div>
		);
	}
}

MovieRequestForm.propTypes = {
	requestMovie: PropTypes.func.isRequired
};

export default connect(
	null,
	{ requestMovie }
)(MovieRequestForm);
