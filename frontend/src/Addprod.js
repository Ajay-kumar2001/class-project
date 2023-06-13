import { useContext, useState } from "react"
import Gcon from "./Gcon"
import { useNavigate } from "react-router-dom"
import axios from "axios"

let Addprod=()=>{
    let navigate=useNavigate()
    let ucred=useContext(Gcon)
    let [data,setData]=useState({})
    let [filedata,setFiledata]=useState()
    let updata=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let upfile=(e)=>{
        setFiledata(e.target.files[0])
    }
    let addprod=()=>{
        let fd=new FormData()
        fd.append("pimag",filedata)
        fd.append("pid",data.pid)
        fd.append("pname",data.pname)
        fd.append("ptype",data.ptype)
        fd.append("price",data.price)
        console.log(fd)
        axios.post("http://localhost:5000/addprod",fd,{headers:{Authorization:ucred.token,usid:ucred.userid,'Content-Type':'multipart/form-data'}}).then((res)=>{
          navigate("/")
        })
    }
    return(<div>
        <input type="text" name="pid" onChange={(e)=>updata(e)}/>
        <input type="text" name="pname" onChange={(e)=>updata(e)}/>
        <input type="text" name="ptype" onChange={(e)=>updata(e)}/>
        <input type="text" name="price" onChange={(e)=>updata(e)}/>
        <input type="file" name="pimag" onChange={(e)=>upfile(e)}/>
        <button onClick={addprod}>addproduct</button>
    
    </div>)
}
export default Addprod