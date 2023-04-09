// VALIDACIONES DEL PROCESO DE creacion y edicion del producto DEL USUARIO

const { body } = require('express-validator');

const validations = [

    body('titulo').notEmpty().withMessage('Debes completar este campo').isLength({min:2}).withMessage('El titulo debe tener minimo 2 caracteres'),
    body('descripcion').notEmpty().withMessage('Debes completar este campo').isLength({min:20}).withMessage('El nombre debe tener minimo 20 caracteres'),
    body('precio').notEmpty().withMessage('Tienes que escribir un precio').bail().isNumeric().withMessage('El precio debe ser en numeros'),
    body('imagen').custom((value,{ req })=>{
 
            let img = req.file;
      
            if(!req.file){
                return  img = 'default.jpg'
            }
            if(req.file.mimetype.startsWith('image/')){
                return img = req.file.filename
            }
            return false
          
        }).withMessage('Formatos aceptados jpg, jpeg, png, gif')
    
]
    
module.exports = validations;