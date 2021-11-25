var api  = {}

api.firstPage = function(req, res) {
    res.render();
};

api.getWord = function(req, res) {
    const WordModel = require('../models/WordSchema.js');
    try{
        var randomNumber = Math.floor(Math.random() * 176141)

        WordModel.findOne({'wordId': randomNumber}, function (err, word){
            if(err) return err;
            res.json(word);
        });
    }catch(err){
        res.json(err);
    }
};

api.getUser = function(req, res) {
    const UserModel = require('../models/UserSchema.js');
    try{
        UserModel.findOne({'userName': req[0]}, function(err, user){
            if(err) return err;
            res.json(user);
        });
    }catch(err) {
        res.json(err);
    }
};

module.exports = api;