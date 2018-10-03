const express = require('express');
const router = express.Router();

//Require the controller
const product_controller = require('../controllers/product');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

module.exports = router;