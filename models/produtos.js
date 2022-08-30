const { Console } = require('console');
const fs = require('fs');
const { type } = require('os');
const {v4} = require('uuid');
let db_produtos = require('../database/db_produtos.json');


const writeToDB = () =>{
    const json = JSON.stringify(db_produtos);
    fs.writeFileSync('database/db_produtos.json' , json);
}

const Produto = {

    findAll: () => db_produtos.produtos,

    bestSeller: () => {
        return db_produtos.produtos.filter(produto =>{
            if(produto.bestseller){
                return produto
            }
        })
    },

    findByCategoria: (tipo) => {
        return db_produtos.produtos.filter( produto =>{
            for(let i = 0; i < produto.tipos.length; i++){
                if(produto.tipos[i] == tipo){
                        return produto
                }
            }
        })  
    },

    criar: (produto, imagem) =>{
        db_produtos.produtos.push({ id: v4(), ...produto, imagem});
        writeToDB();
    }
}

module.exports = Produto;