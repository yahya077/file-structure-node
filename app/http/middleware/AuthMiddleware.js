const User = require('../../models/User');

const register = async (req, res, next) => {
    await User.findOne({ email: req.body.email })
    .exec((err, user) => {
        if(err) return res.status(500).send({message:err})
        if(user) return res.status(400).send({ message: "Failed! Email is already in use!" });
    });
    next();
}

module.exports = {
    register
}