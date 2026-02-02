export interface ApiResponse<T> {
	page: number;
	total: number;
	limit: number;
	data: T[];
}