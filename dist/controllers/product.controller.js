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
const product_model_1 = require("../models/product.model");
// Get products
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.Product.find();
    return products;
});
// Create product
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_model_1.Product(data);
    return yield product.save();
});
// Get product by id
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(id);
    return product;
});
// Get product by ids
const getProductByIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.Product.find({ _id: { $in: ids } });
    return products;
});
// Update product
const updateProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findByIdAndUpdate(data.id, data, { new: true });
    return product;
});
// Delete product
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findByIdAndDelete(id);
    return product;
});
exports.default = {
    getProducts,
    createProduct,
    getProductById,
    getProductByIds,
    updateProduct,
    deleteProduct
};
