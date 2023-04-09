const db = require('../../database/models');

const productApiControllers = {

    list: (req,res) => {

       db.User.findAll()
        .then(users => {
            let response = {
            meta:[{
                status:200,
                count: users.length,
                url:'http://localhost:3001/api/users/'
            }],
            data:users
        }

    res.json(response)
})

    },    
    detail: (req,res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            let response = {
                meta:[{
                    status:200,
                    url:'http://localhost:3001/api/users/' + req.params.id 
                }],
                data:user

        }

        res.json(response)
        
    })
    },

}

module.exports = productApiControllers;