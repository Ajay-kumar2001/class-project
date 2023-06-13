import "./Prod.css"
import Gcon from "./Gcon"
import { useContext } from "react"
import axios from "axios"
let Prod=(props)=>{
    let gdata=useContext(Gcon)
    let data=props.data
    let imgurl="http://localhost:5000/images/"+data.pimgname
   let addproduct=(data)=>{
    let cd={"pid":data._id,"pname":data.pname,"price":data.price,"ptype":data.ptype,"pimag":data.pimgname,"userid":gdata.userid}
    axios.post("http://localhost:5000/addcart",cd,{headers:{Authorization:gdata.token}})
}
    return(
        <div>
            <h1>pname:{data.pname}</h1>
            <img src={imgurl} alt="imagtext"/>
            <p>Price:{data.price}</p>
            <button onClick={()=>addproduct(data)}>Add cart</button>
        </div>

    )
}
export default Prod