import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { MongoDbConnect } from "./src/mongodbConnect"

dotenv.config()
MongoDbConnect
const app = express()

app.use(express.json())
app.use(cors({ origin: `${process.env.SERVER_URL}` }))
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.get("/", async (req, res) => {
  res.send("hi there!")
})