import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js'
import Post from './models/postModel.js'

const app = express()

app.use(express.json())
app.use(cors())

// connect to DB and port listening
connectDB(app)