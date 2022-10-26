import express, { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import Upload from "../model"
import { RequestValidationError } from "../errors/requestValidationError"
import { DatabaseConnectError } from "../errors/databaseConnectionError"

const router = express.Router()

router.post(
  "/",
  [
    body("image").withMessage("Deve ter uma imagem"),
    body("title").withMessage("deve ter um title"),
  ],
  async (req, res) => {
    const errors = validationResult(req)
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
  }
)
