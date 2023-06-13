import axios from "axios"
import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import Gcon from "./Gcon"
let Login=()=>{
  let navigate=useNavigate()
  let ucre=useContext(Gcon)
    let [data,setData]=useState({"_id":"","password":""})
    let update=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let loginapp=async()=>{
  
        let res=await axios.post("http://localhost:5000/login",data)
      console.log(res.data)
      if(res.data.token==undefined)
      {
        console.log("login fail")
      }
      else{
        let data={}
        data={"token":res.data.token,"islogin":true,"userid":res.data.uid}
        if(res.data.role==101)
        {
          data={...data,"isadmin":true}
        }
        else{
          data={...data,"isuser":true}
        }
        ucre.upcred(data)
        navigate("/")
      }
    }
    return(<div>
        <input type="text" name="_id" onChange={(e)=>update(e)} placeholder="eneter id"/>
        <input type="password" name="password"  onChange={(e)=>update(e)} placeholder="enter password"/>
        <button onClick={loginapp}>Login</button>
    </div>)
}
export default Login