import { ValidationError } from "express-validator"
import { CustomError } from "./customError"

export class RequestValidationError extends CustomError {
  statusCode = 400
  constructor(private errors: ValidationError[]) {
    super("Invalid request parameters")

    //Only beacause we are extending a build in class
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param }
    })
  }
}
