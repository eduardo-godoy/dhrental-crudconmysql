function adminMiddleware(req,res,next){
    if(req.session.userLogged && req.session.userLogged.rol != "admin" ){
    return res.redirect('../../accessDenied');
    }
    if(!req.session.userLogged){
        return res.redirect('../../accessDenied');
    }
    next();
};

module.exports = adminMiddleware;