const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    
})

module.exports = mongoose.model('Answer', schema);