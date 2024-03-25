import { NextRequest, NextResponse } from "next/server";
export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	const isPublicPath = path === "/login" || path === "/";
	const token = request.cookies.get("token")?.value || "";
	if (isPublicPath && token) {
		return NextResponse.redirect(new URL(`${path}`, request.nextUrl));
	}
	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}
}
export const config = {
	matcher: ["/", "/login", "/category", "/verifyEmail"],
};
