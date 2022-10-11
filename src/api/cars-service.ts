export namespace CarsService {
	export interface Car {
		id: number
		brand: string
		model: string
		year: number
		hp: number
		color: string
		price_rub: null | number
		img_preview: string
		updatedAt: string
		createdAt: string
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
}
