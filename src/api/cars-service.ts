export namespace CarsService {
	export interface Car {
		id: number
		brand: Brand
		model: Model
		year: number
		hp: number
		color: Color
		price_rub: number | null
		img_preview: string
		created_at: string // Date
		updated_at: string // Date
	}

	export interface CarCreate {
		brandId: number
		modelId: number
		colorId: number
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
