const { validationResult } = require('express-validator');
const db = require('../database/models');



const controllers = {

  products: (req, res) => {

    db.Products.findAll({include:[{association:"category"}]})
    .then(function(products){
      res.render('./products/products',{products})
    }) // TODOS LOS PRODUCTOS

  },

  productCreate: (req, res) => {

    res.render('./products/productCreate') // RENDERIZA LA PAGINA DE CREACION DEL PRODUCTO

  },

  store: (req, res) => {
    //VALIDACION
    let validacion = validationResult(req)
        if (validacion.errors.length > 0) {
             return res.render('./products/productCreate', {
                errors: validacion.mapped(),
                oldData: req.body
            })
        }
        //IMAGEN DEFAULT
    let img 
    if(!req.file){
      img = 'default.jpg'
    }else{
      img = req.file.filename
    }

      db.Products.create({
      "image": img,
      "name": req.body.titulo,
      "description": req.body.descripcion,
      "price": req.body.precio,
      "in_sale": req.body.oferta,
      "category_id": req.body.categoria,
    })
    .then(() => {res.redirect('/')}) //CREA O GUARDA EL PRODUCTO

  },

 productEdit: (req, res) => {
 
  db.Products.findByPk(req.params.id)
    .then(function(product){
      res.render('./products/productEdit', {product:product}) // RENDERIZA LA PAGINA DE EDICION DEL PRODUCTO
  })

  },

  productDetail: (req, res) => {
    
    db.Products.findByPk(req.params.id)
        .then(function(product){
            res.render('./products/productDetail',{product:product})
        })// RENDERIZA LA PAGINA DE EDICION DEL PRODUCTO // RENDERIZA LA PAGINA DETALLE DEL PRODUCTO

  },

  productCart: (req, res) => {
    res.render('./products/productCart'); // CONTROLADOR CARRITO DE COMPRAS

  },

  delete: function (req, res) {
    
        db.Products.destroy({where:{id:req.params.id}})
          .then(res.redirect('/'))

  },

  update: (req,res) => {

    db.Products.findByPk(req.params.id)
    .then((product)=>{

        let validacion =  validationResult(req)

        if (validacion.errors.length > 0) {
             return res.render('./products/productEdit', {
                errors: validacion.mapped(),
                product:product
            })
        }else{

          let img 
          if(!req.file){
            img = req.body.imagen
          }else{
            img = req.file.filename
          }
            db.Products.update({
              "image": img,
              "name": req.body.titulo,
              "description": req.body.descripcion,
              "price": req.body.precio,
              "in_sale": req.body.oferta,
              "category_id": req.body.categoria,
            },{
                where:{
                    id:req.params.id
                }
            })
            .then(res.redirect('/'))}})
  

   

  // EDITA EL PRODUCTO POR SU ID
  }
  
};

module.exports = controllers;