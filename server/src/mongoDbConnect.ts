import mongoose from "mongoose"

export const MongoDbConnect = async () => {
  try {
    mongoose.connect("URL", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB conectado!")
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
