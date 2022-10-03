
const User = require('../models/User');


function userList(req, res, err) {
    User.find().lean().exec((err, users) => {
        console.log(users);
        for (const user of users) {
            // user.questions_answers.populate();
            user.populate('questionsAnswers');
            console.log(user);
            for(const qa of user.questionsAnswers){
                // qa.populate();
                // console.log(qa);
            }
        }
        if (err) {
            res.send(err);
        } else {
            // res.render('user', user);
        }
    })
}

function userGet(id, cb) {
    User.findById(id).exec(function (err, user) {
        if (err) {
            cb(err)
        } else {
            cb(null, user)
        }
    })
}

module.exports = {
    list: userList,
    get: userGet
}