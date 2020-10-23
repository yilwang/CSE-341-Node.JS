/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const cors = require('cors') // Place this with other requires (like 'path' and 'express')

const corsOptions = {
    origin: "https://rocky-forest-57852.herokuapp.com/",
    optionsSuccessStatus: 200
};


const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://stupidgoose:123@cluster0.he39y.mongodb.net/Shop?retryWrites=true&w=majority";

const app = express();
app.use(cors(corsOptions));
// Route setup. You can implement more in the future!


const ta01Routes = require('./routes/ta01');
const pr01Routes = require('./routes/pro01');
const ta02Routes = require('./routes/ta02');
const pr02Routes = require('./routes/pro02');
const ta03Routes = require('./routes/ta03'); 
const pr03Routes = require('./routes/pro03');
const ta04Routes = require('./routes/ta04'); 
const pr04Routes = require('./routes/pro04');
const ta05Routes = require('./routes/ta05'); 
const pr05Routes = require('./routes/pro05');
const ta06Routes = require('./routes/ta06'); 
const pr06Routes = require('./routes/pro06');


app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   // For view engine as Pug
   //.set('view engine', 'pug') // For view engine as PUG. 
   // For view engine as hbs (Handlebars)
   //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
   //.set('view engine', 'hbs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/ta01', ta01Routes)
   .use('/pr01', pr01Routes)
   .use('/ta02', ta02Routes) 
   .use('/pr02', pr02Routes)
   .use('/ta03', ta03Routes)
   .use('/pr03', pr03Routes) 
   .use('/ta04', ta04Routes)
   .use('/pr04', pr04Routes)
   .use('/ta05', ta05Routes)
   .use('/pr05', pr05Routes)
   .use('/ta06', ta06Routes)
   .use('/pr06', pr06Routes)
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })

   mongoose
   .connect(
     MONGODB_URL, options
   )
   .then(result => {
     // This should be your user handling code implement following the course videos
     app.listen(PORT);
   })
   .catch(err => {
     console.log(err);
   });
