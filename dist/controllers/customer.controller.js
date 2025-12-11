"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_model_1 = require("../models/customer.model");
// Get customers
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_model_1.Customer.find();
    return customers;
});
// Create customer
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = new customer_model_1.Customer(data);
    return yield customer.save();
});
// Get customer by id
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_model_1.Customer.findById(id);
    return customer;
});
// Get customer by ids
const getCustomerByIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_model_1.Customer.find({ _id: { $in: ids } });
    return customers;
});
// Update customer
const updateCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_model_1.Customer.findByIdAndUpdate(data.id, data, { new: true });
    return customer;
});
// Delete customer
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_model_1.Customer.findByIdAndDelete(id);
    return customer;
});
exports.default = {
    getCustomers,
    createCustomer,
    getCustomerById,
    getCustomerByIds,
    updateCustomer,
    deleteCustomer
};
