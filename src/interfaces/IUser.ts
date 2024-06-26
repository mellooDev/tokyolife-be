export interface IUser {
	_id?: string
	firstname: string
	lastname: string
	email: string
	password: string
	phone_number: string
	date_of_birth: Date
	avatar: string
	username: string
	gender: string
	status: number
	role: string
	passwordChangedAt: Date
	passwordResetToken: string
	passwordResetExpires: string
	createdAt: Date
	updatedAt: Date
}
