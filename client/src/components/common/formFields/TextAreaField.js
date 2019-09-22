import React, { Component } from "react";

export class TextAreaField extends Component {
	render() {
		const { label, name, placeholder, value, onChange } = this.props;
		return (
			<div className="textAreaField">
				<div className="form-group">
					<label htmlFor="">{label}</label>
					<textarea
						name={name}
						placeholder={placeholder}
						className="form-control"
						value={value}
						onChange={onChange}
					/>
				</div>
			</div>
		);
	}
}

export default TextAreaField;
