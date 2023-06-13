import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
let Register=()=>{
    let navigate=useNavigate()
    let [resp,setResp]=useState('')
    let [data,setData]=useState({"name":"","_id":"","email":"",
    "password":"","phno":0})
    let upState=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
     
    }
    let saveData=async()=>{
        console.log(data)
        let res=await axios.post("http://localhost:5000/adduser",data)
      setResp(res.data.msg)
      navigate("/login")
    }
    return(<div>
       <div>
        <input type="text" onChange={(e)=>upState(e)} name="_id"/>
        <input type="text" onChange={(e)=>upState(e)} name="name"/>
        
        <input type="text" onChange={(e)=>upState(e)} name="email"/>
        <input type="password" onChange={(e)=>upState(e)} name="password"/>
        <input type="text" onChange={(e)=>upState(e)} name="phno"/>
        <button onClick={saveData}>signup</button>
       </div>
    </div>)
}
export default Register