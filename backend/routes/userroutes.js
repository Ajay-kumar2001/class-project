let express=require('express')
const {addCart,getCart, delitem} = require('../controlers/Cartcon')
const { upload, addproduct, isadm, getprod } = require('../controlers/prodcon')
let {addUser,userLogin,getUsers,Auth}=require('../controlers/usercon')

let route=express.Router()

route.post('/adduser',addUser)
route.post('/login',userLogin)
route.get('/getusers',Auth,isadm,getUsers)
route.post('/addprod',Auth,isadm,upload.single('pimag'),addproduct)
route.get("/getprod",getprod)
route.post("/addcart",Auth,addCart)
route.get("/getcart",Auth,getCart)
route.delete("/delcart",Auth,delitem)
module.exports=route