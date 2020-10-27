const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
        res.render('pages/pr01/form',{
        title: 'Prove Assignment 01',
        path: '/pr01', //For pug EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS   
    });
});

router.post('/pr01submit', (req, res, next) => {
        console.log(req.body)
        res.render('pages/pr01/displayPr01',{
            title: 'Prove Assignment 01',
            path: '/pr01', //For pug EJS
            activeTA03: true, // For HBS (HBS means Handle Bars)
            contentCSS: true, // For HBS   
            input1 : req.body.input1,
            input2 : req.body.input2,
            input3 : req.body.input3
    });
});


module.exports = router;