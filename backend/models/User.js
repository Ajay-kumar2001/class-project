let mongoose=require("mongoose")
let useSche=new mongoose.Schema({
    _id:String,
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:101
    }
})
module.exports=mongoose.model("user",useSche)