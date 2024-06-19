import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { config } from './config'

dotenv.config({path: '../.env'})

const connectDB = async () => {
	try {
		await mongoose.connect(config.mongodb_uri)
		console.log('mongodb is connected')
	} catch (error) {
		console.error('mongodb connection error: ', error)
		process.exit(1)
	}
}

export default connectDB
