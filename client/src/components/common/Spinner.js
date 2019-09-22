import React from "react";
import spinner from "../../assets/loader3.gif";

const Spinner = () => {
	return (
		<div className="Spinner">
			<img
				src={spinner}
				style={{ width: "30px", margin: "auto", display: "block" }}
				alt="Loading..."
			/>
		</div>
	);
};

export default Spinner;
