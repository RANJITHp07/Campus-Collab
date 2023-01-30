const mongoose=require("mongoose");
const collegeSchema = new mongoose.Schema(
  {
    clgname: {
      type: String,
      required: true,
      unique: true,
    },
    clgemail: {
      type: String,
      required: true,
      unique: true,
    },
    address:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:Array,
        required:true,
    },
    desc:{
        type:String,
        required:true
    }
    
}
);

module.exports= mongoose.model("College", collegeSchema);