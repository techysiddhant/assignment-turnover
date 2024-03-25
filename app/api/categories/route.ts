import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getDataFromToken } from "@/lib/getDataFromToken";

export async function GET(req: NextRequest) {
	try {
		const decodedToken = await getDataFromToken(req);
		if (!decodedToken) {
			return new Response("Unauthorized", {
				status: 404,
			});
		}
		const searchParams = req.nextUrl.searchParams;
		let page = Number(searchParams.get("page")) || 1;
		let limit = Number(searchParams.get("limit")) || 1;
		if (page <= 0) {
			page = 1;
		}
		if (limit <= 0 || limit >= 6) {
			limit = 6;
		}
		const skip = (page - 1) * limit;
		const categories = await db.category.findMany({
			take: limit,
			skip: skip,
			include: {
				user: {
					where: {
						id: decodedToken.id,
					},
					select: {
						name: true,
						id: true,
					},
				},
			},
		});
		const totalCategory = await db.category.count();
		const totalPages = Math.ceil(totalCategory / limit);
		return NextResponse.json({
			categories,
			metaData: { totalPages, currentPage: page, currentLimit: limit },
		});
	} catch (error) {
		console.log(error);
	}
}

export async function PATCH(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { categoryId } = reqBody;
		const decodedToken = await getDataFromToken(req);
		if (!decodedToken) {
			return new Response("Unauthorized", {
				status: 404,
			});
		}
		const searchParams = req.nextUrl.searchParams;
		let page = Number(searchParams.get("page")) || 1;
		let limit = Number(searchParams.get("limit")) || 1;
		if (page <= 0) {
			page = 1;
		}
		if (limit <= 0 || limit >= 6) {
			limit = 6;
		}
		const skip = (page - 1) * limit;
		const category = await db.category.update({
			where: {
				id: categoryId,
			},
			data: {
				user: {
					connect: { id: decodedToken.id },
				},
			},
		});
		const categories = await db.category.findMany({
			take: limit,
			skip: skip,
			include: {
				user: {
					where: {
						id: decodedToken.id,
					},
					select: {
						name: true,
						id: true,
					},
				},
			},
		});
		const totalCategory = await db.category.count();
		const totalPages = Math.ceil(totalCategory / limit);
		return NextResponse.json({
			categories,
			metaData: { totalPages, currentPage: page, currentLimit: limit },
		});
	} catch (error) {
		console.log(error);
	}
}
export async function PUT(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { categoryId } = reqBody;
		const decodedToken = await getDataFromToken(req);
		if (!decodedToken) {
			return new Response("Unauthorized", {
				status: 404,
			});
		}
		const searchParams = req.nextUrl.searchParams;
		let page = Number(searchParams.get("page")) || 1;
		let limit = Number(searchParams.get("limit")) || 1;
		if (page <= 0) {
			page = 1;
		}
		if (limit <= 0 || limit >= 6) {
			limit = 6;
		}
		const skip = (page - 1) * limit;
		const category = await db.category.update({
			where: {
				id: categoryId,
			},
			data: {
				user: {
					disconnect: { id: decodedToken.id },
				},
			},
		});
		const categories = await db.category.findMany({
			take: limit,
			skip: skip,
			include: {
				user: {
					where: {
						id: decodedToken.id,
					},
					select: {
						name: true,
						id: true,
					},
				},
			},
		});

		const totalCategory = await db.category.count();
		const totalPages = Math.ceil(totalCategory / limit);
		return NextResponse.json({
			categories,
			metaData: { totalPages, currentPage: page, currentLimit: limit },
		});
	} catch (error) {
		console.log(error);
	}
}
