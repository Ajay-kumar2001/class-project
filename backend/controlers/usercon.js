let bcrypt=require('bcrypt')
let User=require('../models/User')
let jwt=require('jsonwebtoken')
let addUser=async(req,res)=>{
    let data=req.body

   
    data.password=await bcrypt.hash(data.password,10)
    let urec=await User.find({"email":req.body.email})
    let urec1=await User.find({"_id":req.body._id})
    if(urec.length==0 && urec1.length==0) 
    { 
    let record=new User(data)
        record.save()
        res.json({'msg':'ok'})
       
    }
    else{
        res.json({"msg":"email and uid should be unique"})
    }

}
let userLogin=async(req,res)=>{
    try{
    let data=await User.findById(req.body._id)
    if(data)
    {
       let result= await bcrypt.compare(req.body.password,data.password)
        if(result)
        {
            let token=jwt.sign({"_id":req.body._id},'scode')
            res.json({token,"uid":req.body._id,"role":data.role})
        }
        else{
            res.json({"msg":"check password"})
        }
    }
    else{
        res.json({"msg":"check userid"})
    }
    }
    catch(er)
    {
        res.json({"msg":"error in getting records"})
    }
}

let getUsers= async(req,res)=>{
    try{
       let data=await User.find({"role":102})
       res.json(data)
    }
    catch(err)
    {
res.json({"msg":"error"})
    }
    
}
let Auth=(req,res,next)=>{
    try{

 
        let x=req.headers.authorization
        var decoded = jwt.verify(x, 'scode');
        console.log("token is ok")
        next()
        }
        catch(er)
        {
            res.send(er)
        }

}

module.exports={addUser,userLogin,getUsers,Auth}