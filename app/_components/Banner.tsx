import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
const Banner = () => {
	return (
		<div className="bg-[#F4F4F4] py-1 flex items-center justify-center gap-8">
			<TfiAngleLeft />
			<p className="font-medium text-[14px] text-center">
				Get 10% off on business sign up
			</p>
			<TfiAngleRight className="" />
		</div>
	);
};

export default Banner;
