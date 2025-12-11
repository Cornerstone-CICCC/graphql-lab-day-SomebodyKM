import { Product } from "../models/product.model";
import { IProduct } from "../types/product";
import { Types } from "mongoose";

// Get products
const getProducts = async () => {
  const products = await Product.find()
  return products
}

// Create product
const createProduct = async (data: Omit<IProduct, 'id'>) => {
  const product = new Product(data)
  return await product.save()
}

// Get product by id
const getProductById = async (id: string) => {
  const product = await Product.findById(id)
  return product
}

// Get product by ids
const getProductByIds = async (ids: Types.ObjectId[]) => {
  const products = await Product.find({ _id: { $in: ids } })
  return products
}

// Update product
const updateProduct = async (data: Partial<IProduct>) => {
  const product = await Product.findByIdAndUpdate(data.id, data, { new: true })
  return product
}

// Delete product
const deleteProduct = async (id: string) => {
  const product = await Product.findByIdAndDelete(id)
  return product
}

export default {
  getProducts,
  createProduct,
  getProductById,
  getProductByIds,
  updateProduct,
  deleteProduct
}