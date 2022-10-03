
const Answer = require('../models/Answer');


function answerList(cb){
    Answer.find().exec((err, answers)=>{
        if(err){
            cb(err);
        }else{
            cb(null, answers);
        }
    })
}

module.exports={
    list: answerList
}