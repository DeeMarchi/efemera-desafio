const usuariosController = {
   registroForm: (req, res) => {
       res.render('registroUsuarios');
   },
   loginForm: (req, res)=> {
       res.render('login', {title: "Login"});
   },
};

module.exports = usuariosController;