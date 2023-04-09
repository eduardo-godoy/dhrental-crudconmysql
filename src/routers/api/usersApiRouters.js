const express = require('express');
const router = express.Router();
const usersApiControllers = require('../../controllers/api/usersApiControllers');

router.get('/', usersApiControllers.list);
router.get('/:id', usersApiControllers.detail);

module.exports = router;