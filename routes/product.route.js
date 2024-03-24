const express = require('express');
const product = require("../model/product.model");
const route = express.Router();
const {
    getAllProducts,
    addProduct,
    getProductById,
    updateProductById,
    deleteProductById
} = require("../controller/product.controller")
// read all
route.get('/', getAllProducts);
// create
route.post('/', addProduct);
// read product by id
route.get('/:id', getProductById);
// update by id
route.put('/:id', updateProductById);
// delete by id
route.delete('/:id', deleteProductById)

module.exports = route;
