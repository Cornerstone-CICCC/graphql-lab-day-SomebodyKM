import { Customer } from "../models/customer.model";
import { ICustomer } from "../types/customer";
import { Types } from "mongoose";

// Get customers
const getCustomers = async () => {
  const customers = await Customer.find()
  return customers
}

// Create customer
const createCustomer = async (data: Omit<ICustomer, 'id'>) => {
  const customer = new Customer(data)
  return await customer.save()
}

// Get customer by id
const getCustomerById = async (id: string) => {
  const customer = await Customer.findById(id)
  return customer
}

// Get customer by ids
const getCustomerByIds = async (ids: Types.ObjectId[]) => {
  const customers = await Customer.find({ _id: { $in: ids } })
  return customers
}

// Update customer
const updateCustomer = async (data: Partial<ICustomer>) => {
  const customer = await Customer.findByIdAndUpdate(data.id, data, { new: true })
  return customer
}

// Delete customer
const deleteCustomer = async (id: string) => {
  const customer = await Customer.findByIdAndDelete(id)
  return customer
}

export default {
  getCustomers,
  createCustomer,
  getCustomerById,
  getCustomerByIds,
  updateCustomer,
  deleteCustomer
}