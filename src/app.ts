import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database'
import cors from 'cors'
import bodyParser = require('body-parser')

dotenv.config({ path: '../.env' })
const app = express()

app.use(express.json())

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
connectDB()

export default app
