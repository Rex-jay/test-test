const rootDir = require('../util/path');
const path = require('path');

const products = [];

const getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}

const addProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
}

// exports.products = products;
module.exports = {
    getAddProduct,
    addProduct,
    products
}