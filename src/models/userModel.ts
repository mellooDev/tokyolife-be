import { Schema, model, Types } from 'mongoose'
import { IUser } from '~/interfaces/IUser'

const userSchema = new Schema<IUser>(
	{
		firstname: {
			type: String,
			required: true
		},
		lastname: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		phone_number: {
			type: String,
			required: true,
			unique: true
		},
		date_of_birth: {
			type: Date,
			required: true
		},
		avatar: {
			type: String
		},
		username: {
			type: String
		},
		gender: {
			type: String,
			required: true
		},
		status: {
			type: Number
		},
		role: {
			type: String,
			default: 'user'
		},
		passwordChangedAt: {
			type: Date
		},
		passwordResetToken: {
			type: String
		},
		passwordResetExpires: {
			type: String
		}
	},
	{
		timestamps: true
	}
)

export const User = model<IUser>('User', userSchema)
