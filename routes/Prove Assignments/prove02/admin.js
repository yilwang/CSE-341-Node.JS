const express = require('express');
const router = express.Router();
const products = [];


router.get('/',(req, res, next) => {
    res.render('pages/pr02/add-product', { 
        pathTitle: 'page/proveAssignments/pr02/add-product', 
        path: '/admin/add-product', 
        formCSS: true, // For HBS
        productCSS: true, // For HBS
        activeAddProduct: true
    });
    error ='';
});

router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title, summary: req.body.summary});
    console.log(products);
    res.redirect("/pr02/products");       
});

router.get('/products',(req, res, next) => {
    res.render('pages/pr02/shop',{
        prods: products, 
        pageTitle: 'Shop', 
        path:'/',
        hasProdcuts: products.length > 0,
        activeShop: true,
        productCSS: true,    
    });
});


module.exports = router;