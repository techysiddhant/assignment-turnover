"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Checkbox from "@/components/Checkbox";
interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	isVerified: string;
}
interface Category {
	id: string;
	name: string;
	user: [User];
}
const CategoryForm = () => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState<number>(1);
	const [categoryLength, setCategoryLength] = useState();
	const handleapi = async () => {
		const res = await axios.get(`/api/categories?page=${page}&limit=6`);
		setData(res.data.categories);
		setCategoryLength(res.data.metaData.totalPages);
	};
	const updateCategory = async (categoryId: string) => {
		try {
			const res = await axios.patch(`/api/categories?page=${page}&limit=6`, {
				categoryId,
			});
			if (res.status === 200) {
				setData(res.data.categories);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const removeCategory = async (categoryId: string) => {
		try {
			const res = await axios.put(`/api/categories?page=${page}&limit=6`, {
				categoryId,
			});
			if (res.status === 200) {
				setData(res.data.categories);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleChange = async (
		e: React.ChangeEvent<HTMLInputElement>,
		id: string
	) => {
		if (e.target.checked) {
			updateCategory(id);
		} else {
			removeCategory(id);
		}
	};

	useEffect(() => {
		handleapi();
	}, [page]);
	return (
		<div>
			<div className="space-y-4 my-6">
				{data.length > 0 &&
					data.map((category: Category) => (
						<Checkbox
							id={category.id}
							label={category.name}
							key={category.id}
							checked={category.user.length === 1 ? true : false}
							onChange={(e) => handleChange(e, category.id)}
						/>
					))}
			</div>
			<Pagination
				currentPage={page}
				total={100}
				limit={6}
				onPageChange={(page) => setPage(page)}
			/>
		</div>
	);
};

export default CategoryForm;
