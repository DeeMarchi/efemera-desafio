const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET users listing. */

router.get('/criar', usuariosController.registroForm);

module.exports = router;
