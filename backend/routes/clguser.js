const router=require("express").Router();
const College=require("../model/college");


router.post("/clgsignup",async function(req,res){
    const{clgname,clgemail,address,img,desc}=req.body;
    const collegename=clgname.toLowerCase()
    const user= await College.findOne({clgname:collegename});
    if(user){
        res.status(401).json("alreadyexist")
    }
    else{
        const collegename=clgname.toLowerCase()
         await new College({
            clgname:collegename,
            clgemail:clgemail,
            address:address,
            img:img,
            desc:desc
        }).save()
        res.status(201).json("saved");

    }
})

router.get("/community",async function(req,res){
    try{
        const Allcollege=await College.find()
        res.status(200).json(Allcollege)
    }catch(err){
        console.log(err)
    }
})

router.get("/getby",async function(req,res){
    var college=req.query.college;
    try{
       var college=await College.find({clgname:college});
       res.status(201).json(college);
    }
    catch(err){
       res.status(401).json(err);
    }
    
})
module.exports=router