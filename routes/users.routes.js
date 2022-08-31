const express = require('express');
const router = express.Router();

const UserControler= require('../controllers/UserControler')


// rota para lista todos os usuarios
router.get('/', UserControler.index);

// rota para mostrar formulario de cadastro de usuario
router.get('/create', UserControler.createForm);

// rota para criar um usuario
router.post('/', UserControler.create);



module.exports = router;