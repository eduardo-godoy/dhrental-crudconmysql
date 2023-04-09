const db = require('../../database/models');

const productApiControllers = {
    list: (req,res) => {
        db.Category.findAll()
        .then(categorys => {
            let response = {
                meta:[{
                    status:200,
                    count:categorys.length,
                    url: 'http://localhost:3001/api/categorys'
                }],
                data:categorys,
        }
        res.json(response);
    })
    },
    detail: (req,res) => {
        db.Category.findByPk(req.params.id)
        .then(category => {
            let response = {
                meta:[{
                    status:200,
                    url:'http://localhost:3001/api/categorys/' + req.params.id 
                }],
                data:category
        }
        res.json(response);
    })
    },


}

module.exports = productApiControllers;
