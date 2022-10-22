import express, { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import Upload from "../model"
import { RequestValidationError } from "../errors/requestValidationError"
import { DatabaseConnectError } from "../errors/databaseConnectionError"

const router = express.Router()

router.get("/todas", async (req, res) => {
  try {
    const image = await Upload.find({})
    res.status(200).json(image)
  } catch (err) {
    res.status(404).json({ mensagem: "Data error" })
  }
})
