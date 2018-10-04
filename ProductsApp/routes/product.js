const express = require('express');
const router = express.Router();

//Require the controller
const product_controller = require('../controllers/product');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

// POST -> /products/create
router.post('/create', product_controller.product_create);

// GET -> /products/:id
router.get('/:id', product_controller.product_details);

//PUT -> /products/:id/
router.put('/:id/update', product_controller.product_update);

//DELETE -> /products/:id/delete
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;