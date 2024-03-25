"use client";
const range = (start, end) => {
	return [...Array(end - start).keys()].map((el) => el + start);
};
const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
	const ceiling = Math.ceil(pagesCutCount / 2);
	const floor = Math.floor(pagesCutCount / 2);
	if (pagesCount < pagesCutCount) {
		return { start: 1, end: pagesCount + 1 };
	} else if (currentPage >= 1 && currentPage <= ceiling) {
		return { start: 1, end: pagesCutCount + 1 };
	} else if (currentPage + floor >= pagesCount) {
		return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
	} else {
		return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
	}
};
const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }) => {
	return (
		<li
			className={` cursor-pointer text-lg font-semibold ${
				isDisabled && "text-slate-200"
			} ${page === currentPage ? "text-black" : "text-[#ACACAC]"}`}
			onClick={() => onPageChange(page)}
		>
			<span className="page-link">{page}</span>
		</li>
	);
};
const Pagination = ({ currentPage, total, limit, onPageChange }) => {
	const pagesCount = Math.ceil(total / limit);
	const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 7, currentPage });
	const pages = range(pagesCut.start, pagesCut.end);
	// console.log(pagesCount);
	// console.log(pagesCut);
	// console.log(pages.length);
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === pagesCount;
	return (
		<ul className="flex gap-3 mt-12 mb-6">
			<PaginationItem
				page="&lt;&lt;"
				currentPage={currentPage}
				onPageChange={() => onPageChange(1)}
				isDisabled={isFirstPage}
			/>
			<PaginationItem
				page="&lt;"
				currentPage={currentPage}
				onPageChange={() =>
					onPageChange((prev: number) => (prev === 1 ? 1 : currentPage - 1))
				}
				isDisabled={isFirstPage}
			/>
			{pages.map((page) => (
				<PaginationItem
					page={page}
					key={page}
					currentPage={currentPage}
					onPageChange={onPageChange}
				/>
			))}
			<PaginationItem
				page="&gt;"
				currentPage={currentPage}
				onPageChange={() =>
					onPageChange((prev: number) =>
						prev === pagesCount ? pagesCount : prev + 1
					)
				}
				isDisabled={isLastPage}
			/>
			<PaginationItem
				page="&gt;&gt;"
				currentPage={currentPage}
				onPageChange={() => onPageChange(pagesCount)}
				isDisabled={isLastPage}
			/>
		</ul>
	);
};

export default Pagination;
