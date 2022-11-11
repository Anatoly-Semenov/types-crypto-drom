// File with base types

export interface AnyObject {
	[key: string]: any
}

export interface Meta {
	page_size: number
	total_items: number
	total_pages: number
	current_page: number
}

export interface ResponseList<T> {
	data: T[]
	meta: Meta
}

export enum SortOrder {
	DESC = "DESC",
	ASC = "ASC"
}
