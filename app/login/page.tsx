import LoginForm from "../_components/LoginForm";

const Login = () => {
	return (
		<div className="flex items-center justify-center my-10">
			<div className="border border-[#c1c1c1] rounded-2xl w-[500px]  py-8 px-12">
				<h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
				<p className="text-center font-medium text-[20px]">
					Welcome back to ECOMMERCE
				</p>
				<p className="text-center text-[16px] my-2">
					The next gen business marketplace
				</p>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
