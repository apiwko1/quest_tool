const path = require('path');


const express = require('express');
const app = express();
app.use(express.static('public'));

const hbs = require('express-handlebars');

app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));



const translation = require('./app/controllers/translation.controller');
const answer = require('./app/controllers/answer.controller');
const userController = require('./app/controllers/user.controller');


// app.get('/', (req, res) => {

//     translation.list((err, translations)=>{
//         if(err){
//             console.log(err);
//         }else{
//             // console.log(translations);
//         }

//     })
//     answer.list((err, answers)=>{
//         if(err){
//             console.log(err);
//         }else{
//             //  console.log(answers);
//         }

//     })

//     user.list((err, users)=>{
//         if(err){

//         }else{
//             console.log(users)
//         }
//     })

//     res.render('home');
// });

app.get('/user/:id', (req, res) => {
    user.get(req.params.id, function (err, user) {
        if (err) {
            // res.send(err);
        } else {
            // res.render('user', user);
            console.log(user);
        }
    })
});


app.get('/user', userController.list)

app.listen(8080, () => {
    console.log('start ');
})