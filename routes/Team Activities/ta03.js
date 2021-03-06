//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    getItem((err, data) => {
        if(err) {
            console.log('Could not read file.')
            console.log(err);
            res.end();
        } else{   
            const itemsData = JSON.parse(data);
            console.log(itemsData);
            res.render('pages/ta03', { 
                title: 'Team Activity 03', 
                path: '/ta03', // For pug, EJS 
                activeTA03: true, // For HBS
                contentCSS: true, // For HBS
                itemsData: itemsData, 
        });
    }
   });
});
module.exports = router;
const fs = require('fs');
const path = require('path');


function getItem(callBack){
    fs.readFile(path.join(__dirname, 'items.json'), callBack);
}

