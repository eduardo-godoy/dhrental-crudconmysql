const db = require('../database/models');

const controllers = {
    index: (req,res) => {
        db.Products.findAll({where:{in_sale:'yes'}})
        .then(function(products){ 
            res.render('index',{products})
        });   
    },
    contact: (req,res) => {
        res.render('contact')
    },
    us: (req,res) => {
        res.render('us')
    },
    noAdmin: (req,res) => {
        res.render('accessDenied')
    }
}

module.exports = controllers;