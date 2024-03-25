import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { name, email, password } = reqBody;
		if (!name || !email || !password) {
			return new Response("Name, email and Password is required", {
				status: 401,
			});
		}
		const user = await db.user.findUnique({
			where: {
				email: email,
			},
		});
		if (user)
			return NextResponse.json({ error: "User already exists" }, { status: 400 });

		//hash password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const newUser = await db.user.create({
			data: {
				name: name,
				email: email,
				password: hashedPassword,
			},
		});
		//create token data
		const tokenData = {
			id: newUser.id,
			email: newUser.email,
			verified: newUser.isVerified,
		};
		// create token
		const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: "1d",
		});
		const response = NextResponse.json({
			message: "Signup successful",
			success: true,
			user: {
				tokenData,
			},
		});
		response.cookies.set("token", token, { httpOnly: true });
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
