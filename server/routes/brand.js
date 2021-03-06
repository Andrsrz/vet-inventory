const express = require('express');
const router = express.Router();
const path = require('path');

/* Require Controller Modules */
var brandController = require(path.join(__dirname, '../controllers/brand'));

/* Character Routes */
router.get('/', brandController.brands);
router.post('/', brandController.create_brand);
router.get('/find/:id', brandController.find_brand);
router.post('/update/:id', brandController.update_brand);
router.post('/delete/:id', brandController.delete_brand);

module.exports = router;
