const rootDir = require('../util/path');
const adminData = require('../routes/admin');
const path = require('path');
const products = require('../routes/admin')

const getShopProducts = (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: true,
      // hasProducts: products.length() > 0,
      activeShop: true,
      productCSS: true
    });
}

module.exports = getShopProducts