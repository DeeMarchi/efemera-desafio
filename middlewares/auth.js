const auth = (req, res, next) => {
    if (typeof(req.session.usuario) !== "undefined") {
        next();
    } else {
        return res.redirect('/usuarios/login');
    }
};

module.exports = auth;
