const router=require("express").Router();
const User=require("../model/user");


router.post("/signup", async function(req,res){
    const{username,email,password}=req.body
      const newUser= new User({
        username:username,
        email:email,
        password:password
      })

      try{
         await newUser.save();
        res.status(201).json("saved user")
      }
      catch(err){
        res.status(401).json("notsaved")
      }
});

router.post("/login",async function(req,res){
  const{email,password}=req.body
    const user= await User.findOne({email:email});
    if(user){
        if(user.password===password){
            res.json("correct user")
        }
        else{
            res.status(201).json("Wrongpassword") 
        }
    }
    else{
        res.status(201).json("Wrongemail") 
    }
})

module.exports=router
