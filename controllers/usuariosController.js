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

const inscritosNewsletter = lerInfo('db', 'newsletter.json');
const contatosUsuarios = lerInfo('db', 'contatos.json');

const usuariosController = {
   registroForm: (req, res) => {
       res.render('registroUsuarios', {title: "Registro"});
   },

   salvarForm: (req, res) => {
      let { nome, email, senha} = req.body;
      let infoUsuario = { nome, email, senha: bcrypt.hashSync(senha, 10) };

      let dadosArquivo = lerInfo('db', 'usuarios.json');

      dadosArquivo.push(infoUsuario);

      dadosArquivo = JSON.stringify(dadosArquivo)
      console.log(dadosArquivo);

      fs.writeFileSync(usuarioJSON, dadosArquivo)

      res.send('usuario cadastrado com sucesso');

   },

   loginForm: (req, res)=> {
               
        res.render('login', {title: "Login"});
   },

   logarUsuario: (req, res) => {
       let {email, senha} = req.body;
       let usuarioSalvo = lerInfo('db', 'usuarios.json');

       let usuario = usuarioSalvo.filter((usuario, index)=> {
            return usuario.email == email;
       });

       if (usuario.length < 0){
           return res.send('Inválido');
       }
       console.log(usuario);
        // preciso arrumar isso. ele ta trabalhando com um usuario so. 

       if(!bcrypt.compareSync(senha, usuario[0].senha)){
           return res.redirect("Login");

       }
       
       req.session.usuario = usuario[0];

       res.redirect('/admin');
        
}};

module.exports = usuariosController;