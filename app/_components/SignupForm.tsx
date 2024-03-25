"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignupForm = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const router = useRouter();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(name, email, password);
		if (!name || !email || !password) {
			alert("Enter the Required information");
			return;
		}
		try {
			const res = await axios.post("/api/signup", { name, email, password });
			if (res.data.success) {
				setEmail("");
				setName("");
				setPassword("");
				router.push("/verifyEmail");
			}
		} catch (error) {
			console.log(error);
			alert("User already Exists");
		}
	};
	return (
		<form
			onSubmit={onSubmit}
			className="flex flex-col gap-6 mt-4"
		>
			<InputField
				label="Name"
				placeholder="Enter"
				error="Invalid email format"
				type="text"
				required
				value={name}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setName(e.target.value)
				}
			/>
			<InputField
				label="Email"
				placeholder="Enter"
				error="Invalid email format"
				type="email"
				value={email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(e.target.value)
				}
				required
			/>
			<InputField
				label="Password"
				placeholder="Enter"
				error="Invalid email format"
				type="password"
				value={password}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setPassword(e.target.value)
				}
				required
			/>
			<div className="my-2">
				<Button
					type="submit"
					text="create account"
				/>
			</div>
			<p className="text-center text-[16px]">
				Have an Account?{" "}
				<Link
					href="/login"
					className="font-medium  uppercase"
				>
					LOGIN
				</Link>
			</p>
		</form>
	);
};

export default SignupForm;
