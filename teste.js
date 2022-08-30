const { findByCategoria } = require("./models/produtos");
const Produto = require("./models/produtos");


console.log(Produto.findByCategoria("masculino"))