import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { email, password } = reqBody;
		if (!email || !password) {
			return new Response("Username and Password is required", { status: 401 });
		}
		const user = await db.user.findUnique({
			where: {
				email: email,
			},
		});
		if (!user) return new Response("User does not exist", { status: 400 });

		const validPassword = await bcryptjs.compare(password, user.password);
		if (!validPassword)
			return NextResponse.json(
				{ error: "Invalid email or password" },
				{ status: 400 }
			);
		// const userWithoutPassword = exclude(user, ["password"]);
		//create token data
		const tokenData = {
			id: user.id,
			email: user.email,
			verified: user.isVerified,
		};
		// create token
		const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: "1d",
		});
		const response = NextResponse.json({
			message: "Login successful",
			success: true,
			user: {
				...tokenData,
			},
		});
		response.cookies.set("token", token, { httpOnly: true });
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
