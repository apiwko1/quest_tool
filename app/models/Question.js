const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    description: String, 
    order: mongoose.Types.Decimal128, 
    translations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Translation' }]    
})

module.exports = mongoose.model('Question', schema);