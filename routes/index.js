const home=require("../controllers/home");

const express = require("express");

const router=express.Router();

router.get("/",home.home);

router.use("/user",require("./signup"))

module.exports=router;