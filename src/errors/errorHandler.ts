import { Request, Response, NextFunction } from 'express'

export const errorHandler = (req: Request, res: Response, err: Error, next: NextFunction) => {
	console.error('Lỗi: ', err)
	res.status(500).json({ error: 'Lỗi máy chủ' })
}
