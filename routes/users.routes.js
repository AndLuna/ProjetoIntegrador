const express = require('express');
const router = express.Router();

const UserControler= require('../controllers/UserControler')


// rota para lista todos os usuarios
router.get('/', UserControler.index);