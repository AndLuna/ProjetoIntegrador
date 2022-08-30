
const User = require("../models/User");

const UserControler = {
    index: (req, res) =>{
        res.render('user/index');
    },

    createForm: (req, res) => {
        res.render('user.form');
    },
    create: (req, res)=>{
        const user = req.body;
        User.create(user)

    },
}

module.exports = UserControler;