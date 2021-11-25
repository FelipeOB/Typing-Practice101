const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
    userId: String,
    totalWords: Number,
    wrongWords: Number,
    gameTimeMiliseconds: Number,
    wordsPerMinute: Number
});

module.exports = mongoose.model('Practice', practiceSchema);