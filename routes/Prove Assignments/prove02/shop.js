//TA03 PLACEHOLDER
const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next) => {
    const products = adminData.products;
    res.render('pages/Prove Assignments/prov02.shop'){
        prods: products, 
        pageTitle: 'Shop', 
        path:'/',
        hasProdcuts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
});

module.exports = router;
