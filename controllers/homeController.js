const {createMenuObject} = require('../helpers/createMenuObject')
const  Produto  = require('../models/produtos')

const joias = (req, res) => {
    const bestSellers = Produto.bestSeller();
    const produtos = Produto.findAll();
    res.render('pages/index',{
        menu: createMenuObject('joias'),
        banner: {
            background: 'fulbanner_home.webp',
            typePage: 'home'
        },
        produtos, bestSellers
    })
}

const casamento = (req, res) => {
    const produtos = Produto.findByCategoria('casamento');
    res.render('pages/index',{
        menu: createMenuObject('casamento'),
        banner: {
            background: 'fullbanner-casamento.webp',
        },
        produtos
    })
}

const relogios = (req, res) => {
    let produtos = Produto.findByCategoria('relogios')
    res.render('pages/index',{
        menu: createMenuObject('relogios'),
        banner: {
            background: 'fullbanner_relogios_vivara_2560_1024.webp',
        },
        produtos
    })
}

const acessorios = (req, res) => {
    let produtos = Produto.findByCategoria('acessorios')
    res.render('pages/index',{
        menu: createMenuObject('acessorios'),
        banner: {
            background: 'fullbanner_acessorios_oculos_2560_1024.webp',
        },
        produtos
    })
}

const masculino = (req, res) => {
let produtos = Produto.findByCategoria('masculino')
    res.render('pages/index',{
        menu: createMenuObject('masculino'),
        banner: {
            background: 'fullbanner-masculino-acessorios.webp',
        },
        produtos
    })
}
const produto = (req, res) => {
    res.render('pages/produto',{
        menu: createMenuObject('false'),
    })
}


module.exports.joias = joias;
module.exports.casamento = casamento;
module.exports.acessorios = acessorios;
module.exports.relogios = relogios;
module.exports.masculino = masculino;
module.exports.produto = produto;
