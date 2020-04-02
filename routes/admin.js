const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', adminController.listagemGeral);

module.exports = router;
