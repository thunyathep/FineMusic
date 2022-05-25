    const   express       = require("express"),
            app           = express(),
            bodyParser    = require("body-parser"),
            mongoose      = require("mongoose"),
            passport      = require("passport"),
            localStrategy = require("passport-local"),
            flash         = require("connect-flash"),  
            seedDB        = require('./seeds'),
            User          = require("./models/user");

    const indexRoutes = require('./routes/index');
    const middlewareObj = require('./middleware');


    mongoose.connect("mongodb://localhost/FineMusic");

    app.set("view engine","ejs");
    app.use(express.static("./public"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(flash());
    // seedDB();

    app.use(require('express-session')({
        secret: 'secret word',
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new localStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    // app.use(function(req, res, next){
    //     res.locals.currentUser = req.user;
    //     next();
    // })
   

    app.use(function(req, res, next){
        res.locals.currentUser = req.user;
        res.locals.error = req.flash('error');
        res.locals.success = req.flash('success');
        next();
    });


    app.use('/', indexRoutes);

    app.get("/library",middlewareObj.isLoggedIn,function(req, res){
        res.render("library.ejs");
    });


    app.listen(3000, function(){
        console.log("Activated")
    });