module.exports = function(app){
    var createCar = require("../controllers/createCar.controller.js");
    
    app.post('/createCar', createCar.createCar);
}