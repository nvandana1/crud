const express = require('express')
const app = express();
const mongodb = require('./mongoConnection');
const mongoose = require("mongoose");
const product = require("./model/product.model");
const ProductRoute = require("./routes/product.route");
app.use(express.json());
app.use('/product',ProductRoute)
 mongodb.connect().then((mongoClient) => {
    console.log("Connected db");
}).catch((e) => console.log(e))

// testing
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('server');
});
