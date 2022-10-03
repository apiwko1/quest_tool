const mongoose = require('mongoose');
const Question = require('./Question');
const Answer = require('./Answer');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({

    questionId: { type: mongoose.Schema.Types.ObjectId },
    answerId: { type: mongoose.Schema.Types.ObjectId }

})

module.exports = mongoose.model('QuestionsAnswers', schema);