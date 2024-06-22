import { Types } from 'mongoose'

export interface ICartItem {
	product: Types.ObjectId
	quantity: number
	total: number
}

export interface ICart {
	_id: Types.ObjectId
	orderBy?: Types.ObjectId
	items: ICartItem[]
	cartTotal: number
	createdAt?: Date
	updatedAt?: Date
}
