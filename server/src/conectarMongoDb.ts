import mongoose from "mongoose"

export const ConectarMongoDb = async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URL}`)
    console.log("MongoDB conectado!")
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
