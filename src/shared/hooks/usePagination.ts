const DOTS = 'DOTS' as const;

type PaginationItem = number | typeof DOTS;

interface Props {
	totalPages: number;
	page: number;
	siblingCount?: number;
}

export const usePagination = ({
	totalPages,
	page,
	siblingCount = 2,
}: Props): PaginationItem[] => {
	const totalNumbers = siblingCount * 2 + 5;

	if (totalPages <= totalNumbers) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	const leftSiblingIndex = Math.max(page - siblingCount, 2);
	const rightSiblingIndex = Math.min(
		page + siblingCount,
		totalPages - 1
	);

	const shouldShowLeftDots = leftSiblingIndex > 2;
	const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

	if (!shouldShowLeftDots && shouldShowRightDots) {
		const leftRange = Array.from(
			{ length: siblingCount * 2 + 3 },
			(_, i) => i + 1
		);

		return [...leftRange, DOTS, totalPages];
	}

	if (shouldShowLeftDots && !shouldShowRightDots) {
		const rightRange = Array.from(
			{ length: siblingCount * 2 + 3 },
			(_, i) => totalPages - (siblingCount * 2 + 2) + i
		);

		return [1, DOTS, ...rightRange];
	}

	const middleRange = Array.from(
		{ length: rightSiblingIndex - leftSiblingIndex + 1 },
		(_, i) => leftSiblingIndex + i
	);

	return [1, DOTS, ...middleRange, DOTS, totalPages];
};

export { DOTS };
