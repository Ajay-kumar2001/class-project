import { useContext, useEffect, useState } from "react"
import Gcon from "./Gcon"
import axios from "axios"
import Cartitem from "./Cartitem"


let Cart=()=>{
    let ucred=useContext(Gcon)
    let [data,setData]=useState([])
    let [x,setX]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost:5000/getcart",{headers:{Authorization:ucred.token,usid:ucred.userid}}).then((res)=>{
            setData(res.data)
        })
    },[x])
    let fun=(data)=>{
        setX(data)
    }
    return(<div>
        {data.map((item,i)=><Cartitem data={item} fun={fun} key={i}/>)}
    </div>)
}
export default Cart