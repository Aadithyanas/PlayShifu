import { Router } from "express"
import {
  createProduct,
  getProductBySlug,
  getAlldata
} from "../controllers/productController.js"

const router = Router()
router.get("/datas",getAlldata)
router.get("/:slug", getProductBySlug)

router.post("/add-product", createProduct)

export default router
