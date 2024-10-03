module.exports = function(app){
    var login = require("../controllers/login.controller.js");
    
    app.post('/login', login.signIn);
}