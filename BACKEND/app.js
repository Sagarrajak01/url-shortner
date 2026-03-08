import dotenv from "dotenv"
dotenv.config()

import express from "express"
import connectDB from "./src/config/mongo.config.js"
import urlSchema from "./src/models/short_url.model.js"
import short_url from "./src/route/short_url.route.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/create", short_url)

app.get("/:id", async (req, res) => {
    const { id } = req.params
    const url = await urlSchema.findOne({ short_url: id })
    if (url) {
        res.redirect(url.full_url)
    }
    else {
        res.status(404).send("Not Found")
    }
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on Port ${PORT}`)
})
