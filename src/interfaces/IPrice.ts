export interface IPriceValue {
	key: string
	value: string
	price: number
}

export interface IPrice {
	_id?: string
	product_id: string
	values: IPriceValue[]
}
