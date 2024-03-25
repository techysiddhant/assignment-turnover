"use client";

import { useState } from "react";

const InputField = ({ label, placeholder, error, ...otherProps }: any) => {
	const [value, setValue] = useState("");

	const handleChange = (event: any) => {
		setValue(event.target.value);
	};
	return (
		<div className="input-container">
			<label
				className="block text-black font-normal text-[16px] mb-1"
				htmlFor={otherProps.id}
			>
				{label}
			</label>
			<input
				type="text"
				id={otherProps.id}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				{...otherProps}
				className="px-4 py-2 w-full rounded border border-[#c1c1c1]"
			/>
			{/* {error && <div className="error-message">{error}</div>} */}
		</div>
	);
};

export default InputField;
