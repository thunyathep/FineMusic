const { log } = require('console');
const middlewareObj = require('../middleware');

    const   express = require('express'),                   
            router = express.Router(),
            User = require('../models/user'),
            Music = require('../models/music'),
            middleware = require('../middleware'),
            multer  = require('multer'),
            path    = require('path'),
            storage = multer.diskStorage({
                        destination: function(req, file, callback){
                            callback(null,'./public/upload/');
                        },
                        filename: function(req, file, callback){
                            callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
                        }
            }),
            imageFilter = function(req, file, callback){
                if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                    return callback(new Error('Only jpg, jpeg, png and gif.'), false);
                }
                callback(null, true);
            },
            upload = multer({storage: storage, fileFilter: imageFilter}),
            passport = require('passport');

    router.get("/",function(req, res){
        Music.find({}, function(err, allMusic){
            if(err){
                console.log(err);
            }else{
                 res.render("landing.ejs", {Music: allMusic});
            }
        });      
    });

    router.get('/search/:word',function(req, res){
            res.render('search.ejs');
    });

    router.post('/search',function(req,res){
        let searchword = req.body.word;
        Music.find({music:{$regex : searchword,$options : 'i'}}).exec(function(err, allSearch){
            if(err){
                console.log(err);
                return res.redirect('/');
            }else{
                res.render('search.ejs', {Music : allSearch});
            }
        })
        // res.redirect('/search/'+req.body.word);
    });

    router.get('/favorite', middlewareObj.isLoggedIn ,function(req, res){
        res.render('favorite.ejs');
    });

    router.get("/login",function(req, res){
        res.render("login.ejs");
    });

    router.post('/login', passport.authenticate('local', 
        {
            successRedirect: '/',
            failureRedirect: '/login',
            successFlash : true,
            failureFlash : true,
            successFlash : 'Successfully login',
            failureFlash : 'Invalid email or password'
            

        }), function(req, res){
        });


        router.get('/logout', function(req, res){
            req.logout();
            res.redirect('/');
        })


    router.get("/signup",function(req, res){
        res.render("signup.ejs");
    });

        router.post("/signup", upload.single('profileImage'), function(req,res){
        req.body.profileImage = '/upload/'+req.file.filename;
        let newUser = new User({email: req.body.email,
                                username: req.body.username,
                                profileImage: req.body.profileImage
        });
        User.register(newUser, req.body.password, function(err, user){
            if(err){
                req.flash('error',err.message);
                console.log(err);
                return res.redirect('/signup');
            }else{
                passport.authenticate('local')(req, res, function(){
                req.flash('success',user.username + ', Welcome to FineMusic');
                res.redirect('/')  ;;  
                })
            }
        });
    });

    module.exports = router;