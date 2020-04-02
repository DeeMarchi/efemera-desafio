const path = require('path');
const fs = require('fs');

const homeController = {
  index: (req, res) => {
    let servicos = [
      {nome: 'Dev full stack', imagem: '/imagens/undraw_dev_focus.svg'},
      {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'},
      {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
      {nome: 'Suporte tecnico', imagem: '/imagens/undraw_dev_focus.svg'},
      {nome: 'Data Science', imagem: '/imagens/undraw_mobile_apps.svg'},
    ];

    let banners = [
      '/imagens/banner2.jpg',
      '/imagens/banner3.jpg',
      '/imagens/banner4.jpg',
      '/imagens/banner.jpg',
    ];

    res.render('index', { title: 'Home', listaServicos: servicos, listaBanners: banners });
  },

  contato: (req,res)=>{
    let {nome, email, mensagem} =  req.body;

    let infoContato = { nome,email,mensagem };
    /* Pegue o path da pasta db*/ 
    let fileContato = path.join('db', 'contatos.json');

    let listaContato = [];
    if (fs.existsSync(fileContato)) {
      listaContato = fs.readFileSync(fileContato, { encoding: 'utf-8' });
      listaContato = JSON.parse(listaContato);
    }
    listaContato.push(infoContato);

    listaContato = JSON.stringify(listaContato);
    fs.writeFileSync(fileContato, listaContato);

    res.render('contato', { title: 'contato', nome, email });
  },

  newsletter: (req, res) => {
    let {email} = req.query;
    // salvar inscritos no arquivo newsletter.json com email e data/hora da inscrição

    let dataInscricao = new Date();
    let infoInscrito = { email, dataInscricao };

    let fileInscrito = path.join('db', 'newletter.json');

    let listaIncrito = [];
    if (fs.existsSync(fileInscrito)) {
      listaIncrito = fs.readFileSync(fileInscrito, { encoding: 'utf-8' });
      listaIncrito = JSON.parse(listaIncrito);
    }
    listaIncrito.push(infoInscrito);

    listaIncrito = JSON.stringify(listaIncrito);
    fs.writeFileSync(fileInscrito, listaIncrito);

    // POST - req.body
    // GET - req.query
    // GET /:email - req.params

    res.render('newsletter', {email, title: 'Newsletter'});
  }
};

module.exports = homeController;
