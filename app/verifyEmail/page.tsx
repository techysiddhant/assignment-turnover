"use client";
import Button from "@/components/Button";
import OtpInput from "../_components/OtpInput";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { usePathname, useSearchParams } from "next/navigation";
const VerifyEmail = () => {
	const [otp, setOtp] = useState<string | null>(null);
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get("email");
	useEffect(() => {
		if (!email) {
			router.push("/login");
		}
	}, [email]);
	const onOtpSubmit = (otp: string) => {
		setOtp(otp);
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!otp) {
			alert("Enter a valid OTP");
			return;
		}
		try {
			const res = await axios.post("/api/verifyEmail", { otp });
			if (res.status == 200 && res.data.success) {
				setOtp("");
				router.push("/category");
			}
		} catch (error: any) {
			console.error(error.message);
		}
	};

	return (
		<div className="flex items-center justify-center my-10">
			<div className="border border-[#c1c1c1] rounded-2xl w-[500px]  py-8 px-12">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Verify your email
				</h2>
				<p className="text-center font-normal text-[14px]">
					Enter the 8 digit code you have received on{" "}
					<span className="block font-medium">{email}</span>
				</p>
				<form onSubmit={onSubmit}>
					<div className=" my-6">
						<span className="font-normal text-[16px] ml-1">Code</span>
						<OtpInput
							length={8}
							onOtpSubmit={(otp) => onOtpSubmit(otp)}
						/>
					</div>
					<Button
						type="submit"
						text={"Verify"}
					/>
				</form>
			</div>
		</div>
	);
};

export default VerifyEmail;
