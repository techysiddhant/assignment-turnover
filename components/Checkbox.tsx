export interface CheckboxProps {
	disabled?: boolean;
	checked?: boolean;
	id: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = (props: CheckboxProps) => {
	return (
		<div className="w-full flex gap-3 items-center ">
			<input
				className="
        peer relative shrink-0 appearance-none w-6 h-6 border-2 border-[#CCCCCC] rounded mt-1 bg-[#CCCCCC]
        focus:outline-none focus:ring-offset-0 
        checked:bg-black checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400 cursor-pointer
      "
				type="checkbox"
				value={props.label}
				checked={props.checked}
				// onChange={props.onChange}
				{...props}
			/>
			<svg
				className="absolute w-6 h-6 pointer-events-none hidden peer-checked:block stroke-white mt-1 p-[1px] outline-none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="20 6 9 17 4 12"></polyline>
			</svg>
			<label
				htmlFor={props.id}
				className="text-black text-lg pt-1 font-normal"
			>
				{props.label}
			</label>
		</div>
	);
};

export default Checkbox;
