const path = require('path');


const express  = require ( 'express');
const app = express();
app.use(express.static('public'));

const hbs = require( 'express-handlebars');

app.engine('hbs', hbs.engine({
    defaultLayout: 'main', 
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

const language = require('./app/controllers/language.controller');

 const translation = require('./app/controllers/translation.controller');


app.get('/', (req, res) => {
    language.list((err, languages)=>{
        console.log(languages);
    });
    translation.list((err, translations)=>{
        console.log(translations);
    })
    
    res.render('home');
});



app.listen(8080, ()=>{
    console.log('start ');
})