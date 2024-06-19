import dotenv from 'dotenv'

dotenv.config();

export const config = {
    mongodb_uri: process.env.MONGODB_URI || "mongodb://localhost:27017/tokyolife"
}