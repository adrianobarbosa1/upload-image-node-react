import mongoose from "mongoose"

interface UploadAtributos {
  title: string
  image: string
}

interface UploadModel extends mongoose.Model<UploadDoc> {}

interface UploadDoc extends mongoose.Document {
  title: string
  image: string
}

const UploadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      },
    },
  }
)

const Upload = mongoose.model("Upload", UploadSchema)

export default Upload
