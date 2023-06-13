let Cart=require('../models/Cart')
let uuid=require("uuid")

let addCart=async(req,res)=>{
    let uid=uuid.v4()
    let data={...req.body,"_id":uid}
    let x=await Cart.find({"userid":data.userid,"pid":data.pid})
    if(x.length==0)
    {
    let cdata=new Cart(data)
    cdata.save().then(()=>{
        res.json({"mag":"ok"})
    })
}

}
let getCart=async(req,res)=>{
    
    let data=await Cart.find({"userid":req.headers.usid})
    
   
    res.json(data)
}
let delitem=async(req,res)=>

{
    console.log(req.query)
    await Cart.findByIdAndDelete(req.query._id)
   
    console.log("del ok")
    res.send("ok")
}

module.exports={addCart,getCart,delitem}