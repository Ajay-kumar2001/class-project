let mongoose=require('mongoose')
let csch=new mongoose.Schema({
    _id:String,
    userid:String,
    pid:Number,
    pname:String,
    ptype:String,
    price:Number,
    qty:{
        type:Number,
    default:1},
    pimag:String
})
module.exports=mongoose.model("pcart",csch)