import productController from "../controllers/product.controller"
import customerController from "../controllers/customer.controller"
import orderController from "../controllers/order.controller"
import { IProduct } from "../types/product"
import { ICustomer } from "../types/customer"
import { IOrder } from "../types/order"

// Finish the resolvers
export const resolvers = {
  Query: {
    products: async () => await productController.getProducts(),
    customers: async () => await customerController.getCustomers(),
    orders: async () => await orderController.getOrders(),
    getProductById: async (_: unknown, { id }: { id: string }) => await productController.getProductById(id),
    getCustomerById: async (_: unknown, { id }: { id: string }) => await customerController.getCustomerById(id),
  },
  Product: {
    customers: async (parent: { _id: string }) => {
      const orders = await orderController.getOrderByProductId(parent._id)

      const customerIds = orders.map(o => o.customerId)

      const customers = await customerController.getCustomerByIds(customerIds)

      return customers
    }
  },
  Customer: {
    products: async (parent: { _id: string }) => {
      const orders = await orderController.getOrderByCustomerId(parent._id)

      const productIds = orders.map(o => o.productId)

      const products = await productController.getProductByIds(productIds)

      return products
    }
  },
  Order: {
    product: async (parent: { productId: string }) => await productController.getProductById(parent.productId),
    customer: async (parent: { customerId: string }) => await customerController.getCustomerById(parent.customerId)
  },
  Mutation: {
    addProduct: async (_: unknown, { productName, productPrice }: Omit<IProduct, 'id'>) => await productController.createProduct({ productName, productPrice }),
    editProduct: async (_: unknown, { id, productName, productPrice }: IProduct) => await productController.updateProduct({ id, productName, productPrice }),
    removeProduct: async (_: unknown, { id }: { id: string }) => {
      await productController.deleteProduct(id)
      return true
    },

    addCustomer: async (_: unknown, { firstName, lastName, email }: Omit<ICustomer, 'id'>) => await customerController.createCustomer({ firstName, lastName, email }),
    editCustomer: async (_: unknown, { id, firstName, lastName, email }: ICustomer) => await customerController.updateCustomer({ id, firstName, lastName, email }),
    removeCustomer: async (_: unknown, { id }: { id: string }) => {
      await customerController.deleteCustomer(id)
      return true
    },

    addOrder: async (_: unknown, { productId, customerId }: Omit<IOrder, 'id'>) => await orderController.createOrder({ productId, customerId }),
    editOrder: async (_: unknown, { id, productId, customerId }: IOrder) => await orderController.updateOrder({ id, productId, customerId }),
    removeOrder: async (_: unknown, { id }: { id: string }) => {
      await orderController.deleteOrder(id)
      return true
    }
  }
}
