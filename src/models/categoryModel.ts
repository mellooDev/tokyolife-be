import { Schema, model, Types } from 'mongoose'
import { ICategory } from '~/interfaces/ICategory'

const categorySchema = new Schema<ICategory>(
	{
		category_name: {
			type: String,
			required: true,
			unique: true
		},
		slug: {
			type: String,
			required: true,
			unique: true,
			lowercase: true
		},
		parent: {
			type: Types.ObjectId,
			ref: 'Category',
			default: null
		},
		children: {
			type: Types.ObjectId,
			ref: 'Category'
		}
	},
	{
		timestamps: true
	}
)

export const Category = model<ICategory>('Category', categorySchema)
