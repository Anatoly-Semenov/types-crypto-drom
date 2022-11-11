import { SortOrder } from "../base"

export namespace CarsService {
	export interface Car {
		id: number
		brand: Brand
		model: Model
		color: Color
		year: number
		hp: number
		price_rub: number | null
		img_preview: string
		created_at: string // Date
		updated_at: string // Date
	}

	export interface CarsListQuery {
		filter: CarsListFilter
		sort: CarsListSorter
		limit: number
		page: number
	}

	export interface CarsListFilter {
		readonly brand_id?: number
		readonly model_id?: number
		readonly color_ids?: string
		readonly price_rub_from?: number
		readonly price_rub_to?: number
		readonly year_from?: number
		readonly year_to?: number
	}

	export interface CarsListSorter {
		readonly year?: SortOrder
		readonly price_rub?: SortOrder
	}

	export interface CarCreate {
		brand_id: number
		model_id: number
		color_id: number
		year: number
		hp: number
		price_rub: number | null
		img_preview: string
	}

	export interface Color {
		id: number
		name: string
		hex: string
	}

	export interface Brand {
		id: number
		name: string
		updated_at: string // Date
		created_at: string // Date
	}

	export interface Model {
		id: number
		name: string
		updated_at: string // Date
		created_at: string // Date
	}
}
