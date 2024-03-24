const product = require("../model/product.model");
const getAllProducts=async (req, res) => {
    try {
        const products = await product.find({});
        console.log(products)
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
const addProduct=async (req, res) => {
    try {
        const products = await product.create(req.body);
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await product.findById(id);
        console.log(products)
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const updateProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await product.findByIdAndUpdate(id,req.body);
        if (!products){
            return res.status(500).json({message:'Product Not Found'})
        }
        console.log(products)
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const deleteProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await product.findByIdAndDelete(id);

        if (!products){
            return res.status(500).json({message:'Product Not Found'})
        }
        console.log(products)
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
module.exports = {getAllProducts,addProduct,getProductById,updateProductById,deleteProductById}