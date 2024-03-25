import { Suspense } from "react";
import VerifyEmailForm from "../_components/VerifyEmailForm";
const VerifyEmail = () => {
	return (
		<div className="flex items-center justify-center my-10">
			<div className="border border-[#c1c1c1] rounded-2xl w-[500px]  py-8 px-12">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Verify your email
				</h2>
				<Suspense fallback={<h2>Loading...</h2>}>
					<VerifyEmailForm />
				</Suspense>
			</div>
		</div>
	);
};

export default VerifyEmail;
