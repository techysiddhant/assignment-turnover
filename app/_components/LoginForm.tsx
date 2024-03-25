"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const router = useRouter();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!email || !password) {
			alert("Enter the Required information");
			return;
		}
		try {
			const res = await axios.post("/api/login", { email, password });
			if (res.status == 200) {
				setEmail("");
				setPassword("");
				if (res.data.user.verified) {
					router.push("/category");
				} else {
					router.push(`/verifyEmail?email=${res.data.user.email}`);
				}
			} else {
				alert("Something Went Wrong Try Again!");
			}
		} catch (error) {
			console.log(error);
			alert("User not found!");
		}
	};
	return (
		<form
			onSubmit={onSubmit}
			className="flex flex-col gap-6 mt-4"
		>
			<InputField
				label="Email"
				placeholder="Enter"
				error="Invalid email format"
				type="email"
				required
				value={email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(e.target.value)
				}
			/>
			<InputField
				label="Password"
				placeholder="Enter"
				error="Invalid email format"
				type="password"
				required
				value={password}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setPassword(e.target.value)
				}
			/>
			<div className="my-2">
				<Button
					type="submit"
					text="Login"
				/>
			</div>
			<div className="w-full h-[1.5px] bg-[#c1c1c1]"></div>
			<p className="text-center text-[16px]">
				Don&apos;t have an Account?{" "}
				<Link
					href="/"
					className="font-medium  uppercase"
				>
					SIGN UP
				</Link>
			</p>
		</form>
	);
};

export default LoginForm;
