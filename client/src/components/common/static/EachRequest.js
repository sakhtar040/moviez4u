import React, { Component } from "react";
import Moment from "react-moment";

export class EachRequest extends Component {
	render() {
		const { avatar, comment, date, name } = this.props.request;
		return (
			<div className="EachRequest mb-1">
				<div className="row">
					<div className="col-1 float-left">
						<img src={avatar} alt={name} height="30" />
					</div>
					<div className="col-11 float-right">
						<h5>
							{name}{" "}
							<span className="float-right" style={{ fontSize: "13px" }}>
								<Moment format="DD/MM/YYYY">{date}</Moment>
							</span>
						</h5>
						<p>{comment}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default EachRequest;
