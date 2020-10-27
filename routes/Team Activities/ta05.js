const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    if(!req.session.style){
        req.session.style = "#fffffff";
    }
    if(!req.session.counter){
        req.session.counter = 0;
    }
    res.render('pages/ta05', { 
        title: 'Team Activity 05', 
        users: userNameArray,
        path: '/ta05', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/addUser',(req, res, next) => {
    res.render('pages/ta05', { 
        req.session.style = req.body.color;
        res.redirect(home);    
    });
});



module.exports = router;