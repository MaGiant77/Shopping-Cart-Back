module.exports = function(app){
    var productList = require("../controllers/product.controller.js");
    
    app.get('/productList', productList.productList);
}