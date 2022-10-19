import mongoose from 'mongoose'
import { starterApp } from './core/server'

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT, MONGO_DB } = process.env
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@db:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
const port = 3000

mongoose.connect(url)

starterApp().listen(port)
