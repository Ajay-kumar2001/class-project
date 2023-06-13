let prod=require("../models/products")
let User=require("../models/User")
const multer  = require('multer')
let fs=require('fs')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './pimages')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + 
      Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+
      file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })

  let isadm=async (req,res,next)=>{
    let data=await User.findById(req.headers.usid)
    console.log(data)
    if(data.role==101)
    {
        next()
    }
    else{
        res.json({"msg":"invalid user"})
    }
}

let addproduct=(req,res)=>{
  console.log(req.body)
    let _id=req.body.pid
    let pname=req.body.pname
    let ptype=req.body.ptype
    let price=req.body.price
    let pimgname=req.file.filename
    console.log(req.file)
    let pimg=fs.readFileSync('./pimages/'+pimgname)
    let pdata=new prod({'_id':_id,'pname':pname,'ptype':ptype,
    'price':price,'pimgname':pimgname,'pimg':pimg})
    pdata.save().then(()=>{
        res.send("product added")
    }).catch((er)=>{
        res.send(er)
    })
    
}
let getprod=async(req,res)=>{
  try{
    let data=await prod.find()
    res.status(200)
    res.json(data)

  }
  catch(er)
  {
    res.status(404)
    res.send({"msg":"error in gettting prod"})
  }

}

module.exports={upload,addproduct,isadm,getprod}