const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const fs = require('fs');

let usuarioJSONPath = path.join('db', 'usuarios.json');

const usuariosController = {
   registroForm: (req, res) => {
       res.render('registroUsuarios', {title: "Registro"});
   },

   salvarForm: (req, res) => {
       let { nome, email, senha} = req.body;

        



   },

   loginForm: (req, res)=> {
       res.render('login', {title: "Login"});
   },

};

module.exports = usuariosController;