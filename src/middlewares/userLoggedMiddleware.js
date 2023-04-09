// FUNCION DONDE SE GUARDA LOS DATOS EN SESSION PARA SER ACCEDIDOS EN TODA LA APLICACION, MAS OPCION DE RECORMARME EN COOKIES.

function userLoggedMiddleware(req,res,next){
     let userFind = req.body.email
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.email;
   
    if(userFind && emailInCookie==true){
        req.session.userLogged = userFind;
        }
    if(userFind && userFind.rol  == "admin" && emailInCookie==true){
        res.locals.admin = true;
}
    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

    next();

}

module.exports = userLoggedMiddleware; 
