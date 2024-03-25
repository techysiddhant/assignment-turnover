import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getDataFromToken } from "@/lib/getDataFromToken";

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { otp } = reqBody;
		const token = req.cookies.get("token")?.value || "";
		if (!otp) {
			return new Response("Otp is required", {
				status: 401,
			});
		}
		if (!token) {
			return new Response("Unauthorized", {
				status: 401,
			});
		}
		//verifytoken

		const decodedToken = await getDataFromToken(req);
		console.log(decodedToken);
		if (otp == 12345678) {
			const user = await db.user.update({
				where: {
					email: String(decodedToken.email),
				},
				data: {
					isVerified: true,
				},
			});
		}

		return NextResponse.json({ message: "Email verified", success: true });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
