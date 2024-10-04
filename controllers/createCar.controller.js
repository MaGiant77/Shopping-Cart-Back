var product = require("../models/product.model");

exports.createCar = async function(req, res) {
    const {productName} = req.body;
    console.log(productName);
    const data = new product({
        productCount : 0,
        productName : productName
    });
    try {
        const savedProduct = await data.save();
        res.status(201).send(savedProduct);
    } catch (error) {
        res.status(500).send({error: 'Error saving the product'});
    }
};


