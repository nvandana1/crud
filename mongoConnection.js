const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");
module.exports.connect = async () => {
    mongoose.connect('mongodb://localhost:27017/products').then().
    catch(error => console.log(error));
}