const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/Api");

const db=mongoose.connection;


db.on("error",console.error.bind("error in connecting to the mongobd"));

db.once("open",function(){
    console.log('connected to the data base');
})