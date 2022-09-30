const mongoose = require('mongoose');
// const Language = require('./Language');
mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    language: {
        type: mongoose.Types.ObjectId,
        ref: 'Language'
    },
    description: String,
    content: String
})

module.exports = mongoose.model('Translation', schema);