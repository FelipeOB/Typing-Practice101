var mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    wordId: Number,
    wordContent: String
});

module.exports = mongoose.model('Word', wordSchema);