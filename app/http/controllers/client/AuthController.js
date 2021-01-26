const { validationResult } = require('express-validator');
const User = require('../../../models/User');

const login = (req,res,next) => {
    res.status(200).json({ success:true,data:req.authToken});
}

const register = async (req,res,next) => {
    try {
        const newUser = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        });
        await newUser.save();
        res.status(200).json({success:true,data:newUser});
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    login,
    register
}