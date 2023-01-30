const express=require("express");
const mongoose=require("mongoose");
const userrouter=require("./routes/user");
const clguserrouter=require("./routes/clguser");
const cors=require("cors")

const app=express();

mongoose.connect("mongodb+srv://mighty:qwertyuiop@cluster0.ngqidrs.mongodb.net/Community?retryWrites=true&w=majority")
.then(function(){console.log("is connected")}).catch(function(err){
    console.log(err)
})

app.use(cors())
app.use(express.json());

app.use(userrouter);
app.use(clguserrouter)


app.listen(5500,function(){
    console.log("successfully connected");
})