const mongoose = require('mongoose');
const Translation = require('./Translation');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    description: String, 
    value: mongoose.Types.Decimal128, 
    order: mongoose.Types.Decimal128, 
    translations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Translation' }]
})

module.exports = mongoose.model('Answer', schema);