let mongoose=require('mongoose')
let prodSch=new mongoose.Schema({
    _id:Number,
    pname:String,
    ptype:String,
    price:Number,
    pimgname:String,
    pimg:Buffer
})

module.exports=mongoose.model('prod',prodSch)