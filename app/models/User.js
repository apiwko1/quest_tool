const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    token: mongoose.Types.String,
    age: mongoose.Types.Decimal128,
    country_id: {
        type: mongoose.Types.ObjectId,
        reference: 'Country'
    } ,
    questions_answers: mongoose.Types.Array


})

module.exports = mongoose.model('User', schema);