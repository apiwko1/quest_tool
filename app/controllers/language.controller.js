// const {db} = require('../models/Language');
const Language = require('./../models/Language');

function languageList(cb){
    Language.find().lean().exec((err, languages)=>{
        if(err){
            cb(err);
        }else{
            cb(null, languages);
        }
    })

} //languageList(cb)

module.exports={
    list: languageList
}