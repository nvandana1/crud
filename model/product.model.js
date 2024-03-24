const mongoose = require("mongoose");

const productModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        default: 0
    },
    quantity: {
        type: Number,
        required: [true, 'Price is required'],
        default: 0
    },
    image: {
        type: String,
        required: false
    },


},{timestamps:true});

const product  = mongoose.model('Product', productModel)
// Model('Product',productModel);
module.exports = product;