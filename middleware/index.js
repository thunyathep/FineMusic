const   User = require('../models/user');

const middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res ,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = middlewareObj;