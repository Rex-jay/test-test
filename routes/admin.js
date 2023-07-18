const express = require('express');

const router = express.Router();

const { getAddProduct, addProduct } = require('../controller/products');



// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/add-product => POST
router.post('/add-product', addProduct);

exports.routes = router;
