import Product from "../models/Product.js"

// GET: Get product by slug
export const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET: Get all products
export const getAlldata = async (req, res) => {
  try {
    const data = await Product.find();

    if (!data.length) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// POST: Create a new product
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      id,
      slug,
      variants,
      rating,
      tags,
      price,
      description,
      imageUrl,
      deal,
    } = req.body;

    if (!id || !slug) {
      return res.status(400).json({ message: "Product 'id' and 'slug' are required" });
    }

    const existing = await Product.findOne({ slug });
    if (existing) {
      return res.status(400).json({ message: "Product with this slug already exists" });
    }

    const product = new Product({
      name,
      id,
      slug,
      variants,
      rating,
      tags,
      price,
      description,
      imageUrl,
      deal,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};
