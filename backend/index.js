let express=require("express")
let cors=require("cors")
let mongoose=require("mongoose")
let app=express()
app.use(cors())
app.use(express.json())
let bodyParser=require("body-parser")                                        
app.use(bodyParser.urlencoded({extended:true}))
let userRoute=require('./routes/userroutes')
app.use('',userRoute)
app.use("/images",express.static('pimages'))

mongoose.connect("mongodb://127.0.0.1:27017/prodapp").then(()=>{
    console.log("ok")
}).catch((er)=>console.log(er))



app.listen(5000)