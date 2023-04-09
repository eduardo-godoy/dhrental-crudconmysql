const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const db = require('../database/models');


const controllers = {

    findByField: (field, text) => {

        let userFound = users.find(user => user[field] === text); // BUSCAR EL USUARIO POR MAIL
        return userFound;

        },

    register: (req, res) => {

        res.render('./users/register'); // RENDERIZA LA PAGINA DE REGISTRACION

    },

    store: (req, res) => {

        let validacion = validationResult(req);

         if (validacion.errors.length > 0) {

             return res.render('./users/register', {
                errors: validacion.mapped(),
                oldData: req.body
            })
        }

    db.User.findOne({where:{email:req.body.email}})
    .then(function(user){
        if(user){

            return res.render('./users/register', {
                   errors: {email:{
                    msg:'Este Email ya esta registrado'}
                },
                    oldData: req.body});
    
            }else{
                
                let img 
  
                if(!req.file){
                  img = 'default.jpg'
                }else{
                    img = req.file.filename
                }
    
            db.User.create({   
                "image": img,
                "name": req.body.nombre,
                "last_name": req.body.apellido,
                "email": req.body.email,
                "password":bcryptjs.hashSync(req.body.password,10), 
                "adress": req.body.domicilio,
                "cell_phone": req.body.celular,
                "rol":'user'
                })
    
                .then(() => {
                    return res.redirect('/')});}

    });

    },

    findAll: (req, res) => {
        db.User.findAll()
        .then((users)=>{
            res.render('./users/users', {users:users})
        }); //PAGINA QUE MUESTRA A TODOS LOS USUARIOS

    },

    findForId: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((user)=>{
            res.render('./users/userDetail', {user})
        });//PAGINA DEL DETALLE DEL USUARIO

    },
    
    delete: (req, res) => {

        db.User.destroy({where:{id:req.params.id}})
        .then(res.redirect('/'));

    },

    userEdit: (req, res) => {
        
        db.User.findByPk(req.params.id)
        .then((user)=>{
            res.render('./users/userEdit', {user})
        });
         //PAGINA QUE RENDERIZA LA EDICION DEL USUARIO POR SU ID 
       
         
    },
    
    update: (req, res) => {

    db.User.findByPk(req.params.id)
        .then((user)=>{

            let validacion =  validationResult(req)

            if (validacion.errors.length > 0) {
                 return res.render('./users/userEdit', {
                    errors: validacion.mapped(),
                    user:user
                })
            }else{

                let img 
                if(!req.file){
                  img = req.body.imagen
                }else{
                  img = req.file.filename
                }
            
            db.User.update({  
                 "image": img,
                  "name": req.body.nombre,
                  "last_name": req.body.apellido,
                   "email": req.body.email,
                   "password":bcryptjs.hashSync(req.body.password,10), 
                   "adress": req.body.domicilio,
                  "cell_phone": req.body.celular,
                   "rol":req.body.rol
           },{
                            where:{
                                id:req.params.id
            }
            })
            .then(res.redirect('/'))}})
        
        
        }, // EDITA EL USUARIO POR SU ID 

    login: (req, res) => {

        res.render('./users/login') // RENDERIZA LA PAGINA DEL LOGIN 

    },

    loginProcess: (req,res) => {

        let validacion = validationResult(req);

        if (validacion.errors.length > 0) {

             return res.render('./users/login', {
                errors: validacion.mapped(),
                oldData: req.body
            });
        };

      db.User.findOne({where:{email:req.body.email}})
      .then(function(user){
        
        if(user){

            let passwordOk = bcryptjs.compareSync(req.body.password, user.password)

        if(passwordOk){

            req.session.userLogged = user

        if(req.body.remember && req.session.userLogged == user){

                res.cookie('email', req.body.email, { maxAge: 10000 * 3000 });

            }
        return res.redirect('/')
          }
          
        return res.render('./users/login', {
            errors:{
                password:{
                    msg: 'Contraseña incorrecta'
                }
            }
        });
        }

        return res.render('./users/login', {
            errors:{
                email:{
                    msg: 'No se encuentra registrado este email'
                }
            }
        })
    })
         
    },

    profile:(req, res) => {
    
        res.render('./users/userProfile', {user:req.session.userLogged});

    },

    logout: (req,res) => {

        res.clearCookie('email');
        req.session.destroy();
        res.redirect('/')

    }

}

module.exports = controllers;