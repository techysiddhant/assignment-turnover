import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}
const Button = (props: ButtonProps) => {
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
