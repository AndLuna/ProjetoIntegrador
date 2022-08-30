const {createMenuObject} = require('../helpers/createMenuObject')

// const login = (req, res) => {
//     res.render ('pages/login')
// }
const checkout = (req, res) => {
    res.render ('pages/checkout', {
    menu: createMenuObject('false')})

}
const usuario = (req, res) => {
    res.render('pages/usuario',{
        menu: createMenuObject('false'),
    })
}
const cadastro = (req, res) => {
    res.render('pages/cadastro',{
       menu: createMenuObject('false'),
    })
}

const User = require("../models/User");

const UserControler = {
    index: (req, res) =>{
        res.render('user/index');
    },

    createForm: (req, res) => {
        res.render('user/form');
    },
    create: (req, res)=>{
        const user = req.body;
        User.create(user);
        res.redirect('/users');

    },
}



module.exports = UserControler;
// module.exports.login = login
module.exports.cadastro = cadastro
module.exports.checkout = checkout
module.exports.usuario = usuario


