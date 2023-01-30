const mongoose=require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    studentname: {
      type: String,
      required: true,
      unique: true,
    },
    techskill: {
      type: String,
      required: true,
      unique: true,
    },
    artskill:{
        type: String,
        required: true,
        unique: true,
    },
    type:{
        type: String,
        required: true,
        unique: true,
    },
    admin:{
        type:Boolean,
        default:true
    },
    password:{
      type: String,
      required: true,
    }
}
);

module.exports= mongoose.model("Student", studentSchema);