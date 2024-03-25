import CategoryForm from "../_components/CategoryForm";

const Category = () => {
	return (
		<div className="flex items-center justify-center my-10">
			<div className="border border-[#c1c1c1] rounded-2xl w-[500px]  py-8 px-12">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Please mark your interests!
				</h2>
				<p className="text-center font-normal text-[16px]">
					We will keep you notified.
				</p>
				<p className="font-medium text-[16px] mt-6 mb-2">My saved interests!</p>
				<CategoryForm />
			</div>
		</div>
	);
};

export default Category;
