const express = require('express');
const router = express.Router();
const productApiControllers = require('../../controllers/api/productsApiControllers');

router.get('/', productApiControllers.list);
router.get('/:id', productApiControllers.detail);

module.exports = router;