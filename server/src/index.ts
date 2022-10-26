import express from "express"
import "express-async-errors"

import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import { errorHandler } from "./middlewares/errorHandler"
import { NotFoundError } from "./errors/notFoundError"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors({ origin: `${process.env.SERVER_URL}` }))
const port = process.env.PORT || 5000

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017")
    console.log("MongoDB conectado!")
  } catch (err) {
    console.error(err)
  }
}

app.all("*", async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

start()
