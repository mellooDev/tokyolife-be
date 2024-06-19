import { ICategory } from './ICategory'

export interface ISpec {
	key: string
	value: string | number
	unit?: string
}

export interface IProduct {
	_id?: string
	product_name: string
	description: string
	category: ICategory
	release_date: Date
	sold?: number
	specs: ISpec[]
	images: string[]
	tags: string[]
	created_at?: Date
	updated_at?: Date
}
