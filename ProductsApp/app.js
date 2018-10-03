//app.js
const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); //imports route for products
//initialize my express app
const app = express();

//add route class
app.use('/products', product);

//set up a port to use for app
let port = 3000

//telling my app to listen to this port
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});