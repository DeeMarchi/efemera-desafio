const path = require('path');
const fs = require('fs');

const lerInfo = (nomePasta, nomeArquivo) => {
  let dadosArquivo = [];
  const codificacao = 'utf-8';

  let pathArquivo = path.join(nomePasta, nomeArquivo);

  if (fs.existsSync(pathArquivo)) {
    dadosArquivo = fs.readFileSync(pathArquivo, { encoding: codificacao });
    dadosArquivo = JSON.parse(dadosArquivo);
  } else {
    console.log(`[Atenção] arquivo ${pathArquivo} não foi encontrado`);
  }

  return dadosArquivo;
};

const adminController = {

  listagemGeral: (req, res) => {
    const inscritosNewsletter = lerInfo('db', 'newsletter.json');
    const contatosUsuarios = lerInfo('db', 'contatos.json');

    res.render('painel-admin', { title: 'Painel Administrativo', inscritosNewsletter, contatosUsuarios });
  },

};

module.exports = adminController;