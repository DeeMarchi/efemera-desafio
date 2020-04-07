const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', auth, adminController.listagemGeral);

module.exports = router;
