const express = require("express");
const signUp=require("../controllers/signup")
const passport=require('passport');

const passportLocal=require("../config/passport")


const router=express.Router();

router.get("/signup",signUp.signup);
router.get("/signin",signUp.signin);

router.post("/login",signUp.login);
router.post('/authenticate', passport.authenticate(
    'local',
    {failureRedirect: '/user/signin'},
), signUp.authenticate);

module.exports=router; 