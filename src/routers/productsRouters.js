const express = require('express');
const router = express.Router();

const productsControllers =  require('../controllers/productsControllers');
const upload = require('../middlewares/productsMulter');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const validations = require('../middlewares/validationProductsMiddleware');

router.get('/products', productsControllers.products); // RUTA DE TODOS LOS PRODUCTOS
router.get('/productCreate',adminMiddleware, productsControllers.productCreate); // RUTA DE RENDERIZADO DE PAGINA DE CREACION DE PRODUCTO
router.post('/create', upload.single('imagen'), validations, productsControllers.store); // CREA O GUARDA EL PRODUCTO
router.get('/productDetail/:id',productsControllers.productDetail); // RUTA DEL DETALLE DEL PRODUCTO POR SU ID
router.get('/productEdit/:id', adminMiddleware, productsControllers.productEdit); // RUTA QUE RENDERIZA LA PAGINA DE EDICION DEL PRODUCTO POR SU ID
router.put('/productEdit/:id', authMiddleware, upload.single('imagen'), validations, productsControllers.update); // RUTA QUE REEMPLAZA EL PRODUCTO
router.delete('/delete/:id', authMiddleware, productsControllers.delete); // RUTA QUE ELIMINA EL PRODUCTO POR SU ID
router.get('/productCart', authMiddleware, productsControllers.productCart); // RUTA DEL CARRITO DE COMPRAS

module.exports = router;