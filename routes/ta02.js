//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

// Ta02's Requirement 01 
const userNameArray = ['Amy','Blair','Clara'];
let error;

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        users: userNameArray,
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        error: error
    });
    error ='';
});

// Ta02's Requirement 02
router.post('/addUser',(req, res, next) => {
    const newUser = req.body.newUser; /*'req.body.newUser' is from line 57:' .use(bodyParser({extended: false}))' from index.js file*/
    i = userNameArray.indexOf(newUser); 
    if(i == -1){/*If a user is not in the database, we want to add the user into the database */
        userNameArray.push(newUser); 
    }
    else{/*If a user has alreay in the userNameArray, we want to display the error */
        error ="The user you input is already in the database.";
    }
    res.redirect("/ta02");       
});

// Ta02's Requirement 03
router.post('/removeUser',(req, res, next) => { 
    const removeUser = req.body.remUser;  /*This is the line from Brother Birch that I do not understand*/ 
    const index = userNameArray.indexOf(removeUser); 
    if(index !== -1){/*If a user is in the database, we want to remove the user into the database */
        userNameArray.splice(index, 1); 
    }
    else{/*If a user is not in the database, we want to display the error. */
        error ="The user you input does not exist in the database.";
    }
  
    res.redirect('/ta02');
});

module.exports = router;