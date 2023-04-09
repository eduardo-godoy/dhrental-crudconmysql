const db = require('../../database/models');

const productApiControllers = {
    list: (req,res) => {
        db.Products.findAll({include:[{association:"category"}]})
        .then(products => {
            let response = {
                meta:[{
                    status:200,
                    count:products.length,
                    url: 'http://localhost:3001/api/products'
                }],
                data:products,
        }
        res.json(response);
    })
    },
    detail: (req,res) => {
        db.Products.findByPk(req.params.id,{include:["category"]})
        .then(product => {
            let response = {
                meta:[{
                    status:200,
                    url:'http://localhost:3001/api/products/' + req.params.id 
                }],
                data:product
        }
        res.json(response);
    })
    },


}

module.exports = productApiControllers;
