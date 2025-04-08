import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aadithyanmerin:AdithyanMerin@cluster0.syz6u.mongodb.net/playShifu"
    )
    console.log("db connected")
  } catch (error) {
    console.error(error.message)
  }
}
