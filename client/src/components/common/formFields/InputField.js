import React, { Component } from "react";

export class InputField extends Component {
	render() {
		const { label, type, placeholder, name, onChange, value } = this.props;
		return (
			<div className="inputField">
				<div className="form-group">
					<label>{label}</label>
					<input
						type={type}
						className="form-control"
						placeholder={placeholder}
						name={name}
						value={value}
						onChange={onChange}
					/>
				</div>
			</div>
		);
	}
}

export default InputField;
