// const User=require("../model/user");

const User = require("../model/user");


module.exports.signup= function(req,res){
   return res.render("signup");
}


module.exports.signin= function(req,res){
   return res.render("signin");
}


module.exports.login=function(req,res){
   console.log(req.body);
   User.findOne({email:req.body.email},function(err,user){
     
      if(err){
       

            console.log("error in creating the user name");
            return res.redirect("back");

         }
         else if(user){
          
            return res.redirect("/users/signin")
         }
         else{
            

            User.create({ 
               email:req.body.email,
               name:req.body.name,
               password:req.body.password
            },function(err,user){
               if(err){
                  console.log("User is not created");
               }
               else{
                 
                  return res.redirect("/user/signin");
               }
            })
         }
   })
  
}

module.exports.authenticate=function(req,res){
 //  console.log(req.body);
return res.redirect("/");


  
}

