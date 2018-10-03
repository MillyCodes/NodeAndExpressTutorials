const express = require('express');
const router = express.Router();

//Require the controller
const product_controller = require('../controllers/product.controller');

//a test url to check that my files are communicating properly
router.get('/test', product_controller.test);

module.exports = router;