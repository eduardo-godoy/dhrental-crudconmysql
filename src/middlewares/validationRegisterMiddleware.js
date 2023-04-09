// VALIDACIONES DEL PROCESO DE REGISTRACION DEL USUARIO

const { body } = require('express-validator');

const validations = [

    body('nombre').notEmpty().withMessage('Debes completar este campo').isLength({min:2}).withMessage('El nombre debe tener minimo 2 caracteres'),
    body('apellido').notEmpty().withMessage('Debes completar este campo').isLength({min:2}).withMessage('El nombre debe tener minimo 2 caracteres'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debe ser un formato de correo válido'),
    body('password').notEmpty().withMessage('Debes completar este campo').bail().isLength({min:8}).withMessage('La contraseña debe tener un minimo de 8 caracteres'),
    body('domicilio').notEmpty().withMessage('Debes completar este campo').isLength({min:2}).withMessage('El nombre debe tener minimo 2 caracteres'),
    body('celular').notEmpty().withMessage('Debes completar este campo').bail().isLength({min:10}).withMessage('El telefono debe tener un minimo de 10 numeros'),
    body('imagen').custom((value,{ req })=>{
 
        let img = req.file;
  
        if(!req.file){
            return  img = 'default.jpg'
        }
        if(req.file.mimetype.startsWith('image/')){
            return img = req.file.filename
        }return false
      
    }).withMessage('Formatos aceptados jpg, jpeg, png, gif')
    
]

module.exports = validations;

