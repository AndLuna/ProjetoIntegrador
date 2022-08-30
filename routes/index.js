var express = require('express');
const userController = require('../controllers/userController.js')
const homeController = require('../controllers/homeController')
const searchController = require('../controllers/searchController')
const carrinhoController = require('../controllers/cartController')
var router = express.Router();


router.get('/', homeController.joias);
router.get('/casamento', homeController.casamento);
router.get('/relogios', homeController.relogios);
router.get('/acessorios', homeController.acessorios);
router.get('/masculino', homeController.masculino);
router.get('/carrinho', carrinhoController.carrinho);
router.get('/produto', homeController.produto);

// <<====  User router Start  ====> // 
// router.get('/login', userController.login);
router.get('/cadastro', userController.cadastro)
router.get('/usuario', userController.usuario);
router.get('/login', userController.index);
// router.get('/cadastro', userController.create)
// router.get('/usuario', userController.create);
// <<====  User router End  ====> // 
router.get('/checkout', userController.checkout)


router.get('/search', searchController.search);




module.exports = router;
