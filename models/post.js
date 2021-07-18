//require mongoose
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        defuault: Date.now
    }


});

module.exports = mongoose.model('Post', PostSchema);