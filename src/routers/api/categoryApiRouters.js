const express = require('express');
const router = express.Router();
const categorysApiControllers = require('../../controllers/api/categorysApiControllers');

router.get('/', categorysApiControllers.list);
router.get('/:id', categorysApiControllers.detail);

module.exports = router;