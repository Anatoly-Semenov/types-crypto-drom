export namespace CarsService {
	export interface Car {
		id: number
		brand_id: number
		model_id: number
		year: number
		hp: number
		color_id: number
		price_rub: number
		img_preview: string
		created_at: string // Date
		updated_at: string // Date
	}

	export interface CreateCarDto {
		brand: string
		model: string
		year: number
		hp: number
		color: string
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
		brand_id: number
		updated_at: string // Date
		created_at: string // Date
	}
}
