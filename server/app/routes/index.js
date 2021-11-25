var api = require('../api');

module.exports = function(app) {

    app.route('/').get(api.firstPage);

    app.get('/word', api.getWord);
    //app.route('/word').get(api.getWord);

    app.get('/user', function(req, res){
        console.log("Login: " + JSON.stringify(req.headers.username))
    });
    //app.route('/user/:').get(api.getUser);
    
    app.post('/user', function(req, res){
        console.log("Sign up: " + req.headers.userName)
        console.log(req.headers.userPassword)
    })

};
