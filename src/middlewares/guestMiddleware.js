//FUNCION SI EL USUARIO ESTA LOGUEADO TIENE CIERTOS PRIVILEGIOS A ENDPOINTS

function guestMiddleware(req,res,next){
    if(req.session.userLogged){
    return res.redirect('/');
    }
    next();
};

module.exports = guestMiddleware;