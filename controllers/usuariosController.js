const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');

let usuarioJSON = path.join('db', 'usuarios.json');

const lerInfo = (nomePasta, nomeArquivo) => {
    let dadosArquivo = [];
    let codificacao = 'utf-8';
  
    let pathArquivo = path.join(nomePasta, nomeArquivo);
  
    if (fs.existsSync(pathArquivo)) {
      dadosArquivo = fs.readFileSync(pathArquivo, { encoding: codificacao });
      dadosArquivo = JSON.parse(dadosArquivo);
    } else {
      console.log(`[Atenção] arquivo ${pathArquivo} não foi encontrado`);
    }
  
    return dadosArquivo;
};


const usuariosController = {
   registroForm: (req, res) => {
       res.render('registroUsuarios', {title: "Registro"});
   },

   salvarForm: (req, res) => {
      let { nome, email, senha} = req.body;
      let infoUsuario = { nome, email, senha: bcrypt.hashSync(senha, 10) };


      let dadosArquivo = lerInfo('db', 'usuarios.json');

      dadosArquivo.push(infoUsuario)
      

      dadosArquivo = JSON.stringify(dadosArquivo)
      console.log(dadosArquivo);
      fs.writeFileSync(usuarioJSON, dadosArquivo)

      res.send('usuario cadastrado com sucesso');

   },

   loginForm: (req, res)=> {
       res.render('login', {title: "Login"});
   },

};

module.exports = usuariosController;