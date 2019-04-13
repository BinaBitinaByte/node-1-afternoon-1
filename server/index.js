const express = require('express');
const products = require('../products.json');
const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const port = 5050;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(port, () => console.log(`Listening on ${port}`));


















