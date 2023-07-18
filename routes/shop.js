const express = require('express');
const getShopProducts = require('../controller/shop');
const router = express.Router();


router.get('/', getShopProducts);

module.exports = router;
