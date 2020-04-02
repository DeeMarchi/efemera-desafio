const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET users listing. */

router.get('/criar', usuariosController.registroForm);
router.post('/criar', usuariosController.salvarForm);
router.get('/login', usuariosController.loginForm);

module.exports = router;
