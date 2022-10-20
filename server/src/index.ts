import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { ConectarMongoDb } from "./conectarMongoDb"
import Upload from "./model"

dotenv.config()
ConectarMongoDb()
const app = express()

app.use(express.json())
app.use(cors({ origin: `${process.env.SERVER_URL}` }))
const port = process.env.PORT || 5000

app.get("/", async (req, res) => {
  res.send("hi there!")
})

app.get("/todas", async (req, res) => {
  try {
    const image = await Upload.find({})
    res.status(200).json(image)
  } catch (err) {
    res.status(404).json({ mensagem: "Data error" })
  }
})

app.post("/", async (req, res) => {
  try {
    const { image, title } = req.body
    const createImage = {
      image,
      title,
    }

    if (createImage) {
      const newImage = await Upload.create(createImage)
      res.status(404).json(newImage)
    }
  } catch (err) {
    res.status(404).json({ mensagem: "invalid data" })
  }
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
