var product = require("../models/product.model");

exports.productList = async function(req, res) {
    try{
        const notes= await product.find({});
        console.log(notes);
        res.send(notes);
    } catch (err){
        res.status(500).send({message: "Some error occurred while ..."});
    }
};