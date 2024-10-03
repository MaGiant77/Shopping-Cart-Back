var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productModelSchema = new Schema({
    // prodcutId : Schema.Types.ObjectId,
    productCount : Number,
    productName : {type : String, required : true},
});
module.exports = mongoose.model("products", productModelSchema);