var login = require("../models/users.model");

exports.signIn = async function(req, res) {
    try{
        const notes= await login.find({
            userName : req.body.userName,
            userPassword : req.body.userPassword
        });
        res.send(notes);
    } catch (err){
        res.status(500).send({message: "Some error occurred while ..."});
    }
};