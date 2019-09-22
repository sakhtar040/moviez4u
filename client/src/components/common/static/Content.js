import React from "react";

const HollywoodContent = props => {
	const { title, details } = props;
	return (
		<div className="HollywoodContent">
			<div className="row mb-2 text-white">
				<div className="card bg-dark p-2">
					<p className="m-0">
						{title !== "Tv-Series" ? `${title} Movies` : title}
					</p>
					<p className="m-0">{details}</p>
				</div>
			</div>
		</div>
	);
};

export default HollywoodContent;
