const mongoose = require('mongoose');
const Question = require('./Question');
const Answer = require('./Answer');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    token: String,
    age: mongoose.Types.Decimal128,
    name: String,

    questionsAnswers: [ {type: mongoose.Schema.Types.ObjectId, ref: 'QuestionsAnswers'}]


})

module.exports = mongoose.model('User', schema);