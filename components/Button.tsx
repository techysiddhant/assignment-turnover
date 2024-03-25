import React from "react";

const Button = (props) => {
	return (
		<button
			{...props}
			className="w-full bg-black rounded-md py-3 uppercase text-white tracking-wider"
		>
			{props.text}
		</button>
	);
};

export default Button;
