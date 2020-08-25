const express=require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose=require("mongoose");
const db=require("./config/mongoose");
const port =8008;
const path = require('path');
const cookieParser = require('cookie-parser');
const passport=require('passport');
const session=require('express-session');
const passportLocal=require("./config/passport")
const MongoStore = require('connect-mongo')(session);

const router = require('./routes');


const app=express();

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));




app.use(expressLayouts);


app.set("layout extractStyles","true");
app.set("layout extractScript","true" );
app.use(cookieParser())


app.use(express.urlencoded());

app.use(express.static("assets"));

app.use(session({
    name:"user_id",
    secret:'blahblahblahblahblah',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*10)
    },
    // store:new MongoStore({
    //     mongooseConnection:db,
    //     autoRemove:"disabled"
    // },
    // function(err){
    //     console.log(" no error || "||err);
    // })
    
})
);
app.use(passport.initialize());
app.use(passport.session())
app.use(passport.setAuthUser);
app.use("/",router);

app.listen(port,function(err){
    if(err){
        console.log("err in express");
   }
   console.log("Express listening on port "+port);
});


