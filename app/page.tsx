import SignupForm from "./_components/SignupForm";

export default function Home() {
	return (
		<div className="flex items-center justify-center my-10">
			<div className="border border-[#c1c1c1] rounded-2xl w-[476px]  py-8 px-12">
				<h2 className="text-2xl font-semibold text-center">Create your account</h2>
				<SignupForm />
			</div>
		</div>
	);
}
