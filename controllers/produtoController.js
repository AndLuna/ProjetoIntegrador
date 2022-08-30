const Produto  = require('../models/produtos');

const produtoController = {
    index: (req, res) =>{
        const produtos = Produto.findAll();
        res.render('cadastroProdutos/indexProdutos', { produtos })
    },

    criar: (req, res) =>{
        res.render('cadastroProdutos/telaCadastro')
    },

    criarProduto: (req, res) =>{
        const inputTipo = req.body.tipos;
        if(typeof inputTipo == "string"){
            req.body.tipos = [req.body.tipos]
        }
        const produto = req.body;
        const imagem = req.file.filename;
        Produto.criar(produto, imagem);
        res.redirect('/adm');
    },
}


module.exports = produtoController;