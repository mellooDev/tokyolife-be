import { Schema, model, Types } from 'mongoose'
import { ICart } from '../interfaces/ICart'

const cartItemSchema = new Schema({
	product: {
		type: Types.ObjectId,
		ref: 'Product',
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	total: {
		type: Number,
		required: true
	}
})

const cartSchema = new Schema<ICart>(
	{
		orderBy: {
			type: Types.ObjectId,
			ref: 'User',
			required: true
		},
		items: [cartItemSchema],
		cartTotal: {
			type: Number,
			required: true
		}
	},
	{
		timestamps: true
	}
)

export const Cart = model<ICart>('Cart', cartSchema)
