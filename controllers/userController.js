const {createMenuObject} = require('../helpers/createMenuObject')

const login = (req, res) => {
    res.render ('pages/login')
}


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


module.exports.login = login
module.exports.cadastro = cadastro
module.exports.checkout = checkout
module.exports.usuario = usuario

