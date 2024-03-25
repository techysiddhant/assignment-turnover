import { navLinks } from "@/constants/data";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
	return (
		<header className="w-full py-4 px-8">
			<div className="text-[#333333] text-[12px] font-medium flex justify-end items-center gap-4 mb-2">
				<span>Help</span>
				<span>Orders & Returns</span>
				<span>Hi, John</span>
			</div>
			<nav className="flex justify-between items-center my-1">
				<h1 className="uppercase font-bold text-2xl">Ecommerce</h1>
				<div className="flex gap-4 items-center text-black font-semibold">
					{navLinks.map((item) => (
						<Link
							href={item.link}
							key={item.name}
						>
							{item.name}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-8">
					<IoIosSearch size={24} />
					<IoCartOutline size={24} />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
