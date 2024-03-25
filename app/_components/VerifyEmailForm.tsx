"use client";
import Button from "@/components/Button";
import OtpInput from "./OtpInput";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";
import { getSignedEmail } from "@/lib/getSignedEmail";
const VerifyEmailForm = () => {
	const [otp, setOtp] = useState<string | null>(null);
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get("email");

	useEffect(() => {
		if (!email) {
			router.push("/login");
		}
	}, [email, router]);
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
		<div>
			<p className="text-center font-normal text-[14px]">
				Enter the 8 digit code you have received on{" "}
				<span className="block font-medium">{getSignedEmail(email!)}</span>
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
	);
};

export default VerifyEmailForm;
