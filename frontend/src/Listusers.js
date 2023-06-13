import axios from "axios"
import { useEffect,useContext, useState } from "react"
import Gcon from "./Gcon"

let Listusers=()=>{
    let [data,setData]=useState([])
    let ucred=useContext(Gcon)
    useEffect(()=>{
        axios.get("http://localhost:5000/getusers",{headers:{Authorization:ucred.token,usid:ucred.userid}}).then((res)=>{
            let x=res.data
        setData([...data,...x])
        console.log(data)
        })
    },[])
    return(<table border="1">
        <tr><td>uid</td><td>name</td><td>email</td><td>phno</td></tr>
        {
           data.map((item)=>{
                return (<tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phno}</td>
                </tr>)

            })
        }
        </table>
       
    )
}
export default Listusers