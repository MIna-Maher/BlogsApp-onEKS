const express = require('express');
require('dotenv').config();


//create express app
const app = express();
// we will use ejs as view engine.
app.set('view engine', 'ejs');  //by default look for ejs files in views dir
app.listen("3000", console.log('The app is running!!'));
//app.use(morgan('dev'));
//use express midlware & static files"pubish any files to the browser within public folder.
app.use(express.static('public/'));
//the below midlware to take the data from FE and pass it to the request object.
app.use(express.urlencoded({ extended: true}));
app.get('/', (req, res) => {
   /* const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    //res.sendFile('./views/index.html', {root: __dirname}); 
    // send has 2 benfits: automatically set the header and send the status for us.
    res.render('index', {title: 'Home', blogs }); */
    res.redirect('/blogs');
});
//blog routes
///////////////////////////////////    
//////////////////////////
// render

//redirects

//404 status : not found//
//in express we use : use and must be exists on the last
app.use((req, res) => {
    res.status(404).render('404', {title: "Error!!"});
})
//the code run from top to buttom.404 page has to be at the buttom 