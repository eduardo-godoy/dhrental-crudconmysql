
const { User} = require('../database/models');


module.exports = (req,res,next) =>{

    res.locals.isLogged = false;
    
    if(req.session.userLogged){
        res.locals.isLogged = req.session.userLogged;
        return next();
    }else if(req.cookies.email){
        User.findOne({
            where: {
               email: req.cookies.email
            }
        })
        .then(user =>{
            req.session.userLogged = user;
            res.locals.isLogged = user;
            
            return next();
    
        })
                
    }else{
        return next();
    }
}