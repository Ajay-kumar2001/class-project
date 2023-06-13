import axios from "axios"
import { useContext } from "react"
import Gcon from "./Gcon"
let Cartitem=(props)=>{
    let gdata=useContext(Gcon)
    let data=props.data
    let imgurl="http://localhost:5000/images/"+data.pimag
    let delproduct=(data)=>{
    
        axios.delete(`http://localhost:5000/delcart?_id=${data._id}`,{headers:{Authorization:gdata.token}})
        props.fun(data._id)
    }
    return(
        <div>
            <h1>pname:{data.pname}</h1>
            <img src={imgurl} alt="imagtext"/>
            <p>Price:{data.price}</p>
            <p>qnty:{data.qty}</p>
            <button onClick={()=>delproduct(data)}>del cart</button>
        </div>
    )
}
export default Cartitem;