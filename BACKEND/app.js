import dotenv from "dotenv"
dotenv.config()

import express from "express"
import connectDB from "./src/config/mongo.config.js"
import short_url from "./src/route/short_url.route.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js"
import { errorHandler } from "./src/utils/errorHandler.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/create", short_url)
app.get("/:id", redirectFromShortUrl)
app.use(errorHandler)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on Port ${PORT}`)
})