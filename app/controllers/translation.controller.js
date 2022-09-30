
const Translation = require('../models/Translation');

function translationList(cb){
    Translation.find().populate('language').lean().exec((err, translations)=>{
        if(err){
            cb(err);
        }else{
            cb(null, translations);
        }
    })
}

module.exports={
    list: translationList
}