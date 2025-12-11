import { Order } from "../models/order.model";
import { IOrder } from "../types/order";

// Get orders
const getOrders = async () => {
  const orders = await Order.find()
  return orders
}

// Create order
const createOrder = async (data: Omit<IOrder, 'id'>) => {
  const order = new Order(data)
  return await order.save()
}

// Get order by id
const getOrderById = async (id: string) => {
  const order = await Order.findById(id)
  return order
}

// Get order by productId
const getOrderByProductId = async (productId: string) => {
  const order = await Order.find({ productId })
  return order
}

// Get order by customerId
const getOrderByCustomerId = async (customerId: string) => {
  const order = await Order.find({ customerId })
  return order
}

// Update order
const updateOrder = async (data: Partial<IOrder>) => {
  const order = await Order.findByIdAndUpdate(data.id, data, { new: true })
  return order
}

// Delete order
const deleteOrder = async (id: string) => {
  const order = await Order.findByIdAndDelete(id)
  return order
}

export default {
  getOrders,
  createOrder,
  getOrderById,
  getOrderByProductId,
  getOrderByCustomerId,
  updateOrder,
  deleteOrder
}