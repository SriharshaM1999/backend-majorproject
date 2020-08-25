const passport=require("passport")

const localStartegy=require("passport-local").Strategy;


const User = require("../model/user");


passport.use(new localStartegy({
    usernameField:"email"
},
function(email,password,done) {
User.findOne({email:email},function(err,user){
    if(err){ return done(err);}
    if(!user ||user.password!=password){ return done(null,false)}
    return done(null,user);
})
}
));

passport.serializeUser(function(user,done){
    return done(null,user.id);
})

passport.deserializeUser(function(userId,done){
        User.findById(userId,function(err,user){
                    if(err){ return done(err);}
                    return done(null,user);
        })
})


passport.checkAuthentication=function(req,res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect("/user/signin");
}

passport.setAuthUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}

module.exports=passport;

