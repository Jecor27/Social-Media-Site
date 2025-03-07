import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js'
import Posts from './models/postModel.js'

const app = express()

//Middleware 

app.use(express.json())
app.use(cors())

//Routes to have

// GET /posts
// GET /posts/:id
// POST /posts
// PUT /posts/:id
// DELETE /posts/:id


app.get("/", (req, res) => {
    res.send("hello world")

})

app.post("/posts", async (req, res) => {
    try {

        const postDoc = await Posts.create(req.body)
        res.status(201).json(postDoc)

    } catch (err) {
        console.log(err)
    }
})

app.get("/posts", async (req, res) => {
    try {

        const postDoc = await Posts.find({})
        res.status(200).json(postDoc)

    } catch (err) {
        console.log(err)
    }
})

app.get("/posts/:id", async (req, res) => {
    try {
        const postDoc = await Posts.findById(req.params.id)
        res.status(200).json(postDoc);

    } catch (err) {
        console.log(err)
    }
})

app.delete("/posts/:id", async (req, res) => {
    try {
        const postDoc = await Posts.findByIdAndDelete(req.params.id)
        res.status(200).json(postDoc);

    } catch (err) {
        console.log(err)
    }
})

app.put("/posts/:id", async (req, res) => {
    try {
        const postDoc = await Posts.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(postDoc);

    } catch (err) {
        res.status(400).json(err)
    }
})

//connection to the app and the database

connectDB(app)