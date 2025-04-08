import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
  name: String,
  id: { type: String, unique: true },
  slug:{type:String},
  variants: [String],
  rating: Number,
  tags: [String],
  price: {
    original: Number,
    discounted: Number,
  },
  description: {
    plugoCount: String,
    plugoLetters: String,
    plugoLink: String,
  },
  imageUrl: String,
  deal: {
    flatOff: String,
    label: String,
  },
})

const Product = mongoose.model("product", productSchema)
export default Product
