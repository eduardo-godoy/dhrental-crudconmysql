const { body, check } = require('express-validator');

const validations = [
    body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debe ser un formato de correo válido'),
    body('password').notEmpty().withMessage('Debes completar este campo')
]

module.exports = validations;
